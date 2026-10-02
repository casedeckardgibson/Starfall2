/* STARFALL P2S3c — Data slate; victim zero; Sam’s limited knowledge */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s3c = {
    p2s3_slate_1: {
      chars: {
        left: { id: "ash", sprite: "serious", focus: false },
        center: { id: "dockworker", sprite: "infected", focus: true }
      },
      saveLabel: "Shuttle · Data slate",
      bg: "outpost7",
      location: "Outer docking ring · Sam’s craft",
      clearChars: true,
      alert: true,
      fx: "vignette",
      chars: { center: { id: "ash", sprite: "serious", focus: true } },
      speaker: "narration",
      text: "The fuel line is still hooked. Tools lie where a careful worker would not leave them.\\n\\nSam’s slate is on the crash couch — and between him and it stands the dock worker from last night.",
      effects: { flags: { organismSeen: true } },
      next: "p2s3_slate_2"
    },
    p2s3_slate_2: {
      chars: {
        center: { id: "dockworker", sprite: "infected", focus: true }
      },
      speaker: "narration",
      text: "Almost the right posture. Eyes wrong — matte black, no iris edge, drinking the ring lights. A tick under the jaw. When the man turns, too many micro-motions start at once. The air tastes sweet-rot under the ordinary fuel smell.",
      next: "p2s3_slate_3"
    },
    p2s3_slate_3: {
      speaker: "sam",
      text: "Easy. I’m just here for my slate.",
      next: "p2s3_slate_4"
    },
    p2s3_slate_4: {
      chars: {
        left: { id: "ash", sprite: "serious", focus: false },
        center: { id: "dockworker", sprite: "infected", focus: true }
      },
      speaker: "narration",
      text: "No answer. A secondary mouthpart flicks at the air, wet, needle-fine. Under the coverall, something segmented pushes along the ribs.\\n\\nKane’s core ticks once against Sam’s side — the same xenobiology tag that should have died with the station.",
      next: "p2s3_slate_choice"
    },
    p2s3_slate_choice: {
      saveLabel: "How he takes the bay",
      speaker: "narration",
      text: "Distance to the slate: four meters. Distance to the host: less. No squad. No clean protocol. Only the habits a black-site taught him about rooms that want to become nests.",
      choices: [
        {
          text: "Talk — buy a second, then move for the emergency panel.",
          hint: "Cunning · Vent",
          next: "p2s3_h_talk",
          effects: { stats: { cunning: 6, leadership: 2 } }
        },
        {
          text: "No talk. Bait him toward the service crusher lane.",
          hint: "Wits · Industrial",
          next: "p2s3_h_crusher",
          effects: { stats: { cunning: 10 } }
        },
        {
          text: "Close the gap. Stem-shot before it finishes standing.",
          hint: "Direct · Risk",
          next: "p2s3_h_shot",
          effects: { stats: { leadership: 4, cunning: 5 } }
        },
        {
          text: "Fall back, seal the craft from outside, call outpost security.",
          hint: "Procedure · Slow",
          next: "p2s3_h_secure",
          effects: { stats: { integrity: 3, cunning: 2 }, flags: { calledSecurity: true } }
        }
      ]
    },
    p2s3_h_talk: {
      speaker: "sam",
      text: "You don’t look well. Step off the ramp. I can get you a medic.",
      next: "p2s3_h_talk_2"
    },
    p2s3_h_talk_2: {
      speaker: "narration",
      text: "The host tilts its head like it is trying on the word medic. Sam is already at the maintenance plate. Overrides he learned without windows.\\n\\nBulkheads drop. Atmosphere howls. The thing claws for a seal — human hands, insect thrash underneath. Frost on the black eyes. When the pressure settles, the grating holds only meat that has stopped counting.",
      next: "p2s3_slate_after"
    },
    p2s3_h_crusher: {
      speaker: "narration",
      text: "Chem-flare skitters down the crusher approach. Sam runs the other lane, boots loud on purpose. Heat and noise: grammar this thing understands.\\n\\nHe hits the cycle. Spinning teeth. A short, absolute wet sound. Ore dust settles on what is left.",
      next: "p2s3_slate_after"
    },
    p2s3_h_shot: {
      speaker: "narration",
      text: "Borrowed sidearm. The host lunges. Secondary mouthpart snaps for his face — cold wet on the air.\\n\\nThe shot is ugly and true into the stem-line. Black sheen and human blood hit the deck together. Sam’s hands are steady. His stomach is not.",
      next: "p2s3_slate_after"
    },
    p2s3_h_secure: {
      speaker: "narration",
      text: "He seals from outside and punches a priority to outpost security. They take six minutes. In the fifth the host starts testing the hatch seals with something that is not hands.\\n\\nSecurity opens with shock rounds and worse aim. Sam finishes what they start when the stem presents. They will write it up as a “chemical incident.” He does not correct them.",
      next: "p2s3_slate_after"
    },
    p2s3_slate_after: {
      alert: false,
      clearFx: true,
      speaker: "narration",
      text: "He takes the slate. The cabin still smells wrong.\\n\\nOne host. Here. On his craft. That is all he can prove. Whatever else the night did is not in his field of view — only in the tick of Kane’s core, stubborn as a second conscience.",
      next: "p2s3_slate_choice2"
    },
    p2s3_slate_choice2: {
      saveLabel: "What next",
      speaker: "narration",
      text: "The ring is waking up. Rumors will move faster than reports.",
      choices: [
        {
          text: "Follow the core’s residual bio-tag wherever it points.",
          hint: "Hunt",
          next: "p2s3_trail_1",
          effects: { stats: { cunning: 4 }, flags: { followedBioTag: true } }
        },
        {
          text: "Ask around the commons — quietly — about missing workers.",
          hint: "Listen",
          next: "p2s3_ask_1",
          effects: { stats: { leadership: 3 } }
        },
        {
          text: "Check the sealed “equipment fault” bay on ring three.",
          hint: "Quarantine lead",
          next: "p2s3_ring3_1",
          effects: { stats: { cunning: 3, integrity: 1 } }
        }
      ]
    },
    p2s3_ask_1: {
      bg: "lounge",
      location: "Commons",
      speaker: "narration",
      text: "A miner talks too fast once the price is a drink. Dock worker didn’t come home. Wife neither. Neighbor’s hatch left open. Somebody saw two women at the gravity-well bar last cycle — looking for company, not trouble.\\n\\nPirates off an unregistered hull were buying rounds in the back.",
      next: "p2s3_trail_1"
    },
    p2s3_ring3_1: {
      bg: "reactor",
      location: "Ring 3",
      speaker: "narration",
      text: "Ring three is mostly empty. Quarantine tape. No bodies. Drag marks toward the shadow docks. Kane’s core pulls the same direction like a compass with bad manners.",
      next: "p2s3_trail_1"
    }
  };
})();
