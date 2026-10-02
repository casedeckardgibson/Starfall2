/* STARFALL P1S2b — Home branches (dinner / Daniel / Gracie) */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s2b = {
    p1s2_1a_1: {
      speaker: "sam",
      text: "I’d like to hear the details.",
      effects: { flags: { visitedAdrian: true, visitOrder: "adrian", adrianDinner: true } },
      next: "p1s2_1a_2"
    },
    p1s2_1a_2: {
      speaker: "adrian",
      text: "Good.",
      next: "p1s2_1a_3"
    },
    p1s2_1a_3: {
      speaker: "sam",
      text: "But—",
      next: "p1s2_1a_4"
    },
    p1s2_1a_4: {
      speaker: "adrian",
      text: "There’s always a but.",
      next: "p1s2_1a_5"
    },
    p1s2_1a_5: {
      speaker: "sam",
      text: "I’d rather know exactly what I’m agreeing to before I sign anything.",
      next: "p1s2_1a_6"
    },
    p1s2_1a_6: {
      speaker: "adrian",
      text: "Dinner first. Then we talk.",
      next: "p1s2_1a_7"
    },
    p1s2_1a_7: {
      speaker: "sam",
      text: "Deal.",
      next: "p1s2_1a_8"
    },
    p1s2_1a_8: {
      speaker: "adrian",
      text: "Excellent.",
      next: "p1s2_dinner_1"
    },
    p1s2_dinner_1: {
      saveLabel: "Corporate dinner",
      bg: "restaurant",
      location: "Executive Restaurant · Night",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "adrian", sprite: "formal", focus: true }
      },
      speaker: "narration",
      text: "Adrian and Sam sit across from each other at a private table. Earth hangs vast and luminous beneath the floor-to-ceiling window.",
      next: "p1s2_dinner_2"
    },
    p1s2_dinner_2: {
      speaker: "adrian",
      text: "Do you know what your real problem is?",
      next: "p1s2_dinner_3"
    },
    p1s2_dinner_3: {
      speaker: "sam",
      text: "I’ve been told I have several.",
      next: "p1s2_dinner_4"
    },
    p1s2_dinner_4: {
      speaker: "adrian",
      text: "You still believe institutions can be good.",
      next: "p1s2_dinner_5"
    },
    p1s2_dinner_5: {
      speaker: "sam",
      text: "Aren't they?",
      next: "p1s2_dinner_6"
    },
    p1s2_dinner_6: {
      speaker: "adrian",
      text: "Sometimes they serve a greater purpose; sometimes they determine the fate of billions...",
      next: "p1s2_dinner_7"
    },
    p1s2_dinner_7: {
      speaker: "sam",
      text: "Sometimes is enough; I know I am doing what's right for the right reasons.",
      next: "p1s2_dinner_8"
    },
    p1s2_dinner_8: {
      speaker: "narration",
      text: "Adrian studies him over the rim of his glass.",
      next: "p1s2_dinner_9"
    },
    p1s2_dinner_9: {
      speaker: "adrian",
      chars: {
        center: { id: "adrian", sprite: "thoughtful", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      text: "That answer is going to get you hurt one day. \nI want you to be successful, but you should learn from me and not the hard way.",
      next: "p1s2_dinner_10"
    },
    p1s2_dinner_10: {
      speaker: "sam",
      text: "I appreciate that; I'll do my best sir.",
      next: "p1s2_dinner_11"
    },
    p1s2_dinner_11: {
      speaker: "adrian",
      text: "I know you will; I'm counting on it.",
      next: "p1s2_dinner_12"
    },
    p1s2_dinner_12: {
      speaker: "sam",
      text: "So what exactly will sponsorship include?",
      next: "p1s2_dinner_13"
    },
    p1s2_dinner_13: {
      speaker: "adrian",
      text: "Ah yes, let's get down to business.\nI'm taking you under my wing so to speak. You will start the captain's course immediately.\n\nI've already interviewed Captain Voss.\nNothing but the highest praise from her; she's been quite impressed with you.\n\nI'll need to introduce you to the board, and some other allies who will help you navigate corporate politics.",
      next: "p1s2_dinner_14"
    },
    p1s2_dinner_14: {
      speaker: "narration",
      text: "He raises his glass.",
      next: "p1s2_dinner_15"
    },
    p1s2_dinner_15: {
      speaker: "adrian",
      text: "To the young man who doesn’t yet realize how valuable he is.",
      next: "p1s2_dinner_16"
    },
    p1s2_dinner_16: {
      speaker: "narration",
      text: "Sam lifts his own glass and drinks.",
      next: "p1s2_isa_intro_1"
    },

    // Isabella introduction,
    p1s2_isa_intro_1: {
      speaker: "narration",
      text: "Adrian’s attention shifts. A stunning woman in a red dress is approaching the table.",
      next: "p1s2_isa_intro_2"
    },
    p1s2_isa_intro_2: {
      speaker: "adrian",
      text: "Speaking of introductions and corpo-politics... Sam. I’d like you to meet Isabella Rourke.\n\nThe Rourke family is the majority stakeholder in Helios. This is an acquaintance you cannot afford to lose.",
      next: "p1s2_isa_intro_3"
    },
    p1s2_isa_intro_3: {
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "isabella", sprite: "dress", focus: true },
        right: { id: "adrian", sprite: "formal", focus: false }
      },
      speaker: "narration",
      text: "Isabella moves like she owns the air around her—elegant, deliberate, every step measured.\n\nAdrian stands as Isabella greets him with a hug and a kiss on each cheek. \nHer eyes find Sam and linger an extra second with open interest- sharp and unapologetic.",
      next: "p1s2_isa_intro_4"
    },
    p1s2_isa_intro_4: {
      speaker: "isabella",
      text: "So you’re Sam.",
      next: "p1s2_isa_intro_5"
    },
    p1s2_isa_intro_5: {
      speaker: "sam",
      text: "Apparently.",
      next: "p1s2_isa_intro_6"
    },
    p1s2_isa_intro_6: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tease", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      text: "I expected someone taller.",
      next: "p1s2_isa_intro_7"
    },
    p1s2_isa_intro_7: {
      speaker: "sam",
      text: "I get that a lot.",
      next: "p1s2_isa_intro_8"
    },
    p1s2_isa_intro_8: {
      speaker: "isabella",
      text: "Do you?",
      next: "p1s2_isa_intro_9"
    },
    p1s2_isa_intro_9: {
      speaker: "sam",
      text: "No.",
      next: "p1s2_isa_intro_10"
    },
    p1s2_isa_intro_10: {
      speaker: "narration",
      text: "She laughs, low and warm, and takes the empty seat nearest to Sam.",
      next: "p1s2_isa_intro_11"
    },
    p1s2_isa_intro_11: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "giggle", focus: true }
      },
      text: "Tell me something interesting.",
      next: "p1s2_isa_intro_12"
    },
    p1s2_isa_intro_12: {
      speaker: "sam",
      text: "About what?",
      next: "p1s2_isa_intro_13"
    },
    p1s2_isa_intro_13: {
      speaker: "isabella",
      text: "You.",
      next: "p1s2_isa_intro_14"
    },
    p1s2_isa_intro_14: {
      speaker: "sam",
      text: "I’m not very interesting.",
      next: "p1s2_isa_intro_15"
    },
    p1s2_isa_intro_15: {
      speaker: "isabella",
      text: "You’re being modest.",
      next: "p1s2_isa_intro_16"
    },
    p1s2_isa_intro_16: {
      speaker: "sam",
      text: "Or just honest.",
      next: "p1s2_isa_intro_17"
    },
    p1s2_isa_intro_17: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tempt", focus: true }
      },
      text: "Oh, that’s worse.",
      next: "p1s2_isa_intro_18"
    },
    p1s2_isa_intro_18: {
      speaker: "narration",
      text: "She leans in slightly, voice dropping.",
      next: "p1s2_isa_intro_19"
    },
    p1s2_isa_intro_19: {
      speaker: "isabella",
      text: "You’re seeing someone, aren’t you?",
      next: "p1s2_isa_intro_20"
    },
    p1s2_isa_intro_20: {
      speaker: "narration",
      text: "Sam meets her gaze.",
      next: "p1s2_isa_intro_21"
    },
    p1s2_isa_intro_21: {
      speaker: "sam",
      text: "How did you know?",
      next: "p1s2_isa_intro_22"
    },
    p1s2_isa_intro_22: {
      speaker: "isabella",
      text: "Good guys like you usually are.",
      next: "p1s2_isa_intro_23"
    },
    p1s2_isa_intro_23: {
      speaker: "isabella",
      text: "What’s her name?",
      next: "p1s2_isa_intro_24"
    },
    p1s2_isa_intro_24: {
      speaker: "sam",
      text: "Gracie.",
      next: "p1s2_isa_intro_25"
    },
    p1s2_isa_intro_25: {
      speaker: "isabella",
      text: "And how long has she been lucky enough to have you?",
      next: "p1s2_isa_intro_26"
    },
    p1s2_isa_intro_26: {
      speaker: "sam",
      text: "Years.",
      next: "p1s2_isa_intro_27"
    },
    p1s2_isa_intro_27: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tempt2", focus: true }
      },
      text: "She must be something special to keep a man like you.",
      next: "p1s2_isa_intro_28"
    },
    p1s2_isa_intro_28: {
      speaker: "sam",
      text: "She is.",
      next: "p1s2_isa_intro_29"
    },
    p1s2_isa_intro_29: {
      speaker: "narration",
      text: "Isabella’s fingers toy with a strand of her hair. Her eyes never leave his.",
      next: "p1s2_isa_intro_30"
    },
    p1s2_isa_intro_30: {
      speaker: "isabella",
      text: "Interesting…",
      next: "p1s2_call_1"
    },
    p1s2_call_1: {
      speaker: "narration",
      text: "Sam’s communicator vibrates against the table.",
      next: "p1s2_call_2"
    },
    p1s2_call_2: {
      speaker: "system",
      text: "GRACIE — INCOMING\n\nSam?",
      next: "p1s2_call_3"
    },
    p1s2_call_3: {
      speaker: "narration",
      text: "He glances at the screen. Isabella notices immediately.",
      next: "p1s2_call_4"
    },
    p1s2_call_4: {
      speaker: "isabella",
      text: "Is that her?",
      next: "p1s2_choice2"
    },
    p1s2_choice2: {
      saveLabel: "Gracie calls",
      speaker: "narration",
      text: "The communicator waits. Isabella’s attention does not wander.",
      choices: [
        {
          text: "Ignore the call.",
          hint: "Gracie Doubt · Isabella Interest +",
          next: "p1s2_2a_1",
          effects: {
            romance: { isabella: 5 },
            flags: { gracieDoubt: 5 }
          }
        },
        {
          text: "Answer with a work excuse.",
          hint: "Mild doubt · Isabella Interest +",
          next: "p1s2_2b_1",
          effects: {
            romance: { isabella: 5 },
            flags: { gracieDoubt: 3 }
          }
        },
        {
          text: "Leave and go see Gracie.",
          hint: "Gracie Romance + · Integrity +",
          next: "p1s2_2c_1",
          effects: {
            romance: { gracie: 10 },
            stats: { integrity: 5 },
            flags: { graciePriority: true }
          }
        }
      ]
    },
    p1s2_2a_1: {
      speaker: "narration",
      text: "Sam silences the call with a quiet swipe.",
      next: "p1s2_2a_2"
    },
    p1s2_2a_2: {
      speaker: "narration",
      text: "Isabella raises one elegant eyebrow.",
      next: "p1s2_2a_3"
    },
    p1s2_2a_3: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tease", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false }
      },
      text: "That was cold.",
      next: "p1s2_2a_4"
    },
    p1s2_2a_4: {
      speaker: "sam",
      text: "I’ll call her later.",
      next: "p1s2_2a_5"
    },
    p1s2_2a_5: {
      speaker: "isabella",
      text: "Will you?",
      next: "p1s2_2a_6"
    },
    p1s2_2a_6: {
      speaker: "narration",
      text: "He doesn’t reply.\n\nIsabella’s soft laugh is almost fond. Under the table her hand finds his thigh—warm, deliberate. She doesn’t squeeze. She simply rests there, claiming the space.\n\nSam doesn’t move away. Her fingers start to wander over a growing stiffness. His body responds to her touch and she strokes the hardness pressing up through the fabric of his trousers.",
      effects: { flags: { isabellaLingered: true } },
      next: "p1s2_after_adrian"
    },
    p1s2_2b_1: {
      speaker: "sam",
      text: "Hey.",
      next: "p1s2_2b_2"
    },
    p1s2_2b_2: {
      speaker: "gracie",
      text: "Where are you?",
      next: "p1s2_2b_3"
    },
    p1s2_2b_3: {
      speaker: "sam",
      text: "Corporate dinner. Something came up.",
      next: "p1s2_2b_4"
    },
    p1s2_2b_4: {
      speaker: "narration",
      text: "A short silence on the line.",
      next: "p1s2_2b_5"
    },
    p1s2_2b_5: {
      speaker: "gracie",
      text: "Are you okay?",
      next: "p1s2_2b_6"
    },
    p1s2_2b_6: {
      speaker: "narration",
      text: "Sam’s eyes flick briefly to Isabella.",
      next: "p1s2_2b_7"
    },
    p1s2_2b_7: {
      speaker: "sam",
      text: "I’m fine.",
      next: "p1s2_2b_8"
    },
    p1s2_2b_8: {
      speaker: "gracie",
      text: "I miss you.",
      next: "p1s2_2b_9"
    },
    p1s2_2b_9: {
      speaker: "sam",
      text: "I miss you too.",
      next: "p1s2_2b_10"
    },
    p1s2_2b_10: {
      speaker: "gracie",
      text: "Come see me when you’re done?",
      next: "p1s2_2b_11"
    },
    p1s2_2b_11: {
      speaker: "sam",
      text: "I will.",
      next: "p1s2_2b_12"
    },
    p1s2_2b_12: {
      speaker: "narration",
      text: "The call ends.\n\nIsabella watches him with open amusement.",
      next: "p1s2_2b_13"
    },
    p1s2_2b_13: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tempt", focus: true }
      },
      text: "That sounded like a promise.",
      next: "p1s2_2b_14"
    },
    p1s2_2b_14: {
      speaker: "sam",
      text: "It was.",
      next: "p1s2_2b_15"
    },
    p1s2_2b_15: {
      speaker: "isabella",
      text: "Be careful with those.",
      next: "p1s2_2b_16"
    },
    p1s2_2b_16: {
      speaker: "sam",
      text: "Why?",
      next: "p1s2_2b_17"
    },
    p1s2_2b_17: {
      speaker: "isabella",
      text: "Promises are dangerous things.",
      next: "p1s2_2b_18"
    },
    p1s2_2b_18: {
      speaker: "narration",
      text: "She laughs again—soft, private. Under the table her bare foot brushes his calf, then slides higher. Slow. Intentional. \n\nThe arch of her foot traces the inside of his knee, then higher still, until her toes whisper against his inner thigh. She presses lightly, deliberately, right against the growing hardness there.\n\nSam doesn’t pull away. He continues the conversation with Adrian as if nothing is happening. \n\nHis cock is fully hard now, straining against his trousers under the pressure of her foot.",
      effects: { flags: { isabellaLingered: true } },
      next: "p1s2_after_adrian"
    },
    p1s2_2c_1: {
      speaker: "sam",
      text: "I have to go.",
      next: "p1s2_2c_2"
    },
    p1s2_2c_2: {
      speaker: "adrian",
      text: "Already?",
      next: "p1s2_2c_3"
    },
    p1s2_2c_3: {
      speaker: "sam",
      text: "My girlfriend is waiting.",
      next: "p1s2_2c_4"
    },
    p1s2_2c_4: {
      speaker: "narration",
      text: "Isabella’s smile is small and unreadable.",
      next: "p1s2_2c_5"
    },
    p1s2_2c_5: {
      speaker: "isabella",
      text: "Of course she is.",
      next: "p1s2_2c_6"
    },
    p1s2_2c_6: {
      speaker: "narration",
      text: "Sam stands and leaves without looking back.\n\nIsabella watches him go with that same unreadable smile. Adrian only nods — as if he expected the choice.",
      next: "p1s2_after_adrian"
    },

    // ========== BRANCH 1B — DANIEL FIRST ==========,
    p1s2_1b_1: {
      speaker: "sam",
      text: "I’m honored. Truly.",
      effects: { flags: { visitedDaniel: true, visitOrder: "daniel", danielFirst: true } },
      next: "p1s2_1b_2"
    },
    p1s2_1b_2: {
      speaker: "adrian",
      text: "Then we’re agreed?",
      next: "p1s2_1b_3"
    },
    p1s2_1b_3: {
      speaker: "sam",
      text: "Yes. But I need to see my father first.",
      next: "p1s2_1b_4"
    },
    p1s2_1b_4: {
      speaker: "adrian",
      text: "Of course. You’re a very loyal son. That loyalty is what makes you exceptional.",
      next: "p1s2_1b_5"
    },
    p1s2_1b_5: {
      speaker: "sam",
      text: "I’ll come to the reception afterward.",
      next: "p1s2_1b_6"
    },
    p1s2_1b_6: {
      speaker: "adrian",
      text: "Your father first.\nThat’s a good answer.",
      next: "p1s2_daniel_1"
    },
    p1s2_daniel_1: {
      saveLabel: "Page residence",
      bg: "residence",
      location: "Page Residence",
      clearChars: true,
      chars: {
        center: { id: "daniel", sprite: "father", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "narration",
      text: "Daniel opens the door. For a long second he just looks at his son.",
      next: "p1s2_daniel_2"
    },
    p1s2_daniel_2: {
      speaker: "daniel",
      text: "You came straight here.",
      next: "p1s2_daniel_3"
    },
    p1s2_daniel_3: {
      speaker: "sam",
      text: "Of course.",
      next: "p1s2_daniel_4"
    },
    p1s2_daniel_4: {
      speaker: "daniel",
      text: "Adrian Vale didn’t manage to distract you?",
      next: "p1s2_daniel_5"
    },
    p1s2_daniel_5: {
      speaker: "sam",
      text: "You know about Adrian?",
      next: "p1s2_daniel_6"
    },
    p1s2_daniel_6: {
      speaker: "narration",
      text: "Something shifts in Daniel’s expression—caution, old knowledge.",
      next: "p1s2_daniel_7"
    },
    p1s2_daniel_7: {
      speaker: "daniel",
      text: "I know enough. Come inside.",
      next: "p1s2_daniel_8"
    },
    p1s2_daniel_8: {
      speaker: "narration",
      text: "Daniel reaches for a heavy storage box. Sam takes it from him before he can fully lift it.",
      next: "p1s2_daniel_9"
    },
    p1s2_daniel_9: {
      speaker: "daniel",
      text: "I can still lift things.",
      next: "p1s2_daniel_10"
    },
    p1s2_daniel_10: {
      speaker: "sam",
      text: "I know.",
      next: "p1s2_daniel_11"
    },
    p1s2_daniel_11: {
      speaker: "daniel",
      text: "Then stop treating me like I’m already broken.",
      next: "p1s2_daniel_12"
    },
    p1s2_daniel_12: {
      speaker: "sam",
      text: "I’m not.",
      next: "p1s2_daniel_13"
    },
    p1s2_daniel_13: {
      speaker: "daniel",
      text: "You are.",
      next: "p1s2_daniel_14"
    },
    p1s2_daniel_14: {
      speaker: "sam",
      text: "Maybe a little.",
      next: "p1s2_daniel_15"
    },
    p1s2_daniel_15: {
      speaker: "narration",
      text: "Daniel huffs a reluctant laugh.\n\nA quieter beat passes.",
      next: "p1s2_daniel_16"
    },
    p1s2_daniel_16: {
      speaker: "daniel",
      text: "How bad was it? The ship.",
      next: "p1s2_daniel_17"
    },
    p1s2_daniel_17: {
      speaker: "sam",
      text: "Bad.",
      next: "p1s2_daniel_18"
    },
    p1s2_daniel_18: {
      speaker: "daniel",
      text: "And you?",
      next: "p1s2_daniel_19"
    },
    p1s2_daniel_19: {
      speaker: "sam",
      text: "Alive.",
      next: "p1s2_daniel_20"
    },
    p1s2_daniel_20: {
      speaker: "daniel",
      text: "That’s not what I asked.",
      next: "p1s2_daniel_21"
    },
    p1s2_daniel_21: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "daniel", sprite: "father", focus: false }
      },
      text: "I thought I was going to die. For a second I really thought—",
      next: "p1s2_daniel_22"
    },
    p1s2_daniel_22: {
      speaker: "daniel",
      text: "Don’t.",
      next: "p1s2_daniel_23"
    },
    p1s2_daniel_23: {
      speaker: "sam",
      text: "Dad—",
      next: "p1s2_daniel_24"
    },
    p1s2_daniel_24: {
      speaker: "daniel",
      text: "Don’t make me imagine it.",
      next: "p1s2_elias_1"
    },
    p1s2_elias_1: {
      speaker: "narration",
      text: "A knock at the door.\n\nDaniel freezes. Sam notices.",
      next: "p1s2_elias_2"
    },
    p1s2_elias_2: {
      speaker: "sam",
      text: "Who is that?",
      next: "p1s2_elias_3"
    },
    p1s2_elias_3: {
      speaker: "narration",
      text: "Daniel doesn’t answer.\n\nAnother knock—firmer.\n\nSam opens the door.",
      next: "p1s2_elias_4"
    },
    p1s2_elias_4: {
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "elias", sprite: "uncle", focus: true },
        right: { id: "daniel", sprite: "father", focus: false }
      },
      speaker: "narration",
      text: "Elias Page stands on the threshold. Older than Daniel by a handful of years, same bone structure, same eyes.",
      next: "p1s2_elias_5"
    },
    p1s2_elias_5: {
      speaker: "elias",
      text: "Sam.",
      next: "p1s2_elias_6"
    },
    p1s2_elias_6: {
      speaker: "sam",
      text: "Do I know you?",
      next: "p1s2_elias_7"
    },
    p1s2_elias_7: {
      speaker: "elias",
      text: "No.\nBut your father does.",
      next: "p1s2_elias_8"
    },
    p1s2_elias_8: {
      speaker: "narration",
      text: "Daniel’s face has gone pale.",
      next: "p1s2_elias_9"
    },
    p1s2_elias_9: {
      speaker: "sam",
      text: "Dad?",
      next: "p1s2_elias_10"
    },
    p1s2_elias_10: {
      speaker: "elias",
      text: "Hello, Daniel.",
      next: "p1s2_elias_11"
    },
    p1s2_elias_11: {
      speaker: "narration",
      text: "Silence stretches.",
      next: "p1s2_elias_12"
    },
    p1s2_elias_12: {
      speaker: "sam",
      text: "Who is he?",
      next: "p1s2_elias_13"
    },
    p1s2_elias_13: {
      speaker: "elias",
      text: "It’s complicated.",
      next: "p1s2_elias_14"
    },
    p1s2_elias_14: {
      speaker: "sam",
      text: "Try me.",
      next: "p1s2_elias_15"
    },
    p1s2_elias_15: {
      speaker: "elias",
      text: "I’m your uncle.",
      next: "p1s2_elias_16"
    },
    p1s2_elias_16: {
      speaker: "sam",
      text: "I don’t have an uncle.",
      next: "p1s2_elias_17"
    },
    p1s2_elias_17: {
      speaker: "elias",
      text: "That’s what you’ve been told.",
      next: "p1s2_elias_18"
    },
    p1s2_elias_18: {
      speaker: "daniel",
      text: "Elias.",
      next: "p1s2_elias_19"
    },
    p1s2_elias_19: {
      speaker: "elias",
      text: "Still hiding things, I see.",
      next: "p1s2_elias_20"
    },
    p1s2_elias_20: {
      speaker: "daniel",
      text: "Leave.",
      next: "p1s2_elias_21"
    },
    p1s2_elias_21: {
      speaker: "elias",
      text: "Eventually.\nWe’ll talk.",
      next: "p1s2_elias_22"
    },
    p1s2_elias_22: {
      speaker: "narration",
      text: "He turns and walks away into the night.",
      next: "p1s2_elias_23"
    },
    p1s2_elias_23: {
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "daniel", sprite: "father", focus: false }
      },
      speaker: "sam",
      text: "Dad.",
      next: "p1s2_elias_24"
    },
    p1s2_elias_24: {
      speaker: "daniel",
      text: "Not tonight.",
      next: "p1s2_elias_25"
    },
    p1s2_elias_25: {
      speaker: "sam",
      text: "Who was he?",
      next: "p1s2_elias_26"
    },
    p1s2_elias_26: {
      speaker: "daniel",
      text: "Family.",
      next: "p1s2_elias_27"
    },
    p1s2_elias_27: {
      speaker: "sam",
      text: "That’s not an answer.",
      next: "p1s2_elias_28"
    },
    p1s2_elias_28: {
      speaker: "daniel",
      text: "It’s the only one I can give you right now.",
      next: "p1s2_elias_exit"
    },
    p1s2_elias_exit: {
      speaker: "narration",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "daniel", sprite: "father", focus: true }
      },
      text: "The door closes on Elias’s shadow. For a moment the house is only Sam, Daniel, and everything that was not said.",
      next: "p1s2_after_daniel",
      nextFn: function (state) {
        // Father-first: Gracie is already on her way / arrives at the residence next
        if (state.flags && state.flags.visitOrder === "daniel") {
          return "p1s2_gracie_home_1";
        }
        return "p1s2_after_daniel";
      }
    },
    p1s2_gracie_home_1: {
      saveLabel: "Gracie arrives",
      bg: "residence",
      location: "Page Residence",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "daniel", sprite: "father", focus: false }
      },
      speaker: "narration",
      text: "Gracie steps through the open doorway, sees Sam, then Daniel, then the tension still hanging in the air.",
      effects: { flags: { visitedGracie: true } },
      next: "p1s2_gracie_home_2"
    },
    p1s2_gracie_home_2: {
      speaker: "gracie",
      text: "Did I miss something?",
      next: "p1s2_gracie_home_3"
    },
    p1s2_gracie_home_3: {
      speaker: "sam",
      text: "Apparently I just met my uncle.",
      next: "p1s2_gracie_home_4"
    },
    p1s2_gracie_home_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "shocked", focus: true }
      },
      text: "Apparently?",
      next: "p1s2_gracie_home_5"
    },
    p1s2_gracie_home_5: {
      speaker: "daniel",
      text: "Gracie. Some things should wait.",
      next: "p1s2_gracie_home_6"
    },
    p1s2_gracie_home_6: {
      speaker: "narration",
      text: "She studies him for a second, then nods.",
      next: "p1s2_gracie_home_7"
    },
    p1s2_gracie_home_7: {
      speaker: "gracie",
      text: "Okay.",
      next: "p1s2_gracie_home_8"
    },
    p1s2_gracie_home_8: {
      speaker: "narration",
      text: "She takes Sam’s hand, grounding him.",
      next: "p1s2_faithful_check"
    },

    // After Daniel path: faithful vs affair reaction,
    p1s2_faithful_check: {
      speaker: "narration",
      text: "The tension slowly eases. Home settles around them.",
      nextFn: function (state) {
        if (state.flags && state.flags.lenaAffair) return "p1s2_affair_react_1";
        return "p1s2_faithful_1";
      },
      next: "p1s2_faithful_1"
    },
    p1s2_faithful_1: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "happy", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "I’ve been waiting all day.",
      next: "p1s2_faithful_2"
    },
    p1s2_faithful_2: {
      speaker: "sam",
      text: "I know.",
      next: "p1s2_faithful_3"
    },
    p1s2_faithful_3: {
      speaker: "gracie",
      text: "Did you miss me?",
      next: "p1s2_faithful_4"
    },
    p1s2_faithful_4: {
      speaker: "sam",
      text: "Every single day.",
      next: "p1s2_faithful_5"
    },
    p1s2_faithful_5: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true }
      },
      text: "Good answer.",
      next: "p1s2_faithful_6"
    },
    p1s2_faithful_6: {
      speaker: "sam",
      text: "It’s true.",
      next: "p1s2_faithful_7"
    },
    p1s2_faithful_7: {
      speaker: "narration",
      text: "She rises onto her toes and kisses him—slow, lingering, the kind of kiss that says you’re home.",
      effects: { romance: { gracie: 15 }, stats: { trust: 10, integrity: 5 } },
      next: "p1s2_faithful_8"
    },
    p1s2_faithful_8: {
      speaker: "gracie",
      text: "You came home.",
      next: "p1s2_faithful_9"
    },
    p1s2_faithful_9: {
      speaker: "sam",
      text: "I promised.",
      next: "p1s2_faithful_10"
    },
    p1s2_faithful_10: {
      speaker: "gracie",
      text: "You always keep your promises.",
      next: "p1s2_faithful_11"
    },
    p1s2_faithful_11: {
      speaker: "narration",
      text: "Sam smiles.\n\nThe irony of that sentence has not yet reached him.",
      next: "p1s2_intimate_g_1"
    },
    p1s2_intimate_g_1: {
      saveLabel: "Welcome home",
      bg: "residence",
      location: "Page Residence · Night",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "Later that night, after the house is quiet, Gracie leads Sam to their bedroom by the hand.\n\nShe doesn’t speak at first. She simply turns, rises onto her toes again, and kisses him with a hunger that has been building for months.",
      next: "p1s2_intimate_g_2"
    },
    p1s2_intimate_g_2: {
      speaker: "gracie",
      text: "I kept imagining this. Every night you were gone.",
      next: "p1s2_intimate_g_3"
    },
    p1s2_intimate_g_3: {
      chars: {
        center: { id: "gracie", sprite: "sex", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "She guides him backward until the edge of the bed meets his knees. He sits. She climbs into his lap, dress already hiked, and rolls her hips once—slow, deliberate.\n\nSam’s hands settle on her waist, then push the dress away. She isn’t wearing anything underneath.\n\nHe lowers her onto him in one smooth motion. Gracie’s breath catches. For a long moment they stay like that, joined, breathing each other in.\n\nThen she starts to move—deep, unhurried strokes. When she comes it is with a broken little cry he swallows in a kiss. Sam follows moments later, holding her through every pulse.",
      next: "p1s2_intimate_g_4"
    },
    p1s2_intimate_g_4: {
      speaker: "gracie",
      text: "Welcome home.",
      next: "p1s2_intimate_g_5"
    },
    p1s2_intimate_g_5: {
      speaker: "sam",
      text: "I never want to leave again.",
      effects: { flags: { visitedGracie: true } },
      next: "p1s2_after_gracie"
    },
    p1s2_affair_react_1: {
      speaker: "narration",
      text: "Gracie comes to him and kisses him.\n\nSam responds—then hesitates for half a second too long.\n\nGracie feels it.",
      next: "p1s2_affair_react_2"
    },
    p1s2_affair_react_2: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "What’s wrong?",
      next: "p1s2_affair_react_3"
    },
    p1s2_affair_react_3: {
      speaker: "sam",
      text: "Nothing.",
      next: "p1s2_affair_react_4"
    },
    p1s2_affair_react_4: {
      speaker: "gracie",
      text: "You keep saying that.",
      next: "p1s2_affair_react_5"
    },
    p1s2_affair_react_5: {
      speaker: "sam",
      text: "I’m just tired.",
      next: "p1s2_affair_react_6"
    },
    p1s2_affair_react_6: {
      speaker: "narration",
      text: "She searches his face.",
      next: "p1s2_affair_react_7"
    },
    p1s2_affair_react_7: {
      speaker: "gracie",
      text: "…Okay.",
      effects: { flags: { gracieDoubt: 1 } },
      next: "p1s2_affair_react_8"
    },
    p1s2_affair_react_8: {
      speaker: "narration",
      text: "But the doubt is already there.",
      effects: { flags: { visitedGracie: true } },
      next: "p1s2_after_gracie"
    },

    // ========== BRANCH 1C — GRACIE FIRST ==========,
    p1s2_1c_1: {
      speaker: "sam",
      text: "I’d like to accept.",
      effects: { flags: { visitedGracie: true, visitOrder: "gracie", gracieFirst: true } },
      next: "p1s2_1c_2"
    },
    p1s2_1c_2: {
      speaker: "adrian",
      text: "Good.",
      next: "p1s2_1c_3"
    },
    p1s2_1c_3: {
      speaker: "sam",
      text: "But Gracie is waiting for me.",
      next: "p1s2_1c_4"
    },
    p1s2_1c_4: {
      speaker: "adrian",
      text: "Ah.",
      next: "p1s2_1c_5"
    },
    p1s2_1c_5: {
      speaker: "sam",
      text: "What?",
      next: "p1s2_1c_6"
    },
    p1s2_1c_6: {
      speaker: "adrian",
      text: "Nothing.",
      next: "p1s2_1c_7"
    },
    p1s2_1c_7: {
      speaker: "sam",
      text: "That didn’t sound like nothing.",
      next: "p1s2_1c_8"
    },
    p1s2_1c_8: {
      speaker: "adrian",
      text: "Just an observation.\nYou’re still young enough to remember what actually matters.",
      next: "p1s2_home_gracie_1"
    },
    p1s2_home_gracie_1: {
      saveLabel: "Gracie’s apartment",
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "gracie",
      text: "Vincent, I’ve already told you a hundred times—Sam will be back any day now.",
      next: "p1s2_home_gracie_2"
    },
    p1s2_home_gracie_2: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true },
        center: { id: "gracie", sprite: "normal", focus: false }
      },
      text: "Your trust in him is admirable.\nBut he can’t give you the life you deserve.",
      next: "p1s2_home_gracie_3"
    },
    p1s2_home_gracie_3: {
      speaker: "gracie",
      text: "I know you’re wealthy. I appreciate what you did for me last month.\nBut I don’t need luxury.\nAll I need is Sam.",
      next: "p1s2_home_gracie_4"
    },
    p1s2_home_gracie_4: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "normal", focus: true }
      },
      text: "He’s been alone out there for nearly a year. And the last time his ship made Earth orbit… he didn’t even come see you.\nDo you honestly believe he’s stayed faithful this entire time?",
      next: "p1s2_gracie_internal"
    },
    p1s2_gracie_internal: {
      speaker: "narration",
      text: "Gracie is silent. The question sits between them.",
      choices: [
        {
          text: "Yes. Sam is a good man. I’ll marry him the moment he’s home.",
          hint: "Gracie faith holds",
          next: "p1s2_gracie_door_1",
          effects: { romance: { gracie: 5 } }
        },
        {
          text: "I don’t know. I want to believe him… but the distance has been hard.",
          hint: "Gracie Doubt +5",
          next: "p1s2_gracie_door_1",
          effects: { flags: { gracieDoubt: 5 } }
        }
      ]
    },
    p1s2_gracie_door_1: {
      speaker: "narration",
      text: "The door opens.\n\nSam steps inside.\n\nGracie is in his arms before the door even closes.",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "gracie", sprite: "happy", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      next: "p1s2_gracie_door_2"
    },
    p1s2_gracie_door_2: {
      speaker: "gracie",
      text: "I was starting to think you’d forgotten where I lived.",
      next: "p1s2_gracie_door_3"
    },
    p1s2_gracie_door_3: {
      speaker: "sam",
      text: "Never.",
      next: "p1s2_gracie_door_4"
    },
    p1s2_gracie_door_4: {
      speaker: "gracie",
      text: "Good.",
      next: "p1s2_gracie_door_5"
    },
    p1s2_gracie_door_5: {
      speaker: "narration",
      text: "They kiss—hungry, relieved.\n\nThen Sam’s eyes catch movement near the door. His expression cools.\n\nVincent stops on his way out.",
      next: "p1s2_vincent_meet_1"
    },
    p1s2_vincent_meet_1: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "normal", focus: false }
      },
      text: "Hello, Sam. Vincent Rourke.",
      next: "p1s2_vincent_meet_2"
    },
    p1s2_vincent_meet_2: {
      speaker: "sam",
      text: "Vincent.",
      next: "p1s2_vincent_meet_3"
    },
    p1s2_vincent_meet_3: {
      speaker: "vincent",
      text: "I was just visiting a friend.",
      next: "p1s2_vincent_meet_4"
    },
    p1s2_vincent_meet_4: {
      speaker: "sam",
      text: "Gracie?",
      next: "p1s2_vincent_meet_5"
    },
    p1s2_vincent_meet_5: {
      speaker: "gracie",
      text: "Yes.",
      next: "p1s2_vincent_meet_6"
    },
    p1s2_vincent_meet_6: {
      speaker: "vincent",
      text: "We’ve known each other a few months.",
      next: "p1s2_vincent_meet_7"
    },
    p1s2_vincent_meet_7: {
      speaker: "sam",
      text: "Have you.",
      next: "p1s2_vincent_meet_8"
    },
    p1s2_vincent_meet_8: {
      speaker: "vincent",
      text: "Is that a problem?",
      next: "p1s2_vincent_meet_9"
    },
    p1s2_vincent_meet_9: {
      speaker: "sam",
      text: "No.",
      next: "p1s2_vincent_meet_10"
    },
    p1s2_vincent_meet_10: {
      speaker: "vincent",
      text: "Good. I’d hate to start our relationship on the wrong foot.",
      next: "p1s2_vincent_meet_11"
    },
    p1s2_vincent_meet_11: {
      speaker: "sam",
      text: "Same.",
      next: "p1s2_vincent_meet_12"
    },
    p1s2_vincent_meet_12: {
      speaker: "narration",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      text: "Vincent leaves. Sam watches the door long after it closes.",
      next: "p1s2_vincent_meet_13"
    },
    p1s2_vincent_meet_13: {
      speaker: "sam",
      text: "How well do you know him?",
      next: "p1s2_vincent_meet_14"
    },
    p1s2_vincent_meet_14: {
      speaker: "gracie",
      text: "Not very much, but he has helped me with the shop on more than one occasion since you've been gone.",
      next: "p1s2_vincent_meet_15"
    },
    p1s2_vincent_meet_15: {
      speaker: "sam",
      text: "You said you’ve known him for months.",
      next: "p1s2_vincent_meet_16"
    },
    p1s2_vincent_meet_16: {
      speaker: "gracie",
      text: "Yes we’ve talked. He's very interested in helping.",
      next: "p1s2_vincent_meet_17"
    },
    p1s2_vincent_meet_17: {
      speaker: "sam",
      text: "About what?",
      next: "p1s2_vincent_meet_18"
    },
    p1s2_vincent_meet_18: {
      speaker: "gracie",
      text: "My work. shared interests. You. Normal things, really.",
      next: "p1s2_vincent_meet_19"
    },
    p1s2_vincent_meet_19: {
      speaker: "sam",
      text: "…Okay.",
      next: "p1s2_vincent_meet_20"
    },
    p1s2_vincent_meet_20: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "laugh", focus: true }
      },
      text: "You’re jealous.",
      next: "p1s2_vincent_meet_21"
    },
    p1s2_vincent_meet_21: {
      speaker: "sam",
      text: "No, I just missed you.",
      next: "p1s2_vincent_meet_22"
    },
    p1s2_vincent_meet_22: {
      speaker: "gracie",
      text: "You are.",
      next: "p1s2_vincent_meet_23"
    },
    p1s2_vincent_meet_23: {
      speaker: "sam",
      text: "Maybe a little.",
      next: "p1s2_vincent_meet_24"
    },
    p1s2_vincent_meet_24: {
      speaker: "gracie",
      text: "That’s cute.",
      next: "p1s2_vincent_aside_1"
    },
    p1s2_vincent_aside_1: {
      clearChars: true,
      chars: {
        center: { id: "vincent", sprite: "evil", focus: true }
      },
      bg: "spaceport",
      location: "Outside · Night",
      speaker: "narration",
      text: "Vincent climbs into the waiting vehicle. The moment the door seals, his smile vanishes.\n\nHe looks back toward Gracie’s building.",
      next: "p1s2_vincent_aside_2"
    },
    p1s2_vincent_aside_2: {
      speaker: "vincent",
      text: "She loves him now, but such a thing is not meant to last.",
      next: "p1s2_vincent_aside_3"
    },
    p1s2_vincent_aside_3: {
      speaker: "vincent",
      text: "I’ll find his weakness.",
      effects: { flags: { visitedGracie: true } },
      next: "p1s2_gracie_after_vincent"
    },
    p1s2_gracie_after_vincent: {
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "narration",
      text: "The door is closed. The apartment is theirs again — or as close as it can be with Vincent’s words still in the air.",
      next: "p1s2_faithful_check"
    },


    // ---- Visit routers: all three stops before reception ----
    // Order matrix (visitOrder):
    //   adrian → A, D, G, party
    //   daniel → D, A, G, party
    //   gracie → G, A, D, party
    p1s2_after_adrian: {
      speaker: "narration",
      text: "As the evening with Adrian winds down, Sam excuses himself. There are still people on Earth who have been waiting longer than a corporate table deserves.",
      next: "p1s2_trans_to_daniel",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.visitOrder === "daniel") {
          // D → G → A: all done after dinner
          return "p1s2_trans_to_party";
        }
        if (f.visitOrder === "gracie") {
          // G → A → still need D
          if (f.visitedDaniel !== true) return "p1s2_trans_to_daniel";
          return "p1s2_trans_to_party";
        }
        // adrian first: A → D → G
        if (f.visitedDaniel !== true) return "p1s2_trans_to_daniel";
        if (f.visitedGracie !== true) return "p1s2_trans_to_gracie";
        return "p1s2_trans_to_party";
      }
    },
    p1s2_after_daniel: {
      speaker: "narration",
      text: "Outside the Page residence the night air is thin and clean. The conversation with Elias sits unfinished behind the door — another debt the day has collected.",
      next: "p1s2_trans_to_gracie",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.visitOrder === "daniel") {
          // D → G should have already run at residence; next is Adrian then party
          if (f.visitedGracie !== true) return "p1s2_gracie_home_1";
          if (f.visitedAdrian !== true) return "p1s2_trans_to_adrian";
          return "p1s2_trans_to_party";
        }
        if (f.visitOrder === "gracie") {
          return "p1s2_trans_to_party";
        }
        // adrian first: after D comes G
        if (f.visitedGracie !== true) return "p1s2_trans_to_gracie";
        if (f.visitedAdrian !== true) return "p1s2_trans_to_adrian";
        return "p1s2_trans_to_party";
      }
    },
    p1s2_after_gracie: {
      speaker: "narration",
      text: "Leaving Gracie is harder than any docking maneuver. The reception still waits — and so do the names he has not yet faced.",
      next: "p1s2_trans_to_adrian",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.visitOrder === "daniel") {
          // D → G done → Adrian → party
          if (f.visitedAdrian !== true) return "p1s2_trans_to_adrian";
          return "p1s2_trans_to_party";
        }
        if (f.visitOrder === "gracie") {
          if (f.visitedAdrian !== true) return "p1s2_trans_to_adrian";
          if (f.visitedDaniel !== true) return "p1s2_trans_to_daniel";
          return "p1s2_trans_to_party";
        }
        // adrian first: A → D → G done
        if (f.visitedAdrian !== true) return "p1s2_trans_to_adrian";
        if (f.visitedDaniel !== true) return "p1s2_trans_to_daniel";
        return "p1s2_trans_to_party";
      }
    },

    p1s2_trans_to_adrian: {
      speaker: "narration",
      text: "Sam sends a brief confirmation to Adrian’s office. The corporate car is already waiting at the curb, as if the day had been scheduled around his delay.",
      effects: { flags: { visitedAdrian: true } },
      next: "p1s2_dinner_1"
    },
    p1s2_trans_to_daniel: {
      speaker: "narration",
      text: "The transit spine carries him toward the older residential stacks. His father’s building looks the same as it did the day he shipped out — smaller, somehow, under the orbital light.",
      effects: { flags: { visitedDaniel: true } },
      next: "p1s2_daniel_1"
    },
    p1s2_trans_to_gracie: {
      speaker: "narration",
      text: "Gracie’s address is still saved at the top of his personal channel. He almost messages ahead. Then he decides some arrivals should not be announced.",
      effects: { flags: { visitedGracie: true } },
      next: "p1s2_home_gracie_1",
      nextFn: function (state) {
        if (state.flags && state.flags.isabellaLingered) return "p1s2_gracie_interrupt_1";
        return "p1s2_home_gracie_1";
      }
    },
    p1s2_trans_to_party: {
      speaker: "narration",
      text: "By the time the last visit ends, the reception invitation is already glowing on his communicator. Earth has taken its pieces of him. Now the sector wants a look at what is left.",
      next: "p1s2_party_merge"
    },

    // Dramatic Gracie entrance if Sam lingered with Isabella
    p1s2_gracie_interrupt_1: {
      saveLabel: "Gracie’s apartment — interruption",
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "threatened", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      speaker: "narration",
      text: "The door is not fully latched.\n\nInside, Vincent’s voice is low and smooth — the tone of a man who has already decided the ending of the conversation.",
      next: "p1s2_gracie_interrupt_2"
    },
    p1s2_gracie_interrupt_2: {
      speaker: "vincent",
      text: "My sister was at dinner with him tonight. Isabella does not waste an evening on men she finds uninteresting. Ask yourself why Sam was still at that table while you were waiting by the window.",
      next: "p1s2_gracie_interrupt_3"
    },
    p1s2_gracie_interrupt_3: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "He said he had work. Corporate obligations—",
      next: "p1s2_gracie_interrupt_4"
    },
    p1s2_gracie_interrupt_4: {
      speaker: "vincent",
      text: "Obligations that required my sister’s hand under the table? Come on, Gracie. You are not naïve. You are loyal. Those are not the same thing.",
      next: "p1s2_gracie_interrupt_5"
    },
    p1s2_gracie_interrupt_5: {
      speaker: "narration",
      text: "He steps closer. Gracie does not step back. The doubt Sam planted by staying too long at dinner is already doing Vincent’s work for him.",
      next: "p1s2_gracie_interrupt_6"
    },
    p1s2_gracie_interrupt_6: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true },
        center: { id: "gracie", sprite: "threatened", focus: false }
      },
      text: "I can offer you certainty. A life that does not arrive late smelling of someone else’s perfume.",
      next: "p1s2_gracie_interrupt_7"
    },
    p1s2_gracie_interrupt_7: {
      speaker: "narration",
      text: "His hand lightly touches her arm. His face is very close to hers as he looks into her eyes, her lips, then back to her eyes. \n\nFor a fraction of a second she lets him — not desire, exactly. Exhaustion. The particular weakness of someone who has been waiting alone too long.",
      next: "p1s2_gracie_interrupt_8"
    },
    p1s2_gracie_interrupt_8: {
      speaker: "narration",
      text: "Then the door opens hard enough to hit the stopper.",
      next: "p1s2_gracie_interrupt_9"
    },
    p1s2_gracie_interrupt_9: {
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "gracie", sprite: "shocked", focus: false },
        right: { id: "vincent", sprite: "angry", focus: false }
      },
      speaker: "sam",
      text: "Get your hand off her.",
      next: "p1s2_gracie_interrupt_10"
    },
    p1s2_gracie_interrupt_10: {
      speaker: "narration",
      text: "Vincent’s smile returns like a mask sliding into place. He does not hurry. That is the point.",
      next: "p1s2_gracie_interrupt_11"
    },
    p1s2_gracie_interrupt_11: {
      speaker: "vincent",
      text: "Sam. Perfect timing. We were just discussing your dinner company.",
      next: "p1s2_gracie_interrupt_12"
    },
    p1s2_gracie_interrupt_12: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "Isabella Rourke. He said she was with you.",
      effects: { flags: { gracieDoubt: 5 } },
      next: "p1s2_gracie_interrupt_13"
    },
    p1s2_gracie_interrupt_13: {
      speaker: "sam",
      text: "Adrian introduced us. That is all you needed to hear from him.",
      next: "p1s2_gracie_interrupt_14"
    },
    p1s2_gracie_interrupt_14: {
      speaker: "vincent",
      text: "Is it? Well. I’ll leave the rest of the explanation to you.\n\nGracie — think about what I said.",
      next: "p1s2_gracie_interrupt_15"
    },
    p1s2_gracie_interrupt_15: {
      speaker: "narration",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "Vincent eases past Sam with practiced calm. In the corridor his expression empties again — the private face behind the joke.",
      next: "p1s2_gracie_interrupt_16"
    },
    p1s2_gracie_interrupt_16: {
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "gracie",
      text: "Were you with her?",
      next: "p1s2_gracie_interrupt_17"
    },
    p1s2_gracie_interrupt_17: {
      speaker: "sam",
      text: "At Adrian’s table. Yes. Nothing happened that I won’t answer for — but I should have left sooner. I know how it looks.",
      next: "p1s2_gracie_interrupt_18"
    },
    p1s2_gracie_interrupt_18: {
      speaker: "gracie",
      text: "It looks like I was here alone while a Rourke explained your evening to me.",
      next: "p1s2_gracie_interrupt_19"
    },
    p1s2_gracie_interrupt_19: {
      speaker: "narration",
      text: "She does not pull away when he reaches for her hand. She also does not make it easy.",
      next: "p1s2_gracie_interrupt_20"
    },
    p1s2_gracie_interrupt_20: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      text: "You’re home. That still matters. Just… don’t make me hear about you from them first again.",
      next: "p1s2_gracie_interrupt_21"
    },
    p1s2_gracie_interrupt_21: {
      speaker: "sam",
      text: "You won’t.",
      next: "p1s2_after_gracie"
    },

    // ========== PARTY — ALL ROUTES ==========
  };
})();
