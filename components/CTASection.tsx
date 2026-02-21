export function CTASection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-5 pb-14 sm:px-8 lg:mt-14 lg:px-10 lg:pb-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a3325] via-[#244834] to-[#1f3d2b] p-8 text-beigeLight shadow-soft sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-goldAccent/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-beigeLight/10 blur-3xl" />

        <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Bepul maslahat</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Interyeringiz uchun mos kolleksiyani birga tanlaymiz</h2>
            <p className="mt-3 max-w-2xl text-sm text-beigeLight/90 sm:text-base">
              Dizaynerimiz bilan bog‘laning va xonangiz o‘lchamiga mos, estetik va uzoq xizmat qiladigan mebel yechimini oling.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-goldAccent px-6 py-3 font-semibold text-greenDeep transition duration-300 hover:-translate-y-0.5 hover:bg-[#d5bc88]"
            >
              Uchrashuv belgilash
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-beigeLight/40 bg-beigeLight/10 px-6 py-3 text-beigeLight transition duration-300 hover:bg-beigeLight/20"
            >
              Katalogni ko‘rish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
