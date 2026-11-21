export const COMPANY = {
  name: 'Butter Valley Ltd.',
  legalName: 'R&J Butter Valley',
  shortName: 'Butter Valley',
  tagline: 'Spread The Love',
  mission:
    'To become a globally trusted and reliable supplier of Pink Himalayan Salt, recognized for quality, sustainability, reliability and customer satisfaction.',
  website: 'https://buttervalley.org',
  email: 'buttervalley30@gmail.com',
  address:
    'Plot No. A-23, Besides MCB SITE Branch, Opposite Rangers Headquarters, Main Auto Bhan Road, Near Fateh Chowk, SITE Hyderabad, Sindh, Pakistan.',
  cityRegion: 'Hyderabad, Sindh, Pakistan',
  saltOrigin: 'Khewra Salt Mine, Punjab, Pakistan',
  logo: '/assets/aistudio/butter-valley-logo_25e426e5.jpeg',
  heroImage: '/assets/aistudio/main-hero-background_c1f2a056.JPG',
  homeHeroImage: '/assets/aistudio/Golden_Saffron_Spice_Still_Life_ea78f56b.png',
  social: {
    facebook:
      'https://www.facebook.com/people/Butter-Valley/pfbid02gG2WgkaywgFrbTMfxxkiCU2nbpvBZYjnzQbK47wdb2kfCRgYhmJyuMLXYUMX3D2fl/',
    instagram: 'https://www.instagram.com/butter.valley/',
  },
  // Configurable via VITE_CONTACT_PHONE / VITE_CONTACT_WHATSAPP once the client confirms the preferred number
  phone: (import.meta.env.VITE_CONTACT_PHONE as string | undefined) || '',
  whatsapp: (import.meta.env.VITE_CONTACT_WHATSAPP as string | undefined) || '',
};

export const EXPORT_DESTINATIONS = [
  {
    name: 'United Arab Emirates',
    code: 'AE',
    region: 'Middle East / GCC',
    summary:
      'Supplying wholesale food importers, specialty grocers and regional distributors across the Emirates.',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    region: 'Middle East / GCC',
    summary:
      'Halal-certified Pakistani recipe mixes, pure spices, spreads and Pink Himalayan Salt for Kingdom buyers.',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    region: 'Europe',
    summary:
      'Authentic South Asian pantry staples, nut spreads and Khewra mineral salt prepared for UK wholesale trade.',
  },
  {
    name: 'United States',
    code: 'US',
    region: 'North America',
    summary:
      'Export-ready packaging and consistent manufacturing standards supporting US wholesale and specialty distribution.',
  },
] as const;

export const GLOBAL_REACH_REGIONS = {
  gcc: {
    title: 'Middle East / GCC',
    destinations: [
      {
        name: 'United Arab Emirates',
        code: 'AE',
        region: 'Middle East / GCC',
        summary:
          'Supplying wholesale food importers, specialty grocers and regional distributors across the Emirates.',
      },
      {
        name: 'Saudi Arabia',
        code: 'SA',
        region: 'Middle East / GCC',
        summary:
          'Halal-certified Pakistani recipe mixes, pure spices, spreads and Pink Himalayan Salt for Kingdom buyers.',
      },
      {
        name: 'Qatar',
        code: 'QA',
        region: 'Middle East / GCC',
        summary:
          'Export-ready range tailored for wholesale food importers, retail buyers and hospitality channels in Qatar.',
      },
      {
        name: 'Kuwait',
        code: 'KW',
        region: 'Middle East / GCC',
        summary:
          'Halal-oriented pantry staples, artisanal spreads, spices and Khewra mineral salt prepared for Kuwait inquiries.',
      },
      {
        name: 'Bahrain',
        code: 'BH',
        region: 'Middle East / GCC',
        summary:
          'Wholesale product availability across spreads, seasonings, Pink Himalayan Salt and ambient salt lamps for Bahrain.',
      },
      {
        name: 'Oman',
        code: 'OM',
        region: 'Middle East / GCC',
        summary:
          'Direct manufacturer export inquiries supporting retail, spice and specialty food distributors across Oman.',
      },
    ],
  },
  europe: {
    title: 'Europe',
    destinations: [
      {
        name: 'United Kingdom',
        code: 'GB',
        region: 'Europe',
        summary:
          'Authentic South Asian pantry staples, nut spreads and Khewra mineral salt prepared for UK wholesale trade.',
      },
      {
        name: 'European Markets',
        code: 'EU',
        region: 'Europe',
        summary:
          'Extending wholesale export outreach across wider European markets seeking authentic Pakistani food and mineral products.',
      },
    ],
  },
  northAmerica: {
    title: 'North America',
    destinations: [
      {
        name: 'United States',
        code: 'US',
        region: 'North America',
        summary:
          'Export-ready packaging and consistent manufacturing standards supporting US wholesale and specialty distribution.',
      },
    ],
  },
} as const;

