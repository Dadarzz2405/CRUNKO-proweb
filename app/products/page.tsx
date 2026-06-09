import { SectionHeading, ProductCard } from "@/components";

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Produk"
          title="CRUNKO Tersedia dengan Banyak Variasi"
          centered
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            name="CRUNKO Pandan"
            description="Yangko Rasa Pandan."
            delay={0}
          />
          <ProductCard
            name="CRUNKO Melon"
            description="Yangko Rasa Melon"
            delay={150}
          />
          <ProductCard
            name="CRUNKO Stroberi"
            description="Yangko Rasa Stroberi."
            delay={300}
          />
          <ProductCard
            name="CRUNKO Matcha"
            description="Yangko Rasa Matcha."
            badge="Segera Hadir"
            delay={450}
          />
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-green transition-colors hover:text-brand-green-dark"
          >
            Lihat Semua Produk
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
