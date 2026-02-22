import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MAGAZINE_ITEMS } from '@/constants/magazine';

export function OnlineMagazineSection() {
  return (
    <section id="online-magazine" className="mt-24">
      <Container>
        <SectionTitle
          label="Online Magazine"
          title="Italian va Turkiya uslubida ilhomlar"
          description="Tez orada dizayn va interyer ilhomlari bo‘yicha maqolalar joylanadi."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {MAGAZINE_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}