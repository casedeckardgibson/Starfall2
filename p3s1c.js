/* STARFALL P3S1c — Helios courier; SCX-2 coords; second choice */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p3s1c = {
    p3s1_courier_1: {
      saveLabel: "Helios courier · Intercept",
      bg: "space",
      location: "Inner belt lane",
      clearChars: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "Lyra does not like the choice. She runs it anyway.\\n\\nThe Helios courier is fat, predictable, and lightly armed — science-logistics under a civilian paint job. Ash lays the intercept. The crew moves like people who have done this without an officer’s permission for years.",
      next: "p3s1_courier_2"
    },
    p3s1_courier_2: {
      bg: "pirateDeck",
      location: "Courier · Bridge",
      speaker: "narration",
      text: "It is almost easy.\\n\\nWarning shot. Boarding clamps. A junior officer who folds when Lyra’s graft catches the light. Cargo is freeze-cases and encrypted crates. No nest. No sweet-rot. Only Company property and the smell of recycled fear.",
      effects: { stats: { cunning: 4, leadership: 3 } },
      next: "p3s1_courier_3"
    },
    p3s1_courier_3: {
      speaker: "narration",
      text: "In the navigation stack: a route packet that should have been wiped.\\n\\nHelios SCX-2 — a science facility on a dark rock, coordinates tight, windows of staff rotation marked in a hand that trusted encryption too much. Weapons research tags. Bio-containment footnotes that make Kane’s core tick once against Ash’s ribs.",
      next: "p3s1_courier_4"
    },
    p3s1_courier_4: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "normal", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "You wanted leverage. There it is.\\n\\nOutpost 9 is still dark on the board. We can burn a Company lab… or we can do what I asked before the courier got interesting.",
      next: "p3s1_second_choice"
    },
    p3s1_second_choice: {
      saveLabel: "SCX-2 or Outpost 9",
      speaker: "narration",
      text: "One path feeds the crew and the legend of Ash Geist the prize-taker. One path feeds the part of him that still closes rooms for people who will never know his old name.",
      choices: [
        {
          text: "Hit Helios SCX-2 while the packet is still hot.",
          hint: "Weapons · Data · Outpost 9 falls",
          next: "p3s1_scx_1",
          effects: {
            flags: { scx2Looted: true, outpost9Lost: true },
            stats: { cunning: 6, leadership: 4 },
            romance: { lyra: -5 }
          }
        },
        {
          text: "Turn for Outpost 9. The lab can wait.",
          hint: "Later to SCX-2 · More dead colonists",
          next: "p3s1_late_op9_1",
          effects: {
            flags: { backedLyraStation: true },
            romance: { lyra: 8 },
            stats: { integrity: 4 }
          }
        }
      ]
    },

    // Late Outpost 9 (after courier)
    p3s1_late_op9_1: {
      saveLabel: "Outpost 9 · Late",
      bg: "space",
      location: "Outpost 9 · Approach",
      clearChars: true,
      alert: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "battle", focus: false }
      },
      speaker: "narration",
      text: "They arrive late enough to smell it through the hull.\\n\\nMore of the habitat is dark. The upper stack still answers on a weak channel — fewer voices, thinner hope. Lyra does not say I told you. She seals her suit and goes.",
      next: "p3s1_late_op9_2"
    },
    p3s1_late_op9_2: {
      bg: "reactor",
      location: "Outpost 9 · Commons",
      fx: "vignette",
      shake: true,
      speaker: "narration",
      text: "The host that finds her is further along than the ones on Seven — less miner, more hinge and hunger. It drives her into a bulkhead, claw at her throat, other hand tearing suit seals with the same sexualized violence the infection uses to open bodies. She gets the knife in; it is not enough.\\n\\nAsh’s stem-shot drops it across her. Blood — hers and its — makes the deck treacherous. She is alive. She is not upright.",
      effects: { flags: { lyraInjured: true, ashInCommand: true } },
      next: "p3s1_late_op9_3"
    },
    p3s1_late_op9_3: {
      speaker: "narration",
      text: "She shoves the command key into his hand before the med-team seals the hatch.\\n\\n“Finish it,” she says. First time the crew has heard anyone put Ash Geist on the open channel as the one calling the clear. Nobody argues — not with her blood on the deck.\\n\\nThey save who is left. It is not enough to feel like saving. More nests than there should have been. Colonists who will not meet anyone’s eyes. When they pull back to the ship, Lyra is in med and the belts will say Nine was held — barely — and late.",
      effects: {
        flags: { outpost9Saved: true },
        stats: { leadership: 4, integrity: 2, compassion: -2 }
      },
      next: "p3s1_late_scx_1"
    },
    p3s1_late_scx_1: {
      alert: false,
      clearFx: true,
      bg: "space",
      location: "Helios SCX-2 · Approach",
      clearChars: true,
      chars: { center: { id: "ash", sprite: "serious", focus: true } },
      speaker: "narration",
      text: "SCX-2 is clean architecture and empty docks.\\n\\nEvacuated. Wiped. The courier packet’s window closed while they were cutting hosts out of a colonial spine. Scorched terminals. A weapons bay reduced to bolts. Helios left nothing for a crew that arrived second.",
      effects: { flags: { scx2Evacuated: true } },
      next: "p3s1_late_scx_2"
    },
    p3s1_late_scx_2: {
      speaker: "narration",
      text: "Ash stands on a Company floor that has already moved on.\\n\\nBehind him: an XO in recovery who handed him the key for the first time under fire, a thinner Outpost 9, and a crew that watched him choose the rock after the prize. The lab’s silence is the bill for that order of operations.",
      next: "p3s1_end_late"
    },
    p3s1_end_late: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "The courier paid in coordinates that went cold.\\n\\nThe station paid in blood that was not only pirate. Ash has a name, a first hard command earned on a late deck, and Lyra’s trust in a register that includes blame for the hours they spent on Helios freight.",
      next: "p3s1_end_card"
    }
  };
})();
