/* STARFALL P1S3b — The Ring */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s3b = {
    p1s3_engage_1: {
      saveLabel: "Evening with Gracie",
      bg: "gracieApt",
      location: "Gracie’s Apartment · Evening",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "happy", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "narration",
      text: "Gracie opens the door before he knocks. She always does when she has been listening for his step.",
      next: "p1s3_engage_2"
    },
    p1s3_engage_2: {
      speaker: "gracie",
      text: "You look like someone who sat through a meeting that lasted longer than the ship’s last crisis.",
      next: "p1s3_engage_3"
    },
    p1s3_engage_3: {
      speaker: "sam",
      text: "Promotion track. Public face. A handler named Natalie Cross.",
      next: "p1s3_engage_4"
    },
    p1s3_engage_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      text: "Natalie? From school Natalie?",
      next: "p1s3_engage_5"
    },
    p1s3_engage_5: {
      speaker: "sam",
      text: "The same. She’s corporate image now.",
      next: "p1s3_engage_6"
    },
    p1s3_engage_6: {
      speaker: "gracie",
      text: "She always wanted rooms with better views than the ones we grew up in.\n\nDoes she know about us?",
      next: "p1s3_engage_7"
    },
    p1s3_engage_7: {
      speaker: "sam",
      text: "She remembers your birthday. She remembers me being polite.",
      next: "p1s3_engage_8"
    },
    p1s3_engage_8: {
      speaker: "narration",
      text: "Gracie’s smile softens, then turns thoughtful. The apartment is small. The future Adrian described is not.",
      next: "p1s3_engage_9"
    },
    p1s3_engage_9: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true }
      },
      text: "Sam… when you talk about the billet, you sound like a man standing at a door. I keep wondering if you’re going to ask me to walk through it with you.",
      next: "p1s3_choice_b"
    },
    p1s3_choice_b: {
      saveLabel: "The question",
      speaker: "narration",
      text: "The ring has been in his pocket for three days. The sector would prefer a camera.",
      choices: [
        {
          text: "Propose privately. No cameras. No handlers.",
          hint: "Gracie Romance ++ · Private engagement",
          next: "p1s3_b_private_1",
          effects: {
            romance: { gracie: 18 },
            stats: { trust: 10, integrity: 5 },
            flags: { privateEngagement: true }
          }
        },
        {
          text: "Agree to a public engagement — Adrian’s optics.",
          hint: "Reputation ++ · Public engagement",
          next: "p1s3_b_public_1",
          effects: {
            romance: { gracie: 8 },
            stats: { reputation: 10, trust: 2 },
            flags: { publicEngagement: true }
          }
        },
        {
          text: "Not yet — stabilize the career first.",
          hint: "Gracie Doubt · Engagement delayed",
          next: "p1s3_b_delay_1",
          effects: {
            flags: { engagementDelayed: true, gracieDoubt: 6 },
            stats: { integrity: -2 },
            romance: { gracie: -4 }
          }
        }
      ]
    },
    p1s3_b_private_1: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "gracie", sprite: "shocked", focus: false }
      },
      text: "I don’t want a broadcast. I want you. If you’ll have a man who still comes home smelling like coolant and bad coffee.",
      next: "p1s3_b_private_2"
    },
    p1s3_b_private_2: {
      speaker: "narration",
      fx: ["letterbox", "zoom"],
      cg: "ring_private",
      text: "He drops to one knee on the worn apartment floor. The ring is simple. It looks honest in the low light.",
      next: "p1s3_b_private_3"
    },
    p1s3_b_private_3: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true }
      },
      text: "Yes. You idiot. Yes.",
      next: "p1s3_b_private_4"
    },
    p1s3_b_private_4: {
      speaker: "narration",
      text: "She pulls him up into a kiss that is laughing and wet-eyed at once.\n\nFor a while the sector’s plans have no purchase on the room.",
      next: "p1s3_b_intimate_1"
    },
    p1s3_b_intimate_1: {
      saveLabel: "Engaged",
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "Later, with the ring on her hand and the city muted behind the blinds, Gracie leads him to bed like a promise already kept.\n\nShe undresses without performance — only certainty — and draws him into her with a soft sound that is half relief. They move together slowly, then with the urgency of people who almost waited too long to say the true thing.",
      next: "p1s3_b_intimate_2"
    },
    p1s3_b_intimate_2: {
      speaker: "gracie",
      hideCg: true,
      clearFx: true,
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true }
      },
      text: "Whatever they make you into out there… come back as this.",
      next: "p1s3_b_merge"
    },
    p1s3_b_public_1: {
      speaker: "sam",
      text: "Adrian wants the story clean. A public engagement helps the board. I won’t do it if you hate it.",
      next: "p1s3_b_public_2"
    },
    p1s3_b_public_2: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I don’t hate you. I hate performing us.\n\nBut I also understand what they’re offering. If this is the price of keeping you in a life that doesn’t kill you on a reactor deck… I’ll stand in the light.",
      next: "p1s3_b_public_3"
    },
    p1s3_b_public_3: {
      speaker: "narration",
      text: "She says yes with a smile that almost reaches her eyes.\n\nNatalie will love the footage. So will anyone collecting proof of who Sam Page belongs to.",
      next: "p1s3_b_merge"
    },
    p1s3_b_delay_1: {
      speaker: "sam",
      text: "I want that future. I’m not ready to put a date on it while the board is still measuring me.",
      next: "p1s3_b_delay_2"
    },
    p1s3_b_delay_2: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "That’s an honest answer. It just isn’t the one I hoped for tonight.",
      next: "p1s3_b_delay_3"
    },
    p1s3_b_delay_3: {
      speaker: "narration",
      text: "She doesn’t throw him out. She also doesn’t reach for his hand.\n\nSomewhere, Vincent will hear that the door is still open.",
      next: "p1s3_b_merge"
    },
    p1s3_b_merge: {
      speaker: "narration",
      text: "Morning will bring briefings, itineraries, and a woman who knows Gracie’s old secrets well enough to use them carefully.",
      next: "p1s3_nat_1"
    }
  };
})();
