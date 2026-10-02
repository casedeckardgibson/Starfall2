/* ============================================================
   STARFALL — static game data
   Characters, backgrounds, chapters, and starting stats.
   Writers: keep script.js for dialogue. This file is the
   cast / world bible the engine reads for portraits and UI.
   ============================================================ */

const GAME = {
  title: "STARFALL",
  subtitle: "The Legacy of Sam Page",
  year: "2045",
  saveKey: "starfall.saves.v1",
  settingsKey: "starfall.settings.v1",
  slots: 6,
  startNode: "open_1"
};

const STARTING_STATS = {
  integrity: 70,
  leadership: 60,
  cunning: 35,
  trust: 75,
  reputation: 50,
  compassion: 70
};

const STARTING_ROMANCE = {
  lena: 0,
  gracie: 30,
  natalie: 0,
  isabella: 0,
  lyra: 0
};

const STARTING_FLAGS = {
  lenaRomanceOpen: false,
  lenaRomanceClosed: false,
  lenaAffair: false,
  marcusSabotageSeen: false,
  marcusJealousy: true,
  adrianDinner: false,
  danielFirst: false,
  gracieFirst: false,
  graciePriority: false,
  adrianSponsorship: false,
  lenaPartyAffair: false,
  isabellaAffair: false,
  isabellaIntimacy: false,
  vincentBlackmail: false,
  blackmailRefused: false,
  blackmailAccepted: false,
  gracieCompromised: false,
  gracieDoubt: 0,
  visitOrder: null,
  visitedAdrian: false,
  visitedDaniel: false,
  visitedGracie: false,
  isabellaLingered: false,
  natalieAffair: false,
  vincentBlackmailStopped: false,
  natalieAssigned: false,
  natalieSidelined: false,
  natalieOpening: false,
  natalieHollow: false,
  publicEngagement: false,
  engagementDelayed: false,
  privateEngagement: false,
  consultedGracie: false,
  samInvestigating: false,
  toldNatalieConspiracy: false,
  reliedOnNatalie: false,
  firstSmear: false,
  frameJobStarted: false,
  natalieBlocked: false,
  nataliePatient: false,
  caughtWithNatalie: false,
  framedInnocently: false,
  gracieSawDoor: false,
  fallStarted: false,
  vincentHasRecording: false,
  refusedNatalieFavor: false,
  samArrested: false,
  gracieReconciled: false,
  gracieWithVincent: false,
  horizonFileOfficial: false,
  reactorExposure: false,
  timeWarpUnlocked: false,
  firstWarpDone: false,
  warpCount: 0,
  reactorWithLena: false,
  reactorAlone: false,
  metRoland: false,
  wroteGracieFromPrison: false,
  prisonIsolation: false,
  acceptedRolandLesson: false,
  prisonYearsStarted: false,
  neuralInhibitor: false,
  metKane: false,
  realityTestReactor: false,
  realityTestHorizon: false,
  resistedRealityBreak: false,
  realityCrack: false,
  kaneTunnel: false,
  organismSeen: false,
  vaultReached: false,
  fariaDataCore: false,
  escapedChateau: false,
  inhibitorGlitch: false,
  inhibitorTemptResisted: false,
  inhibitorTemptYielded: false,
  dreamSpedUp: false,
  dreamCameInside: false,
  gracieVincentDistant: false,
  gracieVincentLean: false,
  gracieVincentBonded: false,
  gracieDefendedSam: false,
  gracieStoppedWriting: false,
  gracieHopeCollapsed: false,
  nathanConceived: false,
  shopUnderPressure: false,
  mediaHarassedGracie: false,
  yearsPassedUnseen: false,
  sawOwnReflection: false,
  beltOutpost: false,
  organismOutbreak: false,
  savedPirates: false,
  pirateDebt: false,
  timeShock15: false,
  earlySlate: false,
  calledSecurity: false,
  followedBioTag: false,
  nameAshGeist: false,
  backedLyraStation: false,
  chosePiracyFirst: false,
  outpost9Saved: false,
  outpost9Lost: false,
  lyraInjured: false,
  ashInCommand: false,
  scx2Looted: false,
  scx2Evacuated: false,
  fleetShips: 1,
  shipName: "True Purpose",
  credits: 0,
  tech: 0,
  colonialRep: 0,
  heliosHeat: 0,
  crewLoyalty: 50
};


