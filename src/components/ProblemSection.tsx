import { Unplug, Table, EyeOff, Weight, FolderOpen } from "lucide-react";
import type { Dict } from "@/i18n/types";

const icons = [Unplug, Table, EyeOff, Weight, FolderOpen] as const;
const keys = [
  "disconnected",
  "spreadsheet",
  "visibility",
  "overload",
  "documents",
] as const;

export default function ProblemSection({ dict }: { dict: Dict["problem"] }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {dict.title}
          </h2>
          <p className="text-text-secondary">{dict.subtitle}</p>
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
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={18} className="text-error" />
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
