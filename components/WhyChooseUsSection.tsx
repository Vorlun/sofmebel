const highlights = [
  {
    title: 'Tabiiy materiallar',
    description: 'Yog‘och, mato va aksessuarlar sifat nazoratidan o‘tgan premium materiallardan tanlanadi.'
  },
  {
    title: 'Moslashtirilgan dizayn',
    description: 'Har bir buyurtma interyer uslubingizga mos rang, o‘lcham va kompozitsiya bilan tayyorlanadi.'
  },
  {
    title: 'Kafolat va servis',
    description: 'Yetkazib berishdan keyin ham montaj va servis qo‘llab-quvvatlovi davom etadi.'
  }
];

const stats = [
  { value: '12+', label: 'Yillik tajriba' },
  { value: '4.9', label: 'Mijoz bahosi' },
  { value: '900+', label: 'Tayyor loyiha' }
];

export function WhyChooseUsSection() {
  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8 lg:mt-14 lg:px-10">
      <div className="grid gap-6 rounded-2xl bg-greenDeep p-6 text-beigeLight shadow-soft md:grid-cols-[1.2fr_1fr] md:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-goldAccent">Nega Sof Mebel</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Sifat, uslub va qulaylik bir joyda</h2>

          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-beigeLight/20 bg-beigeLight/10 p-4">
                <h3 className="font-semibold text-goldAccent">{item.title}</h3>
                <p className="mt-1 text-sm text-beigeLight/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 self-end">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-display text-4xl text-goldAccent">{stat.value}</p>
              <p className="mt-2 text-sm text-beigeLight/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
