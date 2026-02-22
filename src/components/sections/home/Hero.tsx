import Image from 'next/image';
import { FeaturedProducts } from '@/components/sections/home/FeaturedProducts';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      id="bosh-sahifa"
      className="relative isolate overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/real/hero.jpg"
        alt="Zamonaviy yashash xonasi"
        fill
        priority
        className="object-cover"
      />

      {/* Balanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/25" />

      <Container className="relative z-10 grid min-h-screen items-center gap-16 pt-28 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}
        <div className="max-w-2xl text-white">
          <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent backdrop-blur-sm">
            Premium mebel showroom
          </p>

          <h1 className="mt-6 text-4xl font-display leading-[1.1] sm:text-5xl lg:text-6xl">
            Uyingizni <span className="text-accent">nafis</span> va qulay qiling
          </h1>

          <p className="mt-6 max-w-lg text-base text-white/80">
            Zamonaviy va sifatli mebellar orqali interyeringizga yangi hayot bag‘ishlang.
          </p>

          {/* Search */}
          <div className="mt-10 flex w-full max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder:text-white/70 backdrop-blur-md transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
            />

            <Button size="lg" className="rounded-full">
              Batafsil
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { value: '500+', label: 'Mahsulot' },
              { value: '24/7', label: 'Qo‘llab-quvvatlash' },
              { value: '10 kun', label: 'Yetkazish' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-display text-accent">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="justify-self-end">
          <FeaturedProducts />
        </div>
      </Container>
    </section>
  );
}