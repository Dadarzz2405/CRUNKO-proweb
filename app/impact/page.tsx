import Link from "next/link";

export default function ImpactPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-cream">
      <div className="flex flex-col items-center gap-6 text-center px-6">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green">
          <rect x="3" y="12" width="4" height="9" rx="1" />
          <rect x="10" y="7" width="4" height="14" rx="1" />
          <rect x="17" y="3" width="4" height="18" rx="1" />
        </svg>
        <h1 className="text-3xl font-bold tracking-tight text-brand-dark">
          Segera Hadir
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-brand-dark/60">
          Halaman Pelacak Dampak sedang dalam pengembangan.
        </p>
        <Link
          href="/products"
          className="rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/20 transition-all duration-300 hover:bg-brand-green-dark hover:shadow-xl"
        >
          Lihat Produk
        </Link>
      </div>
    </section>
  );
}
