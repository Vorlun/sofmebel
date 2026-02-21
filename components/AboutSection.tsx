import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="biz-haqimizda" className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <div className="grid gap-6 rounded-2xl bg-[#e9e4d8] p-6 shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Biz haqimizda</p>
          <h2 className="mt-3 font-display text-3xl text-greenDeep sm:text-4xl">
            Har bir uy uchun nafis yechim
          </h2>
          <p className="mt-4 max-w-2xl text-greenDeep/85">
            Biz mijozlarimizga sifatli, zamonaviy va uzoq xizmat qiladigan mebellarni taklif qilamiz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-greenDeep px-4 py-2 text-beigeLight">Yuqori sifat</span>
            <span className="rounded-full bg-white px-4 py-2 text-greenDeep">Individual dizayn</span>
            <span className="rounded-full bg-white px-4 py-2 text-greenDeep">Tez yetkazib berish</span>
          </div>
        </div>

        <div className="relative min-h-52 overflow-hidden rounded-2xl">
          <Image
            src="/images/real/about.jpg"
            alt="Sifatli mebel kolleksiyasi"
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3d2b]/55 via-transparent" />
        </div>
      </div>
    </section>
  );
}
