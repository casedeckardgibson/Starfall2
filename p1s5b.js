/* STARFALL P1S5b — Gracie: belief or Vincent */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s5b = {
    p1s5_gracie_branch: {
      speaker: "narration",
      text: "The route home is the same. The weight of the channel in Sam’s pocket is not.",
      nextFn: function (state) {
        if (state.flags && state.flags.caughtWithNatalie) return "p1s5_gv_1";
        return "p1s5_gf_1";
      },
      next: "p1s5_gf_1"
    },

    /* ---- Faithful: Gracie believes, accepts ---- */
    p1s5_gf_1: {
      saveLabel: "Gracie’s apartment",
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "This time the door opens.\n\nGracie looks like someone who has slept in pieces. The apartment is neat in the way of people who clean when they cannot fix the larger thing.",
      next: "p1s5_gf_2"
    },
    p1s5_gf_2: {
      speaker: "gracie",
      text: "You look like the interview went the way the feeds wanted it to.",
      next: "p1s5_gf_3"
    },
    p1s5_gf_3: {
      speaker: "sam",
      text: "They have logs with my codes on decisions I didn’t make. Marcus gave them a story that fits the paper.",
      next: "p1s5_gf_4"
    },
    p1s5_gf_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      text: "Come in. Don’t stand in the hall like a delivery.",
      next: "p1s5_gf_5"
    },
    p1s5_gf_5: {
      speaker: "narration",
      text: "He steps inside. She does not touch him at first. She makes tea neither of them will drink properly.",
      next: "p1s5_gf_6"
    },
    p1s5_gf_6: {
      speaker: "gracie",
      text: "I’ve watched the doorway clip a dozen times. I hated what it suggested. I also know Vincent’s timing too well to call coincidence a virtue.",
      next: "p1s5_gf_7"
    },
    p1s5_gf_7: {
      speaker: "sam",
      text: "Nothing happened with Natalie. Not that day. Not the way he wanted you to read it.",
      next: "p1s5_gf_8"
    },
    p1s5_gf_8: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I believe you.\n\nThat doesn’t mean I’m not still angry you left a closed door for him to weaponize. But I believe you about her. About the Horizon. About the kind of man you are when no one is filming.",
      effects: { flags: { gracieReconciled: true }, romance: { gracie: 10 }, stats: { trust: 6 } },
      next: "p1s5_gf_9"
    },
    p1s5_gf_9: {
      speaker: "narration",
      text: "She crosses the small space and puts her forehead against his. Not a kiss yet — a decision to stay in contact with the truth she chose.",
      next: "p1s5_gf_10"
    },
    p1s5_gf_10: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true }
      },
      text: "If they’re coming for you with paper, we face the paper. You don’t disappear into silence to protect me. That only helps them.",
      next: "p1s5_gf_11"
    },
    p1s5_gf_11: {
      speaker: "sam",
      text: "I don’t want you standing in the blast radius.",
      next: "p1s5_gf_12"
    },
    p1s5_gf_12: {
      speaker: "gracie",
      text: "Then stop deciding my radius for me.\n\nStay tonight. Sleep. Tomorrow we call whoever still answers honest questions.",
      next: "p1s5_gf_13"
    },
    p1s5_gf_13: {
      speaker: "narration",
      text: "He stays.\n\nIn the dark, her hand finds his and holds on like a rope, not a promise that the storm will miss them — only that she will not let go first.",
      next: "p1s5_file_1"
    },

    /* ---- Caught with Natalie: Gracie moving on with Vincent ---- */
    p1s5_gv_1: {
      saveLabel: "Gracie’s building",
      bg: "gracieApt",
      location: "Outside Gracie’s Apartment",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      speaker: "narration",
      text: "Sam almost turns around twice on the way up.\n\nThe door opens on the third knock — not wide.",
      next: "p1s5_gv_2"
    },
    p1s5_gv_2: {
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "gracie",
      text: "You shouldn’t be here.",
      next: "p1s5_gv_3"
    },
    p1s5_gv_3: {
      speaker: "sam",
      text: "I know. I still came.",
      next: "p1s5_gv_4"
    },
    p1s5_gv_4: {
      speaker: "gracie",
      text: "If this is about the interview, I saw the summary the feeds are chewing. I’m sorry the system is eating you. I’m not obligated to be the place you recover.",
      next: "p1s5_gv_5"
    },
    p1s5_gv_5: {
      speaker: "sam",
      text: "I’m not asking you to fix it. I’m asking you not to disappear while they invent the rest.",
      next: "p1s5_gv_6"
    },
    p1s5_gv_6: {
      speaker: "narration",
      text: "Behind her, inside the apartment, a jacket that is not Sam’s hangs on the chair. Vincent’s profile is visible for half a second as he pretends not to listen from the kitchen.",
      next: "p1s5_gv_7"
    },
    p1s5_gv_7: {
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "gracie",
      text: "He’s here because I asked him to be. Not as a performance. As a person who answered the phone when I couldn’t stand the quiet.",
      effects: { flags: { gracieWithVincent: true } },
      next: "p1s5_gv_8"
    },
    p1s5_gv_8: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true }
      },
      text: "I’m not here to gloat, Page. You did that work yourself.",
      next: "p1s5_gv_9"
    },
    p1s5_gv_9: {
      speaker: "sam",
      text: "Gracie—",
      next: "p1s5_gv_10"
    },
    p1s5_gv_10: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "I saw you with her. Not a rumor. Not a cropped still. You.\n\nI’m not saying Vincent is my future. I’m saying you are not my present. Don’t make this hallway a second annex.",
      next: "p1s5_gv_11"
    },
    p1s5_gv_11: {
      speaker: "narration",
      text: "She starts to close the door. Stops. The anger softens into something tired and final.",
      next: "p1s5_gv_12"
    },
    p1s5_gv_12: {
      speaker: "gracie",
      text: "If the Horizon thing is a frame, I hope you beat it. I do.\n\nI just can’t hold your hand while I still flinch at your name.",
      next: "p1s5_gv_13"
    },
    p1s5_gv_13: {
      speaker: "narration",
      text: "The door closes.\n\nFrom inside, Vincent’s voice is low, almost gentle — the kind of gentle that wins wars without looking like one.",
      next: "p1s5_file_1"
    }
  };
})();
