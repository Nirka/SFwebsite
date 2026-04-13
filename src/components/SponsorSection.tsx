import {
  Send,
  GitPullRequestArrow,
  Eye,
  Target,
  MessageSquare,
} from "lucide-react";
import SponsorMockup from "./SponsorMockup";
import type { Dict } from "@/i18n/types";

const featureIcons = [Send, GitPullRequestArrow, Eye, Target, MessageSquare];

export default function SponsorSection({
  dict,
  sponsorWorkspaceDict,
}: {
  dict: Dict["sponsor"];
  sponsorWorkspaceDict: Dict["sponsorWorkspace"];
}) {
  return (
    <section
      id="sponsor-workspace"
      className="py-20 lg:py-28 bg-bg-light relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #2F7F7F, #4CAF50, #FBC02D)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/5 border border-teal/15 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-xs font-medium text-teal">
                {dict.badge}
              </span>
            </div>

            <h2 className="text-3xl font-semibold text-primary mb-4">
              {dict.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {dict.subtitle}
            </p>

            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              {dict.description}
            </p>

            <div className="space-y-4 mb-8">
              {dict.features.map((text: string, i: number) => {
                const Icon = featureIcons[i];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-teal" />
                    </div>
                    <span className="text-sm text-text-secondary leading-relaxed">
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-lg border border-border-gray p-4">
              <p className="text-sm text-primary font-medium italic">
                &ldquo;{dict.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute -inset-4 rounded-3xl opacity-15 blur-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #1E3A5F 0%, #2F7F7F 50%, #4CAF50 100%)",
              }}
            />
            <div className="relative">
              <SponsorMockup dict={sponsorWorkspaceDict} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
