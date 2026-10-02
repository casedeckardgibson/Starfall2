/* STARFALL P1S1a — Bridge crisis & first choice */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s1a = {
    open_1: {
      saveLabel: "Crisis begins",
      bg: "black",
      location: "—",
      clearChars: true,
      alert: false,
      speaker: "narration",
      text: "Metal tears somewhere deep in the hull.\n\nA pressure wave rolls through the frames a second later — then another, closer, like the ship is being unstitched from the outside in.",
      next: "open_2"
    },
    open_2: {
      speaker: "system",
      text: "WARNING.\nREACTOR CONTAINMENT FAILURE.\nSTRUCTURAL INTEGRITY: 61%.",
      effects: { containment: 61 },
      next: "open_3"
    },
    open_3: {
      bg: "bridgeDanger",
      location: "Ardent Horizon · Command Bridge",
      alert: true,
      containment: 61,
      shake: true,
      speaker: "narration",
      text: "The bridge of the Ardent Horizon is a red-lit scramble of straps, shouting, and consoles that refuse to agree with each other. Recycled air tastes faintly of coolant and the metallic tang that never quite leaves ships that haul more than bulk ore.\n\nThrough the forward glass, debris from another vessel tumbles past — plates, a severed spar, something that might once have been a crew module. Beyond that, the Ardent Horizon’s own cargo spine is a dark silhouette: sealed Helios research pods locked under quarantine protocols most of the crew were never briefed on. The freighter yaws hard enough that even veterans grab rails.",
      next: "open_4"
    },
    open_4: {
      shake: true,
      flash: true,
      speaker: "narration",
      text: "Something heavy takes the port shoulder of the ship.\n\nThe deck jumps. People go down hard. For a half-second the emergency klaxon itself seems to lose its place in the noise.",
      next: "open_5"
    },
    open_5: {
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      speaker: "engineer",
      text: "Captain — Deck Seven’s structural grid just folded. Bulkheads are peeling. We’re reading open atmosphere in three compartments and climbing!",
      next: "open_6"
    },
    open_6: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "orders", focus: true },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "Seal the section. Full isolation.",
      next: "open_7"
    },
    open_7: {
      speaker: "engineer",
      text: "Isolation won’t hold at this rate. Pressure’s already past the interlock thresholds. If we don’t vent, the failure walks forward into Six and Five.",
      next: "open_8"
    },
    open_8: {
      speaker: "lena",
      text: "Then we vent. Controlled release, pattern beta —",
      next: "open_9"
    },
    open_9: {
      speaker: "engineer",
      text: "There are still people on Seven. Biometrics are live. I’m counting twenty-eight signatures.",
      next: "open_10"
    },
    open_10: {
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "duty", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      speaker: "sam",
      text: "Don’t vent it. Not yet.",
      next: "open_11"
    },
    open_11: {
      speaker: "lena",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "duty", focus: true }
      },
      text: "Sam, if Seven blows into the spine we lose more than a deck. We lose the ship.",
      next: "open_12"
    },
    open_12: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "Then we pull them first. Rescue teams, pressure suits, whatever still walks. We can get them out.",
      next: "open_13"
    },
    open_13: {
      speaker: "engineer",
      text: "Clock’s not generous. Ninety seconds before Seven’s remaining seals go soft. After that you’re fishing in vacuum.",
      next: "open_14"
    },
    open_14: {
      speaker: "sam",
      text: "Then we use ninety seconds. Not speeches.",
      next: "open_15"
    },
    open_15: {
      speaker: "lena",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "orders", focus: true }
      },
      text: "You’re not going down there. That’s not a request.",
      next: "open_16"
    },
    open_16: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "orders", focus: false }
      },
      text: "Captain, if you want an XO who watches a seal cycle on twenty-eight people, pick a different officer. Order me into something that actually helps.",
      next: "open_17"
    },
    open_17: {
      shake: true,
      speaker: "narration",
      text: "Another hit rolls through the frames. A panel showers sparks across the engineering station. Lena holds Sam’s eyes a beat longer than command doctrine recommends — long enough for both of them to feel the cost of whatever comes next.",
      next: "open_18"
    },
    open_18: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "Twenty-eight people die if we abandon that section. The reactor is climbing out of safe band. If containment fails, there is no section, no bridge, no argument left to have.\n\nYou don’t get to save everyone, Sam. Not on a ship this size. Not on a night like this.",
      next: "open_19"
    },
    open_19: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "I know.\n\nI’m still going to try.",
      next: "choice_1"
    },

    choice_1: {
      saveLabel: "What kind of officer?",
      speaker: "narration",
      text: "Alarms stack on alarms. Twenty-eight lives on a dying deck. A reactor that will not wait for courage to feel tidy.\n\nIn the next breath, Sam decides what kind of officer he is.",
      choices: [
        {
          text: "Save the crew first. I’ll deal with the reactor after.",
          hint: "Integrity +8 · Compassion +5 · Leadership +3",
          next: "c1_a",
          effects: { stats: { integrity: 8, compassion: 5, leadership: 3 } }
        },
        {
          text: "Stabilize the reactor first. Then we go back for them.",
          hint: "Leadership +7 · Integrity +2",
          next: "c1_b",
          effects: { stats: { leadership: 7, integrity: 2 } }
        },
        {
          text: "Pull the reactor schematics. Find a bypass they haven’t burned out.",
          hint: "Cunning +7 · Leadership +5",
          next: "c1_c",
          effects: { stats: { cunning: 7, leadership: 5 } }
        },
        {
          text: "Captain — realistically, how many can we still save?",
          hint: "Trust +5 · Lena respect",
          next: "c1_d",
          effects: { stats: { trust: 5 }, romance: { lena: 5 } }
        }
      ]
    },

    c1_a: {
      speaker: "sam",
      text: "Rescue teams to Seven. Full push. I’ll take the reactor problem as soon as those signatures are moving.",
      next: "c1_a2"
    },
    c1_a2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "That’s not a plan, Sam. That’s a sequence of hopes.",
      next: "c1_a3"
    },
    c1_a3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "It’s the only sequence that doesn’t start by writing those people off. I’ll make the reactor my problem. Just get the teams moving.",
      next: "crisis_1"
    },

    c1_b: {
      speaker: "sam",
      text: "If the reactor goes, there is no rescue. We lock the climb first — then we spend every second we buy on Seven.",
      next: "c1_b2"
    },
    c1_b2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "impressed", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "That’s the first thing you’ve said that doesn’t sound like a eulogy with extra steps. Do it. I’ll keep Seven’s seals on life support as long as the math allows.",
      next: "crisis_1"
    },

    c1_c: {
      speaker: "sam",
      text: "There has to be a bypass the main board isn’t showing. I need the live schematics — every feed, every scorched path.",
      next: "c1_c2"
    },
    c1_c2: {
      speaker: "engineer",
      chars: {
        right: { id: "engineer", sprite: "scared", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "Primary bypass chain died in the first hit. Secondary routes are red across half the board. What’s left is manual, ugly, and not rated for a man in a hurry.",
      next: "c1_c3"
    },
    c1_c3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "Then I’ll take ugly. Put the schematics on my channel. Captain — keep the ship under us while I find a door that still opens.",
      next: "c1_c4"
    },
    c1_c4: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "Don’t make me regret trusting your hands over the book.",
      next: "crisis_1"
    },

    c1_d: {
      speaker: "sam",
      text: "I need the honest number. Not the briefing version. If we do everything right — how many walk out of Seven?",
      next: "c1_d2"
    },
    c1_d2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "…If the seals hold and the teams don’t freeze, maybe half. Maybe. And that’s if the reactor stays polite while we work.",
      next: "c1_d3"
    },
    c1_d3: {
      speaker: "narration",
      text: "Sam’s gaze cuts once across the bridge — the scared faces, the hands still doing their jobs.",
      next: "c1_d4"
    },
    c1_d4: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "Then we work like half isn’t good enough. Give me the window. I’ll spend it.",
      next: "crisis_1"
    }
  };
})();
