/* STARFALL P2S2d — Within six months: he finishes what the wall started */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s2d = {
    p2s2_harden_1: {
      saveLabel: "What hope becomes",
      bg: "gracieApt",
      location: "Gracie’s Apartment · Night",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "narration",
      text: "Not years. Months.\\n\\nHope does not die in a single scene. It thins across a half-year of locked doors and unlocked ones — bargaining with smaller futures, and with the heat of a man who kept his promise to come back.",
      next: "p2s2_harden_2"
    },
    p2s2_harden_2: {
      speaker: "narration",
      text: "Sam’s case number is no longer temporary embarrassment. Colonial Safety has filed it under resolved enough.\\n\\nGracie can still believe he was framed. Belief does not open the facility. Belief does not answer when she wakes reaching across a cold mattress — or when her body tightens at the memory of Vincent’s fingers and the way she did not stop him.",
      next: "p2s2_harden_3"
    },
    p2s2_harden_3: {
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "He is in her kitchen again. Shirt sleeves rolled. The low light catches the line of his throat when he drinks from her glass without asking.\\n\\nShe watches his mouth on the rim and feels the same pulse low in her belly that answered him at the wall. The first time was fingers and a coat and a warning. Tonight the air knows the sequel.",
      next: "p2s2_harden_choice"
    },
    p2s2_harden_choice: {
      saveLabel: "What she claims out loud",
      speaker: "narration",
      text: "She can still name a boundary. Her body has been rewriting the contract since the night she slid down the plaster and shook.",
      choices: [
        {
          text: "Say her heart stays with Sam — even now.",
          hint: "Words · Body has other plans",
          next: "p2s2_h_distant",
          effects: {
            flags: { gracieVincentDistant: true },
            stats: { integrity: 2 }
          }
        },
        {
          text: "Admit she needs him here without calling it love.",
          hint: "Lean",
          next: "p2s2_h_lean",
          effects: {
            flags: { gracieVincentLean: true }
          }
        },
        {
          text: "Stop pretending. Ask him to stay the night.",
          hint: "No more performance",
          next: "p2s2_h_bond",
          effects: {
            flags: {
              gracieVincentBonded: true,
              gracieVincentLean: true,
              gracieWithVincent: true
            }
          }
        }
      ]
    },
    p2s2_h_distant: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "You’ve been kind. I won’t pretend that doesn’t matter. But if you’re waiting for me to stop belonging to someone who can’t walk through that door — you’ll be waiting a long time.",
      next: "p2s2_h_distant_2"
    },
    p2s2_h_distant_2: {
      speaker: "vincent",
      text: "I’m not asking you to stop belonging.\\n\\nI’m asking you to stop starving while you wait. You already answered me once against that wall. Don’t insult us both by pretending it was an accident.",
      next: "p2s2_h_distant_3"
    },
    p2s2_h_distant_3: {
      speaker: "narration",
      text: "He sets the glass down and comes to her. No rush. When his hands frame her hips she says his name like a warning and then like something else entirely.\\n\\n“Vincent— we shouldn’t—”\\n\\nHe kisses the rest of the sentence out of her mouth. She tastes rain and certainty. Her hands rise to push and curl into his shirt instead — the same betrayal as before.",
      next: "p2s2_sex_1"
    },
    p2s2_h_lean: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I need the help. I need not being the only adult in the room. I’m not ready to call this anything else.",
      next: "p2s2_h_lean_2"
    },
    p2s2_h_lean_2: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true }
      },
      text: "Then don’t call it anything.\\n\\nJust don’t push me away when I put my hands on you. You didn’t last time.",
      next: "p2s2_h_lean_3"
    },
    p2s2_h_lean_3: {
      speaker: "narration",
      text: "She doesn’t push.\\n\\nWhen he draws her in she goes, face against his throat, breathing him in like air after too long underwater. His thigh finds the same place between hers as at the wall. Her body remembers and softens before her pride can catch up.",
      next: "p2s2_sex_1"
    },
    p2s2_h_bond: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "I’m so tired of being brave for a man the world has already buried under paperwork.\\n\\nIf you stay — stay. I’m done pretending I don’t want you in this room. I stopped pretending the night I came on your hand.",
      next: "p2s2_h_bond_2"
    },
    p2s2_h_bond_2: {
      speaker: "vincent",
      text: "Then I’ll stay as myself. You don’t owe the feeds a mourning schedule — and you don’t owe that wall an unfinished ending.",
      next: "p2s2_sex_1"
    },

    p2s2_sex_1: {
      saveLabel: "The bed",
      bg: "gracieApt",
      location: "Gracie’s Apartment · Bedroom",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      speaker: "narration",
      text: "Clothes come off in pieces — not romantic, not cruel, just necessary. The air on her bare skin raises gooseflesh; his palms smooth it away as he walks her past the wall where it started, into the bedroom that still holds a dent on the other side of the mattress where Sam used to sleep.",
      next: "p2s2_sex_2"
    },
    p2s2_sex_2: {
      speaker: "narration",
      text: "Vincent lays her down and looks at her like the weeks of polite visits were only the long approach to this.\\n\\nHe mouths a path from her collarbone to her breast, draws a nipple between his lips, sucks until her back arches. His hand is already between her thighs — familiar now — finding her slick, spreading her open with two fingers while she fists the sheet and tries not to hear how wet she is.",
      next: "p2s2_sex_3"
    },
    p2s2_sex_3: {
      speaker: "gracie",
      text: "Vincent— please—",
      next: "p2s2_sex_4"
    },
    p2s2_sex_4: {
      speaker: "vincent",
      text: "Please stop, or please more?\\n\\nBe honest for once. Your cunt already answered. It answered weeks ago against the plaster.",
      next: "p2s2_sex_5"
    },
    p2s2_sex_5: {
      speaker: "narration",
      text: "She turns her face into the pillow. He does not let her hide — a hand in her hair, gentle, turning her back to him as he settles between her legs.\\n\\nThe first push of his cock is slow and thick. She is still tight from months of almost-nothing and the stretch burns sweet. He sinks in until his hips meet hers and holds there, breathing hard against her neck, letting her feel every inch of what she did not stop at the wall and is not stopping now.",
      next: "p2s2_sex_6"
    },
    p2s2_sex_6: {
      speaker: "narration",
      text: "When he starts to move it is deep, rolling thrusts that drag against places she had almost forgotten could light up. The wet sound of it fills the quiet room. She wraps her legs around him without deciding to. Her nails score his shoulders.\\n\\n“That’s it,” he murmurs. “Take it. You’ve been empty long enough — and we both know fingers were only the beginning.”",
      next: "p2s2_sex_7"
    },
    p2s2_sex_7: {
      speaker: "narration",
      text: "He fucks her through one climax and into another — the second dragged out of her when he angles higher and grinds, relentless, until she comes with a broken cry that sounds too much like grief and too much like the sound she made against his coat.\\n\\nHe follows with a groan, buried deep, spilling into her in hard pulses while she shudders under him and does not tell him to pull out.",
      next: "p2s2_sex_8"
    },
    p2s2_sex_8: {
      speaker: "narration",
      text: "After, the room smells of sex and skin. His weight is a living blanket. She could push him off. She could reclaim the empty half of the bed.\\n\\nShe turns into his chest instead, eyes open in the dark, and listens to a heartbeat that is not Sam’s. Six months since the restraints. A handful of weeks since the wall. A single night that finishes the argument her body started.",
      effects: {
        flags: {
          gracieWithVincent: true,
          gracieVincentBonded: true,
          gracieHopeCollapsed: true,
          nathanConceived: true
        }
      },
      next: "p2s2_sex_9"
    },
    p2s2_sex_9: {
      speaker: "gracie",
      text: "…This doesn’t make the other thing untrue.",
      next: "p2s2_sex_10"
    },
    p2s2_sex_10: {
      speaker: "vincent",
      text: "I know.\\n\\nSleep. I’ll still be here when you wake up wanting to hate me for it — the way you wanted to hate me after the wall.",
      next: "p2s2_end_1"
    },
    p2s2_end_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Sam’s imprisonment did not only take his freedom.\\n\\nIn six months it redistributed the people who loved him — into silence, into compromise, into Vincent’s hands and mouth and the particular mercy of being wanted when the sector had decided she should only mourn.\\n\\nGracie loses hope the way civilians lose ground: not across years, but in the weekly decision to keep living inside a body that still needs to be touched.",
      next: "p2s2_end_card"
    },
    p2s2_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      speaker: "narration",
      text: "— End of Scene —\\n\\nGracie Loses Hope.\\n\\nSix months. A wall. A bed.\\nShe can still say Sam’s name like a vow.\\nHer body has already signed a different treaty.",
      ending: {
        type: "chapter",
        title: "Act Complete",
        subtitle: "Part 2 — Gracie Loses Hope",
        epigraph: "Loneliness is also a kind of consent the body negotiates alone.",
        body: "Within half a year of the arrest: shop pressure, monitored letters, Vincent’s first claim against the wall, then the bed that finished it.\\n\\nHer words tried for distance. Her need did not.\\n\\nWhen Sam returns, the pieces will already have moved — including the ones that share her sheets."
      }
    }
  };
})();
