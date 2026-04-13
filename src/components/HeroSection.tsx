import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";
import type { Dict } from "@/i18n/types";

export default function HeroSection({
  dict,
  dashboardDict,
}: {
  dict: Dict["hero"];
  dashboardDict: Dict["dashboard"];
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F7F7F" />
              <stop offset="50%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#FBC02D" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="280" fill="none" stroke="url(#heroAccent)" strokeWidth="2" />
          <circle cx="300" cy="300" r="200" fill="none" stroke="url(#heroAccent)" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="120" fill="none" stroke="url(#heroAccent)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/5 border border-teal/15 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-xs font-medium text-teal">
                {dict.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold text-primary leading-tight tracking-tight mb-6">
              {dict.title}
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              {dict.subtitle}
            </p>

            <p className="text-base text-text-tertiary leading-relaxed mb-8">
              {dict.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors shadow-sm"
              >
                {dict.ctaPrimary}
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-border-gray hover:bg-bg-light rounded-lg transition-colors"
              >
                {dict.ctaSecondary}
                <ArrowRight size={16} className="rtl:scale-x-[-1]" />
              </a>
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="relative flex justify-center lg:justify-end min-w-0">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #2F7F7F 0%, #4CAF50 50%, #FBC02D 100%)",
              }}
            />
            <div className="relative w-full overflow-hidden">
              <DashboardMockup dict={dashboardDict} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