const CGS = {
  // Place files in assets/cg/ — engine looks up by key via node.cg
  ring_private: "assets/cg/cg_ring_private.png",
  natalie_desk: "assets/cg/cg_natalie_desk.png",
  vincent_grab: "assets/cg/cg_vincent_grab.png",
  conspiracy_toast: "assets/cg/cg_conspiracy_toast.png",
  gracie_home: "assets/cg/cg_gracie_home.png",
  horizon_crisis: "assets/cg/cg_horizon_crisis.png",
  isabella_tempt: "assets/cg/cg_isabella_tempt.png",
  lena_quarters: "assets/cg/cg_lena_quarters.png",
  blackmail_slate: "assets/cg/cg_blackmail_slate.png",
  sam_intervene: "assets/cg/cg_sam_intervene.png"
};

/** Earliest → latest. On Game Over, warp targets the earliest decision still on record. */
const DECISION_ORDER = [
  {
    id: "reactor_team",
    node: "choice_2",
    label: "Who enters the coolant / reactor path",
    stage: {
      bg: "bridgeDanger",
      location: "Ardent Horizon · Approach to Coolant",
      alert: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "duty", focus: false }
      }
    },
    clearFlags: [
      "reactorAlone", "reactorWithLena",
      "lenaRomanceOpen", "lenaAffair", "lenaPartyAffair", "lenaRomanceClosed",
      "marcusSabotageSeen", "isabellaAffair", "isabellaIntimacy", "isabellaLingered",
      "natalieAffair", "natalieHollow", "natalieOpening", "natalieAssigned", "natalieSidelined",
      "natalieBlocked", "nataliePatient", "reliedOnNatalie", "toldNatalieConspiracy",
      "refusedNatalieFavor", "caughtWithNatalie", "framedInnocently", "gracieSawDoor",
      "vincentHasRecording", "fallStarted", "samArrested", "gracieReconciled", "gracieWithVincent",
      "horizonFileOfficial", "vincentBlackmail", "blackmailRefused", "blackmailAccepted",
      "gracieCompromised", "vincentBlackmailStopped", "privateEngagement", "publicEngagement",
      "engagementDelayed", "consultedGracie", "samInvestigating", "adrianSponsorship",
      "visitedAdrian", "visitedDaniel", "visitedGracie", "visitOrder", "frameJobStarted", "firstSmear"
    ]
  },
  {
    id: "lena_quarters",
    node: "lena_kiss_choice",
    label: "Lena — the kiss",
    stage: {
      bg: "quarters",
      location: "Ardent Horizon · Captain’s Quarters",
      alert: false,
      flashback: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "quarters", focus: true }
      }
    },
    clearFlags: [
      "lenaAffair", "lenaPartyAffair",
      "isabellaAffair", "isabellaIntimacy", "isabellaLingered",
      "natalieAffair", "natalieHollow", "natalieOpening", "caughtWithNatalie",
      "framedInnocently", "gracieSawDoor", "fallStarted", "samArrested",
      "gracieReconciled", "gracieWithVincent"
    ]
  },
  {
    id: "visit_order",
    node: "p1s2_choice1",
    label: "Who to see first on Earth",
    stage: {
      bg: "spaceport",
      location: "Earth Orbital Spaceport",
      alert: false,
      chars: {
        center: { id: "sam", sprite: "uniform", focus: true }
      }
    },
    clearFlags: [
      "visitedAdrian", "visitedDaniel", "visitedGracie", "visitOrder",
      "isabellaAffair", "isabellaIntimacy", "isabellaLingered",
      "natalieAffair", "caughtWithNatalie", "gracieSawDoor", "fallStarted", "samArrested"
    ]
  },
  {
    id: "isabella",
    node: "p1s2_isa_choice",
    label: "Isabella at the reception",
    stage: {
      bg: "reception",
      location: "Rourke Reception Hall",
      alert: false,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "isabella", sprite: "tempt", focus: true }
      }
    },
    clearFlags: [
      "isabellaAffair", "isabellaIntimacy", "isabellaLingered",
      "natalieAffair", "caughtWithNatalie", "fallStarted", "samArrested"
    ]
  },
  {
    id: "natalie_line",
    node: "p1s3_choice_tempt",
    label: "Natalie — after hours",
    stage: {
      bg: "lounge",
      location: "Helios · Strategy Annex · After hours",
      alert: false,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "tempt", focus: true }
      }
    },
    clearFlags: [
      "natalieAffair", "natalieHollow", "natalieOpening",
      "caughtWithNatalie", "framedInnocently", "gracieSawDoor",
      "fallStarted", "samArrested", "gracieReconciled", "gracieWithVincent", "refusedNatalieFavor"
    ]
  },
  {
    id: "inhibitor_dream",
    node: "p2s1_dream_1",
    label: "Prison dream — hold the edge",
    stage: {
      bg: "black",
      location: "—",
      alert: false,
      chars: {}
    },
    clearFlags: [
      "inhibitorTemptYielded", "inhibitorTemptResisted"
    ]
  },
  {
    id: "natalie_favor",
    node: "p1s4_nat_choice",
    label: "Natalie collects the favor",
    stage: {
      bg: "lounge",
      location: "Helios · Strategy Annex",
      alert: false,
      chars: {
        left: { id: "sam", sprite: "uniform2", focus: false },
        center: { id: "natalie", sprite: "tempt", focus: true }
      }
    },
    clearFlags: [
      "caughtWithNatalie", "refusedNatalieFavor", "framedInnocently",
      "gracieSawDoor", "fallStarted", "samArrested", "gracieReconciled", "gracieWithVincent"
    ]
  }
];

