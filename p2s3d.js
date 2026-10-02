/* STARFALL P2S3d — Trail: bar aftermath, ship bloodbath (Sam arrives late) */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s3d = {
    p2s3_trail_1: {
      saveLabel: "Shadow dock approach",
      bg: "spaceport",
      location: "Outpost 7 · Shadow dock",
      clearChars: true,
      fx: "vignette",
      chars: { center: { id: "ash", sprite: "serious", focus: true } },
      speaker: "narration",
      text: "The unregistered hull sits under an ore-shroud like a secret that got tired of hiding.\\n\\nAmber quarantine paint. A hatch that was forced from the inside. The smell hits before the light does: sex, blood, ammonia-sweet rot.",
      next: "p2s3_trail_2"
    },
    p2s3_trail_2: {
      speaker: "narration",
      text: "Sam does not know the whole chain. He can read a room.\\n\\nClothes in heaps. Spent casings. A mattress dark with seed and blood and a third fluid that shines wrong under the emergency strips. The air is sex-stink over ammonia-sweet rot. Pearl-dark nodules pressed into a seam like a second, quieter nesting. Fingerprints in smear on a bulkhead at hip height. This started as bodies wanting each other and ended as bodies rewritten.",
      next: "p2s3_trail_3"
    },
    p2s3_trail_3: {
      chars: {
        left: { id: "dockwife", sprite: "infected", focus: true },
        right: { id: "neighbor", sprite: "infected", focus: false }
      },
      bg: "lounge",
      location: "Earlier · Gravity well bar (reconstruction)",
      speaker: "narration",
      text: "What the outpost will never put in a report:\\n\\nTwo women at the gravity-well bar — skin running hot, enough white left in their eyes to pass for tired and available. The wife’s laugh is a little too ready. The neighbor’s hand finds a pilot’s thigh under the table and squeezes high enough that his drink forgets the rim.\\n\\nBreath in ears. Mouths that taste faintly sweet-rot under solvent and cheap lip balm. “Ship’s warmer than the stack,” one of them murmurs. Human voice. Hive patience underneath.\\n\\nThe pirates take the bait the way men take free heat. Hands on waists. A kiss that lasts too long against a bulkhead on the walk to the shadow dock. Someone’s fingers already inside someone’s clothes before the airlock cycles.",
      next: "p2s3_trail_4"
    },
    p2s3_trail_4: {
      chars: {
        left: { id: "dockwife", sprite: "infected", focus: false },
        center: { id: "neighbor", sprite: "infected", focus: true }
      },
      bg: "pirateDeck",
      location: "Pirate vessel · Crew deck",
      shake: true,
      speaker: "narration",
      text: "Aboard, it becomes an orgy because that is the easiest lie.\\n\\nCoveralls open. The wife straddles a gunner and sinks onto him with a moan that makes the others cheer — tight, wet, rolling her hips like she has been starving for exactly this. The neighbor is on her knees for the pilot, spit-slick, then on her back under a second man, legs spread, pulling him deeper while a third finds her mouth. The air fills with sex-stink, solvent, and that ammonia-sweet edge only someone who has met the station’s curriculum would fear in time.\\n\\nThe turn is not a scream at first. It is stillness in the wife’s face while the gunner is still buried in her — eyes going full black, smile stretching too wide. Secondary motion flickers under her sternum. She leans down as if to kiss him and the mouth that meets his is no longer only hers. He jerks. Blood hits the bulkhead in a bright arc.\\n\\nThe neighbor’s legs lock around her partner as something exits her in a wet, segmented rush and finds the open scream of the man above her. Pistols clear leather too late. One pirate makes the hatch; the thing wearing her rides him down and finishes the transfer while he chokes on his own tongue.\\n\\nThe captain dies on his own deck — torn open by a crewman who had been laughing with him minutes before, face already wrong, hands already not hands, cock still wet from the woman who started the party. The bunks keep the geometry of an orgy: tangled limbs, spent seed mixed with black sheen, pearl-dark nodules pressed into mattress seams.",
      next: "p2s3_trail_5"
    },
    p2s3_trail_5: {
      clearFx: true,
      speaker: "narration",
      text: "Sam picks that story out of blood patterns and a dead man’s insignia on a chest that no longer sits right.\\n\\nUpper decks still show movement on a cheap thermal. Someone alive is holding a line.",
      next: "p2s3_trail_choice"
    },
    p2s3_trail_choice: {
      saveLabel: "At the airlock",
      speaker: "narration",
      text: "Weapon weight in his hand. Core ticking. No clean flag on this hull.",
      choices: [
        {
          text: "Hail the airlock. Announce he’s not infected and not security.",
          hint: "Talk first",
          next: "p2s3_lyra_1",
          effects: { stats: { leadership: 4 }, romance: { lyra: 5 } }
        },
        {
          text: "Force the cycle and go in low.",
          hint: "Aggressive",
          next: "p2s3_lyra_force",
          effects: { stats: { cunning: 3 }, romance: { lyra: -5 } }
        },
        {
          text: "Wait for movement to come to him — ambush or ally.",
          hint: "Patient",
          next: "p2s3_lyra_wait",
          effects: { stats: { cunning: 5 } }
        }
      ]
    },
    p2s3_lyra_force: {
      speaker: "narration",
      text: "The hatch yields. A weapon meets his face before his eyes adjust.\\n\\n“Move wrong and I finish what the decks started,” a woman says. Metal graft at the temple. Blood on her sleeve. Human eyes — furious, tired, measuring.",
      next: "p2s3_lyra_2"
    },
    p2s3_lyra_wait: {
      speaker: "narration",
      text: "Boots on the other side. The hatch opens on her terms. Same graft, same blood, same aim.",
      next: "p2s3_lyra_2"
    }
  };
})();
