import { Building2, FlaskConical, Calculator } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Hospital Leadership",
    description:
      "Gain visibility and control across all clinical research activity. Monitor compliance, performance, and resource utilization from a single interface.",
  },
  {
    icon: FlaskConical,
    title: "Research Units",
    description:
      "Coordinate multi-study operations with structured workflows, participant management, and consistent execution across teams and departments.",
  },
  {
    icon: Calculator,
    title: "Finance & Administration",
    description:
      "Oversee budget alignment, regulatory documentation, and reporting with transparent processes that reduce administrative burden.",
  },
];

export default function WhoSection() {
  return (
    <section id="who" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Built for Research-Driven Medical Centers
          </h2>
          <p className="text-text-secondary">
            Designed around the real needs of the people who manage, oversee,
            and execute clinical research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-xl border border-border-gray p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-5">
                <a.icon size={20} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {a.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