const BACKGROUNDS = {
  black: "",
  space: "assets/backgrounds/bg_Ardent_Horizon_Space.png",
  bridge: "assets/backgrounds/bg_Ardent_Horizon_Command_Bridge.png",
  bridgeDanger: "assets/backgrounds/bg_Ardent_Horizon_Command_Bridge_Danger.png",
  residence: "assets/backgrounds/bg_Page_Residence.png",
  showers: "assets/backgrounds/bg_Ardent_Horizon_Showers.png",
  quarters: "assets/backgrounds/bg_Ardent_Horizon_Lena_Quarters.png",
  reactor: "assets/backgrounds/bg_Ardent_Horizon_Reactor.png",
  spaceport: "assets/backgrounds/bg_Orbital_Spaceport.png",
  restaurant: "assets/backgrounds/bg_Executive_Restaurant.png",
  gracieApt: "assets/backgrounds/bg_Gracie_Apartment.png",
  lounge: "assets/backgrounds/bg_Reception_Lounge.png",
  bathroom: "assets/backgrounds/bg_Reception_Bathroom.png",
  bathroomAlt: "assets/backgrounds/bg_bathroom.png",
  privateRoom: "assets/backgrounds/bg_Reception_Private_Room.png",
  privateRoom2: "assets/backgrounds/bg_Reception_Private_Room2.png",
  reception: "assets/backgrounds/bg_Reception_Lounge.png",
  annex: "assets/backgrounds/bg_Annex.png",
  // Prison / Château
  prison: "assets/backgrounds/bg_Chateau_Cell.png",
  prisonYard: "assets/backgrounds/bg_Chateau_Exterior.png",
  prisonVisit: "assets/backgrounds/bg_Chateau_Exterior.png",
  chateau: "assets/backgrounds/bg_Chateau_Exterior.png",
  chateauCell: "assets/backgrounds/bg_Chateau_Cell.png",
  chateauVent: "assets/backgrounds/bg_Chateau_Vents.png",
  chateauVault: "assets/backgrounds/bg_Chateau_Vault.png",
  chateauShuttle: "assets/backgrounds/bg_Chateau_Shuttle_Bay.png",
  // Belts / outpost / pirates
  outpost7: "assets/backgrounds/bg_Outpost_7.png",
  outpost7Hall: "assets/backgrounds/bg_Outpost_7_Hallway.png",
  outpost7Pod: "assets/backgrounds/bg_Outpost_7_Pod.png",
  outpost7Neighbor: "assets/backgrounds/bg_Outpost_7_Neighbor_Pod.png",
  pirateDeck: "assets/backgrounds/bg_Pirate_Deck.png",
  pirateQuarters: "assets/backgrounds/bg_Pirate_Quarters.png",
  // Aliases used by later scenes
  spaceportOutpost: "assets/backgrounds/bg_Outpost_7.png",
  solarHub: "assets/backgrounds/bg_Solar_System_Hub.png",
  mapHub: "assets/backgrounds/bg_Solar_System_Hub.png"
};


