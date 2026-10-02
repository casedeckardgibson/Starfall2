/* STARFALL P2S2b — Vincent; spoken distance, bodily yes */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s2b = {
    p2s2_vincent_1: {
      saveLabel: "Vincent arrives with help",
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "Vincent does not arrive with flowers.\\n\\nHe arrives with a repaired supplier contract, the smell of rain still on his coat, and the particular patience and intelligence of a man who has mapped every inch of the room, and of Gracie. When Gracie opens the door the apartment air is warm and stale from a day spent not eating properly. His gaze takes that in without comment.",
      next: "p2s2_vincent_2"
    },
    p2s2_vincent_2: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "joke", focus: true },
        center: { id: "gracie", sprite: "normal", focus: false }
      },
      text: "Before you tell me to leave — I already fixed the delivery freeze. Your name is still on the lease. I’d prefer it stayed that way.",
      next: "p2s2_vincent_3"
    },
    p2s2_vincent_3: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "I didn’t ask you to do that.",
      next: "p2s2_vincent_4"
    },
    p2s2_vincent_4: {
      speaker: "vincent",
      text: "You shouldn’t have to ask. That’s the difference between a headline and the person who still lives here.",
      next: "p2s2_vincent_5"
    },
    p2s2_vincent_5: {
      speaker: "narration",
      text: "He does not sit until she gestures — barely — at the chair. The fabric of his sleeve brushes her wrist as he passes. Static. Heat. She pulls her hand back as if burned and hates that he notices.",
      next: "p2s2_vincent_6"
    },
    p2s2_vincent_6: {
      speaker: "vincent",
      text: "I’m not here to replace him in a speech. I’m here because the sector decided he is radioactive, and radiation does not stop at the man in restraints. It lands on anyone standing close.",
      next: "p2s2_vincent_7"
    },
    p2s2_vincent_7: {
      speaker: "gracie",
      text: "Then why are you standing so close?",
      next: "p2s2_vincent_8"
    },
    p2s2_vincent_8: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "evil", focus: true }
      },
      text: "I want you not to drown while the feeds invent a cleaner story. If that looks like standing close, so be it.",
      next: "p2s2_vincent_choice"
    },
    p2s2_vincent_choice: {
      saveLabel: "What she says out loud",
      speaker: "narration",
      text: "What she says and what her body has been starving for are no longer the same language. Vincent will still keep coming either way. The only question is how much honesty she can stand before the loneliness answers for her.",
      choices: [
        {
          text: "I'll accept your professional help only. My heart can't take anything else.",
          hint: "Spoken distance · Body may disagree",
          next: "p2s2_v_distant",
          effects: {
            flags: { gracieVincentDistant: true },
            stats: { integrity: 2 }
          }
        },
        {
          text: "I'm tired of carrying this alone.",
          hint: "Lean",
          next: "p2s2_v_lean",
          effects: {
            flags: { gracieVincentLean: true }
          }
        },
        {
          text: "Thanks Vincent. Dinner will be ready soon, want some?",
          hint: "Open door",
          next: "p2s2_v_open",
          effects: {
            flags: { gracieVincentLean: true, gracieVincentBonded: true }
          }
        }
      ]
    },
    p2s2_v_distant: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      text: "Fix the contracts if it costs you nothing. Don’t try to fix me though. I am not a project, and Sam is not a vacancy.",
      next: "p2s2_v_distant_2"
    },
    p2s2_v_distant_2: {
      speaker: "vincent",
      text: "I hear you.\\n\\nI also see the way you haven’t been sleeping. The way you flinch toward the door every time it doesn’t open for him.",
      next: "p2s2_v_distant_3"
    },
    p2s2_v_distant_3: {
      speaker: "narration",
      text: "He stands. Close enough that she smells his expensive cologne and rain and something warmer underneath. His hand rises — slow enough to refuse — and settles at the side of her neck, thumb under her jaw.\\n\\nShe should step back. She does not.",
      next: "p2s2_v_touch"
    },
    p2s2_v_lean: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "I’m tired. That is not an invitation. It’s a fact. If you can keep the shop breathing without asking me to smile for it, then… fine.",
      next: "p2s2_v_lean_2"
    },
    p2s2_v_lean_2: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "normal", focus: true }
      },
      text: "No smile required. But I hate not seeing it anymore. Your smile is beautiful, Gracie.\\n\\n Just don’t insult both of us by pretending you only want paperwork.",
      next: "p2s2_v_lean_3"
    },
    p2s2_v_lean_3: {
      speaker: "narration",
      text: "His knuckles graze her cheekbone. The touch is almost nothing and somehow worse than a demand. Her breath stutters. The empty apartment presses in behind her like a witness.",
      next: "p2s2_v_touch"
    },
    p2s2_v_open: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      text: "Stay for dinner, I insist. It's the least I can offer for all your help.",
      next: "p2s2_v_open_2"
    },
    p2s2_v_open_2: {
      speaker: "vincent",
      text: "Of course, it smells good.",
      next: "p2s2_v_open_3"
    },
    p2s2_v_open_3: {
      speaker: "narration",
      text: "She lets him closer on purpose. His mouth finds the corner of hers first — testing — and when she doesn’t turn away he takes the kiss properly, slow and deep, tasting the loneliness she has been swallowing for months.",
      next: "p2s2_v_touch"
    },

    p2s2_v_touch: {
      saveLabel: "She doesn’t stop him as he closes the gap.",
      bg: "gracieApt",
      location: "Gracie’s Apartment",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "sad", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      speaker: "narration",
      text: "Vincent’s mouth finds hers whether she invited it in words or only in the way she failed to move.\\n\\nShe makes a sound against his lips — protest, need, both — and her hands come up to his chest as if to push. They stay there. Her fingers curl into fabric instead. She opens her mouth wider and their tongues dance against each other.",
      next: "p2s2_v_touch_2"
    },
    p2s2_v_touch_2: {
      speaker: "gracie",
      text: "This... doesn’t mean—",
      next: "p2s2_v_touch_3"
    },
    p2s2_v_touch_3: {
      speaker: "vincent",
      text: "I know what it means. You’re lonely. You’re angry. You’re still his in the story you tell yourself.\\n\\nNone of that is going to stop what’s already happening.",
      next: "p2s2_v_touch_4"
    },
    p2s2_v_touch_4: {
      speaker: "narration",
      text: "He walks her backward until her shoulders meet the wall. The plaster is cool through her shirt; his body is not. One thigh slots between hers. She gasps at the pressure — sharp, humiliatingly welcome — and he rocks against her just enough that she feels how hard he already is.",
      next: "p2s2_v_touch_5"
    },
    p2s2_v_touch_5: {
      speaker: "narration",
      text: "His hand slides under her hem. Palm up the bare skin of her thigh, higher, until his fingers find the heat between her legs through thin underwear. She is already wet. The discovery sits in the air between them like a verdict.\\n\\n“Gracie,” he murmurs, not unkind. “You can hate this in the morning. Tonight you’re going to take it.”",
      next: "p2s2_v_touch_6"
    },
    p2s2_v_touch_6: {
      speaker: "narration",
      text: "He hooks the fabric aside. Two fingers push into her slow and deep. She clenches around the intrusion with a broken sound and her forehead drops to his shoulder. He works her open with a patience that feels worse than roughness — circling, curling, finding the angle that makes her hips stutter against his hand.\\n\\nWhen her knees threaten to go he holds her up with the other arm and keeps going until she comes shaking, bitten-off cries muffled in his coat, shame and relief braided so tight she cannot tell them apart.",
      next: "p2s2_v_touch_7"
    },
    p2s2_v_touch_7: {
      speaker: "narration",
      text: "He does not fuck her against the wall. Not yet. He eases his fingers free, slick, and kisses her temple while she trembles.\\n\\n“I’ll be back,” he says. “You can lock the door if you want. We both know what happens when you open it.”",
      effects: {
        flags: { gracieWithVincent: true, gracieVincentLean: true }
      },
      next: "p2s2_v_touch_8"
    },
    p2s2_v_touch_8: {
      speaker: "narration",
      text: "After he leaves, the apartment smells like his skin and her own arousal. She slides down the wall to the floor and stays there until the shaking stops.\\n\\nShe told herself she would keep distance.\\n\\nHer body did not sign that agreement.",
      next: "p2s2_years_1"
    }
  };
})();
