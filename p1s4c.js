/* STARFALL P1S4c — The door */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s4c = {
    p1s4_door_1: {
      saveLabel: "The handle turns",
      bg: "lounge",
      location: "Helios · Strategy Annex",
      clearChars: false,
      fx: "shake",
      speaker: "narration",
      text: "The handle turns.\n\nNo knock. No clearance chime soft enough to warn anyone who needed warning.",
      next: "p1s4_door_branch"
    },
    p1s4_door_branch: {
      speaker: "narration",
      text: "The door opens on a life that will not go back together the same way.",
      nextFn: function (state) {
        if (state.flags && state.flags.caughtWithNatalie) return "p1s4_caught_1";
        return "p1s4_frame_1";
      },
      next: "p1s4_frame_1"
    },

    /* ---- Caught in the act ---- */
    p1s4_caught_1: {
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "shocked", focus: true },
        right: { id: "natalie", sprite: "tempt", focus: false }
      },
      speaker: "narration",
      text: "Gracie stands in the doorway.\n\nFor one frozen second the room is only composition: Sam half-dressed against the desk, Natalie still close enough that the truth does not require interpretation.",
      effects: { flags: { gracieSawDoor: true } },
      next: "p1s4_caught_2"
    },
    p1s4_caught_2: {
      speaker: "gracie",
      text: "…",
      next: "p1s4_caught_3"
    },
    p1s4_caught_3: {
      speaker: "narration",
      text: "She does not scream. The silence is worse.",
      next: "p1s4_caught_4"
    },
    p1s4_caught_4: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "gracie", sprite: "shocked", focus: false }
      },
      text: "Gracie—",
      next: "p1s4_caught_5"
    },
    p1s4_caught_5: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "Don’t.\n\nDon’t say my name like it’s still a place you get to stand.",
      next: "p1s4_caught_6"
    },
    p1s4_caught_6: {
      speaker: "natalie",
      chars: {
        right: { id: "natalie", sprite: "serious", focus: true },
        center: { id: "gracie", sprite: "cry", focus: false }
      },
      text: "This is on me as much as—",
      next: "p1s4_caught_7"
    },
    p1s4_caught_7: {
      speaker: "gracie",
      text: "I wasn’t talking to you.",
      next: "p1s4_caught_8"
    },
    p1s4_caught_8: {
      speaker: "narration",
      text: "Behind Gracie, the corridor holds another shape. Vincent does not enter. He only needs the angle. The small device in his hand is already lowering.",
      effects: { flags: { vincentHasRecording: true } },
      next: "p1s4_caught_9"
    },
    p1s4_caught_9: {
      chars: {
        left: { id: "vincent", sprite: "evil", focus: true },
        center: { id: "gracie", sprite: "cry", focus: false }
      },
      speaker: "vincent",
      text: "I tried to warn you.",
      next: "p1s4_caught_10"
    },
    p1s4_caught_10: {
      speaker: "gracie",
      text: "You brought me here.",
      next: "p1s4_caught_11"
    },
    p1s4_caught_11: {
      speaker: "vincent",
      text: "I brought you to the truth. There’s a difference.",
      next: "p1s4_caught_12"
    },
    p1s4_caught_12: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      text: "Get out of this doorway, Vincent.",
      next: "p1s4_caught_13"
    },
    p1s4_caught_13: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "No. You don’t get to control the exits today.\n\nSam. Were you ever going to tell me? Or was I going to keep answering messages while you were… here.",
      next: "p1s4_caught_14"
    },
    p1s4_caught_14: {
      speaker: "narration",
      text: "There is no good answer. He finds one anyway, and it sounds like every man who has already lost.",
      next: "p1s4_caught_15"
    },
    p1s4_caught_15: {
      speaker: "sam",
      text: "I didn’t want this to be how you found out.",
      next: "p1s4_caught_16"
    },
    p1s4_caught_16: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "That’s not the same as not wanting it.\n\nDon’t follow me. If you follow me I will say something I can’t take back in a hallway with cameras.",
      next: "p1s4_caught_17"
    },
    p1s4_caught_17: {
      speaker: "narration",
      text: "She leaves. Vincent lets her pass, then looks once more into the annex — not at Natalie’s face, at the desk, at the geometry of evidence — and walks after Gracie with the patience of a man who has time now.",
      next: "p1s4_caught_18"
    },
    p1s4_caught_18: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "shy", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "Sam.",
      next: "p1s4_caught_19"
    },
    p1s4_caught_19: {
      speaker: "sam",
      text: "Don’t.",
      next: "p1s4_caught_20"
    },
    p1s4_caught_20: {
      speaker: "narration",
      text: "She stops. For once she does not try to own the silence.",
      next: "p1s4_fall_1"
    },

    /* ---- Framed: half-true doorway ---- */
    p1s4_frame_1: {
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "gracie", sprite: "shocked", focus: true },
        right: { id: "natalie", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "Gracie stands in the doorway.\n\nWhat she sees is not a crime. It is close enough for a wounded mind to finish: closed door, Natalie leaning over Sam’s shoulder, his hand half-raised as if to steady her — or to hold her.",
      effects: { flags: { gracieSawDoor: true, framedInnocently: true } },
      next: "p1s4_frame_2"
    },
    p1s4_frame_2: {
      speaker: "gracie",
      text: "You said press management.",
      next: "p1s4_frame_3"
    },
    p1s4_frame_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "gracie", sprite: "shocked", focus: false }
      },
      text: "It is. Gracie, this is board prep. Natalie was—",
      next: "p1s4_frame_4"
    },
    p1s4_frame_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "The door was closed. After everything on the feeds. After you told me you’d come home.",
      next: "p1s4_frame_5"
    },
    p1s4_frame_5: {
      speaker: "natalie",
      chars: {
        right: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "Miss — Gracie. This is work. I know how it looks. I also know how fast looking becomes a sentence in this building.",
      next: "p1s4_frame_6"
    },
    p1s4_frame_6: {
      speaker: "gracie",
      text: "You went to school with me. Don’t ‘Miss’ me while you’re standing that close to him.",
      next: "p1s4_frame_7"
    },
    p1s4_frame_7: {
      speaker: "narration",
      text: "Vincent is in the corridor again. Not entering. Recording the doorway the way a man records a verdict.",
      effects: { flags: { vincentHasRecording: true } },
      next: "p1s4_frame_8"
    },
    p1s4_frame_8: {
      chars: {
        left: { id: "vincent", sprite: "evil", focus: true },
        center: { id: "gracie", sprite: "sad", focus: false }
      },
      speaker: "vincent",
      text: "I told you not to trust the quiet explanations.",
      next: "p1s4_frame_9"
    },
    p1s4_frame_9: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      text: "You sent her here.",
      next: "p1s4_frame_10"
    },
    p1s4_frame_10: {
      speaker: "vincent",
      text: "I sent her to see. Seeing is allowed.",
      next: "p1s4_frame_11"
    },
    p1s4_frame_11: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "Sam. Look me in the face and tell me there is nothing between you and her. Not later. Now.",
      next: "p1s4_frame_choice"
    },
    p1s4_frame_choice: {
      saveLabel: "The question",
      speaker: "narration",
      text: "Natalie’s eyes are unreadable. Vincent waits like a man who already owns the footage.",
      choices: [
        {
          text: "Tell the full truth: nothing happened. Vincent set this up.",
          hint: "Integrity + · Hard to believe under the photo",
          next: "p1s4_frame_truth_1",
          effects: {
            stats: { integrity: 6, trust: 2 },
            romance: { gracie: 3 }
          }
        },
        {
          text: "Admit the room looks wrong — ask her to trust you anyway.",
          hint: "Trust gamble",
          next: "p1s4_frame_trust_1",
          effects: {
            stats: { trust: 4 },
            romance: { gracie: 1 }
          }
        },
        {
          text: "Lash out at Vincent in front of her.",
          hint: "Leadership spike · Reads as panic",
          next: "p1s4_frame_lash_1",
          effects: {
            stats: { leadership: 3, reputation: -2 }
          }
        }
      ]
    },
    p1s4_frame_truth_1: {
      speaker: "sam",
      text: "Nothing happened. We were running board questions. He messaged you to make this look like a betrayal because he needs you angry at me.",
      next: "p1s4_frame_truth_2"
    },
    p1s4_frame_truth_2: {
      speaker: "gracie",
      text: "And I walked into a closed room and found her leaning over you.\n\nI want to believe you. My hands are shaking because I also know what wanting costs.",
      next: "p1s4_frame_exit_1"
    },
    p1s4_frame_trust_1: {
      speaker: "sam",
      text: "It looks wrong. I know it does. I’m asking you to trust the years, not the doorway.",
      next: "p1s4_frame_trust_2"
    },
    p1s4_frame_trust_2: {
      speaker: "gracie",
      text: "The years are why this hurts.",
      next: "p1s4_frame_exit_1"
    },
    p1s4_frame_lash_1: {
      speaker: "sam",
      text: "You absolute bastard — you brought her here to break us—",
      next: "p1s4_frame_lash_2"
    },
    p1s4_frame_lash_2: {
      speaker: "vincent",
      chars: {
        left: { id: "vincent", sprite: "joke", focus: true }
      },
      text: "There it is. The temper under the uniform. Keep talking. The microphones in this corridor are very fair.",
      next: "p1s4_frame_exit_1"
    },
    p1s4_frame_exit_1: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I’m going home. Alone.\n\nIf you come tonight, knock. If I don’t answer, that’s an answer.",
      next: "p1s4_frame_exit_2"
    },
    p1s4_frame_exit_2: {
      speaker: "narration",
      text: "She leaves. Vincent does not touch her. He only follows at a distance that looks, to any camera, like concern.",
      next: "p1s4_frame_exit_3"
    },
    p1s4_frame_exit_3: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "That was engineered. You know it. I know it.\n\nThe problem is the picture doesn’t care what we know.",
      next: "p1s4_fall_1"
    }
  };
})();