const CHARACTERS = {
  sam: {
    id: "sam",
    name: "Sam Page",
    color: "#8ecae6",
    role: "Executive Officer, Ardent Horizon",
    age: 24,
    blurb: "A young officer raised in poverty after a catastrophe erased his family's security. Competent, loyal, moral — and still too willing to trust.",
    sprites: {
      uniform: "assets/characters/sam_uniform.png",
      uniform2: "assets/characters/sam_uniform2.png",
      serious: "assets/characters/sam_serious.png",
      angry: "assets/characters/sam_angry.png",
      confident: "assets/characters/sam_confident.png",
      ready: "assets/characters/sam_ready.png",
      flashback: "assets/characters/sam_flashback.png",
      flashback2: "assets/characters/sam_flashback2.png",
      aroused: "assets/characters/sam_aroused.png",
      dead: "assets/characters/sam_dead.png",
      gameover1: "assets/characters/sam_gameover1.png",
      gameover2: "assets/characters/sam_gameover2.png"
    },
    defaultSprite: "uniform"
  },
  prisonsam: {
    id: "prisonsam",
    name: "Sam Page",
    color: "#8ecae6",
    role: "Prisoner",
    blurb: "Fifteen years of inhibitor and stone.",
    sprites: {
      afraid: "assets/characters/prisonsam_afraid.png",
      angry: "assets/characters/prisonsam_angry.png",
      hurt: "assets/characters/prisonsam_hurt.png",
      tired: "assets/characters/prisonsam_tired.png",
      normal: "assets/characters/prisonsam_tired.png",
      serious: "assets/characters/prisonsam_angry.png",
      uniform: "assets/characters/prisonsam_tired.png"
    },
    defaultSprite: "tired"
  },
  ash: {
    id: "ash",
    name: "Ash Geist",
    color: "#8ecae6",
    role: "Pirate · True Purpose",
    age: 39,
    blurb: "The name the belts learn after Château d'If. Same man. Different ledger.",
    sprites: {
      serious: "assets/characters/sam_serious.png",
      angry: "assets/characters/sam_angry.png",
      confident: "assets/characters/sam_confident.png",
      ready: "assets/characters/sam_ready.png",
      uniform: "assets/characters/sam_uniform.png",
      uniform2: "assets/characters/sam_uniform2.png",
      aroused: "assets/characters/sam_aroused.png",
      normal: "assets/characters/sam_serious.png",
      dead: "assets/characters/sam_dead.png"
    },
    defaultSprite: "serious"
  },
  lena: {
    id: "lena",
    name: "Lena Voss",
    color: "#e0b566",
    role: "Captain, Ardent Horizon",
    age: 42,
    blurb: "The commander who saw Sam's potential first. Calm under pressure, politically savvy, and more tempted by him than she wants to admit.",
    sprites: {
      uniform: "assets/characters/lena_uniform.png",
      captain: "assets/characters/lena_uniform.png",
      duty: "assets/characters/lena_duty.png",
      orders: "assets/characters/lena_orders.png",
      impressed: "assets/characters/lena_impressed.png",
      shocked: "assets/characters/lena_shocked.png",
      datapad: "assets/characters/lena_datapad.png",
      party: "assets/characters/lena_party.png",
      party2: "assets/characters/lena_party2.png",
      party3: "assets/characters/lena_party3.png",
      partyAffair: "assets/characters/lena_party_affair.png",
      quarters: "assets/characters/lena_quarters.png",
      quarters2: "assets/characters/lena_quarters2.png",
      reactor: "assets/characters/lena_reactor.png",
      reactor2: "assets/characters/lena_reactor2.png",
      seduce: "assets/characters/lena_seduce.png",
      seduce2: "assets/characters/lena_seduce2.png",
      seduce3: "assets/characters/lena_seduce3.png",
      towel: "assets/characters/lena_towel.png",
      towel2: "assets/characters/lena_towel2.png"
    },
    defaultSprite: "uniform"
  },
  gracie: {
    id: "gracie",
    name: "Gracie Page",
    color: "#f4a6c4",
    role: "Sam's wife",
    blurb: "The home he fights for — and the wound the conspiracy uses.",
    sprites: {
      normal: "assets/characters/gracie_normal.png",
      happy: "assets/characters/gracie_happy.png",
      cute: "assets/characters/gracie_cute.png",
      cutie: "assets/characters/gracie_cutie.png",
      laugh: "assets/characters/gracie_laugh.png",
      sad: "assets/characters/gracie_sad.png",
      cry: "assets/characters/gracie_cry.png",
      shocked: "assets/characters/gracie_shocked.png",
      shy: "assets/characters/gracie_shy.png",
      listen: "assets/characters/gracie_listen.png",
      intrigued: "assets/characters/gracie_intrigued.png",
      naughty: "assets/characters/gracie_naughty.png",
      threatened: "assets/characters/gracie_threatened.png",
      taken: "assets/characters/gracie_taken.png",
      back: "assets/characters/gracie_back.png",
      datapad: "assets/characters/gracie_datapad.png",
      party: "assets/characters/gracie_party.png",
      party2: "assets/characters/gracie_party2.png",
      partyAroused: "assets/characters/gracie_partyaroused.png",
      partyListening: "assets/characters/gracie_partylistening.png",
      partySad: "assets/characters/gracie_partysad.png",
      sex: "assets/characters/gracie_sex.png"
    },
    defaultSprite: "normal"
  },
  marcus: {
    id: "marcus",
    name: "Marcus",
    color: "#9aa4b2",
    role: "Helios political officer",
    blurb: "Jealousy with a badge.",
    sprites: {
      normal: "assets/characters/marcus_normal.png",
      jealous: "assets/characters/marcus_jealous.png",
      evil: "assets/characters/marcus_evil.png"
    },
    defaultSprite: "normal"
  },
  engineer: {
    id: "engineer",
    name: "Engineer",
    color: "#94a3b8",
    role: "Ardent Horizon engineering",
    sprites: {
      work: "assets/characters/engineer_work.png",
      scared: "assets/characters/engineer_scared.png",
      normal: "assets/characters/engineer_work.png"
    },
    defaultSprite: "work"
  },
  adrian: {
    id: "adrian",
    name: "Adrian Vale",
    color: "#60a5fa",
    role: "Helios executive",
    sprites: {
      formal: "assets/characters/adrian_formal.png",
      normal: "assets/characters/adrian_formal.png"
    },
    defaultSprite: "formal"
  },
  daniel: {
    id: "daniel",
    name: "Daniel Page",
    color: "#a8b5c4",
    role: "Sam's father",
    sprites: {
      father: "assets/characters/daniel_father.png",
      normal: "assets/characters/daniel_father.png"
    },
    defaultSprite: "father"
  },
  elias: {
    id: "elias",
    name: "Elias",
    color: "#7dd3fc",
    role: "Sam's uncle",
    sprites: {
      uncle: "assets/characters/elias_uncle.png",
      portrait: "assets/characters/elias_uncle.png",
      normal: "assets/characters/elias_uncle.png"
    },
    defaultSprite: "uncle"
  },
  vincent: {
    id: "vincent",
    name: "Vincent Rourke",
    color: "#f87171",
    role: "Corporate rival",
    sprites: {
      normal: "assets/characters/vincent_normal.png",
      joke: "assets/characters/vincent_joke.png",
      angry: "assets/characters/vincent_angry.png",
      evil: "assets/characters/vincent_evil.png"
    },
    defaultSprite: "normal"
  },
  isabella: {
    id: "isabella",
    name: "Isabella Rourke",
    color: "#e8a0b8",
    role: "Vincent's younger sister",
    sprites: {
      dress: "assets/characters/isabella_dress.png",
      giggle: "assets/characters/isabella_giggle.png",
      red: "assets/characters/isabella_red.png",
      tease: "assets/characters/isabella_tease.png",
      tempt: "assets/characters/isabella_tempt.png",
      tempt2: "assets/characters/isabella_tempt2.png",
      tempt3: "assets/characters/isabella_tempt3.png",
      interested: "assets/characters/isabella_interested.png",
      sad: "assets/characters/isabella_sad.png",
      bend: "assets/characters/isabella_bend.png",
      sex: "assets/characters/isabella_sex.png",
      workout: "assets/characters/isabella_workout.png",
      workout2: "assets/characters/isabella_workout2.png"
    },
    defaultSprite: "dress"
  },
  natalie: {
    id: "natalie",
    name: "Natalie Cross",
    color: "#c9a0d4",
    role: "Corporate image strategist",
    sprites: {
      normal: "assets/characters/natalie_normal.png",
      intro: "assets/characters/natalie_intro.png",
      smile: "assets/characters/natalie_smile.png",
      shy: "assets/characters/natalie_shy.png",
      flirt: "assets/characters/natalie_flirt.png",
      serious: "assets/characters/natalie_serious.png",
      drink: "assets/characters/natalie_drink.png",
      party: "assets/characters/natalie_party.png",
      party2: "assets/characters/natalie_party2.png",
      party3: "assets/characters/natalie_party3.png",
      tempt: "assets/characters/natalie_tempt.png"
    },
    defaultSprite: "intro"
  },
  roland: {
    id: "roland",
    name: "Roland Kane",
    color: "#a8a29e",
    role: "Imprisoned freighter captain",
    sprites: {
      normal: "assets/characters/roland_normal.png",
      side: "assets/characters/roland_side.png",
      sitting: "assets/characters/roland_sitting.png",
      thinking: "assets/characters/roland_thinking.png",
      serious: "assets/characters/roland_thinking.png",
      tired: "assets/characters/roland_sitting.png"
    },
    defaultSprite: "normal"
  },
  lyra: {
    id: "lyra",
    name: "Lyra Voss",
    color: "#c4b5fd",
    role: "Pirate XO · True Purpose",
    sprites: {
      normal: "assets/characters/lyra_normal.png",
      confident: "assets/characters/lyra_confident.png",
      determined: "assets/characters/lyra_determined.png",
      amused: "assets/characters/lyra_amused.png",
      play: "assets/characters/lyra_play.png",
      afraid: "assets/characters/lyra_afraid.png",
      sad: "assets/characters/lyra_sad.png",
      crying: "assets/characters/lyra_crying.png",
      jealous: "assets/characters/lyra_jealous.png",
      aroused: "assets/characters/lyra_aroused.png",
      seduce: "assets/characters/lyra_seduce.png",
      serious: "assets/characters/lyra_determined.png",
      battle: "assets/characters/lyra_determined.png"
    },
    defaultSprite: "normal"
  },
  dockworker: {
    id: "dockworker",
    name: "Dock Worker",
    color: "#94a3b8",
    role: "Outpost 7",
    sprites: {
      before: "assets/characters/dockworker_before.png",
      infected: "assets/characters/dockworker_infected.png",
      normal: "assets/characters/dockworker_before.png"
    },
    defaultSprite: "before"
  },
  dockwife: {
    id: "dockwife",
    name: "Dock Worker's Wife",
    color: "#f9a8d4",
    role: "Outpost 7",
    sprites: {
      before: "assets/characters/dockwife_before.png",
      infected: "assets/characters/dockwife_infected.png",
      normal: "assets/characters/dockwife_before.png"
    },
    defaultSprite: "before"
  },
  neighbor: {
    id: "neighbor",
    name: "Neighbor",
    color: "#fda4af",
    role: "Outpost 7 habitat",
    sprites: {
      before: "assets/characters/neighbor_before.png",
      infected: "assets/characters/neighbor_infected.png",
      normal: "assets/characters/neighbor_before.png"
    },
    defaultSprite: "before"
  },
  tess: {
    id: "tess",
    name: "Tess",
    color: "#86efac",
    role: "Colonist",
    sprites: {
      normal: "assets/characters/colonists_tess.png"
    },
    defaultSprite: "normal"
  },
  vargas: {
    id: "vargas",
    name: "Vargas",
    color: "#86efac",
    role: "Colonist",
    sprites: {
      normal: "assets/characters/colonist_vargas.png"
    },
    defaultSprite: "normal"
  },
  scientist: {
    id: "scientist",
    name: "Helios Scientist",
    color: "#7dd3fc",
    role: "Helios research",
    sprites: {
      normal: "assets/characters/helios_scientist.png"
    },
    defaultSprite: "normal"
  },
  femalereplicant: {
    id: "femalereplicant",
    name: "Replicant",
    color: "#a5b4fc",
    role: "Construct",
    sprites: {
      front: "assets/characters/femalereplicant_front.png",
      side: "assets/characters/femalereplicant_side.png",
      watch: "assets/characters/femalereplicant_watch.png",
      normal: "assets/characters/femalereplicant_front.png"
    },
    defaultSprite: "front"
  },
  malereplicant: {
    id: "malereplicant",
    name: "Replicant",
    color: "#a5b4fc",
    role: "Construct",
    sprites: {
      front: "assets/characters/malereplicant_front.png",
      side: "assets/characters/malereplicant_side.png",
      watch: "assets/characters/malereplicant_watch.png",
      normal: "assets/characters/malereplicant_front.png"
    },
    defaultSprite: "front"
  },
  datapad: {
    id: "datapad",
    name: "Datapad",
    color: "#94a3b8",
    role: "Prop",
    sprites: {
      normal: "assets/characters/datapad.png"
    },
    defaultSprite: "normal"
  }
};


