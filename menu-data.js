/*
 * Amasina menu data. EDIT PRICES HERE.
 * AR: لتغيير سعر: بدّلوا كلمة null برقم، مثلًا "250": 120  أو  "price": 45  (بدون علامة ₪). احفظوا الملف وارفعوه من جديد.
 * HE: לעדכון מחיר: החליפו את המילה null במספר, למשל "250": 120  או  "price": 45  (בלי סימן ₪). שמרו והעלו מחדש.
 * EN: to set a price replace null with a number, e.g. "250": 120  or  "price": 45  (no ₪ sign).
 * "250" = price for 250 g, "330" = price for 330 g. A photo appears when "photo" names a key of "photos".
 * Keep the commas and quotes exactly as they are.
 */
window.MENU_DATA = {
  "_meta": {
    "author": "Creative Lead (arbiter) — final copy, derived from proposals/menu_copy.json",
    "date": "2026-11-14",
    "status": "v2: copy and photos per proposals/v2/DECISIONS.md; open owner questions in DECISIONS.md section 4",
    "rules": [
      "Prices only as given by the owner; null = not given, never invent.",
      "Unweighted items use 'price'. Weighted items use 'prices': {'250': x, '330': y}.",
      "*phrase* = brand red; max one red phrase of <= 2 words per headline.",
      "Western digits in both languages. Currency sign after the number inside <bdi dir=ltr>.",
      "photo = key into 'photos' or null."
    ],
    "source_of_truth_for_site": "site/menu-data.js is generated once from this file; after launch the owner edits site/menu-data.js"
  },
  "img_dir": "assets/img/v2/",
  "marketing": {
    "brand": {
      "name_ar": "أماسينا",
      "name_he": "אמסינה",
      "name_latin": "Amasina",
      "slogan_ar": "مذاقنا على كل لسان",
      "slogan_he": "הטעם שלנו על כל לשון",
      "place_ar": "عين ماهل",
      "place_he": "עין מאהל",
      "chef_ar": "الشيف منصور",
      "chef_he": "השף מנסור"
    },
    "cover": {
      "headline_ar": "مطبخ *الشيف منصور*",
      "headline_he": "המטבח של *השף מנסור*",
      "subline_ar": "مطعم أماسينا، عين ماهل",
      "subline_he": "מסעדת אמסינה, עין מאהל",
      "scroll_hint_ar": "المنيو",
      "scroll_hint_he": "התפריט"
    },
    "table_block": {
      "kicker_ar": "",
      "kicker_he": "",
      "_placement": "below the photo, on black; no text over the photo"
    },
    "salad_offer": {
      "headline_ar": "سلطات *أماسينا*",
      "headline_he": "הסלטים של *אמסינה*",
      "subline_ar": "",
      "subline_he": "",
      "options": [
        {
          "price": 45,
          "label_ar": "عند طلب طبق رئيسي",
          "label_he": "בהזמנת מנה עיקרית",
          "unit_ar": "",
          "unit_he": ""
        },
        {
          "price": 70,
          "label_ar": "بدون طبق رئيسي",
          "label_he": "ללא מנה עיקרית",
          "unit_ar": "",
          "unit_he": ""
        }
      ],
      "currency": "₪",
      "pill_ar": "السعر للشخص",
      "pill_he": "המחיר לסועד",
      "gallery_title_ar": "من سلطاتنا",
      "gallery_title_he": "מהסלטים שלנו",
      "gallery": [
        "s40",
        "s38",
        "s42",
        "s41",
        "sw38",
        "sw08",
        "s06",
        "s08",
        "g03",
        "s04",
        "s39",
        "sw_cab",
        "sw_avo"
      ]
    },
    "footer": {
      "cta_ar": "",
      "cta_he": "",
      "handle": "@amasena_restaurant",
      "closing_ar": "مذاقنا على كل لسان",
      "closing_he": "הטעם שלנו על כל לשון",
      "thanks_ar": "صحتين وعافية",
      "thanks_he": "בתיאבון",
      "instagram_url": "https://www.instagram.com/amasena_restaurant/",
      "maps_url": "https://www.google.com/maps/search/?api=1&query=Amasina+restaurant+Ein+Mahel",
      "_maps_status": "search link only; owner confirms or supplies the exact Maps link"
    },
    "ui": {
      "preorder_ar": "بطلب مسبق",
      "preorder_he": "בהזמנה מראש",
      "weight_unit_ar": "غم",
      "weight_unit_he": "גרם",
      "weight_label_ar": "الوزن",
      "weight_label_he": "משקל",
      "currency": "₪",
      "price_note_ar": "اسألوا النادل عن الأسعار",
      "price_note_he": "שאלו את המלצר על המחירים",
      "weight_note_ar": "بالوزن 250 أو 330 غم",
      "weight_note_he": "במשקל 250 או 330 גרם",
      "price_aria_ar": "السعر: اسألوا النادل",
      "price_aria_he": "מחיר: שאלו את המלצר",
      "kg1_ar": "1 كغم",
      "kg1_he": "1 ק\"ג",
      "lang_ar_label": "عربي",
      "lang_he_label": "עברית",
      "menu_label_ar": "المنيو",
      "menu_label_he": "תפריט",
      "close_ar": "إغلاق",
      "close_he": "סגירה",
      "instagram_ar": "تابعونا على إنستغرام",
      "instagram_he": "עקבו אחרינו באינסטגרם",
      "location_ar": "الموقع",
      "location_he": "איך מגיעים",
      "nav_label_ar": "أقسام المنيو",
      "nav_label_he": "חלקי התפריט",
      "lang_label_ar": "اللغة",
      "lang_label_he": "שפה",
      "table_label_ar": "طاولة السلطات",
      "table_label_he": "שולחן הסלטים",
      "strip_title_ar": "من صحوننا",
      "strip_title_he": "מהצלחות שלנו"
    },
    "reels": {
      "title_ar": "من قلب المطبخ",
      "title_he": "ישר מהמטבח",
      "items": [
        {
          "file": "r8-chef-promo",
          "alt_ar": "الشيف منصور وأطباق أماسينا",
          "alt_he": "השף מנסור ומנות אמסינה"
        },
        {
          "file": "r1-chef-seafood",
          "alt_ar": "الشيف منصور يقدّم مقلاة بحريات ساخنة",
          "alt_he": "השף מנסור מגיש מחבת פירות ים רותחת"
        },
        {
          "file": "r5-grill",
          "alt_ar": "الشيف على الشواية والبخار طالع",
          "alt_he": "השף ליד הגריל, האדים עולים"
        },
        {
          "file": "r4-table",
          "alt_ar": "لحمة بتطش على الطاولة",
          "alt_he": "בשר רוחש על השולחן"
        },
        {
          "file": "r2-lamb",
          "alt_ar": "ريش خروف مشوية",
          "alt_he": "צלעות טלה צלויות"
        },
        {
          "file": "r3-steak",
          "alt_ar": "ستيك على مقلاة ساخنة",
          "alt_he": "סטייק על מחבת לוהטת"
        },
        {
          "file": "r6-table-salads",
          "alt_ar": "طاولة مليانة سلطات",
          "alt_he": "שולחן מלא בסלטים"
        },
        {
          "file": "r7-bread-salad",
          "alt_ar": "سلطة بسلة خبز مقرمشة",
          "alt_he": "סלט בסלסלת לחם פריכה"
        }
      ]
    }
  },
  "sections": [
    {
      "id": "salads",
      "chip_ar": "سلطات",
      "chip_he": "סלטים",
      "_note": "chip anchor only; content is marketing.salad_offer"
    },
    {
      "id": "starters",
      "title_ar": "مقبلات",
      "title_he": "מנות ראשונות",
      "headline_ar": "مقبلات",
      "headline_he": "מנות ראשונות",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "مقبلات",
      "chip_he": "ראשונות",
      "opener": {
        "type": "type"
      },
      "gallery": [
        "g19",
        "g21",
        "g36",
        "g24"
      ]
    },
    {
      "id": "specials",
      "title_ar": "أطباق الشيف",
      "title_he": "מנות השף",
      "headline_ar": "أطباق الشيف",
      "headline_he": "מנות השף",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "أطباق الشيف",
      "chip_he": "מנות השף",
      "opener": {
        "type": "type"
      }
    },
    {
      "id": "meats",
      "title_ar": "لحوم",
      "title_he": "בשרים",
      "headline_ar": "لحوم",
      "headline_he": "בשרים",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "لحوم",
      "chip_he": "בשרים",
      "opener": {
        "type": "photo",
        "ref": "p45"
      },
      "gallery": [
        "gn3",
        "gn2",
        "g16",
        "g18",
        "g12",
        "g33",
        "g23",
        "g31",
        "g47"
      ]
    },
    {
      "id": "fish",
      "title_ar": "أسماك وبحريات",
      "title_he": "דגים ופירות ים",
      "headline_ar": "أسماك وبحريات",
      "headline_he": "דגים ופירות ים",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "أسماك",
      "chip_he": "דגים",
      "opener": {
        "type": "type"
      },
      "gallery": [
        "gn4",
        "gn5",
        "gn6"
      ]
    },
    {
      "id": "world",
      "title_ar": "أطباق من العالم",
      "title_he": "מנות מן העולם",
      "headline_ar": "أطباق من العالم",
      "headline_he": "מנות מן העולם",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "من العالم",
      "chip_he": "מהעולם",
      "opener": {
        "type": "type"
      }
    },
    {
      "id": "drinks",
      "title_ar": "مشروبات",
      "title_he": "משקאות",
      "headline_ar": "مشروبات",
      "headline_he": "משקאות",
      "tagline_ar": "",
      "tagline_he": "",
      "chip_ar": "مشروبات",
      "chip_he": "משקאות",
      "opener": {
        "type": "type"
      }
    }
  ],
  "items": [
    {
      "id": "merguez",
      "section": "starters",
      "name_ar": "نقانق ميرجيز",
      "name_he": "נקניקיות מרגז",
      "desc_ar": "",
      "desc_he": "",
      "price": 45,
      "flags": [
        "name_uncertain"
      ],
      "owner_he": "סראסיו מרגז",
      "photo": null,
      "badges": []
    },
    {
      "id": "eggplant",
      "section": "starters",
      "name_ar": "باذنجان على النار",
      "name_he": "חציל על האש",
      "desc_ar": "",
      "desc_he": "",
      "price": 25,
      "flags": [
        "photo_24_unconfirmed"
      ],
      "photo": null,
      "badges": []
    },
    {
      "id": "stuffed_mushrooms",
      "section": "starters",
      "name_ar": "فطر محشي",
      "name_he": "פטריות ממולאות",
      "desc_ar": "",
      "desc_he": "",
      "price": 45,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "calamari_labneh",
      "section": "starters",
      "name_ar": "كلماري مع لبنة",
      "name_he": "קלמרי עם לבנה",
      "desc_ar": "",
      "desc_he": "",
      "price": 55,
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": []
    },
    {
      "id": "fried_cheese",
      "section": "starters",
      "name_ar": "جبنة مقلية",
      "name_he": "גבינה מטוגנת",
      "desc_ar": "",
      "desc_he": "",
      "price": 25,
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": []
    },
    {
      "id": "cheese_calamari_heads",
      "section": "starters",
      "name_ar": "لبنة مع رؤوس كلماري",
      "name_he": "לבנה עם ראשי קלמרי",
      "desc_ar": "",
      "desc_he": "",
      "price": 45,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "chips",
      "section": "starters",
      "name_ar": "تشيبس",
      "name_he": "צ'יפס",
      "desc_ar": "",
      "desc_he": "",
      "price": 20,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "lamb_shank",
      "section": "specials",
      "name_ar": "موزة خروف",
      "name_he": "מוזה טלה",
      "desc_ar": "",
      "desc_he": "",
      "price": 145,
      "flags": [],
      "owner_he": "מוזה טלה",
      "photo": null,
      "badges": [
        "preorder"
      ]
    },
    {
      "id": "fillet_foie_gras",
      "section": "specials",
      "name_ar": "فيليه مع كبد إوز",
      "name_he": "פילה עם כבד אווז",
      "desc_ar": "",
      "desc_he": "",
      "price": 180,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "chateaubriand_1kg",
      "section": "specials",
      "name_ar": "فيليه كامل",
      "name_he": "פילה שלם",
      "desc_ar": "",
      "desc_he": "",
      "price": 540,
      "flags": [
        "name_uncertain"
      ],
      "owner_he": "שרבול פילה 1 ק\"ג",
      "photo": null,
      "badges": [
        "kg1"
      ]
    },
    {
      "id": "entrecote_garlic_butter",
      "section": "specials",
      "name_ar": "أنتريكوت بالزبدة والثوم",
      "name_he": "אנטריקוט בחמאת שום",
      "desc_ar": "",
      "desc_he": "",
      "price": 245,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "fillet_garlic_butter",
      "section": "specials",
      "name_ar": "فيليه بالزبدة والثوم",
      "name_he": "פילה בחמאת שום",
      "desc_ar": "",
      "desc_he": "",
      "price": 245,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "tbone_garlic_butter",
      "section": "specials",
      "name_ar": "تي بون بالزبدة والثوم",
      "name_he": "טי בון בחמאת שום",
      "desc_ar": "",
      "desc_he": "",
      "price": 220,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "duo_fillet",
      "section": "specials",
      "name_ar": "دويت فيليه",
      "name_he": "דואט פילה",
      "desc_ar": "",
      "desc_he": "",
      "price": 200,
      "flags": [
        "meaning_unclear"
      ],
      "photo": null,
      "badges": []
    },
    {
      "id": "duo_entrecote",
      "section": "specials",
      "name_ar": "دويت أنتريكوت",
      "name_he": "דואט אנטריקוט",
      "desc_ar": "",
      "desc_he": "",
      "price": 200,
      "flags": [
        "meaning_unclear"
      ],
      "photo": null,
      "badges": []
    },
    {
      "id": "duo_salmon_clams",
      "section": "specials",
      "name_ar": "دويت سلمون وصدف",
      "name_he": "דואט סלמון וצדפים",
      "desc_ar": "",
      "desc_he": "",
      "price": 180,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "fillet_mokram",
      "section": "specials",
      "name_ar": "فيليه موكرام",
      "name_he": "פילה מוקרם",
      "desc_ar": "",
      "desc_he": "",
      "price": 130,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "king_shrimp",
      "section": "specials",
      "name_ar": "شريمبس الملك",
      "name_he": "שרימפס המלך",
      "desc_ar": "",
      "desc_he": "",
      "price": 130,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "chicken_mokram",
      "section": "specials",
      "name_ar": "صدر دجاج موكرام",
      "name_he": "חזה עוף מוקרם",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "chicken_garlic_lemon",
      "section": "specials",
      "name_ar": "صدر دجاج بالثوم والليمون",
      "name_he": "חזה עוף שום לימון",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "mixed_grill",
      "section": "meats",
      "name_ar": "مشكّل لحوم",
      "name_he": "מיקס בשרים",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "owner_he": "משקל (מעורב)",
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": []
    },
    {
      "id": "ribs",
      "section": "meats",
      "name_ar": "ريش",
      "name_he": "צלעות",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "name_uncertain",
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": [],
      "price": 140
    },
    {
      "id": "entrecote",
      "section": "meats",
      "name_ar": "أنتريكوت",
      "name_he": "אנטריקוט",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "prices": {
        "250": null,
        "330": null
      },
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": []
    },
    {
      "id": "fillet",
      "section": "meats",
      "name_ar": "أسياخ فيليه",
      "name_he": "שיפודי פילה",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 120
    },
    {
      "id": "kebab",
      "section": "meats",
      "name_ar": "كباب",
      "name_he": "קבב",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": [],
      "price": 95
    },
    {
      "id": "chicken_breast",
      "section": "meats",
      "name_ar": "صدر دجاج",
      "name_he": "חזה עוף",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "pargit",
      "section": "meats",
      "name_ar": "برجيت",
      "name_he": "פרגית",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "salmon",
      "section": "fish",
      "name_ar": "سلمون",
      "name_he": "סלמון",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "shrimp_fried",
      "section": "fish",
      "name_ar": "شريمبس مقلي",
      "name_he": "שרימפס מטוגן",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": [],
      "price": 95
    },
    {
      "id": "shrimp_cooked",
      "section": "fish",
      "name_ar": "شريمبس مطبوخ",
      "name_he": "שרימפס מבושל",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "sauce_unknown",
        "photo_needs_owner_ok"
      ],
      "photo": null,
      "desc_short_ar": "",
      "desc_short_he": "",
      "badges": [],
      "price": 95
    },
    {
      "id": "calamari_fried",
      "section": "fish",
      "name_ar": "كلماري مقلي",
      "name_he": "קלמרי מטוגן",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "calamari_cooked",
      "section": "fish",
      "name_ar": "كلماري مطبوخ",
      "name_he": "קלמרי מבושל",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "sauce_unknown"
      ],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "half_calamari_half_shrimp",
      "section": "fish",
      "name_ar": "نصف كلماري ونصف شريمبس",
      "name_he": "חצי קלמרי וחצי שרימפס",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "denis",
      "section": "fish",
      "name_ar": "دنيس",
      "name_he": "דניס",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "levrek",
      "section": "fish",
      "name_ar": "لبراك",
      "name_he": "לברק",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "clams",
      "section": "fish",
      "name_ar": "صدف",
      "name_he": "צדפים",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "photo": null,
      "badges": [],
      "price": 95
    },
    {
      "id": "seafood_mix",
      "section": "fish",
      "name_ar": "ميكس شريمبس وكلماري",
      "name_he": "מיקס שרימפס וקלמרי",
      "desc_ar": "",
      "desc_he": "",
      "flags": [],
      "owner_he": "מיקס",
      "photo": null,
      "badges": [],
      "price": 100
    },
    {
      "id": "sea_fish",
      "section": "fish",
      "name_ar": "سمك بحر",
      "name_he": "דג ים",
      "desc_ar": "",
      "desc_he": "",
      "flags": [
        "name_uncertain"
      ],
      "photo": null,
      "badges": [],
      "price": 25
    },
    {
      "id": "shrimp_noodles",
      "section": "world",
      "name_ar": "نودلز شريمبس",
      "name_he": "נודלס שרימפס",
      "desc_ar": "",
      "desc_he": "",
      "price": 95,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "fettuccine",
      "section": "world",
      "name_ar": "فيتوتشيني",
      "name_he": "פטוצ'יני",
      "desc_ar": "",
      "desc_he": "",
      "price": 95,
      "flags": [
        "sauce_unknown"
      ],
      "photo": null,
      "badges": []
    },
    {
      "id": "ravioli",
      "section": "world",
      "name_ar": "رافيولي جبنة",
      "name_he": "רביולי גבינה",
      "desc_ar": "",
      "desc_he": "",
      "price": 70,
      "flags": [
        "filling_unknown"
      ],
      "photo": null,
      "badges": []
    },
    {
      "id": "cola_small",
      "section": "drinks",
      "name_ar": "كولا صغير",
      "name_he": "קולה קטן",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "cola_large",
      "section": "drinks",
      "name_ar": "كولا كبير",
      "name_he": "קולה גדול",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "cola_zero",
      "section": "drinks",
      "name_ar": "كولا زيرو",
      "name_he": "קולה זירו",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "fanta",
      "section": "drinks",
      "name_ar": "فانتا",
      "name_he": "פאנטה",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "sprite",
      "section": "drinks",
      "name_ar": "سبرايت",
      "name_he": "ספרייט",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "soda",
      "section": "drinks",
      "name_ar": "صودا",
      "name_he": "סודה",
      "desc_ar": "",
      "desc_he": "",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "juice",
      "section": "drinks",
      "name_ar": "عصير",
      "name_he": "מיץ",
      "desc_ar": "اسألوا النادل عن الأنواع",
      "desc_he": "שאלו את המלצר על הטעמים",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    },
    {
      "id": "lemonade_jug",
      "section": "drinks",
      "name_ar": "إبريق ليمونادا",
      "name_he": "קנקן לימונדה",
      "desc_ar": "إبريق للطاولة كلها",
      "desc_he": "קנקן לכל השולחן",
      "price": null,
      "flags": [],
      "photo": null,
      "badges": []
    }
  ],
  "photos": {
    "cover": {
      "src_id": 28,
      "frame": "cover",
      "crop": [
        0.5,
        0.42,
        1
      ],
      "alt_ar": "الشيف منصور يحمل مقلاة لحم ساخنة مع بندورة وبصل",
      "alt_he": "השף מנסור מחזיק מחבת בשר לוהטת עם עגבנייה ובצל",
      "confidence": "H"
    },
    "table": {
      "src_id": 26,
      "frame": "table",
      "crop": [
        0.5,
        0.5,
        1
      ],
      "alt_ar": "طاولة عليها صحون سلطات",
      "alt_he": "שולחן עם צלחות סלטים",
      "confidence": "H"
    },
    "p21": {
      "src_id": 21,
      "frame": "card",
      "crop": [
        0.42,
        0.62,
        1.2
      ],
      "alt_ar": "كلماري مقلي مع صلصة بيضاء وبرتقالية",
      "alt_he": "קלמרי מטוגן עם רוטב לבן וכתום",
      "confidence": "M",
      "note": "owner: calamari_labneh or cheese_calamari_heads?"
    },
    "p19": {
      "src_id": 19,
      "frame": "card",
      "crop": [
        0.5,
        0.45,
        1.1
      ],
      "alt_ar": "مكعبات مقلية مع صلصة حمراء",
      "alt_he": "קוביות מטוגנות עם רוטב אדום",
      "confidence": "M",
      "note": "owner: is this fried cheese?"
    },
    "p23": {
      "src_id": 23,
      "frame": "card",
      "crop": [
        0.5,
        0.55,
        1.05
      ],
      "alt_ar": "قطعتا لحم بالعظم على لوح خشب",
      "alt_he": "שני נתחי בשר עם עצם על קרש עץ",
      "confidence": "M",
      "note": "owner: is this the mixed-by-weight board?"
    },
    "p31": {
      "src_id": 31,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1
      ],
      "alt_ar": "قطعة لحم كبيرة بالعظم فوق الشواية",
      "alt_he": "נתח בשר גדול עם עצם מעל הגריל",
      "confidence": "M",
      "note": "owner: lamb chops = צלעות?"
    },
    "p18": {
      "src_id": 18,
      "frame": "card",
      "crop": [
        0.45,
        0.62,
        1.15
      ],
      "alt_ar": "قطعتا ستيك مشويتان مع بندورة وبصل",
      "alt_he": "שני סטייקים צלויים עם עגבנייה ובצל",
      "confidence": "M"
    },
    "p12": {
      "src_id": 12,
      "frame": "card",
      "crop": [
        0.45,
        0.5,
        1.1
      ],
      "alt_ar": "أربع قطع لحم مستديرة مشوية مع بندورة وبصل",
      "alt_he": "ארבע חתיכות בשר עגולות צלויות עם עגבנייה ובצל",
      "confidence": "M"
    },
    "p22": {
      "src_id": 22,
      "frame": "card",
      "crop": [
        0.45,
        0.45,
        1.05
      ],
      "alt_ar": "شريمبس مقلي مع صلصة",
      "alt_he": "שרימפס מטוגן עם רוטב",
      "confidence": "H"
    },
    "p25": {
      "src_id": 25,
      "frame": "card",
      "crop": [
        0.5,
        0.48,
        1.1
      ],
      "alt_ar": "شريمبس بالصلصة",
      "alt_he": "שרימפס ברוטב",
      "confidence": "M",
      "note": "owner: #25 or #48 is the cooked shrimp?"
    },
    "p45": {
      "src_id": 45,
      "frame": "opener",
      "crop": [
        0.5,
        0.5,
        1
      ],
      "alt_ar": "لحم وفلفل أخضر على الشواية فوق النار",
      "alt_he": "בשר ופלפל ירוק על הגריל מעל האש",
      "confidence": "H"
    },
    "s00": {
      "src_id": 0,
      "frame": "card",
      "crop": [
        0.52,
        0.5,
        1.1
      ],
      "alt_ar": "سلطة مع خبز مقلي وطحينة ورمان",
      "alt_he": "סלט עם לחם מטוגן, טחינה ורימון",
      "confidence": "H",
      "caption_ar": "سلطة الراهب المشوية",
      "caption_he": "סלט ראהב על האש",
      "note": "name confirmed by the Instagram post (Arabic); Hebrew spelling to be confirmed by owner",
      "name_source": "Tasneem, marketing group 2026-11-15 16:48-17:01"
    },
    "s04": {
      "src_id": 4,
      "frame": "card",
      "crop": [
        0.55,
        0.5,
        1.3
      ],
      "alt_ar": "سلطة خضراء مع لوز في وعاء أسود",
      "alt_he": "סלט ירוק עם שקדים בקערה שחורה",
      "confidence": "H",
      "caption_ar": "شمير",
      "caption_he": "שמיר",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s02": {
      "src_id": 2,
      "frame": "card",
      "crop": [
        0.5,
        0.45,
        1.25
      ],
      "alt_ar": "كومة سلطة خضراء مع كاجو على صحن زجاجي",
      "alt_he": "סלט ירוק גבוה עם קשיו על מגש זכוכית",
      "confidence": "H",
      "caption_ar": "سلطة شمير",
      "caption_he": "סלט שמיר",
      "name_source": "Tasneem, marketing group 2026-11-15 16:48-17:01"
    },
    "s06": {
      "src_id": 6,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1.05
      ],
      "alt_ar": "تبولة على أوراق خس",
      "alt_he": "טאבולה על עלי חסה",
      "confidence": "H",
      "caption_ar": "تبولة أماسينا المميزة",
      "caption_he": "הטאבולה המיוחדת של אמסינה",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s08": {
      "src_id": 8,
      "frame": "card",
      "crop": [
        0.5,
        0.55,
        1.15
      ],
      "alt_ar": "سلطة بندورة شيري وجوز في سلة خبز مقلي",
      "alt_he": "סלט עגבניות שרי ואגוזי מלך בסלסלת לחם מטוגן",
      "confidence": "H",
      "caption_ar": "شيري حارّة",
      "caption_he": "שרי חריף",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s09": {
      "src_id": 9,
      "frame": "card",
      "crop": [
        0.5,
        0.62,
        1.15
      ],
      "alt_ar": "سلطة ملفوف وفلفل وجوز في وعاء أسود",
      "alt_he": "סלט כרוב, פלפל ואגוזי מלך בקערה שחורה",
      "confidence": "H"
    },
    "s40": {
      "src_id": 40,
      "frame": "card",
      "caption_ar": "سلطة الموسم",
      "caption_he": "סלט העונה",
      "alt_ar": "سلطة الموسم: سبانخ وتين وكاجو",
      "alt_he": "סלט העונה: תרד, תאנים וקשיו",
      "confidence": "H",
      "name_source": "restaurant marketing chat, 2026-11-15"
    },
    "s38": {
      "src_id": 38,
      "frame": "card",
      "caption_ar": "الحديقة البنفسجية",
      "caption_he": "הגינה הסגולה",
      "alt_ar": "سلطة الحديقة البنفسجية: ملفوف أحمر وفجل",
      "alt_he": "סלט הגינה הסגולה: כרוב סגול וצנונית",
      "confidence": "H",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s42": {
      "src_id": 42,
      "frame": "card",
      "caption_ar": "ملفوف مع الأناناس",
      "caption_he": "כרוב עם אננס",
      "alt_ar": "سلطة ملفوف مع شرائح أناناس",
      "alt_he": "סלט כרוב עם רצועות אננס",
      "confidence": "H",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s41": {
      "src_id": 41,
      "frame": "card",
      "caption_ar": "فتوش",
      "caption_he": "פטוש",
      "alt_ar": "فتوش مع جبنة مبشورة",
      "alt_he": "פטוש עם גבינה מגורדת",
      "confidence": "H",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "s39": {
      "src_id": 39,
      "frame": "card",
      "crop": [
        0.5,
        0.42,
        1.25
      ],
      "alt_ar": "سلطة خضراء مع تين ومكسرات",
      "alt_he": "סלט ירוק עם תאנה ואגוזים",
      "confidence": "H",
      "caption_ar": "سلطة مليون دولار",
      "caption_he": "סלט מיליון דולר",
      "name_source": "owner 2026-11-15"
    },
    "s11": {
      "src_id": 11,
      "frame": "card",
      "crop": [
        0.5,
        0.5,
        1
      ],
      "alt_ar": "سلطة خضار مع خبز مقلي وجبنة بيضاء وسماق",
      "alt_he": "סלט ירקות עם לחם מטוגן, גבינה לבנה וסומאק",
      "confidence": "H"
    },
    "g01": {
      "src_id": 1,
      "frame": "card",
      "alt_ar": "سلطة فواكه وخضار على طبق زجاجي",
      "alt_he": "סלט פירות וירקות בצלחת זכוכית",
      "confidence": "H",
      "use": "atmosphere",
      "caption_ar": "سلطة مليون دولار",
      "caption_he": "סלט מיליון דולר",
      "name_source": "Tasneem, marketing group 2026-11-15 16:48-17:01"
    },
    "g03": {
      "src_id": 3,
      "frame": "card",
      "alt_ar": "سلطة خضراء مع توت",
      "alt_he": "סלט ירוק עם פירות יער",
      "confidence": "H",
      "use": "atmosphere",
      "caption_ar": "جرجير",
      "caption_he": "רוקט",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "g05": {
      "src_id": 5,
      "frame": "card",
      "alt_ar": "سلطة خضراء مع خبز محمّص",
      "alt_he": "סלט ירוק עם קרוטונים",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g10": {
      "src_id": 10,
      "frame": "card",
      "alt_ar": "سلطة ملفوف مع مكسرات وجريب فروت",
      "alt_he": "סלט כרוב עם אגוזים ואשכולית",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g19": {
      "src_id": 19,
      "frame": "card",
      "alt_ar": "جبنة مقلية مع صلصة حمراء",
      "alt_he": "גבינה מטוגנת עם רוטב אדום",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g21": {
      "src_id": 21,
      "frame": "card",
      "alt_ar": "كلماري مقلي مع لبنة",
      "alt_he": "קלמרי מטוגן עם לבנה",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g36": {
      "src_id": 36,
      "frame": "card",
      "alt_ar": "طبق مقبلات مقلية مع لبنة",
      "alt_he": "מנת ראשונות מטוגנות עם לבנה",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g24": {
      "src_id": 24,
      "frame": "card",
      "alt_ar": "باذنجان بصلصة كريمية",
      "alt_he": "חציל ברוטב שמנת",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g16": {
      "src_id": 16,
      "frame": "card",
      "alt_ar": "شرائح لحم مشوية على الصحن",
      "alt_he": "נתחי בשר צלויים בצלחת",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g18": {
      "src_id": 18,
      "frame": "card",
      "alt_ar": "صحنا ستيك مشوي",
      "alt_he": "שתי צלחות סטייק צלוי",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g12": {
      "src_id": 12,
      "frame": "card",
      "alt_ar": "أقراص لحم مشوية",
      "alt_he": "קציצות בשר צלויות",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g33": {
      "src_id": 33,
      "frame": "card",
      "alt_ar": "لوح لحم مع شواية صغيرة وتوابل",
      "alt_he": "קרש בשר עם גריל קטן ותבלינים",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g23": {
      "src_id": 23,
      "frame": "card",
      "alt_ar": "لوح ريش مشوية مع شواية صغيرة",
      "alt_he": "קרש צלעות צלויות עם גריל קטן",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g31": {
      "src_id": 31,
      "frame": "card",
      "alt_ar": "ضلع لحم على الشواية",
      "alt_he": "צלע בשר על הגריל",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g47": {
      "src_id": 47,
      "frame": "card",
      "alt_ar": "لحم على النار",
      "alt_he": "בשר על האש",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g29": {
      "src_id": 29,
      "frame": "card",
      "alt_ar": "شريمبس مقلي على لوح",
      "alt_he": "שרימפס מטוגן על קרש",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g48": {
      "src_id": 48,
      "frame": "card",
      "alt_ar": "شريمبس وفطر بصلصة كريمية",
      "alt_he": "שרימפס ופטריות ברוטב שמנת",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g27": {
      "src_id": 27,
      "frame": "card",
      "alt_ar": "الشيف منصور على الشواية",
      "alt_he": "השף מנסור ליד הגריל",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g14": {
      "src_id": 14,
      "frame": "card",
      "alt_ar": "كبة مقلية مع صلصات",
      "alt_he": "קובה מטוגנת עם רטבים",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g13": {
      "src_id": 13,
      "frame": "card",
      "alt_ar": "دجاج مقرمش مع بطاطا",
      "alt_he": "עוף פריך עם צ'יפס",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g37": {
      "src_id": 37,
      "frame": "card",
      "alt_ar": "رولات مقلية ودجاج بالسمسم",
      "alt_he": "רולים מטוגנים ועוף בשומשום",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g15": {
      "src_id": 15,
      "frame": "card",
      "alt_ar": "لحم بصلصة الفطر",
      "alt_he": "בשר ברוטב פטריות",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g17": {
      "src_id": 17,
      "frame": "card",
      "alt_ar": "دجاج بصلصة الفطر والريحان",
      "alt_he": "עוף ברוטב פטריות ובזיליקום",
      "confidence": "H",
      "use": "atmosphere"
    },
    "g35": {
      "src_id": 35,
      "frame": "card",
      "alt_ar": "صحن بصلصة الفطر",
      "alt_he": "צלחת ברוטב פטריות",
      "confidence": "H",
      "use": "atmosphere"
    },
    "sw08": {
      "src_file": "work/wa_new/w08.jpg",
      "frame": "card",
      "alt_ar": "سلطة خضار مع زيتون بصحن عميق",
      "alt_he": "סלט ירקות עם זיתים בקערה עמוקה",
      "confidence": "H",
      "source": "marketing WhatsApp group, 2026-11-15",
      "caption_ar": "سلطة أماسينا الخاصة",
      "caption_he": "סלט אמסינה המיוחד",
      "name_source": "Tasneem, marketing group 2026-11-15 16:48-17:01"
    },
    "sw38": {
      "src_file": "work/wa_new/w38.jpg",
      "frame": "card",
      "alt_ar": "سلطة بسلة خبز مقرمشة مع رمان",
      "alt_he": "סלט בסלסלת לחם פריכה עם רימונים",
      "confidence": "H",
      "source": "marketing WhatsApp group, 2026-11-15",
      "caption_ar": "سلطة الراهب المشوية",
      "caption_he": "סלט ראהב על האש",
      "name_source": "Tasneem, marketing group 2026-11-15 16:48-17:01"
    },
    "d_cola_small": {
      "src_file": "stock/drinks/cola_small.jpg",
      "frame": "card",
      "caption_ar": "كولا صغير",
      "caption_he": "קולה קטן",
      "alt_ar": "كولا صغير",
      "alt_he": "קולה קטן",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_cola_large": {
      "src_file": "stock/drinks/cola_large.jpg",
      "frame": "card",
      "caption_ar": "كولا كبير",
      "caption_he": "קולה גדול",
      "alt_ar": "كولا كبير",
      "alt_he": "קולה גדול",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_cola_zero": {
      "src_file": "stock/drinks/cola_zero.jpg",
      "frame": "card",
      "caption_ar": "كولا زيرو",
      "caption_he": "קולה זירו",
      "alt_ar": "كولا زيرو",
      "alt_he": "קולה זירו",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_fanta": {
      "src_file": "stock/drinks/fanta.jpg",
      "frame": "card",
      "caption_ar": "فانتا",
      "caption_he": "פאנטה",
      "alt_ar": "فانتا",
      "alt_he": "פאנטה",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_sprite": {
      "src_file": "stock/drinks/sprite.jpg",
      "frame": "card",
      "caption_ar": "سبرايت",
      "caption_he": "ספרייט",
      "alt_ar": "سبرايت",
      "alt_he": "ספרייט",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_soda": {
      "src_file": "stock/drinks/soda.jpg",
      "frame": "card",
      "caption_ar": "صودا",
      "caption_he": "סודה",
      "alt_ar": "صودا",
      "alt_he": "סודה",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_juice": {
      "src_file": "stock/drinks/juice.jpg",
      "frame": "card",
      "caption_ar": "عصير",
      "caption_he": "מיץ",
      "alt_ar": "عصير",
      "alt_he": "מיץ",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "d_lemonade_jug": {
      "src_file": "stock/drinks/lemonade_jug.jpg",
      "frame": "card",
      "caption_ar": "إبريق ليمونادا",
      "caption_he": "קנקן לימונדה",
      "alt_ar": "إبريق ليمونادا",
      "alt_he": "קנקן לימונדה",
      "confidence": "H",
      "source": "Unsplash, free licence; see stock/SOURCES_drinks.txt",
      "use": "product illustration"
    },
    "sw_avo": {
      "src_file": "work/wa_new/avocado_f.png",
      "frame": "card",
      "caption_ar": "أفوكادو",
      "caption_he": "אבוקדו",
      "alt_ar": "سلطة أفوكادو مع شمندر",
      "alt_he": "סלט אבוקדו עם סלק",
      "confidence": "H",
      "source": "frame from the restaurant's video, marketing group 2026-11-15",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "sw_cab": {
      "src_file": "work/wa_new2/n7.jpg",
      "frame": "card",
      "caption_ar": "ملفوف صيني مع المكسرات",
      "caption_he": "כרוב סיני עם אגוזים",
      "alt_ar": "ملفوف صيني مع زبيب ومكسرات",
      "alt_he": "כרוב סיני עם צימוקים ואגוזים",
      "confidence": "H",
      "name_source": "Tasneem, marketing group voice notes 2026-11-17 23:49-23:50"
    },
    "gn2": {
      "src_file": "work/wa_new2/n2.jpg",
      "frame": "card",
      "alt_ar": "ضلوع لحم مشوية مع بصل",
      "alt_he": "צלעות בשר צלויות עם בצל",
      "confidence": "H",
      "use": "atmosphere",
      "source": "marketing group 2026-11-15"
    },
    "gn3": {
      "src_file": "work/wa_new2/n3.jpg",
      "frame": "card",
      "alt_ar": "تي بون وتوماهوك على لوح خشب",
      "alt_he": "טי-בון וטומהוק על קרש",
      "confidence": "H",
      "use": "atmosphere",
      "source": "marketing group 2026-11-15"
    },
    "gn4": {
      "src_file": "work/wa_new2/n4.jpg",
      "frame": "card",
      "alt_ar": "بحريات مشكّلة بالصلصة",
      "alt_he": "פירות ים מעורבים ברוטב",
      "confidence": "H",
      "use": "atmosphere",
      "source": "marketing group 2026-11-15"
    },
    "gn5": {
      "src_file": "work/wa_new2/n5.jpg",
      "frame": "card",
      "alt_ar": "سلمون مشوي مع ليمون",
      "alt_he": "סלמון צלוי עם לימון",
      "confidence": "H",
      "use": "atmosphere",
      "source": "marketing group 2026-11-15"
    },
    "gn6": {
      "src_file": "work/wa_new2/n6.jpg",
      "frame": "card",
      "alt_ar": "سلمون بالسمسم",
      "alt_he": "סלמון בשומשום",
      "confidence": "H",
      "use": "atmosphere",
      "source": "marketing group 2026-11-15"
    }
  },
  "_owner_questions": [
    "1. 'שרבול פילה 1 ק\"ג' — what is the exact name? (published neutral: פילה שלם / فيليه كامل)",
    "2. 'סראסיו' in 'סראסיו מרגז' — exact word? (published: נקניקיות מרגז / مقانق مرقاز)",
    "3. Photo #21: קלמרי עם לבנה or גבינה עם ראשי קלמרי?",
    "4. Photo #19: is it the fried cheese?",
    "5. Photo #24 (eggplant in cream, cast-iron pan): is it the house חציל על האש? (not shown until yes)",
    "6. Shrimp cooked: photo #25 or #48?",
    "7. Photo #23: is this the mixed-by-weight board? Photo #31: are צלעות lamb chops?",
    "8. Photo #33 / video v57: is it אנטריקוט בחמאת שום? (if yes, add photo to that special)",
    "9. 'דואט' — two cuts on one plate, or a dish for two? (copy rewritten after answer)",
    "10. Whole fish (דניס, לברק, דג ים), צדפים, מיקס: really sold as 250/330 g, or per piece?",
    "11. Mixed meat by weight: 250/330 correct for a platter?",
    "12. 'מיקס' under fish = seafood mix?",
    "13. Hebrew spelling of the restaurant (אמסינה?) and of 'سلطة الراهب' (סלט ראהב?). Is سلطة الراهب the same dish as חציל על האש?",
    "14. Prices for all null items, and the exact Google Maps link.",
    "15. Photo #12 (kebab card) shows four round flat patties: is this how your קבב is served? Photo #31 (צלעות card) is a large beef rib on the bone, not lamb chops: correct for צלעות?",
    "16. Final site address (e.g. amasina-menu.netlify.app): needed to make the WhatsApp/Instagram link preview image (og:image) an absolute URL."
  ]
};
