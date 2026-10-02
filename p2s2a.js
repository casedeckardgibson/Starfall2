/* STARFALL P2S2a — Gracie: second-order fallout after Sam’s arrest */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s2a = {
    p2s2_open: {
      saveLabel: "Earth · After the arrest",
      bg: "gracieApt",
      location: "Gracie’s Apartment · Morning",
      hideContainment: true,
      clearChars: true,
      clearFx: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "narration",
      text: "The feeds move on in three days.\n\nGracie does not.\n\nWhat remains is not only the corridor and the restraints — those still arrive in the dark, complete with the smell of recycled station air and the click of cuffs — but the smaller damages: cold sheets, coffee gone bitter in the pot, the silence where a second toothbrush used to tap the rim of the glass.",
      next: "p2s2_a_2"
    },
    p2s2_a_2: {
      speaker: "narration",
      text: "Her shop’s supplier sends a polite notice: delivery windows are “under review.” A regular client cancels a custom order with no reason, then a second, then a third. A neighbor stops meeting her eyes in the lift.\n\nNone of them say Sam’s name. They don’t have to.",
      effects: { flags: { shopUnderPressure: true, mediaHarassedGracie: true } },
      next: "p2s2_a_3"
    },
    p2s2_a_3: {
      bg: "lounge",
      location: "Commercial stack · Shop front",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      speaker: "narration",
      text: "A journalist waits outside the shutter with a smile that is not a smile.\n\n“Just a few questions about living with a man who falsified Horizon records. Off the record, of course.”",
      next: "p2s2_a_choice_press"
    },
    p2s2_a_choice_press: {
      saveLabel: "The microphone",
      speaker: "narration",
      text: "The camera light is already warming. The street is listening whether she answers or not.",
      choices: [
        {
          text: "Defend him. Publicly. He was framed.",
          hint: "Loyalty · Reputation risk",
          next: "p2s2_a_defend",
          effects: {
            romance: { gracie: 0 },
            stats: { integrity: 2 },
            flags: { gracieDefendedSam: true }
          }
        },
        {
          text: "No comment. Walk inside and lock the shutter.",
          hint: "Survival · Quiet cost",
          next: "p2s2_a_silence",
          effects: {
            flags: { mediaHarassedGracie: true }
          }
        },
        {
          text: "Correct the record coldly — then refuse the rest.",
          hint: "Controlled · Cunning +",
          next: "p2s2_a_cold",
          effects: {
            stats: { cunning: 3 },
            flags: { gracieDefendedSam: true }
          }
        }
      ]
    },
    p2s2_a_defend: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true }
      },
      text: "He saved people on that ship. Whatever Helios put in a packet does not change what I saw when they took him. You’re not here for truth. You’re here for a face to put under a headline.",
      next: "p2s2_a_defend_2"
    },
    p2s2_a_defend_2: {
      speaker: "narration",
      text: "The clip will be cut to make her sound hysterical. She knows that before she finishes the sentence. She says it anyway.",
      next: "p2s2_a_night"
    },
    p2s2_a_silence: {
      speaker: "narration",
      text: "She does not give them a frame. The shutter comes down hard enough to rattle the track.\n\nInside, her hands shake only after the lock seats.",
      next: "p2s2_a_night"
    },
    p2s2_a_cold: {
      speaker: "gracie",
      text: "Samuel Page has not been convicted of what your chyron is already treating as fact. That is the only statement. Move.",
      next: "p2s2_a_cold_2"
    },
    p2s2_a_cold_2: {
      speaker: "narration",
      text: "They move. The quote still appears by evening, stripped of context, labeled “associate.”",
      next: "p2s2_a_night"
    },
    p2s2_a_night: {
      bg: "gracieApt",
      location: "Gracie’s Apartment · Night",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "narration",
      text: "Second-order effects do not arrive as tragedy. They arrive as logistics.\n\nInsurance premiums on the unit. A bank message about “elevated profile risk.” A friend who used to share dinner now has a conflict every week.\n\nGracie eats standing up at the counter because sitting at the table makes the empty chair too precise.",
      next: "p2s2_a_letter"
    },
    p2s2_a_letter: {
      speaker: "narration",
      text: "Colonial Safety allows one monitored letter every thirty days. The first one arrives thin, formal, and full of black bars where Sam tried to say anything that mattered.\n\nShe reads it three times. Then she puts it in a drawer that used to hold their travel cards.",
      next: "p2s2_vincent_1"
    }
  };
})();
