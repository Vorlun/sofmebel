import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background">
      <Container className="py-20">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-display text-primary">
              <span className="text-accent">Sof</span> Mebel
            </h3>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-secondary">
              Premium interyer uchun zamonaviy va nafis
              mebel yechimlari.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Sahifalar
            </p>

            <nav className="mt-8 flex flex-col gap-4 text-base text-primary">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative w-fit transition-colors hover:text-accent"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Aloqa
            </p>

            <div className="mt-8 space-y-4 text-base text-primary">
              <p>Toshkent, O‘zbekiston</p>
              <p>+998 90 123 45 67</p>
              <p>info@sofmebel.uz</p>
            </div>
          </div>

        </div>

        {/* SUBFOOTER */}
        <div className="mt-16 flex flex-col gap-6 border-t border-primary/10 pt-8 md:flex-row md:items-center md:justify-between">
          
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Sof Mebel. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex gap-8 text-sm text-secondary">
            <Link href="#" className="hover:text-accent transition">
              Instagram
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Telegram
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Facebook
            </Link>
          </div>

        </div>

      </Container>
    </footer>
  );
}