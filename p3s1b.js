/* STARFALL P3S1b — Outpost 9; Lyra injured; Ash in command */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p3s1b = {
    p3s1_op9_1: {
      saveLabel: "Outpost 9 · Approach",
      bg: "space",
      location: "Outpost 9 · Approach vector",
      clearChars: true,
      chars: {
        center: { id: "ash", sprite: "serious", focus: true },
        right: { id: "lyra", sprite: "battle", focus: false }
      },
      speaker: "narration",
      text: "Outpost 9 is smaller than Seven and already half-dark.\\n\\nNo hail. No customs. Only amber quarantine paint that someone slapped on too late. Lyra takes point because she always takes point. Ash Geist walks second and counts the ways a corridor can lie.",
      next: "p3s1_op9_2"
    },
    p3s1_op9_2: {
      bg: "reactor",
      location: "Outpost 9 · Habitat spine",
      alert: true,
      fx: "vignette",
      speaker: "narration",
      text: "Sweet-rot in the scrubbers. Drag marks. A child’s shoe that should not be here.\\n\\nThey split at the junction — Lyra toward commons, Ash toward the reactor feed — the old efficient mistake of people who have survived once and believe the pattern will hold.",
      next: "p3s1_op9_3"
    },
    p3s1_op9_3: {
      speaker: "narration",
      text: "It does not hold.\\n\\nAsh hears her over the short-band: a grunt, a curse, then the wet layered breathing he already knows. He runs.",
      next: "p3s1_op9_4"
    },
    p3s1_op9_4: {
      shake: true,
      location: "Outpost 9 · Commons storage",
      chars: {
        center: { id: "lyra", sprite: "battle", focus: true },
        left: { id: "ash", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "The host has her pinned against a cargo cage — still wearing enough of a miner’s face to make it worse. One clawed hand at her throat. The other tearing at the seal of her suit with single-minded hunger, hips grinding as if infection and rape had learned to share a body. Secondary mouthpart flicks at her cheek. Lyra’s pistol is on the deck. Her knife is in the thing’s shoulder and not deep enough.",
      next: "p3s1_op9_5"
    },
    p3s1_op9_5: {
      speaker: "narration",
      text: "Ash does not announce himself.\\n\\nStem-shot at contact distance. Black sheen and human blood. The host collapses half-on her. He hauls it off, puts a second round into the skull-line, and only then sees the damage: suit breached at the hip and ribs, blood sheeting under the armor weave, her graft sparking where a blow caught the temple.",
      effects: { flags: { lyraInjured: true } },
      next: "p3s1_op9_6"
    },
    p3s1_op9_6: {
      speaker: "lyra",
      chars: {
        right: { id: "lyra", sprite: "serious", focus: true },
        center: { id: "ash", sprite: "serious", focus: false }
      },
      text: "Don’t — look at me like that.\\n\\nFinish the rock. That’s an order from whoever’s still standing.",
      next: "p3s1_op9_7"
    },
    p3s1_op9_7: {
      speaker: "narration",
      text: "She presses the command key into his palm — blood-slick chain, no ceremony.\\n\\n“You’re on the channel. Finish the rock.”\\n\\nAsh Geist takes the clear because Lyra cannot walk the next corridor. The crew hears it. Nobody argues.",
      effects: { flags: { ashInCommand: true } },
      next: "p3s1_op9_8"
    },
    p3s1_op9_8: {
      saveLabel: "Clearing Outpost 9",
      speaker: "narration",
      text: "He clears the station the way Kane would have wanted it done — stem-lines, sealed bays, no speeches.\\n\\nTwo more hosts in the lower ring. A nest of pearl-dark nodules in a school closet that makes his hands go careful and cold. When the last clicking stops, Outpost 9 still has living colonists in the sealed upper stack — fewer than there should be, more than there would have been if they had come a cycle later.",
      effects: {
        flags: { outpost9Saved: true },
        stats: { leadership: 6, integrity: 4 }
      },
      next: "p3s1_op9_9"
    },
    p3s1_op9_9: {
      alert: false,
      clearFx: true,
      bg: "pirateDeck",
      location: "True Purpose · Med bay",
      chars: {
        center: { id: "lyra", sprite: "serious", focus: true },
        left: { id: "ash", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "Lyra lives.\\n\\nStabilized, furious about the stabilizers, already arguing about the next board from a cot. Word moves through the belts faster than official traffic: a crew that clears nests, a man called Ash who does not freeze when the meat goes wrong.\\n\\nTwo light hulls ask to tag along within a week. Not a kingdom. The start of one.",
      effects: { flags: { fleetShips: 3 } },
      next: "p3s1_op9_end"
    },
    p3s1_op9_end: {
      speaker: "lyra",
      text: "You kept the rock.\\n\\nWhen I can stand without the room tilting, we talk about what this fleet is for. Until then — you’re still on the board, Geist.",
      effects: { romance: { lyra: 10 } },
      next: "p3s1_end_station"
    },
    p3s1_end_station: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Outpost 9 holds.\\n\\nAsh Geist has a name the belts can say without a warrant number, a crew that watched him take command with blood on his hands, and a woman recovering in med who trusted him with both.",
      next: "p3s1_end_card"
    }
  };
})();
