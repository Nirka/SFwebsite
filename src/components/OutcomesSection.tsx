import type { Dict } from "@/i18n/types";

export default function OutcomesSection({
  dict,
}: {
  dict: Dict["outcomes"];
}) {
  return (
    <section id="outcomes" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {dict.title}
          </h2>
          <p className="text-text-secondary">{dict.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map(
            (o: { metric: string; label: string; description: string }) => (
              <div
                key={o.label}
                className="bg-white rounded-xl border border-border-gray p-8 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-4xl font-bold text-teal mb-2">{o.metric}</p>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  {o.label}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {o.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
