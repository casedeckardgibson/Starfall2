/* STARFALL P2S3e — Lyra XO; clear ship; offer */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s3e = {
    p2s3_lyra_1: {
      saveLabel: "Lyra",
      bg: "pirateDeck",
      location: "True Purpose · Outer airlock",
      clearChars: true,
      alert: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "confident", focus: false }
      },
      speaker: "narration",
      text: "The hatch opens on a weapon and a woman who does not waste posture.\\n\\nMetal graft at the temple. Blood that is not all hers. Eyes still human.",
      next: "p2s3_lyra_2"
    },
    p2s3_lyra_2: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "determined", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "You’re the pressure drop on ring three.\\n\\nName. Side. And why I shouldn’t put you with the rest of the meat.",
      next: "p2s3_lyra_3"
    },
    p2s3_lyra_3: {
      speaker: "sam",
      text: "Sam Page. I killed the host on my craft. I’m not security. I’m not clean either — not the way they mean it. Your decks smell like the same problem.",
      next: "p2s3_lyra_4"
    },
    p2s3_lyra_4: {
      speaker: "lyra",
      text: "Captain’s dead. One of our own did it after the party went wrong. I’m XO. That makes this my hull until someone better stands up — and nobody better is standing.\\n\\nYou know how to end them?",
      next: "p2s3_lyra_5"
    },
    p2s3_lyra_5: {
      speaker: "sam",
      text: "Stem-line. Don’t trust the eyes. Don’t let them finish a transfer. I’ve closed a room like this before.",
      next: "p2s3_lyra_choice"
    },
    p2s3_lyra_choice: {
      saveLabel: "Her call",
      speaker: "narration",
      text: "She weighs him the way captains weigh tools — except she is not captain yet, only the person left holding the weight.",
      choices: [
        {
          text: "Offer help without conditions.",
          hint: "Earn trust",
          next: "p2s3_clear_1",
          effects: { romance: { lyra: 10 }, stats: { leadership: 3 } }
        },
        {
          text: "Help — then they get him off this rock.",
          hint: "Bargain",
          next: "p2s3_clear_1",
          effects: { romance: { lyra: 5 }, stats: { cunning: 3 }, flags: { pirateDebt: true } }
        },
        {
          text: "Demand a weapon and a filter first. Then work.",
          hint: "Practical",
          next: "p2s3_clear_1",
          effects: { stats: { cunning: 4 }, romance: { lyra: 3 } }
        }
      ]
    },
    p2s3_clear_1: {
      saveLabel: "Sweep",
      bg: "pirateDeck",
      location: "True Purpose · Crew deck",
      clearChars: true,
      fx: "vignette",
      shake: true,
      chars: {
        left: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "determined", focus: false }
      },
      speaker: "narration",
      text: "The bunks are a crime scene that still remembers the orgy.\\n\\nLyra takes the left aisle. Sam calls angles. A host in translucent skin rises off a mattress; she puts three rounds where he points and does not watch it fall. Another drops from a duct — he fires until the clicking stops. No speeches. Only the work.",
      next: "p2s3_clear_2"
    },
    p2s3_clear_2: {
      speaker: "lyra",
      text: "Engineering. If it’s in the scrubbers we’re already a tomb.",
      next: "p2s3_clear_3"
    },
    p2s3_clear_3: {
      location: "True Purpose · Engineering",
      speaker: "narration",
      text: "Heat. Close walls. Sweet-rot through the mask.\\n\\nTwo more hosts. One still wears a dead man’s grin over too many teeth. They close the room the way people close rooms when friendship is a luxury for later — seal, shoot, check the stem twice.",
      next: "p2s3_clear_4"
    },
    p2s3_clear_4: {
      alert: false,
      clearFx: true,
      speaker: "narration",
      text: "Quiet returns. Half a crew gone. Captain’s blood already dry on the lower deck.\\n\\nLyra’s graft ticks. She looks at Sam like a tool that worked — and like a man who was not surprised enough.",
      next: "p2s3_clear_5"
    },
    p2s3_clear_5: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "confident", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "Berth’s open if you want it. Refuse and you still get fuel — I’m not interested in stranding the only person who walked into that mess useful.\\n\\nBut the belts are going to cough this up again. I’d rather the next room we close has you in it.",
      next: "p2s3_offer_choice"
    },
    p2s3_offer_choice: {
      saveLabel: "Lyra’s offer",
      speaker: "narration",
      text: "Fifteen years late. A face he only met this morning. A host dead on his own ramp. A pirate XO holding a ship that just ate its captain.",
      choices: [
        {
          text: "Take the berth.",
          hint: "Pirate road",
          next: "p2s3_p_join",
          effects: {
            flags: { savedPirates: true, pirateDebt: true },
            romance: { lyra: 12 },
            stats: { leadership: 4 }
          }
        },
        {
          text: "Fuel and a vector. Alone.",
          hint: "Hard path",
          next: "p2s3_p_alone",
          effects: {
            flags: { savedPirates: true, pirateDebt: false },
            stats: { integrity: 3 }
          }
        },
        {
          text: "Join — price is help on Helios / Horizon truth.",
          hint: "Leverage",
          next: "p2s3_p_deal",
          effects: {
            flags: { savedPirates: true, pirateDebt: true, fariaDataCore: true },
            romance: { lyra: 15 },
            stats: { cunning: 5, leadership: 4 }
          }
        }
      ]
    },
    p2s3_p_join: {
      speaker: "narration",
      text: "No ceremony. A rack. A watch rotation. The ship still smells of bleach fighting blood.\\n\\nLyra does not ask what he was before the belts. Not yet.",
      next: "p2s3_end_1"
    },
    p2s3_p_alone: {
      speaker: "narration",
      text: "Fuel. A heading. A warning about ports that still salute corporate flags.\\n\\nShe watches him go like someone filing a name for later.",
      next: "p2s3_end_1"
    },
    p2s3_p_deal: {
      speaker: "lyra",
      text: "Horizon dirt for guns when your list comes due.\\n\\nWe don’t do justice on this boat. We do leverage. If that fits whatever kept you alive in a hole for fifteen years — you can have a rack.",
      next: "p2s3_end_1"
    },
    p2s3_end_1: {
      bg: "space",
      clearChars: true,
      alert: false,
      speaker: "narration",
      text: "Outpost 7 falls behind.\\n\\nSam Page — late, armed with a face he only just met and a debt that may run either direction — leaves a rock that learned his silhouette as the man who closed a bay.\\n\\nSomewhere else, other clocks ran other numbers. He does not know them yet.",
      next: "p2s3_end_card"
    },
    p2s3_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      speaker: "narration",
      text: "— End of Scene —\\n\\nAfter the Station.\\n\\nVictim zero died on the ramp. The trail led through an orgy that became a slaughter. Lyra Voss held the hull because the captain could not.",
      next: "p2s3_to_p3"
    },
    p2s3_to_p3: {
      speaker: "narration",
      text: "A berth is not a future.\n\nIt is only the first night of one — if the man in the rack can decide what name the belts will learn.",
      next: "p3s1_open"
    }
  };
})();
