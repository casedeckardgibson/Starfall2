/* STARFALL P1S2c — Reception, Lena & Isabella */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s2c = {
    p1s2_party_merge: {
      saveLabel: "Corporate reception",
      bg: "reception",
      location: "Rourke Reception Hall",
      alert: false,
      flashback: false,
      clearChars: true,
      chars: {
        center: { id: "adrian", sprite: "formal", focus: true }
      },
      speaker: "narration",
      text: "Elegant. Expensive. Crowded with the kind of people who never have to raise their voices to be heard.\n\nAdrian stands near the center of the room. Lena is already present. Isabella stands close to Vincent. Elias watches from the shadows.",
      next: "p1s2_party_2"
    },
    p1s2_party_2: {
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: true },
        center: { id: "adrian", sprite: "formal", focus: false },
        right: { id: "gracie", sprite: "party", focus: false }
      },
      speaker: "adrian",
      text: "There he is.",
      next: "p1s2_party_3"
    },
    p1s2_party_3: {
      speaker: "narration",
      text: "Heads turn.",
      next: "p1s2_party_4"
    },
    p1s2_party_4: {
      speaker: "adrian",
      text: "Sam Page.",
      next: "p1s2_party_5"
    },
    p1s2_party_5: {
      speaker: "narration",
      text: "Applause ripples through the room. Sam looks faintly uncomfortable.",
      next: "p1s2_party_6"
    },
    p1s2_party_6: {
      speaker: "adrian",
      text: "Sam Page demonstrated exactly the kind of courage and judgment we need in the next generation of command.",
      next: "p1s2_party_7"
    },
    p1s2_party_7: {
      speaker: "adrian",
      text: "Effective immediately, I am personally sponsoring his advancement.",
      next: "p1s2_party_8"
    },
    p1s2_party_8: {
      speaker: "adrian",
      text: "To Sam.",
      next: "p1s2_party_9"
    },
    p1s2_party_9: {
      speaker: "narration",
      text: "The crowd answers: To Sam!",
      next: "p1s2_party_10"
    },
    p1s2_party_10: {
      speaker: "sam",
      text: "Thank you.\nBut whatever I accomplished… I didn’t do it alone.",
      next: "p1s2_party_11"
    },
    p1s2_party_11: {
      speaker: "narration",
      text: "His eyes find Lena. Then Gracie.\n\nAcross the room, Vincent’s expression darkens.",
      next: "p1s2_lena_party_check"
    },
    p1s2_lena_party_check: {
      speaker: "narration",
      text: "The toast settles. Conversations resume.",
      nextFn: function (state) {
        if (state.flags.lenaRomanceOpen && !state.flags.lenaRomanceClosed) return "p1s2_lena_p_1";
        return "p1s2_isa_party_1";
      }
    },
    p1s2_lena_p_1: {
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "lena", sprite: "party", focus: true }
      },
      speaker: "lena",
      text: "Congratulations.",
      next: "p1s2_lena_p_2"
    },
    p1s2_lena_p_2: {
      speaker: "sam",
      text: "Thank you.",
      next: "p1s2_lena_p_3"
    },
    p1s2_lena_p_3: {
      speaker: "lena",
      text: "You look uncomfortable.",
      next: "p1s2_lena_p_4"
    },
    p1s2_lena_p_4: {
      speaker: "sam",
      text: "Everyone’s staring.",
      next: "p1s2_lena_p_5"
    },
    p1s2_lena_p_5: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "party2", focus: true }
      },
      text: "Get used to it.\nYou’re going to be famous.",
      next: "p1s2_lena_p_6"
    },
    p1s2_lena_p_6: {
      speaker: "sam",
      text: "I’d rather be useful.",
      next: "p1s2_lena_p_7"
    },
    p1s2_lena_p_7: {
      speaker: "narration",
      text: "Lena leans in close enough that only he can hear. Her breath brushes his ear.",
      next: "p1s2_lena_p_8"
    },
    p1s2_lena_p_8: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "party3", focus: true }
      },
      text: "How about you find me in fifteen minutes and we can be useful to each other.",
      next: "p1s2_lena_choice"
    },
    p1s2_lena_choice: {
      speaker: "narration",
      text: "The offer hangs between them, private and sharp.",
      choices: [
        {
          text: "Shut her down gently.",
          hint: "Integrity + · Lena Romance −",
          next: "p1s2_lena_no",
          effects: { stats: { integrity: 5 }, romance: { lena: -5 } }
        },
        {
          text: "Agree.",
          hint: "Integrity − · Lena Romance + · Affair flag",
          next: "p1s2_lena_yes",
          effects: {
            stats: { integrity: -10 },
            romance: { lena: 15 },
            flags: { lenaPartyAffair: true, lenaAffair: true }
          }
        }
      ]
    },
    p1s2_lena_no: {
      speaker: "sam",
      text: "Lena… not here. Not tonight.",
      next: "p1s2_lena_no2"
    },
    p1s2_lena_no2: {
      speaker: "narration",
      text: "She studies his face, then gives a small, almost disappointed nod.",
      next: "p1s2_lena_no3"
    },
    p1s2_lena_no3: {
      speaker: "lena",
      text: "Your loss, Commander.",
      next: "p1s2_isa_party_1"
    },
    p1s2_lena_yes: {
      speaker: "sam",
      text: "…Fifteen minutes.",
      next: "p1s2_lena_yes2"
    },
    p1s2_lena_yes2: {
      speaker: "lena",
      text: "Don’t keep me waiting.",
      next: "p1s2_lena_sex_1"
    },
    p1s2_lena_sex_1: {
      saveLabel: "Fifteen minutes",
      bg: "bathroom",
      location: "Reception · Private restroom",
      clearChars: true,
      chars: {
        center: { id: "lena", sprite: "seduce", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "Fifteen minutes later Sam slips into the private restroom. Lena is already there, leaning against the marble counter.\n\nThe door locks behind him.\n\nShe pulls him in by the jacket and kisses him hard. Her hand finds his belt, works it open, frees him. She strokes him once, twice.",
      next: "p1s2_lena_sex_2"
    },
    p1s2_lena_sex_2: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "seduce2", focus: true }
      },
      text: "Missed this.",
      next: "p1s2_lena_sex_3"
    },
    p1s2_lena_sex_3: {
      chars: {
        center: { id: "lena", sprite: "seduce3", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "She turns, braces both hands on the counter, looks back over her shoulder. Sam sinks into her in one long thrust.\n\nHe sets a hard rhythm. One hand works her while he drives deeper. When she comes it is with a sharp, muffled cry. The clench of her drags him over the edge a moment later.",
      next: "p1s2_lena_sex_4"
    },
    p1s2_lena_sex_4: {
      speaker: "lena",
      text: "Welcome home, Commander.",
      next: "p1s2_lena_sex_5"
    },
    p1s2_lena_sex_5: {
      speaker: "narration",
      text: "She unlocks the door and slips back into the party without another word.\n\nSam takes a moment longer to put himself back together.",
      next: "p1s2_isa_party_1"
    },

    // Isabella at party,
    p1s2_isa_party_1: {
      bg: "reception",
      location: "Rourke Reception Hall",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "isabella", sprite: "red", focus: true }
      },
      speaker: "isabella",
      text: "You’re becoming quite the celebrity.",
      next: "p1s2_isa_party_2"
    },
    p1s2_isa_party_2: {
      speaker: "sam",
      text: "I’d rather not.",
      next: "p1s2_isa_party_3"
    },
    p1s2_isa_party_3: {
      speaker: "isabella",
      text: "Too late for that.",
      next: "p1s2_isa_party_4"
    },
    p1s2_isa_party_4: {
      speaker: "isabella",
      text: "Gracie is beautiful.",
      next: "p1s2_isa_party_5"
    },
    p1s2_isa_party_5: {
      speaker: "sam",
      text: "She is.",
      next: "p1s2_isa_party_6"
    },
    p1s2_isa_party_6: {
      speaker: "isabella",
      text: "You really love her.",
      next: "p1s2_isa_party_7"
    },
    p1s2_isa_party_7: {
      speaker: "sam",
      text: "Yes.",
      next: "p1s2_isa_party_8"
    },
    p1s2_isa_party_8: {
      speaker: "narration",
      text: "Isabella steps in close enough that her perfume wraps around him. Her lips nearly brush his ear.",
      next: "p1s2_isa_party_9"
    },
    p1s2_isa_party_9: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tempt", focus: true }
      },
      text: "That’s going to make tempting you so much more interesting.",
      next: "p1s2_isa_affair_check"
    },
    p1s2_isa_affair_check: {
      speaker: "narration",
      text: "She doesn’t step back.",
      nextFn: function (state) {
        if (state.flags.lenaAffair || state.flags.lenaPartyAffair) return "p1s2_isa_smell_1";
        return "p1s2_isa_choice";
      }
    },
    p1s2_isa_smell_1: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tempt2", focus: true }
      },
      text: "You already crossed one line.",
      next: "p1s2_isa_smell_2"
    },
    p1s2_isa_smell_2: {
      speaker: "sam",
      text: "What?",
      next: "p1s2_isa_smell_3"
    },
    p1s2_isa_smell_3: {
      speaker: "isabella",
      text: "Don’t look so frightened.\nI’m not judging you.\nI see the way your captain looks at you.\nI know what that look means.",
      next: "p1s2_isa_smell_4"
    },
    p1s2_isa_smell_4: {
      speaker: "isabella",
      text: "And now I want to know the rest of you.",
      next: "p1s2_isa_choice"
    },
    p1s2_isa_choice: {
      decision: "isabella",
      bg: "reception",
      location: "Rourke Reception Hall",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "isabella", sprite: "tempt", focus: true }
      },
      saveLabel: "Isabella’s offer",
      speaker: "narration",
      text: "Her fingers trail lightly down the front of his jacket, stopping just above his belt.",
      choices: [
        {
          text: "Refuse.",
          hint: "Integrity +10",
          next: "p1s2_isa_refuse",
          effects: { stats: { integrity: 10 }, romance: { isabella: -5 } }
        },
        {
          text: "Give in.",
          hint: "Integrity − · Isabella Romance + · Affair flag",
          next: "p1s2_isa_give",
          effects: {
            stats: { integrity: -10 },
            romance: { isabella: 20 },
            flags: { isabellaAffair: true }
          }
        },
        {
          text: "Let it become intimate.",
          hint: "Integrity −− · Isabella Romance ++ · Intimacy flag",
          next: "p1s2_isa_intimate",
          effects: {
            stats: { integrity: -20 },
            romance: { isabella: 30 },
            flags: { isabellaAffair: true, isabellaIntimacy: true }
          }
        }
      ]
    },
    p1s2_isa_refuse: {
      speaker: "sam",
      text: "No.",
      next: "p1s2_isa_refuse2"
    },
    p1s2_isa_refuse2: {
      speaker: "isabella",
      text: "No?",
      next: "p1s2_isa_refuse3"
    },
    p1s2_isa_refuse3: {
      speaker: "sam",
      text: "I love someone.",
      next: "p1s2_isa_refuse4"
    },
    p1s2_isa_refuse4: {
      speaker: "isabella",
      text: "Even after what you’ve already done?",
      next: "p1s2_isa_refuse5"
    },
    p1s2_isa_refuse5: {
      speaker: "sam",
      text: "Whatever you think you know—stay out of it.",
      next: "p1s2_isa_refuse6"
    },
    p1s2_isa_refuse6: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "giggle", focus: true }
      },
      text: "Interesting.",
      next: "p1s2_vincent_gracie_1"
    },
    p1s2_isa_give: {
      speaker: "narration",
      text: "Sam doesn’t answer.\n\nIsabella’s smile turns predatory. She takes his hand and leads him toward a private room without another word.",
      next: "p1s2_isa_give2"
    },
    p1s2_isa_give2: {
      speaker: "narration",
      text: "FADE TO BLACK.\n\nWhat happens in that room does not stay only there.",
      next: "p1s2_vincent_gracie_1"
    },
    p1s2_isa_intimate: {
      bg: "lounge",
      location: "Reception · Corridor",
      clearChars: true,
      chars: {
        center: { id: "isabella", sprite: "tempt", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "Isabella doesn’t wait for a cleaner yes.\n\nHer fingers close around his wrist — not hard, just certain — and she turns toward the side corridor as if the room had always been inevitable. Music and laughter thin behind them. A service door, a short carpeted hall, a panel that reads PRIVATE in discreet gold.",
      next: "p1s2_isa_lead_2"
    },
    p1s2_isa_lead_2: {
      speaker: "isabella",
      chars: {
        center: { id: "isabella", sprite: "tease", focus: true }
      },
      text: "Don’t look so hunted. If anyone asks, you were checking the view. I was showing you where the real conversations happen.",
      next: "p1s2_isa_lead_3"
    },
    p1s2_isa_lead_3: {
      speaker: "narration",
      text: "She badges the lock. The door sighs open onto low light, a couch, a sealed window full of orbital glitter. She lets him step through first, then closes them in with a soft click that feels louder than the party.",
      next: "p1s2_isa_lead_4"
    },
    p1s2_isa_lead_4: {
      bg: "privateRoom",
      location: "Reception · Private room",
      chars: {
        center: { id: "isabella", sprite: "tempt2", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "isabella",
      text: "There. No audience. No Gracie’s name hanging in the air like a rule.\n\nUnless you want to walk back out and pretend your pulse isn’t doing that.",
      next: "p1s2_isa_lead_5"
    },
    p1s2_isa_lead_5: {
      speaker: "narration",
      text: "She doesn’t strip the room of choice. She just stands close enough that choosing her is the shorter path. When he doesn’t move, she closes the last inch herself.",
      next: "p1s2_isa_intimate_act"
    },
    p1s2_isa_intimate_act: {
      bg: "privateRoom",
      location: "Reception · Private room",
      clearChars: true,
      chars: {
        center: { id: "isabella", sprite: "sex", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "Isabella backs him against the wall, her mouth already on his. One hand cups his neck; the other finds him hard through his trousers and squeezes.",
      next: "p1s2_isa_intimate2"
    },
    p1s2_isa_intimate2: {
      speaker: "isabella",
      text: "There it is.\nI knew you’d be easy once someone actually touched you.",
      next: "p1s2_isa_intimate3"
    },
    p1s2_isa_intimate3: {
      chars: {
        center: { id: "isabella", sprite: "bend", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "She works his belt open. When she frees him she doesn’t look away. She strokes him once, slow and tight.\n\nShe sinks to her knees in the half-dark and takes him into her mouth with focused, wet heat.\n\nWhen she stands again she braces against the wall, dress up. No underwear.\n\nSam steps in behind her. The first thrust is deep and sudden. She pushes back to meet him. He comes first—hard, buried deep. She follows with a quiet, satisfied sigh.",
      next: "p1s2_isa_intimate4"
    },
    p1s2_isa_intimate4: {
      speaker: "narration",
      text: "Sam knew exactly where the line was.\nThe tragedy was that he had already learned how easy it was to step across it.",
      next: "p1s2_vincent_gracie_1"
    },

    // Vincent pressures Gracie
  };
})();