export const QUALITY_CREDENTIALS = [
  {
    title: 'Halal Certification',
    summary:
      'Manufacturing, ingredient sourcing and handling processes aligned with Halal compliance requirements for international markets.',
  },
  {
    title: 'PCSIR Test Report',
    summary:
      'Supported by Pakistan Council of Scientific and Industrial Research (PCSIR) laboratory testing for purity and mineral composition.',
  },
  {
    title: 'PSW Registration',
    summary:
      'Registered under Pakistan Single Window (PSW) to support compliant cross-border customs clearance and international trade.',
  },
  {
    title: 'Chamber of Commerce Membership',
    summary:
      'Recognized member of the Chamber of Commerce, reinforcing institutional accountability for wholesale export buyers.',
  },
] as const;

export const OFFICIAL_REGISTRATIONS = [
  {
    label: 'PSW Registration',
    code: 'UN-00-4901518',
    category: 'Trade Registration',
    summary:
      'Registered under Pakistan Single Window (PSW) to support compliant export documentation and cross-border customs clearance.',
  },
  {
    label: 'NTN',
    code: '4901518',
    category: 'Tax Registration',
    summary:
      'Registered National Tax Number (NTN) confirming formal commercial standing for domestic and international wholesale transactions.',
  },
  {
    label: 'Chamber of Commerce Membership',
    code: '1045',
    category: 'Institutional Membership',
    summary:
      'Active Chamber of Commerce membership supporting recognized export governance and commercial trade relations.',
  },
  {
    label: 'Halal Certification',
    code: 'htc/RJBV/2022/1',
    category: 'Food Compliance',
    summary:
      'Certification verifying that ingredient sourcing, food preparation and handling align with Halal compliance standards.',
  },
  {
    label: 'PCSIR Test Report',
    code: 'ILD/ATR/2022-17512',
    category: 'Laboratory Testing',
    summary:
      'Pakistan Council of Scientific and Industrial Research (PCSIR) test report supporting purity and mineral composition verification.',
  },
] as const;

export const WHY_CHOOSE_BUTTER_VALLEY = [
  {
    title: 'Competitive Rates',
    description:
      'Manufacturing and sourcing at origin help provide competitive wholesale pricing.',
  },
  {
    title: 'Quality-Focused Products',
    description:
      'Focus on reliable sourcing, product quality and international food safety principles.',
  },
  {
    title: 'Strong Business Connections',
    description:
      'Established business relationships with chambers of commerce, producers and distribution partners.',
  },
] as const;

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly initials: string;
  readonly designation: string;
  readonly email: string;
  readonly phone?: string;
  readonly phoneHref?: string;
}

export const LEADERSHIP_TEAM: readonly TeamMember[] = [
  {
    id: 'imad-uddin-shaikh',
    name: 'Imad Uddin Shaikh',
    initials: 'IS',
    designation: 'Co-founder & Director',
    phone: '+92 336 0359225',
    phoneHref: 'tel:+923360359225',
    email: 'imadshaikh@yahoo.com',
  },
  {
    id: 'jahanzaib-ul-hassan-shaikh',
    name: 'Jahanzaib Ul Hassan Shaikh',
    initials: 'JS',
    designation: 'Co-founder & Director',
    phone: '+92 333 2629716',
    phoneHref: 'tel:+923332629716',
    email: 'jahanzaibulhassanshaikh@gmail.com',
  },
  {
    id: 'rashid-bin-idrees',
    name: 'Rashid Bin Idrees',
    initials: 'RI',
    designation: 'CFO',
    email: 'rashidbinidrees@gmail.com',
  },
  {
    id: 'imran-uddin',
    name: 'Imran Uddin',
    initials: 'IU',
    designation: 'GM (Sales & Marketing)',
    email: 'Imranuddin_82@yahoo.com',
  },
  {
    id: 'nimra-jamil',
    name: 'Nimra Jamil',
    initials: 'NJ',
    designation: 'Technical Assistance & Queries',
    email: 'Nimsidd1994@gmail.com',
  },
] as const;