const CODEX = [
  CHARACTERS.sam,
  CHARACTERS.lena,
  CHARACTERS.gracie,
  CHARACTERS.marcus,
  CHARACTERS.engineer,
  CHARACTERS.adrian,
  CHARACTERS.daniel,
  CHARACTERS.elias,
  CHARACTERS.vincent,
  CHARACTERS.isabella,

  {
    id: "natalie",
    name: "Natalie Cross",
    role: "Gracie's childhood friend",
    blurb: "Funny, social, and secretly envious. She poisons Gracie's trust while chasing a life that was never hers.",
    sprites: {}
  },
  {
    id: "lyra",
    name: "Lyra Voss",
    role: "Pirate navigator · later era",
    blurb: "The woman who sees Sam after betrayal has already changed him. Lena's long-lost younger sister. Unlocked after the prison years.",
    sprites: {}
  },
  {
    id: "roland",
    name: "Roland Kane",
    role: "Imprisoned freighter captain",
    blurb: "The mentor who teaches Sam that morality without wisdom is dangerous. Patience, strategy, deception.",
    sprites: {}
  },
  {
    id: "nathan",
    name: "Nathan Rourke",
    role: "Son of Gracie and Vincent",
    blurb: "Raised to believe Sam was a criminal. Captured during a raid, he becomes the bridge between Sam's lost past and the future he is trying to build.",
    sprites: {}
  },
  {
    id: "cassian",
    name: "Cassian Rook",
    role: "Colonial Security Directorate",
    blurb: "A government operative who hides control behind public safety. He believes everyone has a price. Sam is the exception that infuriates him.",
    sprites: {}
  }
];


