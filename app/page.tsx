import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-32 -top-32 h-96 w-96 bg-brand-green/10 blur-3xl" />
        <div
          className="animate-blob absolute -bottom-32 -right-32 h-96 w-96 bg-brand-accent/10 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="animate-blob absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 bg-brand-beige/30 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:py-32">
        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="inline-block rounded-full border border-brand-green/20 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green shadow-sm backdrop-blur-sm">
              🌱 Berbasis Tanaman · Organik · Bebas Limbah
            </span>
          </div>

          <h1
            className="animate-fade-in-up max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-dark opacity-0 md:text-6xl md:leading-[1.1] lg:text-7xl"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            Camilan Sehat
            <br />
            <span className="bg-gradient-to-r from-brand-green to-brand-accent bg-clip-text text-transparent">
              Cita Rasa Lokal
            </span>
          </h1>

          <p
            className="animate-fade-in-up max-w-lg text-base leading-relaxed text-brand-dark/60 opacity-0 md:text-lg"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Camilan renyah dan bergizi yang dibuat dari bahan organik. Setiap
            gigitan mengandung kejutan.
          </p>

          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-4 opacity-0"
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            <a
              href="/products"
              className="rounded-full bg-brand-green px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/25 transition-all duration-300 hover:bg-brand-green-dark hover:shadow-xl hover:shadow-brand-green/30 hover:-translate-y-0.5"
            >
              Jelajahi Camilan Kami
            </a>
            <a
              href="/story"
              className="rounded-full border-2 border-brand-beige bg-white/60 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-dark transition-all duration-300 hover:border-brand-green/30 hover:bg-white hover:shadow-lg"
            >
              Cerita Kami
            </a>
          </div>
        </div>

        <div
          className="animate-fade-in-up relative flex flex-1 items-center justify-center opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="animate-float w-full">
            <Image
              src="/product.png"
              alt="Produk CRUNKO"
              width={15000}
              height={15000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent" />
    </section>
  );
}
