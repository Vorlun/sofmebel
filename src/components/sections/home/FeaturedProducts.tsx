import Image from 'next/image';
import { FEATURED_PRODUCTS } from '@/constants/products';
import { Button } from '@/components/ui/Button';

export function FeaturedProducts() {
  return (
    <aside className="w-full max-w-sm rounded-3xl bg-black/40 p-6 backdrop-blur-md border border-white/20 shadow-luxury text-white">
      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
        Tanlangan mahsulotlar
      </p>

      <ul className="space-y-4">
        {FEATURED_PRODUCTS.map((product) => (
          <li
            key={product.name}
            className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition hover:bg-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-sm font-medium text-white/90">
                {product.name}
              </span>
            </div>

            <span className="text-sm font-semibold text-accent">
              {product.price}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant="primary"
        size="lg"
        className="mt-8 w-full rounded-full"
      >
        Ko‘proq mahsulot
      </Button>
    </aside>
  );
}