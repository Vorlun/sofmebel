import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  return (
    <section className="bg-[#f7f5f2] py-28">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* TEXT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Biz haqimizda
            </p>

            <h2 className="mt-6 text-4xl font-display leading-tight text-primary sm:text-5xl">
              Har bir uy uchun nafis yechim
            </h2>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-secondary">
              Biz mijozlarimizga sifatli, zamonaviy va uzoq xizmat qiladigan
              mebellarni taklif qilamiz. Har bir detal — nafislik va qulaylik
              uyg‘unligi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Yuqori sifat", "Individual dizayn", "Tez yetkazish"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/10 bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm transition hover:shadow-md"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-accent/10" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/real/about.jpg"
                alt="Sifatli mebel kolleksiyasi"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
