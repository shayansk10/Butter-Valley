export interface SaltLampItem {
  id: string;
  slug: string;
  name: string;
  shortNote: string;
  description: string;
  image: string;
  alt: string;
}

export const PINK_SALT_LAMPS_COLLECTION = {
  kicker: 'NEW COLLECTION',
  subcategoryName: 'Pink Salt Lamps',
  homeHeading: 'The Warm Glow of Himalayan Salt',
  homeDescription:
    'Discover our Himalayan Pink Salt Lamps, crafted from natural Himalayan pink salt to bring a distinctive natural beauty and warm ambient glow to your surroundings.',
  buttonLabel: 'Explore Pink Salt Lamps',
  sectionPath: '/products/pink-himalayan-salt#pink-salt-lamps',
  categoryNote:
    'Offered as a dedicated natural ambient lighting subcategory under Pink Himalayan Salt, kept separate from Butter Valley edible and mineral salt grades.',
  inquiryNotice:
    'Product dimensions, weight options, electrical fitting details, carton packaging and wholesale pricing are provided directly upon quotation inquiry.',
  items: [
    {
      id: 'natural-crystal-salt-lamp',
      slug: 'natural-crystal-salt-lamp',
      name: 'Natural Crystal Salt Lamp',
      shortNote: 'Organic rough-cut crystal form',
      description:
        'Handcrafted from natural Himalayan pink salt in an organic rough-cut crystal silhouette, resting on a circular dark base to cast a warm amber glow.',
      image: '/assets/aistudio/image_49e8d1f1.png',
      alt: 'Natural rough-cut Himalayan Pink Salt Lamp glowing warmly on a dark wooden table beside a reed diffuser',
    },
    {
      id: 'geometric-cube-salt-lamp',
      slug: 'geometric-cube-salt-lamp',
      name: 'Geometric Cube Salt Lamp',
      shortNote: 'Faceted cube on wooden cradle',
      description:
        'A sculpted geometric cube cut from natural Himalayan pink salt and seated in an angled wooden stand for warm tabletop ambiance.',
      image: '/assets/aistudio/image_df819628.png',
      alt: 'Geometric cube Himalayan Pink Salt Lamp resting on an angled wooden stand with warm golden illumination',
    },
    {
      id: 'carved-sun-motif-salt-lamp',
      slug: 'carved-sun-motif-salt-lamp',
      name: 'Sun & Crescent Carved Salt Lamp',
      shortNote: 'Circular wood-framed design',
      description:
        'A decorative circular dark-wood silhouette featuring an intricate sun and crescent cutout backlit by warm glowing Himalayan salt.',
      image: '/assets/aistudio/image_cb7dadcd.png',
      alt: 'Circular carved wooden sun and crescent lamp backlit by warm glowing Himalayan Pink Salt',
    },
    {
      id: 'moon-sphere-salt-lamp',
      slug: 'moon-sphere-salt-lamp',
      name: 'Sphere Ambient Salt Lamp',
      shortNote: 'Textured sphere on wooden stand',
      description:
        'A textured spherical lamp presented on an interlocking wooden cradle stand, showcasing soft ambient illumination tones for interiors and specialty retail.',
      image: '/assets/aistudio/8a50a0ff-203b-4507-9ee0-f05b83b5e02a_e9c70b0f.jfif',
      alt: 'Spherical textured ambient lamp on an interlocking wooden stand displayed across warm light tones',
    },
  ] as readonly SaltLampItem[],
};
