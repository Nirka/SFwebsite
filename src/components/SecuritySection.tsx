import {
  Cloud,
  Lock,
  ShieldCheck,
  KeyRound,
  ClipboardCheck,
} from "lucide-react";

const items = [
  {
    icon: Cloud,
    title: "Secure Cloud Infrastructure",
    description:
      "Hosted on enterprise-grade cloud infrastructure with high availability and disaster recovery.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    description:
      "All data encrypted in transit (TLS 1.3) and at rest (AES-256) to protect sensitive research data.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR-Aligned Data Handling",
    description:
      "Built with privacy-by-design principles and GDPR-aligned data processing practices.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control",
    description:
      "Granular permission management ensures users access only the data and actions relevant to their role.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-Ready Architecture",
    description:
      "Comprehensive audit trails and logging for full traceability of all system actions and data changes.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Built for Security, Compliance, and Scale
          </h2>
          <p className="text-text-secondary">
            Built with privacy and compliance in mind from day one.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-4 mb-16">
          {["GDPR", "SOC 2", "HIPAA"].map((badge) => (
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
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-border-gray p-6 text-center hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <item.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
