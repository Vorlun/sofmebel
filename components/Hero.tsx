import Image from 'next/image';
import { FeaturedProducts } from '@/components/FeaturedProducts';

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative isolate overflow-hidden rounded-2xl bg-greenDeep text-beigeLight shadow-soft">
      <Image
        src="/images/real/hero.jpg"
        alt="Zamonaviy yashash xonasi"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#13291d]/90 via-[#1f3d2b]/70 to-[#1f3d2b]/30" />

      <div className="relative z-10 mx-auto grid min-h-[640px] w-full max-w-7xl gap-8 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-beigeLight/40 bg-beigeLight/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-goldAccent">
            Premium mebel showroom
          </p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Uyingizni qulay va nafis qiling
          </h1>
          <p className="mt-5 max-w-xl text-sm text-beigeLight/90 sm:text-base">
            Sof Mebel bilan zamonaviy va sifatli mebellar orqali uyingizga yangi hayot bag‘ishlang.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row">
            <label className="sr-only" htmlFor="search">
              Mahsulot qidirish
            </label>
            <input
              id="search"
              type="text"
              placeholder="Mahsulot qidirish..."
              className="w-full rounded-2xl border border-beigeLight/40 bg-beigeLight/10 px-5 py-3 text-beigeLight placeholder:text-beigeLight/70 outline-none backdrop-blur-sm transition duration-300 focus:border-goldAccent focus:ring-2 focus:ring-goldAccent/40"
            />
            <button
              type="button"
              className="rounded-2xl bg-goldAccent px-7 py-3 font-semibold text-greenDeep transition duration-300 hover:-translate-y-0.5 hover:bg-[#d3b57b]"
            >
              Batafsil
            </button>
          </div>

          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">500+</p>
              <p className="text-xs text-beigeLight/80">Mahsulot</p>
            </div>
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">24/7</p>
              <p className="text-xs text-beigeLight/80">Qo‘llab-quvvatlash</p>
            </div>
            <div className="glass-card rounded-2xl px-3 py-3 text-center">
              <p className="font-display text-xl text-goldAccent">10 kun</p>
              <p className="text-xs text-beigeLight/80">O‘rtacha yetkazish</p>
            </div>
          </div>
        </div>

        <div className="justify-self-end lg:translate-y-6">
          <FeaturedProducts />
        </div>
      </div>
    </section>
  );
}
