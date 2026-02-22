import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SHOWROOM_IMAGES } from '@/constants/showroom';

export function ShowroomSection() {
  return (
    <section className="mt-40">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Showroom
          </p>

          <h2 className="mt-6 text-4xl font-display text-primary sm:text-5xl">
            Jonli interyer ilhomlari
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          
          {/* Large image */}
          <div className="relative md:col-span-2 h-[500px] overflow-hidden rounded-[2rem] shadow-luxury group">
            <Image
              src={SHOWROOM_IMAGES[0].src}
              alt={SHOWROOM_IMAGES[0].alt}
              fill
              className="object-cover transition duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-lg font-semibold">Luxury Living</p>
            </div>
          </div>

          {/* Side images */}
          <div className="grid gap-10">
            {SHOWROOM_IMAGES.slice(1).map((image) => (
              <div
                key={image.alt}
                className="relative h-[240px] overflow-hidden rounded-[2rem] shadow-soft group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}