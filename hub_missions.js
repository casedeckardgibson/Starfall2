/* STARFALL — Hub missions (full) */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};

  function hubEnd(missionId, title, body) {
    return {
      speaker: "narration",
      text: "True Purpose angles away from the site. The chart waits.",
      ending: {
        type: "hub",
        title: title || "Mission Complete",
        subtitle: "True Purpose",
        epigraph: "Ash Geist",
        body: body || "Results logged.",
        missionId: missionId
      }
    };
  }

  var pack = {};

  /* ========== BELT: Ore-Hab Cinder + Tess ========== */
  pack.hub_m_belt_inf_2 = {
    saveLabel: "Ore-Hab Cinder",
    bg: "outpost7",
    location: "Ore-Hab Cinder · Approach",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "Cinder doesn't answer hails. The hab's outer ring still spins, lights stuttering like a drunk trying to stay upright.\n\nLyra's voice comes over the short-band, flat.",
    next: "hub_cinder_2"
  };
  pack.hub_cinder_2 = {
    speaker: "lyra",
    chars: {
      left: { id: "ash", sprite: "serious", focus: false },
      right: { id: "lyra", sprite: "determined", focus: true }
    },
    text: "I'm reading movement in the lower galleries. Could be survivors. Could be the other thing practicing how to walk.\n\nYour call how deep we go.",
    next: "hub_cinder_3"
  };
  pack.hub_cinder_3 = {
    bg: "outpost7Hall",
    location: "Cinder · Gallery B",
    speaker: "narration",
    text: "The air tastes wrong—sweet under the metal. Ash knows that smell now.\n\nThey find the first body folded into a tool rack. Badge still clipped: Helios survey division. The face above it is only mostly human.",
    effects: { flags: { chip_cinder: true } },
    next: "hub_cinder_4"
  };
  pack.hub_cinder_4 = {
    speaker: "narration",
    chars: {
      center: { id: "tess", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "A woman steps out of a sealed maintenance closet with a cutter in both hands. Not pointed at them—held like she's been holding it for hours and forgot how to put it down.\n\nDust in her hair. Eyes too clear for someone who's been screaming.",
    next: "hub_cinder_5"
  };
  pack.hub_cinder_5 = {
    speaker: "tess",
    text: "If you're here to loot, you're late. If you're here to help—prove it before that thing in the galleries finishes climbing the ladder.",
    next: "hub_cinder_6"
  };
  pack.hub_cinder_6 = {
    speaker: "ash",
    text: "Name.",
    next: "hub_cinder_7"
  };
  pack.hub_cinder_7 = {
    speaker: "tess",
    text: "Tess. I ran ore accounting until accounting stopped mattering. The survey tech—Renn—came through three cycles ago with a smile and a sealant kit. Next shift his eyes went wrong.\n\nI locked myself in. I heard the rest.",
    next: "hub_cinder_choice"
  };
  pack.hub_cinder_choice = {
    saveLabel: "Cinder · What to take",
    speaker: "narration",
    text: "Renn's body is still in the gallery. What's growing under his skin might be the best sample the fleet has ever held. It might also be how Cinder started.",
    choices: [
      {
        text: "Bag the sample. Study it on True Purpose.",
        hint: "Tech · Risk",
        next: "hub_cinder_sample",
        effects: { tech: 12, heliosHeat: 6, flags: { cinderSample: true } }
      },
      {
        text: "Burn the gallery. No trophies.",
        hint: "Safer · Less intel",
        next: "hub_cinder_burn",
        effects: { colonialRep: 8, crewLoyalty: 4 }
      },
      {
        text: "Get Tess out first. Sample only if there's time.",
        hint: "People first",
        next: "hub_cinder_people",
        effects: { colonialRep: 12, crewLoyalty: 6, integrity: 2 }
      }
    ]
  };
  pack.hub_cinder_sample = {
    speaker: "narration",
    text: "They cut what they can into a sealed case. Lyra doesn't look at it longer than she has to.\n\nThe gallery still has teeth. Ash ends what moves.",
    next: "hub_cinder_after"
  };
  pack.hub_cinder_burn = {
    speaker: "narration",
    text: "Thermite and a hard seal. The sweet smell dies under smoke.\n\nTess watches the hatch glow and doesn't flinch.",
    next: "hub_cinder_after"
  };
  pack.hub_cinder_people = {
    speaker: "narration",
    text: "Ash puts Tess behind the boarding team and clears the ladder the hard way—close shots, no speeches.\n\nThere's no time left for Renn's corpse. Tess doesn't argue.",
    next: "hub_cinder_after"
  };
  pack.hub_cinder_after = {
    bg: "pirateDeck",
    location: "True Purpose · Airlock",
    chars: {
      center: { id: "tess", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    speaker: "tess",
    text: "You didn't have to come this far in. Most people who wear guns don't.\n\nI've got nowhere that isn't Cinder or a company roster. If you've got a rack that doesn't smell like death, I'll work. Accounting, sensors, whatever doesn't require me to smile.",
    next: "hub_cinder_recruit"
  };
  pack.hub_cinder_recruit = {
    speaker: "narration",
    text: "Lyra waits at the inner hatch, arms folded, measuring.",
    choices: [
      {
        text: "Take her on. We need people who already survived this.",
        hint: "Recruit Tess",
        next: "hub_cinder_tess_yes",
        effects: {
          flags: { tessRecruited: true },
          fleetShips: 0,
          crewLoyalty: 3,
          colonialRep: 5
        }
      },
      {
        text: "Drop her at the next neutral dock with credits.",
        hint: "No recruit",
        next: "hub_cinder_tess_no",
        effects: { credits: -80, colonialRep: 3 }
      }
    ]
  };
  pack.hub_cinder_tess_yes = {
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "amused", focus: true },
      center: { id: "tess", sprite: "normal", focus: false }
    },
    text: "Fine. She bunks aft. She touches my boards without asking, I throw her out an airlock myself.",
    next: "hub_cinder_tess_tempt_gate"
  };
  pack.hub_cinder_tess_no = {
    speaker: "tess",
    text: "Credits work. Don't pretend it's kindness.",
    next: "hub_cinder_done"
  };
  pack.hub_cinder_tess_tempt_gate = {
    speaker: "narration",
    text: "Later—after the case is locked down and the crew stops staring—Tess finds Ash alone in the corridor outside the wash niche. She doesn't look nervous. She looks like someone who's decided not to waste a night on pride.",
    next: "hub_cinder_tess_tempt"
  };
  pack.hub_cinder_tess_tempt = {
    saveLabel: "Tess · Corridor",
    bg: "pirateQuarters",
    location: "True Purpose · Aft corridor",
    chars: {
      center: { id: "tess", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    speaker: "tess",
    text: "I'm not asking for a wedding. I'm asking if you're as careful with living people as you are with corpses in a gallery.\n\nMy hands are steady. Door's thin. You can say no and I'll still show up for shift.",
    next: "hub_cinder_tess_choice"
  };
  pack.hub_cinder_tess_choice = {
    speaker: "narration",
    text: "Close enough that he can smell soap and residual ore dust on her skin.",
    choices: [
      {
        text: "Kiss her. Take what she's offering.",
        hint: "Temptation",
        next: "hub_cinder_tess_sex",
        effects: { flags: { tessTempted: true }, romance: { lyra: -4 } }
      },
      {
        text: "Not tonight. Respect the offer.",
        hint: "Hold the line",
        next: "hub_cinder_tess_refuse",
        effects: { integrity: 2, crewLoyalty: 2 }
      }
    ]
  };
  pack.hub_cinder_tess_sex = {
    speaker: "narration",
    text: "She doesn't wait for poetry. Tess pulls him into the niche, mouth hard and practical, fingers already at his belt like she's logging a task she intends to finish.\n\nQuiet, urgent—her back against the bulkhead, one leg hooked around him, breath bitten off so the corridor doesn't hear. When she comes it's a short, surprised sound against his shoulder. She steadies herself, smooths her shirt, and meets his eyes without flinching.",
    next: "hub_cinder_tess_sex_2"
  };
  pack.hub_cinder_tess_sex_2 = {
    speaker: "tess",
    text: "Good. Now I know you're not only made of orders.\n\nDon't make it weird on the bridge.",
    next: "hub_cinder_done"
  };
  pack.hub_cinder_tess_refuse = {
    speaker: "ash",
    text: "I heard you. I'm not going to use the first night you feel safe as a shortcut.",
    next: "hub_cinder_tess_refuse_2"
  };
  pack.hub_cinder_tess_refuse_2 = {
    speaker: "tess",
    text: "…All right. That's either decent or complicated. I'll take either over a liar.",
    next: "hub_cinder_done"
  };
  pack.hub_cinder_done = hubEnd("m_belt_inf_2", "Ore-Hab Cinder", "Cinder is quiet. Tess's story—and Renn's badge—stay with the fleet.");

  /* ========== BELT: Claim Marker ========== */
  pack.hub_m_belt_hel_2 = {
    saveLabel: "Claim Marker Heist",
    bg: "space",
    location: "Inner belt · Claim buoy",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The buoy is a quiet thief—Helios paint under a civilian registry, dumping claim packets into the dark.\n\nBoarding is almost boring until the decrypt finishes.",
    next: "hub_claim_2"
  };
  pack.hub_claim_2 = {
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "confident", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "Look at the timestamps. They evacuated three rocks 'for safety,' stripped the equipment, and two of those rocks went dark afterward.\n\nSomeone's using infection as a cleanup crew.",
    effects: { flags: { chip_claim: true } },
    next: "hub_claim_choice"
  };
  pack.hub_claim_choice = {
    speaker: "narration",
    text: "The packets are worth money. They're also worth a riot if they hit colonial nets.",
    choices: [
      {
        text: "Broadcast the claims. Let the belts see it.",
        hint: "Colonial rep · Heat",
        next: "hub_claim_pub",
        effects: { colonialRep: 18, heliosHeat: 20, credits: 100 }
      },
      {
        text: "Sell the data to a rival corp.",
        hint: "Credits · Integrity hit",
        next: "hub_claim_sell",
        effects: { credits: 900, heliosHeat: 8, integrity: -4, crewLoyalty: -3 }
      },
      {
        text: "Keep it locked. Leverage later.",
        hint: "Control",
        next: "hub_claim_keep",
        effects: { tech: 6, cunning: 3, flags: { claimLeverage: true } }
      }
    ]
  };
  pack.hub_claim_pub = {
    speaker: "ash",
    text: "If Helios wants to own the dark, they can own the blame too.",
    next: "hub_claim_done"
  };
  pack.hub_claim_sell = {
    speaker: "lyra",
    text: "We'll eat well. Try not to look surprised when the buyers use this the same way Helios did.",
    next: "hub_claim_done"
  };
  pack.hub_claim_keep = {
    speaker: "narration",
    text: "Ash pockets the core. No speech. The buoy goes quiet behind them.",
    next: "hub_claim_done"
  };
  pack.hub_claim_done = hubEnd("m_belt_hel_2", "Claim Marker", "The buoy's secrets are no longer Helios-only.");

  /* ========== MARS: Phobos ========== */
  pack.hub_m_mars_inf_1 = {
    saveLabel: "Phobos Dock Sprawl",
    bg: "spaceport",
    location: "Phobos · Low-g market",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The market is still half open—stalls, cables, someone selling fried protein like the air isn't wrong.\n\nThen the screaming starts in aisle four, and it doesn't sound only human.",
    next: "hub_phobos_2"
  };
  pack.hub_phobos_2 = {
    speaker: "narration",
    text: "The host in the middle of the aisle is small. A child's jacket. Black eyes. Secondary motion under the skin at the wrist.\n\nA woman is on her knees a meter away, hands out, whispering a name that doesn't reach it.",
    effects: { flags: { chip_phobos: true } },
    next: "hub_phobos_choice"
  };
  pack.hub_phobos_choice = {
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "afraid", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "Ash. If you freeze, the people behind us don't get a corridor.\n\nI'm not telling you what it is. I'm telling you what the seconds are worth.",
    choices: [
      {
        text: "Stem-shot. End it.",
        hint: "Hard · Crew holds",
        next: "hub_phobos_hard",
        effects: { crewLoyalty: 6, colonialRep: -6, cunning: 2, flags: { phobosHard: true } }
      },
      {
        text: "Try to pin it for a sedative—risky.",
        hint: "Mercy · May fail",
        next: "hub_phobos_mercy",
        effects: { integrity: 3, compassion: 4 }
      }
    ]
  };
  pack.hub_phobos_hard = {
    speaker: "narration",
    text: "The shot is clean. The market goes silent in a way that isn't gratitude.\n\nAsh doesn't look at the woman on her knees. Looking doesn't put the seconds back.",
    next: "hub_phobos_done"
  };
  pack.hub_phobos_mercy = {
    speaker: "narration",
    text: "They almost get the restraints on.\n\nAlmost. The thing wearing the child twists wrong and opens a dockworker's throat before Lyra's second shot ends it. Two more dead. The attempt still matters to the people who saw him try.",
    effects: { colonialRep: 10, crewLoyalty: -2 },
    next: "hub_phobos_done"
  };
  pack.hub_phobos_done = hubEnd("m_mars_inf_1", "Phobos Dock", "The sprawl will tell stories about what Ash did in aisle four.");

  /* ========== MARS: Valles Relay ========== */
  pack.hub_m_mars_inf_2 = {
    saveLabel: "Valles Relay Nest",
    bg: "reactor",
    location: "Valles · Relay spine",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The relay shouldn't hum like that. Under the carrier wave there's a second pattern—too organic, too patient.\n\nNodules in the cable trays. One host still wearing a tech badge, mouth working around a signal it wasn't built to carry.",
    effects: { flags: { chip_valles: true } },
    next: "hub_valles_2"
  };
  pack.hub_valles_2 = {
    speaker: "ash",
    text: "This is how it talks without mouths.",
    next: "hub_valles_choice"
  };
  pack.hub_valles_choice = {
    speaker: "lyra",
    chars: { right: { id: "lyra", sprite: "determined", focus: true } },
    text: "We can kill the relay and stop the pattern—or we scrape the nodes and leave the traffic spine up for every ship that still needs a heading.\n\nI'm not romantic about either option.",
    choices: [
      {
        text: "Destroy the relay.",
        hint: "Stop the signal",
        next: "hub_valles_kill",
        effects: { heliosHeat: -5, colonialRep: -10, tech: 4 }
      },
      {
        text: "Purge nests. Keep the relay online.",
        hint: "Harder fight · Infrastructure",
        next: "hub_valles_keep",
        effects: { colonialRep: 8, crewLoyalty: 3, tech: 10, heliosHeat: 5 }
      }
    ]
  };
  pack.hub_valles_kill = {
    speaker: "narration",
    text: "Charges. A dead sky of dropped packets. The pattern stops.\n\nSomewhere, a colonial dispatcher starts shouting at empty scopes.",
    next: "hub_valles_done"
  };
  pack.hub_valles_keep = {
    speaker: "narration",
    text: "They clear tray by tray. Ash's people come out bloodied and the relay keeps singing clean.\n\nFor now.",
    next: "hub_valles_done"
  };
  pack.hub_valles_done = hubEnd("m_mars_inf_2", "Valles Relay", "The signal dies or survives by Ash's hand—either way, the fleet knows infection uses infrastructure.");

  /* ========== MARS: Ice-Cap Clinic + Jessica + Lyra option ========== */
  pack.hub_m_mars_inf_3 = {
    saveLabel: "Ice-Cap Clinic",
    bg: "outpost7Hall",
    location: "Mars ice-cap · Clinic",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The clinic's outer seal is painted with a handprint in dried blood. Inside: soft lights, soft voices, and the sweet-rot under antiseptic.\n\nStaff coats that don't move like staff.",
    next: "hub_clinic_2"
  };
  pack.hub_clinic_2 = {
    speaker: "narration",
    chars: {
      center: { id: "jessica", sprite: "tired", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "A woman in a cracked face-shield waves them in from a nurses' station she's turned into a barricade. Exhaustion has sanded her voice down to something usable.",
    next: "hub_clinic_3"
  };
  pack.hub_clinic_3 = {
    speaker: "jessica",
    text: "Jessica. I was triage before triage became a joke.\n\nWard C is gone. Ward A still has patients who know their names. If you vent this place to be tidy, say so now so I can hate you efficiently.",
    next: "hub_clinic_choice"
  };
  pack.hub_clinic_choice = {
    speaker: "narration",
    text: "Hosts in the corridors between wards. Not enough ammunition for comfort. Enough time for one bad decision.",
    choices: [
      {
        text: "Vent the contaminated wings. Save the sealed ward only.",
        hint: "Fast · Cold",
        next: "hub_clinic_vent",
        effects: {
          cunning: 4,
          colonialRep: -12,
          crewLoyalty: -4,
          romance: { lyra: -8 },
          flags: { clinicVented: true }
        }
      },
      {
        text: "Clear room by room. No vent.",
        hint: "Costly · Lyra respects",
        next: "hub_clinic_clear",
        effects: {
          colonialRep: 16,
          crewLoyalty: 8,
          integrity: 3,
          romance: { lyra: 10 },
          flags: { clinicClearedClean: true, chip_clinic: true }
        }
      }
    ]
  };
  pack.hub_clinic_vent = {
    speaker: "narration",
    text: "The valves turn. Something hits the other side of a bulkhead hard enough to dent it, then stops.\n\nJessica doesn't speak to Ash for the rest of the extraction.",
    next: "hub_clinic_after"
  };
  pack.hub_clinic_clear = {
    speaker: "narration",
    text: "It takes hours. Stem-shots in doorways. Jessica calling patient names like a roll that matters.\n\nWhen it's over, Lyra's glove is slick and her eyes are steady in a way that isn't soft—just present.",
    next: "hub_clinic_after"
  };
  pack.hub_clinic_after = {
    bg: "pirateDeck",
    location: "True Purpose",
    chars: {
      center: { id: "jessica", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    speaker: "jessica",
    text: "I've got nowhere that needs a medic more than a ship that keeps finding these places.\n\nYou want me, you get someone who will argue when you reach for the easy valve. If that bothers you, drop me at the next dock.",
    next: "hub_clinic_recruit"
  };
  pack.hub_clinic_recruit = {
    speaker: "narration",
    text: "Lyra's silence is its own opinion.",
    choices: [
      {
        text: "We need a real medic. You're in.",
        hint: "Recruit Jessica",
        next: "hub_clinic_jess_yes",
        effects: { flags: { jessicaRecruited: true }, crewLoyalty: 5, colonialRep: 6 }
      },
      {
        text: "We'll get you to a safe dock.",
        hint: "No recruit",
        next: "hub_clinic_jess_no",
        effects: { credits: -50 }
      }
    ]
  };
  pack.hub_clinic_jess_yes = {
    speaker: "jessica",
    text: "Good. I'll inventory your trauma kits. They're going to depress me.",
    next: "hub_clinic_tempt_gate"
  };
  pack.hub_clinic_jess_no = {
    speaker: "jessica",
    text: "Safe is relative. Thanks for the hours you did spend.",
    next: "hub_clinic_lyra_gate"
  };
  pack.hub_clinic_tempt_gate = {
    speaker: "narration",
    text: "That night Jessica stops Ash outside medbay. Not coy—tired, wired, honest.",
    next: "hub_clinic_jess_tempt"
  };
  pack.hub_clinic_jess_tempt = {
    saveLabel: "Jessica · Medbay",
    bg: "pirateQuarters",
    location: "True Purpose · Medbay hatch",
    chars: {
      center: { id: "jessica", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    speaker: "jessica",
    text: "I spent the day cutting infection out of people who still said please.\n\nI don't need a speech. I need to feel something that isn't gloves and alarms. You can walk away. I won't put it in your file.",
    next: "hub_clinic_jess_choice"
  };
  pack.hub_clinic_jess_choice = {
    speaker: "narration",
    text: "Her hand rests on his chest—not pushing, not begging. Checking if he's solid.",
    choices: [
      {
        text: "Stay. Let the night be simple and physical.",
        hint: "Temptation",
        next: "hub_clinic_jess_sex",
        effects: { flags: { jessicaTempted: true }, romance: { lyra: -5 } }
      },
      {
        text: "Not like this—not as an escape from the ward.",
        hint: "Hold",
        next: "hub_clinic_jess_refuse",
        effects: { integrity: 2 }
      }
    ]
  };
  pack.hub_clinic_jess_sex = {
    speaker: "narration",
    text: "They don't make it to a bunk. Jessica pulls him into the dark of the supply alcove, mouth on his, hands impatient under cloth.\n\nShe guides him into her with a shaky exhale, legs tight around his hips, forehead against his. It's raw and quiet—grief using pleasure as a pressure valve. When she finishes she holds on a second longer than sex requires, then lets go like she's putting a tool back.",
    next: "hub_clinic_jess_sex_2"
  };
  pack.hub_clinic_jess_sex_2 = {
    speaker: "jessica",
    text: "Thank you—for not asking me to explain.\n\nTomorrow I'm your medic. Tonight didn't rewrite that.",
    next: "hub_clinic_lyra_gate"
  };
  pack.hub_clinic_jess_refuse = {
    speaker: "ash",
    text: "You deserve rest that isn't a stand-in for a scream. I'm not going to be that stand-in.",
    next: "hub_clinic_jess_refuse_2"
  };
  pack.hub_clinic_jess_refuse_2 = {
    speaker: "jessica",
    text: "…That's annoying. And decent. Go before I change my mind.",
    next: "hub_clinic_lyra_gate"
  };
  /* Lyra erotic if clean clear */
  pack.hub_clinic_lyra_gate = {
    speaker: "narration",
    text: "Lyra finds him on the observation strip, jacket off, hands braced on the rail. Mars turns under them like a problem that doesn't care who solved a clinic.",
    nextFn: function (state) {
      return state.flags.clinicClearedClean ? "hub_clinic_lyra_check" : "hub_clinic_lyra_skip";
    }
  };
  pack.hub_clinic_lyra_skip = {
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "serious", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "We're done here. Don't expect me to toast the valve.",
    next: "hub_clinic_done"
  };
  pack.hub_clinic_lyra_check = {
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "You didn't vent.\n\nMost men I've sailed with would have called that efficiency. You called it a day of work.",
    next: "hub_clinic_lyra_check2"
  };
  pack.hub_clinic_lyra_check2 = {
    // soft sprite may not exist - mapped to normal in engine fallback? use confident
    speaker: "lyra",
    chars: {
      right: { id: "lyra", sprite: "normal", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    text: "I'm not good at soft conversations. So I'm going to be blunt.\n\nIf you want me, say so. If you don't, say that too. I'm done reading silences after a body count.",
    next: "hub_clinic_lyra_choice"
  };
  pack.hub_clinic_lyra_choice = {
    speaker: "narration",
    text: "Only available weight if he cleared the clinic without the vent—otherwise she stays on the rail and changes the subject.",
    choices: [
      {
        text: "I want you. Not as a reward—because you're the one still here.",
        hint: "Lyra intimate",
        next: "hub_clinic_lyra_sex",
        effects: { romance: { lyra: 18 }, flags: { lyraIntimate: true }, crewLoyalty: 2 }
      },
      {
        text: "Not tonight. But I'm not walking away from this either.",
        hint: "Slow",
        next: "hub_clinic_lyra_slow",
        effects: { romance: { lyra: 8 } }
      },
      {
        text: "Keep it command. It's cleaner.",
        hint: "Distance",
        next: "hub_clinic_lyra_dist",
        effects: { romance: { lyra: -2 } }
      }
    ]
  };
  pack.hub_clinic_lyra_sex = {
    saveLabel: "Lyra · Quarters",
    bg: "pirateQuarters",
    location: "True Purpose · Lyra's cabin",
    chars: {
      center: { id: "lyra", sprite: "seduce", focus: true },
      left: { id: "ash", sprite: "serious", focus: false }
    },
    speaker: "narration",
    text: "She locks the hatch. No performance—just the sound of seals and her breath.\n\nLyra kisses like she fights: direct, then deeper when he answers. Jacket, gloves, the practical violence of undressing after a mission. She pushes him down onto her bunk and straddles him, guiding him into her with a low sound she doesn't bother to hide.",
    next: "hub_clinic_lyra_sex_2"
  };
  pack.hub_clinic_lyra_sex_2 = {
    speaker: "narration",
    text: "She sets the pace—rolling, controlled, eyes open. When she wants more she takes it, fingers in his hair, forehead against his. The ship noises go distant. When she comes it's with her mouth against his throat, a broken curse that might be his name or just relief.\n\nAfter, she doesn't curl into romance-novel quiet. She lies on her back, shoulder against his, staring at the overhead.",
    next: "hub_clinic_lyra_sex_3"
  };
  pack.hub_clinic_lyra_sex_3 = {
    speaker: "lyra",
    text: "If the crew talks, let them.\n\nIf you turn into someone who vents wards for convenience, I will put you off my ship. Clear?",
    next: "hub_clinic_lyra_sex_4"
  };
  pack.hub_clinic_lyra_sex_4 = {
    speaker: "ash",
    text: "Clear.",
    next: "hub_clinic_done"
  };
  pack.hub_clinic_lyra_slow = {
    speaker: "lyra",
    text: "Good. I can work with slow. I can't work with cowards.",
    next: "hub_clinic_done"
  };
  pack.hub_clinic_lyra_dist = {
    speaker: "lyra",
    text: "Cleaner. Sure.\n\nGet some sleep, Geist.",
    next: "hub_clinic_done"
  };
  pack.hub_clinic_done = hubEnd("m_mars_inf_3", "Ice-Cap Clinic", "The clinic is behind them. Jessica—and maybe Lyra—are not.");

  /* ========== MARS Helios stubs expanded briefly ========== */
  pack.hub_m_mars_hel_1 = {
    saveLabel: "SCX-2 Revisit",
    bg: "reactor",
    location: "SCX-2",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "SCX-2 still has teeth—drones, a holdout squad, a lab that smells like formaline and secrets.\n\nIn the core stack: countermeasure drafts and project tags that rhyme with Horizon black sites.",
    next: "hub_scx_choice"
  };
  pack.hub_scx_choice = {
    speaker: "lyra",
    chars: { right: { id: "lyra", sprite: "determined", focus: true } },
    text: "We can travel light—guns and the data core—or we can be greedy and take the live containment case. Greedy gets people killed on the way out.",
    choices: [
      {
        text: "Core and weapons only.",
        next: "hub_scx_light",
        effects: { credits: 600, tech: 18, heliosHeat: 14 }
      },
      {
        text: "Take the live case too.",
        next: "hub_scx_heavy",
        effects: { tech: 28, heliosHeat: 22, flags: { liveSample: true }, crewLoyalty: -3 }
      }
    ]
  };
  pack.hub_scx_light = {
    speaker: "narration",
    text: "They leave heavy enough. The lab's ghosts stay in the packet, not in the hold.",
    next: "hub_scx_done"
  };
  pack.hub_scx_heavy = {
    speaker: "narration",
    text: "The case ticks once when they clamp it. Nobody jokes on the ride back.",
    next: "hub_scx_done"
  };
  pack.hub_scx_done = hubEnd("m_mars_hel_1", "SCX-2", "Helios research rides with True Purpose now.");

  pack.hub_m_mars_hel_2 = {
    saveLabel: "Armory Barge",
    bg: "space",
    location: "Helios armory barge",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "Civilian registry. Military cargo. The crew's eyes light up when the holds open.",
    effects: { flags: { chip_armory: true } },
    next: "hub_armory_choice"
  };
  pack.hub_armory_choice = {
    speaker: "narration",
    text: "Enough guns to make the fleet dangerous—or to make Phobos dock families harder to push around.",
    choices: [
      {
        text: "Keep the take for True Purpose.",
        next: "hub_armory_keep",
        effects: { credits: 400, tech: 10, heliosHeat: 16, fleetShips: 1 }
      },
      {
        text: "Divert half to colonial hands.",
        next: "hub_armory_share",
        effects: { colonialRep: 14, crewLoyalty: -4, heliosHeat: 10, credits: 150 }
      }
    ]
  };
  pack.hub_armory_keep = {
    speaker: "lyra",
    text: "We'll sleep sharper. Try not to need a reason.",
    next: "hub_armory_done"
  };
  pack.hub_armory_share = {
    speaker: "lyra",
    text: "The crew will complain. The docks won't. Pick which noise you can live with.",
    next: "hub_armory_done"
  };
  pack.hub_armory_done = hubEnd("m_mars_hel_2", "Armory Barge", "The weapons have new owners.");

  pack.hub_m_mars_hel_3 = {
    saveLabel: "Black Courier",
    bg: "bridge",
    location: "Seized courier · Ready room",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The packet shouldn't exist. Horizon seals. Names Ash hasn't said aloud in years.\n\nMarcus. Elias. A frame built out of paperwork and timing.",
    effects: { flags: { chip_courier_black: true, horizonLead: true } },
    next: "hub_black_choice"
  };
  pack.hub_black_choice = {
    speaker: "lyra",
    chars: { right: { id: "lyra", sprite: "serious", focus: true } },
    text: "You can open that in front of the crew, or you can disappear into your cabin and come out different.\n\nI've sailed with both kinds of captain. Only one of them kept a ship.",
    choices: [
      {
        text: "Open it with her. No more private wars.",
        next: "hub_black_share",
        effects: { crewLoyalty: 8, romance: { lyra: 12 }, integrity: 2 }
      },
      {
        text: "Lock it down. My past, my weight.",
        next: "hub_black_hide",
        effects: { cunning: 3, crewLoyalty: -3, romance: { lyra: -3 } }
      }
    ]
  };
  pack.hub_black_share = {
    speaker: "narration",
    text: "He reads the worst pages aloud until his voice goes flat. Lyra doesn't interrupt.\n\nWhen he's done, the ready room feels less like a secret and more like a plan.",
    next: "hub_black_done"
  };
  pack.hub_black_hide = {
    speaker: "narration",
    text: "The core goes into his cabin safe. The crew feels the door close even if they don't see it.",
    next: "hub_black_done"
  };
  pack.hub_black_done = hubEnd("m_mars_hel_3", "Black Courier", "The frame-job has edges Ash can finally touch.");

  /* ========== EARTH ========== */
  pack.hub_m_earth_inf_1 = {
    saveLabel: "Orbital Stack 3",
    bg: "space",
    location: "Earth orbit · Stack 3",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "Homeworld light on the hull. Cameras already turning.\n\nInfection in a residential stack doesn't care about headlines. Headlines will care about Ash.",
    next: "hub_stack_choice"
  };
  pack.hub_stack_choice = {
    speaker: "narration",
    text: "Do it loud and own the story—or quiet and let Helios write it.",
    choices: [
      {
        text: "Clear it in the open. Let them see who did it.",
        next: "hub_stack_loud",
        effects: { colonialRep: 20, heliosHeat: 25 }
      },
      {
        text: "Quiet burn. No credit.",
        next: "hub_stack_quiet",
        effects: { colonialRep: 5, heliosHeat: 5, crewLoyalty: 3 }
      }
    ]
  };
  pack.hub_stack_loud = {
    speaker: "narration",
    text: "By the time the last host falls, three networks are already arguing over his name.",
    next: "hub_stack_done"
  };
  pack.hub_stack_quiet = {
    speaker: "narration",
    text: "They leave before the first official statement. The stack lives. The legend doesn't grow. Sometimes that's the point.",
    next: "hub_stack_done"
  };
  pack.hub_stack_done = hubEnd("m_earth_inf_1", "Orbital Stack 3", "Earth has noticed True Purpose—or it hasn't. Ash chose which.");

  pack.hub_m_earth_hel_1 = {
    saveLabel: "Helios Earth Annex",
    bg: "annex",
    location: "Helios Earth Annex",
    clearChars: true,
    hideContainment: true,
    chars: { center: { id: "ash", sprite: "serious", focus: true } },
    speaker: "narration",
    text: "The Annex is glass and certainty. Ash has wanted a crack in it for years that felt like weeks.",
    next: "hub_annex_choice"
  };
  pack.hub_annex_choice = {
    speaker: "lyra",
    chars: { right: { id: "lyra", sprite: "determined", focus: true } },
    text: "We can crater their schedule—or pull one executive who signed prison contracts and make him talk.\n\nCratering feels good. Talking gets us further.",
    choices: [
      {
        text: "Hit the schedule. Make them bleed time.",
        next: "hub_annex_crash",
        effects: { heliosHeat: 35, credits: 500, colonialRep: 8 }
      },
      {
        text: "Extract the signer. Get names.",
        next: "hub_annex_extract",
        effects: { heliosHeat: 28, tech: 12, flags: { annexPrisonLead: true }, cunning: 4 }
      }
    ]
  };
  pack.hub_annex_crash = {
    speaker: "narration",
    text: "Alarms. Empty conference wings. A company that runs on meetings discovers what silence costs.",
    next: "hub_annex_done"
  };
  pack.hub_annex_extract = {
    speaker: "narration",
    text: "The executive sobs in a zip-tie on True Purpose's deck. He knows enough names to keep Ash awake.",
    next: "hub_annex_done"
  };
  pack.hub_annex_done = hubEnd("m_earth_hel_1", "Earth Annex", "The Company's front door has a mark on it.");

  // Fix lyra soft sprite - already used normal in check2
  // Map lyra soft to normal if any remain
  window.STARFALL_SCENES.hub_missions = pack;
})();
