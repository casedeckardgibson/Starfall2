/* STARFALL P1S2d — Vincent, blackmail & scene end */
(function () {
  "use strict";
  window.STARFALL_SCENES = window.STARFALL_SCENES || {};
  window.STARFALL_SCENES.p1s2d = {
    p1s2_vincent_gracie_1: {
      bg: "reception",
      location: "Rourke Reception Hall",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "party", focus: true },
        right: { id: "vincent", sprite: "normal", focus: false }
      },
      speaker: "vincent",
      text: "Gracie.",
      next: "p1s2_vincent_gracie_2"
    },
    p1s2_vincent_gracie_2: {
      speaker: "gracie",
      text: "Vincent.",
      next: "p1s2_vincent_gracie_3"
    },
    p1s2_vincent_gracie_3: {
      speaker: "vincent",
      text: "You look beautiful tonight.",
      next: "p1s2_vincent_gracie_4"
    },
    p1s2_vincent_gracie_4: {
      speaker: "gracie",
      text: "Thank you.",
      next: "p1s2_vincent_gracie_5"
    },
    p1s2_vincent_gracie_5: {
      speaker: "vincent",
      text: "Sam is a lucky man.",
      next: "p1s2_vincent_gracie_6"
    },
    p1s2_vincent_gracie_6: {
      speaker: "gracie",
      text: "I think we’re both lucky.",
      next: "p1s2_vincent_gracie_7"
    },
    p1s2_vincent_gracie_7: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "angry", focus: true },
        center: { id: "gracie", sprite: "party", focus: false }
      },
      text: "Do you?",
      next: "p1s2_vincent_gracie_8"
    },
    p1s2_vincent_gracie_8: {
      speaker: "gracie",
      text: "Yes.",
      next: "p1s2_vincent_gracie_9"
    },
    p1s2_vincent_gracie_9: {
      speaker: "vincent",
      text: "Even knowing what men like him become once power starts settling on their shoulders?",
      next: "p1s2_vincent_gracie_10"
    },
    p1s2_vincent_gracie_10: {
      speaker: "gracie",
      text: "What does that mean?",
      next: "p1s2_vincent_gracie_11"
    },
    p1s2_vincent_gracie_11: {
      speaker: "vincent",
      text: "Power changes people.",
      next: "p1s2_vincent_gracie_12"
    },
    p1s2_vincent_gracie_12: {
      speaker: "gracie",
      text: "Sam isn’t like that.",
      next: "p1s2_vincent_gracie_13"
    },
    p1s2_vincent_gracie_13: {
      speaker: "vincent",
      text: "You believe that.",
      next: "p1s2_vincent_gracie_14"
    },
    p1s2_vincent_gracie_14: {
      speaker: "gracie",
      text: "I know it.",
      next: "p1s2_vincent_threat_1"
    },
    p1s2_vincent_threat_1: {
      speaker: "vincent",
      text: "That’s what I envy most.\nYour faith in him.",
      next: "p1s2_vincent_threat_2"
    },
    p1s2_vincent_threat_2: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "evil", focus: true }
      },
      text: "Do you know what happens to young officers who embarrass the wrong people?",
      next: "p1s2_vincent_threat_3"
    },
    p1s2_vincent_threat_3: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "threatened", focus: true }
      },
      text: "Is that a threat?",
      next: "p1s2_vincent_threat_4"
    },
    p1s2_vincent_threat_4: {
      speaker: "vincent",
      text: "An observation.\nCareers like his depend entirely on the goodwill of men like Adrian.\nI could make things… difficult for him… or I could be convinced to assist his career.",
      next: "p1s2_gracie_choice4"
    },
    p1s2_gracie_choice4: {
      saveLabel: "Gracie’s response",
      speaker: "narration",
      text: "Vincent waits. The party noise feels far away.",
      choices: [
        {
          text: "Refuse him.",
          hint: "Gracie stands firm",
          next: "p1s2_g_refuse",
          effects: { romance: { gracie: 5 }, stats: { trust: 3 } }
        },
        {
          text: "Let doubt creep in.",
          hint: "Gracie Doubt +10",
          next: "p1s2_g_doubt",
          effects: { flags: { gracieDoubt: 10 } }
        }
      ]
    },
    p1s2_g_refuse: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "party2", focus: true }
      },
      text: "You can’t buy me.",
      next: "p1s2_g_refuse2"
    },
    p1s2_g_refuse2: {
      speaker: "vincent",
      text: "Everyone has a price.",
      next: "p1s2_g_refuse3"
    },
    p1s2_g_refuse3: {
      speaker: "gracie",
      text: "Then go find someone cheaper.",
      next: "p1s2_g_refuse4"
    },
    p1s2_g_refuse4: {
      speaker: "narration",
      text: "She turns and walks away without looking back.",
      next: "p1s2_blackmail_check"
    },
    p1s2_g_doubt: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "partysad", focus: true }
      },
      text: "What are you trying to tell me?",
      next: "p1s2_g_doubt2"
    },
    p1s2_g_doubt2: {
      speaker: "vincent",
      text: "That you don’t actually know what Sam is becoming.",
      next: "p1s2_g_doubt3"
    },
    p1s2_g_doubt3: {
      speaker: "gracie",
      text: "I know him.",
      next: "p1s2_g_doubt4"
    },
    p1s2_g_doubt4: {
      speaker: "vincent",
      text: "Do you?",
      next: "p1s2_g_doubt5"
    },
    p1s2_g_doubt5: {
      speaker: "narration",
      text: "He stares into her eyes deeply, measuring her...",
      next: "p1s2_blackmail_check"
    },
    p1s2_blackmail_check: {
      speaker: "narration",
      text: "Gracie looks at him feeling the weight of his gaze on her. Vincent’s hand is already moving toward her wrist.",
      nextFn: function (state) {
        // Vincent always tries. Faithful Sam stops the grab; affairs lead into blackmail.
        return "p1s2_blackmail_1";
      },
      next: "p1s2_blackmail_1"
    },
    p1s2_blackmail_1: {
      saveLabel: "Side gallery",
      bg: "lounge",
      location: "Reception · Side gallery",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "partylistening", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      speaker: "vincent",
      text: "Come with me now.",
      effects: { flags: { vincentBlackmail: true } },
      next: "p1s2_blackmail_2"
    },
    p1s2_blackmail_2: {
      speaker: "narration",
      text: "It is not a request.\n\nVincent’s fingers close around Gracie’s wrist. He turns toward the side gallery, already pulling her with him.",
      next: "p1s2_blackmail_grab",
      nextFn: function (state) {
        const f = state.flags || {};
        const unfaithful = !!(f.lenaAffair || f.lenaPartyAffair || f.isabellaAffair || f.natalieAffair);
        if (!unfaithful) return "p1s2_sam_intervene_1";
        return "p1s2_blackmail_grab";
      }
    },
    p1s2_blackmail_grab: {
      speaker: "narration",
      text: "He leads her into an empty lounge. The door closes, sealing them in. Gracie notices how powerful Vincent seems to her right now.\n\nHe produces a small data slate. The screen wakes — security camera footage: Sam and another woman together. The intimacy is clear.",
      next: "p1s2_blackmail_3"
    },

    // Faithful: Sam stops Vincent at the grab
    p1s2_sam_intervene_1: {
      saveLabel: "Intervention",
      bg: "lounge",
      location: "Reception · Side gallery",
      clearChars: true,
      chars: {
        left: { id: "sam", sprite: "serious", focus: true },
        center: { id: "gracie", sprite: "threatened", focus: false },
        right: { id: "vincent", sprite: "angry", focus: false }
      },
      speaker: "narration",
      text: "Sam is already moving.\n\nHis hand locks on Vincent’s shoulder hard enough to stop the turn. The grip is not polite.",
      effects: { flags: { vincentBlackmailStopped: true } },
      next: "p1s2_sam_intervene_2"
    },
    p1s2_sam_intervene_2: {
      speaker: "sam",
      text: "That’s enough.",
      next: "p1s2_sam_intervene_3"
    },
    p1s2_sam_intervene_3: {
      speaker: "narration",
      text: "Vincent freezes. For a second the polished smile tries to return — then fails.",
      next: "p1s2_sam_intervene_4"
    },
    p1s2_sam_intervene_4: {
      speaker: "vincent",
      chars: {
        right: { id: "vincent", sprite: "evil", focus: true },
        left: { id: "sam", sprite: "serious", focus: false },
        center: { id: "gracie", sprite: "party", focus: false }
      },
      text: "Careful, Page. You’re making a scene.",
      next: "p1s2_sam_intervene_5"
    },
    p1s2_sam_intervene_5: {
      speaker: "sam",
      text: "Good. Let them look. You’re done talking to her.",
      next: "p1s2_sam_intervene_6"
    },
    p1s2_sam_intervene_6: {
      speaker: "narration",
      text: "Vincent shrugs Sam’s hand off with a sharp twist. His eyes cut to Gracie once — measuring what was almost his — then he straightens his jacket.",
      next: "p1s2_sam_intervene_7"
    },
    p1s2_sam_intervene_7: {
      speaker: "vincent",
      text: "Enjoy the evening. Both of you.",
      next: "p1s2_sam_intervene_8"
    },
    p1s2_sam_intervene_8: {
      speaker: "narration",
      text: "He walks away into the reception light, shoulders tight, the sulk poorly hidden under practiced calm.",
      next: "p1s2_sam_intervene_9"
    },
    p1s2_sam_intervene_9: {
      chars: {
        left: { id: "sam", sprite: "uniform", focus: false },
        center: { id: "gracie", sprite: "sad", focus: true }
      },
      speaker: "gracie",
      text: "He was going to— I didn’t know what to do.",
      next: "p1s2_sam_intervene_10"
    },
    p1s2_sam_intervene_10: {
      speaker: "sam",
      text: "You don’t have to know. I’m here. We’re leaving.",
      next: "p1s2_sam_intervene_11"
    },
    p1s2_sam_intervene_11: {
      speaker: "narration",
      text: "He takes her hand — gently, the opposite of Vincent’s grip — and leads her out of the hall before the party can pretend nothing happened.",
      next: "p1s2_faithful_home_1"
    },
    p1s2_faithful_home_1: {
      saveLabel: "Home after the party",
      bg: "gracieApt",
      location: "Gracie’s Apartment · Night",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "normal", focus: true },
        left: { id: "sam", sprite: "uniform", focus: false }
      },
      speaker: "narration",
      text: "The apartment is quiet. The reception noise is gone. Gracie leans against the closed door and exhales like she has been holding her breath for an hour.",
      next: "p1s2_faithful_home_2"
    },
    p1s2_faithful_home_2: {
      speaker: "gracie",
      text: "Thank you. For not walking past.",
      next: "p1s2_faithful_home_3"
    },
    p1s2_faithful_home_3: {
      speaker: "sam",
      text: "I will never walk past that.",
      next: "p1s2_faithful_home_4"
    },
    p1s2_faithful_home_4: {
      speaker: "narration",
      text: "She crosses the room and kisses him — not hungry this time, not desperate. Sure. Present.",
      effects: { romance: { gracie: 12 }, stats: { integrity: 5, trust: 8 } },
      next: "p1s2_faithful_home_5"
    },
    p1s2_faithful_home_5: {
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true },
        left: { id: "sam", sprite: "aroused", focus: false }
      },
      speaker: "narration",
      text: "Clothes give way without ceremony. In the low light of her bedroom she pulls him down with her, legs wrapping around his hips, mouth at his throat.\n\nWhen he enters her she gasps his name — not as a question, as an anchor. They move together slowly at first, then with the need of two people who almost lost the night to someone else’s hands.\n\nShe comes with her face buried in his shoulder. Sam follows, holding her through it, the rest of the sector locked outside the door.",
      next: "p1s2_faithful_home_6"
    },
    p1s2_faithful_home_6: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "cute", focus: true }
      },
      text: "Stay. All night.",
      next: "p1s2_faithful_home_7"
    },
    p1s2_faithful_home_7: {
      speaker: "sam",
      text: "I’m not going anywhere.",
      next: "p1s2_end_conspiracy_bridge"
    },
    // Brief conspiracy beat still lands, then chapter success
    p1s2_end_conspiracy_bridge: {
      speaker: "narration",
      text: "Elsewhere in the thinning reception, other men are already choosing a different kind of loyalty.",
      next: "p1s2_end_faithful_1"
    },
    p1s2_blackmail_3: {
      speaker: "narration",
      text: "Gracie’s face drains of color.",
      chars: {
        center: { id: "gracie", sprite: "datapad", focus: true },
        right: { id: "vincent", sprite: "evil", focus: false }
      },
      next: "p1s2_blackmail_4"
    },
    p1s2_blackmail_4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "partylistening", focus: true }
      },
      text: "How did you—",
      next: "p1s2_blackmail_5"
    },
    p1s2_blackmail_5: {
      speaker: "vincent",
      text: "Does it matter?\nYour perfect boyfriend isn’t quite as perfect as you believed.\nI can make this disappear. Or I can make sure every person who matters in this sector sees it.",
      next: "p1s2_blackmail_6"
    },
    p1s2_blackmail_6: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "partyaroused", focus: true }
      },
      text: "Please don't! What do you want?",
      next: "p1s2_blackmail_7"
    },
    p1s2_blackmail_7: {
      speaker: "vincent",
      text: "I want you Gracie.\nI want to show you what could be yours...\nRefuse, and I ruin him. Accept… and this never leaves this room.",
      next: "p1s2_blackmail_8"
    },
    p1s2_blackmail_8: {
      speaker: "vincent",
      text: "Decide.",
      next: "p1s2_blackmail_choice"
    },
    p1s2_blackmail_choice: {
      speaker: "narration",
      text: "The data slate still glows on the table.",
      choices: [
        {
          text: "Refuse.",
          hint: "Gracie Integrity · Blackmail refused",
          next: "p1s2_bm_refuse",
          effects: { flags: { blackmailRefused: true }, romance: { gracie: 8 } }
        },
        {
          text: "Accept under duress.",
          hint: "Gracie compromised · Vincent influence",
          next: "p1s2_bm_accept",
          effects: {
            flags: {
              blackmailAccepted: true,
              gracieCompromised: true,
              gracieDoubt: 20
            }
          }
        }
      ]
    },
    p1s2_bm_refuse: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "party", focus: true }
      },
      text: "Go to hell you bastard.",
      next: "p1s2_bm_refuse2"
    },
    p1s2_bm_refuse2: {
      speaker: "narration",
      text: "She turns and walks out. Vincent watches her go, expression unreadable. The data slate remains on the table.",
      next: "p1s2_end_route_check"
    },
    p1s2_bm_accept: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "partysad", focus: true }
      },
      text: "…just this one time.. Then you destroy the file, okay?.",
      next: "p1s2_bm_accept2"
    },
    p1s2_bm_accept2: {
      speaker: "vincent",
      text: "Of course. Just don't pretend this isn't something you've imagined too...",
      next: "p1s2_bm_accept3"
    },
    p1s2_bm_accept3: {
      speaker: "narration",
      chars: {
        center: { id: "gracie", sprite: "partyaroused", focus: true }
      },
      text: "He steps in, cups her face, and kisses her. Gracie didn't plan on kissing him back. She thought she could just endure it.\n\nBut her body begins to betray her.\n\nA heat rises in her crotch as she feels Vincent press himself against her, his hand massaging her wet clit. His other hand slides down from her cheek to around her throat. \n\n'He's going to dominate me' she anticipates with a forbidden sense of shame and pleasure.",
      next: "p1s2_bm_accept4"
    },
    p1s2_bm_accept4: {
      speaker: "gracie",
      chars: {
        center: { id: "gracie", sprite: "naughty", focus: true }
      },
      text: "…Unngh— Vincent— oh my God—",
      next: "p1s2_bm_accept5"
    },
    p1s2_bm_accept5: {
      speaker: "narration",
      chars: {
        center: { id: "gracie", sprite: "taken", focus: true }
      },
      text: "He feels her come undone around him and finishes inside her as she shudders with desperation and shame. They are bathed in the blue light from the glowing data-slate showing Sam's infidelity.",
      next: "p1s2_end_route_check"
    },

    // Endings,
    p1s2_end_route_check: {
      speaker: "narration",
      text: "The reception thins. The night settles into its true shape.",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.natalieAffair || f.isabellaAffair || f.lenaAffair || f.lenaPartyAffair) {
          return "p1s2_end_unfaithful_1";
        }
        return "p1s2_end_faithful_1";
      },
      next: "p1s2_end_faithful_1"
    },
    p1s2_end_faithful_1: {
      bg: "reception",
      clearChars: true,
      chars: {
        left: { id: "vincent", sprite: "evil", focus: false },
        center: { id: "elias", sprite: "uncle", focus: true },
        right: { id: "marcus", sprite: "jealous", focus: false }
      },
      speaker: "elias",
      text: "You’ve been watching him all night.",
      next: "p1s2_end_faithful_2"
    },
    p1s2_end_faithful_2: {
      speaker: "vincent",
      text: "So have you.",
      next: "p1s2_end_faithful_3"
    },
    p1s2_end_faithful_3: {
      speaker: "elias",
      text: "Yes.",
      next: "p1s2_end_faithful_4"
    },
    p1s2_end_faithful_4: {
      speaker: "vincent",
      text: "Why?",
      next: "p1s2_end_faithful_5"
    },
    p1s2_end_faithful_5: {
      speaker: "elias",
      text: "Because I know what happens when men like Sam Page become powerful.",
      next: "p1s2_end_faithful_6"
    },
    p1s2_end_faithful_6: {
      speaker: "vincent",
      text: "You know something about him.",
      next: "p1s2_end_faithful_7"
    },
    p1s2_end_faithful_7: {
      speaker: "elias",
      text: "I know something about his family.",
      next: "p1s2_end_faithful_8"
    },
    p1s2_end_faithful_8: {
      speaker: "narration",
      text: "Marcus Vey appears in the doorway, still wearing the faint shadow of the Ardent Horizon.",
      next: "p1s2_end_faithful_9"
    },
    p1s2_end_faithful_9: {
      speaker: "marcus",
      chars: {
        right: { id: "marcus", sprite: "evil", focus: true },
        center: { id: "elias", sprite: "uncle", focus: false },
        left: { id: "vincent", sprite: "evil", focus: false }
      },
      text: "I know something about him too.",
      next: "p1s2_end_faithful_10"
    },
    p1s2_end_faithful_10: {
      speaker: "vincent",
      text: "You were on the Ardent Horizon.",
      next: "p1s2_end_faithful_11"
    },
    p1s2_end_faithful_11: {
      speaker: "marcus",
      text: "I was there.",
      next: "p1s2_end_faithful_12"
    },
    p1s2_end_faithful_12: {
      speaker: "elias",
      text: "And?",
      next: "p1s2_end_faithful_13"
    },
    p1s2_end_faithful_13: {
      speaker: "narration",
      text: "Marcus looks back toward the thinning crowd. Sam is laughing at something Gracie said—happy, unguarded, completely unaware.",
      next: "p1s2_end_faithful_14"
    },
    p1s2_end_faithful_14: {
      speaker: "marcus",
      text: "He isn’t what everyone thinks he is. And he saw more of the Horizon’s true cargo than is safe for a man who still believes in clean hands.",
      next: "p1s2_end_faithful_15"
    },
    p1s2_end_faithful_15: {
      speaker: "vincent",
      text: "Can you prove it?",
      next: "p1s2_end_faithful_16"
    },
    p1s2_end_faithful_16: {
      speaker: "marcus",
      text: "I can give you enough to start looking.",
      next: "p1s2_end_faithful_17"
    },
    p1s2_end_faithful_17: {
      speaker: "elias",
      text: "Then let’s find somewhere private.",
      next: "p1s2_end_faithful_18"
    },
    p1s2_end_faithful_18: {
      speaker: "narration",
      text: "The three men leave together.",
      next: "p1s2_end_card"
    },

    p1s2_end_unfaithful_1: {
      bg: "gracieApt",
      location: "Home · After the party",
      clearChars: true,
      chars: {
        center: { id: "gracie", sprite: "cry", focus: true },
        left: { id: "sam", sprite: "serious", focus: false }
      },
      speaker: "narration",
      text: "The party ends.\n\nSam returns home alone.\n\nGracie is waiting in the low light. She is holding a data file. Her eyes are red-rimmed.",
      next: "p1s2_end_unfaithful_2"
    },
    p1s2_end_unfaithful_2: {
      speaker: "sam",
      text: "Gracie?",
      next: "p1s2_end_unfaithful_3"
    },
    p1s2_end_unfaithful_3: {
      speaker: "gracie",
      text: "How could you do this to me?!",
      next: "p1s2_end_unfaithful_4"
    },
    p1s2_end_unfaithful_4: {
      speaker: "narration",
      text: "Sam freezes.",
      next: "p1s2_end_unfaithful_5"
    },
    p1s2_end_unfaithful_5: {
      speaker: "gracie",
      text: "Why?",
      next: "p1s2_end_unfaithful_6"
    },
    p1s2_end_unfaithful_6: {
      speaker: "narration",
      text: "Silence.",
      next: "p1s2_end_unfaithful_7"
    },
    p1s2_end_unfaithful_7: {
      speaker: "gracie",
      text: "Tell me I misunderstood.",
      next: "p1s2_end_unfaithful_8"
    },
    p1s2_end_unfaithful_8: {
      speaker: "narration",
      text: "Sam cannot speak.\n\nHer face crumples.",
      next: "p1s2_end_unfaithful_9"
    },
    p1s2_end_unfaithful_9: {
      speaker: "gracie",
      text: "I trusted you.",
      next: "p1s2_end_unfaithful_10"
    },
    p1s2_end_unfaithful_10: {
      speaker: "sam",
      text: "Gracie—",
      next: "p1s2_end_unfaithful_11"
    },
    p1s2_end_unfaithful_11: {
      speaker: "gracie",
      text: "No.\nDon’t.",
      next: "p1s2_end_unfaithful_12"
    },
    p1s2_end_unfaithful_12: {
      speaker: "narration",
      text: "Sam had spent his life believing that doing the right thing would protect the people he loved. But he didn't realize he was becoming someone else when temptation came knocking.\n\nHe had never considered that he might be the one who hurt them.",
      next: "p1s2_go_route"
    },
    p1s2_go_route: {
      speaker: "narration",
      text: "What follows is no longer a chapter. It is a consequence.",
      nextFn: function (state) {
        const f = state.flags || {};
        if (f.natalieAffair) return "p1s2_go_natalie_1";
        if (f.isabellaAffair) return "p1s2_go_isabella_1";
        if (f.lenaAffair || f.lenaPartyAffair) return "p1s2_go_lena_1";
        return "p1s2_go_isabella_1";
      },
      next: "p1s2_go_lena_1"
    },
    // ---- Game Over: Lena path ----
    p1s2_go_lena_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Sam and Lena’s affair continues after Gracie leaves him. The Company finds out about the unauthorized relationship and terminates their employment. Sam takes a job with a small freight company with unreliable ships. Gracie married Vincent shortly after.\n\nA few months later the hull of Sam’s ship is breached and he is sucked into the vacuum of space. His father dies the same year.",
      next: "p1s2_go_lena_card"
    },
    p1s2_go_lena_card: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "— GAME OVER —",
      ending: {
        type: "gameover",
        path: "lena",
        warpDecision: "lena_quarters",
        title: "Game Over — The Captain’s Door",
        image: "assets/characters/sam_gameover3.png",
        body: "Sam and Lena’s affair continues after Gracie leaves him. The Company finds out about the unauthorized relationship and terminates their employment. Sam takes a job with a small freight company with unreliable ships. Gracie married Vincent shortly after.\n\nA few months later the hull of Sam’s ship is breached and he is sucked into the vacuum of space. His father dies the same year.",
        epigraph: "Some doors, once opened, do not lead home."
      }
    },

    // ---- Game Over: Isabella path ----
    p1s2_go_isabella_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Isabella fucked Sam one other time, but the rush wasn’t there for her anymore after he and Gracie split up. The fling lasted less than two orbits. Sam never recovered personally or professionally from betraying Gracie for the short-term gratification of Isabella.\n\nHis work suffered and became mediocre. Without a relationship, he passed the time getting into Braindancer-VR to numb the pain and meaninglessness of his life…",
      next: "p1s2_go_isabella_card"
    },
    p1s2_go_isabella_card: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "— GAME OVER —",
      ending: {
        type: "gameover",
        path: "isabella",
        warpDecision: "isabella",
        title: "Game Over — Less Than Two Orbits",
        image: "assets/characters/sam_gameover1.png",
        body: "Isabella fucked Sam one other time, but the rush wasn’t there for her anymore after he and Gracie split up. The fling lasted less than two orbits. Sam never recovered personally or professionally from betraying Gracie for the short-term gratification of Isabella.\n\nHis work suffered and became mediocre. Without a relationship, he passed the time getting into Braindancer-VR to numb the pain and meaninglessness of his life…",
        epigraph: "Some hungers only hollow you."
      }
    },

    // ---- Game Over: Natalie path ----
    p1s2_go_natalie_1: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "Natalie successfully steals Sam away from Gracie. He’s addicted to her body and they attend wild parties together. Gracie moves in with Vincent a few months after.\n\nAt one party, Natalie gets absolutely trashed. A stranger who takes a liking to her slips a virus chip into Sam’s biochip slot to incapacitate him. The stranger takes advantage of Natalie in a private room. Meanwhile, Sam suffers a catastrophic neural system failure from the virus and dies. Overcome with guilt and grief, Natalie overdoses two weeks later.",
      next: "p1s2_go_natalie_card"
    },
    p1s2_go_natalie_card: {
      bg: "black",
      clearChars: true,
      speaker: "narration",
      text: "— GAME OVER —",
      ending: {
        type: "gameover",
        path: "natalie",
        warpDecision: "natalie_line",
        title: "Game Over — Virus in the Slot",
        image: "assets/characters/sam_gameover2.png",
        body: "Natalie successfully steals Sam away from Gracie. He’s addicted to her body and they attend wild parties together. Gracie moves in with Vincent a few months after.\n\nAt one party, Natalie gets absolutely trashed. A stranger who takes a liking to her slips a virus chip into Sam’s biochip slot to incapacitate him. The stranger takes advantage of Natalie in a private room. Meanwhile, Sam suffers a catastrophic neural system failure from the virus and dies. Overcome with guilt and grief, Natalie overdoses two weeks later.",
        epigraph: "The brightest rooms can still kill you."
      }
    },

    p1s2_end_card: {
      saveLabel: "End of Scene 2",
      bg: "black",
      location: "—",
      clearChars: true,
      hideContainment: true,
      clearFx: true,
      hideCg: true,
      speaker: "narration",
      text: "— End of Scene 2 —\n\nHome, Love, and the Past.",
      next: "p1s2_recap_1"
    },
    p1s2_recap_1: {
      speaker: "narration",
      text: "Earth. Sponsorship. Family ghosts. Gracie. Vincent’s hand reaching for what wasn’t his.\n\nThe reception is over. The men who want Sam broken have already chosen each other.",
      next: "p1s2_recap_2"
    },
    p1s2_recap_2: {
      speaker: "narration",
      text: "What comes next will look like a gift: promotion, a ring, a handler who already knows his name.\n\nEverything Sam wants is about to be placed on the table.",
      next: "p1s2_recap_3"
    },
    p1s2_recap_3: {
      speaker: "narration",
      text: "The golden age still has a little time left.\n\nThe people who want to end it have already found each other.",
      next: "p1s2_to_s3"
    },
    p1s2_to_s3: {
      speaker: "narration",
      text: "Two weeks later, Helios HQ lights the orbital suite like a promise.\n\nScene 3 begins.",
      next: "p1s3_open"
    }
  };
})();