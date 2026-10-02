/* STARFALL P2S3a — Fifteen years; no mirror */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s3a = {
    p2s3_open: {
      saveLabel: "Shuttle · Belt vector",
      bg: "space",
      location: "Escape craft · Unregistered",
      hideContainment: true,
      clearChars: true,
      clearFx: true,
      chars: { center: { id: "prisonsam", sprite: "angry", focus: true } },
      speaker: "narration",
      text: "The craft rattles like it resents still being asked to fly.\\n\\nSam keeps one hand on the stick and the other on Kane’s core, as if the weight of it might keep the numbers honest. Behind him, Château d’If is only a bright wrongness on the rear scope. Ahead: rock, claim markers, places where a man without a clean ID can still buy air.",
      effects: { flags: { escapedChateau: true } },
      next: "p2s3_a_2"
    },
    p2s3_a_2: {
      speaker: "narration",
      text: "There is no mirror on this boat. No vanity panel. The viewport gives him stars and the smear of his glove. He has not seen his own face since intake glass at the black-site — and for a long stretch of the curriculum he stopped needing to.",
      next: "p2s3_a_3"
    },
    p2s3_a_3: {
      speaker: "sam",
      text: "Clock.",
      next: "p2s3_a_4"
    },
    p2s3_a_4: {
      speaker: "system",
      text: "NAV — LOCAL EPOCH MISMATCH\\nCraft internal vs last verified Helios stamp: +14.7 standard years.\\nRecommend surface sync.",
      effects: { flags: { timeShock15: true, yearsPassedUnseen: true } },
      next: "p2s3_a_5"
    },
    p2s3_a_5: {
      speaker: "narration",
      text: "The number does not land as a thought. It lands as nausea.\\n\\nFourteen years. Almost fifteen. Subjectively the station was Kane’s lessons, the vault, a launch that still tastes of copper. Objectively whole lives moved without him. He says Gracie’s name once, quiet, and the cabin does not answer.",
      next: "p2s3_a_choice"
    },
    p2s3_a_choice: {
      saveLabel: "What he does with the number",
      speaker: "narration",
      text: "The belts offer the nearest habitat tag: Outpost 7. Mining rock. Thin law. He can run the nav again, or he can refuse to believe it until something harder than a readout forces the point.",
      choices: [
        {
          text: "Accept the stamp. Plot for Outpost 7.",
          hint: "Face it",
          next: "p2s3_a_accept",
          effects: { stats: { cunning: 2 } }
        },
        {
          text: "Run a second sync off a public belt beacon before he trusts anything.",
          hint: "Verify · Caution",
          next: "p2s3_a_verify",
          effects: { stats: { cunning: 5, integrity: 1 } }
        },
        {
          text: "Ignore the calendar. Fly on fuel and spite.",
          hint: "Denial · Cost later",
          next: "p2s3_a_deny",
          effects: { stats: { integrity: -2, cunning: 1 }, flags: { timeShock15: true } }
        }
      ]
    },
    p2s3_a_accept: {
      speaker: "sam",
      text: "Fine. Fifteen years. Point me at air.",
      next: "p2s3_a_merge"
    },
    p2s3_a_verify: {
      speaker: "narration",
      text: "A public beacon agrees with the craft within a margin that is not comforting.\\n\\nSam sits with both numbers until his hands stop wanting to break the console. Then he plots the outpost.",
      next: "p2s3_a_merge"
    },
    p2s3_a_deny: {
      speaker: "narration",
      text: "He kills the advisory. The stars do not care. The fuel gauge still points at the same rock.",
      next: "p2s3_a_merge"
    },
    p2s3_a_merge: {
      speaker: "narration",
      text: "Outpost 7 grows on the scope: a scar of habitat rings on dirty ice. He still has no mirror. That argument is waiting on the ground.",
      next: "p2s3_dock_1"
    }
  };
})();
