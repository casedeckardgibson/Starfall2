/* STARFALL P3S1d — SCX-2 first; Outpost 9 lost; command */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p3s1d = {
    p3s1_scx_1: {
      saveLabel: "Helios SCX-2",
      bg: "space",
      location: "Helios SCX-2 · Approach",
      clearChars: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "They burn hard for the dark rock.\\n\\nLyra runs the approach in silence. On the secondary screen, Outpost 9’s last automated ping dies and does not return. She sees it. Ash sees that she sees it. Neither of them performs a speech for the other.",
      next: "p3s1_scx_2"
    },
    p3s1_scx_2: {
      bg: "reactor",
      location: "SCX-2 · Lab ring",
      alert: true,
      fx: "vignette",
      speaker: "narration",
      text: "SCX-2 is not empty enough.\\n\\nSecurity drones. A squad that expected pirates and not a man who has closed xenobiology rooms with his bare competence. The fight is short and ugly. Ash’s people take the armory bay: experimental small arms, cutting charges, a data core that is not Kane’s but rhymes with it — Horizon-adjacent tags, organism countermeasure drafts, names that will matter later.",
      effects: {
        flags: { scx2Looted: true },
        stats: { cunning: 5, leadership: 5 }
      },
      next: "p3s1_scx_3"
    },
    p3s1_scx_3: {
      alert: false,
      clearFx: true,
      bg: "pirateDeck",
      location: "True Purpose · Bridge",
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "By the time they point the bow back toward colonial space, Outpost 9 is a quarantine legend — lost, burned out, or worse. The belts will not parse the difference.\\n\\nThe crew does parse something else: Ash Geist chose the Company throat and cut it. Weapons in the racks. Data in the stack. A plan that worked.",
      next: "p3s1_scx_4"
    },
    p3s1_scx_4: {
      speaker: "narration",
      text: "In the ready room the senior hands put it plain: they want Ash on the board — not as Lyra’s borrowed blade, as the one who calls the next intercept.\\n\\nLyra stands through it with her arms folded. Jealousy moves under her discipline; attraction moves with it. Competence is her language. He is becoming fluent in front of her crew — and Outpost 9 is already a dark mark on the scope they all pretend not to watch.",
      effects: {
        flags: { ashInCommand: true, outpost9Lost: true, fleetShips: 2 },
        romance: { lyra: 8 }
      },
      next: "p3s1_scx_5"
    },
    p3s1_scx_5: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "serious", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "They’re not wrong about you.\\n\\nI’m not going to pretend I’m fine about Nine. Those people didn’t have experimental rifles. They had a timetable we ignored.\\n\\nBut you run a clean prize and you don’t flinch. If you’re taking the board, take it. Just don’t ask me to clap while a station goes dark on my scope.",
      next: "p3s1_scx_6"
    },
    p3s1_scx_6: {
      speaker: "sam",
      text: "I won’t ask you to clap.\\n\\nI’ll ask you to tell me when I’m choosing wrong — even if I don’t turn the ship.",
      next: "p3s1_scx_7"
    },
    p3s1_scx_7: {
      speaker: "narration",
      text: "She holds his gaze a second longer than command requires.\\n\\nThen she nods once, sharp, and leaves him the board and the weight that comes with it.",
      next: "p3s1_end_scx"
    },
    p3s1_end_scx: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "SCX-2 pays in guns and data-ghosts.\\n\\nNine pays in silence. Ash has the crew’s voice. Lyra’s attention is respect edged with blame, heat edged with grief. He did not take command from her injury — he took it from a prize they both chose over a rock full of civilians.",
      next: "p3s1_end_card"
    },

    p3s1_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      hideContainment: true,
      speaker: "narration",
      text: "— End of Scene —\\n\\nJoining the Pirates.\\n\\nAsh Geist is a name the belts can carry. The first job decided what kind of weight it will hold.",
      ending: {
        type: "hub",
        title: "Ash Geist",
        subtitle: "True Purpose",
        epigraph: "The chart is open.",
        body: "Mission results logged. Return to the system map to choose the next vector."
      
      }
    }
  };
})();
