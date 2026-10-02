/* STARFALL P1S5a — Administrative leave / interview */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s5a = {
    p1s5_open: {
      saveLabel: "Mandatory interview",
      bg: "lounge",
      location: "Helios · Internal Review Suite",
      hideContainment: true,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: true }
      },
      speaker: "narration",
      text: "The review suite has no windows worth looking through.\n\nA recorder sits on the table between Sam and two officers who do not introduce themselves by first name. One wears Helios legal. The other wears the kind of quiet that belongs to people who write reports that outlive careers.",
      next: "p1s5_a_2"
    },
    p1s5_a_2: {
      speaker: "narration",
      text: "SYSTEM: Interview commencing. Subject: Page, Samuel. Matter: Ardent Horizon containment incident — post-event safety record authentication.",
      next: "p1s5_a_3"
    },
    p1s5_a_3: {
      speaker: "sam",
      text: "The memo string is forged. I’ve said that in writing.",
      next: "p1s5_a_4"
    },
    p1s5_a_4: {
      speaker: "narration",
      text: "The legal officer does not look up from the tablet.",
      next: "p1s5_a_5"
    },
    p1s5_a_5: {
      speaker: "narration",
      text: "“We’re not asking for your theory of the string, Commander. We’re asking you to walk us through Deck Seven decisions in sequence. Start from the first alarm.”",
      next: "p1s5_a_6"
    },
    p1s5_a_6: {
      speaker: "narration",
      text: "Sam does. Carefully. The way a man talks when he knows every sentence can be lifted out of order later.",
      next: "p1s5_a_7"
    },
    p1s5_a_7: {
      speaker: "narration",
      text: "An hour in, the second officer slides a print across the table — Horizon log extracts. Sam’s command codes sit in cells he does not remember authorizing.",
      effects: { flags: { horizonFileOfficial: true } },
      next: "p1s5_a_8"
    },
    p1s5_a_8: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true }
      },
      text: "Those entries weren’t mine. Neither was the secondary-hold access log they keep waving — I signed cargo checks, not specimen quarantine.",
      next: "p1s5_a_9"
    },
    p1s5_a_9: {
      speaker: "narration",
      text: "“The system says they were. Systems don’t have opinions about your character.”",
      next: "p1s5_a_10"
    },
    p1s5_a_10: {
      speaker: "sam",
      text: "Marcus Vey had engineering access during the crisis. Check the physical presence logs against the command stamps.",
      next: "p1s5_a_11"
    },
    p1s5_a_11: {
      speaker: "narration",
      text: "A pause. Not long enough to be hope.",
      next: "p1s5_a_12"
    },
    p1s5_a_12: {
      speaker: "narration",
      text: "“Mr. Vey has already provided a voluntary statement. It does not match your account in several material places. You’ll receive a copy through counsel.”",
      next: "p1s5_a_13"
    },
    p1s5_a_13: {
      speaker: "narration",
      text: "They end the interview the way institutions end things: without drama, with a time-stamp.",
      next: "p1s5_a_14"
    },
    p1s5_a_14: {
      speaker: "narration",
      text: "In the corridor, Adrian is waiting — not close enough to look like interference.",
      next: "p1s5_a_15"
    },
    p1s5_a_15: {
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "adrian", sprite: "stern", focus: true }
      },
      speaker: "adrian",
      text: "I can’t sit in there with you. I can tell you the temperature outside that room is dropping.",
      next: "p1s5_a_16"
    },
    p1s5_a_16: {
      speaker: "sam",
      text: "Marcus lied.",
      next: "p1s5_a_17"
    },
    p1s5_a_17: {
      speaker: "adrian",
      text: "Then prove it faster than they can formalize him as a witness.\n\nSam. Go see the people who still open the door. While they still do.",
      next: "p1s5_a_18"
    },
    p1s5_a_18: {
      speaker: "narration",
      text: "Adrian’s hand almost lands on Sam’s shoulder. Almost. Even kindness has optics now.",
      next: "p1s5_gracie_branch"
    }
  };
})();
