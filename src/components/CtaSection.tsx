import type { Dict } from "@/i18n/types";

export default function CtaSection({
  dict,
  lang,
}: {
  dict: Dict["cta"];
  lang: string;
}) {
  return (
    <section id="cta" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #2F7F7F 0%, transparent 60%), radial-gradient(circle at 70% 50%, #4CAF50 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          {dict.title}
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
          {dict.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`/${lang}/demo`}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-primary bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-lg"
          >
            {dict.primary}
          </a>
          <a
            href={`/${lang}/demo`}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors"
          >
            {dict.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
