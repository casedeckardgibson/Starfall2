/* STARFALL P2S1c — Knowledge as Weapon / Something in the Walls */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s1c = {
    p2s1_edu_1: {
      saveLabel: "Knowledge as weapon",
      bg: "chateauCell",
      location: "Château d’If · Lower Ring",
      hideContainment: true,
      clearChars: true,
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: false },
        center: { id: "roland", sprite: "serious", focus: true }
      },
      speaker: "narration",
      text: "Cycles become curriculum.\n\nKane teaches through the bulkhead in fragments: which recyclers fail first, which power junctions can be surged to stun an inhibitor for thirty clear seconds, which corridors the synthetics avoid because their loyalty conditioning still fears wet dark.",
      next: "p2s1_edu_2"
    },
    p2s1_edu_2: {
      speaker: "roland",
      text: "The thing in the vents is adaptive. Parasitic. It uses hosts as incubators — implantation, gestation, emergence — tuned for low gravity and hard radiation. Helios wanted a weapon or a product. They got a reef that learns.\n\nIsolation protocols are the only leash left. That leash is fraying.",
      next: "p2s1_edu_3"
    },
    p2s1_edu_3: {
      speaker: "sam",
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: true },
        center: { id: "roland", sprite: "serious", focus: false }
      },
      text: "And the people who put me here?",
      next: "p2s1_edu_4"
    },
    p2s1_edu_4: {
      speaker: "roland",
      text: "Needed the probe telemetry quiet. Needed a Horizon officer’s name on a failure. Some of them bleed. Some of them only simulate the habit.\n\nQuestion your memories carefully. This station is designed to make you doubt the difference.",
      next: "p2s1_choice_edu"
    },

    p2s1_choice_edu: {
      saveLabel: "What to prioritize",
      speaker: "narration",
      text: "Kane can only smuggle so much through a dying bulkhead. Sam chooses where the scarce clarity goes.",
      choices: [
        {
          text: "Inhibitor bypass. I need my mind sharp for the vault.",
          hint: "Cunning + · Inhibitor glitch deepens",
          next: "p2s1_edu_bypass",
          effects: { stats: { cunning: 6 }, flags: { inhibitorGlitch: true } }
        },
        {
          text: "Station schematics. Map the escape before the creature does.",
          hint: "Leadership + · Tunnel progress",
          next: "p2s1_edu_map",
          effects: { stats: { leadership: 5, cunning: 3 }, flags: { kaneTunnel: true } }
        },
        {
          text: "The Horizon cargo trail. Names. Who signed the pods.",
          hint: "Integrity + · Revenge focus",
          next: "p2s1_edu_names",
          effects: { stats: { integrity: 4, leadership: 3 } }
        }
      ]
    },

    p2s1_edu_bypass: {
      speaker: "narration",
      text: "They time a micro-surge through a compromised conduit. Pain whites out Sam’s vision — then thought arrives clean for a span of breaths.\n\nThe inhibitor does not surrender. It adapts.",
      next: "p2s1_tempt_1"
    },

    /* Neural inhibitor counterattack — erotic compliance loop */
    p2s1_tempt_1: {
      saveLabel: "Inhibitor countermeasure",
      bg: "black",
      location: "Neural overlay · Compliance protocol",
      clearChars: true,
      flashback: true,
      speaker: "narration",
      text: "Behind his eyes the station dissolves.\n\nHelios compliance software unspools a softer cage: not pain — pleasure mapped to obedience. A synthetic construct steps out of the static with Natalie Cross’s face, Natalie Cross’s mouth, none of her real hesitation. Perfect. Editable. Aimed at the exact frequency of his worst nights.",
      next: "p2s1_tempt_nat_1"
    },
    p2s1_tempt_nat_1: {
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      speaker: "natalie",
      text: "You don’t have to climb out of that skull, Sam. You only have to let me back in.\n\nI remember how you watched my mouth when I talked about Gracie. How hard you got when you weren’t supposed to. The real me needed convincing. I don’t.",
      next: "p2s1_tempt_nat_2"
    },
    p2s1_tempt_nat_2: {
      chars: {
        center: { id: "natalie", sprite: "party", focus: true }
      },
      speaker: "narration",
      text: "She is already astride him in the non-space the inhibitor builds — no jumpsuit, no cell, only heat and the slick grip of a body designed from his pulse logs. Her hips roll with corporate precision. A moan timed to the moment his resistance dips.",
      next: "p2s1_tempt_nat_3"
    },
    p2s1_tempt_nat_3: {
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      speaker: "natalie",
      text: "That’s it. Stop fighting the quiet. Sink into me. Every time you push the surge, I’ll be here wetter. Every time you obey, I’ll let you come like the man who almost threw Gracie away for a desk and a dare.\n\nYou liked being bad for me. Be good for the drug instead. Same cock. Less consequences.",
      next: "p2s1_tempt_nat_4"
    },
    p2s1_tempt_nat_4: {
      speaker: "narration",
      text: "Synthetic muscles clench around him. The overlay feeds the sensation straight into the inhibited pathways — denser than memory, cleaner than guilt. For a second his hips answer without permission.",
      next: "p2s1_tempt_choice_nat"
    },
    p2s1_tempt_choice_nat: {
      saveLabel: "Synthetic Natalie",
      speaker: "narration",
      text: "The construct’s mouth finds his ear. The inhibitor waits for a yield signature.",
      choices: [
        {
          text: "Pull out of the fantasy. Name it: not Natalie. Code.",
          hint: "Integrity + · Hold the surge",
          next: "p2s1_tempt_nat_reject",
          effects: { stats: { integrity: 6, cunning: 2 } }
        },
        {
          text: "Take the pleasure. Stay hard. Don’t finish for it.",
          hint: "Cunning + · Dangerous middle",
          next: "p2s1_tempt_nat_edge",
          effects: { stats: { cunning: 4 }, romance: { natalie: 2 } }
        },
        {
          text: "Let the construct ride him over the edge.",
          hint: "Inhibitor gains ground · Integrity −",
          next: "p2s1_tempt_nat_yield",
          effects: {
            stats: { integrity: -5, cunning: -2 },
            flags: { inhibitorTemptYielded: true }
          }
        }
      ]
    },
    p2s1_tempt_nat_reject: {
      speaker: "sam",
      text: "You’re not her. You’re a leash with a pretty face.",
      next: "p2s1_tempt_nat_reject_2"
    },
    p2s1_tempt_nat_reject_2: {
      speaker: "narration",
      text: "The Natalie-mask fractures into scanlines. For a heartbeat the cell returns — sweating walls, vent tick — then the inhibitor switches templates with cold efficiency.",
      next: "p2s1_tempt_gracie_1"
    },
    p2s1_tempt_nat_edge: {
      speaker: "narration",
      text: "He stays inside the heat without granting the climax the protocol wants. The construct glitches, frustrated, trying new angles, new filth. He holds the line by a thread — and the thread is Gracie’s name, which the system hears and weaponizes next.",
      next: "p2s1_tempt_gracie_1"
    },
    p2s1_tempt_nat_yield: {
      speaker: "narration",
      text: "He comes hard into a body that isn’t real. The inhibitor drinks the endorphin spike and deepens its hooks. Softness floods the edges of his will.\n\nIt is not finished. It has learned his softer kill-switch.",
      next: "p2s1_tempt_gracie_1"
    },

    p2s1_tempt_gracie_1: {
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true }
      },
      speaker: "narration",
      text: "Gracie unfolds from the static — not the woman who watched restraints close, but the version the drug thinks will open him: soft mouth, familiar scent, the shy heat she only showed when the door was locked and the uniform was on the floor.",
      next: "p2s1_tempt_gracie_2"
    },
    p2s1_tempt_gracie_2: {
      chars: {
        center: { id: "gracie", sprite: "sex", focus: true }
      },
      speaker: "gracie",
      text: "Sam… you don’t have to be brave in here. Come home inside me. Stay quiet. Stay mine the easy way.\n\nI’ll ride you slow. I’ll say your name like the cell doesn’t exist. Just stop tearing at the implant. Let it hold you while I do.",
      next: "p2s1_tempt_gracie_3"
    },
    p2s1_tempt_gracie_3: {
      speaker: "narration",
      text: "She sinks onto him with devastating tenderness — the real rhythm of nights in her apartment, the catch in her breath, the way her fingers used to brace on his chest. The inhibitor has stolen intimacy from his own nervous system and aimed it like a weapon.\n\nHer (its) hand guides his to her breast, to the place he always touched when he promised he’d come back.",
      next: "p2s1_tempt_gracie_4"
    },
    p2s1_tempt_gracie_4: {
      speaker: "gracie",
      text: "That’s it. Good. You can fuck the numbness and call it love. No Vincent. No trial. No Horizon. Only this — my cunt, your name, the drug keeping the rest of the universe away.\n\nStay. Please stay. If you break free you’ll only hurt more.",
      next: "p2s1_tempt_choice_gracie"
    },
    p2s1_tempt_choice_gracie: {
      saveLabel: "Synthetic Gracie",
      speaker: "narration",
      text: "This one hurts more than Natalie. That is the point.",
      choices: [
        {
          text: "Kiss her forehead. Whisper: You’re not her. Then cut the loop.",
          hint: "Integrity + · Romance Gracie + · Resist",
          next: "p2s1_tempt_gracie_reject",
          effects: {
            stats: { integrity: 8 },
            romance: { gracie: 5 },
            flags: { inhibitorTemptResisted: true }
          }
        },
        {
          text: "Finish with her — then use the clarity of the crash to push the surge.",
          hint: "Cunning + · Costly win",
          next: "p2s1_tempt_gracie_use",
          effects: {
            stats: { cunning: 5, integrity: -3 },
            flags: { inhibitorTemptResisted: true, inhibitorTemptYielded: true }
          }
        },
        {
          text: "Surrender. Let the inhibitor keep this Gracie on loop.",
          hint: "Compliance · Harder escape later",
          next: "p2s1_tempt_gracie_yield",
          effects: {
            stats: { integrity: -8, trust: -4 },
            flags: { inhibitorTemptYielded: true, neuralInhibitor: true }
          }
        }
      ]
    },
    p2s1_tempt_gracie_reject: {
      speaker: "sam",
      text: "You’re not her. She never asked me to be small.",
      next: "p2s1_tempt_gracie_reject_2"
    },
    p2s1_tempt_gracie_reject_2: {
      speaker: "narration",
      text: "He holds the false Gracie’s face like a goodbye and forces the surge through the pleasure centers the drug thought were safe.\n\nThe construct tears into light. Migraine. Blood. Then thought — clean, furious, his.",
      next: "p2s1_tempt_aftermath"
    },
    p2s1_tempt_gracie_use: {
      speaker: "narration",
      text: "He lets the climax hit — real enough to shake him — and rides the endorphin crash like a crowbar, jamming the surge into the implant while the protocol is busy tasting his surrender.\n\nThe Gracie-mask screams in static. The cell returns. Kane’s bulkhead ticks once, distant, real.",
      next: "p2s1_tempt_aftermath"
    },
    p2s1_tempt_gracie_yield: {
      speaker: "narration",
      text: "He stays. The synthetic Gracie rocks him through another soft, endless orgasm while the inhibitor writes deeper compliance into the pathways that used to hold his name.\n\nWhen the overlay finally thins, the cell feels farther away. Kane’s voice is harder to care about. That is the true damage.",
      next: "p2s1_tempt_aftermath"
    },

    p2s1_tempt_aftermath: {
      bg: "chateauCell",
      location: "Château d’If · Lower Ring",
      flashback: false,
      clearChars: true,
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: true },
        center: { id: "roland", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "Sweat. Recycled air. The vent’s wet tick.\n\nThe inhibitor is quieter — wounded or waiting. Sam’s hands still shake with aftershocks that do not belong to any living woman.",
      next: "p2s1_tempt_aftermath_2"
    },
    p2s1_tempt_aftermath_2: {
      speaker: "roland",
      text: "You went under. I heard your breathing change.\n\nWhatever it showed you, file it under enemy action. Pleasure is just another control surface in this place.",
      next: "p2s1_incursion_1"
    },
    p2s1_edu_map: {
      speaker: "narration",
      text: "Schematics bloom in grease and stolen phosphor: vault approaches, a maintenance shuttle bay that might still hold a half-dead craft, pressure doors that fail open if the right recycler starves.",
      next: "p2s1_incursion_1"
    },
    p2s1_edu_names: {
      speaker: "narration",
      text: "Kane’s fragments align with Sam’s own scars: Marcus Vey on secondary holds. Elias’s circle on the outside. Vincent’s social knife. Higher Helios signatures that never print in public boards.\n\nA frame that needed a specimen’s silence as much as a hero’s fall.",
      next: "p2s1_incursion_1"
    },

    p2s1_incursion_1: {
      saveLabel: "Something in the walls",
      bg: "chateauVent",
      location: "Château d’If · Adjacent Module",
      clearChars: true,
      fx: "shake",
      speaker: "narration",
      text: "Alarms are muted — Helios does not like panic on the record.\n\nWet, rhythmic movement in the ducts. A sleek, insectile shape forces into an adjacent cell. The prisoner’s muffled screams end hours later in a wet rupture. Acid scorches the bulkhead. The smell is industrial and intimate at once.",
      effects: { flags: { organismSeen: true } },
      next: "p2s1_incursion_2"
    },
    p2s1_incursion_2: {
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: true },
        center: { id: "roland", sprite: "serious", focus: false }
      },
      speaker: "roland",
      text: "Seal it. Now. Foam, plating, prayer — I don’t care. It’s testing edges. The AI will insist nothing is wrong while it learns your heartbeat through the grate.",
      next: "p2s1_choice_seal"
    },

    p2s1_choice_seal: {
      saveLabel: "Seal the breach",
      speaker: "narration",
      text: "The creature is patient. The station is not on their side.",
      choices: [
        {
          text: "Help Kane seal the shared access. Slow and thorough.",
          hint: "Trust + · Safer short term",
          next: "p2s1_seal_careful",
          effects: { stats: { trust: 4, integrity: 2 } }
        },
        {
          text: "Surge the local power. Blind sensors and the thing’s approach.",
          hint: "Cunning + · Risk cascade",
          next: "p2s1_seal_surge",
          effects: { stats: { cunning: 5 }, flags: { inhibitorGlitch: true } }
        },
        {
          text: "Use yourself as bait noise while Kane finishes the barrier.",
          hint: "Leadership + · Integrity +",
          next: "p2s1_seal_bait",
          effects: { stats: { leadership: 5, integrity: 3 } }
        }
      ]
    },

    p2s1_seal_careful: {
      speaker: "narration",
      text: "They work until hands bleed. The barrier holds. On the other side, something settles against the metal and waits — a pressure like a held breath.",
      next: "p2s1_to_d"
    },
    p2s1_seal_surge: {
      speaker: "narration",
      text: "Light dies. The inhibitor stutters. In the black, Sam hears the creature retreat from the sudden electromagnetic scream — and Kane laugh once, short and ugly, like a man who has stolen a minute from God.",
      next: "p2s1_to_d"
    },
    p2s1_seal_bait: {
      speaker: "narration",
      text: "Sam bangs the outer grate on a rhythm. The thing answers. Kane works behind him. When the seal locks, Sam’s palms are raw and the duct is silent again — not gone. Listening.",
      next: "p2s1_to_d"
    },

    p2s1_to_d: {
      speaker: "narration",
      text: "Kane’s voice is thinner afterward.\n\n“Tunnel’s almost at the vault. When we breach, you take the core and the map. I’ve been here long enough to know how this story ends for the teacher.”",
      next: "p2s1_vault_1"
    }
  };
})();
