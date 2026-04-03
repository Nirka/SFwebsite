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

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface Capability {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  features: Feature[];
  accent?: boolean;
}

const capabilities: Capability[] = [
  {
    icon: ClipboardList,
    iconColor: "text-primary",
    iconBg: "bg-blue-50",
    title: "Standardized and Controlled Study Execution",
    description:
      "Manage the full study lifecycle from setup to closeout with structured, repeatable workflows.",
    features: [
      { icon: GitBranch, text: "Full study lifecycle management" },
      { icon: CalendarCheck, text: "Participant scheduling and visit tracking" },
      { icon: Sparkles, text: "AI-driven protocol (SOA) generation" },
      { icon: Users, text: "Workflow standardization across departments" },
    ],
  },
  {
    icon: FileCheck,
    iconColor: "text-success",
    iconBg: "bg-green-50",
    title: "Integrated Compliance & eConsent Layer",
    description:
      "Manage regulatory documentation, electronic consent, and digital signatures in a unified compliance environment.",
    features: [
      { icon: FileSignature, text: "Complete eConsent workflow" },
      { icon: FileText, text: "Digital document management" },
      { icon: ShieldCheck, text: "Electronic signatures with audit trail" },
      { icon: Link, text: "FDA and EU regulatory alignment" },
    ],
    accent: true,
  },
  {
    icon: DollarSign,
    iconColor: "text-teal",
    iconBg: "bg-teal/10",
    title: "Aligned Financial Insight Without Added Complexity",
    description:
      "Track budgets alongside study activity for transparent institutional oversight.",
    features: [
      { icon: BarChart3, text: "Budget tracking aligned with study activity" },
      { icon: Receipt, text: "Transparent reporting for oversight" },
      { icon: DollarSign, text: "Support for accurate billing and reconciliation" },
    ],
  },
  {
    icon: Milestone,
    iconColor: "text-yellow-700",
    iconBg: "bg-yellow-50",
    title: "Towards a Fully Integrated IRB Workflow",
    description:
      "StudyFlow is evolving to include a complete IRB workflow that connects protocol approval, compliance tracking, and operational execution into a single system.",
    features: [
      { icon: GitBranch, text: "Protocol approval integrated with operations" },
      { icon: ShieldCheck, text: "Continuous compliance tracking" },
      { icon: Link, text: "Unified regulatory and execution pipeline" },
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Core Capabilities
          </h2>
          <p className="text-text-secondary">
            Four integrated pillars that bring structure, compliance, and
            visibility to clinical research operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className={`rounded-xl border p-8 transition-shadow hover:shadow-md ${
                cap.accent
                  ? "border-teal/30 bg-teal/[0.02]"
                  : "border-border-gray bg-white"
              }`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg ${cap.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <cap.icon size={20} className={cap.iconColor} />
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

              <div className="space-y-3 ml-14">
                {cap.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <f.icon
                      size={14}
                      className="text-text-tertiary flex-shrink-0"
                    />
                    <span className="text-sm text-text-secondary">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {cap.title.includes("IRB") && (
                <div className="mt-5 ml-14">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full">
                    <Milestone size={12} />
                    On the Roadmap
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
