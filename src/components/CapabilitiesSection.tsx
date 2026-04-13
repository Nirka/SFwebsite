import {
  ClipboardList,
  FileCheck,
  DollarSign,
  GitBranch,
  Sparkles,
  CalendarCheck,
  Users,
  ShieldCheck,
  FileSignature,
  FileText,
  BarChart3,
  Receipt,
  Milestone,
  Link,
} from "lucide-react";
import type { Dict } from "@/i18n/types";

const capMeta = [
  {
    key: "execution" as const,
    icon: ClipboardList,
    iconColor: "text-primary",
    iconBg: "bg-blue-50",
    featureIcons: [GitBranch, CalendarCheck, Sparkles, Users],
  },
  {
    key: "compliance" as const,
    icon: FileCheck,
    iconColor: "text-success",
    iconBg: "bg-green-50",
    accent: true,
    featureIcons: [FileSignature, FileText, ShieldCheck, Link],
  },
  {
    key: "financial" as const,
    icon: DollarSign,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    featureIcons: [BarChart3, Receipt, DollarSign],
  },
  {
    key: "irb" as const,
    icon: Milestone,
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-50",
    featureIcons: [GitBranch, ShieldCheck, Link],
  },
];

export default function CapabilitiesSection({
  dict,
}: {
  dict: Dict["capabilities"];
}) {
  return (
    <section id="capabilities" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {dict.title}
          </h2>
          <p className="text-text-secondary">{dict.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capMeta.map((meta) => {
            const cap = dict.items[meta.key];
            return (
              <div
                key={meta.key}
                className={`rounded-xl border p-8 transition-shadow hover:shadow-md ${
                  meta.accent
                    ? "border-teal/30 bg-teal/[0.02]"
                    : "border-border-gray bg-white"
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg ${meta.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <meta.icon size={20} className={meta.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 ms-14">
                  {cap.features.map((text: string, i: number) => {
                    const FIcon = meta.featureIcons[i] ?? meta.featureIcons[0];
                    return (
                      <div key={i} className="flex items-center gap-2.5">
                        <FIcon
                          size={14}
                          className="text-text-tertiary flex-shrink-0"
                        />
                        <span className="text-sm text-text-secondary">
                          {text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {meta.key === "irb" && (
                  <div className="mt-5 ms-14">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full">
                      <Milestone size={12} />
                      {dict.roadmapBadge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
