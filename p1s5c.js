/* STARFALL P1S5c — The second cut */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s5c = {
    p1s5_file_1: {
      saveLabel: "The second cut",
      bg: "black",
      location: "—",
      clearChars: true,
      speaker: "narration",
      text: "Two days later the Horizon file stops being an internal curiosity.",
      next: "p1s5_file_2"
    },
    p1s5_file_2: {
      bg: "privateRoom",
      location: "Undisclosed · Secure lounge",
      chars: {
        left: { id: "marcus", sprite: "evil", focus: false },
        center: { id: "elias", sprite: "uncle", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      speaker: "elias",
      text: "Colonial Safety will take the packet by morning. Negligence, command falsification, endangerment under emergency protocols. His name is in every cell that matters.",
      next: "p1s5_file_3"
    },
    p1s5_file_3: {
      speaker: "marcus",
      text: "My statement is already stamped. I look cooperative. He looks cornered. He never understood what was in those holds. I did.",
      next: "p1s5_file_4"
    },
    p1s5_file_4: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "evil", focus: true }
      },
      text: "The doorway clip keeps the public from wanting a hero story. They want a moral. We’re giving them one.",
      next: "p1s5_file_5"
    },
    p1s5_file_5: {
      speaker: "elias",
      text: "Don’t celebrate where microphones live. Just be present when the sector learns his name has a case number.",
      next: "p1s5_file_6"
    },
    p1s5_file_6: {
      bg: "lounge",
      location: "Helios HQ",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "adrian", sprite: "stern", focus: true }
      },
      speaker: "narration",
      text: "Adrian’s office door is open. That is not hospitality. It is a man who no longer has time for theater.",
      next: "p1s5_file_7"
    },
    p1s5_file_7: {
      speaker: "adrian",
      text: "Colonial Safety accepted a formal referral. Helios is cooperating. I am being asked — carefully — to have been less certain about you in public.",
      next: "p1s5_file_8"
    },
    p1s5_file_8: {
      speaker: "sam",
      text: "Are you abandoning me?",
      next: "p1s5_file_9"
    },
    p1s5_file_9: {
      speaker: "adrian",
      chars: {
        center: { id: "adrian", sprite: "thoughtful", focus: true }
      },
      text: "I’m being moved off your file so the company can claim neutrality.\n\nThat is not the same as believing Marcus. It is also not the same as being able to stop what happens next.",
      next: "p1s5_file_10"
    },
    p1s5_file_10: {
      speaker: "sam",
      text: "What happens next.",
      next: "p1s5_file_11"
    },
    p1s5_file_11: {
      speaker: "adrian",
      text: "They’ll want you in person for a custody transfer interview. Today. Possibly within the hour. If you run, you look guilty. If you go, you walk into their timing.",
      next: "p1s5_file_12"
    },
    p1s5_file_12: {
      speaker: "narration",
      text: "Adrian’s voice drops.",
      next: "p1s5_file_13"
    },
    p1s5_file_13: {
      speaker: "adrian",
      text: "I sponsored a good officer. I still think I did. The machine does not care what I think.\n\nIf there is someone you need to stand beside before the hallway fills with badges, go now.",
      next: "p1s5_file_14"
    },
    p1s5_file_14: {
      speaker: "narration",
      text: "Sam’s channel lights with an official summons as he leaves the office.\n\nHe does not go to legal first.\n\nHe goes where the last honest door might still be.",
      next: "p1s5_arrest_1"
    }
  };
})();
