import { SectionHeading, SocialIcon, FormField } from "@/components";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-brand-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="Kontak" title="Mari Bergabung Bersama" centered />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="flex flex-col gap-6 rounded-3xl border border-brand-beige/60 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark">Hubungi Kami</h3>
              <p className="text-sm leading-relaxed text-brand-dark/60">
                Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Kami akan senang
                mendengar dari Anda.
              </p>

              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-brand-green to-brand-accent px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/25 hover:-translate-y-0.5"
              >
                <span className="text-lg">💬</span>
                  Chat di WhatsApp
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark/40">
                  Ikuti Kami
                </span>
                <div className="flex gap-3">
                  <SocialIcon label="IG" />
                  <SocialIcon label="FB" />
                  <SocialIcon label="TW" />
                  <SocialIcon label="TK" />
                  <SocialIcon label="LI" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-beige/60 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-light">
                  <span className="text-lg">📬</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">Email Kami</p>
                  <p className="text-sm text-brand-dark/50">hello@crunko.snacks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-beige/60 bg-white p-8 shadow-sm lg:col-span-3">
            <h3 className="mb-6 text-lg font-bold text-brand-dark">Kirim Pesan</h3>
            <form className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Nama" />
                <FormField label="Email" />
              </div>
              <FormField label="Subjek" />
              <FormField label="Pesan" multiline />
              <button
                type="submit"
                className="self-start rounded-full bg-brand-green px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/20 transition-all duration-300 hover:bg-brand-green-dark hover:shadow-xl hover:shadow-brand-green/25 hover:-translate-y-0.5"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
