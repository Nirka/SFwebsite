import { ArrowRight } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            A Unified Operational and Compliance Layer
          </h2>
          <p className="text-text-secondary">
            StudyFlow centralizes clinical research management into a single
            platform — enabling structured workflows, real-time visibility, and
            consistent execution across all studies.
          </p>
        </div>

        {/* System diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-border-gray p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Operations */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1E3A5F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-primary mb-1">
                  Operations
                </h4>
                <p className="text-xs text-text-secondary">
                  Study lifecycle, scheduling, participant tracking
                </p>
              </div>

              {/* Center hub */}
              <div className="flex flex-col items-center">
                <div className="hidden md:flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-border-gray" />
                  <ArrowRight size={14} className="text-teal" />
                </div>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F7F7F, #4CAF50)",
                  }}
                >
                  <span className="text-white text-xs font-bold text-center leading-tight">
                    Study
                    <br />
                    Flow
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-3 mt-4">
                  <ArrowRight size={14} className="text-teal" />
                  <div className="w-8 h-px bg-border-gray" />
                </div>
              </div>

              {/* Compliance */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-3">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-primary mb-1">
                  Compliance
                </h4>
                <p className="text-xs text-text-secondary">
                  eConsent, documents, regulatory workflows
                </p>
              </div>
            </div>

            {/* Sponsors row below */}
            <div className="mt-8 pt-8 border-t border-border-gray">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-border-gray mb-3 hidden md:block" />
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2F7F7F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">
                    Sponsors
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Transparent collaboration, KPIs, and study pipeline
                    visibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
