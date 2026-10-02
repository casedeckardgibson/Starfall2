/* STARFALL P1S2a — Spaceport & Adrian's offer */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s2a = {
    p1s2_open: {
      saveLabel: "Earth orbital spaceport",
      bg: "spaceport",
      location: "Earth Orbital Spaceport · Arrival Concourse",
      alert: false,
      flashback: false,
      hideContainment: true,
      clearChars: true,
      chars: {
        center: { id: "sam", sprite: "uniform", focus: true }
      },
      speaker: "narration",
      text: "The docking bay doors open with a low hydraulic sigh.\n\nSam steps through.\n\nFor the first time in months there are no alarms. No emergency lights. No one waiting for him to decide who lives and who dies.\n\nHe carries one battered travel bag. Exhaustion sits heavy in his shoulders, but the corner of his mouth still finds a tired smile.",
      next: "p1s2_adrian_1"
    },
    p1s2_adrian_1: {
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "adrian", sprite: "formal", focus: true }
      },
      speaker: "adrian",
      text: "Commander Page.",
      next: "p1s2_adrian_2"
    },
    p1s2_adrian_2: {
      speaker: "narration",
      text: "Sam turns.\n\nAdrian Vale approaches in an immaculate dark suit. Two corporate aides trail a respectful distance behind him.",
      next: "p1s2_adrian_3"
    },
    p1s2_adrian_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "adrian", sprite: "formal", focus: false }
      },
      text: "Mr. Vale.",
      next: "p1s2_adrian_4"
    },
    p1s2_adrian_4: {
      speaker: "adrian",
      text: "Adrian. Please.",
      next: "p1s2_adrian_5"
    },
    p1s2_adrian_5: {
      speaker: "narration",
      text: "They shake hands. Adrian’s grip is firm, measured.",
      next: "p1s2_adrian_6"
    },
    p1s2_adrian_6: {
      speaker: "adrian",
      chars: {
        center: { id: "adrian", sprite: "thoughtful", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "Congratulations.",
      next: "p1s2_adrian_7"
    },
    p1s2_adrian_7: {
      speaker: "sam",
      text: "For what, exactly?",
      next: "p1s2_adrian_8"
    },
    p1s2_adrian_8: {
      speaker: "adrian",
      text: "For becoming the most talked-about young officer in the sector.",
      next: "p1s2_adrian_9"
    },
    p1s2_adrian_9: {
      speaker: "narration",
      text: "Sam lets out a short, awkward laugh.",
      next: "p1s2_adrian_10"
    },
    p1s2_adrian_10: {
      speaker: "sam",
      text: "That’s overstating it.",
      next: "p1s2_adrian_11"
    },
    p1s2_adrian_11: {
      speaker: "adrian",
      text: "No. It isn’t.",
      next: "p1s2_adrian_12"
    },
    p1s2_adrian_12: {
      speaker: "narration",
      text: "He studies Sam for a beat.",
      next: "p1s2_adrian_13"
    },
    p1s2_adrian_13: {
      speaker: "adrian",
      text: "I’ve spent most of my career surrounded by people who would kill to be important. You’re… unusual.",
      next: "p1s2_adrian_14"
    },
    p1s2_adrian_14: {
      speaker: "sam",
      text: "How so?",
      next: "p1s2_adrian_15"
    },
    p1s2_adrian_15: {
      speaker: "adrian",
      text: "You don’t seem to want it.",
      next: "p1s2_adrian_16"
    },
    p1s2_adrian_16: {
      speaker: "narration",
      text: "Sam shrugs, the motion small.",
      next: "p1s2_adrian_17"
    },
    p1s2_adrian_17: {
      speaker: "sam",
      text: "I just wanted everyone to make it home.",
      next: "p1s2_adrian_18"
    },
    p1s2_adrian_18: {
      speaker: "narration",
      text: "Adrian’s smile is quiet, almost approving.",
      next: "p1s2_adrian_19"
    },
    p1s2_adrian_19: {
      speaker: "adrian",
      text: "Exactly.",
      next: "p1s2_offer_1"
    },
    p1s2_offer_1: {
      speaker: "adrian",
      chars: {
        center: { id: "adrian", sprite: "stern", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "I’ve been reading your after-action reports.",
      next: "p1s2_offer_2"
    },
    p1s2_offer_2: {
      speaker: "sam",
      text: "That’s… reassuring?",
      next: "p1s2_offer_3"
    },
    p1s2_offer_3: {
      speaker: "adrian",
      text: "It shouldn’t be.",
      next: "p1s2_offer_4"
    },
    p1s2_offer_4: {
      speaker: "narration",
      text: "Sam huffs a soft laugh. Adrian gestures toward a waiting corporate vehicle at the edge of the concourse.",
      next: "p1s2_offer_5"
    },
    p1s2_offer_5: {
      speaker: "adrian",
      text: "I’d like to make you an offer.",
      next: "p1s2_offer_6"
    },
    p1s2_offer_6: {
      speaker: "sam",
      text: "What kind of offer?",
      next: "p1s2_offer_7"
    },
    p1s2_offer_7: {
      speaker: "adrian",
      text: "Sponsorship. Full career development track. Command training. Financial backing. The right political introductions.",
      next: "p1s2_offer_8"
    },
    p1s2_offer_8: {
      speaker: "sam",
      text: "That’s a lot.",
      next: "p1s2_offer_9"
    },
    p1s2_offer_9: {
      speaker: "adrian",
      text: "You’re going to need it.",
      next: "p1s2_offer_10"
    },
    p1s2_offer_10: {
      speaker: "sam",
      text: "For what?",
      next: "p1s2_offer_11"
    },
    p1s2_offer_11: {
      speaker: "adrian",
      text: "For wherever you’re going next.\nAnd I suspect you’re going very far.",
      next: "p1s2_choice1"
    },

    // ---------- CHOICE 1 ----------,
    p1s2_choice1: {
      decision: "visit_order",
      bg: "spaceport",
      location: "Earth Orbital Spaceport",
      alert: false,
      clearChars: true,
      chars: {
        center: { id: "sam", sprite: "uniform", focus: true }
      },
      saveLabel: "Who first?",
      speaker: "narration",
      text: "The offer is real. So is the list of people waiting for him on Earth.\n\nHe will see all of them before the reception. The only question is where he goes first.",
      choices: [
        {
          text: "Start with Adrian — dinner, then family and Gracie.",
          hint: "Corporate first · Reputation +",
          next: "p1s2_1a_1",
          effects: {
            stats: { reputation: 5, trust: 3 },
            flags: { adrianDinner: true, adrianSponsorship: true, visitOrder: "adrian" }
          }
        },
        {
          text: "Start with Daniel — father first, then the rest.",
          hint: "Family first · Integrity +",
          next: "p1s2_1b_1",
          effects: {
            stats: { integrity: 5, compassion: 4 },
            flags: { danielFirst: true, adrianSponsorship: true, visitOrder: "daniel" }
          }
        },
        {
          text: "Start with Gracie — then father and Adrian.",
          hint: "Gracie first · Romance +",
          next: "p1s2_1c_1",
          effects: {
            romance: { gracie: 10 },
            stats: { trust: 5 },
            flags: { gracieFirst: true, adrianSponsorship: true, visitOrder: "gracie" }
          }
        }
      ]
    },

    // ========== BRANCH 1A — ADRIAN DINNER ==========
  };
})();
