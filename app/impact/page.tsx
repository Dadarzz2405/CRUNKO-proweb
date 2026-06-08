import { SectionHeading, MetricCard, StatBar } from "@/components";

export default function ImpactPage() {
  return (
    <section className="min-h-screen bg-brand-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="Pelacak Dampak" title="Setiap Gigitan Berarti" centered />

        <div className="animate-fade-in-up mx-auto max-w-5xl overflow-hidden rounded-3xl border border-brand-beige/60 bg-white shadow-xl opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="grid gap-12 p-10 md:p-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark">Dampak Kami Secara Real-Time</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-dark/60">
                  Kami berkomitmen pada transparansi. Inilah bagaimana pilihan camilan Anda
                  membuat perbedaan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <MetricCard value="50K+" label="Pohon Ditanam" />
                <MetricCard value="12T kg" label="Plastik Terselamatkan" />
                <MetricCard value="8.5K t" label="Offset CO₂" />
                <MetricCard value="200+" label="Petani Didukung" />
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <StatBar label="Target Pengurangan Plastik" percentage={78} />
                <StatBar label="Netralitas Karbon" percentage={64} />
                <StatBar label="Sumber Organik" percentage={92} />
              </div>

              <a
                href="#"
                className="mt-2 inline-flex items-center self-start rounded-full bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/20 transition-all duration-300 hover:bg-brand-green-dark hover:shadow-xl hover:shadow-brand-green/25"
              >
                Laporan Dampak Lengkap
                <span className="ml-2 text-sm">→</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green-light via-brand-cream to-brand-beige/40 p-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-accent shadow-lg">
                  <span className="text-3xl font-black text-white">🌍</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-brand-green">86</span>
                  <span className="ml-1 text-lg font-bold text-brand-dark/50">/100</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">
                  Skor Keberlanjutan
                </p>
                <div className="mt-2 flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-brand-dark/30 shadow-sm ring-1 ring-brand-beige/40"
                    >
                      Q{i}
                    </div>
                  ))}
                </div>
                <span className="mt-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-dark/40 shadow-sm">
                  Dasbor Interaktif (Pratinjau)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
