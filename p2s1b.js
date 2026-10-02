/* STARFALL P2S1b — Dream / Time Erosion / Reality tests / Kane */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s1b = {
    p2s1_dream_1: {
      saveLabel: "A dream of elsewhere",
      decision: "inhibitor_dream",
      bg: "black",
      location: "—",
      alert: false,
      flashback: true,
      hideContainment: true,
      clearChars: true,
      speaker: "narration",
      text: "Sleep, when it comes, does not feel like the cell.\\n\\nIt feels like a door opening onto warmth he has no right to still own.",
      nextFn: function (state) {
        if (state.flags && state.flags.caughtWithNatalie) return "p2s1_dream_nat_1";
        return "p2s1_dream_gracie_1";
      },
      next: "p2s1_dream_gracie_1"
    },

    /* ===== FAITHFUL / DEFAULT: GRACIE ===== */
    p2s1_dream_gracie_1: {
      bg: "gracieApt",
      location: "Somewhere soft",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true }
      },
      speaker: "narration",
      text: "Gracie is already undressed to the waist, his shirt half-off her shoulders as if she pulled it there herself. The light is the low amber of her apartment at night. Rain on habitat glass. Her mouth tastes like the last honest thing he remembers.\\n\\nShe climbs into his lap without asking. Her bare thighs bracket his hips. Heat soaks through the thin fabric still between them.",
      next: "p2s1_dream_gracie_2"
    },
    p2s1_dream_gracie_2: {
      chars: {
        center: { id: "gracie", sprite: "sex", focus: true }
      },
      speaker: "gracie",
      text: "You’re here. Don’t think. Just… be here with me.",
      next: "p2s1_dream_gracie_3"
    },
    p2s1_dream_gracie_3: {
      speaker: "narration",
      text: "She guides his hand to her breast — soft weight, tight nipple under his thumb — then lower, between her legs, where she is already slick. She gasps when he finds the right pressure, forehead dropping to his. Her fingers work his cock free, stroke him once, twice, slow enough to make his stomach pull tight.\\n\\n“I want you inside,” she whispers. “However you need me.”",
      next: "p2s1_dream_choice_pos_g"
    },
    p2s1_dream_choice_pos_g: {
      saveLabel: "How he takes her",
      decision: "inhibitor_dream",
      speaker: "narration",
      text: "Her body is open, waiting. The dream does not rush him — it only offers.",
      choices: [
        {
          text: "On her back — slow, deep, face-to-face",
          hint: "Intimate",
          next: "p2s1_dream_g_mission",
          effects: { decision: "inhibitor_dream" }
        },
        {
          text: "From behind — her hands on the glass, his mouth on her neck",
          hint: "Hungry",
          next: "p2s1_dream_g_behind",
          effects: { decision: "inhibitor_dream" }
        }
      ]
    },
    p2s1_dream_g_mission: {
      speaker: "narration",
      text: "He lays her down. She spreads for him without shame. When he pushes into her it is one long, wet slide until he is seated to the hilt and she makes that small broken sound he used to live for.\\n\\nHer legs lock around his waist. Every thrust drags her clit against him. Her nails score his shoulders. The apartment, the rain, the universe shrink to the clutch of her cunt and the look in her eyes.",
      next: "p2s1_dream_choice_pace"
    },
    p2s1_dream_g_behind: {
      speaker: "narration",
      text: "He turns her toward the rain-streaked glass. She braces, back arched, and he sinks into her from behind in one thick stroke that punches a moan out of her.\\n\\nHis hand finds her breast; the other works between her thighs while he fucks her in deep, rolling thrusts. She pushes back to meet him. In the reflection her mouth is open, eyes half-lidded, completely his.",
      next: "p2s1_dream_choice_pace"
    },

    /* ===== NATALIE AFFAIR PATH ===== */
    p2s1_dream_nat_1: {
      bg: "lounge",
      location: "Somewhere forbidden",
      clearChars: true,
      chars: {
        center: { id: "natalie", sprite: "tempt", focus: true }
      },
      speaker: "narration",
      text: "Natalie is already half-naked across a desk that looks like the annex and feels like nowhere. Skirt hiked, blouse open, no patience left in her smile.\\n\\nShe pulls him in by the belt. “You don’t get to haunt me and stay soft,” she murmurs against his mouth, and bites his lip hard enough to sting.",
      next: "p2s1_dream_nat_2"
    },
    p2s1_dream_nat_2: {
      chars: {
        center: { id: "natalie", sprite: "party", focus: true }
      },
      speaker: "natalie",
      text: "Fuck me like you meant the mess. Like Gracie isn’t a ghost in the hall. I want it filthy and I want it now.",
      next: "p2s1_dream_nat_3"
    },
    p2s1_dream_nat_3: {
      speaker: "narration",
      text: "She shoves his hand under her skirt — no underwear, only wet heat — and strokes him through his clothes until he is aching. When she frees his cock she sinks to her knees for one devastating, slow suck, eyes up, then stands and turns, offering.",
      next: "p2s1_dream_choice_pos_n"
    },
    p2s1_dream_choice_pos_n: {
      saveLabel: "How he takes her",
      decision: "inhibitor_dream",
      speaker: "narration",
      text: "Two ways to ruin the night. Both of them hers.",
      choices: [
        {
          text: "Bend her over the desk — hard and deep",
          hint: "Rough",
          next: "p2s1_dream_n_desk",
          effects: { decision: "inhibitor_dream" }
        },
        {
          text: "Pull her into his lap — her riding, chest to chest",
          hint: "Close",
          next: "p2s1_dream_n_ride",
          effects: { decision: "inhibitor_dream" }
        }
      ]
    },
    p2s1_dream_n_desk: {
      speaker: "narration",
      text: "He folds her over the desk. One thrust and he is buried in her, tight and scalding. She laughs into a moan and pushes back.\\n\\nHe grips her hips and drives into her in sharp, punishing strokes. The wet sound of it fills the non-space. Her fingers squeak on the desk edge. “Harder,” she gasps. “Don’t you dare be gentle with a mistake.”",
      next: "p2s1_dream_choice_pace"
    },
    p2s1_dream_n_ride: {
      speaker: "narration",
      text: "He sits; she straddles him and sinks down until every inch is inside her. Her forehead against his, breath shared, she rolls her hips in a filthy, grinding rhythm that keeps him deep.\\n\\nBreasts against his chest, cunt gripping on every lift. She kisses him like an argument she intends to win with her body.",
      next: "p2s1_dream_choice_pace"
    },

    /* ===== SHARED: PACE ===== */
    p2s1_dream_choice_pace: {
      saveLabel: "Pace",
      speaker: "narration",
      text: "Pleasure climbs the way a tide climbs — inevitable if he lets it. His body wants the sprint. Something quieter under the dream wants him to stay.",
      choices: [
        {
          text: "Speed up — chase it",
          hint: "Surrender to the heat",
          next: "p2s1_dream_fast",
          effects: { flags: { dreamSpedUp: true } }
        },
        {
          text: "Slow down — hold the edge",
          hint: "Stay present",
          next: "p2s1_dream_slow",
          effects: { flags: { dreamSpedUp: false } }
        }
      ]
    },

    p2s1_dream_fast: {
      speaker: "narration",
      text: "He gives in to the sprint.\\n\\nThrusts turn brutal, greedy. The body under him — Gracie’s softness or Natalie’s hunger — answers with tighter heat, louder sounds, a rhythm that stops being a choice and becomes a fall. Orgasm gathers at the base of his spine like a held detonation.\\n\\nThe dream brightens at the edges. Too bright. Like a screen overdriving.",
      next: "p2s1_dream_choice_finish_fast"
    },
    p2s1_dream_choice_finish_fast: {
      saveLabel: "The edge",
      speaker: "narration",
      text: "He is past the point of clean decisions. The dream only asks how he wants to break.",
      choices: [
        {
          text: "Come inside her",
          next: "p2s1_dream_go",
          effects: { flags: { dreamCameInside: true } }
        },
        {
          text: "Try to pull back anyway",
          next: "p2s1_dream_go",
          effects: { flags: { dreamCameInside: false } }
        }
      ]
    },

    p2s1_dream_slow: {
      speaker: "narration",
      text: "He forces the rhythm down.\\n\\nLong strokes. Breath matched to breath. The wet clutch of her body stays devastating, but he does not sprint for the finish. Every nerve screams for more; he gives it less, and the less becomes a different kind of intensity — intimate, suspended, almost lucid.",
      next: "p2s1_dream_choice_finish_slow"
    },
    p2s1_dream_choice_finish_slow: {
      saveLabel: "Release — or not",
      speaker: "narration",
      text: "He could still spill into her and call it love, or hunger, or sleep. Or he could deny the dream the ending it is shaped for.",
      choices: [
        {
          text: "Come inside her",
          hint: "Give the dream what it wants",
          next: "p2s1_dream_go",
          effects: { flags: { dreamCameInside: true } }
        },
        {
          text: "Hold back. Pull out. Stay unfinished.",
          hint: "Refuse the closing loop",
          next: "p2s1_dream_success",
          effects: { flags: { dreamCameInside: false, inhibitorTemptResisted: true } }
        }
      ]
    },

    p2s1_dream_success: {
      bg: "chateauCell",
      location: "Château d’If · Solitary Module",
      flashback: false,
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "He wakes with his pulse hammering and the taste of someone else’s name in his mouth.\\n\\nThe cell is real: sweating walls, vent tick, inhibitor’s low hum under his thoughts like a disappointed machine. The dream tried to finish him into compliance. He did not sign.",
      next: "p2s1_dream_success_2"
    },
    p2s1_dream_success_2: {
      speaker: "narration",
      text: "Arousal fades into cold recycled air. Whatever built that softness will try again. For now, he still owns the next hour.",
      next: "p2s1_routine_1"
    },

    p2s1_dream_go: {
      bg: "black",
      location: "Neural overlay · Compliance lock",
      flashback: true,
      clearChars: true,
      speaker: "narration",
      text: "Release hits like a trap closing.\\n\\nPleasure floods every channel the inhibitor owns. The body under him dissolves into pure sensation — then into a loop: the same thrust, the same gasp, the same crest, again, again, while the cell, the station, and his name thin to rumor.",
      next: "p2s1_dream_go_2"
    },
    p2s1_dream_go_2: {
      speaker: "narration",
      text: "He is still inside the dream. The dream is inside the implant. The implant does not require his consent to continue.\\n\\nDays may be passing on the other side of his eyelids. He cannot check. He can only fuck a ghost that never tires and never lets him leave.",
      next: "p2s1_dream_go_end"
    },
    p2s1_dream_go_end: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "— COMPLIANCE LOCK —",
      ending: {
        type: "gameover",
        path: "inhibitor",
        warpDecision: "inhibitor_dream",
        title: "Game Over — The Inhibitor’s Embrace",
        epigraph: "Pleasure is just another control surface.",
        body: "Sam climaxed inside the dream the neural inhibitor built for him.\\n\\nThe loop closed. Helios compliance protocols kept him soft, spent, and obedient in a pleasure cage while the station’s real hours continued without him.\\n\\nSome prisons do not need walls. Only an ending you are willing to finish."
      }
    },


    p2s1_routine_1: {
      saveLabel: "Time Erosion",
      bg: "chateau",
      location: "Château d’If · Evaluation Suite",
      hideContainment: true,
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "Days blur into cycles marked only by paste and the occasional forced “psychological evaluation.”\n\nA synthetic interrogator runs empathy protocols like a Voight-Kampff turned inside out — not to find a machine, but to break a man until he can no longer prove he was ever human enough to matter.",
      next: "p2s1_routine_2"
    },
    p2s1_routine_2: {
      speaker: "narration",
      text: "Some prisoners never return from “medical.”\n\nThe ones who do come back are quieter. Eyes slightly wrong. Sometimes they leave trails of viscous fluid the cleaners pretend not to see. The station AI insists all biological anomalies are contained research assets.",
      next: "p2s1_routine_3"
    },
    p2s1_routine_3: {
      speaker: "narration",
      text: "Sam learns the hard math of Helios mercy: a black-site orbital for political and industrial threats. A dumping ground for people who know too much about the conglomerate’s quiet wars — and about what freighters like the Ardent Horizon sometimes carried in their sealed spines.",
      next: "p2s1_kane_1"
    },

    p2s1_kane_1: {
      saveLabel: "Kane’s signal",
      bg: "chateauCell",
      location: "Château d’If · Shared Bulkhead",
      clearChars: true,
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: false },
        center: { id: "roland", sprite: "tired", focus: true }
      },
      speaker: "narration",
      text: "Through a damaged bulkhead — scraped thin by years of patient work — a voice finds him.\n\nOlder. Precise. The voice of a man who has been teaching the station’s bones to betray it.",
      effects: { flags: { metKane: true, metRoland: true } },
      next: "p2s1_kane_2"
    },
    p2s1_kane_2: {
      speaker: "roland",
      text: "Keep your voice low. The synthetics filter for panic better than for conspiracy.\n\nKane. Roland Kane. Freighter captain once. Systems engineer when the universe stopped being polite. You’ve been staring at the vents like a man who still believes walls are only walls.",
      next: "p2s1_kane_3"
    },
    p2s1_kane_3: {
      speaker: "sam",
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: true },
        center: { id: "roland", sprite: "tired", focus: false }
      },
      text: "Something’s in them.",
      next: "p2s1_reality_intro"
    },

    /* ===== Neural inhibitor: reality tests ===== */
    p2s1_reality_intro: {
      saveLabel: "The tests",
      bg: "chateauCell",
      location: "Château d’If · Solitary Module",
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "Kane falls silent for days after that first exchange. The bulkhead stays dead. The inhibitor does not.\n\nIt escalates.\n\nNot with pleasure this time — with architecture. Whole nights rebuilt as arguments against Sam’s own continuity. If the implant cannot seduce him into compliance, it will try to convince him there was never a man left to free.",
      next: "p2s1_reality_1a"
    },
    p2s1_reality_1a: {
      saveLabel: "Test One · The Reactor",
      bg: "reactor",
      location: "Neural overlay · Deck Seven",
      flashback: true,
      clearChars: true,
      fx: "vignette",
      chars: {
        center: { id: "prisonsam", sprite: "tired", focus: true }
      },
      speaker: "narration",
      text: "He is back on the Ardent Horizon.\n\nKlaxons. Heat. The smell of cooking insulation. Containment numbers fall the way they fell — and then further. Further than memory allows. The bulkhead he thought he sealed is open. The coolant run fails. Faces he saved are already ash.",
      next: "p2s1_reality_1b"
    },
    p2s1_reality_1b: {
      speaker: "narration",
      text: "A voice that sounds like the station AI, and also like Marcus, and also like Sam’s own throat:\n\n“You did not walk away from Deck Seven. The reactor took you. Everything after — Gracie, the sponsorship, the trial, this cell — is the dying brain inventing a longer corridor so the end will not feel abrupt.”",
      next: "p2s1_reality_1c"
    },
    p2s1_reality_1c: {
      speaker: "narration",
      text: "The Horizon’s spine folds inward. Stars punch through the hull like cold nails. Sam floats in a silence so complete it has weight.\n\n“Hell is not fire,” the voice continues. “Hell is rehearsal. Betrayal on loop until you agree you deserved the first ending.”",
      next: "p2s1_reality_1_choice"
    },
    p2s1_reality_1_choice: {
      saveLabel: "Did he die there?",
      speaker: "narration",
      text: "The void waits for a verdict. The inhibitor is patient. It only needs him to nod.",
      choices: [
        {
          text: "Refuse. Pain is proof. The cell’s ache is not a fantasy’s courtesy.",
          hint: "Integrity + · Anchor in the body",
          next: "p2s1_reality_1_refuse",
          effects: {
            stats: { integrity: 6, leadership: 2 },
            flags: { realityTestReactor: true, resistedRealityBreak: true }
          }
        },
        {
          text: "Argue the timeline. Names. Dates. The trial’s paperwork was too cruel to be mercy.",
          hint: "Cunning + · Logic as shield",
          next: "p2s1_reality_1_argue",
          effects: {
            stats: { cunning: 6, integrity: 2 },
            flags: { realityTestReactor: true, resistedRealityBreak: true }
          }
        },
        {
          text: "Almost accept it — then claw back. If this is death, why does the implant still need permission?",
          hint: "Trust self · Narrow escape",
          next: "p2s1_reality_1_edge",
          effects: {
            stats: { integrity: 3, cunning: 3 },
            flags: { realityTestReactor: true, realityCrack: true }
          }
        }
      ]
    },
    p2s1_reality_1_refuse: {
      speaker: "sam",
      text: "Dead men don’t get nosebleeds from fighting a drug. I’m still here.",
      next: "p2s1_reality_1_break"
    },
    p2s1_reality_1_argue: {
      speaker: "sam",
      text: "If I died on Deck Seven, who sat through Colonial Safety’s interview? Who learned Marcus’s tells? Death doesn’t forge case numbers this carefully.",
      next: "p2s1_reality_1_break"
    },
    p2s1_reality_1_edge: {
      speaker: "narration",
      text: "For a heartbeat the stars look more real than the bunk.\n\nThen the contradiction lands: a machine asking him to surrender does not serve a corpse. The dead are already compliant.",
      next: "p2s1_reality_1_break"
    },
    p2s1_reality_1_break: {
      bg: "chateauCell",
      location: "Château d’If · Solitary Module",
      flashback: false,
      clearFx: true,
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "The Horizon tears like wet paper. The cell returns — uglier, smaller, blessedly specific. Sweat. Vent tick. The taste of metal in his mouth.",
      next: "p2s1_kane_r1"
    },
    p2s1_kane_r1: {
      saveLabel: "Kane on the first test",
      bg: "chateauCell",
      location: "Château d’If · Shared Bulkhead",
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: false },
        center: { id: "roland", sprite: "serious", focus: true }
      },
      speaker: "roland",
      text: "You were thrashing. I heard it through the plate. The implant tried the death story.",
      next: "p2s1_kane_r1b"
    },
    p2s1_kane_r1b: {
      speaker: "sam",
      text: "It said Deck Seven killed me. That all of this is the brain’s last courtesy.",
      next: "p2s1_kane_r1c"
    },
    p2s1_kane_r1c: {
      speaker: "roland",
      chars: {
        center: { id: "roland", sprite: "tired", focus: true }
      },
      text: "Men have always preferred a finished tragedy to an unfinished injustice. A clean death on a reactor is almost comforting. It has shape. It asks nothing further of you.\n\nSuffering without a curtain call is harder. It keeps demanding that you be someone in the morning.",
      next: "p2s1_kane_r1d"
    },
    p2s1_kane_r1d: {
      speaker: "roland",
      text: "Dostoevsky wrote that hell is the suffering of being unable to love. Helios would rather you believe hell is a closed loop you already earned. If you accept that you died pure on Deck Seven, you never have to become dangerous in here.\n\nThe dead are excellent prisoners. They don’t tunnel.",
      next: "p2s1_kane_r1e"
    },
    p2s1_kane_r1e: {
      speaker: "sam",
      text: "So I hold the ugly version. I lived. They framed me. The story doesn’t resolve.",
      next: "p2s1_kane_r1f"
    },
    p2s1_kane_r1f: {
      speaker: "roland",
      text: "Yes. Meaning is not the same as a moral that fits on a memorial plaque. Sometimes the only honest meaning left is refusal — to let the machine narrate your ending because the real one is still unpaid.",
      next: "p2s1_reality_2a"
    },
    p2s1_reality_2a: {
      saveLabel: "Test Two · The Invented Life",
      bg: "black",
      location: "Neural overlay · Identity audit",
      flashback: true,
      clearChars: true,
      fx: "letterbox",
      speaker: "narration",
      text: "The second test does not bother with fire.\n\nIt bothers with paperwork.",
      next: "p2s1_reality_2b"
    },
    p2s1_reality_2b: {
      bg: "lounge",
      location: "Neural overlay · A life that never was",
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "Sam sits across from a man who wears his face and none of his history. The double speaks gently, the way doctors do when the diagnosis is the patient’s whole biography.\n\n“There was no Ardent Horizon. Not for you. You read about the incident on a feed. You needed a spine for a life that had none. You built a command chair in your head and climbed into it.”",
      next: "p2s1_reality_2c"
    },
    p2s1_reality_2c: {
      speaker: "narration",
      text: "Images shuffle: a civilian berth, empty bottles, a discharge form with no medals, Gracie as a stranger who never knew his name. The Horizon becomes a news still. Marcus becomes a face from a documentary. The trial becomes a story he told other inmates until even the guards stopped correcting him.",
      next: "p2s1_reality_2d"
    },
    p2s1_reality_2d: {
      speaker: "narration",
      text: "“Purpose is a narcotic,” the double says. “You were not a hero framed by a conglomerate. You are a man who could not bear to be ordinary, so you invented a ship, a conspiracy, and a woman who believed you. The inhibitor is not your enemy. It is the only part of this facility still trying to wake you up.”",
      next: "p2s1_reality_2_choice"
    },
    p2s1_reality_2_choice: {
      saveLabel: "Was any of it real?",
      speaker: "narration",
      text: "The double’s eyes are kind. Kindness is the sharpest instrument in the room.",
      choices: [
        {
          text: "Hold the scars. Specific pain is harder to forge than a legend.",
          hint: "Integrity +",
          next: "p2s1_reality_2_scars",
          effects: {
            stats: { integrity: 7 },
            flags: { realityTestHorizon: true, resistedRealityBreak: true }
          }
        },
        {
          text: "Even if the story were madness, the suffering is still mine to answer.",
          hint: "Philosophical stance · Leadership +",
          next: "p2s1_reality_2_suffer",
          effects: {
            stats: { leadership: 5, integrity: 4 },
            flags: { realityTestHorizon: true, resistedRealityBreak: true }
          }
        },
        {
          text: "Ask the double who benefits if he believes he is no one.",
          hint: "Cunning + · Westworld turn",
          next: "p2s1_reality_2_cui",
          effects: {
            stats: { cunning: 7 },
            flags: { realityTestHorizon: true, resistedRealityBreak: true }
          }
        }
      ]
    },
    p2s1_reality_2_scars: {
      speaker: "sam",
      text: "I know the weight of Gracie’s hand on my sleeve when the restraints closed. Fiction doesn’t leave a temperature.",
      next: "p2s1_reality_2_break"
    },
    p2s1_reality_2_suffer: {
      speaker: "sam",
      text: "If I invented the Horizon to matter, I still have to live the consequences of that invention. You don’t get to cancel a debt by calling the creditor imaginary.",
      next: "p2s1_reality_2_break"
    },
    p2s1_reality_2_cui: {
      speaker: "sam",
      text: "If I’m no one, this implant is a lot of expensive theater. Who pays for a cage around a man without a story worth burying?",
      next: "p2s1_reality_2_break"
    },
    p2s1_reality_2_break: {
      bg: "chateauCell",
      location: "Château d’If · Solitary Module",
      flashback: false,
      clearFx: true,
      clearChars: true,
      chars: {
        center: { id: "prisonsam", sprite: "angry", focus: true }
      },
      speaker: "narration",
      text: "The double’s face unthreads into static. For a moment the cell feels less solid than the argument — then the vent ticks, vulgar and precise, and the world chooses a side.",
      next: "p2s1_kane_r2"
    },
    p2s1_kane_r2: {
      saveLabel: "Kane on the second test",
      bg: "chateauCell",
      location: "Château d’If · Shared Bulkhead",
      chars: {
        left: { id: "prisonsam", sprite: "angry", focus: false },
        center: { id: "roland", sprite: "serious", focus: true }
      },
      speaker: "roland",
      text: "Second wave. The ‘you invented yourself’ protocol. Helios loves that one. It’s almost theological.",
      next: "p2s1_kane_r2b"
    },
    p2s1_kane_r2b: {
      speaker: "sam",
      text: "It said there was no Horizon. That I needed a myth so my life would have a spine.",
      next: "p2s1_kane_r2c"
    },
    p2s1_kane_r2c: {
      speaker: "roland",
      chars: {
        center: { id: "roland", sprite: "tired", focus: true }
      },
      text: "And maybe part of you is terrified that’s true. Every man who has been stripped down this far meets the same mirror: what if I was never the person the story required?\n\nListen carefully. Even if a man built a false history to survive his own emptiness, the question is not whether the history was pure. The question is what he does when the history is taken from him by someone else’s hand.",
      next: "p2s1_kane_r2d"
    },
    p2s1_kane_r2d: {
      speaker: "roland",
      text: "In The Brothers Karamazov, Ivan cannot forgive a world where children suffer for a harmony he never asked for. You are being offered the inverse poison: forgive your own erasure because it would make the ledger tidy.\n\nI have known prisoners who accepted they were nobody. They became very easy to house. Soft. Grateful for paste. The implant’s perfect citizens.",
      next: "p2s1_kane_r2e"
    },
    p2s1_kane_r2e: {
      speaker: "roland",
      text: "Freedom is not the certainty that your past was noble. Freedom is the capacity to choose your next sin and your next mercy without a corporation writing the motive for you.\n\nIf the Horizon was real, you owe the dead accuracy. If some shard of it was story, you still owe the living — including yourself — a refusal to be edited into a patient.",
      next: "p2s1_kane_r2f"
    },
    p2s1_kane_r2f: {
      speaker: "sam",
      text: "Then I stay sharp. Even when the room tries to talk me out of having edges.",
      next: "p2s1_kane_r2g"
    },
    p2s1_kane_r2g: {
      speaker: "roland",
      chars: {
        center: { id: "roland", sprite: "serious", focus: true }
      },
      text: "Good. Remember this when the next dream offers you a softer truth: the most dangerous prisons are the ones that feel like insight.\n\nNow. The vents. The vault. We still have a station to offend.",
      next: "p2s1_kane_4"
    },

    p2s1_kane_4: {
      speaker: "roland",
      chars: {
        center: { id: "roland", sprite: "serious", focus: true },
        left: { id: "prisonsam", sprite: "angry", focus: false }
      },
      text: "Yes. And this place was never only a prison. Helios black-site xenobiology. Something came back on a deep probe — the kind of cargo your Horizon hauled under quarantine seals while officers signed manifests they weren’t allowed to read.\n\nOutbreak. Cover-up. Convert the lab into a dumping ground for inconvenient minds. Congratulations. You’re inventory.",
      next: "p2s1_kane_5"
    },
    p2s1_kane_5: {
      speaker: "narration",
      text: "Kane has been tunneling — not with a spoon. Overridden maintenance drones. Spliced power. Carefully breached bulkheads. Aiming for a sealed research vault that may hold escape vectors… and the original specimen data.",
      effects: { flags: { kaneTunnel: true } },
      next: "p2s1_choice_kane"
    },

    p2s1_choice_kane: {
      saveLabel: "Trust the voice",
      speaker: "narration",
      text: "A stranger on the other side of sweating metal offers the first map that isn’t a Helios lie.",
      choices: [
        {
          text: "Listen. Learn. If he’s lying, the truth still needs a second source.",
          hint: "Cunning + · Opens education",
          next: "p2s1_kane_trust",
          effects: {
            stats: { cunning: 5, trust: 2 },
            flags: { acceptedRolandLesson: true }
          }
        },
        {
          text: "Demand proof before you follow anyone underground.",
          hint: "Integrity + · Slower trust",
          next: "p2s1_kane_proof",
          effects: { stats: { integrity: 5, cunning: 2 } }
        },
        {
          text: "Ask what Helios wanted with the specimen — and who on the Horizon knew.",
          hint: "Leadership + · Ties to Marcus",
          next: "p2s1_kane_cargo",
          effects: { stats: { leadership: 4, cunning: 3 } }
        }
      ]
    },

    p2s1_kane_trust: {
      speaker: "sam",
      text: "Then teach me the station. I’ll decide what to believe when the walls start answering.",
      next: "p2s1_kane_trust_2"
    },
    p2s1_kane_trust_2: {
      speaker: "roland",
      text: "Good. First rule: the inhibitor lies about how much of you is left. Second: some of the guards aren’t aging — they’re expiring. Third: morality without wisdom is how good men decorate corporate reports. I intend to get you out ugly and alive.",
      next: "p2s1_to_c"
    },

    p2s1_kane_proof: {
      speaker: "sam",
      text: "Proof first. I’ve already been framed by clean paperwork.",
      next: "p2s1_kane_proof_2"
    },
    p2s1_kane_proof_2: {
      speaker: "roland",
      text: "Fair. Tomorrow I’ll route a dead maintenance drone past your slit with a data chip. Schematics. Partial vault map. If it’s a trap, you’ll die slightly better informed.",
      next: "p2s1_to_c"
    },

    p2s1_kane_cargo: {
      speaker: "sam",
      text: "The Horizon carried sealed Helios pods. Someone on that ship knew what was inside. Who?",
      next: "p2s1_kane_cargo_2"
    },
    p2s1_kane_cargo_2: {
      speaker: "roland",
      text: "Anyone with secondary-hold clearance and a reason to smile while the rest of you signed bulk ore. The frame on you wasn’t only about a reactor. You had access patterns near telemetry they needed buried.\n\nSome signatures on those logs… don’t look human when you stop assuming they are.",
      next: "p2s1_to_c"
    },

    p2s1_to_c: {
      speaker: "narration",
      text: "The bulkhead ticks once — Kane’s signal for silence. Footsteps pass. Synthetic. Even.\n\nEducation begins in the dark.",
      next: "p2s1_edu_1"
    }
  };
})();
