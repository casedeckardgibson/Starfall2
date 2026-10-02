/* STARFALL P1S1d — Branch (Lena/Marcus) & final crisis */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s1d = {
    crisis_return_1: {
      bg: "bridgeDanger",
      location: "Ardent Horizon · Command Bridge",
      flashback: false,
      alert: true,
      containment: 18,
      clearChars: true,
      chars: {
        center: { id: "lena", sprite: "shocked", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      speaker: "system",
      text: "CONTAINMENT: 18%.",
      next: "crisis_return_2"
    },
    crisis_return_2: {
      speaker: "engineer",
      text: "Captain — we’re inside two minutes of detonation if this curve doesn’t break. Not structural loss. Detonation. Everyone on this freighter.",
      next: "crisis_return_3"
    },
    crisis_return_3: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "shocked", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      text: "Then we don’t give it two minutes. We spend whatever we have left on a fix, not on staring at the percentage.",
      next: "route_check"
    },

    route_check: {
      speaker: "narration",
      text: "The ship holds its breath. Somewhere in the last hours before the alarms, another story was already writing itself into the present.",
      nextFn: function (state) {
        if ((state.romance.lena || 0) >= 20 && state.flags.lenaRomanceOpen && !state.flags.lenaRomanceClosed) {
          return "lena_quarters_1";
        }
        return "marcus_sabotage_1";
      },
      next: "marcus_sabotage_1"
    },

    lena_quarters_1: {
      saveLabel: "Captain's quarters",
      bg: "quarters",
      location: "Ardent Horizon · Captain's Quarters · Late night",
      alert: false,
      flashback: true,
      clearChars: true,
      chars: {
        center: { id: "lena", sprite: "quarters", focus: true }
      },
      speaker: "narration",
      text: "Hours earlier. Before the alarms. Before anyone on the bridge will learn how thin the margin really is.\n\nSam’s communicator buzzes once against his palm — private channel, no subject line.",
      next: "lena_quarters_2"
    },
    lena_quarters_2: {
      speaker: "system",
      text: "LENA — PRIVATE CHANNEL\n\nMy quarters.\nIf you’re going to come, come now.\nIf not, don’t come at all.",
      next: "lena_quarters_3"
    },
    lena_quarters_3: {
      speaker: "narration",
      text: "He reads it twice — not for clarity. Three weeks of careful distance sit behind the message: corridors avoided, briefings kept professional, the memory of steam and a fallen towel he has been trying not to revisit.\n\nHis thumb hangs over a safe reply. He puts the device away and walks.",
      next: "lena_quarters_4"
    },
    lena_quarters_4: {
      speaker: "narration",
      text: "02:13, ship time.\n\nThe door opens before he can knock. Lena stands barefoot in a loose shirt, hair down. Without the uniform she looks less like a captain and more like the woman who, three weeks ago, asked him a question he has not stopped hearing.",
      next: "lena_quarters_5"
    },
    lena_quarters_5: {
      speaker: "lena",
      text: "You came.",
      next: "lena_quarters_6"
    },
    lena_quarters_6: {
      speaker: "sam",
      chars: {
        left: { id: "sam", sprite: "uniform", focus: true },
        center: { id: "lena", sprite: "quarters", focus: false }
      },
      text: "I told myself I was going to pretend I never saw this.",
      next: "lena_quarters_7"
    },
    lena_quarters_7: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "quarters", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "I told myself the same thing when I typed it. Clearly we are both terrible at orders that matter.\n\nYou can still leave. No note in anyone’s file. We can go back to pretending the showers never happened.",
      next: "lena_quarters_8"
    },
    lena_quarters_8: {
      speaker: "narration",
      text: "She steps aside — an opening, not a command. Sam crosses the threshold. The door seals with a soft hydraulic sigh.",
      next: "lena_quarters_9"
    },
    lena_quarters_9: {
      speaker: "sam",
      text: "Why tonight?",
      next: "lena_quarters_10"
    },
    lena_quarters_10: {
      speaker: "lena",
      text: "Because three weeks of acting like nothing shifted has been exhausting. Because I keep catching myself watching you on the bridge for reasons that have nothing to do with your duty roster.\n\nYou looked at me in that corridor like a man who already knew the answer and hated himself for it. I have been living with that look ever since.",
      next: "lena_quarters_11"
    },
    lena_quarters_11: {
      speaker: "narration",
      text: "She closes the last of the space between them. Close enough that he can smell soap on her skin — the same clean heat he remembers from the steam outside the showers.\n\nHer hand settles against his chest, steadying, then slides lower along the front of his uniform with a deliberation that leaves no room to misread it. She does not look away.",
      next: "lena_quarters_12"
    },
    lena_quarters_12: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "quarters2", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      text: "I keep telling myself I am your captain and that should be the end of the story. It has not been the end of anything.\n\nAnd your desire seems to be growing — right about where I’m touching. Unless you want to blame the uniform. I would almost respect the attempt.",
      next: "lena_quarters_13"
    },
    lena_quarters_13: {
      speaker: "sam",
      text: "That is not the uniform.",
      next: "lena_quarters_14"
    },
    lena_quarters_14: {
      speaker: "lena",
      text: "I know.",
      next: "lena_kiss_choice"
    },

    lena_kiss_choice: {
      decision: "lena_quarters",
      bg: "quarters",
      location: "Ardent Horizon · Captain’s Quarters",
      flashback: true,
      alert: false,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "lena", sprite: "quarters", focus: true }
      },
      saveLabel: "The kiss",
      speaker: "narration",
      text: "This is the line. Everything after it will be a different kind of truth.",
      choices: [
        {
          text: "Kiss her back.",
          hint: "Lena Romance + · Integrity − · Affair flag",
          next: "lena_kiss_yes",
          effects: {
            romance: { lena: 18 },
            stats: { integrity: -12 },
            flags: { lenaAffair: true }
          }
        },
        {
          text: "Stop her. Hold the line.",
          hint: "Integrity + · Lena Romance closed",
          next: "lena_kiss_no",
          effects: {
            stats: { integrity: 8 },
            romance: { lena: 3 },
            flags: { lenaRomanceClosed: true }
          }
        }
      ]
    },

    lena_kiss_yes: {
      chars: {
        left: { id: "sam", sprite: "aroused", focus: false },
        center: { id: "lena", sprite: "quarters2", focus: true }
      },
      speaker: "narration",
      text: "He does not answer with words.\n\nThe kiss has none of the caution of the corridor three weeks ago. Sam pulls her against him; Lena’s legs come up around his hips as he carries her the few steps to the bed. Three weeks of held breath come undone in the dark of her cabin — mouth, hands, the soft sound she makes when there is finally nothing left between them.\n\nShe guides him to her, eyes open, sure. When he sinks into her it is with a sound that is half apology and half relief. For a while there is only the quiet ship, the viewport full of indifferent stars, and two people choosing the same impossible thing before the night has a chance to become something else.",
      next: "lena_after_1"
    },
    lena_after_1: {
      speaker: "narration",
      text: "Afterward the cabin is ordinary again: recycled air, a shirt on the floor, the soft tick of systems that do not care what just happened.",
      next: "lena_after_2"
    },
    lena_after_2: {
      chars: {
        center: { id: "lena", sprite: "quarters", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "lena",
      text: "When you walk out of here, we are still captain and XO. I will not make a speech about regret. I am not built for that kind of honesty in daylight.",
      next: "lena_after_3"
    },
    lena_after_3: {
      speaker: "sam",
      text: "Lena—",
      next: "lena_after_4"
    },
    lena_after_4: {
      speaker: "lena",
      text: "Go. Sleep if you can. Tomorrow the ship will ask for the version of us that still fits in a uniform.",
      next: "lena_after_5"
    },
    lena_after_5: {
      speaker: "narration",
      text: "He is still halfway to his own quarters when the night stops being ordinary.",
      next: "final_crisis_1"
    },

    lena_kiss_no: {
      speaker: "narration",
      text: "Sam turns his head and catches her wrist — gently, but firmly enough to stop the path of her hand. The almost-kiss lands against his cheek instead, close enough to feel what he is refusing.",
      next: "lena_kiss_no2"
    },
    lena_kiss_no2: {
      speaker: "sam",
      text: "I can’t. Not because I didn’t understand you in the showers. Not because the last three weeks have been simple. Because if I cross that line I will not be able to look at either of you the same way.",
      next: "lena_kiss_no3"
    },
    lena_kiss_no3: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "quarters", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      text: "That is a better answer than most men give me.\n\nIf you walk out of here, do not rewrite this into something smaller than it was. I meant the invitation. You meant the refusal. That has to be enough for both of us.",
      next: "lena_kiss_no4"
    },
    lena_kiss_no4: {
      speaker: "narration",
      text: "He nods once. At the door he almost turns back — and chooses not to make the moment crueler for either of them.\n\nHe is still halfway to his own quarters when the night stops being ordinary.",
      next: "final_crisis_1"
    },

    marcus_sabotage_1: {
      saveLabel: "Navigation deck",
      bg: "bridge",
      location: "Ardent Horizon · Navigation · Earlier that evening",
      alert: false,
      flashback: true,
      clearChars: true,
      chars: {
        center: { id: "marcus", sprite: "jealous", focus: true }
      },
      speaker: "narration",
      text: "Earlier that evening. Marcus Vey sits alone at a navigation console with Sam’s personnel file open like an old wound. He does not blink for a long time. When he does, it looks practiced — as if someone taught a machine the interval.",
      next: "marcus_sabotage_2"
    },
    marcus_sabotage_2: {
      speaker: "marcus",
      text: "Promoted again. Second-in-command. Captain’s favorite. Corporate golden boy.\n\nOf course.",
      next: "marcus_sabotage_3"
    },
    marcus_sabotage_3: {
      speaker: "narration",
      text: "A younger officer pauses in the aisle. “You okay, Marcus?”\n\nMarcus closes the file. “Fine.” The officer moves on. The smile he leaves behind does not reach his eyes.",
      next: "marcus_sabotage_4"
    },
    marcus_sabotage_4: {
      speaker: "marcus",
      chars: {
        center: { id: "marcus", sprite: "evil", focus: true }
      },
      text: "You know what bothers me? You’re not even trying. I spent twelve years earning what you got handed in two. You walked the secondary holds like they were just freight. You never asked what Helios sealed in those pods — what the probe brought back that doesn’t show on the public manifest.\n\nLet’s see how much everyone loves you when you’re responsible for forty dead crew.",
      next: "marcus_sabotage_5"
    },
    marcus_sabotage_5: {
      speaker: "system",
      text: "WARNING: Unauthorized access.",
      next: "marcus_sabotage_6"
    },
    marcus_sabotage_6: {
      speaker: "narration",
      text: "He enters the commands anyway — careful, practiced, fingers too steady for the rage in his voice. The work of someone who has been planning the shape of a disaster longer than the ship has been celebrating its XO. For a moment the console reflects his face: perfect, empty, patient.",
      next: "marcus_sabotage_7"
    },
    marcus_sabotage_7: {
      speaker: "system",
      text: "CASCADE FAILURE INITIATED.",
      effects: { flags: { marcusSabotageSeen: true } },
      next: "marcus_sabotage_8"
    },
    marcus_sabotage_8: {
      speaker: "marcus",
      text: "Good.\n\nAnd Sam? Don’t worry. I’ll make sure they know it was your mistake.",
      next: "marcus_sabotage_9"
    },
    marcus_sabotage_9: {
      speaker: "narration",
      text: "He walks away from the console. The cascade has already begun to look like an accident to anyone who will only ever read the aftermath.",
      next: "final_crisis_1"
    },

    final_crisis_1: {
      bg: "bridgeDanger",
      location: "Ardent Horizon · Command Bridge",
      flashback: false,
      alert: true,
      containment: 12,
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "lena", sprite: "duty", focus: false },
        right: { id: "engineer", sprite: "scared", focus: false }
      },
      speaker: "system",
      text: "CONTAINMENT: 12%. CRITICAL.",
      next: "final_crisis_2"
    },
    final_crisis_2: {
      speaker: "engineer",
      text: "We’re almost out of time!",
      next: "final_crisis_3"
    },
    final_crisis_3: {
      speaker: "narration",
      text: "Sam moves for the reactor access corridor. Lena catches his arm hard enough to stop a lesser man.",
      next: "final_crisis_4"
    },
    final_crisis_4: {
      speaker: "lena",
      chars: {
        center: { id: "lena", sprite: "orders", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      text: "Sam. Whatever happens down there — you do not get to invent a version of this where only you pay. You think you can save everyone. Someone has to try, I know. If you can’t — then I hope someone else tries for you.\n\nGo. And come back.",
      next: "final_crisis_5"
    },
    final_crisis_5: {
      speaker: "narration",
      text: "She lets him go.",
      next: "choice_final"
    },

    choice_final: {
      saveLabel: "The last decision",
      speaker: "narration",
      text: "Containment is nearly gone. Deck Seven still holds living crew. The reactor is a countdown.",
      choices: [
        {
          text: "Save the trapped crew first.",
          hint: "Integrity +10 · Compassion +10",
          next: "final_a",
          effects: { stats: { integrity: 10, compassion: 10 } }
        },
        {
          text: "Stabilize the reactor first.",
          hint: "Leadership +10 · Cunning +5",
          next: "final_b",
          effects: { stats: { leadership: 10, cunning: 5 } }
        },
        {
          text: "Override the reactor manually.",
          hint: "Cunning +10 · Integrity −5",
          next: "final_c",
          effects: { stats: { cunning: 10, integrity: -5 } }
        },
        {
          text: "Trust the crew. Call it together.",
          hint: "Trust +10 · Leadership +5",
          next: "final_d",
          effects: { stats: { trust: 10, leadership: 5 } }
        }
      ]
    },

    final_a: {
      speaker: "sam",
      text: "Open Deck Seven. Pull everyone who still has a pulse. I’ll take the reactor as soon as those signatures move — if the math goes soft, we get faster, not colder.",
      next: "final_a2"
    },
    final_a2: {
      speaker: "lena",
      text: "That will destabilize the core.",
      next: "final_a3"
    },
    final_a3: {
      speaker: "sam",
      text: "Then we earn the seconds. Do it.",
      next: "final_action"
    },

    final_b: {
      speaker: "sam",
      text: "Lock Seven for the window we need. If the reactor goes, there is no Deck Seven left to mourn. We stabilize first — then we spend every second we buy on them.",
      next: "final_action"
    },

    final_c: {
      speaker: "sam",
      text: "Give me manual control. Full override. I know what the board says about survival margins.",
      next: "final_c2"
    },
    final_c2: {
      speaker: "lena",
      text: "That’s suicide, Sam.",
      next: "final_c3"
    },
    final_c3: {
      speaker: "sam",
      text: "Probably. I wasn’t joking. Patch me in.",
      next: "final_action"
    },

    final_d: {
      speaker: "sam",
      text: "Everyone listens. We’ve got ninety seconds and we are scared — I am too. We do this together. Nobody gets left behind because someone decided they were more important than the person next to them. Move.",
      next: "final_action"
    },

    final_action: {
      saveLabel: "Into the reactor",
      bg: "reactor",
      location: "Ardent Horizon · Reactor Access",
      clearChars: true,
      chars: {
        center: { id: "sam", sprite: "serious", focus: true }
      },
      speaker: "narration",
      text: "Sam enters the reactor corridor.\n\nThe door closes behind him.\n\nHeat that is not only heat presses through the suit seals. A taste like copper and ozone — and under it, briefly, something organic and wrong, as if the ship’s sealed holds were breathing through the same bones. The instruments disagree with each other for a fraction of a second — as if the corridor cannot decide which second it is in.",
      effects: { flags: { reactorExposure: true, timeWarpUnlocked: true } },
      next: "final_action_2"
    },
    final_action_2: {
      speaker: "sam",
      text: "Okay.",
      next: "final_action_3"
    },
    final_action_3: {
      speaker: "narration",
      text: "Something under his skin answers the light of the core — not pain exactly. A pressure. A wrongness that feels almost like memory arriving before the moment that made it.",
      next: "final_action_4"
    },
    final_action_4: {
      speaker: "sam",
      text: "Let’s save these people.",
      next: "final_action_5"
    },
    final_action_5: {
      speaker: "narration",
      text: "He does not have language for what the chamber did.\n\nHe only knows the ship still needs him, and that the silence afterward is thinner than it should be.",
      next: "end_scene1"
    },
    end_scene1: {
      bg: "black",
      location: "—",
      clearChars: true,
      alert: false,
      flashback: false,
      hideContainment: true,
      speaker: "narration",
      text: "The crisis ends the way most of them do — not with glory, but with a thinner silence.\n\nSomewhere on Earth, people who love him are waiting.\n\nSo are the ones who do not.",
      next: "p1s2_open"
    },

    warp_awaken_1: {
      bg: "black",
      clearChars: true,
      hideContainment: true,
      speaker: "narration",
      text: "The end does not take.\n\nThere is a jolt behind the eyes — copper, ozone, the reactor corridor folding in on itself like a page turned by someone else’s hand.",
      next: "warp_awaken_2"
    },
    warp_awaken_2: {
      speaker: "sam",
      text: "…What—",
      next: "warp_awaken_3"
    },
    warp_awaken_3: {
      speaker: "narration",
      text: "He knows this light. Not from a report. From inside the suit, when the core looked at him and the instruments forgot which second they were in.",
      next: "warp_awaken_4"
    },
    warp_awaken_4: {
      speaker: "sam",
      text: "The chamber. It did something.",
      next: "warp_awaken_5"
    },
    warp_awaken_5: {
      speaker: "narration",
      text: "He cannot prove it. He can only feel the moment ahead of him as a road he has already walked — and the sick, bright chance that this time the steps might land differently.\n\nFree will. Or a longer chain.\n\nHe does not know which. He only knows he is not done.",
      next: "warp_awaken_6"
    },
    warp_awaken_6: {
      speaker: "narration",
      text: "The present rushes up to meet him.",
      nextFn: function (state) {
        return (state.flags && state.flags._warpTarget) || "choice_2";
      },
      next: "choice_2"
    }
  };
})();
