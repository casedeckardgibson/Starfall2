/* ============================================================
   STARFALL — engine
   Scene scripts live in js/scenes/*.js and register into
   window.STARFALL_SCENES. This file merges them and runs the VN.
   ============================================================ */

(() => {
  "use strict";

  // ---------- Merge all registered scenes ----------
  const SCRIPT = {};
  if (window.STARFALL_SCENES) {
    Object.keys(window.STARFALL_SCENES).forEach((key) => {
      Object.assign(SCRIPT, window.STARFALL_SCENES[key]);
    });
  }

  // ---------- State ----------
  const state = {
    node: null,
    stats: { ...STARTING_STATS },
    romance: { ...STARTING_ROMANCE },
    flags: { ...STARTING_FLAGS },
    history: [],
    log: [],
    seen: new Set(),
    auto: false,
    skip: false,
    skipToChoice: false,
    typing: false,
    choiceOpen: false,
    waiting: false,
    currentBg: null,
    bgToggle: false,
    chars: { left: null, center: null, right: null },
    settings: { ...DEFAULT_SETTINGS },
    containment: 61,
    containmentVisible: false,
    uiHidden: false,
    pendingContinue: null,
    pendingHub: false,
    pendingWarp: null,
    decisions: [],
    _pendingText: ""
  };

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const boot = $("boot-screen");
  const title = $("title-screen");
  const game = $("game-screen");
  const ending = $("ending-screen");
  const stage = $("stage");
  const bgA = $("bg-a");
  const bgB = $("bg-b");
  const dialogueEl = $("dialogue");
  const nameplate = $("nameplate");
  const continueHint = $("continue-hint");
  const choicesEl = $("choices");
  const locationTag = $("location-tag");
  const containmentEl = $("containment");
  const containmentFill = $("containment-fill");
  const statsFlyout = $("stats-flyout");
  const statsBody = $("stats-body");
  const textbox = $("textbox");
  const fadeBlack = $("fade-black");
  const flashWhite = $("flash-white");

  // ---------- Settings ----------
  function loadSettings() {
    try {
      const raw = localStorage.getItem(GAME.settingsKey);
      if (raw) Object.assign(state.settings, JSON.parse(raw));
    } catch (_) {}
    applySettings();
  }

  function saveSettings() {
    localStorage.setItem(GAME.settingsKey, JSON.stringify(state.settings));
  }

  function applySettings() {
    document.documentElement.style.setProperty("--text-size", state.settings.fontSize + "rem");
    document.documentElement.style.setProperty("--box-opacity", String(state.settings.boxOpacity / 100));
    $("set-text").value = state.settings.textSpeed;
    $("set-auto").value = state.settings.autoSpeed;
    $("set-volume").value = state.settings.volume;
    $("set-opacity").value = state.settings.boxOpacity;
    $("set-font").value = state.settings.fontSize;
    $("set-skip").checked = state.settings.skipUnread;
  }

  // ---------- Boot ----------
  async function bootSequence() {
    const fill = $("boot-fill");
    for (let i = 0; i <= 100; i += 4) {
      fill.style.width = i + "%";
      await wait(18);
    }
    boot.classList.add("hidden");
    title.classList.remove("hidden");
    updateContinueButton();
  }

  function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  // ---------- Stage ----------
  function setBackground(key, instant = false) {
    const path = BACKGROUNDS[key];
    if (path === undefined) return;
    if (state.currentBg === key && !instant) return;
    state.currentBg = key;
    const next = state.bgToggle ? bgA : bgB;
    const prev = state.bgToggle ? bgB : bgA;
    state.bgToggle = !state.bgToggle;
    if (path) {
      next.style.backgroundImage = `url("${path}")`;
      next.style.backgroundColor = "";
    } else {
      next.style.backgroundImage = "none";
      next.style.backgroundColor = "#000";
    }
    if (instant) {
      next.style.transition = "none";
      prev.style.transition = "none";
    }
    next.classList.add("show");
    prev.classList.remove("show");
    if (instant) {
      void next.offsetWidth;
      next.style.transition = "";
      prev.style.transition = "";
    }
  }

  function clearSlots() {
    ["left", "center", "right"].forEach((pos) => {
      const slot = $(`slot-${pos}`);
      slot.classList.remove("show", "focus", "exit");
      const img = slot.querySelector("img");
      if (img) {
        img.removeAttribute("src");
        img.classList.remove("crossfade-out", "crossfade-in");
        img.style.opacity = "";
        img.style.background = "";
        img.style.width = "";
        img.style.height = "";
      }
      state.chars[pos] = null;
    });
  }

  /** Hard reset stage after ending screen / time warp */
  function resetStageVisuals() {
    if (typeof clearScreenFx === "function") clearScreenFx();
    if (typeof hideCg === "function") hideCg();
    hideContainment();
    setAlert(false);
    setFlashback(false);
    clearSlots();
    state.currentBg = null;
    // Force both layers clean
    [bgA, bgB].forEach((el) => {
      el.classList.remove("show");
      el.style.backgroundImage = "none";
      el.style.backgroundColor = "#000";
    });
    state.bgToggle = false;
  }

  function applyStagePreset(stage) {
    if (!stage) return;
    if (stage.bg) setBackground(stage.bg, true);
    if (stage.location) setLocation(stage.location);
    if (stage.alert != null) setAlert(stage.alert);
    if (stage.flashback != null) setFlashback(stage.flashback);
    if (stage.chars) {
      clearSlots();
      Object.entries(stage.chars).forEach(([pos, def]) => {
        if (def) showCharacter(def.id, def.sprite, pos, def.focus !== false);
      });
    }
  }

  function showCharacter(id, spriteKey, position = "center", focus = true) {
    const char = CHARACTERS[id];
    if (!char) return;
    const path = (char.sprites && char.sprites[spriteKey || char.defaultSprite]) || "";
    const slot = $(`slot-${position}`);
    const img = slot.querySelector("img");
    const prev = state.chars[position];
    const sameChar = prev && prev.id === id;
    const spriteChanged = sameChar && prev.sprite !== spriteKey;

    slot.classList.remove("exit");

    if (path) {
      if (spriteChanged && img.src && !img.src.endsWith(path)) {
        // Expression crossfade
        img.classList.add("crossfade-out");
        const nextPath = path;
        const nextAlt = char.name;
        window.setTimeout(() => {
          img.src = nextPath;
          img.alt = nextAlt;
          img.classList.remove("crossfade-out");
          img.classList.add("crossfade-in");
          window.setTimeout(() => img.classList.remove("crossfade-in"), 340);
        }, 160);
      } else {
        img.src = path;
        img.alt = char.name;
        img.classList.remove("crossfade-out", "crossfade-in");
      }
      img.style.background = "";
      img.style.width = "";
      img.style.height = "";
    } else {
      img.removeAttribute("src");
      img.alt = char.name;
      img.style.background = "linear-gradient(180deg, transparent 10%, rgba(126,200,227,0.15) 100%)";
      img.style.width = "40%";
      img.style.height = "85%";
    }

    // Force visible; re-trigger enter animation
    slot.classList.remove("show", "exit");
    void slot.offsetWidth;
    slot.classList.add("show");
    if (img) {
      img.classList.remove("crossfade-out");
      img.style.opacity = "1";
    }

    if (focus) {
      document.querySelectorAll(".slot").forEach((s) => s.classList.remove("focus"));
      slot.classList.add("focus");
    }
    state.chars[position] = { id, sprite: spriteKey };
  }

  function hideCharacter(position) {
    const slot = $(`slot-${position}`);
    if (!slot.classList.contains("show")) {
      slot.classList.remove("focus");
      state.chars[position] = null;
      return;
    }
    slot.classList.add("exit");
    slot.classList.remove("focus");
    window.setTimeout(() => {
      slot.classList.remove("show", "exit");
      const img = slot.querySelector("img");
      if (img) {
        img.removeAttribute("src");
        img.classList.remove("crossfade-out", "crossfade-in");
      }
    }, 380);
    state.chars[position] = null;
  }

  function setLocation(text) {
    locationTag.textContent = text || "—";
  }

  function setAlert(on) {
    stage.classList.toggle("alert", !!on);
  }

  function setFlashback(on) {
    stage.classList.toggle("flashback", !!on);
  }

  function setContainment(pct) {
    if (pct == null) {
      hideContainment();
      return;
    }
    state.containment = Math.max(0, Math.min(100, Number(pct)));
    containmentFill.style.width = state.containment + "%";
    containmentEl.classList.add("show");
    state.containmentVisible = true;
  }

  function hideContainment() {
    containmentEl.classList.remove("show");
    state.containmentVisible = false;
  }

  function shake() {
    stage.classList.remove("shake");
    void stage.offsetWidth;
    stage.classList.add("shake");
  }

  function flash() {
    flashWhite.style.opacity = "1";
    flashWhite.style.transition = "none";
    requestAnimationFrame(() => {
      flashWhite.style.transition = "opacity 0.5s ease";
      flashWhite.style.opacity = "0";
    });
  }

  const FX_CLASSES = ["fx-zoom", "fx-pulse", "fx-blur", "fx-letterbox", "fx-vignette-heavy"];

  function clearScreenFx() {
    FX_CLASSES.forEach((c) => stage.classList.remove(c));
  }

  /** node.fx: "zoom" | "pulse" | "blur" | "letterbox" | "vignette" | "shake" | "flash" | array of those */
  function applyScreenFx(fx) {
    if (!fx) return;
    const list = Array.isArray(fx) ? fx : [fx];
    list.forEach((name) => {
      if (name === "shake") shake();
      else if (name === "flash") flash();
      else if (name === "zoom") stage.classList.add("fx-zoom");
      else if (name === "pulse") stage.classList.add("fx-pulse");
      else if (name === "blur") stage.classList.add("fx-blur");
      else if (name === "letterbox") stage.classList.add("fx-letterbox");
      else if (name === "vignette") stage.classList.add("fx-vignette-heavy");
    });
  }

  function showCg(key) {
    const cgLayer = $("cg-layer");
    const cgImg = $("cg-image");
    if (!cgLayer || !cgImg) return;
    const path = (typeof CGS !== "undefined" && CGS[key]) || key;
    if (!path) return;
    cgImg.src = path;
    cgImg.alt = key;
    cgLayer.classList.remove("hidden");
    requestAnimationFrame(() => cgLayer.classList.add("show"));
  }

  function hideCg() {
    const cgLayer = $("cg-layer");
    if (!cgLayer) return;
    cgLayer.classList.remove("show");
    window.setTimeout(() => {
      if (!cgLayer.classList.contains("show")) {
        cgLayer.classList.add("hidden");
        const cgImg = $("cg-image");
        if (cgImg) cgImg.removeAttribute("src");
      }
    }, 450);
  }

  function toggleTextboxView(force) {
    const hide = force != null ? force : !state.uiHidden;
    state.uiHidden = hide;
    textbox.classList.toggle("hidden-view", hide);
    choicesEl.classList.toggle("hidden-view", hide);
    const hud = $("hud");
    if (hud) hud.classList.toggle("hidden-view", hide);
  }

  // ---------- Typing ----------
  let typeTimer = null;
  let typeResolve = null;

  function stopTyping() {
    if (typeTimer) {
      clearInterval(typeTimer);
      typeTimer = null;
    }
    if (typeResolve) {
      typeResolve();
      typeResolve = null;
    }
    state.typing = false;
  }

  function typeText(text, className) {
    return new Promise((resolve) => {
      stopTyping();
      const full = text == null ? "" : String(text);
      dialogueEl.className = className || "";
      dialogueEl.textContent = "";
      state._pendingText = full;
      // Instant when skipping to choice
      if (state.skipToChoice) {
        dialogueEl.textContent = full;
        state.typing = false;
        continueHint.classList.remove("show");
        resolve();
        return;
      }
      state.typing = true;
      typeResolve = resolve;
      const speed = Math.max(4, 70 - state.settings.textSpeed);
      let i = 0;
      typeTimer = setInterval(() => {
        if (i >= full.length) {
          stopTyping();
          continueHint.classList.add("show");
          return;
        }
        dialogueEl.textContent += full[i++];
      }, speed);
    });
  }

  function finishTyping() {
    if (!state.typing) return false;
    if (state._pendingText != null) dialogueEl.textContent = state._pendingText;
    stopTyping();
    continueHint.classList.add("show");
    return true;
  }

  // ---------- Stats ----------
  function changeStat(key, delta) {
    if (!(key in state.stats)) return;
    state.stats[key] = Math.max(0, Math.min(100, state.stats[key] + delta));
  }

  function changeRomance(key, delta) {
    if (!(key in state.romance)) return;
    state.romance[key] = Math.max(0, Math.min(100, state.romance[key] + delta));
  }

  function renderStatsFlyout() {
    statsBody.innerHTML = STAT_META.map((s) => {
      const v = state.stats[s.key];
      return `<div style="margin-bottom:0.35rem">${s.label}<div class="bar" style="height:5px;background:rgba(255,255,255,.08);margin-top:0.15rem"><div style="height:100%;width:${v}%;background:linear-gradient(90deg,var(--gold),#efe0a8)"></div></div></div>`;
    }).join("");
  }

  // ---------- Log ----------
  function pushLog(who, text) {
    state.log.push({ who, text });
    if (state.log.length > 200) state.log.shift();
  }

  function renderLog() {
    $("log-list").innerHTML = state.log
      .map((l) => `<div class="log-line"><span class="who">${escapeHtml(l.who || "…")}</span><br>${escapeHtml(l.text)}</div>`)
      .join("");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------- Save / Load ----------
  function getSaves() {
    try {
      return JSON.parse(localStorage.getItem(GAME.saveKey) || "[]");
    } catch {
      return [];
    }
  }

  function writeSaves(arr) {
    localStorage.setItem(GAME.saveKey, JSON.stringify(arr));
  }

  function snapshot() {
    return {
      node: state.node,
      stats: { ...state.stats },
      romance: { ...state.romance },
      flags: { ...state.flags },
      history: [...state.history],
      log: state.log.slice(-40),
      seen: [...state.seen],
      currentBg: state.currentBg,
      chars: { ...state.chars },
      containment: state.containment,
      time: Date.now(),
      label: SCRIPT[state.node]?.saveLabel || state.node || "Unknown"
    };
  }

  function applySnapshot(snap) {
    state.node = snap.node;
    state.stats = { ...STARTING_STATS, ...snap.stats };
    state.romance = { ...STARTING_ROMANCE, ...snap.romance };
    state.flags = { ...STARTING_FLAGS, ...snap.flags };
    state.history = snap.history;
    state.decisions = snap.decisions || [] || [];
    state.log = snap.log || [];
    state.seen = new Set(snap.seen || []);
    state.containment = snap.containment ?? 61;
    state.currentBg = null;
    clearSlots();
    if (snap.currentBg) setBackground(snap.currentBg, true);
    if (snap.chars) {
      Object.entries(snap.chars).forEach(([pos, c]) => {
        if (c) showCharacter(c.id, c.sprite, pos, pos === "center");
      });
    }
  }

  function hasAnySave() {
    return getSaves().some(Boolean);
  }

  function updateContinueButton() {
    $("btn-continue").disabled = !hasAnySave();
  }

  function openSaveLoad(mode) {
    const list = $("slot-list");
    const saves = getSaves();
    $("saveload-title").textContent = mode === "save" ? "Save Game" : "Load Game";
    list.innerHTML = "";
    for (let i = 0; i < GAME.slots; i++) {
      const s = saves[i];
      const btn = document.createElement("button");
      btn.className = "save-slot" + (s ? "" : " empty");
      const date = s ? new Date(s.time).toLocaleString() : "";
      btn.innerHTML = `
        <div class="num">0${i + 1}</div>
        <div>
          <div class="title">${s ? escapeHtml(s.label) : "Empty Slot"}</div>
          <div class="meta">${date}</div>
        </div>
        <div class="meta">${s ? "●" : ""}</div>`;
      btn.addEventListener("click", () => {
        if (mode === "save") {
          const arr = getSaves();
          arr[i] = snapshot();
          writeSaves(arr);
          openSaveLoad("save");
          updateContinueButton();
        } else if (s) {
          applySnapshot(s);
          closeModal("saveload-modal");
          closeModal("pause-menu");
          title.classList.add("hidden");
          ending.classList.add("hidden");
          game.classList.remove("hidden");
          runNode(state.node);
        }
      });
      list.appendChild(btn);
    }
    $("saveload-modal").classList.remove("hidden");
  }

  // ---------- Codex & Chapters ----------
  function openCodex() {
    const grid = $("codex-grid");
    grid.innerHTML = CODEX.map((c) => {
      const sprite = c.sprites && (c.sprites[c.defaultSprite] || Object.values(c.sprites)[0]);
      return `<button class="codex-card">
        ${sprite ? `<img src="${sprite}" alt="" onerror="this.style.display='none'">` : `<div style="height:140px;background:rgba(255,255,255,.04);margin-bottom:.4rem"></div>`}
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.role || "")}</p>
        <p style="margin-top:.35rem">${escapeHtml(c.blurb || "")}</p>
      </button>`;
    }).join("");
    $("codex-modal").classList.remove("hidden");
  }

  function openChapters() {
    const list = $("chapters-list");
    list.innerHTML = "";
    CHAPTERS.forEach((part) => {
      const head = document.createElement("div");
      head.style.cssText = "font-family:var(--font-sys);font-size:.58rem;letter-spacing:.16em;color:var(--gold);margin:0.8rem 0 0.4rem";
      head.textContent = part.part;
      list.appendChild(head);
      part.scenes.forEach((sc) => {
        const locked = sc.status !== "playable";
        const startId = (typeof CHAPTER_STARTS !== "undefined" && CHAPTER_STARTS[sc.id]) || null;
        const canJump = !locked && startId && SCRIPT[startId];
        const row = document.createElement("div");
        row.className = "chapter-item" + (locked ? " locked" : "");
        row.innerHTML = `<h3>${escapeHtml(sc.title)}</h3>
          <p>${escapeHtml(sc.note || "")}</p>
          <div class="status">${locked ? "Locked" : canJump ? "Click to play →" : "Playable"}</div>`;
        if (canJump) {
          row.style.cursor = "pointer";
          row.title = "Start this scene from the beginning";
          row.addEventListener("click", () => jumpToChapter(sc.id));
        }
        list.appendChild(row);
      });
    });
    $("chapters-modal").classList.remove("hidden");
  }

  // ---------- Engine ----------
  function closeModal(id) {
    $(id).classList.add("hidden");
  }

  function showChoices(choices) {
    choicesEl.innerHTML = "";
    choices.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = escapeHtml(c.text) + (c.hint ? `<span class="hint">${escapeHtml(c.hint)}</span>` : "");
      btn.addEventListener("click", () => {
        btn.classList.add("pulse");
        window.setTimeout(() => {
          choicesEl.classList.remove("show");
          state.choiceOpen = false;
          const node = SCRIPT[state.node];
          if (node && node.decision) recordDecision(node.decision);
          if (c.effects) applyEffects(c.effects);
          go(c.next);
        }, 180);
      });
      choicesEl.appendChild(btn);
    });
    choicesEl.classList.add("show");
    state.choiceOpen = true;
    continueHint.classList.remove("show");
  }

  function applyEffects(fx) {
    if (!fx) return;
    if (fx.stats) Object.entries(fx.stats).forEach(([k, v]) => changeStat(k, v));
    if (fx.romance) Object.entries(fx.romance).forEach(([k, v]) => changeRomance(k, v));
    if (fx.flags) {
      Object.entries(fx.flags).forEach(([k, v]) => {
        if (typeof v === "number" && typeof state.flags[k] === "number") {
          state.flags[k] = (state.flags[k] || 0) + v;
        } else {
          state.flags[k] = v;
        }
      });
    }
    if (fx.containment != null) setContainment(fx.containment);
    if (fx.decision) recordDecision(fx.decision);
    // Hub resources (stored on flags)
    ["credits", "tech", "colonialRep", "heliosHeat", "crewLoyalty", "fleetShips"].forEach((k) => {
      if (fx[k] != null) {
        const cur = Number(state.flags[k]) || 0;
        state.flags[k] = cur + Number(fx[k]);
      }
    });
  }

  function recordDecision(id) {
    if (!id) return;
    if (!state.decisions) state.decisions = [];
    if (!state.decisions.includes(id)) state.decisions.push(id);
  }

  function clearFlagsFromDecision(decisionId) {
    if (typeof DECISION_ORDER === "undefined") return;
    const idx = DECISION_ORDER.findIndex((d) => d.id === decisionId);
    if (idx < 0) return;
    for (let i = idx; i < DECISION_ORDER.length; i++) {
      const list = DECISION_ORDER[i].clearFlags || [];
      list.forEach((f) => {
        if (f === "visitOrder") state.flags[f] = null;
        else if (typeof STARTING_FLAGS[f] === "number") state.flags[f] = STARTING_FLAGS[f];
        else if (typeof STARTING_FLAGS[f] === "boolean") state.flags[f] = false;
        else state.flags[f] = STARTING_FLAGS[f];
      });
    }
    // Drop decision records from this point forward so they can be chosen again
    const keep = DECISION_ORDER.slice(0, idx).map((d) => d.id);
    state.decisions = (state.decisions || []).filter((id) => keep.includes(id));
  }

  function resolveWarpTarget(data) {
    if (!state.flags.timeWarpUnlocked) return null;
    if (typeof DECISION_ORDER === "undefined") return null;
    let targetId = data && data.warpDecision;
    if (!targetId) {
      // earliest decision still on record
      for (const d of DECISION_ORDER) {
        if ((state.decisions || []).includes(d.id)) {
          targetId = d.id;
          break;
        }
      }
    }
    if (!targetId) targetId = "reactor_team";
    const entry = DECISION_ORDER.find((d) => d.id === targetId);
    if (!entry || !SCRIPT[entry.node]) return null;
    return { decisionId: targetId, node: entry.node, label: entry.label };
  }

  function performWarp(warpInfo) {
    if (!warpInfo) return;
    clearFlagsFromDecision(warpInfo.decisionId);
    state.flags.warpCount = (Number(state.flags.warpCount) || 0) + 1;
    state.flags._warpTarget = warpInfo.node;
    state.pendingWarp = null;
    state.skipToChoice = false;
    state.auto = false;
    state.choiceOpen = false;
    state.waiting = false;
    state.typing = false;
    if (typeof stopTyping === "function") stopTyping();
    choicesEl.classList.remove("show");
    ending.classList.add("hidden");
    title.classList.add("hidden");
    game.classList.remove("hidden");

    resetStageVisuals();

    // Restore location art for this decision (also used after awaken)
    const entry = (typeof DECISION_ORDER !== "undefined")
      ? DECISION_ORDER.find((d) => d.id === warpInfo.decisionId)
      : null;
    state._warpStage = entry && entry.stage ? entry.stage : null;

    const first = !state.flags.firstWarpDone;
    if (first) {
      state.flags.firstWarpDone = true;
      setBackground("black", true);
      setLocation("—");
      runNode("warp_awaken_1");
    } else {
      if (state._warpStage) applyStagePreset(state._warpStage);
      runNode(warpInfo.node);
    }
  }

  function resolveNext(node) {
    if (!node) return null;
    if (typeof node.nextFn === "function") {
      try {
        const r = node.nextFn(state);
        if (r) {
          if (!SCRIPT[r]) console.warn("nextFn returned missing node:", r, "from", state.node);
          return r;
        }
      } catch (e) {
        console.warn("nextFn error on", state.node, e);
      }
    }
    const n = node.next || null;
    if (!n) console.warn("No next for node", state.node);
    else if (!SCRIPT[n]) console.warn("next target missing:", n, "from", state.node);
    return n;
  }

  let runToken = 0;

  async function runNode(id, opts = {}) {
    const node = SCRIPT[id];
    const replay = !!opts.replay;
    if (!node) {
      console.warn("Missing node:", id);
      state.waiting = true;
      state.skipToChoice = false;
      $("btn-skip").classList.remove("active");
      return;
    }
    const token = ++runToken;
    state.node = id;
    state.seen.add(id);
    state.waiting = false;
    state.choiceOpen = false;
    choicesEl.classList.remove("show");
    continueHint.classList.remove("show");

    // After time-warp monologue, restore stage when landing on the decision node
    if (state._warpStage && state.flags && state.flags._warpTarget === id) {
      applyStagePreset(state._warpStage);
      state._warpStage = null;
      state.flags._warpTarget = null;
    }

    if (node.bg) setBackground(node.bg, !!opts.instantBg);
    if (node.location) setLocation(node.location);
    if (node.alert != null) setAlert(node.alert);
    if (node.flashback != null) setFlashback(node.flashback);
    if (node.containment != null) setContainment(node.containment);
    if (node.hideContainment || node.containment === false) hideContainment();
    // Auto-hide meter outside Ardent Horizon crisis contexts
    if (node.hideContainment !== false && node.containment == null) {
      const loc = (node.location || "").toLowerCase();
      const bg = node.bg || "";
      const crisisBg = /bridge|reactor|showers|quarters|space/.test(bg);
      const crisisLoc = /ardent horizon|containment|reactor|bridge/.test(loc);
      if (node.location && !crisisLoc && !crisisBg) hideContainment();
      if (bg && !crisisBg && node.location && !crisisLoc) hideContainment();
    }
    if (node.shake && !state.skipToChoice) shake();
    if (node.flash && !state.skipToChoice) flash();
    if (node.clearFx) clearScreenFx();
    if (node.fx && !state.skipToChoice) applyScreenFx(node.fx);
    if (node.cg) showCg(node.cg);
    if (node.hideCg) hideCg();
    if (node.clearChars) clearSlots();
    if (node.chars) {
      const positions = ["left", "center", "right"];
      // Full staging: any slot omitted from node.chars is cleared (prevents leftover sprites)
      if (!node.keepChars) {
        positions.forEach((pos) => {
          if (!(pos in node.chars)) hideCharacter(pos);
        });
      }
      Object.entries(node.chars).forEach(([pos, def]) => {
        if (!def) hideCharacter(pos);
        else showCharacter(def.id, def.sprite, pos, def.focus !== false);
      });
    }
    if (node.effects && !replay) applyEffects(node.effects);

    const speaker = node.speaker;
    const isNarration = !speaker || speaker === "narration";
    const isSystem = speaker === "system";
    if (isSystem) {
      nameplate.textContent = "SYSTEM";
      nameplate.classList.add("system");
      nameplate.classList.remove("hidden-name");
      nameplate.style.color = "";
    } else if (isNarration) {
      nameplate.classList.add("hidden-name");
    } else {
      const ch = CHARACTERS[speaker];
      nameplate.textContent = ch ? ch.name : speaker;
      nameplate.classList.remove("system", "hidden-name");
      nameplate.style.color = ch && ch.color ? ch.color : "";
    }

    const text = typeof node.text === "function" ? node.text(state) : node.text || "";
    state._pendingText = text;
    if (!state.skipToChoice) pushLog(isNarration ? "" : nameplate.textContent, text);

    await typeText(text, isNarration ? "narration" : isSystem ? "system" : "");
    if (token !== runToken) return; // superseded by a newer runNode

    if (node.choices && node.choices.length) {
      state.skipToChoice = false;
      $("btn-skip").classList.remove("active");
      showChoices(node.choices);
      return;
    }

    state.waiting = true;

    // Ending card
    if (node.ending) {
      state.skipToChoice = false;
      $("btn-skip").classList.remove("active");
      showEnding(node.ending);
      return;
    }

    // Skip mode: advance async so long chains (e.g. Marcus cutscene) do not overflow the stack
    if (state.skipToChoice) {
      const nextId = resolveNext(node);
      if (nextId) {
        setTimeout(() => {
          if (state.skipToChoice && state.node === id) go(nextId);
        }, 0);
        return;
      }
      state.skipToChoice = false;
      $("btn-skip").classList.remove("active");
      console.warn("Skip stopped: no next from", id);
      return;
    }

    if (state.auto) {
      const delay = Math.max(600, (text.length * 28) / state.settings.autoSpeed);
      await wait(delay);
      if (token !== runToken) return;
      if (state.auto && state.node === id) advance();
    }
  }

  function advance() {
    if (state.choiceOpen) return;
    if (state.typing) {
      finishTyping();
      return;
    }
    // Recover if a node finished without setting waiting (should not happen, but unfreezes play)
    if (!state.waiting) {
      const cur = SCRIPT[state.node];
      if (cur && !cur.choices && !cur.ending) {
        state.waiting = true;
      } else {
        return;
      }
    }
    const node = SCRIPT[state.node];
    if (!node) {
      console.warn("advance: missing node", state.node);
      return;
    }
    if (node.ending) {
      showEnding(node.ending);
      return;
    }
    const nextId = resolveNext(node);
    if (nextId) {
      go(nextId);
    } else {
      console.warn("advance: no next for", state.node, node);
    }
  }

  function go(nextId) {
    if (!nextId) {
      console.warn("go() called with empty nextId from", state.node);
      return;
    }
    if (!SCRIPT[nextId]) {
      console.warn("Missing next node:", nextId, "from", state.node);
      // If Scene 3+ scripts failed to load, surface a readable recovery
      state.waiting = true;
      state.skipToChoice = false;
      dialogueEl.textContent = "[Missing scene node: " + nextId + ". Check that the scene script is included in index.html and refresh.]";
      nameplate.textContent = "SYSTEM";
      nameplate.classList.add("system");
      continueHint.classList.add("show");
      return;
    }
    if (state.node) state.history.push(state.node);
    runNode(nextId);
  }

  /** Replay previous dialogue node (no effect rollback). */
  function goBack() {
    if (state.choiceOpen) {
      choicesEl.classList.remove("show");
      state.choiceOpen = false;
    }
    if (state.history.length === 0) return;
    state.skipToChoice = false;
    state.auto = false;
    $("btn-skip").classList.remove("active");
    $("btn-auto").classList.remove("active");
    const prev = state.history.pop();
    // Replay previous line without re-applying effects or growing history
    runNode(prev, { replay: true });
  }

  /** Fast-forward to the next player choice (or ending). */
  function startSkipToChoice() {
    if (state.choiceOpen) return;
    state.skipToChoice = true;
    state.auto = false;
    $("btn-skip").classList.add("active");
    $("btn-auto").classList.remove("active");
    if (state.typing) finishTyping();
    // kick the chain
    if (state.waiting) advance();
    else if (!state.typing) {
      // mid-node safety
      state.waiting = true;
      advance();
    }
  }

  function jumpToChapter(sceneId) {
    /* chapter lock guard */
    if (typeof CHAPTERS !== "undefined") {
      let allowed = false;
      CHAPTERS.forEach((part) => {
        part.scenes.forEach((sc) => {
          if (sc.id === sceneId && sc.status === "playable") allowed = true;
        });
      });
      if (!allowed) {
        console.warn("Chapter locked from title menu:", sceneId);
        return;
      }
    }
    const start = (typeof CHAPTER_STARTS !== "undefined" && CHAPTER_STARTS[sceneId]) || null;
    if (!start || !SCRIPT[start]) {
      console.warn("No start node for chapter", sceneId);
      return;
    }
    // Soft reset progression but keep settings
    state.stats = { ...STARTING_STATS };
    state.romance = { ...STARTING_ROMANCE };
    state.flags = { ...STARTING_FLAGS };
    state.history = [];
    state.log = [];
    state.seen = new Set();
    state.decisions = [];
    state.pendingWarp = null;
    state.flags._warpTarget = null;
    state.auto = false;
    state.skipToChoice = false;
    $("btn-auto").classList.remove("active");
    $("btn-skip").classList.remove("active");
    clearSlots();
    setAlert(false);
    setFlashback(false);
    hideContainment();
    state.containment = 61;
    closeModal("chapters-modal");
    closeModal("pause-menu");
    title.classList.add("hidden");
    ending.classList.add("hidden");
    game.classList.remove("hidden");
    runNode(start);
  }

  function showEnding(data) {
    game.classList.add("hidden");
    ending.classList.remove("hidden");
    const isGO = data && data.type === "gameover";
    const isChapter = !data || data.type === "chapter" || !data.type;
    ending.classList.toggle("gameover", !!isGO);

    $("ending-badge").textContent = isGO ? "MISSION FAILED" : "STARFALL";
    $("ending-kicker").textContent = isGO
      ? ("Game Over" + (data.path ? " · " + String(data.path).toUpperCase() + " PATH" : ""))
      : "Chapter Complete";
    $("ending-title").textContent = (data && data.title) || (isGO ? "Game Over" : "Act Complete");
    $("ending-subtitle").textContent = (data && data.subtitle) || "";
    $("ending-epigraph").textContent = (data && data.epigraph) || "";

    const bodyEl = $("ending-body");
    if (data && data.body) {
      bodyEl.textContent = data.body;
      bodyEl.classList.remove("hidden");
    } else {
      bodyEl.textContent = "";
      bodyEl.classList.add("hidden");
    }

    const artWrap = $("ending-art-wrap");
    const art = $("ending-art");
    if (data && data.image) {
      art.src = data.image;
      art.alt = data.title || "Ending";
      artWrap.classList.remove("hidden");
    } else {
      art.removeAttribute("src");
      artWrap.classList.add("hidden");
    }

    $("ending-stats").innerHTML = STAT_META.map((s) => {
      const v = state.stats[s.key];
      return `<div class="stat-row">${s.label}: ${v}<div class="bar"><div class="fill" style="width:${v}%"></div></div></div>`;
    }).join("");

    const flags = [];
    if (state.flags.lenaAffair || state.flags.lenaPartyAffair) flags.push("Affair with Lena.");
    if (state.flags.isabellaAffair) flags.push("Involvement with Isabella.");
    if (state.flags.isabellaIntimacy) flags.push("Intimate with Isabella.");
    if (state.flags.natalieAffair) flags.push("Drawn into Natalie Cross.");
    if (state.flags.gracieCompromised) flags.push("Gracie compromised by Vincent.");
    if (state.flags.blackmailRefused) flags.push("Gracie refused Vincent’s blackmail.");
    if (state.flags.vincentBlackmailStopped) flags.push("Sam stopped Vincent at the reception.");
    if (state.flags.marcusSabotageSeen) flags.push("Marcus sabotaged the ship.");
    if (state.flags.adrianSponsorship) flags.push("Adrian’s sponsorship secured.");
    if (state.flags.lenaRomanceOpen && !state.flags.lenaRomanceClosed) flags.push("Lena’s door is open.");
    $("ending-flags").innerHTML = flags.length
      ? flags.map((f) => `<div>${escapeHtml(f)}</div>`).join("")
      : (isGO ? "The golden age ended early for Sam Page." : "The story continues. Choices already made will echo.");

    // Chapter clears can continue; Game Overs can time-warp if unlocked
    const cont = data && data.continueTo;
    state.pendingContinue = cont && SCRIPT[cont] ? cont : null;
    state.pendingHub = !!(data && data.type === "hub");
    if (data && data.type === "hub") {
      if (data.missionId) completeMission(data.missionId);
      if (data.missionIds) data.missionIds.forEach((id) => completeMission(id));
      // Infer from story flags when scene didn't tag a mission
      if (!data.missionId && !data.missionIds) {
        if (state.flags.outpost9Saved || state.flags.outpost9Lost) completeMission("m_belt_inf_1");
        if (state.flags.chosePiracyFirst || state.flags.courierIntel || state.flags.scx2Looted || state.flags.scx2Evacuated) {
          completeMission("m_belt_hel_1");
        }
      }
    }
    state.pendingWarp = null;
    if (isGO) {
      state.pendingWarp = resolveWarpTarget(data);
    }
    const btn = $("btn-ending-title");
    const btnWarp = $("btn-ending-warp");
    if (btnWarp) {
      if (state.pendingWarp) {
        btnWarp.classList.remove("hidden");
        btnWarp.textContent = "Return to that moment";
      } else {
        btnWarp.classList.add("hidden");
      }
    }
    if (btn) {
      if (state.pendingHub) {
        btn.textContent = "System Map";
      } else if (state.pendingContinue) {
        btn.textContent = "Continue";
      } else {
        btn.textContent = "Return to Title";
      }
    }
  }

  function startNewGame() {
    state.stats = { ...STARTING_STATS };
    state.romance = { ...STARTING_ROMANCE };
    state.flags = { ...STARTING_FLAGS };
    state.history = [];
    state.log = [];
    state.seen = new Set();
    state.decisions = [];
    state.pendingWarp = null;
    state.flags._warpTarget = null;
    state.auto = false;
    state.skip = false;
    $("btn-auto").classList.remove("active");
    clearSlots();
    setAlert(false);
    setFlashback(false);
    setContainment(61);
    title.classList.add("hidden");
    ending.classList.add("hidden");
    game.classList.remove("hidden");
    runNode(GAME.startNode);
  }

  // ---------- Input ----------
  textbox.addEventListener("click", (e) => {
    if (e.target.closest(".choice-btn")) return;
    advance();
  });

  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "Escape") {
      if (!$("pause-menu").classList.contains("hidden")) closeModal("pause-menu");
      else if (!$("chapters-modal").classList.contains("hidden")) closeModal("chapters-modal");
      else if (!$("settings-modal").classList.contains("hidden")) closeModal("settings-modal");
      else if (!$("saveload-modal").classList.contains("hidden")) closeModal("saveload-modal");
      else if (!$("log-modal").classList.contains("hidden")) closeModal("log-modal");
      else if (!$("codex-modal").classList.contains("hidden")) closeModal("codex-modal");
      else if (!game.classList.contains("hidden")) $("pause-menu").classList.remove("hidden");
      return;
    }
    if (game.classList.contains("hidden")) return;
    if (e.key === "b" || e.key === "B") {
      e.preventDefault();
      goBack();
      return;
    }
    if (e.key === "h" || e.key === "H") {
      e.preventDefault();
      toggleTextboxView();
      return;
    }
    if (e.key === "Control") {
      // held Ctrl = skip to choice
      if (!state.skipToChoice) startSkipToChoice();
      return;
    }
    if ([" ", "Enter", "ArrowRight", "z", "Z"].includes(e.key)) {
      e.preventDefault();
      advance();
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "Control" && state.skipToChoice) {
      // optional: do not cancel on release — skip runs to next choice
    }
  });

  $("btn-stats").addEventListener("click", () => {
    renderStatsFlyout();
    statsFlyout.classList.toggle("show");
  });
  $("btn-log").addEventListener("click", () => {
    renderLog();
    $("log-modal").classList.remove("hidden");
  });
  $("btn-auto").addEventListener("click", () => {
    state.auto = !state.auto;
    $("btn-auto").classList.toggle("active", state.auto);
    if (state.auto && state.waiting) advance();
  });
  $("btn-back").addEventListener("click", (e) => {
    e.stopPropagation();
    goBack();
  });
  $("btn-skip").addEventListener("click", (e) => {
    e.stopPropagation();
    if (state.skipToChoice) {
      // cancel skip
      state.skipToChoice = false;
      $("btn-skip").classList.remove("active");
      return;
    }
    startSkipToChoice();
  });
  $("btn-save").addEventListener("click", () => openSaveLoad("save"));
  $("btn-load").addEventListener("click", () => openSaveLoad("load"));
  $("btn-menu").addEventListener("click", () => $("pause-menu").classList.remove("hidden"));

  $("btn-new").addEventListener("click", startNewGame);
  $("btn-continue").addEventListener("click", () => {
    const saves = getSaves().filter(Boolean);
    if (!saves.length) return;
    const latest = saves.sort((a, b) => b.time - a.time)[0];
    applySnapshot(latest);
    title.classList.add("hidden");
    game.classList.remove("hidden");
    runNode(state.node);
  });
  $("btn-load-title").addEventListener("click", () => openSaveLoad("load"));
  $("btn-chapters-title").addEventListener("click", openChapters);
  $("btn-settings-title").addEventListener("click", () => $("settings-modal").classList.remove("hidden"));
  $("btn-codex-title").addEventListener("click", openCodex);

  $("btn-resume").addEventListener("click", () => closeModal("pause-menu"));
  $("btn-save-pause").addEventListener("click", () => openSaveLoad("save"));
  $("btn-load-pause").addEventListener("click", () => openSaveLoad("load"));
  $("btn-settings-pause").addEventListener("click", () => $("settings-modal").classList.remove("hidden"));
  $("btn-codex-pause").addEventListener("click", openCodex);
  $("btn-chapters-pause").addEventListener("click", openChapters);
  $("btn-title").addEventListener("click", () => {
    closeModal("pause-menu");
    game.classList.add("hidden");
    title.classList.remove("hidden");
    state.auto = false;
    updateContinueButton();
  });

  $("btn-saveload-close").addEventListener("click", () => closeModal("saveload-modal"));
  $("btn-settings-close").addEventListener("click", () => {
    saveSettings();
    closeModal("settings-modal");
  });
  $("btn-log-close").addEventListener("click", () => closeModal("log-modal"));
  $("btn-codex-close").addEventListener("click", () => closeModal("codex-modal"));
  $("btn-chapters-close").addEventListener("click", () => closeModal("chapters-modal"));
  $("btn-ending-title").addEventListener("click", () => {
    ending.classList.add("hidden");
    const cont = state.pendingContinue;
    const hub = state.pendingHub;
    state.pendingContinue = null;
    state.pendingHub = false;
    state.pendingWarp = null;
    if (hub) {
      openMap();
      return;
    }
    if (cont && SCRIPT[cont]) {
      title.classList.add("hidden");
      game.classList.remove("hidden");
      const btn = $("btn-ending-title");
      if (btn) btn.textContent = "Return to Title";
      runNode(cont);
      return;
    }
    title.classList.remove("hidden");
    updateContinueButton();
  });

  const btnWarpEl = $("btn-ending-warp");
  if (btnWarpEl) {
    btnWarpEl.addEventListener("click", () => {
      const w = state.pendingWarp;
      if (w) performWarp(w);
    });
  }

  ["set-text", "set-auto", "set-volume", "set-opacity", "set-font"].forEach((id) => {
    $(id).addEventListener("input", () => {
      state.settings.textSpeed = +$("set-text").value;
      state.settings.autoSpeed = +$("set-auto").value;
      state.settings.volume = +$("set-volume").value;
      state.settings.boxOpacity = +$("set-opacity").value;
      state.settings.fontSize = +$("set-font").value;
      applySettings();
    });
  });
  $("set-skip").addEventListener("change", () => {
    state.settings.skipUnread = $("set-skip").checked;
  });

  function spawnSparks() {
    const host = $("particles");
    for (let i = 0; i < 12; i++) {
      const s = document.createElement("div");
      s.className = "spark";
      s.style.left = Math.random() * 100 + "%";
      s.style.bottom = Math.random() * 30 + "%";
      s.style.animationDelay = Math.random() * 2.8 + "s";
      host.appendChild(s);
    }
  }



  /* ========== Solar map hub ========== */
  function ensureHubFlags() {
    const d = {
      credits: 0, tech: 0, colonialRep: 0, heliosHeat: 0,
      crewLoyalty: 50, fleetShips: 1, shipName: "True Purpose",
      missionsCleared: {}, regionsUnlocked: { belt: true, mars: false, earth: false },
      activeRegion: "belt"
    };
    Object.keys(d).forEach((k) => {
      if (state.flags[k] === undefined || state.flags[k] === null) state.flags[k] = d[k];
    });
    if (!state.flags.missionsCleared || typeof state.flags.missionsCleared !== "object") {
      state.flags.missionsCleared = {};
    }
    if (!state.flags.regionsUnlocked || typeof state.flags.regionsUnlocked !== "object") {
      state.flags.regionsUnlocked = { belt: true, mars: false, earth: false };
    }
  }

  function regionClearedCount(regionId) {
    ensureHubFlags();
    const missions = window.STARFALL_MISSIONS || {};
    let n = 0;
    Object.values(missions).forEach((m) => {
      if (m.region === regionId && state.flags.missionsCleared[m.id]) n++;
    });
    return n;
  }

  function canUnlockRegion(regionId) {
    ensureHubFlags();
    const reg = (window.STARFALL_REGIONS || {})[regionId];
    if (!reg) return false;
    if (reg.unlock && reg.unlock.type === "start") return true;
    if (state.flags.regionsUnlocked[regionId]) return true;
    const u = reg.unlock || {};
    if (u.type === "regionClear") {
      const cleared = regionClearedCount(u.region);
      if (cleared < (u.minCleared || 0)) return false;
      if (u.minFleetShips != null && (Number(state.flags.fleetShips) || 0) < u.minFleetShips) return false;
      if (u.minCrewLoyalty != null && (Number(state.flags.crewLoyalty) || 0) < u.minCrewLoyalty) return false;
      if (u.minCredits != null && (Number(state.flags.credits) || 0) < u.minCredits) return false;
      return true;
    }
    return false;
  }

  function refreshRegionUnlocks() {
    ensureHubFlags();
    ["mars", "earth"].forEach((rid) => {
      if (!state.flags.regionsUnlocked[rid] && canUnlockRegion(rid)) {
        state.flags.regionsUnlocked[rid] = true;
      }
    });
  }

  function completeMission(missionId) {
    ensureHubFlags();
    const m = (window.STARFALL_MISSIONS || {})[missionId];
    if (!m) return;
    if (state.flags.missionsCleared[missionId]) return;
    state.flags.missionsCleared[missionId] = true;
    if (m.rewards) applyEffects(m.rewards);
    refreshRegionUnlocks();
  }

  function openMap(regionId) {
    ensureHubFlags();
    refreshRegionUnlocks();
    const mapScreen = $("map-screen");
    if (!mapScreen) return;
    const endingEl = $("ending-screen");
    if (endingEl) endingEl.classList.add("hidden");
    if (typeof game !== "undefined" && game) game.classList.add("hidden");
    const titleEl = $("title-screen");
    if (titleEl) titleEl.classList.add("hidden");
    const hubBg = (typeof BACKGROUNDS !== "undefined" && (BACKGROUNDS.solarHub || BACKGROUNDS.mapHub)) || "assets/backgrounds/bg_Solar_System_Hub.png";
    mapScreen.style.backgroundImage = "linear-gradient(180deg, rgba(8,10,16,0.55) 0%, rgba(8,10,16,0.75) 100%), url(\"" + hubBg + "\")";
    mapScreen.style.backgroundSize = "cover";
    mapScreen.style.backgroundPosition = "center";
    mapScreen.classList.remove("hidden");
    const reg = regionId || state.flags.activeRegion || "belt";
    if (state.flags.regionsUnlocked[reg]) state.flags.activeRegion = reg;
    renderMap();
  }

  function closeMap() {
    const mapScreen = $("map-screen");
    if (mapScreen) mapScreen.classList.add("hidden");
  }

  function renderMap() {
    ensureHubFlags();
    const regionId = state.flags.activeRegion || "belt";
    const reg = (window.STARFALL_REGIONS || {})[regionId] || {};
    const label = $("map-region-label");
    if (label) label.textContent = reg.label || regionId;

    const res = $("map-resources");
    if (res) {
      res.innerHTML = [
        ["Credits", state.flags.credits],
        ["Tech", state.flags.tech],
        ["Colonial", state.flags.colonialRep],
        ["Helios heat", state.flags.heliosHeat],
        ["Loyalty", state.flags.crewLoyalty],
        ["Ships", state.flags.fleetShips]
      ].map(([k, v]) => `<span>${k}: <b>${v ?? 0}</b></span>`).join("");
    }

    const tabs = $("map-region-tabs");
    if (tabs) {
      tabs.innerHTML = "";
      Object.values(window.STARFALL_REGIONS || {}).sort((a, b) => a.order - b.order).forEach((r) => {
        const unlocked = !!state.flags.regionsUnlocked[r.id];
        const btn = document.createElement("button");
        btn.className = "map-tab" + (r.id === regionId ? " active" : "");
        btn.type = "button";
        btn.textContent = r.label + (unlocked ? "" : " (locked)");
        btn.disabled = !unlocked;
        btn.addEventListener("click", () => {
          state.flags.activeRegion = r.id;
          renderMap();
        });
        tabs.appendChild(btn);
      });
    }

    const chart = $("map-chart");
    if (!chart) return;
    const hubBgChart = (typeof BACKGROUNDS !== "undefined" && (BACKGROUNDS.solarHub || BACKGROUNDS.mapHub)) || "assets/backgrounds/bg_Solar_System_Hub.png";
    chart.style.backgroundImage = "linear-gradient(180deg, rgba(6,8,14,0.3) 0%, rgba(6,8,14,0.5) 100%), url(\"" + hubBgChart + "\")";
    chart.style.backgroundSize = "cover";
    chart.style.backgroundPosition = "center";
    chart.innerHTML = "";
    const missions = window.STARFALL_MISSIONS || {};
    Object.values(missions).forEach((m) => {
      if (m.region !== regionId) return;
      const cleared = !!state.flags.missionsCleared[m.id];
      const regionOk = !!state.flags.regionsUnlocked[m.region];
      const node = document.createElement("button");
      node.type = "button";
      node.className = "map-node " + (m.type || "") + (cleared ? " cleared" : "") + (!regionOk ? " locked" : "");
      node.style.left = (m.pos && m.pos.x) + "%";
      node.style.top = (m.pos && m.pos.y) + "%";
      node.title = m.title;
      const lab = document.createElement("span");
      lab.className = "map-node-label";
      lab.textContent = m.title;
      node.appendChild(lab);
      if (regionOk && !cleared) {
        node.addEventListener("click", () => selectMission(m.id));
      } else if (cleared) {
        node.addEventListener("click", () => selectMission(m.id));
      }
      chart.appendChild(node);
    });

    const panel = $("map-panel");
    if (panel && !panel.dataset.keep) {
      panel.innerHTML = '<div class="map-panel-empty">Select a mission marker.</div>';
    }
  }

  function selectMission(missionId) {
    const m = (window.STARFALL_MISSIONS || {})[missionId];
    const panel = $("map-panel");
    if (!m || !panel) return;
    panel.dataset.keep = "1";
    const cleared = !!state.flags.missionsCleared[m.id];
    const rewards = m.rewards || {};
    const rewardLines = Object.entries(rewards)
      .filter(([k]) => k !== "flags" && k !== "romance" && k !== "stats")
      .map(([k, v]) => `${k}: +${v}`)
      .join(" · ");
    panel.innerHTML = `
      <span class="tag ${m.type}">${m.type}</span>
      <h3>${m.title}</h3>
      <p>${m.blurb || ""}</p>
      <div class="map-rewards">${cleared ? "Status: cleared" : (rewardLines || "Rewards vary")}</div>
      <button type="button" class="menu-btn primary" id="btn-launch-mission" ${cleared ? "disabled" : ""}>
        ${cleared ? "Already cleared" : "Launch from True Purpose"}
      </button>
    `;
    const launch = $("btn-launch-mission");
    if (launch && !cleared) {
      launch.addEventListener("click", () => launchMission(m.id));
    }
  }

  function launchMission(missionId) {
    const m = (window.STARFALL_MISSIONS || {})[missionId];
    if (!m || !m.sceneStart || !SCRIPT[m.sceneStart]) {
      console.warn("Mission scene missing", missionId, m && m.sceneStart);
      return;
    }
    state.flags.activeMission = missionId;
    closeMap();
    if (typeof ending !== "undefined" && ending) ending.classList.add("hidden");
    game.classList.remove("hidden");
    runNode(m.sceneStart);
  }

  // Wire map buttons after DOM ready (existing boot already runs)
  function wireMapUi() {
    const btnMap = $("btn-map");
    if (btnMap) btnMap.addEventListener("click", () => openMap());
    const btnClose = $("btn-map-close");
    if (btnClose) btnClose.addEventListener("click", () => {
      closeMap();
      game.classList.remove("hidden");
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireMapUi);
  } else {
    wireMapUi();
  }


  window.STARFALL = { state, SCRIPT, go, runNode, startNewGame, goBack, startSkipToChoice, jumpToChapter, openMap, completeMission, closeMap };

  loadSettings();
  spawnSparks();
  bootSequence();
})();
