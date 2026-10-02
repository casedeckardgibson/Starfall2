/* STARFALL P1S1b — Containment drop & Gracie flashback */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s1b = {
    crisis_1: {
      saveLabel: "Containment falling",
      speaker: "system",
      alert: true,
      containment: 43,
      chars: {
        center: { id: "lena", sprite: "shocked", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "WARNING.\nREACTOR CONTAINMENT: 43%.",
      next: "crisis_2"
    },
    crisis_2: {
      speaker: "engineer",
      text: "Captain — rate of drop just doubled. Safeties are green across the board, but the curve is wrong. Something is bleeding integrity and the monitors are calling it normal.",
      next: "crisis_3"
    },
    crisis_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "shocked", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "If the safeties are functioning, what are we looking at?",
      next: "crisis_4"
    },
    crisis_4: {
      speaker: "engineer",
      chars: {
        right: { id: "engineer", sprite: "scared", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "I don’t know. That’s the problem. The system is behaving like a textbook failure with none of the textbook causes. Either the sensors are lying, or something is writing numbers we were never meant to trust — same signature we get when the secondary holds run their own black-box telemetry. Helios calls those “research assets.” We call them locked doors.",
      next: "crisis_5"
    },
    crisis_5: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "orders", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "I need an explanation, not a poem. Someone on this bridge finds me a cause in the next thirty seconds or we start treating this as hostile interference.",
      next: "crisis_6"
    },
    crisis_6: {
      speaker: "narration",
      text: "No one answers.\n\nThe percentage keeps falling. Sam’s eyes stay on the curve a fraction too long — as if the shape of the failure has opened a door in his memory he did not ask for.",
      next: "fb_gracie_1"
    },

    fb_gracie_1: {
      saveLabel: "Three years earlier",
      bg: "residence",
      location: "Earth Orbital Habitat · Three years earlier",
      alert: false,
      flashback: true,
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "flashback", focus: false }
      },
      speaker: "narration",
      text: "Rain on habitat glass. A smaller room. A first uniform folded on a chair with the kind of care that tries too hard to look casual.\n\nSam is younger. Gracie watches him check the same bag again.",
      next: "fb_gracie_2"
    },
    fb_gracie_2: {
      speaker: "gracie",
      text: "That’s four times. You’re not packing anymore. You’re negotiating with the zipper.",
      next: "fb_gracie_3"
    },
    fb_gracie_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "flashback", focus: true },
        center: { id: "gracie", sprite: "normal", focus: false }
      },
      text: "Three. And the zipper’s fine. I’m just… making sure I didn’t forget anything that matters.",
      next: "fb_gracie_4"
    },
    fb_gracie_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "flashback", focus: false }
      },
      text: "You didn’t. Six months, you said. Maybe eight. Possibly longer if the route expands.\n\nI know the numbers, Sam. I’ve been living with them.",
      next: "fb_gracie_5"
    },
    fb_gracie_5: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "flashback", focus: true },
        center: { id: "gracie", sprite: "sad", focus: false }
      },
      text: "Hey. I’m coming back.",
      next: "fb_gracie_6"
    },
    fb_gracie_6: {
      speaker: "gracie",
      text: "You don’t know that. Nobody does. Promises don’t steer debris fields or bad captains or a ship that decides it’s finished with you.",
      next: "fb_gracie_7"
    },
    fb_gracie_7: {
      speaker: "sam",
      text: "They don’t have to steer the universe. They just have to hold me to something when the universe stops being polite.",
      next: "fb_gracie_8"
    },
    fb_gracie_8: {
      speaker: "narration",
      text: "Gracie looks away first. When she speaks again, the joke is gone.",
      next: "fb_gracie_9"
    },
    fb_gracie_9: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        left: { id: "sam", sprite: "flashback", focus: false }
      },
      text: "That’s what scares me. Not the distance. You.\n\nYou always have to help. It’s the best thing about you — and someday someone is going to notice they can point that at whatever they want and you’ll walk toward it like it was your idea.",
      next: "fb_gracie_10"
    },
    fb_gracie_10: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "flashback", focus: true },
        center: { id: "gracie", sprite: "sad", focus: false }
      },
      text: "People aren’t that calculated.",
      next: "fb_gracie_11"
    },
    fb_gracie_11: {
      speaker: "gracie",
      text: "Some are. Your father taught you how to survive. I’m afraid space will teach you how to stop caring — and you’ll call it professionalism.",
      next: "fb_gracie_12"
    },
    fb_gracie_12: {
      speaker: "narration",
      text: "She reaches for the uniform on the chair, smooths a crease that doesn’t need smoothing, then takes his hand instead.",
      next: "fb_gracie_13"
    },
    fb_gracie_13: {
      speaker: "sam",
      text: "That won’t happen. I promise.",
      next: "fb_gracie_14"
    },
    fb_gracie_14: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true },
        left: { id: "sam", sprite: "flashback", focus: false }
      },
      text: "Then come home to me. Not as a legend. As you.",
      next: "fb_gracie_15"
    },
    fb_gracie_15: {
      speaker: "narration",
      text: "She kisses him — brief, certain, the kind of kiss that tries to put a stamp on a future neither of them can guarantee.",
      next: "fb_gracie_16"
    },
    fb_gracie_16: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "flashback", focus: true },
        center: { id: "gracie", sprite: "happy", focus: false }
      },
      text: "I will.",
      next: "back_1"
    },

    back_1: {
      bg: "bridgeDanger",
      location: "Ardent Horizon · Command Bridge",
      flashback: false,
      alert: true,
      containment: 31,
      clearChars: true,
      chars: {
        center: { id: "lena", sprite: "duty", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "system",
      text: "WARNING.\nCONTAINMENT: 31%.",
      next: "back_2"
    },
    back_2: {
      speaker: "narration",
      text: "The rain is gone. The bag is gone. Red light and the smell of overheated boards slam back into place.\n\nLena is already looking at him like she nearly lost an officer to empty air.",
      next: "back_3"
    },
    back_3: {
      speaker: "lena",
      text: "Sam. Stay with me. Whatever that was, file it. We just lost primary coolant circulation — not a warning, a fact. Remote reroute is dead. Someone has to enter the chamber and do it by hand.",
      next: "back_4"
    },
    back_4: {
      speaker: "engineer",
      chars: {
        right: { id: "engineer", sprite: "scared", focus: true },
        center: { id: "lena", sprite: "duty", focus: false },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "Confirmed. Valves won’t take remote commands. Temperature’s climbing on a timer we don’t own.",
      next: "back_5"
    },
    back_5: {
      speaker: "narration",
      text: "Sam’s mouth opens. Lena answers before the sentence arrives.",
      next: "back_6"
    },
    back_6: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "orders", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "No. I know that look. You’re not volunteering until we decide who actually walks into the heat — and you are not deciding it alone.",
      next: "back_7"
    },
    back_7: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "orders", focus: false }
      },
      text: "You know me too well.",
      next: "back_8"
    },
    back_8: {
      speaker: "lena",
      text: "Unfortunately.\n\nWe still have to choose.",
      next: "choice_2"
    }
  };
})();
