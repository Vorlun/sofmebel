export interface CollectionItem {
  title: string;
  description: string;
  image: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    title: 'Yashash xonasi',
    description:
      'Keng divanlar, zamonaviy stol va qulay kreslolar to‘plami.',
    image: '/images/real/collection-living.jpg'
  },
  {
    title: 'Yotoqxona',
    description:
      'Dam olish uchun minimalist va nafis yotoqxona mebellari.',
    image: '/images/real/collection-bedroom.jpg'
  },
  {
    title: 'Oshxona va ovqatlanish',
    description:
      'Issiq muhit yaratadigan stol-stul kombinatsiyalari.',
    image: '/images/real/collection-dining.jpg'
  }
];