const outcomes = [
  {
    metric: "60%",
    label: "Reduction in Administrative Workload",
    description:
      "Streamline coordination tasks and free research teams to focus on clinical work.",
  },
  {
    metric: "3×",
    label: "Faster Stakeholder Coordination",
    description:
      "Improve communication between departments, sponsors, and regulatory bodies.",
  },
  {
    metric: "100%",
    label: "Study Visibility",
    description:
      "Real-time dashboards provide complete visibility into study progress and compliance.",
  },
  {
    metric: "40%",
    label: "Faster Document Processing",
    description:
      "Integrated eConsent and digital document workflows reduce turnaround times.",
  },
];

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Designed to Improve Efficiency and Control
          </h2>
          <p className="text-text-secondary">
            Measurable improvements in how medical centers manage and execute
            clinical research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((o) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
