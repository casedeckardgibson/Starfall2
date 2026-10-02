/* STARFALL P2S1a — The Drop (Château d’If Station) */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s1a = {
    p2s1_open: {
      saveLabel: "The Drop",
      bg: "chateauCell",
      location: "—",
      alert: false,
      flashback: false,
      hideContainment: true,
      clearChars: true,
      clearFx: true,
      speaker: "narration",
      text: "They do not give him a last statement.\n\nHelios legal language arrives as a seal on a cryo-pod: industrial espionage, unauthorized neural data retention, threats to conglomerate security. The words are precise enough to close a career and vague enough to hide a kidnapping.",
      effects: { flags: { prisonYearsStarted: true, samArrested: true } },
      next: "p2s1_drop_2"
    },
    p2s1_drop_2: {
      speaker: "narration",
      text: "The shuttle does not land. It ejects him.\n\nCold. Pressure. The pod’s viewport fills with a gas giant’s banded storm and, against it, a half-dead habitat ring: pitted plating, frost blooms, sections open to vacuum like broken teeth. Official designation: Colonial Detention Facility — restricted. Unofficial name, spoken only by people who will not leave: Château d’If Station.",
      next: "p2s1_drop_3"
    },
    p2s1_drop_3: {
      bg: "chateau",
      location: "Château d’If Station · Docking Ring",
      speaker: "narration",
      text: "The dock is perpetual twilight. Emergency strips flicker. Recyclers thrum at the edge of failure. The air tastes of metal, mold, and something sweet-rotten that no filter fully erases.\n\nGuards meet the pod. Most of them move with the same economy — too smooth, too identical. Synthetic frames under corporate armor. Short-life loyalty conditioning. Blade-runner patience.",
      next: "p2s1_drop_4"
    },
    p2s1_drop_4: {
      chars: {
        left: { id: "malereplicant", sprite: "watch", focus: false },
        center: { id: "prisonsam", sprite: "tired", focus: true },
        right: { id: "femalereplicant", sprite: "side", focus: false }
      
      },
      speaker: "narration",
      text: "They strip him. Scan him. One unit pauses over his biometrics a fraction too long — head tilted, as if a recognition protocol found a ghost in the data and did not know whether to report it.",
      next: "p2s1_drop_5"
    },
    p2s1_drop_5: {
      speaker: "narration",
      text: "A crude neural inhibitor clicks in at the base of his skull. The world softens at the edges. Emotion becomes a dial turned down. Higher thought arrives late, like a message through static.\n\nHelios calls it compliance management. Sam calls it a theft he can still name — for now.",
      effects: { flags: { neuralInhibitor: true } },
      next: "p2s1_cell_1"
    },

    p2s1_cell_1: {
      saveLabel: "The Cell",
      bg: "chateauCell",
      location: "Château d’If · Lower Ring · Solitary Module",
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "Lower ring. Thin atmosphere. Walls that sweat condensation. A single observation slit. A recycling vent that occasionally exhales warm, metallic air — and, sometimes, a warmer, wetter breath that does not belong to any machine.",
      next: "p2s1_cell_2"
    },
    p2s1_cell_2: {
      speaker: "narration",
      text: "First night: the inhibitor glitches.\n\nMemory arrives in shards — Gracie’s hand on his sleeve, Vincent’s smile, Marcus’s too-steady fingers on a console, sealed Helios pods in the Horizon’s spine that were never just freight. The betrayal stays off-screen and still fills the cell.",
      effects: { flags: { inhibitorGlitch: true } },
      next: "p2s1_cell_3"
    },
    p2s1_cell_3: {
      speaker: "narration",
      fx: "shake",
      text: "Sleep breaks on distant metallic scraping… and a wet, organic sound moving through the ventilation network.\n\nNot rats. Something that leaves a faint acidic residue on the grate when Sam dares to look.",
      effects: { flags: { organismSeen: true } },
      next: "p2s1_cell_4"
    },
    p2s1_cell_4: {
      speaker: "narration",
      text: "A corporate voice — the station AI — murmurs through a cracked speaker:\n\n“Facility integrity nominal. All biological research assets remain contained. Rest is recommended for optimal compliance.”",
      next: "p2s1_choice_night"
    },

    p2s1_choice_night: {
      saveLabel: "First night",
      speaker: "narration",
      text: "The vent ticks. The inhibitor hums. Sam has one clear thought left before the drug pulls him under again.",
      choices: [
        {
          text: "Fight the inhibitor. Hold onto names. Gracie. Marcus. The cargo.",
          hint: "Integrity + · Pain now, memory later",
          next: "p2s1_night_fight",
          effects: { stats: { integrity: 5, cunning: 2 } }
        },
        {
          text: "Let the numbness take the edge. Survive the night.",
          hint: "Cunning + · Softer landing",
          next: "p2s1_night_yield",
          effects: { stats: { cunning: 4 } }
        },
        {
          text: "Listen to the vents. Map the sound.",
          hint: "Leadership + · First data point",
          next: "p2s1_night_listen",
          effects: { stats: { leadership: 3, cunning: 3 } }
        }
      ]
    },

    p2s1_night_fight: {
      speaker: "narration",
      text: "He forces the names through the static: Gracie. Deck Seven. Sealed pods. Marcus’s unblinking stare. Each one costs a spike of migraine and a thin trickle of blood from his nose. The inhibitor does not like being argued with.\n\nBut the names stay.",
      next: "p2s1_to_b"
    },
    p2s1_night_yield: {
      speaker: "narration",
      text: "He lets the drug flatten the sharp edges. Grief becomes weather. Anger becomes a rumor. He will need both later — if later still belongs to him.",
      next: "p2s1_to_b"
    },
    p2s1_night_listen: {
      speaker: "narration",
      text: "He counts intervals between scrapes. Direction. Humidity shifts. Whatever lives in the ducts is patient, heavy, and learning the station the way a predator learns a reef.",
      next: "p2s1_to_b"
    },

    p2s1_to_b: {
      speaker: "narration",
      text: "Cycles pass. Nutrient paste. Forced evaluations. The lower ring does not care what kind of officer he was.\n\nTime begins to erode.",
      next: "p2s1_dream_1"
    }
  };
})();
