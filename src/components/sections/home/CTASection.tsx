import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="mt-48 pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-20 py-28 text-white shadow-luxury">
          
          {/* Soft gradient light */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid items-center gap-16 lg:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-accent">
                Bepul maslahat
              </p>

              <h2 className="mt-10 text-6xl font-display leading-tight">
                Interyeringiz uchun
                <br />
                mukammal tanlov
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
                Dizaynerlarimiz bilan bog‘laning va uyingiz
                uchun premium kolleksiyani tanlang.
              </p>
            </div>

            {/* RIGHT SIDE CARD */}
            <div className="relative rounded-3xl bg-white/10 p-12 backdrop-blur-xl border border-white/10">
              
              <h3 className="text-2xl font-semibold text-white">
                Konsultatsiya olish
              </h3>

              <p className="mt-4 text-sm text-white/70">
                24 soat ichida siz bilan bog‘lanamiz.
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <Button variant="primary" size="lg">
                  Uchrashuv belgilash
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Katalogni yuklab olish
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}