import {
  Unplug,
  Table,
  EyeOff,
  Weight,
  FolderOpen,
} from "lucide-react";

const problems = [
  {
    icon: Unplug,
    title: "Disconnected Systems",
    description:
      "Operations, compliance, and finance run on separate tools with no shared context.",
  },
  {
    icon: Table,
    title: "Spreadsheet Dependency",
    description:
      "Critical data lives in spreadsheets, creating version conflicts and manual errors.",
  },
  {
    icon: EyeOff,
    title: "Limited Visibility",
    description:
      "Study progress, bottlenecks, and compliance status are difficult to monitor in real time.",
  },
  {
    icon: Weight,
    title: "Administrative Overload",
    description:
      "Research teams spend excessive time on coordination tasks instead of research execution.",
  },
  {
    icon: FolderOpen,
    title: "Fragmented Document Workflows",
    description:
      "Regulatory documents, consent forms, and approvals are managed across disconnected processes.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Clinical Research Is Complex — and Difficult to Control
          </h2>
          <p className="text-text-secondary">
            Medical centers face operational challenges that slow down research
            and reduce institutional oversight.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl border border-border-gray p-6 text-center hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mx-auto mb-4">
                <p.icon size={18} className="text-error" />
              </div>
              <h3 className="text-sm font-semibold text-primary mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
