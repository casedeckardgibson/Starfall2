/* STARFALL P1S5d — Arrest in front of Gracie */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s5d = {
    p1s5_arrest_1: {
      saveLabel: "Arrest",
      bg: "gracieApt",
      location: "Gracie’s Building · Corridor",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "malereplicant", sprite: "front", focus: false },
        right: { id: "femalereplicant", sprite: "front", focus: false }
      },
      speaker: "narration",
      text: "Sam is still a few steps from her door when the corridor changes temperature.\n\nBoots. Soft commands. The particular calm of people who have already decided the outcome of the next five minutes.",
      next: "p1s5_arrest_branch"
    },
    p1s5_arrest_branch: {
      speaker: "narration",
      text: "Gracie’s door opens for other reasons — a neighbor’s noise, a sixth sense, bad luck timed like a blade.",
      nextFn: function (state) {
        if (state.flags && state.flags.caughtWithNatalie) return "p1s5_ar_v_1";
        return "p1s5_ar_f_1";
      },
      next: "p1s5_ar_f_1"
    },

    /* Faithful: Gracie with him, believes him */
    p1s5_ar_f_1: {
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "shocked", focus: true }
      },
      speaker: "gracie",
      text: "Sam? I heard—",
      next: "p1s5_ar_f_2"
    },
    p1s5_ar_f_2: {
      speaker: "narration",
      text: "She sees the officers the same moment he does. Her hand finds his sleeve without thinking.",
      next: "p1s5_ar_f_3"
    },
    p1s5_ar_f_3: {
      speaker: "narration",
      text: "“Samuel Page. Under authority of Colonial Safety Directorate referral Helios-AH-441. You are being taken into custody pending formal charges related to falsification of emergency command records and endangerment under crisis protocols.”",
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "malereplicant", sprite: "front", focus: true },
        right: { id: "femalereplicant", sprite: "side", focus: false }
      },
      next: "p1s5_ar_f_4"
    },
    p1s5_ar_f_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "shocked", focus: true }
      },
      text: "No. No — he told you Marcus—",
      next: "p1s5_ar_f_5"
    },
    p1s5_ar_f_5: {
      speaker: "narration",
      text: "“Ma’am, step back from the subject.”",
      next: "p1s5_ar_f_6"
    },
    p1s5_ar_f_6: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      text: "Gracie. Look at me. Don’t fight them. Don’t give them you.",
      next: "p1s5_ar_f_7"
    },
    p1s5_ar_f_7: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "This is wrong. You know this is wrong.",
      next: "p1s5_ar_f_8"
    },
    p1s5_ar_f_8: {
      speaker: "sam",
      text: "I know.\n\nBelieve me anyway. When they say I signed those cells — I didn’t. When they say I ran from responsibility — I didn’t. Hold that. Even if holding it costs you.",
      next: "p1s5_ar_f_9"
    },
    p1s5_ar_f_9: {
      speaker: "narration",
      text: "Restraints close with a sound too ordinary for what they mean. Gracie’s fingers are forced off his sleeve by a careful, professional hand.",
      next: "p1s5_ar_f_10"
    },
    p1s5_ar_f_10: {
      speaker: "gracie",
      text: "I’m not going anywhere. I’ll find counsel. I’ll—",
      next: "p1s5_ar_f_11"
    },
    p1s5_ar_f_11: {
      speaker: "sam",
      text: "Stay safe. Please.",
      next: "p1s5_ar_f_12"
    },
    p1s5_ar_f_12: {
      speaker: "narration",
      text: "They walk him down the corridor. Gracie follows until a second officer blocks the stair. She does not scream. She says his name once, hard enough to crack.",
      next: "p1s5_ar_f_13"
    },
    p1s5_ar_f_13: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "Sam!",
      next: "p1s5_prison_1"
    },

    /* Affair path: Gracie with Vincent, moving on */
    p1s5_ar_v_1: {
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "Gracie is already in the corridor — coat on, Vincent half a step behind her, as if they were leaving together when the uniforms arrived.",
      next: "p1s5_ar_v_2"
    },
    p1s5_ar_v_2: {
      speaker: "narration",
      text: "“Samuel Page. Under authority of Colonial Safety Directorate referral Helios-AH-441. You are being taken into custody…”",
      next: "p1s5_ar_v_3"
    },
    p1s5_ar_v_3: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "shocked", focus: true }
      },
      text: "…What?",
      next: "p1s5_ar_v_4"
    },
    p1s5_ar_v_4: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "normal", focus: true }
      },
      text: "Easy. Let them work.",
      next: "p1s5_ar_v_5"
    },
    p1s5_ar_v_5: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      text: "Gracie.",
      next: "p1s5_ar_v_6"
    },
    p1s5_ar_v_6: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I— I don’t understand. The Horizon thing was supposed to be paper, not… this.",
      next: "p1s5_ar_v_7"
    },
    p1s5_ar_v_7: {
      speaker: "sam",
      text: "It’s still a frame. Even if you can’t stand me. It’s still a frame.",
      next: "p1s5_ar_v_8"
    },
    p1s5_ar_v_8: {
      speaker: "narration",
      text: "Restraints. The corridor witnesses the whole geometry: the man who broke her trust, the man already at her shoulder, the law arriving as if invited.",
      next: "p1s5_ar_v_9"
    },
    p1s5_ar_v_9: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "I didn’t ask for this.",
      next: "p1s5_ar_v_10"
    },
    p1s5_ar_v_10: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "normal", focus: true }
      },
      text: "Neither did you deserve to watch it alone. Come on. You don’t have to talk to him.",
      next: "p1s5_ar_v_11"
    },
    p1s5_ar_v_11: {
      speaker: "narration",
      text: "Sam searches her face for the belief he burned. He finds shock, grief, and the hard edge of a woman already halfway gone.",
      next: "p1s5_ar_v_12"
    },
    p1s5_ar_v_12: {
      speaker: "sam",
      text: "I’m sorry. For Natalie. Not for the Horizon. That part was never mine to apologize for.",
      next: "p1s5_ar_v_13"
    },
    p1s5_ar_v_13: {
      speaker: "gracie",
      text: "…Good luck, Sam.",
      next: "p1s5_ar_v_14"
    },
    p1s5_ar_v_14: {
      speaker: "narration",
      text: "Vincent’s hand settles at the small of her back — guiding, claiming, comforting. She does not lean in. She also does not step away.",
      next: "p1s5_ar_v_15"
    },
    p1s5_ar_v_15: {
      speaker: "narration",
      text: "They walk him past her. For one second their shoulders almost align in the narrow hall. Then the officers turn the corner and Gracie is only a sound behind him — a breath that might have been a sob, or only air.",
      next: "p1s5_prison_1"
    },

    p1s5_prison_1: {
      bg: "black",
      location: "Transit · Processing",
      clearChars: true,
      hideContainment: true,
      chars: {
        left: { id: "malereplicant", sprite: "side", focus: false },
        center: { id: "prisonsam", sprite: "hurt", focus: true },
        right: { id: "femalereplicant", sprite: "watch", focus: false }
      },
      speaker: "narration",
      text: "The officers are not officers.\n\nNot fully. Male and female units in Directorate chrome — replicant frames under human skin, eyes that track without blinking. They do not raise their voices. They do not need to. Transport is quiet. The city falls away in strips of light.\n\nProcessing is a sequence of rooms that smell the same. Name. Biometrics. The moment the uniform stops being a uniform and becomes inventory.",
      effects: { flags: { samArrested: true } },
      next: "p1s5_prison_2"
    },
    p1s5_prison_2: {
      speaker: "narration",
      text: "They give him a number.\n\nSomewhere behind glass, a clerk attaches Samuel Page to a case that already knows how it wants to end.",
      next: "p1s5_prison_3"
    },
    p1s5_prison_3: {
      speaker: "narration",
      text: "In a different lounge, Marcus pours nothing. Elias only nods. Vincent’s channel shows Gracie’s building still on his route list for tomorrow.",
      next: "p1s5_prison_4"
    },
    p1s5_prison_4: {
      speaker: "narration",
      text: "Sam sits on a bunk that does not care who he saved on Deck Seven.\n\nThe golden age did not end with a speech.\n\nIt ended with a door closing and a woman watching — either reaching for him, or already turning toward someone else.",
      next: "p1s5_end_1"
    },
    p1s5_end_1: {
      bg: "black",
      clearChars: true,
      clearFx: true,
      speaker: "narration",
      text: "— End of Scene 5 —\\n\\nSam’s Destruction.\\n\\nPrison is no longer a threat. It is an address.",
      next: "p1s5_end_card"
    },
    p1s5_end_card: {
      bg: "black",
      clearChars: true,
      hideContainment: true,
      speaker: "narration",
      text: "— End of Part 1 —\n\nSam's Destruction.\n\nPrison is no longer a threat. It is an address.\n\nWhat remains is years, silence, and the men who taught a sector to stop saying his name with respect.",
      ending: {
        type: "chapter",
        title: "End of Part 1",
        subtitle: "Sam's Destruction",
        epigraph: "Prison is an address now.",
        body: "Continue into Part 2 — Chateau d'If, the inhibitor, and the long silence.",
        continueTo: "p2s1_open"
      }
    }
  };
})();
