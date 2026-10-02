/* STARFALL P1S4a — The morning after the smear */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s4a = {
    p1s4_open: {
      saveLabel: "Helios · Morning",
      bg: "lounge",
      location: "Helios HQ · Executive Floor",
      alert: false,
      flashback: false,
      hideContainment: true,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "adrian", sprite: "stern", focus: true }
      },
      speaker: "narration",
      text: "Morning light on the executive floor does not soften anything.\n\nAdrian Vale does not sit. He stands at the glass with a tablet in one hand and the expression of a man who has already made three calls Sam was not invited to hear.",
      next: "p1s4_a_2"
    },
    p1s4_a_2: {
      speaker: "adrian",
      text: "Sit down, Commander.",
      next: "p1s4_a_3"
    },
    p1s4_a_3: {
      speaker: "narration",
      text: "Sam sits. The chair is the same one from the offer meeting. It feels smaller.",
      next: "p1s4_a_4"
    },
    p1s4_a_4: {
      speaker: "adrian",
      text: "The safety review flag from last night is not a rumor anymore. Two board members asked me, before coffee, whether your authentication string on that memo was a clerical error or a confession.",
      next: "p1s4_a_5"
    },
    p1s4_a_5: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "adrian", sprite: "stern", focus: false }
      },
      text: "It’s forged. The string is almost right. Almost is the tell.",
      next: "p1s4_a_6"
    },
    p1s4_a_6: {
      speaker: "adrian",
      text: "Almost is also what a skilled man says when he gets caught.\n\nI’m not accusing you. I’m telling you how the room sounds when you’re not in it.",
      next: "p1s4_a_7"
    },
    p1s4_a_7: {
      speaker: "sam",
      text: "Then put me in the room.",
      next: "p1s4_a_8"
    },
    p1s4_a_8: {
      speaker: "adrian",
      chars: {
        center: { id: "adrian", sprite: "thoughtful", focus: true }
      },
      text: "I did. They want distance. Temporary suspension of the public itinerary. No interviews. No gala follow-ups. Natalie is still authorized to manage residual press — if you still want her to.",
      next: "p1s4_a_9"
    },
    p1s4_a_9: {
      speaker: "narration",
      text: "Adrian’s eyes hold on Sam a second longer than corporate manners require.",
      next: "p1s4_a_10"
    },
    p1s4_a_10: {
      speaker: "adrian",
      text: "Listen to me carefully. Heroes are useful until they become liabilities. I sponsored you because I believed the Horizon story was clean.\n\nIf someone is building a different story, they will not stop at a memo. They will go after the people standing next to you.",
      next: "p1s4_a_11"
    },
    p1s4_a_11: {
      speaker: "sam",
      text: "Gracie.",
      next: "p1s4_a_12"
    },
    p1s4_a_12: {
      speaker: "adrian",
      text: "Among others.\n\nKeep your head down. Document everything. And Sam — if there is anything in your private life that photographs badly, fix it before someone else does.",
      next: "p1s4_a_13"
    },
    p1s4_a_13: {
      speaker: "narration",
      text: "He does not wait for an answer. The tablet is already lighting with the next fire.\n\nIn the corridor outside, the station hums like nothing is wrong.",
      next: "p1s4_a_14"
    },
    p1s4_a_14: {
      speaker: "narration",
      text: "Sam’s personal channel shows two messages waiting.\n\nOne from Gracie: *Are you okay? The feeds are ugly.*\n\nOne from Natalie: *We need to talk. Not in the open. Annex. Now.*",
      next: "p1s4_choice_msg"
    },
    p1s4_choice_msg: {
      saveLabel: "Two messages",
      speaker: "narration",
      text: "Both want him. Only one of them is asking from home.",
      choices: [
        {
          text: "Answer Gracie first. Then deal with Natalie.",
          hint: "Gracie + · Integrity +",
          next: "p1s4_msg_gracie_1",
          effects: {
            romance: { gracie: 5 },
            stats: { integrity: 3, trust: 3 }
          }
        },
        {
          text: "Go straight to the annex. Natalie said now.",
          hint: "Natalie route pressure",
          next: "p1s4_msg_nat_1",
          effects: {
            romance: { natalie: 3 },
            stats: { cunning: 2 }
          }
        },
        {
          text: "Call Gracie on the way to the annex.",
          hint: "Split attention",
          next: "p1s4_msg_both_1",
          effects: {
            romance: { gracie: 2, natalie: 1 },
            stats: { trust: 1 }
          }
        }
      ]
    },
    p1s4_msg_gracie_1: {
      speaker: "sam",
      text: "I’m okay. It’s noise. I’m handling it. Stay home if you can — I’ll come to you when I’m clear.",
      next: "p1s4_msg_gracie_2"
    },
    p1s4_msg_gracie_2: {
      speaker: "narration",
      text: "Her reply is short: *Come home when you can. I don’t like how this feels.*\n\nHe pockets the channel and turns toward the annex anyway. Natalie does not send messages like that for theater alone — or she does, and that is worse.",
      next: "p1s4_branch"
    },
    p1s4_msg_nat_1: {
      speaker: "narration",
      text: "He types nothing to Gracie. The omission sits in his chest like a held breath as he walks the corridor toward Natalie’s door.",
      next: "p1s4_branch"
    },
    p1s4_msg_both_1: {
      speaker: "narration",
      text: "He calls Gracie while the annex door grows larger ahead of him.",
      next: "p1s4_msg_both_2"
    },
    p1s4_msg_both_2: {
      speaker: "gracie",
      text: "You sound like you’re walking into something.",
      next: "p1s4_msg_both_3"
    },
    p1s4_msg_both_3: {
      speaker: "sam",
      text: "Press management. I’ll be home. I mean it.",
      next: "p1s4_msg_both_4"
    },
    p1s4_msg_both_4: {
      speaker: "gracie",
      text: "Sam. If something’s wrong beyond the feeds, tell me before I find out from a stranger.",
      next: "p1s4_msg_both_5"
    },
    p1s4_msg_both_5: {
      speaker: "sam",
      text: "I will.",
      next: "p1s4_msg_both_6"
    },
    p1s4_msg_both_6: {
      speaker: "narration",
      text: "He hangs up a half-second too fast. The annex lock reads his clearance and opens.",
      next: "p1s4_branch"
    },

    p1s4_branch: {
      speaker: "narration",
      text: "The strategy annex is the same room as before. The light is lower. The air knows more than it should.",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.natalieAffair || f.natalieHollow || f.reliedOnNatalie) {
          return "p1s4_nat_collect_1";
        }
        return "p1s4_faith_trap_1";
      },
      next: "p1s4_faith_trap_1"
    }
  };
})();
