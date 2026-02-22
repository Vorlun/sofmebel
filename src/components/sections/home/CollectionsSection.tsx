import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { COLLECTIONS } from '@/constants/collections';
import { cn } from '@/lib/utils';

export function CollectionsSection() {
  return (
    <section id="mebel" className="mt-32">
      <Container>
        <SectionTitle
          label="Kolleksiyalar"
          title="Har xona uchun maxsus yechim"
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {COLLECTIONS.map((collection) => (
            <article
              key={collection.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                "bg-white border border-primary/5",
                "transition-all duration-500 ease-smooth",
                "hover:-translate-y-3 hover:shadow-luxury"
              )}
            >
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="font-display text-2xl leading-snug text-primary">
                  {collection.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {collection.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}