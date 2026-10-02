/* STARFALL P1S4d — The first fall */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s4d = {
    p1s4_fall_1: {
      saveLabel: "Fallout",
      bg: "black",
      location: "—",
      clearChars: true,
      clearFx: true,
      hideCg: true,
      speaker: "narration",
      text: "By evening the private boards are no longer private enough.",
      effects: { flags: { fallStarted: true } },
      next: "p1s4_fall_2"
    },
    p1s4_fall_2: {
      bg: "lounge",
      location: "Helios HQ · Evening",
      chars: {
        center: { id: "adrian", sprite: "stern", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "adrian",
      text: "A clip is circulating. Annex doorway. Timing is… unkind.\n\nThe board has paused your command-track review. Effective immediately you are on administrative leave pending internal clarity.",
      next: "p1s4_fall_3"
    },
    p1s4_fall_3: {
      speaker: "sam",
      text: "Clarity about a forged memo or clarity about my personal life?",
      next: "p1s4_fall_4"
    },
    p1s4_fall_4: {
      speaker: "adrian",
      text: "Yes.\n\nI can’t protect a profile that is actively supplying its own damage. Even if half of it was aimed at you.",
      next: "p1s4_fall_5"
    },
    p1s4_fall_5: {
      speaker: "narration",
      text: "Adrian’s voice stays even. His eyes do not. Somewhere under the corporate language is a man who still wants to believe the Horizon story — and can no longer sell it upstairs without blood in the margins.",
      next: "p1s4_fall_6"
    },
    p1s4_fall_6: {
      speaker: "adrian",
      text: "Go home, Sam. Or wherever home still is. Do not make statements. Do not contact board members. If Natalie reaches out for press guidance, route it through legal, not through closed doors.",
      next: "p1s4_fall_7"
    },
    p1s4_fall_7: {
      bg: "privateRoom",
      location: "Private lounge · Same night",
      clearChars: true,
      chars: {
        left: { id: "vincent", sprite: "evil", focus: false },
        center: { id: "elias", sprite: "uncle", focus: true },
        right: { id: "marcus", sprite: "evil", focus: false }
      },
      speaker: "elias",
      text: "Phase one works whether the sin was real or only visible.",
      next: "p1s4_fall_8"
    },
    p1s4_fall_8: {
      speaker: "marcus",
      text: "The Horizon file is ready for the second cut. Negligence language. Chain of command. His name in the right cells.",
      next: "p1s4_fall_9"
    },
    p1s4_fall_9: {
      speaker: "vincent",
      chars: {
        left: { id: "vincent", sprite: "evil", focus: true }
      },
      text: "Gracie isn’t answering him. She’s answering me.\n\nNot with yes. With silence that used to be his.",
      next: "p1s4_fall_10"
    },
    p1s4_fall_10: {
      speaker: "elias",
      text: "Don’t get greedy. Silence is enough for now. The sector only needs to stop loving him.",
      next: "p1s4_fall_11"
    },
    p1s4_fall_11: {
      speaker: "narration",
      text: "Three glasses. No toast this time. Only the sound of a plan moving from theory into schedule.",
      next: "p1s4_fall_12"
    },
    p1s4_fall_12: {
      bg: "gracieApt",
      location: "Outside Gracie’s door",
      clearChars: true,
      chars: {
        center: { id: "sam", sprite: "serious", focus: true }
      },
      speaker: "narration",
      text: "Sam stands in the corridor outside her apartment long enough for the building’s sensors to log a loiter warning and dismiss it.\n\nHe knocks once.",
      next: "p1s4_fall_13"
    },
    p1s4_fall_13: {
      speaker: "narration",
      text: "No answer.\n\nHe knocks again. The door stays a door.",
      next: "p1s4_fall_14"
    },
    p1s4_fall_14: {
      speaker: "sam",
      text: "…I’m here. When you want the truth in a room without Vincent in the hallway, I’m here.",
      next: "p1s4_fall_15"
    },
    p1s4_fall_15: {
      speaker: "narration",
      text: "Nothing.\n\nOn the way down the spine, his channel lights once — not Gracie. An unknown legal tag. A request to appear for a formal safety-record interview. Mandatory.",
      next: "p1s4_fall_16"
    },
    p1s4_fall_16: {
      speaker: "narration",
      text: "The first fall is not prison.\n\nIt is the sound of every door that used to open on his name taking half a second longer.",
      next: "p1s4_end_1"
    },
    p1s4_end_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Marcus has the logs.\nElias has the blood story.\nVincent has the doorway.\n\nSam has a leave notice and a silence where home used to be.",
      next: "p1s4_end_card"
    },
    p1s4_end_card: {
      bg: "black",
      location: "—",
      clearChars: true,
      speaker: "narration",
      text: "— End of Scene 4 —\\n\\nThe First Trap.\\n\\nThe sector has begun to stop believing him. The next chapter will not ask for belief. It will ask for a verdict.",
      next: "p1s4_end_screen"
    },
    p1s4_end_screen: {
      bg: "black",
      clearChars: true,
      hideContainment: true,
      speaker: "narration",
      text: "— End of Scene 4 —\n\nThe First Trap.\n\nAdministrative leave. A circulating clip. The second cut is already written.",
      next: "p1s4_to_s5"
    },
    p1s4_to_s5: {
      speaker: "narration",
      text: "What comes next will not ask the sector to believe Sam.\n\nIt will ask it to convict him.",
      next: "p1s5_open"
    }
  };
})();