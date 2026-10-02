/* STARFALL P2S1d — Vault / Emergence */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s1d = {
    p2s1_vault_1: {
      saveLabel: "Descent",
      bg: "chateauVault",
      location: "Château d’If · Sealed Research Section",
      hideContainment: true,
      clearChars: true,
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: true },
        center: { id: "roland", sprite: "tired", focus: false }
      },
      speaker: "narration",
      text: "The final bulkhead yields with a sound like a rib cracking.\n\nBeyond: rows of failed containment pods, half-dissolved skeletons fused to alloy, data cores still weakly powered under frost and film. Helios letterheads. Specimen tags. A corporate indifference more thorough than any cruelty.",
      effects: { flags: { vaultReached: true } },
      next: "p2s1_vault_2"
    },
    p2s1_vault_2: {
      speaker: "narration",
      text: "One core still sings a low, dying song. Life-cycle files. Partial escape vector: an old maintenance shuttle bay, craft half-dead but not fully buried.\n\nKane’s hands shake as he transfers the data. Age, radiation — or the first signs of the thing that has been breathing through the station’s veins.",
      effects: { flags: { fariaDataCore: true } },
      next: "p2s1_vault_3"
    },
    p2s1_vault_3: {
      speaker: "roland",
      chars: {
        center: { id: "roland", sprite: "tired", focus: true },
        left: { id: "prisonsam", sprite: "angry", focus: false }
      },
      text: "Take it. The board. The truth about the probe. Proof that your Horizon was a courier for something that should have stayed in the dark.\n\nI’ll overload a junction. Sensors go blind. You run. That’s the deal.",
      next: "p2s1_choice_kane_end"
    },

    p2s1_choice_kane_end: {
      saveLabel: "Kane’s last order",
      speaker: "narration",
      text: "The vault lights flicker. Somewhere above, wet movement accelerates.",
      choices: [
        {
          text: "Argue. Try to take him with you.",
          hint: "Integrity + · He refuses",
          next: "p2s1_kane_argue",
          effects: { stats: { integrity: 5, trust: 3 } }
        },
        {
          text: "Take the core. Honor the deal. Run.",
          hint: "Cunning + · Leadership +",
          next: "p2s1_kane_run",
          effects: { stats: { cunning: 4, leadership: 4 } }
        },
        {
          text: "Promise the names on the outside will pay.",
          hint: "Leadership + · Revenge oath",
          next: "p2s1_kane_oath",
          effects: { stats: { leadership: 6 } }
        }
      ]
    },

    p2s1_kane_argue: {
      speaker: "sam",
      text: "I’m not leaving you for that thing to finish.",
      next: "p2s1_kane_argue_2"
    },
    p2s1_kane_argue_2: {
      speaker: "roland",
      text: "You are. That’s an order from a captain who outranks your guilt. Go become inconvenient, Page. That’s the only eulogy I want.",
      next: "p2s1_escape_1"
    },
    p2s1_kane_run: {
      speaker: "sam",
      text: "I’ll take the core. Don’t make the diversion count for nothing.",
      next: "p2s1_kane_run_2"
    },
    p2s1_kane_run_2: {
      speaker: "roland",
      text: "I never do. Run.",
      next: "p2s1_escape_1"
    },
    p2s1_kane_oath: {
      speaker: "sam",
      text: "Marcus. Elias. Vincent. Helios. I’ll put their names on something that can’t be filed away.",
      next: "p2s1_kane_oath_2"
    },
    p2s1_kane_oath_2: {
      speaker: "roland",
      text: "Then survive long enough to mean it. Go.",
      next: "p2s1_escape_1"
    },

    p2s1_escape_1: {
      saveLabel: "Emergence",
      bg: "chateauVent",
      location: "Château d’If · Lower Decks",
      clearChars: true,
      fx: "shake",
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "Power dies in a scream of overloaded junctions. Kane’s diversion buys a corridor of blindness.\n\nSam moves alone. The organism is fully awake — multiple stages, ducts that constrict, a brief zero-g section where a juvenile form drifts past his face close enough to taste the acid on its plates.",
      next: "p2s1_escape_2"
    },
    p2s1_escape_2: {
      speaker: "narration",
      text: "Synthetic guards are gone, fled, or walking incubators with corporate armor still strapped over ruin. The AI’s voice remains calm:\n\n“All assets remain secured. Compliance is appreciated.”",
      next: "p2s1_choice_escape"
    },

    p2s1_choice_escape: {
      saveLabel: "Final stretch",
      speaker: "narration",
      text: "The maintenance bay is close. The inhibitor is the only thing still half-masking his bio-signature from the hunt.",
      choices: [
        {
          text: "Surge the inhibitor off. Full mind, full signature risk.",
          hint: "Integrity + · Cunning − risk",
          next: "p2s1_esc_surge",
          effects: { stats: { integrity: 4, cunning: 2 }, flags: { neuralInhibitor: false } }
        },
        {
          text: "Keep the inhibitor. Stay half-invisible. Stay half-numb.",
          hint: "Cunning + · Safer path",
          next: "p2s1_esc_mask",
          effects: { stats: { cunning: 6 } }
        },
        {
          text: "Use Kane’s map. Slow, exact, no heroics.",
          hint: "Leadership + · Kane’s lesson",
          next: "p2s1_esc_map",
          effects: { stats: { leadership: 5, cunning: 3 } }
        }
      ]
    },

    p2s1_esc_surge: {
      speaker: "narration",
      text: "Clarity returns like a blade. So does every scream the drug had softened. He runs on rage and memory and the data core burning against his ribs.",
      next: "p2s1_shuttle"
    },
    p2s1_esc_mask: {
      speaker: "narration",
      text: "He stays a blur to the sensors and a stranger to himself. The hatch arrives anyway — freedom with the volume turned down.",
      next: "p2s1_shuttle"
    },
    p2s1_esc_map: {
      speaker: "narration",
      text: "Kane’s marks lead through a service throat no one has cleaned in years. Exact. Ugly. Alive.",
      next: "p2s1_shuttle"
    },

    p2s1_shuttle: {
      bg: "chateauShuttle",
      location: "Maintenance Shuttle Bay",
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "The craft is half-dead and enough. Sam seals the hatch. Launch sequence stutters, catches.\n\nSomething impacts the outer hull. The station lists. The AI’s last transmission is corporate calm: all assets remain secured.",
      next: "p2s1_shuttle_2"
    },
    p2s1_shuttle_2: {
      bg: "space",
      location: "High Orbit · Escape Vector",
      speaker: "narration",
      text: "He launches into the black carrying Kane’s core, the specimen truth, and the knowledge of what was done to him — and what is still loose on the station.\n\nPhysical prison falls away. What clings is colder: identity erosion, Helios’s long arm, the copper taste of a reactor that once disagreed with time… and the certainty that Marcus Vey’s steady hands were never only a man’s jealousy.",
      effects: { flags: { escapedChateau: true, fariaDataCore: true } },
      next: "p2s1_end_1"
    },

    p2s1_end_1: {
      bg: "black",
      clearChars: true,
      clearFx: true,
      speaker: "narration",
      text: "Château d’If Station shrinks behind him.\n\nSam Page is no longer an officer with a number.\n\nHe is a contaminated witness — free, armed with proof, and no longer certain which parts of him the conglomerate still owns.",
      next: "p2s1_end_card"
    },
    p2s1_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      hideContainment: true,
      speaker: "narration",
      text: "— End of Prison Arc —\n\nEmergence.\n\nThe cell is gone. The curriculum remains.",
      next: "p2s1_to_p2s2"
    },
    p2s1_to_p2s2: {
      speaker: "narration",
      text: "While Sam learned the station’s real curriculum, Earth did not pause.\n\nGracie’s years are a different kind of sentence.",
      next: "p2s2_open"
    }
  };
})();