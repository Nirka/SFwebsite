import {
  Activity,
  Users,
  ClipboardCheck,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import type { Dict } from "@/i18n/types";

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  trend?: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3 flex flex-col gap-1 min-w-0 overflow-hidden">
      <div className="flex items-center justify-between">
        <Icon size={14} className={color} />
        {trend && (
          <span className="text-[10px] text-green-600 flex items-center gap-0.5">
            <TrendingUp size={10} />
            {trend}
          </span>
        )}
      </div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="text-[10px] text-gray-500 truncate">{label}</p>
    </div>
  );
}

function ProgressBar({
  label,
  pct,
  color,
}: {
  label: string;
  pct: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span className="w-20 text-gray-600 truncate">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-gray-500 w-7 text-end">{pct}%</span>
    </div>
  );
}

function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: "green" | "yellow" | "blue" | "gray";
}) {
  const styles = {
    green: "bg-green-50 text-green-700",
    yellow: "bg-yellow-50 text-yellow-700",
    blue: "bg-blue-50 text-blue-700",
    gray: "bg-gray-50 text-gray-600",
  };
  return (
    <span
      className={`inline-flex px-1.5 py-0.5 rounded text-[9px] font-medium ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

const statusMap: Record<string, "green" | "blue" | "yellow" | "gray"> = {
  Active: "green",
  Enrolling: "blue",
  Setup: "yellow",
};

const progressColors = ["bg-teal", "bg-blue-500", "bg-yellow-500", "bg-green-500"];

export default function DashboardMockup({ dict }: { dict: Dict["dashboard"] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden w-full max-w-xl min-w-0">
      {/* Titlebar */}
      <div className="bg-[#1E3A5F] px-4 py-2.5 flex items-center justify-between">
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
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="h-3 w-px bg-white/20" />
          <span className="text-[10px] text-white/60">{dict.drCohen}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 bg-[#F7F9FB] overflow-hidden">
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 min-w-0">
          <StatCard
            icon={Activity}
            label={dict.stats.activeStudies}
            value={dict.statValues.activeStudies}
            trend={dict.statValues.activeStudiesTrend}
            color="text-teal"
          />
          <StatCard
            icon={Users}
            label={dict.stats.participants}
            value={dict.statValues.participants}
            trend={dict.statValues.participantsTrend}
            color="text-blue-600"
          />
          <StatCard
            icon={ClipboardCheck}
            label={dict.stats.pendingApprovals}
            value={dict.statValues.pendingApprovals}
            color="text-yellow-600"
          />
          <StatCard
            icon={AlertTriangle}
            label={dict.stats.complianceAlerts}
            value={dict.statValues.complianceAlerts}
            color="text-red-500"
          />
        </div>

        {/* Chart area */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-gray-700">
              {dict.progressTitle}
            </span>
            <span className="text-[9px] text-gray-400">
              {dict.progressPeriod}
            </span>
          </div>
          <div className="space-y-2">
            {dict.progressBars.map(
              (bar: { label: string; pct: number }, i: number) => (
                <ProgressBar
                  key={i}
                  label={bar.label}
                  pct={bar.pct}
                  color={progressColors[i]}
                />
              )
            )}
          </div>
        </div>

        {/* Studies table */}
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-50 flex items-center justify-between">
            <span className="text-[11px] font-medium text-gray-700">
              {dict.studiesTitle}
            </span>
            <span className="text-[9px] text-teal cursor-pointer">
              {dict.viewAll}
            </span>
          </div>
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-[9px] text-gray-400 uppercase tracking-wider">
                <th className="text-start px-3 py-1.5 font-medium">
                  {dict.tableHeaders.id}
                </th>
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
                  {dict.tableHeaders.compliance}
                </th>
              </tr>
            </thead>
            <tbody>
              {dict.studies.map(
                (s: {
                  id: string;
                  name: string;
                  status: string;
                  enrollment: string;
                  compliance: string;
                }) => (
                  <tr
                    key={s.id}
                    className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-3 py-1.5 text-[10px] text-gray-500 font-mono">
                      {s.id}
                    </td>
                    <td className="px-3 py-1.5 text-[10px] text-gray-800 font-medium">
                      {s.name}
                    </td>
                    <td className="px-3 py-1.5">
                      <StatusBadge
                        label={s.status}
                        variant={statusMap[s.status] ?? "gray"}
                      />
                    </td>
                    <td className="px-3 py-1.5 text-[10px] text-gray-600 text-end">
                      {s.enrollment}
                    </td>
                    <td className="px-3 py-1.5 text-[10px] text-gray-600 text-end">
                      {s.compliance}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