const CHAPTER_STARTS = {
  // Scene 1 sub-chapters
  p1s1: "open_1",
  p1s1a: "open_1",
  p1s1b: "crisis_1",
  p1s1c: "choice_2",
  p1s1d: "crisis_return_1",
  // Scene 2 sub-chapters
  p1s2: "p1s2_open",
  p1s2a: "p1s2_open",
  p1s2b: "p1s2_choice1",
  p1s2c: "p1s2_party_merge",
  p1s2d: "p1s2_vincent_gracie_1",
  // Scene 3 sub-chapters
  p1s3: "p1s3_open",
  p1s3a: "p1s3_open",
  p1s3b: "p1s3_engage_1",
  p1s3c: "p1s3_nat_1",
  p1s3d: "p1s3_file_1",
  // Scene 4
  p1s4: "p1s4_open",
  p1s4a: "p1s4_open",
  p1s4b: "p1s4_branch",
  p1s4c: "p1s4_door_1",
  p1s4d: "p1s4_fall_1",
  p1s5: "p1s5_open",
  p1s5a: "p1s5_open",
  p1s5b: "p1s5_gracie_branch",
  p1s5c: "p1s5_file_1",
  p1s5d: "p1s5_arrest_1",
  p2s1: "p2s1_open",
  p2s1a: "p2s1_open",
  p2s1b: "p2s1_dream_1",
  p2s1c: "p2s1_edu_1",
  p2s1d: "p2s1_vault_1",
  p2s2: "p2s2_open",
  p2s2a: "p2s2_open",
  p2s2b: "p2s2_vincent_1",
  p2s2c: "p2s2_years_1",
  p2s2d: "p2s2_harden_1",
  p2s3: "p2s3_open",
  p2s3a: "p2s3_open",
  p2s3b: "p2s3_dock_1",
  p2s3c: "p2s3_horror_1",
  p2s3d: "p2s3_trail_1",
  p2s3e: "p2s3_lyra_1",
  p3s1: "p3s1_open",
  p3s1a: "p3s1_open",
  p3s1b: "p3s1_op9_1",
  p3s1c: "p3s1_courier_1",
  p3s1d: "p3s1_scx_1",
  hub: "p3s1_open"
};

