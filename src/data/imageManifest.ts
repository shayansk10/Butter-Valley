export interface ImageVariant {
  readonly width: number;
  readonly src: string;
}

export interface ImageManifestEntry {
  readonly width: number;
  readonly height: number;
  readonly webp: readonly ImageVariant[];
  readonly avif?: readonly ImageVariant[];
}

export const IMAGE_MANIFEST: Record<string, ImageManifestEntry> = {
  "/assets/aistudio/8a50a0ff-203b-4507-9ee0-f05b83b5e02a_e9c70b0f.jfif": {
    "width": 1079,
    "height": 944,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/8a50a0ff-203b-4507-9ee0-f05b83b5e02a_e9c70b0f-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/8a50a0ff-203b-4507-9ee0-f05b83b5e02a_e9c70b0f-640w.webp"
      },
      {
        "width": 1079,
        "src": "/assets/opt/8a50a0ff-203b-4507-9ee0-f05b83b5e02a_e9c70b0f-1079w.webp"
      }
    ]
  },
  "/assets/aistudio/Achar_Gosht_2e496716.jpeg": {
    "width": 787,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Achar_Gosht_2e496716-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Achar_Gosht_2e496716-640w.webp"
      },
      {
        "width": 787,
        "src": "/assets/opt/Achar_Gosht_2e496716-787w.webp"
      }
    ]
  },
  "/assets/aistudio/Almond_Butter_497cae24.jpeg": {
    "width": 799,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Almond_Butter_497cae24-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Almond_Butter_497cae24-640w.webp"
      },
      {
        "width": 799,
        "src": "/assets/opt/Almond_Butter_497cae24-799w.webp"
      }
    ]
  },
  "/assets/aistudio/Badami_Kheer_Mix_4b891bcc.jpeg": {
    "width": 793,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Badami_Kheer_Mix_4b891bcc-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Badami_Kheer_Mix_4b891bcc-640w.webp"
      },
      {
        "width": 793,
        "src": "/assets/opt/Badami_Kheer_Mix_4b891bcc-793w.webp"
      }
    ]
  },
  "/assets/aistudio/Biryani_719291b3.jpeg": {
    "width": 792,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Biryani_719291b3-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Biryani_719291b3-640w.webp"
      },
      {
        "width": 792,
        "src": "/assets/opt/Biryani_719291b3-792w.webp"
      }
    ]
  },
  "/assets/aistudio/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2.png": {
    "width": 1100,
    "height": 1430,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-640w.webp"
      },
      {
        "width": 960,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-960w.webp"
      },
      {
        "width": 1100,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-1100w.webp"
      }
    ],
    "avif": [
      {
        "width": 360,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-360w.avif"
      },
      {
        "width": 640,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-640w.avif"
      },
      {
        "width": 960,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-960w.avif"
      },
      {
        "width": 1100,
        "src": "/assets/opt/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2-1100w.avif"
      }
    ]
  },
  "/assets/aistudio/Butter_Valley_Shilajit_Nature_Poster_9d26d1db.png": {
    "width": 1024,
    "height": 1536,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-640w.webp"
      },
      {
        "width": 1024,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-1024w.webp"
      }
    ],
    "avif": [
      {
        "width": 360,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-360w.avif"
      },
      {
        "width": 640,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-640w.avif"
      },
      {
        "width": 1024,
        "src": "/assets/opt/Butter_Valley_Shilajit_Nature_Poster_9d26d1db-1024w.avif"
      }
    ]
  },
  "/assets/aistudio/Chat_Masala_480cdb41.jpeg": {
    "width": 794,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Chat_Masala_480cdb41-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Chat_Masala_480cdb41-640w.webp"
      },
      {
        "width": 794,
        "src": "/assets/opt/Chat_Masala_480cdb41-794w.webp"
      }
    ]
  },
  "/assets/aistudio/Chicken_Masala_97873d8d.jpeg": {
    "width": 791,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Chicken_Masala_97873d8d-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Chicken_Masala_97873d8d-640w.webp"
      },
      {
        "width": 791,
        "src": "/assets/opt/Chicken_Masala_97873d8d-791w.webp"
      }
    ]
  },
  "/assets/aistudio/Chicken_Tikka_28e315b8.jfif": {
    "width": 796,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Chicken_Tikka_28e315b8-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Chicken_Tikka_28e315b8-640w.webp"
      },
      {
        "width": 796,
        "src": "/assets/opt/Chicken_Tikka_28e315b8-796w.webp"
      }
    ]
  },
  "/assets/aistudio/Chocolate_Peanut_Butter_219b8fa7.jpeg": {
    "width": 785,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Chocolate_Peanut_Butter_219b8fa7-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Chocolate_Peanut_Butter_219b8fa7-640w.webp"
      },
      {
        "width": 785,
        "src": "/assets/opt/Chocolate_Peanut_Butter_219b8fa7-785w.webp"
      }
    ]
  },
  "/assets/aistudio/Chocolate_Spread_4df194e7.jpeg": {
    "width": 797,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Chocolate_Spread_4df194e7-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Chocolate_Spread_4df194e7-640w.webp"
      },
      {
        "width": 797,
        "src": "/assets/opt/Chocolate_Spread_4df194e7-797w.webp"
      }
    ]
  },
  "/assets/aistudio/Coriander_Powder_749ea63d.jpeg": {
    "width": 800,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Coriander_Powder_749ea63d-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Coriander_Powder_749ea63d-640w.webp"
      },
      {
        "width": 800,
        "src": "/assets/opt/Coriander_Powder_749ea63d-800w.webp"
      }
    ]
  },
  "/assets/aistudio/Curry_Powder_707e3ef7.jpeg": {
    "width": 792,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Curry_Powder_707e3ef7-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Curry_Powder_707e3ef7-640w.webp"
      },
      {
        "width": 792,
        "src": "/assets/opt/Curry_Powder_707e3ef7-792w.webp"
      }
    ]
  },
  "/assets/aistudio/Daal_Masala_Mix_9fa69fa9.jpeg": {
    "width": 801,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Daal_Masala_Mix_9fa69fa9-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Daal_Masala_Mix_9fa69fa9-640w.webp"
      },
      {
        "width": 801,
        "src": "/assets/opt/Daal_Masala_Mix_9fa69fa9-801w.webp"
      }
    ]
  },
  "/assets/aistudio/Fish_food_54751000.jpeg": {
    "width": 795,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Fish_food_54751000-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Fish_food_54751000-640w.webp"
      },
      {
        "width": 795,
        "src": "/assets/opt/Fish_food_54751000-795w.webp"
      }
    ]
  },
  "/assets/aistudio/Fried_Onion_5e15ab98.jpeg": {
    "width": 801,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Fried_Onion_5e15ab98-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Fried_Onion_5e15ab98-640w.webp"
      },
      {
        "width": 801,
        "src": "/assets/opt/Fried_Onion_5e15ab98-801w.webp"
      }
    ]
  },
  "/assets/aistudio/Golden_Saffron_Spice_Still_Life_ea78f56b.png": {
    "width": 1835,
    "height": 857,
    "webp": [
      {
        "width": 480,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-480w.webp"
      },
      {
        "width": 960,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-960w.webp"
      },
      {
        "width": 1440,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-1440w.webp"
      },
      {
        "width": 1835,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-1835w.webp"
      }
    ],
    "avif": [
      {
        "width": 480,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-480w.avif"
      },
      {
        "width": 960,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-960w.avif"
      },
      {
        "width": 1440,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-1440w.avif"
      },
      {
        "width": 1835,
        "src": "/assets/opt/Golden_Saffron_Spice_Still_Life_ea78f56b-1835w.avif"
      }
    ]
  },
  "/assets/aistudio/Karahi_Gosht_db5db29f.jpeg": {
    "width": 795,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Karahi_Gosht_db5db29f-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Karahi_Gosht_db5db29f-640w.webp"
      },
      {
        "width": 795,
        "src": "/assets/opt/Karahi_Gosht_db5db29f-795w.webp"
      }
    ]
  },
  "/assets/aistudio/Mutton_Biryani_cfc564f2.jpeg": {
    "width": 790,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Mutton_Biryani_cfc564f2-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Mutton_Biryani_cfc564f2-640w.webp"
      },
      {
        "width": 790,
        "src": "/assets/opt/Mutton_Biryani_cfc564f2-790w.webp"
      }
    ]
  },
  "/assets/aistudio/Paya_5e80dbc4.jpeg": {
    "width": 798,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Paya_5e80dbc4-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Paya_5e80dbc4-640w.webp"
      },
      {
        "width": 798,
        "src": "/assets/opt/Paya_5e80dbc4-798w.webp"
      }
    ]
  },
  "/assets/aistudio/Peanut_Butter_Chocolate_Chip_d593f8da.jpeg": {
    "width": 792,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Peanut_Butter_Chocolate_Chip_d593f8da-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Peanut_Butter_Chocolate_Chip_d593f8da-640w.webp"
      },
      {
        "width": 792,
        "src": "/assets/opt/Peanut_Butter_Chocolate_Chip_d593f8da-792w.webp"
      }
    ]
  },
  "/assets/aistudio/Peanut_Butter_dd3dc979.jpeg": {
    "width": 795,
    "height": 1024,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Peanut_Butter_dd3dc979-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Peanut_Butter_dd3dc979-640w.webp"
      },
      {
        "width": 795,
        "src": "/assets/opt/Peanut_Butter_dd3dc979-795w.webp"
      }
    ]
  },
  "/assets/aistudio/Pink_Salt_67a7e523.png": {
    "width": 1254,
    "height": 1254,
    "webp": [
      {
        "width": 360,
        "src": "/assets/opt/Pink_Salt_67a7e523-360w.webp"
      },
      {
        "width": 640,
        "src": "/assets/opt/Pink_Salt_67a7e523-640w.webp"
      },
      {
        "width": 1254,
        "src": "/assets/opt/Pink_Salt_67a7e523-1254w.webp"
      }
    ],
    "avif": [
      {
        "width": 360,
        "src": "/assets/opt/Pink_Salt_67a7e523-360w.avif"
      },
      {
        "width": 640,
        "src": "/assets/opt/Pink_Salt_67a7e523-640w.avif"
      },
      {
        "width": 1254,
        "src": "/assets/opt/Pink_Salt_67a7e523-1254w.avif"
      }
    ]
  },
  "/assets/aistudio/Quorma_34b87f7f.jpeg": {
    "width": 785,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Red_Chilli_Powder_45f89b84.jpeg": {
    "width": 794,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Rhode_Grass_587a95be.png": {
    "width": 1254,
    "height": 1254,
    "webp": []
  },
  "/assets/aistudio/Sea_Freight_Container_Availability_Poster_2310a7fa.png": {
    "width": 1187,
    "height": 1326,
    "webp": []
  },
  "/assets/aistudio/Sheer_Khurma_Mix_f966092e.jpeg": {
    "width": 788,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Shilajit_Hard_e93697ba.png": {
    "width": 1672,
    "height": 941,
    "webp": [],
    "avif": [
      {
        "width": 1440,
        "src": "/assets/opt/Shilajit_Hard_e93697ba-1440w.avif"
      }
    ]
  },
  "/assets/aistudio/Shilajit_liquid_5eb289a9.png": {
    "width": 1672,
    "height": 941,
    "webp": [
      {
        "width": 480,
        "src": "/assets/opt/Shilajit_liquid_5eb289a9-480w.webp"
      }
    ]
  },
  "/assets/aistudio/Sindhi_Biryani_5764b03d.jpeg": {
    "width": 800,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Tikka_boti_11c7b173.jpeg": {
    "width": 792,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Turmeric_Powder_8605be4d.jpeg": {
    "width": 797,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Vegetable_Masala_Mix_3ba0dbbb.jpeg": {
    "width": 801,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Walnut_Butter_e02fd667.jpeg": {
    "width": 789,
    "height": 1024,
    "webp": []
  },
  "/assets/aistudio/Zaffron_0c43d86f.png": {
    "width": 1182,
    "height": 1330,
    "webp": []
  },
  "/assets/aistudio/butter-valley-logo_25e426e5.jpeg": {
    "width": 400,
    "height": 415,
    "webp": []
  },
  "/assets/aistudio/image_3_04b85e10.jfif": {
    "width": 780,
    "height": 1040,
    "webp": []
  },
  "/assets/aistudio/image_49e8d1f1.png": {
    "width": 1080,
    "height": 931,
    "webp": []
  },
  "/assets/aistudio/image_4_d748cf0d.jfif": {
    "width": 1600,
    "height": 1200,
    "webp": [],
    "avif": [
      {
        "width": 480,
        "src": "/assets/opt/image_4_d748cf0d-480w.avif"
      }
    ]
  },
  "/assets/aistudio/image_cb7dadcd.png": {
    "width": 720,
    "height": 960,
    "webp": []
  },
  "/assets/aistudio/image_d60b7f8b.png": {
    "width": 780,
    "height": 1040,
    "webp": []
  },
  "/assets/aistudio/image_df819628.png": {
    "width": 1080,
    "height": 983,
    "webp": []
  },
  "/assets/aistudio/imge_2_542826ac.jfif": {
    "width": 1600,
    "height": 1200,
    "webp": []
  },
  "/assets/aistudio/main-hero-background_c1f2a056.JPG": {
    "width": 553,
    "height": 259,
    "webp": []
  }
};
