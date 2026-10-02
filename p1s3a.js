/* STARFALL P1S3a — The Offer Board */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s3a = {
    p1s3_open: {
      saveLabel: "Helios Fleet Operations",
      bg: "lounge",
      location: "Helios HQ · Orbital Conference Suite",
      alert: false,
      flashback: false,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "adrian", sprite: "formal", focus: true }
      },
      speaker: "narration",
      text: "Two weeks after the reception, Earth still looks clean from this height.\n\nSam sits at a polished table that costs more than his father’s workshop. The sector’s hero narrative has already been written for him. Today they only need his signature on the next chapter.",
      next: "p1s3_open_2"
    },
    p1s3_open_2: {
      speaker: "adrian",
      text: "Command track. Public face of the rescue culture we keep selling the colonies. A junior captain’s billet on the prestige lane within the year — if you keep your record clean.",
      next: "p1s3_open_3"
    },
    p1s3_open_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: true },
        center: { id: "adrian", sprite: "formal", focus: false }
      },
      text: "That’s generous.",
      next: "p1s3_open_4"
    },
    p1s3_open_4: {
      speaker: "adrian",
      text: "It’s earned. Don’t confuse the two.\n\nThere is one condition the board insists on.",
      next: "p1s3_open_5"
    },
    p1s3_open_5: {
      speaker: "narration",
      text: "The door opens. A woman in a sharp charcoal suit enters with a tablet already lit. She smiles like someone who has practiced being welcome in every room.",
      next: "p1s3_open_6"
    },
    p1s3_open_6: {
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "intro", focus: true },
        right: { id: "adrian", sprite: "formal", focus: false }
      },
      speaker: "adrian",
      text: "Natalie Cross. Image strategy. She will shape how the sector sees you — interviews, itineraries, the soft edges of command.",
      next: "p1s3_open_6b"
    },
    p1s3_open_6b: {
      speaker: "narration",
      text: "Natalie steps into the light like she belongs in every room that ever tried to keep her out. For a heartbeat the corporate polish slips — something almost shy when her eyes find Sam’s.",
      chars: {
        center: { id: "natalie", sprite: "shy", focus: true },
        left: { id: "sam", sprite: "uniform2", focus: false },
        right: { id: "adrian", sprite: "formal", focus: false }
      },
      next: "p1s3_open_7"
    },
    p1s3_open_7: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "We’ve met. Gracie’s birthday — years ago. I wore something unfortunate and you were kind about it. Kind in a way that stuck.",
      next: "p1s3_open_8"
    },
    p1s3_open_8: {
      speaker: "sam",
      text: "I remember the birthday.",
      next: "p1s3_open_9"
    },
    p1s3_open_9: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "flirt", focus: true }
      },
      text: "I remember how you looked at her. And how long it took you to look at anyone else.\n\nWe’ll work on making the sector look at you. I’ll try not to enjoy the view too obviously.",
      next: "p1s3_choice_a"
    },
    p1s3_choice_a: {
      saveLabel: "The package",
      speaker: "narration",
      text: "Adrian waits. The tablet’s cursor blinks on a line that will attach Natalie to Sam’s calendar for the foreseeable future.",
      choices: [
        {
          text: "Accept the full package — Natalie included.",
          hint: "Reputation + · Natalie assigned",
          next: "p1s3_a_full_1",
          effects: {
            stats: { reputation: 8, trust: 3 },
            flags: { natalieAssigned: true },
            romance: { natalie: 5 }
          }
        },
        {
          text: "Accept promotion. Refuse a personal handler.",
          hint: "Integrity + · Natalie sidelined",
          next: "p1s3_a_side_1",
          effects: {
            stats: { integrity: 6, reputation: 4 },
            flags: { natalieSidelined: true }
          }
        },
        {
          text: "Delay until I’ve talked to Gracie.",
          hint: "Integrity + · Consult Gracie",
          next: "p1s3_a_delay_1",
          effects: {
            stats: { integrity: 5, trust: 4 },
            flags: { consultedGracie: true },
            romance: { gracie: 4 }
          }
        }
      ]
    },
    p1s3_a_full_1: {
      speaker: "sam",
      text: "If this is the job, I’ll do the job. Including the parts that aren’t on a bridge.",
      next: "p1s3_a_full_2"
    },
    p1s3_a_full_2: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "smile", focus: true }
      },
      text: "Good. I work better when the interesting ones say yes.\n\nI’ll try to keep my hands to the schedule. No promises about my eyes.",
      next: "p1s3_a_merge"
    },
    p1s3_a_side_1: {
      speaker: "sam",
      text: "I’ll take the billet. I’ll do the interviews I must. I won’t be managed like a product.",
      next: "p1s3_a_side_2"
    },
    p1s3_a_side_2: {
      speaker: "adrian",
      chars: {
        right: { id: "adrian", sprite: "thoughtful", focus: true },
        center: { id: "natalie", sprite: "serious", focus: false }
      },
      text: "Stubborn. Fine. Natalie remains available to the office. You may find you need her sooner than pride admits.",
      next: "p1s3_a_side_3"
    },
    p1s3_a_side_3: {
      speaker: "natalie",
      text: "Door’s open, Commander. I have a soft spot for men who change their minds in private.",
      next: "p1s3_a_merge"
    },
    p1s3_a_delay_1: {
      speaker: "sam",
      text: "I’m not signing a life schedule without the person who shares that life.",
      next: "p1s3_a_delay_2"
    },
    p1s3_a_delay_2: {
      speaker: "adrian",
      text: "Loyalty again. It is still your best quality. Don’t let it become the one they use against you.",
      next: "p1s3_a_delay_3"
    },
    p1s3_a_delay_3: {
      speaker: "natalie",
      chars: {
        center: { id: "natalie", sprite: "serious", focus: true }
      },
      text: "Tell Gracie I said hello. We go back further than this building does.\n\nAnd Sam — if you need someone who already knows your worst angles, you know where to find me.",
      next: "p1s3_a_merge"
    },
    p1s3_a_merge: {
      speaker: "narration",
      text: "The meeting dissolves into handshakes and calendar holds.\n\nSomewhere below the glass, Earth keeps turning. Somewhere closer, men who were not invited are already updating a different kind of file.",
      next: "p1s3_engage_1"
    }
  };
})();
