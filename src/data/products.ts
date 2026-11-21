export interface ProductSku {
  name: string;
  image: string;
  imageFit: 'contain' | 'cover';
  note?: string;
  description?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  path: string;
  name: string;
  shortName: string;
  kicker: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  heroImageFit: 'contain' | 'cover';
  heroAlt: string;
  seoTitle: string;
  seoDescription: string;
  highlightsTitle?: string;
  highlights: string[];
  processSteps?: { step: string; detail: string }[];
  applications?: { name: string; detail: string }[];
  specifications: ProductSpecification[];
  packagingInfo: ProductSpecification[];
  qualityHighlights: string[];
  exportInfo: string;
  skus: ProductSku[];
  faqs: ProductFaq[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'nut-butters-spreads',
    slug: 'nut-butters-spreads',
    path: '/products/nut-butters-spreads',
    name: 'Artisanal Nut Butters & Spreads',
    shortName: 'Nut Butters',
    kicker: 'Artisanal Spreads · SITE Hyderabad',
    shortDescription:
      'Rich, smooth and full of real nut flavor, crafted in SITE Hyderabad and packed 12 units per carton for wholesale export.',
    fullDescription:
      "Rich, smooth and full of real nut flavor. Butter Valley's artisanal nut butters and spreads are made in SITE Hyderabad, Pakistan, and packed for wholesale buyers and export markets.",
    heroImage: '/assets/aistudio/Peanut_Butter_dd3dc979.jpeg',
    heroImageFit: 'contain',
    heroAlt: 'Butter Valley Creamy Peanut Butter jar manufactured in Pakistan',
    seoTitle: 'Nut Butters & Spreads Manufacturer & Exporter Pakistan | Butter Valley Ltd.',
    seoDescription:
      'Wholesale artisanal Almond Butter, Creamy Peanut Butter, Chocolate Peanut Butter, Chocolate Chip, Chocolate Spread and Walnut Butter made in SITE Hyderabad, Pakistan.',
    highlightsTitle: 'Everyday Versatility',
    highlights: ['On toast', 'Breakfast', 'Baking', 'Snacks'],
    processSteps: [
      { step: '01. Selection', detail: 'Careful inspection and grading of raw nuts before processing.' },
      { step: '02. Roasting', detail: 'Controlled roasting to develop natural aroma and balanced richness.' },
      { step: '03. Grinding', detail: 'Precision grinding for a rich, smooth spreadable consistency.' },
      { step: '04. Sealing', detail: 'Hygienic jar sealing to lock in freshness for transit.' },
      { step: '05. Packing', detail: 'Packed 12 units per carton for wholesale and export handling.' },
    ],
    specifications: [
      { label: 'Product Type', value: 'Artisanal Nut Butters & Spreads' },
      { label: 'Carton Configuration', value: '12 units per carton' },
      { label: 'Product Format', value: 'Sealed retail jars' },
      { label: 'Available Variants', value: '6 varieties (Almond, Peanut, Chocolate & Walnut)' },
      { label: 'Manufacturing Origin', value: 'Made in SITE Hyderabad, Sindh, Pakistan' },
      { label: 'Quality & Compliance', value: 'Halal certification & PCSIR test report' },
    ],
    packagingInfo: [
      { label: 'Master Carton', value: '12 units per carton' },
      { label: 'Primary Container', value: 'Sealed retail jars' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Manufactured directly at our SITE Hyderabad facility without middlemen',
      'Supported by Halal certification and PCSIR laboratory test reports',
      'Sealed and packed 12 units per carton for international export logistics',
    ],
    exportInfo:
      'Supplied directly from Hyderabad, Sindh to wholesale importers and retail distributors across the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Almond Butter',
        image: '/assets/aistudio/Almond_Butter_497cae24.jpeg',
        imageFit: 'contain',
        note: 'Smooth roasted almond spread',
      },
      {
        name: 'Peanut Butter (Creamy)',
        image: '/assets/aistudio/Peanut_Butter_dd3dc979.jpeg',
        imageFit: 'contain',
        note: 'Classic creamy peanut butter',
      },
      {
        name: 'Chocolate Peanut Butter',
        image: '/assets/aistudio/Chocolate_Peanut_Butter_219b8fa7.jpeg',
        imageFit: 'contain',
        note: 'Roasted peanut and cocoa blend',
      },
      {
        name: 'Peanut Butter Chocolate Chip',
        image: '/assets/aistudio/Peanut_Butter_Chocolate_Chip_d593f8da.jpeg',
        imageFit: 'contain',
        note: 'Creamy peanut spread with chocolate chips',
      },
      {
        name: 'Chocolate Spread',
        image: '/assets/aistudio/Chocolate_Spread_4df194e7.jpeg',
        imageFit: 'contain',
        note: 'Velvety sweet chocolate spread',
      },
      {
        name: 'Walnuts Butter',
        image: '/assets/aistudio/Walnut_Butter_e02fd667.jpeg',
        imageFit: 'contain',
        note: 'Rich stone-ground walnut butter',
      },
    ],
    faqs: [
      {
        question: 'How many jars are packed per wholesale carton?',
        answer:
          'Butter Valley Nut Butters & Spreads are packed at 12 units per carton in sealed retail jars for wholesale export handling.',
      },
      {
        question: 'Where are the nut butters manufactured?',
        answer:
          'All Butter Valley nut butters and spreads are manufactured at our facility in SITE Hyderabad, Sindh, Pakistan.',
      },
      {
        question: 'Can we request full specification sheets or private-label inquiries?',
        answer:
          'Yes. Specification sheets, export compliance documents, and wholesale quotations can be requested directly through our Get In Touch page.',
      },
    ],
  },
  {
    id: 'recipe-mixes',
    slug: 'recipe-mixes',
    path: '/products/recipe-mixes',
    name: 'Recipe Mixes',
    shortName: 'Recipe Mixes',
    kicker: 'Traditional Flavors · 75g Packs',
    shortDescription:
      'Traditional Pakistani flavors in ready-to-use, shelf-friendly 75g packs crafted for consistent everyday cooking.',
    fullDescription:
      "Traditional Pakistani flavors, ready to cook. Butter Valley's recipe mixes take the guesswork out of home cooking and are packed for wholesale buyers and export markets.",
    heroImage: '/assets/aistudio/Vegetable_Masala_Mix_3ba0dbbb.jpeg',
    heroImageFit: 'contain',
    heroAlt: 'Butter Valley Vegetable Masala Recipe & Seasoning Mix export box',
    seoTitle: 'Pakistani Recipe Mixes Manufacturer & Exporter | Butter Valley Ltd.',
    seoDescription:
      'Wholesale Pakistani recipe mixes in 75g shelf-friendly export packs featuring Vegetable Masala, Daal Masala and Crisp Fried Onion (400g).',
    highlightsTitle: 'Range Highlights',
    highlights: ['Ready to use', 'Consistent taste', 'Shelf-friendly packs', '75g & 400g packs'],
    specifications: [
      { label: 'Product Type', value: 'Traditional Recipe & Seasoning Mixes' },
      { label: 'Net Pack Weight', value: '75g packs (50g + 25g Free · 50% Extra) & 400g pack (Fried Onion)' },
      { label: 'Available Variants', value: '3 varieties (Vegetable Masala, Daal Masala, Crisp Fried Onion)' },
      { label: 'Product Format', value: 'Shelf-friendly retail cartons & retail pack' },
      { label: 'Manufacturing Origin', value: 'Made in Hyderabad, Sindh, Pakistan' },
      { label: 'Quality & Compliance', value: 'Halal certification & PCSIR test report' },
    ],
    packagingInfo: [
      { label: 'Recipe Mixes Pack Size', value: '75g packs (50g + 25g Free promotional pack format)' },
      { label: 'Crisp Fried Onion', value: '400g retail pack (80 servings per container)' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Formulated for consistent taste across every batch',
      'Multilingual export-ready carton presentation',
      'Supported by Halal certification and PCSIR testing',
    ],
    exportInfo:
      'Exported in shelf-friendly 75g packs and 400g retail packs to South Asian and international grocery distributors in the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Vegetable Masala',
        image: '/assets/aistudio/Vegetable_Masala_Mix_3ba0dbbb.jpeg',
        imageFit: 'contain',
        note: '75g pack (50g + 25g Free) · Recipe & Seasoning Mix',
      },
      {
        name: 'Daal Masala',
        image: '/assets/aistudio/Daal_Masala_Mix_9fa69fa9.jpeg',
        imageFit: 'contain',
        note: '75g pack (50g + 25g Free) · Recipe & Seasoning Mix',
      },
      {
        name: 'Crisp Fried Onion',
        image: '/assets/aistudio/Fried_Onion_5e15ab98.jpeg',
        imageFit: 'contain',
        note: '400g pack · Traditional pantry staple',
      },
    ],
    faqs: [
      {
        question: 'What pack weight are Butter Valley Recipe Mixes supplied in?',
        answer:
          'Butter Valley Vegetable Masala and Daal Masala Recipe Mixes are supplied in shelf-friendly 75g packs (50g + 25g pack format), while Crisp Fried Onion is supplied in a 400g retail pack.',
      },
      {
        question: 'Can buyers mix multiple varieties in one wholesale shipment?',
        answer:
          'Assorted container and carton allocations can be discussed directly with our export team based on destination requirements.',
      },
      {
        question: 'Are Halal and testing documents provided for customs clearance?',
        answer:
          'Yes, shipments are backed by Halal certification, PCSIR test reports, and PSW export registration.',
      },
    ],
  },
  {
    id: 'pure-spices',
    slug: 'pure-spices',
    path: '/products/pure-spices',
    name: 'Pure Spices',
    shortName: 'Pure Spices',
    kicker: 'Aromatic Ground Spices & Masalas · 400g Packs',
    shortDescription:
      'Pure Pakistani spices and traditional masalas with authentic aroma, supplied in 400g packs and 24-unit cartons for global wholesale trade.',
    fullDescription:
      'Pure spices with real aroma, packed to keep their flavor. Butter Valley supplies Pakistani spices to wholesale buyers and export markets.',
    heroImage: '/assets/aistudio/Red_Chilli_Powder_45f89b84.jpeg',
    heroImageFit: 'contain',
    heroAlt: 'Butter Valley Red Chilli Powder spice pack',
    seoTitle: 'Pakistani Spice Exporter & Wholesale Pure Spices | Butter Valley Ltd.',
    seoDescription:
      'Export-grade Pakistani Red Chilli Powder, Turmeric Powder, Coriander Powder, Curry Powder, Biryani, Karahi Gosht, Quorma, Chicken Tikka, Paya and Chat Masala.',
    highlightsTitle: 'Wholesale Highlights',
    highlights: [
      '400g packs',
      '24 units per carton',
      'Made in Hyderabad, Sindh, Pakistan',
      'Halal and PCSIR test report',
    ],
    specifications: [
      { label: 'Product Type', value: 'Pure Ground Spices & Traditional Spice Blends' },
      { label: 'Pack Weight', value: '400g packs' },
      { label: 'Carton Configuration', value: '24 units per carton' },
      { label: 'Available Variants', value: '16 single spice and masala varieties' },
      { label: 'Manufacturing Origin', value: 'Made in Hyderabad, Sindh, Pakistan' },
      { label: 'Quality & Compliance', value: 'Halal certification & PCSIR test report' },
    ],
    packagingInfo: [
      { label: 'Standard Unit Weight', value: '400g packs' },
      { label: 'Master Carton', value: '24 units per carton' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Packed to preserve natural color and volatile spice aroma',
      'Supported by Halal certification and PCSIR test reports',
      'Consistent batch control at our Hyderabad facility',
    ],
    exportInfo:
      'Supplied to wholesale food importers, ethnic grocers and foodservice buyers across the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Red Chilli Powder',
        image: '/assets/aistudio/Red_Chilli_Powder_45f89b84.jpeg',
        imageFit: 'contain',
        note: 'Pure ground red chilli',
      },
      {
        name: 'Turmeric Powder',
        image: '/assets/aistudio/Turmeric_Powder_8605be4d.jpeg',
        imageFit: 'contain',
        note: 'Vibrant ground turmeric',
      },
      {
        name: 'Coriander Powder',
        image: '/assets/aistudio/Coriander_Powder_749ea63d.jpeg',
        imageFit: 'contain',
        note: 'Aromatic ground coriander',
      },
      {
        name: 'Curry Powder',
        image: '/assets/aistudio/Curry_Powder_707e3ef7.jpeg',
        imageFit: 'contain',
        note: 'Balanced traditional curry blend',
      },
      {
        name: 'Biryani',
        image: '/assets/aistudio/Biryani_719291b3.jpeg',
        imageFit: 'contain',
        note: 'Traditional biryani spice blend',
      },
      {
        name: 'Sindhi Biryani',
        image: '/assets/aistudio/Sindhi_Biryani_5764b03d.jpeg',
        imageFit: 'contain',
        note: 'Sindhi biryani spice blend',
      },
      {
        name: 'Mutton Biryani',
        image: '/assets/aistudio/Mutton_Biryani_cfc564f2.jpeg',
        imageFit: 'contain',
        note: 'Mutton biryani spice blend',
      },
      {
        name: 'Karahi Gosht',
        image: '/assets/aistudio/Karahi_Gosht_db5db29f.jpeg',
        imageFit: 'contain',
        note: 'Karahi gosht spice blend',
      },
      {
        name: 'Achar Gosht',
        image: '/assets/aistudio/Achar_Gosht_2e496716.jpeg',
        imageFit: 'contain',
        note: 'Achar gosht spice blend',
      },
      {
        name: 'Quorma',
        image: '/assets/aistudio/Quorma_34b87f7f.jpeg',
        imageFit: 'contain',
        note: 'Quorma spice blend',
      },
      {
        name: 'Paya',
        image: '/assets/aistudio/Paya_5e80dbc4.jpeg',
        imageFit: 'contain',
        note: 'Paya curry spice blend',
      },
      {
        name: 'Chicken Masala (Murghi)',
        image: '/assets/aistudio/Chicken_Masala_97873d8d.jpeg',
        imageFit: 'contain',
        note: 'Chicken masala blend',
      },
      {
        name: 'Chicken Tikka',
        image: '/assets/aistudio/Chicken_Tikka_28e315b8.jfif',
        imageFit: 'contain',
        note: 'BBQ chicken tikka blend',
      },
      {
        name: 'Tikka Boti',
        image: '/assets/aistudio/Tikka_boti_11c7b173.jpeg',
        imageFit: 'contain',
        note: 'BBQ tikka boti blend',
      },
      {
        name: 'Fish Fried',
        image: '/assets/aistudio/Fish_food_54751000.jpeg',
        imageFit: 'contain',
        note: 'Fried fish seasoning blend',
      },
      {
        name: 'Chat Masala',
        image: '/assets/aistudio/Chat_Masala_480cdb41.jpeg',
        imageFit: 'contain',
        note: 'Tangy chat masala seasoning',
      },
    ],
    faqs: [
      {
        question: 'What is the standard wholesale packaging for Pure Spices?',
        answer:
          'Butter Valley Pure Spices are supplied in 400g packs, packed 24 units per carton for wholesale export.',
      },
      {
        question: 'What quality documentation accompanies Pure Spices exports?',
        answer:
          'Our Pure Spices are supported by Halal certification and a PCSIR laboratory test report.',
      },
      {
        question: 'Do you supply other single spices or bulk bags?',
        answer:
          'Additional spice varieties and bulk packaging options can be discussed directly with our export team based on destination requirements and wholesale volume.',
      },
    ],
  },
  {
    id: 'pink-himalayan-salt',
    slug: 'pink-himalayan-salt',
    path: '/products/pink-himalayan-salt',
    name: 'Pink Himalayan Salt & Minerals',
    shortName: 'Pink Himalayan Salt',
    kicker: 'Khewra Salt Mine · Punjab, Pakistan',
    shortDescription:
      'Authentic Pink Himalayan Salt sourced from Khewra Salt Mine in edible, spa, de-icing and industrial grades.',
    fullDescription:
      'Pink Himalayan Salt from the Khewra Salt Mine in Punjab, Pakistan, supplied in grades for food, spa and industrial use to wholesale buyers and export markets.',
    heroImage: '/assets/aistudio/Pink_Salt_67a7e523.png',
    heroImageFit: 'cover',
    heroAlt:
      'Butter Valley Pink Himalayan Salt crystals in a ceramic bowl alongside raw salt rocks and a wooden scoop',
    seoTitle: 'Pink Himalayan Salt Exporter Pakistan | Bulk Pink Salt Supplier | Butter Valley Ltd.',
    seoDescription:
      'Direct Pink Himalayan Salt supplier from Khewra Salt Mine, Punjab, Pakistan. Available in edible, spa, de-icing and industrial grades for global wholesale export.',
    highlightsTitle: 'Grade Applications',
    highlights: ['Edible Grade', 'Spa & Bath', 'De-icing', 'Industrial Use'],
    applications: [
      {
        name: 'Edible',
        detail:
          'Food-grade pink salt crystals and fine grains suited for culinary seasoning, retail pouches, grinders and food processing.',
      },
      {
        name: 'Spa',
        detail:
          'Coarse and granular mineral salt selected for bath soaks, spa treatments and wellness formulations.',
      },
      {
        name: 'De-icing',
        detail:
          'Bulk mineral salt grades supplied for winter road maintenance and commercial surface de-icing.',
      },
      {
        name: 'Industrial',
        detail:
          'Industrial-grade Himalayan mineral salt tailored to manufacturing and commercial process requirements.',
      },
    ],
    specifications: [
      { label: 'Product Type', value: 'Natural Pink Himalayan Mineral Salt' },
      { label: 'Mineral Source', value: 'Khewra Salt Mine, Punjab, Pakistan' },
      { label: 'Supplied Grades', value: 'Edible, Spa, De-icing, Industrial' },
      { label: 'Product Format', value: 'Stand-up retail pouch & commercial mineral grades' },
      { label: 'Quality Control', value: 'Purity & mineral content testing; PCSIR test report' },
      { label: 'Export Compliance', value: 'Halal Certification & PSW Registration' },
    ],
    packagingInfo: [
      { label: 'Retail Format', value: 'Stand-up resealable pouch (culinary salt)' },
      { label: 'Application Grades', value: 'Edible, Spa, De-icing, Industrial' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Direct sourcing from the Khewra Salt Mine in Punjab, Pakistan',
      'Constant quality testing for purity and mineral content',
      'Supported by PCSIR test reports and PSW export registration',
    ],
    exportInfo:
      'Exported in retail and bulk wholesale configurations to buyers across the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Pink Himalayan Salt (Stand-Up Pouch)',
        image: '/assets/aistudio/Pink_Salt_67a7e523.png',
        imageFit: 'cover',
        note: 'Khewra origin culinary pouch',
      },
    ],
    faqs: [
      {
        question: 'Where is Butter Valley Pink Himalayan Salt sourced?',
        answer:
          'Our Pink Himalayan Salt is sourced directly from the Khewra Salt Mine in Punjab, Pakistan.',
      },
      {
        question: 'Which grades are available for wholesale buyers?',
        answer:
          'We supply four distinct application grades: Edible, Spa, De-icing, and Industrial. Granule grades and commercial shipment configurations can be coordinated directly with our export desk.',
      },
      {
        question: 'How is salt purity verified prior to export?',
        answer:
          'We maintain constant testing for purity and mineral content, backed by a PCSIR test report and compliant food handling standards.',
      },
    ],
  },
  {
    id: 'desserts-pantry',
    slug: 'desserts-pantry',
    path: '/products/desserts-pantry',
    name: 'Desserts & Pantry Staples',
    shortName: 'Desserts & Pantry',
    kicker: 'Festive & Everyday Essentials',
    shortDescription:
      'Traditional dessert mixes (75g packs), vermicelli and pantry staples for festive tables and everyday cooking.',
    fullDescription:
      'Dessert mixes, vermicelli and pantry staples for everyday cooking and festive tables, supplied to wholesale buyers and export markets.',
    heroImage: '/assets/aistudio/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2.png',
    heroImageFit: 'contain',
    heroAlt:
      'Butter Valley Badami Kheer Mix and Sheer Khurma Mix packs with almonds, pistachios, saffron and dates',
    seoTitle: 'Pakistani Dessert Mixes, Vermicelli & Pantry Staples Exporter | Butter Valley Ltd.',
    seoDescription:
      'Wholesale Pakistani dessert mixes including Badami Kheer Mix (75g), Sheer Khurma Mix (75g), vermicelli and pantry staples exported by Butter Valley Ltd.',
    highlightsTitle: 'Product Range',
    highlights: [
      'Dessert mixes (75g packs)',
      'Vermicelli',
      'Festive & everyday essentials',
      'Additional pantry products',
    ],
    specifications: [
      { label: 'Product Range', value: 'Dessert Mixes, Vermicelli & Pantry Staples' },
      { label: 'Dessert Mix Pack Weight', value: '75g packs (50g + 25g Free · 50% Extra)' },
      { label: 'Manufacturing Origin', value: 'Made in Hyderabad, Sindh, Pakistan' },
      { label: 'Quality & Compliance', value: 'Halal certification & PCSIR test report' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    packagingInfo: [
      { label: 'Dessert Mixes', value: '75g retail cartons (50g + 25g Free · Badami Kheer Mix & Sheer Khurma Mix)' },
      { label: 'Pantry Line', value: 'Vermicelli & additional pantry staples' },
    ],
    qualityHighlights: [
      'Consistent recipe formulation for traditional South Asian desserts',
      'Clean, export-compliant labeling and protective packaging',
      'Reliable seasonal and year-round supply for festive demand',
    ],
    exportInfo:
      'Supplied to international South Asian supermarkets, ethnic wholesalers and hospitality buyers across the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Badami Kheer Mix',
        image: '/assets/aistudio/Badami_Kheer_Mix_4b891bcc.jpeg',
        imageFit: 'contain',
        note: '75g pack · Traditional almond rice pudding mix',
      },
      {
        name: 'Sheer Khurma Mix',
        image: '/assets/aistudio/Sheer_Khurma_Mix_f966092e.jpeg',
        imageFit: 'contain',
        note: '75g pack · Festive vermicelli milk dessert mix',
      },
      {
        name: 'Traditional Dessert Presentation',
        image: '/assets/aistudio/Butter_Valley_Mixes__Kheer___Sheer_Khurma_21d877f2.png',
        imageFit: 'contain',
        note: 'Prepared with nuts and saffron',
      },
    ],
    faqs: [
      {
        question: 'Which products are included in Desserts & Pantry Staples?',
        answer:
          'This category includes Dessert Mixes (Badami Kheer Mix and Sheer Khurma Mix in 75g packs), Vermicelli, and additional pantry staples upon buyer inquiry.',
      },
      {
        question: 'Are seasonal festive stock volumes supported?',
        answer:
          'Yes, buyers can coordinate ahead of festive seasons through our export desk to align production and shipment schedules.',
      },
      {
        question: 'Are Halal and testing documents provided with pantry exports?',
        answer:
          'Yes, Butter Valley exports are backed by Halal certification, PCSIR test reports, and PSW export registration.',
      },
    ],
  },
  {
    id: 'shilajit',
    slug: 'shilajit',
    path: '/products/shilajit',
    name: 'Shilajit',
    shortName: 'Shilajit',
    kicker: 'Natural Mountain Heritage · Resin & Raw Mineral',
    shortDescription:
      'Authentic Himalayan Shilajit in Pure Shilajit Resin (liquid) and Natural Raw Shilajit (solid) forms for wholesale and export markets.',
    fullDescription:
      'Pure, carefully sourced Himalayan Shilajit (Salajit) from Pakistan, supplied in both natural liquid resin and original solid mineral forms to specialty wholesale buyers and international export markets.',
    heroImage: '/assets/aistudio/Butter_Valley_Shilajit_Nature_Poster_9d26d1db.png',
    heroImageFit: 'contain',
    heroAlt:
      'Butter Valley Himalayan Shilajit pure resin jar and natural raw Shilajit mineral pieces set in mountain greenery',
    seoTitle: 'Pure Shilajit Resin & Natural Raw Shilajit Exporter Pakistan | Butter Valley Ltd.',
    seoDescription:
      'Wholesale exporter of Pure Shilajit Resin (liquid) and Natural Raw Shilajit (solid) from Pakistan for international specialty buyers and distributors.',
    highlightsTitle: 'Product Range',
    highlights: [
      'Pure Shilajit Resin (Liquid)',
      'Natural Raw Shilajit (Solid)',
      'Natural Mineral Richness',
      'Wholesale & Export Supply',
    ],
    specifications: [
      { label: 'Product Category', value: 'Himalayan Shilajit (Salajit)' },
      { label: 'Available Formats', value: 'Pure Shilajit Resin (Liquid) & Natural Raw Shilajit (Solid)' },
      { label: 'Origin & Handling', value: 'Sourced and supplied by Butter Valley Ltd., Pakistan' },
      { label: 'Quality Control', value: 'Purity testing & PCSIR test report' },
      { label: 'Export Compliance', value: 'PSW Registration & Chamber of Commerce Membership' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    packagingInfo: [
      {
        label: 'Pure Shilajit Resin',
        value: 'Natural liquid resin format in sealed containers for specialty retail & wholesale supply',
      },
      {
        label: 'Natural Raw Shilajit',
        value: 'Original solid mineral form prepared for wholesale & export supply',
      },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Screened through consistent quality control and purity verification',
      'Handled in hygienic conditions for international export',
      'Supported by PSW export registration and compliance documentation',
    ],
    exportInfo:
      'Supplied to specialty wholesalers and international buyers in the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Pure Shilajit Resin',
        image: '/assets/aistudio/Shilajit_liquid_5eb289a9.png',
        imageFit: 'cover',
        note: 'Natural Liquid Resin Form',
        description:
          'Premium-quality Shilajit in natural resin form, carefully sourced and presented for customers seeking authentic Himalayan Shilajit.',
      },
      {
        name: 'Natural Raw Shilajit',
        image: '/assets/aistudio/Shilajit_Hard_e93697ba.png',
        imageFit: 'cover',
        note: 'Original Solid Mineral Form',
        description:
          'Natural raw Shilajit in its original solid mineral form, carefully sourced and prepared for wholesale and export supply.',
      },
    ],
    faqs: [
      {
        question: 'Which forms of Shilajit does Butter Valley supply?',
        answer:
          'We supply two distinct formats: Pure Shilajit Resin in natural liquid resin form, and Natural Raw Shilajit in its original solid mineral form for wholesale and export buyers.',
      },
      {
        question: 'Can buyers request batch purity testing documentation?',
        answer:
          'Yes, quality control documentation and test report details can be requested directly through our wholesale inquiry form.',
      },
      {
        question: 'Which markets do you export Shilajit to?',
        answer:
          'Butter Valley supplies international buyers across established trade corridors including the United Arab Emirates, Saudi Arabia, the United Kingdom and the United States.',
      },
    ],
  },
  {
    id: 'zafran',
    slug: 'zafran',
    path: '/products/zafran',
    name: 'Zafran (Saffron)',
    shortName: 'Zafran (Saffron)',
    kicker: 'Pure Culinary Botanicals · Crimson Threads',
    shortDescription:
      'Pure Zafran (Saffron) crimson threads carefully selected for aroma, color and culinary richness across wholesale export markets.',
    fullDescription:
      'Authentic pure Zafran (Saffron) whole crimson threads, handled and sealed for culinary specialty retailers, hospitality buyers and wholesale export markets.',
    heroImage: '/assets/aistudio/Zaffron_0c43d86f.png',
    heroImageFit: 'contain',
    heroAlt:
      'Crimson Zafran saffron threads in a white ceramic bowl and spoon beside a purple saffron flower with the Butter Valley Co. emblem',
    seoTitle: 'Pure Zafran (Saffron) Wholesale Exporter Pakistan | Butter Valley Ltd.',
    seoDescription:
      'Wholesale exporter of pure Zafran (Saffron) whole crimson threads from Pakistan for international specialty retailers and food distributors.',
    highlightsTitle: 'Product Range',
    highlights: ['Whole Crimson Threads', 'Natural Aroma & Color', 'Sealed Glass Jars'],
    specifications: [
      { label: 'Product Category', value: 'Pure Zafran (Saffron)' },
      { label: 'Product Format', value: 'Whole crimson saffron threads' },
      { label: 'Origin & Handling', value: 'Selected and supplied by Butter Valley Ltd., Pakistan' },
      { label: 'Quality Control', value: 'Purity verification & food handling compliance' },
      { label: 'Export Compliance', value: 'PSW Registration & Chamber of Commerce Membership' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    packagingInfo: [
      { label: 'Container Format', value: 'Airtight sealed glass jars for specialty & wholesale supply' },
      { label: 'Export Markets', value: 'UAE, Saudi Arabia, United Kingdom, United States' },
    ],
    qualityHighlights: [
      'Carefully selected whole saffron threads preserving natural aroma and color',
      'Handled in clean, hygienic packing conditions for international transit',
      'Supported by PSW export registration and buyer compliance documentation',
    ],
    exportInfo:
      'Supplied to specialty food importers, culinary distributors and retail buyers in the UAE, Saudi Arabia, United Kingdom and United States.',
    skus: [
      {
        name: 'Pure Zafran (Saffron)',
        image: '/assets/aistudio/Zaffron_0c43d86f.png',
        imageFit: 'cover',
        note: 'Whole crimson Zafran threads · Wholesale & export inquiry',
      },
    ],
    faqs: [
      {
        question: 'How is Pure Zafran (Saffron) packaged for export?',
        answer:
          'Whole crimson Zafran threads are supplied in sealed containers designed to protect delicate aroma and pigment integrity during transit.',
      },
      {
        question: 'Is Zafran available for specialty retail and foodservice buyers?',
        answer:
          'Yes, both wholesale foodservice buyers and specialty retailers can inquire for custom carton and order specifications.',
      },
      {
        question: 'How can I request a wholesale quote for Zafran?',
        answer:
          'Click Request a Quote on this page and select Pure Zafran (Saffron) to connect directly with our export desk.',
      },
    ],
  },
  {
    id: 'rhodes-grass',
    slug: 'rhodes-grass',
    path: '/products/rhodes-grass',
    name: 'Rhodes Grass',
    shortName: 'Rhodes Grass',
    kicker: 'Agricultural & Livestock Export · Pakistan',
    shortDescription:
      'Premium quality Rhodes Grass, carefully sourced and prepared for international agricultural and livestock markets.',
    fullDescription:
      'Premium quality Rhodes Grass, carefully sourced and prepared for international agricultural and livestock markets. Supplied by Butter Valley Ltd. for wholesale forage buyers and regional livestock distributors.',
    heroImage: '/assets/aistudio/Rhode_Grass_587a95be.png',
    heroImageFit: 'cover',
    heroAlt: 'Fresh lush green Rhodes Grass field with the Butter Valley Co. official emblem',
    seoTitle: 'Rhodes Grass Exporter Pakistan | Agricultural & Livestock Forage | Butter Valley Ltd.',
    seoDescription:
      'Premium quality Rhodes Grass from Pakistan, carefully sourced and prepared by Butter Valley Ltd. for international agricultural and livestock markets.',
    highlightsTitle: 'Forage & Supply Highlights',
    highlights: [
      'Livestock & Agricultural Supply',
      'Carefully Sourced at Origin',
      'Prepared for Export Transit',
      'Wholesale Buyer Inquiries',
    ],
    specifications: [
      { label: 'Product Category', value: 'Rhodes Grass (Agricultural Forage)' },
      { label: 'Target Sector', value: 'International agricultural & livestock markets' },
      { label: 'Supply Origin', value: 'Sourced and prepared in Pakistan' },
      { label: 'Export Readiness', value: 'PSW Registered Exporter (UN-00-4901518)' },
      { label: 'Compliance Documentation', value: 'Standard commercial & customs export documentation' },
      { label: 'Buyer Coordination', value: 'Available for direct wholesale & bulk quotations' },
    ],
    packagingInfo: [
      { label: 'Supply Format', value: 'Export-prepared bales for livestock & forage trade' },
      { label: 'Export Markets', value: 'Gulf / Middle East & international agricultural buyers' },
    ],
    qualityHighlights: [
      'Sourced and prepared with focus on cleanliness and consistent forage quality',
      'Coordinated directly through Butter Valley Ltd. export channels in Pakistan',
      'Supported by PSW export registration and Chamber of Commerce membership',
    ],
    exportInfo:
      'Prepared for wholesale agricultural importers, livestock farms and forage distributors across international markets.',
    skus: [
      {
        name: 'Rhodes Grass',
        image: '/assets/aistudio/Rhode_Grass_587a95be.png',
        imageFit: 'cover',
        note: 'Agricultural & livestock forage · Wholesale export inquiry',
      },
    ],
    faqs: [
      {
        question: 'Who is Butter Valley Rhodes Grass intended for?',
        answer:
          'Our Rhodes Grass is sourced and prepared specifically for international agricultural importers, livestock farms and wholesale forage buyers.',
      },
      {
        question: 'How can I request wholesale specifications or pricing for Rhodes Grass?',
        answer:
          'Use our Request a Quote form and select Rhodes Grass, or connect with our team via WhatsApp or email with your destination port and volume requirements.',
      },
      {
        question: 'Does Butter Valley handle export documentation for agricultural shipments?',
        answer:
          'Yes, our export desk is PSW registered and prepares standard export and commercial shipping documentation for qualified wholesale buyers.',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  if (slug === 'shilajit-saffron') {
    return PRODUCT_CATEGORIES.find((cat) => cat.slug === 'shilajit');
  }
  return PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
}
