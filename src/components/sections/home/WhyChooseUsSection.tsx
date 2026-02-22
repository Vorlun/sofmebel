import { Container } from '@/components/ui/Container';
import { HIGHLIGHTS, STATS } from '@/constants/whyChoose';

export function WhyChooseUsSection() {
  return (
    <section className="mt-40">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-16 py-24 text-white shadow-luxury">
          
          {/* Ambient glow */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid items-start gap-20 lg:grid-cols-2">
            
            {/* LEFT SIDE */}
            <div>
              {/* Custom Premium Title */}
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
                Nega Sof Mebel
              </p>

              <h2 className="mt-8 text-5xl font-display leading-tight sm:text-6xl">
                Sifat, uslub va
                <br />
                qulaylik bir joyda
              </h2>

              <div className="mt-14 space-y-10">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-2xl font-semibold text-accent">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-10">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white/10 px-12 py-10 text-center backdrop-blur-md transition-all duration-500 hover:bg-white/15 hover:shadow-xl"
                >
                  <p className="text-6xl font-display text-accent">
                    {stat.value}
                  </p>

                  <p className="mt-4 text-base tracking-wide text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}