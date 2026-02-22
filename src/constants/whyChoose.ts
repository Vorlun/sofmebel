export interface Highlight {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Tabiiy materiallar',
    description:
      'Yog‘och, mato va aksessuarlar premium materiallardan tanlanadi.'
  },
  {
    title: 'Moslashtirilgan dizayn',
    description:
      'Har bir buyurtma interyer uslubingizga mos tayyorlanadi.'
  },
  {
    title: 'Kafolat va servis',
    description:
      'Yetkazib berishdan keyin ham montaj va servis qo‘llab-quvvatlovi davom etadi.'
  }
];

export const STATS: Stat[] = [
  { value: '12+', label: 'Yillik tajriba' },
  { value: '4.9', label: 'Mijoz bahosi' },
  { value: '900+', label: 'Tayyor loyiha' }
];