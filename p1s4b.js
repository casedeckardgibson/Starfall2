/* STARFALL P1S4b — Natalie collects OR Vincent builds the lie */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s4b = {

    /* ========== PATH: Natalie cashes the favor ========== */
    p1s4_nat_collect_1: {
      saveLabel: "Annex · Collection",
      bg: "lounge",
      location: "Helios · Strategy Annex",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      speaker: "narration",
      text: "Natalie is already inside. Jacket off. Hair slightly less perfect than the gala. A second glass waits on the desk like a decision that was made without him.",
      next: "p1s4_nat_collect_2"
    },
    p1s4_nat_collect_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "drink", focus: true }
      },
      text: "Close the door.",
      next: "p1s4_nat_collect_3"
    },
    p1s4_nat_collect_3: {
      speaker: "narration",
      text: "He does. The lock settles with a soft corporate click.",
      next: "p1s4_nat_collect_4"
    },
    p1s4_nat_collect_4: {
      speaker: "natalie",
      text: "I killed three placements of that photo last night. Two more are circling in private boards I don’t fully control. Adrian’s board is spooked. You heard him.",
      next: "p1s4_nat_collect_5"
    },
    p1s4_nat_collect_5: {
      speaker: "sam",
      text: "You said we needed to talk.",
      next: "p1s4_nat_collect_6"
    },
    p1s4_nat_collect_6: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "We do.\n\nI don’t work for free, Sam. Not when the work is this ugly and the hour is this late in the story.",
      next: "p1s4_nat_collect_7"
    },
    p1s4_nat_collect_7: {
      speaker: "sam",
      text: "If this is about money—",
      next: "p1s4_nat_collect_8"
    },
    p1s4_nat_collect_8: {
      speaker: "natalie",
      text: "It isn’t.\n\nYou asked me to bury something. I buried it. Favors like that don’t live in expense reports. They live in rooms with the door closed. I told you that.",
      next: "p1s4_nat_collect_9"
    },
    p1s4_nat_collect_9: {
      speaker: "narration",
      text: "She sets the glass down and crosses to him. Not rushed. Not shy. The kind of walk that assumes the ending.",
      next: "p1s4_nat_collect_10"
    },
    p1s4_nat_collect_10: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      text: "I’m not asking you to leave Gracie in a message. I’m asking you to stop pretending last time was a mistake you can unwrite by being polite in daylight.",
      next: "p1s4_nat_collect_11"
    },
    p1s4_nat_collect_11: {
      speaker: "sam",
      text: "Natalie. The board is already looking for a reason.",
      next: "p1s4_nat_collect_12"
    },
    p1s4_nat_collect_12: {
      speaker: "natalie",
      text: "Then don’t give them a speech. Give me an hour. After that, I’ll keep being the woman who makes you look inevitable.\n\nOr you can walk out, and I can stop catching knives for a man who only wants me when the corridor is empty.",
      next: "p1s4_nat_choice"
    },
    p1s4_nat_choice: {
      decision: "natalie_favor",
      bg: "lounge",
      location: "Helios · Strategy Annex",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      saveLabel: "The favor",
      speaker: "narration",
      text: "Her hand rests on his chest. Not pushing. Measuring whether the heartbeat answers.",
      choices: [
        {
          text: "Refuse. Walk out.",
          hint: "Integrity + · Refuse favor",
          next: "p1s4_nat_refuse_1",
          effects: {
            stats: { integrity: 10 },
            flags: { refusedNatalieFavor: true },
            romance: { natalie: -8, gracie: 4 }
          }
        },
        {
          text: "Stay. Pay what she’s asking.",
          hint: "Natalie · Deepen the hollow",
          next: "p1s4_nat_pay_1",
          effects: {
            stats: { integrity: -10 },
            romance: { natalie: 12, gracie: -8 },
            flags: { natalieAffair: true, natalieHollow: true, gracieDoubt: 8 }
          }
        }
      ]
    },

    p1s4_nat_refuse_1: {
      speaker: "sam",
      text: "No.\n\nYou helped. I’m grateful. I’m not currency.",
      next: "p1s4_nat_refuse_2"
    },
    p1s4_nat_refuse_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "…Alright.\n\nClose the door from the other side, then. And understand that “grateful” does not move private boards.",
      next: "p1s4_nat_refuse_3"
    },
    p1s4_nat_refuse_3: {
      speaker: "narration",
      text: "He leaves. The corridor feels cleaner than it should.\n\nWhat he does not know: Vincent already has a different hour scheduled — and Gracie’s name is on the message that will pull her into the building.",
      next: "p1s4_faith_trap_1"
    },

    p1s4_nat_pay_1: {
      speaker: "narration",
      fx: "zoom",
      text: "He does not step back.\n\nNatalie reads it in his face before he finds a sentence. Her mouth finds his with the certainty of someone collecting a debt and a desire at the same time.",
      next: "p1s4_nat_pay_2"
    },
    p1s4_nat_pay_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      text: "Good. Don’t narrate it. Just be here.",
      next: "p1s4_nat_pay_3"
    },
    p1s4_nat_pay_3: {
      speaker: "narration",
      text: "She backs him to the desk hard enough to rattle the glass. Fingers at his belt. Skirt shoved up. When she sinks onto him it is not gentle — it is claimed, breath breaking against his neck, hips rolling with a rhythm that says she has thought about this more than once since the last time.",
      next: "p1s4_nat_pay_4"
    },
    p1s4_nat_pay_4: {
      speaker: "natalie",
      text: "Look at me — yes — like that —",
      next: "p1s4_nat_pay_5"
    },
    p1s4_nat_pay_5: {
      speaker: "narration",
      text: "The annex is not built for silence. A chair leg scrapes. Someone laughs far down the corridor. Natalie does not slow. She pulls him deeper and comes with her face turned into his shoulder, muffling a sound that would not survive a thinner door.",
      next: "p1s4_nat_pay_6"
    },
    p1s4_nat_pay_6: {
      speaker: "narration",
      text: "Sam follows a moment later, grip tight on the desk edge, the part of him that still knows Gracie’s morning message locked outside the room with the rest of the honest day.",
      next: "p1s4_nat_pay_7"
    },
    p1s4_nat_pay_7: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "shy", focus: true }
      },
      text: "…Stay a second. Don’t run to the bathroom like a man already writing the apology.",
      next: "p1s4_nat_pay_8"
    },
    p1s4_nat_pay_8: {
      speaker: "narration",
      text: "He doesn’t run.\n\nWhich is why he is still there — half-dressed, her forehead against his collarbone — when the annex door handle turns without a knock.",
      effects: { flags: { caughtWithNatalie: true } },
      next: "p1s4_door_1"
    },

    /* ========== PATH: Faithful — Vincent builds the lie ========== */
    p1s4_faith_trap_1: {
      saveLabel: "Annex · Official",
      bg: "lounge",
      location: "Helios · Strategy Annex",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      speaker: "narration",
      text: "Natalie looks tired in a professional way. The bottle is absent. The tablet is not.",
      next: "p1s4_faith_trap_2"
    },
    p1s4_faith_trap_2: {
      speaker: "natalie",
      text: "I’ll be blunt. The memo is being treated as signal, not noise. I can still shape residual press, but you need to be seen as cooperative and boring. No closed-door drama. No late exits that photograph like guilt.",
      next: "p1s4_faith_trap_3"
    },
    p1s4_faith_trap_3: {
      speaker: "sam",
      text: "Then we work the facts. Marcus was on the Horizon. The string is wrong in a specific way.",
      next: "p1s4_faith_trap_4"
    },
    p1s4_faith_trap_4: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "Facts are slow. Images are fast. I’m asking you to sit here and go through the board questions until your answers sound like a man who has nothing to hide — because the alternative is them deciding you do.",
      next: "p1s4_faith_trap_5"
    },
    p1s4_faith_trap_5: {
      speaker: "narration",
      text: "It is ordinary work. It is also a closed door, two people, a long enough window for someone else to write a story around the outline.",
      next: "p1s4_faith_trap_6"
    },
    p1s4_faith_trap_6: {
      bg: "privateRoom",
      location: "Elsewhere · Same hour",
      clearChars: true,
      chars: {
        center: { id: "vincent", sprite: "evil", focus: true }
      },
      speaker: "narration",
      text: "Vincent Rourke does not need Sam to be guilty.\n\nHe needs Gracie to arrive at the wrong second with the right fear in her hands.",
      next: "p1s4_faith_trap_7"
    },
    p1s4_faith_trap_7: {
      speaker: "vincent",
      text: "She’s in the annex with him. Door closed. After the board already smelled blood.\n\nIf you want the truth, Gracie, you don’t text. You go.",
      next: "p1s4_faith_trap_8"
    },
    p1s4_faith_trap_8: {
      speaker: "narration",
      text: "The message is not signed with his full name. It does not need to be. It is specific enough to hurt and vague enough to feel like concern.",
      next: "p1s4_faith_trap_9"
    },
    p1s4_faith_trap_9: {
      bg: "lounge",
      location: "Helios · Strategy Annex",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      speaker: "natalie",
      text: "Again. If they ask about Deck Seven casualties, you do not improvise compassion. You state procedure. Compassion reads as guilt on a bad day.",
      next: "p1s4_faith_trap_10"
    },
    p1s4_faith_trap_10: {
      speaker: "sam",
      text: "That’s cold.",
      next: "p1s4_faith_trap_11"
    },
    p1s4_faith_trap_11: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "It’s survival. You can be warm at home.",
      next: "p1s4_faith_trap_12"
    },
    p1s4_faith_trap_12: {
      speaker: "narration",
      text: "She leans across him to highlight a line on the tablet. Her shoulder brushes his. Innocent. Visible. Timed.\n\nOutside, footsteps stop at the annex door.",
      effects: { flags: { framedInnocently: true } },
      next: "p1s4_door_1"
    }
  };
})();
