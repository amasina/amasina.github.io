/*
 * Amasina marketing copy (AR + HE), v4 "professional".
 * Plain menu language: what the dish is, how it is cooked, one sensory detail at most. No jokes.
 * Keys: sections use sections[].id and dishes use items[].id from menu-data.js.
 * "salads" has no entry under sections: its content is the offer block below.
 * red_word_* is the one word inside headline_* shown in brand red.
 * No prices or weights here: the page shows them from menu-data.js.
 * Facts the owner has not confirmed (grilled or not, what a "duo" holds) are left out on purpose.
 */
window.MARKETING = {
  cover: {
    headline_ar: "طعم يستاهل المشوار",
    headline_he: "טעם ששווה את הנסיעה",
    red_word_ar: "المشوار",
    red_word_he: "הנסיעה",
    sub_ar: "قطع لحمة مختارة، سمك وبحريات، وطاولة بتتعبّى سلطات. أماسينا، عين ماهل",
    sub_he: "נתחי בשר נבחרים, דגים ופירות ים, ושולחן שמתמלא בסלטים. אמסינה, עין מאהל"
  },

  chef: {
    /* owner's own text (2026-11-15), replaces the earlier "كلمتين من الشيف" block; no title */
    title_ar: "",
    title_he: "",
    text_ar: "مذاقنا على كل لسان، بخبرة السنين مع الشيف منصور حبيب الله، نقدم تجربة تذوق فريدة تبدأ من جودة المكونات حتى أشهى النكهات من مختلف الأصناف.",
    text_he: "הטעם שלנו על כל לשון. עם ניסיון של שנים לצד השף מנסור חביב אללה, אנחנו מציעים חוויית טעימה ייחודית, מאיכות חומרי הגלם ועד הטעמים הטובים ביותר, בכל סוגי המנות."
  },

  offer: {
    hook_ar: "الطاولة بتتعبّى سلطات",
    hook_he: "השולחן מתמלא בסלטים",
    sub_ar: "تشكيلة سلطات للطاولة، مع الطبق الرئيسي أو بدونه",
    sub_he: "מבחר סלטים לשולחן, עם מנה עיקרית או בלעדיה"
  },

  sections: {
    starters: {
      headline_ar: "بداية السهرة",
      headline_he: "פותחים את הערב",
      red_word_ar: "السهرة",
      red_word_he: "הערב",
      intro_ar: "أطباق صغيرة ساخنة للطاولة، قبل الطبق الرئيسي",
      intro_he: "מנות קטנות וחמות לשולחן, לפני העיקרית"
    },
    specials: {
      headline_ar: "اختيارات الشيف",
      headline_he: "הבחירות של השף",
      red_word_ar: "الشيف",
      red_word_he: "השף",
      intro_ar: "أطباق الشيف منصور من اللحم والبحر. موزة الخروف تُطلب مسبقًا",
      intro_he: "המנות של השף מנסור, מהבשר ומהים. מוזה טלה בהזמנה מראש"
    },
    meats: {
      headline_ar: "لحوم على النار",
      headline_he: "בשרים על האש",
      red_word_ar: "النار",
      red_word_he: "האש",
      intro_ar: "اختاروا القطعة والوزن، ودرجة الاستواء على ذوقكم",
      intro_he: "בוחרים נתח ומשקל, ומידת העשייה לפי הטעם שלכם"
    },
    fish: {
      headline_ar: "من البحر",
      headline_he: "ישר מהים",
      red_word_ar: "البحر",
      red_word_he: "מהים",
      intro_ar: "أسماك وثمار بحر، مقلية أو مطبوخة",
      intro_he: "דגים ופירות ים, מטוגנים או מבושלים"
    },
    drinks: {
      headline_ar: "مشروبات باردة",
      headline_he: "משקאות קרים",
      red_word_ar: "باردة",
      red_word_he: "קרים",
      intro_ar: "مشروبات غازية وعصير، وإبريق ليمونادا للطاولة",
      intro_he: "משקאות מוגזים, מיץ וקנקן לימונדה לשולחן"
    },
    world: {
      headline_ar: "أطباق من العالم",
      headline_he: "מנות מן העולם",
      red_word_ar: "العالم",
      red_word_he: "העולם",
      intro_ar: "نودلز بالشريمبس، فيتوتشيني ورافيولي",
      intro_he: "נודלס שרימפס, פטוצ'יני ורביולי"
    }
  },

  dishes: {
    /* starters */
    merguez: {
      desc_ar: "نقانق ميرجيز بتتبيلة حارّة قليلًا",
      desc_he: "נקניקיות מרגז בתיבול חריף קלות"
    },
    eggplant: {
      desc_ar: "باذنجان مشوي على النار، بنكهة مدخّنة",
      desc_he: "חציל צלוי על האש, בטעם מעושן"
    },
    stuffed_mushrooms: {
      desc_ar: "فطر محشي، يصل إلى الطاولة ساخنًا",
      desc_he: "פטריות ממולאות, מגיעות לשולחן חמות"
    },
    calamari_labneh: {
      desc_ar: "كلماري مقرمش يُقدَّم مع لبنة",
      desc_he: "קלמרי פריך, מוגש עם לבנה"
    },
    fried_cheese: {
      desc_ar: "جبنة مقلية، مقرمشة من الخارج وطريّة من الداخل",
      desc_he: "גבינה מטוגנת, פריכה מבחוץ ורכה מבפנים"
    },
    cheese_calamari_heads: {
      desc_ar: "جبنة مع رؤوس كلماري، طبق للمشاركة",
      desc_he: "גבינה עם ראשי קלמרי, מנה לחלוקה"
    },
    chips: {
      desc_ar: "بطاطا مقلية ذهبية ومقرمشة",
      desc_he: "צ'יפס זהוב ופריך"
    },

    /* specials */
    lamb_shank: {
      desc_ar: "موزة خروف مطهوّة ببطء حتى ينفصل اللحم عن العظم",
      desc_he: "מוזה טלה בבישול ארוך, עד שהבשר נפרד מהעצם"
    },
    fillet_foie_gras: {
      desc_ar: "فيليه بقري مع كبد إوز",
      desc_he: "פילה בקר עם כבד אווז"
    },
    chateaubriand_1kg: {
      desc_ar: "قطعة فيليه كاملة بوزن كيلوغرام، للمشاركة",
      desc_he: "נתח פילה שלם במשקל קילו, למנה משותפת"
    },
    entrecote_garlic_butter: {
      desc_ar: "أنتريكوت على الشواية، تعلوه زبدة بالثوم",
      desc_he: "אנטריקוט על הגריל, עם חמאת שום מעל"
    },
    fillet_garlic_butter: {
      desc_ar: "فيليه طريّ مع زبدة بالثوم",
      desc_he: "פילה רך עם חמאת שום"
    },
    tbone_garlic_butter: {
      desc_ar: "تي بون على العظم، مع زبدة بالثوم",
      desc_he: "טי-בון על העצם, עם חמאת שום"
    },
    duo_fillet: {
      desc_ar: "دويتو فيليه من مطبخ الشيف",
      desc_he: "דואט פילה מהמטבח של השף"
    },
    duo_entrecote: {
      desc_ar: "دويتو أنتريكوت من مطبخ الشيف",
      desc_he: "דואט אנטריקוט מהמטבח של השף"
    },
    duo_salmon_clams: {
      desc_ar: "سلمون وصدف في طبق واحد",
      desc_he: "סלמון וצדפים בצלחת אחת"
    },

    /* meats */
    mixed_grill: {
      desc_ar: "تشكيلة من لحوم الشواية، بالوزن",
      desc_he: "מבחר בשרים מהגריל, לפי משקל"
    },
    ribs: {
      desc_ar: "ريش مشوية على النار",
      desc_he: "צלעות על האש"
    },
    entrecote: {
      desc_ar: "أنتريكوت بعروق الدهن، يُشوى حتى تتحمّر قشرته",
      desc_he: "אנטריקוט עם שומן משויש, צלוי עד לקרום שחום"
    },
    fillet: {
      desc_ar: "أطرى قطعة في اللحم، تُشوى على الدرجة التي تختارونها",
      desc_he: "הנתח הרך ביותר, נצלה במידת העשייה שתבחרו"
    },
    kebab: {
      desc_ar: "لحم مفروم متبّل على أسياخ الشواية",
      desc_he: "בשר טחון מתובל על שיפודים, מהגריל"
    },
    chicken_breast: {
      desc_ar: "صدر دجاج على الشواية، خيار أخفّ",
      desc_he: "חזה עוף על הגריל, בחירה קלילה יותר"
    },
    pargit: {
      desc_ar: "برجيت على النار، طريّ ومليء بالعصارة",
      desc_he: "פרגית על האש, רכה ועסיסית"
    },

    /* fish and seafood */
    salmon: {
      desc_ar: "فيليه سلمون طريّ يتفتّت بالشوكة",
      desc_he: "פילה סלמון רך שמתפרק במזלג"
    },
    shrimp_fried: {
      desc_ar: "شريمبس مقلي ومقرمش",
      desc_he: "שרימפס מטוגן ופריך"
    },
    shrimp_cooked: {
      desc_ar: "شريمبس مطبوخ، لمن يفضّله غير مقلي",
      desc_he: "שרימפס מבושל, למי שמעדיף לא מטוגן"
    },
    calamari_fried: {
      desc_ar: "حلقات كلماري مقلية ومقرمشة",
      desc_he: "טבעות קלמרי מטוגנות ופריכות"
    },
    calamari_cooked: {
      desc_ar: "كلماري مطبوخ حتى يطرى",
      desc_he: "קלמרי מבושל עד שהוא רך"
    },
    half_calamari_half_shrimp: {
      desc_ar: "نصف كلماري ونصف شريمبس في طبق واحد",
      desc_he: "חצי קלמרי וחצי שרימפס בצלחת אחת"
    },
    denis: {
      desc_ar: "دنيس، سمك بحر بلحم أبيض طريّ",
      desc_he: "דניס, דג ים עם בשר לבן ועדין"
    },
    levrek: {
      desc_ar: "لبراك، سمك بطعم ناعم وخفيف",
      desc_he: "לברק, דג בטעם עדין וקליל"
    },
    clams: {
      desc_ar: "صدف بحري يُقدَّم ساخنًا",
      desc_he: "צדפים, מוגשים חמים"
    },
    seafood_mix: {
      desc_ar: "تشكيلة من ثمار البحر",
      desc_he: "מבחר פירות ים"
    },
    sea_fish: {
      desc_ar: "سمك بحر حسب المتوفّر اليوم، اسألوا النادل",
      desc_he: "דג ים לפי מה שיש היום, שאלו את המלצר"
    },

    /* pasta and noodles */
    shrimp_noodles: {
      desc_ar: "نودلز مع شريمبس على الطريقة الآسيوية",
      desc_he: "נודלס עם שרימפס בסגנון אסייתי"
    },
    fettuccine: {
      desc_ar: "فيتوتشيني، شرائط باستا عريضة تحمل الصلصة",
      desc_he: "פטוצ'יני, רצועות פסטה רחבות שסופגות את הרוטב"
    },
    ravioli: {
      desc_ar: "رافيولي محشوّة بالجبنة",
      desc_he: "רביולי ממולאים בגבינה"
    }
  },

  closing: {
    ar: "صحتين وعافية، ونتشرّف بزيارتكم مرة ثانية",
    he: "בתיאבון, נשמח לראות אתכם שוב"
  }
};
