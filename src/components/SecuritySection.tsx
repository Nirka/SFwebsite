import {
  Cloud,
  Lock,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
} from "lucide-react";
import type { Dict } from "@/i18n/types";

const icons = [Cloud, Lock, ShieldCheck, KeyRound, ClipboardCheck] as const;
const keys = ["cloud", "encryption", "gdpr", "rbac", "audit"] as const;

export default function SecuritySection({
  dict,
}: {
  dict: Dict["security"];
}) {
  return (
    <section id="security" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {dict.title}
          </h2>
          <p className="text-text-secondary">{dict.subtitle}</p>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-4 mb-16">
          {dict.badges.map((badge: string) => (
            <div
              key={badge}
              className="px-4 py-2 bg-bg-light border border-border-gray rounded-lg"
            >
              <span className="text-xs font-semibold text-primary">
                {badge}
              </span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {keys.map((key, i) => {
            const Icon = icons[i];
            const item = dict.items[key];
            return (
              <div
                key={key}
                className="bg-white rounded-xl border border-border-gray p-6 text-center hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
