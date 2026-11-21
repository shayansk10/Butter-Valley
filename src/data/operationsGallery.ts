export interface OperationsPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  orientation: 'portrait' | 'landscape';
}

export const EXPORT_OPERATIONS_CONTENT = {
  heading: 'Our Stock. Our Commitment.',
  subheading: 'Prepared for Global Markets',
  description:
    'At Butter Valley, we focus on maintaining product availability and preparing our food products for international trade. Take a look at our inventory, packaged products and bulk stock through a glimpse of our operations.',
  homeHeading: 'Ready for Global Markets',
  homeDescription: 'A glimpse into our inventory, bulk products and export preparation.',
  homeButtonLabel: 'Explore Our Export Operations',
  sectionPath: '/export#export-operations',
  photos: [
    {
      id: 'packaged-cartons-retail',
      src: '/assets/aistudio/image_3_04b85e10.jfif',
      alt: 'Butter Valley packaged retail bottles, lined pouches and sealed wholesale master cartons prepared in warehouse staging',
      title: 'Packaged Cartons & Retail Goods',
      caption:
        'Export-ready cartons, sealed pouches and bottled products organized for wholesale fulfillment.',
      orientation: 'portrait',
    },
    {
      id: 'bulk-salt-sacks',
      src: '/assets/aistudio/image_d60b7f8b.png',
      alt: 'Rows of white and blue woven bulk sacks filled with Himalayan Pink Salt held in Butter Valley warehouse stock',
      title: 'Bulk Mineral Salt Sacks',
      caption:
        'Bulk woven sacks of Himalayan Pink Salt staged in warehouse storage ahead of dispatch.',
      orientation: 'portrait',
    },
    {
      id: 'container-loading-stock',
      src: '/assets/aistudio/image_4_d748cf0d.jfif',
      alt: 'Shipping container interior neatly stacked with white bulk sacks over protective floor lining',
      title: 'Container Loading Preparation',
      caption:
        'Stacked wholesale sacks arranged inside a lined shipping container prepared for export transit.',
      orientation: 'landscape',
    },
    {
      id: 'warehouse-bulk-floor',
      src: '/assets/aistudio/imge_2_542826ac.jfif',
      alt: 'Expansive warehouse floor showing bulk woven salt sacks alongside boxed Himalayan Pink Salt lamps',
      title: 'Warehouse Stock & Bulk Inventory',
      caption:
        'Bulk salt sacks and boxed mineral stock maintained across our operations area.',
      orientation: 'landscape',
    },
  ] as readonly OperationsPhoto[],
};
