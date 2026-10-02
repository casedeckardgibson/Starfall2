/* STARFALL P2S3b — Dock, night chain (unseen by Sam), morning */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p2s3b = {
    p2s3_dock_1: {
      saveLabel: "Outpost 7 · Dock",
      bg: "outpost7",
      location: "Outpost 7 · Outer docking ring",
      clearChars: true,
      chars: { center: { id: "prisonsam", sprite: "tired", focus: true } },
      speaker: "narration",
      text: "The ring smells of ore dust and old hydraulics.\\n\\nCustoms is a man with a stun baton and a tablet that has survived too many owners. Sam pays in residual script Kane’s core can still fake. Nobody asks for a smile. Nobody offers one.",
      effects: { flags: { beltOutpost: true } },
      next: "p2s3_dock_2"
    },
    p2s3_dock_2: {
      chars: {
        left: { id: "prisonsam", sprite: "tired", focus: false },
        center: { id: "dockworker", sprite: "before", focus: true }
      },
      speaker: "narration",
      text: "A dock worker is already on the craft — standard for the belts. Broad, patched knees, grease under the nails. He hooks refuel lines without looking at Sam’s face.",
      next: "p2s3_dock_3"
    },
    p2s3_dock_3: {
      speaker: "narration",
      text: "Sam’s slate is still on the crash couch. He almost goes back for it. Fatigue decides for him: bunk token first, slate later. He leaves the worker to the tools and walks into the outpost’s thin night.",
      next: "p2s3_dock_choice"
    },
    p2s3_dock_choice: {
      saveLabel: "Before sleep",
      speaker: "narration",
      text: "The transient stack is a short walk. The shuttle is a shorter one the other way.",
      choices: [
        {
          text: "Bunk now. Slate can wait until morning.",
          hint: "Rest",
          next: "p2s3_bunk_1",
          effects: { stats: { leadership: 1 } }
        },
        {
          text: "Turn around. Get the slate before he sleeps.",
          hint: "Early encounter · Different timing",
          next: "p2s3_early_slate",
          effects: { flags: { earlySlate: true }, stats: { cunning: 2 } }
        }
      ]
    },
    p2s3_early_slate: {
      speaker: "narration",
      text: "He gets ten steps before the body wins. The station took more out of him than pride wants to admit. He turns back toward the stack. The slate stays on the couch. The worker stays on the craft.",
      next: "p2s3_bunk_1"
    },
    p2s3_bunk_1: {
      bg: "black",
      location: "Transient stack · Bunk",
      clearChars: true,
      chars: { center: { id: "prisonsam", sprite: "angry", focus: true } },
      speaker: "narration",
      text: "The bunk is a coffin with a mattress. Sam sleeps the way prisoners sleep — hard, shallow, one ear open for boots.\\n\\nHe does not dream of the docking ring.",
      next: "p2s3_infect_1"
    },

    p2s3_infect_1: {
      chars: {
        center: { id: "dockworker", sprite: "before", focus: true }
      },
      saveLabel: "Dock · Unseen",
      bg: "outpost7",
      location: "Sam’s craft · Night",
      clearChars: true,
      fx: "vignette",
      speaker: "narration",
      text: "Under the portside fairing, something the size of a finger moves like a thought with legs — glossy, jointed, tasting metal for warmth.\\n\\nIt finds a micro-tear at the worker’s hip seam. Chitin tips pry the fabric open with wet little clicks. He swears, swats, feels only a cold tickle sliding up the inside of the suit. Sweat makes the climb easy. Past the belt. Past the navel. Toward the open collar where skin is bare and the pulse is loud.",
      next: "p2s3_infect_2"
    },
    p2s3_infect_2: {
      chars: {
        center: { id: "dockworker", sprite: "before", focus: true }
      },
      speaker: "narration",
      text: "At his mouth it pauses — salt, oil, the iron of a cut lip — then forces the hinge of his jaw.\\n\\nHe gags hard. Fingers claw his own throat. The creature is already past the tongue, past the soft palate, a segmented rush that bruises the esophagus from the inside. His knees hit the deck. Spit ropes dark from his chin. For a few ugly seconds he is only the sound of a man trying to vomit something that will not come back up.\\n\\nThen the thrashing inside him stops. He goes slack against the landing strut, fuel line still hooked, pupils blown wide under flickering ring light.",
      next: "p2s3_infect_3"
    },
    p2s3_infect_3: {
      chars: {
        center: { id: "dockworker", sprite: "infected", focus: true }
      },
      speaker: "narration",
      text: "An hour later he wakes.\\n\\nHis eyes are matte black — no iris edge, no human wetness, only void drinking the dock lamps. When he stands, the motion is almost correct. Almost. Something ticks under the skin along his jaw. His cock is half-hard for no reason he could name, body running fever-hot, every nerve tuned toward the nearest open warmth.\\n\\nHe goes home.",
      effects: { flags: { organismOutbreak: true } },
      next: "p2s3_infect_4"
    },
    p2s3_infect_4: {
      chars: {
        left: { id: "dockworker", sprite: "infected", focus: false },
        center: { id: "dockwife", sprite: "before", focus: true }
      },
      bg: "outpost7Pod",
      location: "Habitat ring · Worker’s pod",
      speaker: "narration",
      text: "His wife is half-asleep in the narrow bed, used to fuel-stink and late returns. She murmurs his name. He does not answer with words.\\n\\nHe climbs over her. Mouth hard enough to bruise. Tongue pushing deep as if hunting the same path the thing took in him. She makes a sound of protest that softens when his hands yank her sleep shirt up and his cock — rigid, fever-slick — grinds against her bare thigh.\\n\\n“Hey— wait—”\\n\\nHe does not wait. He spreads her with a knee and shoves in to the hilt in one wet thrust that punches the air from her lungs. The bedframe knocks the bulkhead. He fucks her with a single-minded rhythm, hips snapping, breath clicking faintly under the human panting — as if two engines share one throat. She clutches his shoulders, half fighting, half answering the sudden animal heat. When she comes it is startled and sharp, cunt clenching around him.\\n\\nHe follows buried deep, spilling in thick pulses that feel heavier than seed. With that heat something cold blooms behind her navel and climbs. She goes still. Her sclera inks outward from the edges. The soft sound in her throat acquires a second, drier layer — chitin learning her voice.",
      next: "p2s3_infect_4b"
    },
    p2s3_infect_4b: {
      chars: {
        center: { id: "dockwife", sprite: "infected", focus: true }
      },
      speaker: "narration",
      text: "Her eyes finish going black. The dry second layer in her throat clicks once — soft, almost polite — and then she is already reaching for the hatch as if the next open body were a schedule she cannot miss.",
      next: "p2s3_infect_5"
    },
    p2s3_infect_5: {
      chars: {
        left: { id: "dockworker", sprite: "infected", focus: false },
        center: { id: "neighbor", sprite: "before", focus: true }
      },
      bg: "outpost7Neighbor",
      location: "Habitat ring · Neighbor pod",
      speaker: "narration",
      text: "He does not clean up. He does not rest.\\n\\nThree doors down he hits the entry plate hard enough to smear it. The neighbor cracks the hatch mid-irritation — tank top, bare feet — and he shoulders through, slamming her into the wall. Hand over her mouth. The other already under her waistband, fingers shoving fabric aside, finding her dry and working her wet with friction that does not care about consent.\\n\\nShe bites. He does not flinch. Black eyes hold her face while he turns her, bends her over the little fold-table, and forces his cock into her from behind in one brutal push that tears a cry out despite his palm.\\n\\nHe fucks her like a route being finished — deep, relentless, the wet slap of skin loud in the tiny pod. She sobs into his hand, body jolting, until pain blurs and her muscles lock around him in a helpless climax. He comes with a low layered sound, flooding her, hips pinned tight as the transfer completes.\\n\\nWhen he steps back she slides to the floor. A tremor runs under the skin of her stomach. Her eyes are already darkening. Between her thighs, seed and something darker slick the inside of her legs.",
      next: "p2s3_infect_5b"
    },
    p2s3_infect_5b: {
      chars: {
        center: { id: "neighbor", sprite: "infected", focus: true }
      },
      speaker: "narration",
      text: "She does not scream again. Black has taken the white of her eyes. Between her thighs the transfer still glistens. Somewhere down the ring, two other bodies are already learning the same hunger.",
      next: "p2s3_infect_6"
    },
    p2s3_infect_6: {
      chars: {
        left: { id: "dockwife", sprite: "infected", focus: false },
        center: { id: "neighbor", sprite: "infected", focus: true },
        right: { id: "dockworker", sprite: "infected", focus: false }
      },
      bg: "black",
      clearFx: true,
      speaker: "narration",
      text: "Sam sleeps through all of it.\\n\\nBy false dawn, three bodies on this rock are no longer only human — and he still only knows that his slate is on a crash couch.",
      next: "p2s3_morning_1"
    },

    p2s3_morning_1: {
      saveLabel: "Morning",
      bg: "outpost7Hall",
      location: "Outpost 7 · Commons",
      clearChars: true,
      chars: { center: { id: "ash", sprite: "serious", focus: true } },
      speaker: "narration",
      text: "Shift bells. Burnt protein. Near the wash niche: polished metal bolted up as a mirror.\\n\\nSam stops as if the floor moved.",
      next: "p2s3_morning_2"
    },
    p2s3_morning_2: {
      speaker: "narration",
      text: "Grey at the temples. Lines the inhibitor never narrated. Eyes that learned not to react.\\n\\nFifteen years looks back. He almost puts his fist through it.",
      effects: { flags: { sawOwnReflection: true } },
      next: "p2s3_morning_3"
    },
    p2s3_morning_3: {
      speaker: "sam",
      text: "…Hell.",
      next: "p2s3_morning_4"
    },
    p2s3_morning_4: {
      speaker: "narration",
      text: "He needs the slate — Kane’s partial dumps, vectors, anything that is not only in his head. The craft is still on the outer ring. He walks.",
      next: "p2s3_slate_1"
    }
  };
})();
