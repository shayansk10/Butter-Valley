export const COMPANY = {
  name: 'Butter Valley Ltd.',
  shortName: 'Butter Valley',
  tagline: 'Spread The Love',
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
