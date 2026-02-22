export interface MagazineItem {
  title: string;
  description: string;
  image: string;
}

export const MAGAZINE_ITEMS: MagazineItem[] = [
  {
    title: 'Italian Design Notes',
    description:
      'Minimal shakllar, yumshoq ranglar va premium kompozitsiya yondashuvlari.',
    image: '/images/real/magazine-italian.jpg'
  },
  {
    title: 'Turkiya Mebel Trendlari',
    description:
      'Ustaxona sifati, klassik elementlar va zamonaviy interyerga mos yechimlar.',
    image: '/images/real/magazine-turkiya.jpg'
  },
  {
    title: 'Material & Texture',
    description:
      'Mato, yog‘och va metal uyg‘unligi bo‘yicha amaliy tavsiyalar.',
    image: '/images/real/magazine-material.jpg'
  }
];