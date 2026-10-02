/* STARFALL P1S1c — Reactor approach & shower flashback */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s1c = {
    choice_2: {
      saveLabel: "Who goes in?",
      decision: "reactor_team",
      bg: "bridgeDanger",
      location: "Ardent Horizon · Approach to Coolant",
      alert: true,
      flashback: false,
      hideContainment: false,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      speaker: "narration",
      text: "The coolant chamber. Remote access is dead. Someone has to walk into the heat — into radiation the suits were never rated for this long.\n\nCommand is not a committee. It is a body in a corridor.",
      choices: [
        {
          text: "I'll go alone.",
          hint: "Integrity +5 · Leadership +5 · Sam enters the chamber",
          next: "c2_a",
          effects: {
            stats: { integrity: 5, leadership: 5 },
            flags: { reactorAlone: true },
            decision: "reactor_team"
          }
        },
        {
          text: "Send the engineering team. Stay on the bridge.",
          hint: "Mission risk — others in the heat",
          next: "c2_b",
          effects: {
            stats: { leadership: -3 },
            decision: "reactor_team"
          }
        },
        {
          text: "You and I go together.",
          hint: "Lena Romance +5 · Trust +5 · Both enter",
          next: "c2_c",
          effects: {
            romance: { lena: 5 },
            stats: { trust: 5 },
            flags: { lenaRomanceOpen: true, reactorWithLena: true },
            decision: "reactor_team"
          }
        }
      ]
    },

    c2_a: {
      speaker: "sam",
      text: "I’ll take the chamber. You need someone on the valves who will still answer when the board lies — and you need your XO alive afterward. I’m volunteering for both problems.",
      next: "c2_a2"
    },
    c2_a2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "That is not how I define success, Sam. Come back. That is an order dressed as a request.",
      next: "c2_a3"
    },
    c2_a3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      },
      text: "Understood.",
      next: "fb_shower_1"
    },

    c2_b: {
      speaker: "sam",
      text: "Engineering knows those valves better than I do. Send them. I’ll hold the bridge and coordinate.",
      next: "c2_b2"
    },
    c2_b2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "orders", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "And if the chamber seals on them? You’re volunteering other people’s bodies for a problem that may already be personal.",
      next: "c2_b3"
    },
    c2_b3: {
      speaker: "sam",
      text: "Then I go after them. It’s the best plan that isn’t me pretending I can be in two places at once.",
      next: "c2_b_fail_1"
    },
    c2_b_fail_1: {
      speaker: "narration",
      text: "The engineering team goes in.\n\nThe channel holds for eleven minutes. Then it becomes static, then a sound that is not words, then nothing.",
      next: "c2_b_fail_2"
    },
    c2_b_fail_2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "shocked", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "Sam — containment is spiking. They’re not answering.",
      next: "c2_b_fail_3"
    },
    c2_b_fail_3: {
      speaker: "narration",
      text: "He moves for the corridor too late. The interlock seals. The ship judges the choice without interest in his regret.",
      next: "c2_b_fail_4"
    },
    c2_b_fail_4: {
      bg: "black",
      clearChars: true,
      alert: false,
      speaker: "narration",
      text: "Deck Seven does not make it.\n\nNeither does the team that walked in without him.",
      next: "c2_b_fail_end"
    },
    c2_b_fail_end: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "— MISSION FAILURE —",
      ending: {
        type: "gameover",
        path: "reactor",
        warpDecision: "reactor_team",
        title: "Mission Failure — The Chamber",
        epigraph: "Command is not a committee.",
        body: "Sam sent others into the heat and stayed where it was safe to give orders.\n\nThe Ardent Horizon lost Deck Seven. The engineering team never came back.\n\nSome doors only open for the person willing to walk through them."
      }
    },

    c2_c: {
      speaker: "sam",
      text: "You know this ship’s bones better than anyone on the board. I know the people on Seven. We go together — or we invent a worse plan under worse pressure.",
      next: "c2_c2"
    },
    c2_c2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "impressed", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "I was not going to let you do this alone. Don’t look surprised. You’re becoming irritatingly competent at reading me.",
      next: "c2_c3"
    },
    c2_c3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "impressed", focus: false }
      },
      text: "I’ve had a good teacher.",
      next: "fb_shower_1"
    },

    fb_shower_1: {
      saveLabel: "Crew deck — three weeks earlier",
      bg: "showers",
      location: "Ardent Horizon · Crew Deck · Three weeks earlier",
      alert: false,
      flashback: true,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true }
      },
      speaker: "narration",
      text: "Three weeks earlier. The crew deck is nearly empty on the late watch.\n\nSam walks the corridor with a maintenance tablet, half-reading a report he has already skimmed twice. He turns a corner as a shower door slides open and steam rolls into the hall.",
      next: "fb_shower_2"
    },
    fb_shower_2: {
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "towel", focus: true }
      },
      speaker: "narration",
      text: "Lena steps out in a towel, hair damp against her shoulders. She sees him, sees the tablet, sees the exact second his training and his body disagree.",
      next: "fb_shower_3"
    },
    fb_shower_3: {
      speaker: "lena",
      text: "XO. Something wrong with the report — or with the doorway?",
      next: "fb_shower_4"
    },
    fb_shower_4: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "towel", focus: false }
      },
      text: "I opened the wrong door. I’m sorry. I’ll —",
      next: "fb_shower_5"
    },
    fb_shower_5: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "towel", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "Or the right one. You can look at me, Sam. I’m not a classified system.",
      next: "fb_shower_6"
    },
    fb_shower_6: {
      speaker: "sam",
      text: "That doesn’t seem like a good idea. You’re my captain.",
      next: "fb_shower_7"
    },
    fb_shower_7: {
      speaker: "lena",
      text: "That’s not what I asked.",
      next: "fb_shower_8"
    },
    fb_shower_8: {
      speaker: "narration",
      text: "He looks.\n\nLena straightens. The towel slips. Steam and silence fill the space where rank is supposed to live.",
      next: "fb_shower_9"
    },
    fb_shower_9: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "seduce", focus: false }
      },
      text: "You know exactly what you’re doing.",
      next: "fb_shower_10"
    },
    fb_shower_10: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "seduce", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "Immensely. You’re red to the ears and still trying to invent a regulation that will save you.\n\nTell me something honest. If I weren’t your captain — would you still be looking at me like that?",
      next: "fb_shower_choice"
    },
    fb_shower_choice: {
      saveLabel: "The shower question",
      speaker: "narration",
      text: "The question hangs in the wet air. Rank, the woman waiting on Earth, and the long quiet of a corridor that will not stay secret if either of them is careless.",
      choices: [
        {
          text: "Yes.",
          hint: "Lena Romance + · Door opens",
          next: "fb_shower_yes",
          effects: { romance: { lena: 12 }, flags: { lenaRomanceOpen: true } }
        },
        {
          text: "I have Gracie waiting for me back home.",
          hint: "Integrity + · Line held",
          next: "fb_shower_no",
          effects: { stats: { integrity: 6 }, romance: { lena: -2, gracie: 4 } }
        }
      ]
    },

    fb_shower_yes: {
      speaker: "sam",
      text: "Yes.",
      next: "fb_shower_yes2"
    },
    fb_shower_yes2: {
      speaker: "narration",
      text: "The teasing leaves her face. What replaces it is quieter and more dangerous.",
      next: "fb_shower_yes3"
    },
    fb_shower_yes3: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "seduce", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "That was brave. Probably stupid. Those aren’t mutually exclusive.\n\nBe careful with me, Sam. I’m not sure I’m going to be the responsible one.",
      next: "fb_shower_yes4"
    },
    fb_shower_yes4: {
      speaker: "narration",
      text: "She reaches up and straightens his collar. Her fingers linger a moment longer than regulation allows, then she walks past him into the ordinary ship, leaving steam and a problem he will not solve in three weeks of polite distance.",
      next: "crisis_return_1"
    },

    fb_shower_no: {
      speaker: "sam",
      text: "I have Gracie waiting for me back home. I won’t pretend that question doesn’t land — but I won’t answer it the way you’re asking.",
      next: "fb_shower_no2"
    },
    fb_shower_no2: {
      speaker: "narration",
      text: "Lena’s hand, halfway toward his sleeve, stills. Disappointment shows — real, and oddly respectful.",
      next: "fb_shower_no3"
    },
    fb_shower_no3: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "towel", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "I know. That’s probably why I like you.\n\nGo, XO. Before I invent a worse question.",
      next: "fb_shower_no4"
    },
    fb_shower_no4: {
      speaker: "narration",
      text: "He leaves. Alone in the steam, Lena looks at her empty hand.\n\n“Idiot,” she says — to him, or to herself. The corridor does not decide.",
      next: "crisis_return_1"
    }
  };
})();
