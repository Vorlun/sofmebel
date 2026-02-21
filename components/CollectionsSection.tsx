import Image from 'next/image';

const collections = [
  {
    title: 'Yashash xonasi',
    description: 'Keng divanlar, zamonaviy stol va qulay kreslolar to‘plami.',
    image:
      '/images/real/collection-living.jpg'
  },
  {
    title: 'Yotoqxona',
    description: 'Dam olish uchun minimalist va nafis yotoqxona mebellari.',
    image:
      '/images/real/collection-bedroom.jpg'
  },
  {
    title: 'Oshxona va ovqatlanish',
    description: 'Issiq muhit yaratadigan stol-stul kombinatsiyalari.',
    image:
      '/images/real/collection-dining.jpg'
  }
];

export function CollectionsSection() {
  return (
    <section id="mebel" className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#f0ece3]/75 p-5 shadow-soft sm:p-6 lg:p-8">
        <Image
          src="/images/real/showroom-main.jpg"
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f2e8]/90 via-[#f3efe5]/82 to-[#ece7dc]/88" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-goldAccent/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Kolleksiyalar</p>
              <h2 className="mt-2 font-display text-3xl text-greenDeep sm:text-4xl">Har xona uchun maxsus yechim</h2>
            </div>
            <a
              href="#"
              className="hidden rounded-2xl border border-greenDeep/20 bg-white/70 px-4 py-2 text-sm text-greenDeep transition duration-300 hover:-translate-y-0.5 hover:bg-white md:inline-flex"
            >
              Barcha kolleksiyalar
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((collection, index) => (
              <article
                key={collection.title}
                className="group relative overflow-hidden rounded-2xl border border-greenDeep/10 bg-white/75 p-4 shadow-soft transition duration-300 hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#dcd6c7]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={720}
                    height={460}
                    unoptimized
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute left-7 top-7 rounded-full bg-beigeLight/85 px-3 py-1 text-xs font-medium text-greenDeep">
                  0{index + 1}
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-2xl text-greenDeep">{collection.title}</h3>
                  <p className="mt-2 text-sm text-greenDeep/80">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