const CHAPTERS = [
  {
    part: "Part 1 — Scene 1: The Crisis",
    scenes: [
      { id: "p1s1a", title: "1.1 Coolant & Crisis", status: "playable", note: "Ardent Horizon. Containment. First choices." },
      { id: "p1s1b", title: "1.2 Bridge & Blame", status: "playable", note: "Marcus. Lena. Who takes the run." },
      { id: "p1s1c", title: "1.3 The Coolant Run", status: "playable", note: "Shower flashback. Three weeks earlier." },
      { id: "p1s1d", title: "1.4 Lena's Quarters", status: "playable", note: "Kiss choice. Klaxon. Reactor." }
    ]
  },
  {
    part: "Part 1 — Scene 2: Homecoming",
    scenes: [
      { id: "p1s2a", title: "2.1 Spaceport", status: "playable", note: "Adrian Vale. Sponsorship." },
      { id: "p1s2b", title: "2.2 Who Comes First", status: "playable", note: "Father, Gracie, or Adrian. Vincent at the door." },
      { id: "p1s2c", title: "2.3 The Reception", status: "playable", note: "Isabella. Toast. Pressure." },
      { id: "p1s2d", title: "2.4 Aftermath", status: "playable", note: "Blackmail. Faithful intervention or fall." }
    ]
  },
  {
    part: "Part 1 — Scene 3: Everything He Wants",
    scenes: [
      { id: "p1s3a", title: "3.1 The Offer Board", status: "playable", note: "Promotion. Natalie assigned." },
      { id: "p1s3b", title: "3.2 The Ring", status: "playable", note: "Engagement — private, public, or delayed." },
      { id: "p1s3c", title: "3.3 Natalie Cross", status: "playable", note: "Temptation. Boundaries. Heat." },
      { id: "p1s3d", title: "3.4 The File", status: "playable", note: "First smear. Frame job starts." }
    ]
  },
  {
    part: "Part 1 — Scene 4: The Trap",
    scenes: [
      { id: "p1s4a", title: "4.1 After the Smear", status: "playable", note: "Board pressure. Net tightens." },
      { id: "p1s4b", title: "4.2 The Collection", status: "playable", note: "Natalie cashes in — or Vincent builds the lie." },
      { id: "p1s4c", title: "4.3 The Door", status: "playable", note: "Gracie turns the handle." },
      { id: "p1s4d", title: "4.4 The First Fall", status: "playable", note: "Public cut. Conspiracy satisfied." }
    ]
  },
  {
    part: "Part 1 — Scene 5: Destruction",
    scenes: [
      { id: "p1s5a", title: "5.1 Administrative Leave", status: "playable", note: "Interview. Horizon file moves." },
      { id: "p1s5b", title: "5.2 Gracie", status: "playable", note: "Belief — or Vincent already in the doorway." },
      { id: "p1s5c", title: "5.3 The Second Cut", status: "playable", note: "Legal throat. Adrian steps back." },
      { id: "p1s5d", title: "5.4 Arrest", status: "playable", note: "Arrested in front of Gracie. End of the free man." }
    ]
  },
  {
    part: "Part 2 — Prison & the Belts (continue from save)",
    scenes: [
      { id: "p2s1a", title: "2.1 Château d'If", status: "playable", note: "Cryo. Inhibitor. Kane." },
      { id: "p2s1b", title: "2.2 Reality Tests", status: "playable", note: "Shutter Island / Westworld pressure." },
      { id: "p2s1c", title: "2.3 Knowledge as Weapon", status: "playable", note: "Education. Vault path." },
      { id: "p2s1d", title: "2.4 Emergence", status: "playable", note: "Escape. Contaminated freedom." },
      { id: "p2s2a", title: "2.2a Gracie's Quiet", status: "playable", note: "Six months. Media. Fallout." },
      { id: "p2s2b", title: "2.2b Vincent at the Door", status: "playable", note: "Help with strings." },
      { id: "p2s2c", title: "2.2c Without a Name", status: "playable", note: "Letters. Loneliness." },
      { id: "p2s2d", title: "2.2d What Hope Becomes", status: "playable", note: "The bed finishes what the wall started." },
      { id: "p2s3a", title: "2.3a Fifteen Years", status: "playable", note: "Time shock. No mirror." },
      { id: "p2s3b", title: "2.3b Outpost Night", status: "playable", note: "Infection while Ash sleeps." },
      { id: "p2s3c", title: "2.3c Data Slate", status: "playable", note: "Victim zero." },
      { id: "p2s3d", title: "2.3d The Trail", status: "playable", note: "Orgy bloodbath. Pirate deck." },
      { id: "p2s3e", title: "2.3e Lyra", status: "playable", note: "XO. True Purpose." }
    ]
  },
  {
    part: "Part 3 — Ash Geist & True Purpose (continue from save)",
    scenes: [
      { id: "p3s1a", title: "3.1 Ash Geist", status: "playable", note: "New name. First job." },
      { id: "p3s1b", title: "3.1 Outpost 9", status: "playable", note: "Nest clear. Command." },
      { id: "p3s1c", title: "3.1 Helios Courier", status: "playable", note: "Prize. SCX-2." },
      { id: "p3s1d", title: "3.1 Aftermath", status: "playable", note: "Lab or late station." },
      { id: "hub", title: "System Map", status: "playable", note: "Belt → Mars → Earth missions." }
    ]
  },
  {
    part: "Part 4 — Legacy (unreleased)",
    scenes: [
      { id: "p4s1", title: "Homeworld", status: "playable", note: "—" }
    ]
  }
];


const STAT_META = [
  { key: "integrity", label: "Integrity" },
  { key: "leadership", label: "Leadership" },
  { key: "cunning", label: "Cunning" },
  { key: "trust", label: "Trust" },
  { key: "reputation", label: "Reputation" },
  { key: "compassion", label: "Compassion" }
];

const DEFAULT_SETTINGS = {
  textSpeed: 28,
  autoSpeed: 1,
  volume: 70,
  boxOpacity: 82,
  fontSize: 1.28,
  skipUnread: false
};
