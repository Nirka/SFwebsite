import { Building2, FlaskConical, Calculator } from "lucide-react";
import type { Dict } from "@/i18n/types";

const icons = [Building2, FlaskConical, Calculator] as const;
const keys = ["hospital", "research", "finance"] as const;

export default function WhoSection({ dict }: { dict: Dict["who"] }) {
  return (
    <section id="who" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {dict.title}
          </h2>
          <p className="text-text-secondary">{dict.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            const audience = dict.audiences[key];
            return (
              <div
                key={key}
                className="bg-white rounded-xl border border-border-gray p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
