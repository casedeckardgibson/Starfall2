/* STARFALL P1S3d — The File */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s3d = {
    p1s3_file_1: {
      saveLabel: "Gala night",
      bg: "reception",
      location: "Helios Prestige Gala · Orbital Deck",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: true },
        center: { id: "adrian", sprite: "formal", focus: false }
      },
      speaker: "narration",
      text: "The gala is a machine for manufacturing certainty. Glasses rise. Sam’s name travels the room ahead of him.\n\nAdrian toasts the rescue culture. Someone laughs too loudly. The future looks inevitable.",
      next: "p1s3_file_2"
    },
    p1s3_file_2: {
      speaker: "narration",
      text: "Elsewhere — a private lounge two levels down — inevitability is being rewritten.",
      next: "p1s3_file_3"
    },
    p1s3_file_3: {
      bg: "privateRoom",
      location: "Private lounge · Restricted",
      clearChars: true,
      chars: {
        left: { id: "vincent", sprite: "evil", focus: false },
        center: { id: "elias", sprite: "uncle", focus: true },
        right: { id: "marcus", sprite: "evil", focus: false }
      },
      speaker: "elias",
      text: "The board loves him. Love is a weather pattern. We don’t need weather. We need a storm with his name on the report.",
      effects: { flags: { frameJobStarted: true } },
      next: "p1s3_file_4"
    },
    p1s3_file_4: {
      speaker: "marcus",
      text: "Horizon logs can be… clarified. Negligence reads better than sabotage if you don’t know where to look.",
      next: "p1s3_file_5"
    },
    p1s3_file_5: {
      speaker: "vincent",
      text: "Gracie is still the soft point. If he stayed faithful, we invent the sin. If he didn’t — we only need to aim the light.",
      next: "p1s3_file_6"
    },
    p1s3_file_6: {
      speaker: "elias",
      text: "And the blood. Families keep receipts longer than companies do.",
      next: "p1s3_file_7"
    },
    p1s3_file_7: {
      speaker: "narration",
      text: "Three glasses touch. Not a toast. A contract.",
      next: "p1s3_file_8"
    },
    p1s3_file_8: {
      bg: "reception",
      location: "Helios Prestige Gala",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "party", focus: true }
      },
      speaker: "narration",
      text: "Natalie finds him under the chandelier light in a dress that does not belong to any briefing. Champagne in hand, smile for the room — and a second, private look when the cameras turn away.",
      next: "p1s3_file_8b"
    },
    p1s3_file_8b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "party2", focus: true }
      },
      text: "You’re doing the inevitable-hero face. Good. Hold it. I’m about to ruin your evening in the useful way.",
      next: "p1s3_file_8c"
    },
    p1s3_file_8c: {
      speaker: "narration",
      chars: {
        center: { id: "natalie", sprite: "party3", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      text: "She leans in as if sharing a joke for the gallery. Her breath brushes his ear. Then his tablet buzzes against his palm — safety review flag, a memo with his authentication string in the wrong place, a journalist’s question that should not exist yet.",
      effects: { flags: { firstSmear: true } },
      next: "p1s3_file_9"
    },
    p1s3_file_9: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "That’s not a leak. That’s a shaped charge. Someone wants you sweating before you can think.\n\nStay close. I can run interference — or I can run something else if you ask nicely.",
      next: "p1s3_choice_e"
    },
    p1s3_choice_e: {
      saveLabel: "First hit",
      speaker: "narration",
      text: "The gala noise continues. The first real strike has already landed.",
      choices: [
        {
          text: "Stay. Let Natalie handle the PR.",
          hint: "Reputation soft-save · Relied on Natalie",
          next: "p1s3_e_natalie_1",
          effects: {
            stats: { reputation: 4 },
            flags: { reliedOnNatalie: true },
            romance: { natalie: 4 }
          }
        },
        {
          text: "Leave. Find Gracie in person.",
          hint: "Gracie + · Integrity +",
          next: "p1s3_e_gracie_1",
          effects: {
            romance: { gracie: 8 },
            stats: { integrity: 5, trust: 4 }
          }
        },
        {
          text: "Dig into the memo yourself. Tonight.",
          hint: "Cunning + · Investigating",
          next: "p1s3_e_dig_1",
          effects: {
            stats: { cunning: 8, leadership: 3 },
            flags: { samInvestigating: true }
          }
        },
        {
          text: "Call Lena for unofficial technical eyes.",
          hint: "Only if that door still exists",
          next: "p1s3_e_lena_gate",
          effects: {
            stats: { cunning: 3 }
          }
        }
      ]
    },
    p1s3_e_natalie_1: {
      speaker: "sam",
      text: "Contain it. I’ll finish the room.",
      next: "p1s3_e_natalie_1b"
    },
    p1s3_e_natalie_1b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "party2", focus: true }
      },
      text: "Stay in the light. Laugh once. Touch my arm if a camera finds us — it reads as charm, not panic.",
      next: "p1s3_e_natalie_2"
    },
    p1s3_e_natalie_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "drink", focus: true }
      },
      text: "That’s my specialty. Go look inevitable.\n\nAnd after… if you need a door that locks, you still have mine.",
      next: "p1s3_e_merge"
    },
    p1s3_e_gracie_1: {
      speaker: "narration",
      text: "He leaves the toast unfinished. Cameras catch the exit. Gracie catches the look on his face and understands before he speaks.",
      next: "p1s3_e_gracie_2"
    },
    p1s3_e_gracie_2: {
      bg: "gracieApt",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "gracie",
      text: "Tell me it’s not starting.",
      next: "p1s3_e_gracie_3"
    },
    p1s3_e_gracie_3: {
      speaker: "sam",
      text: "It’s starting. I’m still here.",
      next: "p1s3_e_merge"
    },
    p1s3_e_dig_1: {
      speaker: "narration",
      text: "Sam excuses himself to a service corridor and opens the memo on a private channel. The authentication string is almost perfect. Almost is enough to feel the fingerprint of a man who hated him on the Horizon.",
      next: "p1s3_e_dig_2"
    },
    p1s3_e_dig_2: {
      speaker: "sam",
      text: "Marcus…",
      next: "p1s3_e_merge"
    },
    p1s3_e_lena_gate: {
      speaker: "narration",
      text: "His thumb hovers over Lena’s private channel.",
      nextFn: function (state) {
        if (state.flags && (state.flags.lenaAffair || state.flags.lenaPartyAffair)) {
          return "p1s3_e_lena_affair";
        }
        if (state.flags && state.flags.lenaRomanceClosed) {
          return "p1s3_e_lena_closed";
        }
        return "p1s3_e_lena_ok";
      },
      next: "p1s3_e_lena_ok"
    },
    p1s3_e_lena_ok: {
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "lena",
      text: "Send me the hash. Not the speech. If someone is forging Horizon language, I’ll smell it.\n\nAnd Sam — be careful who you thank in public for the help.",
      next: "p1s3_e_merge"
    },
    p1s3_e_lena_closed: {
      speaker: "narration",
      text: "The channel is still active. Her reply is professional, cold, and useful by exactly one degree.",
      next: "p1s3_e_merge"
    },
    p1s3_e_lena_affair: {
      speaker: "narration",
      text: "She answers too quickly. The old heat is still in the silence between messages. Asking her now risks more than a technical review.",
      next: "p1s3_e_lena_ok"
    },

    p1s3_e_merge: {
      speaker: "narration",
      text: "By the time the gala thins, the first smear is alive in places Sam cannot enter without invitation.\n\nMarcus has his logs. Elias has his blood stories. Vincent has his angles on Gracie.\n\nWhether Sam kept his integrity or hollowed it out with Natalie, the machine does not care. It only needs him high enough to fall from.",
      next: "p1s3_end_1"
    },
    p1s3_end_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Everything he wanted is still on the table.\n\nSo is the price.\n\nThe frame is no longer a conversation in a side lounge. It is a schedule.",
      next: "p1s3_end_card"
    },
    p1s3_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      hideContainment: true,
      clearFx: true,
      speaker: "narration",
      text: "— End of Scene 3 —\n\nEverything Sam Wants.",
      next: "p1s3_to_s4"
    },
    p1s3_to_s4: {
      speaker: "narration",
      text: "The first smear is already living in rooms Sam cannot enter.\n\nWhat comes next will not ask what he deserves. It will ask what they can make the sector believe.",
      next: "p1s4_open"
    }
  };
})();
