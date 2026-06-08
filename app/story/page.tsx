import { SectionHeading, TimelineItem } from "@/components";

export default function StoryPage() {
  return (
    <section className="min-h-screen bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Cerita Kami"
          title="Dari Meja Dapur ke Dapur Anda"
          centered
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative pl-8 md:pl-0">
            <TimelineItem
              year="2021"
              title="Gagasan Besar"
              description="Dua sahabat berbagi visi: camilan yang menyehatkan manusia dan bumi. Resep pertama diuji coba di dapur rumah mungil."
              side="left"
            />
            <TimelineItem
              year="2022"
              title="Batch Pertama"
              description="1.000 kantong pertama kami habis terjual dalam dua minggu di pasar petani lokal. Responsnya luar biasa dan mengonfirmasi bahwa kami berada di jalur yang tepat."
              side="right"
            />
            <TimelineItem
              year="2023"
              title="Bersertifikasi Organik"
              description="Kami mencapai sertifikasi organik penuh dan bermitra dengan pertanian regeneratif di seluruh wilayah. Setiap bahan kini memenuhi standar tertinggi."
              side="left"
            />
            <TimelineItem
              year="2024"
              title="1 Juta Kantong"
              description="Momen pencapaian. Satu juta kantong camilan CRUNKO terjual — dan satu juta langkah lebih dekat menuju sistem pangan yang lebih sehat."
              side="right"
            />
            <TimelineItem
              year="2025"
              title="Netral Karbon"
              description="Kami menjadi perusahaan bersertifikat netral karbon. Seluruh rantai pasokan kami — dari pertanian hingga ke pintu — beroperasi dengan emisi nol-bersih."
              side="left"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-beige bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-dark transition-all duration-300 hover:border-brand-green/30 hover:bg-brand-green-light hover:shadow-lg"
          >
            Baca Cerita Lengkap
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
