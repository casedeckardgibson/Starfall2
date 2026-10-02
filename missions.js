/* STARFALL — Solar map, regions, missions */
(function () {
  "use strict";

  window.STARFALL_REGIONS = {
    belt: {
      id: "belt",
      label: "K-Belt",
      order: 0,
      unlock: { type: "start" },
      next: "mars",
      clearRequired: 3,
      totalMissions: 4
    },
    mars: {
      id: "mars",
      label: "Mars Orbit",
      order: 1,
      unlock: {
        type: "regionClear",
        region: "belt",
        minCleared: 3,
        minFleetShips: 2,
        minCrewLoyalty: 40,
        minCredits: 400
      },
      next: "earth",
      clearRequired: 5,
      totalMissions: 6
    },
    earth: {
      id: "earth",
      label: "Earth Sphere",
      order: 2,
      unlock: {
        type: "regionClear",
        region: "mars",
        minCleared: 5
      },
      next: null,
      clearRequired: 4,
      totalMissions: 6
    }
  };

  window.STARFALL_MISSIONS = {
    m_belt_inf_1: {
      id: "m_belt_inf_1",
      region: "belt",
      type: "infection",
      title: "Outpost 9",
      blurb: "Sweet-rot signature. Close the nest before the rock goes dark.",
      pos: { x: 28, y: 48 },
      sceneStart: "p3s1_op9_1",
      story: true,
      rewards: {
        colonialRep: 15, crewLoyalty: 8, credits: 250, fleetShips: 1,
        flags: { outpost9Saved: true },
        romance: { lyra: 8 }
      }
    },
    m_belt_inf_2: {
      id: "m_belt_inf_2",
      region: "belt",
      type: "infection",
      title: "Ore-Hab Cinder",
      blurb: "Mining hab went quiet. Same layered breathing on the last ping.",
      pos: { x: 42, y: 62 },
      sceneStart: "hub_m_belt_inf_2",
      rewards: {
        colonialRep: 12, crewLoyalty: 5, credits: 180, tech: 5
      }
    },
    m_belt_hel_1: {
      id: "m_belt_hel_1",
      region: "belt",
      type: "helios",
      title: "Inner Lane Courier",
      blurb: "Helios logistics run. Fat, predictable, lightly armed.",
      pos: { x: 55, y: 35 },
      sceneStart: "p3s1_courier_1",
      story: true,
      rewards: {
        credits: 700, heliosHeat: 12, tech: 8,
        flags: { courierIntel: true },
        stats: { cunning: 3, leadership: 2 }
      }
    },
    m_belt_hel_2: {
      id: "m_belt_hel_2",
      region: "belt",
      type: "helios",
      title: "Claim Marker Heist",
      blurb: "Company survey buoy with encrypted claim data.",
      pos: { x: 70, y: 55 },
      sceneStart: "hub_m_belt_hel_2",
      rewards: {
        credits: 450, heliosHeat: 8, tech: 4
      }
    },
    m_mars_inf_1: {
      id: "m_mars_inf_1",
      region: "mars",
      type: "infection",
      title: "Phobos Dock Sprawl",
      blurb: "Infection in the low-g markets. Civilians still inside.",
      pos: { x: 30, y: 40 },
      sceneStart: "hub_m_mars_inf_1",
      rewards: { colonialRep: 18, crewLoyalty: 6, credits: 300, fleetShips: 1 }
    },
    m_mars_inf_2: {
      id: "m_mars_inf_2",
      region: "mars",
      type: "infection",
      title: "Valles Relay Nest",
      blurb: "A nest using the relay as a warm spine.",
      pos: { x: 48, y: 58 },
      sceneStart: "hub_m_mars_inf_2",
      rewards: { colonialRep: 14, tech: 10, credits: 220 }
    },
    m_mars_inf_3: {
      id: "m_mars_inf_3",
      region: "mars",
      type: "infection",
      title: "Ice-Cap Clinic",
      blurb: "Medical station. Hosts wearing staff coats.",
      pos: { x: 22, y: 70 },
      sceneStart: "hub_m_mars_inf_3",
      rewards: { colonialRep: 20, crewLoyalty: 10, credits: 280 }
    },
    m_mars_hel_1: {
      id: "m_mars_hel_1",
      region: "mars",
      type: "helios",
      title: "SCX-2 Revisit",
      blurb: "Science rock. Countermeasure drafts and heat.",
      pos: { x: 65, y: 32 },
      sceneStart: "hub_m_mars_hel_1",
      rewards: { credits: 900, tech: 20, heliosHeat: 18, fleetShips: 1 }
    },
    m_mars_hel_2: {
      id: "m_mars_hel_2",
      region: "mars",
      type: "helios",
      title: "Helios Armory Barge",
      blurb: "Weapons transfer under civilian registry.",
      pos: { x: 78, y: 50 },
      sceneStart: "hub_m_mars_hel_2",
      rewards: { credits: 1100, tech: 15, heliosHeat: 22 }
    },
    m_mars_hel_3: {
      id: "m_mars_hel_3",
      region: "mars",
      type: "helios",
      title: "Black Courier Chain",
      blurb: "Horizon-adjacent packets. High heat, high truth.",
      pos: { x: 58, y: 72 },
      sceneStart: "hub_m_mars_hel_3",
      rewards: { credits: 600, tech: 25, heliosHeat: 30, flags: { horizonLead: true } }
    },
    m_earth_inf_1: {
      id: "m_earth_inf_1",
      region: "earth",
      type: "infection",
      title: "Orbital Stack 3",
      blurb: "Infection above the homeworld.",
      pos: { x: 40, y: 45 },
      sceneStart: "hub_m_earth_inf_1",
      rewards: { colonialRep: 25, credits: 400 }
    },
    m_earth_hel_1: {
      id: "m_earth_hel_1",
      region: "earth",
      type: "helios",
      title: "Helios Earth Annex",
      blurb: "The Company's front door.",
      pos: { x: 60, y: 40 },
      sceneStart: "hub_m_earth_hel_1",
      rewards: { credits: 1500, heliosHeat: 40, tech: 30 }
    }
  };

  window.STARFALL_MAP = {
    homeShip: "True Purpose",
    activeRegion: "belt"
  };
})();
