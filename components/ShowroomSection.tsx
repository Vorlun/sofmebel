import Image from 'next/image';

const images = [
  {
    src: '/images/real/showroom-main.jpg',
    alt: 'Premium showroom zonasi'
  },
  {
    src: '/images/real/showroom-side-1.jpg',
    alt: 'Zamonaviy ovqatlanish zonasi'
  },
  {
    src: '/images/real/showroom-side-2.jpg',
    alt: 'Minimalist mehmonxona interyeri'
  }
];

export function ShowroomSection() {
  return (
    <section id="aksessuarlar" className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Showroom</p>
        <h2 className="mt-2 font-display text-3xl text-greenDeep sm:text-4xl">Jonli interyer ilhomlari</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="relative min-h-80 overflow-hidden rounded-2xl md:col-span-2">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/70 via-transparent" />
          <p className="absolute bottom-4 left-4 rounded-full bg-beigeLight/85 px-4 py-1 text-sm text-greenDeep">
            Luxury Living Line
          </p>
        </div>

        <div className="grid gap-5">
          {images.slice(1).map((image) => (
            <div key={image.alt} className="relative min-h-36 overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/55 via-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
