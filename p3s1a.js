/* STARFALL P3S1a — Ash Geist; first job choice */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p3s1a = {
    p3s1_open: {
      saveLabel: "True Purpose · Days later",
      bg: "pirateDeck",
      location: "True Purpose · Ready room",
      hideContainment: true,
      clearChars: true,
      clearFx: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "normal", focus: false }
      },
      speaker: "narration",
      text: "The ship has a name now — True Purpose — painted over the dead captain’s old registry in fresh black. The dead captain’s quarters stay sealed. Lyra keeps the ready room because the ready room is where decisions happen — and she is tired of pretending she is only holding the chair.",
      next: "p3s1_open_2"
    },
    p3s1_open_2: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "serious", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "Before we put your face on a raid board, I need a name that isn’t a Colonial Safety warrant.\\n\\nWho are you, when the belts ask?",
      next: "p3s1_name"
    },
    p3s1_name: {
      speaker: "sam",
      text: "Ash Geist.",
      effects: { flags: { nameAshGeist: true } },
      next: "p3s1_name_2"
    },
    p3s1_name_2: {
      speaker: "narration",
      text: "He does not explain it. Ash for what Helios left. Geist for the thing that walked out of a station that ate years.\\n\\nLyra studies him once, files it, and does not smile.",
      next: "p3s1_name_3"
    },
    p3s1_name_3: {
      speaker: "lyra",
      text: "Ash Geist.\\n\\nAll right. First job, Ash. Outpost 9 went quiet two cycles ago — same sweet-rot signature as Seven. I want it cleared before another rock learns how to scream.\\n\\nUnless you’ve got a better idea of what this crew is for.",
      next: "p3s1_job_choice"
    },
    p3s1_job_choice: {
      saveLabel: "First job",
      speaker: "narration",
      text: "The board shows two tags. One is a dying light on a colonial map. One is a Helios courier running fat and predictable along the inner belt lane.",
      choices: [
        {
          text: "Back Lyra. We clear Outpost 9.",
          hint: "Romance + · Trust +",
          next: "p3s1_op9_1",
          effects: {
            flags: { backedLyraStation: true },
            romance: { lyra: 15 },
            stats: { integrity: 3, leadership: 2 }
          }
        },
        {
          text: "Suggest the Helios courier instead — guns and leverage first.",
          hint: "Leadership + · Cunning +",
          next: "p3s1_courier_1",
          effects: {
            flags: { chosePiracyFirst: true },
            stats: { leadership: 5, cunning: 6 },
            romance: { lyra: -3 }
          }
        }
      ]
    }
  };
})();
