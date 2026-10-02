/* STARFALL P2S2c — Weeks after: fallout, letters, Vincent’s return */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s2c = {
    p2s2_years_1: {
      saveLabel: "The weeks after",
      bg: "black",
      location: "—",
      clearChars: true,
      speaker: "narration",
      text: "Six months is not long enough for a sector to forget a headline.\\n\\nIt is long enough for a body to learn the shape of a new habit.",
      next: "p2s2_years_2"
    },
    p2s2_years_2: {
      bg: "gracieApt",
      location: "Gracie’s Apartment · Weeks later",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "narration",
      text: "The wall still remembers.\\n\\nGracie avoids looking at the plaster where her shoulders had been when Vincent’s thigh pushed between hers — when his fingers found her already wet and she came shaking into his coat with shame braided so tight to relief she still cannot separate them.\\n\\nShe locks the door some nights. She unlocks it on others. He was right about that.",
      next: "p2s2_years_2b"
    },
    p2s2_years_2b: {
      speaker: "narration",
      text: "Second-order costs keep arriving in ordinary packaging.\\n\\nA licensing board “reviews” her trade permit. Her family calls less — not from cruelty, from the exhausted math of not knowing what to say. The shop breathes because Vincent’s quiet fixes hold; she hates how visible that dependence feels every time a delivery arrives on time.",
      next: "p2s2_years_3"
    },
    p2s2_years_3: {
      speaker: "narration",
      text: "The monitored letters from Colonial Safety continue in fits. Some months Sam’s handwriting is steady. Some months the black bars win.\\n\\nShe writes back with the smell of another man still sometimes on her sheets — or she tells herself it is only memory.",
      next: "p2s2_years_choice_write"
    },
    p2s2_years_choice_write: {
      saveLabel: "The letters",
      speaker: "narration",
      text: "One evening the blank page stays blank longer than usual. The apartment is quiet. Her body is not — it remembers the wall, the fingers, the promise that he would be back.",
      choices: [
        {
          text: "Keep writing. Even if half is redacted. He needs a voice outside.",
          hint: "Loyalty · Hope held",
          next: "p2s2_write_keep",
          effects: {
            romance: { gracie: 3 },
            stats: { integrity: 2 },
            flags: { wroteGracieFromPrison: true }
          }
        },
        {
          text: "Write less. Truth can’t survive the censor — and false comfort feels like lying.",
          hint: "Honesty · Distance grows",
          next: "p2s2_write_less",
          effects: {
            flags: { gracieStoppedWriting: true }
          }
        },
        {
          text: "Stop. Put the paper away. Survive the day in front of her.",
          hint: "Self-preservation · Hope cracks",
          next: "p2s2_write_stop",
          effects: {
            flags: { gracieStoppedWriting: true, gracieHopeCollapsed: true },
            romance: { gracie: -4 }
          }
        }
      ]
    },
    p2s2_write_keep: {
      speaker: "narration",
      text: "She writes about the shop’s stubborn plants, about a joke only Sam would find funny, about nothing Colonial Safety can weaponize.\\n\\nShe does not write about the rain-smell on a coat, or the way her knees gave out. The omission sits beside the ink like a second letter.",
      next: "p2s2_years_4"
    },
    p2s2_write_less: {
      speaker: "narration",
      text: "The letters become shorter. Dates. Weather. A line that says she is fine when she is not.\\n\\nBrevity is easier when half her truth would not survive the censor — and the other half would destroy the man reading it.",
      next: "p2s2_years_4"
    },
    p2s2_write_stop: {
      speaker: "narration",
      text: "The page goes back in the drawer.\\n\\nFor a few days she feels lighter. Then she feels the shape of the absence and understands she has not put down a burden — she has set down a hand that was still trying to hold hers through paper while another hand had already learned the inside of her thigh.",
      next: "p2s2_years_4"
    },
    p2s2_years_4: {
      speaker: "narration",
      text: "Vincent does not gloat.\\n\\nHe becomes useful, then familiar, then present in the way weather is present — in the corridor when a stranger’s stare turns sharp, in the kitchen when the day has been too long, in the pause before she opens the door and already knows whose knock it is.",
      next: "p2s2_years_5"
    },
    p2s2_years_5: {
      bg: "lounge",
      location: "Public corridor · Evening",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "A stranger recognizes her from an old feed. The word “convict” is not said. It is implied hard enough to bruise.\\n\\nVincent steps half a pace closer — not touching, just present. The stranger finds somewhere else to look. Gracie feels the heat of him at her shoulder and remembers the wall.",
      next: "p2s2_years_6"
    },
    p2s2_years_6: {
      speaker: "vincent",
      text: "You shouldn’t have to walk through that alone.",
      next: "p2s2_years_7"
    },
    p2s2_years_7: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I used to think alone was the honest option.",
      next: "p2s2_years_8"
    },
    p2s2_years_8: {
      speaker: "vincent",
      text: "Honesty doesn’t pay the heat bill. Or stop a rumor from following you into a rental office.\\n\\nCome on. I’ll walk you home.",
      next: "p2s2_years_9"
    },
    p2s2_years_9: {
      speaker: "narration",
      text: "She lets him.\\n\\nOn the transit spine neither of them mentions the night against the plaster. They do not have to. It rides between them like a third passenger — unfinished, patient, waiting for the next unlocked door.",
      next: "p2s2_harden_1"
    }
  };
})();
