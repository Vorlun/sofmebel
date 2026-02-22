import Link from 'next/link';

export default function OnlineMagazinePage() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-accent">
        Online Magazine
      </p>

      <h1 className="mt-4 text-4xl font-display text-primary sm:text-5xl">
        Tez kunda
      </h1>

      <p className="mt-4 max-w-md text-muted">
        Tez orada dizayn va interyer ilhomlari bo‘yicha maqolalar joylanadi.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </section>
  );
}