import {
  Clock,
  Users,
  Zap,
  BarChart3,
  Plus,
  ArrowRight,
} from "lucide-react";
import type { Dict } from "@/i18n/types";

function MetricCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3 min-w-0 overflow-hidden">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon size={12} className="text-teal shrink-0" />
        <span className="text-[10px] text-gray-500 truncate">{label}</span>
      </div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="text-[10px] text-gray-400">{sub}</p>
    </div>
  );
}

const metricIcons = [BarChart3, Clock, Users, Zap];
const metricKeys = [
  "activeStudies",
  "approvalTime",
  "recruitmentRate",
  "responsiveness",
] as const;

const pipelineColors = [
  "bg-blue-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-teal",
  "bg-gray-400",
];

export default function SponsorMockup({ dict }: { dict: Dict["sponsorWorkspace"] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden w-full max-w-xl min-w-0">
      {/* Titlebar */}
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ background: "linear-gradient(90deg, #1E3A5F, #2F7F7F)" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-white/80 ms-2 font-medium">
            {dict.titleBar}
          </span>
        </div>
        <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-[10px] text-white px-2 py-1 rounded transition-colors">
          <Plus size={10} />
          {dict.submitNewStudy}
        </button>
      </div>

      <div className="p-4 space-y-4 bg-[#F7F9FB] overflow-hidden">
        {/* Metrics */}
        <div className="grid grid-cols-4 gap-2 min-w-0">
          {metricKeys.map((key, i) => {
            const Icon = metricIcons[i];
            const m = dict.metrics[key];
            return (
              <MetricCard
                key={key}
                icon={Icon}
                label={m.label}
                value={m.value}
                sub={m.sub}
              />
            );
          })}
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <span className="text-[11px] font-medium text-gray-700 mb-2 block">
            {dict.pipelineTitle}
          </span>
          <div className="flex items-center gap-1">
            {dict.pipeline.map(
              (stage: { label: string; count: number }, i: number) => (
                <div key={stage.label} className="flex items-center flex-1">
                  <div className="flex-1 text-center">
                    <div
                      className={`${pipelineColors[i]} text-white text-[10px] font-semibold rounded-md py-1.5 mb-1`}
                    >
                      {stage.count}
                    </div>
                    <span className="text-[8px] text-gray-500 leading-none">
                      {stage.label}
                    </span>
                  </div>
                  {i < dict.pipeline.length - 1 && (
                    <ArrowRight
                      size={10}
                      className="text-gray-300 mx-0.5 flex-shrink-0 rtl:scale-x-[-1]"
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-50">
            <span className="text-[11px] font-medium text-gray-700">
              {dict.studiesTitle}
            </span>
          </div>
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-[9px] text-gray-400 uppercase tracking-wider">
                <th className="text-start px-3 py-1.5 font-medium">
                  {dict.tableHeaders.study}
                </th>
                <th className="text-start px-3 py-1.5 font-medium">
                  {dict.tableHeaders.status}
                </th>
                <th className="text-end px-3 py-1.5 font-medium">
                  {dict.tableHeaders.enrollment}
                </th>
                <th className="text-end px-3 py-1.5 font-medium">
                  {dict.tableHeaders.response}
                </th>
              </tr>
            </thead>
            <tbody>
              {dict.studies.map(
                (s: {
                  name: string;
                  status: string;
                  enrollment: string;
                  responsiveness: string;
                }) => (
                  <tr
                    key={s.name}
                    className="border-t border-gray-50 hover:bg-gray-50/50"
                  >
                    <td className="px-3 py-1.5 text-[10px] text-gray-800 font-medium">
                      {s.name}
                    </td>
                    <td className="px-3 py-1.5">
                      <span
                        className={`inline-flex px-1.5 py-0.5 rounded text-[9px] font-medium ${
                          s.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="px-3 py-1.5 text-[10px] text-gray-600 text-end">
                      {s.enrollment}
                    </td>
                    <td className="px-3 py-1.5 text-[10px] text-gray-600 text-end">
                      {s.responsiveness}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <span className="text-[11px] font-medium text-gray-700 mb-2 block">
            {dict.activityTitle}
          </span>
          <div className="space-y-2">
            {dict.activities.map(
              (a: { text: string; time: string }, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-1 flex-shrink-0" />
                  <p className="text-[10px] text-gray-600 flex-1">{a.text}</p>
                  <span className="text-[9px] text-gray-400 flex-shrink-0">
                    {a.time}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
