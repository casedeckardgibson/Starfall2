/* STARFALL P1S3c — Natalie Cross */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s3c = {
    p1s3_nat_1: {
      saveLabel: "Natalie briefing",
      bg: "lounge",
      location: "Helios HQ · Strategy Annex",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      speaker: "narration",
      text: "Natalie’s annex sits off the main corridor like a secret someone forgot to classify. The lights are lower than regulation. Two chairs. One table. A carafe of something that is not water.",
      next: "p1s3_nat_2"
    },
    p1s3_nat_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "Sit. You look like you’ve been saluting furniture all morning.",
      next: "p1s3_nat_3"
    },
    p1s3_nat_3: {
      speaker: "sam",
      text: "Adrian’s idea of a light schedule.",
      next: "p1s3_nat_4"
    },
    p1s3_nat_4: {
      speaker: "natalie",
      text: "Adrian’s idea of a light schedule is how men get gray at the temples before thirty-five.\n\nI’m supposed to walk you through the questions the board will ask. The ones designed to see if you flinch.",
      next: "p1s3_nat_5"
    },
    p1s3_nat_5: {
      speaker: "sam",
      text: "I’ve answered harder questions with less air.",
      next: "p1s3_nat_6"
    },
    p1s3_nat_6: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "On a bridge, maybe. In a room full of people who smile while they measure you for a noose, honesty is just another kind of fuel.\n\nI’m not here to make you a liar. I’m here to keep you from volunteering the rope.",
      next: "p1s3_nat_7"
    },
    p1s3_nat_7: {
      speaker: "narration",
      text: "She pours for both of them, the bottle catching the low light. When she sets his glass down, her fingers brush the back of his hand and stay a half-second longer than accident allows.",
      chars: {
        center: { id: "natalie", sprite: "drink", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      next: "p1s3_nat_7b"
    },
    p1s3_nat_7b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "drink", focus: true }
      },
      text: "Don’t look so suspicious. It’s only wine. The dangerous thing in this room isn’t in the glass.",
      next: "p1s3_nat_8"
    },
    p1s3_nat_8: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "You still do that thing. Looking at people like you’re deciding whether to trust the deck under them.\n\nGracie used to talk about that look. Like weather. Like something you stepped into and didn’t fully leave.",
      next: "p1s3_nat_9"
    },
    p1s3_nat_9: {
      speaker: "sam",
      text: "She told you that?",
      next: "p1s3_nat_10"
    },
    p1s3_nat_10: {
      speaker: "natalie",
      text: "She told me a lot of things, years ago, when we still shared clothes and worse secrets.\n\nI remember more than she thinks I do. Including how you looked at her across a crowded room and made every other man feel temporary.",
      next: "p1s3_nat_11"
    },
    p1s3_nat_11: {
      speaker: "narration",
      text: "Natalie leans back, one leg crossed, the line of her skirt riding just high enough to be intentional. Her voice drops without losing its polish.",
      next: "p1s3_nat_12"
    },
    p1s3_nat_12: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      text: "I’m not going to pretend I only took this assignment for the career. Watching you rise is… educational. Watching you up close is something else.",
      next: "p1s3_nat_13"
    },
    p1s3_nat_13: {
      speaker: "sam",
      text: "Natalie.",
      next: "p1s3_nat_14"
    },
    p1s3_nat_14: {
      speaker: "natalie",
      text: "I like the way you say my name when you’re trying to be careful. It almost works.",
      next: "p1s3_choice_c"
    },

    p1s3_choice_c: {
      saveLabel: "Boundary",
      speaker: "narration",
      text: "The annex holds still. Her knee is close enough that he can feel the heat of it through the air between them.",
      choices: [
        {
          text: "Shut it down. Professional only.",
          hint: "Integrity + · Hard boundary",
          next: "p1s3_c_block_1",
          effects: {
            stats: { integrity: 6 },
            flags: { natalieBlocked: true },
            romance: { natalie: -2 }
          }
        },
        {
          text: "Stay warm. Stay clear — you’re taken.",
          hint: "Soft boundary",
          next: "p1s3_c_clear_1",
          effects: {
            stats: { integrity: 3, trust: 2 },
            flags: { nataliePatient: true },
            romance: { natalie: 4 }
          }
        },
        {
          text: "Don’t pull away. Let her close the space.",
          hint: "Integrity − · Opening",
          next: "p1s3_c_open_1",
          effects: {
            stats: { integrity: -6 },
            flags: { natalieOpening: true },
            romance: { natalie: 12 }
          }
        },
        {
          text: "Tell her about Vincent, Marcus, the net you feel.",
          hint: "Confide · Gamble",
          next: "p1s3_c_confide_1",
          effects: {
            stats: { trust: 3, cunning: 2 },
            flags: { toldNatalieConspiracy: true },
            romance: { natalie: 7 }
          }
        }
      ]
    },

    p1s3_c_block_1: {
      speaker: "sam",
      text: "You’re good at your job. That’s where this stays. I’m not available for the rest of the conversation you’re starting.",
      next: "p1s3_c_block_2"
    },
    p1s3_c_block_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "There it is. The wall.\n\nFine. I’ll be brilliant from the other side of it. Just don’t act surprised when the other side is where the real information lives.",
      next: "p1s3_c_block_3"
    },
    p1s3_c_block_3: {
      speaker: "narration",
      text: "She uncrosses her legs slowly, eyes on his, and turns the tablet toward him as if nothing almost happened.",
      next: "p1s3_c_rumor_1"
    },

    p1s3_c_clear_1: {
      speaker: "sam",
      text: "I like competent company. I like that you know Gracie. I’m not going to pretend the air in here is simple.\n\nIt still ends the same place: I go home to her.",
      next: "p1s3_c_clear_2"
    },
    p1s3_c_clear_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "shy", focus: true }
      },
      text: "God, you’re earnest. It’s unfair. Most men would have already pretended not to understand me.",
      next: "p1s3_c_clear_2b"
    },
    p1s3_c_clear_2b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "Alright. I’ll be the friend who knows the temperature of the room and doesn’t put her hand on the thermostat… often.",
      next: "p1s3_c_clear_3"
    },
    p1s3_c_clear_3: {
      speaker: "narration",
      text: "Her smile softens. When she hands him the tablet, her thumb strokes once across his knuckles — light, deliberate, denied if challenged.",
      next: "p1s3_c_rumor_1"
    },

    p1s3_c_open_1: {
      speaker: "narration",
      text: "He doesn’t move back.\n\nNatalie notices. Of course she does. She rises just enough to perch on the edge of the table in front of him, skirt whispering against his knee.",
      next: "p1s3_c_open_2"
    },
    p1s3_c_open_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      text: "You’re allowed to look at me like that. I’m not glass. I won’t break.\n\nI might bite, though.",
      next: "p1s3_c_open_3"
    },
    p1s3_c_open_3: {
      speaker: "sam",
      text: "This is a bad idea.",
      next: "p1s3_c_open_4"
    },
    p1s3_c_open_4: {
      speaker: "natalie",
      text: "Most of the interesting ones are.\n\nI’m not asking you to leave her tonight. I’m asking you to stop pretending your body didn’t answer when I touched your hand.",
      next: "p1s3_c_open_5"
    },
    p1s3_c_open_5: {
      speaker: "narration",
      text: "She takes his wrist and guides his palm to her thigh, just above the knee, under the hem. Warm skin. Stockings ending in a lace edge he can feel with his fingertips.\n\nShe holds him there — not forcing, waiting.",
      next: "p1s3_c_open_6"
    },
    p1s3_c_open_6: {
      speaker: "natalie",
      text: "See? Still careful. Still here.\n\nWe can stop. Or we can finish the briefing in a way the board didn’t schedule.",
      next: "p1s3_c_open_7"
    },
    p1s3_c_open_7: {
      speaker: "narration",
      text: "Outside the annex, footsteps pass and fade. Inside, Sam’s pulse is loud enough to taste.",
      next: "p1s3_c_rumor_1"
    },

    p1s3_c_confide_1: {
      speaker: "sam",
      text: "Vincent keeps finding Gracie. Marcus was on the Horizon when containment nearly killed us. My uncle talks like he already knows how my story ends.\n\nI don’t have proof. I have the feeling of a corridor getting narrower.",
      next: "p1s3_c_confide_2"
    },
    p1s3_c_confide_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "Then we treat the feeling like sensor data. I’ll watch the social knives. You watch the technical ones.",
      next: "p1s3_c_confide_3"
    },
    p1s3_c_confide_3: {
      speaker: "narration",
      text: "She shifts closer while she listens, shoulder almost against his. When she speaks again her mouth is near his ear.",
      next: "p1s3_c_confide_4"
    },
    p1s3_c_confide_4: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "Thank you for not performing the lone hero for me. It’s… attractive. Annoyingly so.\n\nIf someone is hunting you, I’d rather be the person in the blind than the person in the story they sell.",
      next: "p1s3_c_rumor_1"
    },

    p1s3_c_rumor_1: {
      speaker: "narration",
      text: "Natalie wakes the tablet. A still image: Gracie at a transit spine, Vincent angled in like he belongs in the frame. The timestamp is recent. The crop is cruel.",
      next: "p1s3_c_rumor_2"
    },
    p1s3_c_rumor_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "Two private boards already. Not public — not yet. Someone wants your hands shaking before the promotion vote.",
      next: "p1s3_c_rumor_3"
    },
    p1s3_c_rumor_3: {
      speaker: "sam",
      text: "That’s not what happened.",
      next: "p1s3_c_rumor_4"
    },
    p1s3_c_rumor_4: {
      speaker: "natalie",
      text: "What happened doesn’t travel. What it looks like does.\n\nTell me how you want to play it. I’ll match your temperature.",
      next: "p1s3_choice_d"
    },

    p1s3_choice_d: {
      saveLabel: "The rumor",
      speaker: "narration",
      text: "The photo sits between them. Natalie watches his face more than the screen.",
      choices: [
        {
          text: "Go to Gracie. Straight. No spin.",
          hint: "Trust + · Gracie +",
          next: "p1s3_d_gracie_1",
          effects: {
            stats: { trust: 6, integrity: 4 },
            romance: { gracie: 8 },
            flags: { gracieDoubt: -3 }
          }
        },
        {
          text: "Ask Natalie to bury it.",
          hint: "Natalie leverage · Integrity −",
          next: "p1s3_d_bury_1",
          effects: {
            stats: { integrity: -5, reputation: 4 },
            flags: { reliedOnNatalie: true },
            romance: { natalie: 8 }
          }
        },
        {
          text: "Confront Vincent in public.",
          hint: "Leadership + · Escalation",
          next: "p1s3_d_confront_1",
          effects: {
            stats: { leadership: 5, reputation: -3 },
            flags: { firstSmear: true }
          }
        },
        {
          text: "Ignore it. Starve the rumor.",
          hint: "Gracie Doubt +",
          next: "p1s3_d_ignore_1",
          effects: {
            flags: { gracieDoubt: 5 },
            stats: { cunning: 2 }
          }
        }
      ]
    },

    p1s3_d_gracie_1: {
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "sam",
      text: "There’s a photo of you and Vincent circulating. I came here before I went anywhere else.",
      next: "p1s3_d_gracie_2"
    },
    p1s3_d_gracie_2: {
      speaker: "gracie",
      text: "He found me at the spine after shift. I didn’t invite him. I left.\n\nThank you for asking like you already believed me.",
      next: "p1s3_d_gracie_3"
    },
    p1s3_d_gracie_3: {
      speaker: "narration",
      text: "She rests her forehead against his. For a moment the boards and their poison feel far away.",
      next: "p1s3_c_tempt_gate"
    },

    p1s3_d_bury_1: {
      speaker: "sam",
      text: "Kill it. Quietly. I don’t want Gracie breathing this if we can stop it at the source.",
      next: "p1s3_d_bury_2"
    },
    p1s3_d_bury_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "Already working the counters.\n\nYou know favors like this don’t live in spreadsheets, Sam. They live in rooms with the door closed.",
      next: "p1s3_d_bury_3"
    },
    p1s3_d_bury_3: {
      speaker: "narration",
      text: "She says it lightly. Her eyes do not.",
      next: "p1s3_c_tempt_gate"
    },

    p1s3_d_confront_1: {
      speaker: "narration",
      text: "Sam finds Vincent under the atrium glass and does not bother with privacy. The argument draws eyes. Vincent smiles like a man being handed free advertising.",
      next: "p1s3_d_confront_2"
    },
    p1s3_d_confront_2: {
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        right: { id: "vincent", sprite: "joke", focus: false }
      },
      speaker: "vincent",
      text: "Careful, Page. Raise your voice like that and people start wondering what you’re afraid they’ll see.",
      next: "p1s3_c_tempt_gate"
    },

    p1s3_d_ignore_1: {
      speaker: "sam",
      text: "If I chase every shadow, I become one.",
      next: "p1s3_d_ignore_2"
    },
    p1s3_d_ignore_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "Pretty. I’ll put it on a plaque when they bury you under excellent principles.",
      next: "p1s3_c_tempt_gate"
    },

    p1s3_c_tempt_gate: {
      speaker: "narration",
      text: "Evening settles over the station spine. Natalie’s last message is short: still here. door open. no agenda unless you bring one.",
      nextFn: function (state) {
        if (state.flags && (state.flags.natalieOpening || state.flags.reliedOnNatalie)) {
          return "p1s3_c_tempt_1";
        }
        return "p1s3_file_1";
      },
      next: "p1s3_file_1"
    },

    p1s3_c_tempt_1: {
      bg: "lounge",
      location: "Helios · Strategy Annex · After hours",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "drink", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      speaker: "narration",
      text: "The annex is dimmer now. Natalie’s jacket is gone. A glass hangs loose in her fingers. The top buttons of her blouse are undone as if the workday simply forgot them. She doesn’t look surprised to see him.",
      next: "p1s3_c_tempt_1b"
    },
    p1s3_c_tempt_1b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "I poured two. Habit. Or hope. You can decide which one is less embarrassing for me.",
      next: "p1s3_c_tempt_2"
    },
    p1s3_c_tempt_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      text: "I was starting to think you’d be sensible.\n\nCome here. You don’t have to talk. Talking is how you talk yourself out of what you already walked back for.",
      next: "p1s3_choice_tempt"
    },
    p1s3_choice_tempt: {
      decision: "natalie_line",
      bg: "lounge",
      location: "Helios · Strategy Annex · After hours",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      saveLabel: "After hours",
      speaker: "narration",
      text: "She waits by the desk, bare feet on the cool floor, eyes steady on his.",
      choices: [
        {
          text: "Leave. Go home to Gracie.",
          hint: "Integrity + · Line held",
          next: "p1s3_tempt_no_1",
          effects: {
            stats: { integrity: 8 },
            romance: { gracie: 6 },
            flags: { natalieOpening: false }
          }
        },
        {
          text: "Stay.",
          hint: "Natalie · The line breaks",
          next: "p1s3_tempt_yes_1",
          effects: {
            stats: { integrity: -12 },
            romance: { natalie: 18, gracie: -10 },
            flags: { natalieAffair: true, natalieHollow: true, gracieDoubt: 12 }
          }
        }
      ]
    },

    p1s3_tempt_no_1: {
      speaker: "sam",
      text: "Good night, Natalie.",
      next: "p1s3_tempt_no_2"
    },
    p1s3_tempt_no_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "…Alright.\n\nClose the door on your way out. And Sam — when the next knife comes, you still know where I am.",
      next: "p1s3_tempt_no_3"
    },
    p1s3_tempt_no_3: {
      speaker: "narration",
      text: "He leaves while his hands are still his. The corridor air feels colder than it should.",
      next: "p1s3_file_1"
    },

    p1s3_tempt_yes_1: {
      speaker: "narration",
      fx: "zoom",
      cg: "natalie_desk",
      text: "He steps in and shuts the door.\n\nNatalie meets him halfway, fists in his collar, mouth already open under his. The kiss is not exploratory. It is the end of a long argument with himself.",
      next: "p1s3_tempt_yes_2"
    },
    p1s3_tempt_yes_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      text: "Finally.\n\nDon’t be gentle because you feel guilty. Be honest because you want this.",
      next: "p1s3_tempt_yes_3"
    },
    p1s3_tempt_yes_3: {
      speaker: "narration",
      text: "She backs onto the desk, pulls him between her knees, and guides his hand under her skirt. She’s warm, already slick when his fingers find her. A soft sound escapes her throat — pleased, unsurprised.",
      next: "p1s3_tempt_yes_4"
    },
    p1s3_tempt_yes_4: {
      speaker: "natalie",
      text: "That’s it… God, I’ve thought about your hands since that stupid birthday party. Don’t stop.",
      next: "p1s3_tempt_yes_5"
    },
    p1s3_tempt_yes_5: {
      speaker: "narration",
      text: "Stockings tear under impatient fingers. She frees him from his trousers, strokes him once, twice, eyes on his face like she’s memorizing the moment he stops being careful.\n\nWhen she lines him up and takes him in, it is slow and deliberate — every inch a choice she refuses to let him call an accident.",
      next: "p1s3_tempt_yes_6"
    },
    p1s3_tempt_yes_6: {
      speaker: "natalie",
      text: "Look at me while you fuck me. I want you present for this.",
      next: "p1s3_tempt_yes_7"
    },
    p1s3_tempt_yes_7: {
      speaker: "narration",
      text: "The desk edge bites his palms. Natalie locks her legs around him and rolls her hips to meet every thrust, breath breaking against his mouth. She comes first, sharp and shaking, nails in his shoulders — then pulls him deeper until he spills into her with a groan he won’t be able to pretend was anything else.",
      next: "p1s3_tempt_yes_8"
    },
    p1s3_tempt_yes_8: {
      speaker: "narration",
      text: "For a while they stay like that, joined, breathing the same small air.\n\nNatalie traces his jaw with a fingertip, almost tender.",
      next: "p1s3_tempt_yes_8b"
    },
    p1s3_tempt_yes_8b: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "shy", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      text: "…I didn’t expect it to feel like that. Ignore me. I’m not usually the one who goes quiet after.",
      next: "p1s3_tempt_yes_9"
    },
    p1s3_tempt_yes_9: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "You can still go home.\n\nYou’ll just have to decide what face you wear when you open the door.",
      next: "p1s3_tempt_yes_10"
    },
    p1s3_tempt_yes_10: {
      speaker: "narration",
      hideCg: true,
      clearFx: true,
      text: "Outside, the station keeps its bright, indifferent schedule. Inside the annex, something that cannot be briefed away has already been done.",
      next: "p1s3_file_1"
    }
  };
})();
