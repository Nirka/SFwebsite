import {
  Activity,
  Users,
  ClipboardCheck,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

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
    <div className="bg-white rounded-lg border border-gray-100 p-3 flex flex-col gap-1">
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
      <p className="text-[10px] text-gray-500">{label}</p>
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
      <span className="text-gray-500 w-7 text-right">{pct}%</span>
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

const studies = [
  {
    id: "SF-2024-001",
    name: "Cardiology Phase III",
    status: "Active" as const,
    enrollment: "82%",
    compliance: "98%",
  },
  {
    id: "SF-2024-003",
    name: "Oncology Biomarker",
    status: "Enrolling" as const,
    enrollment: "45%",
    compliance: "100%",
  },
  {
    id: "SF-2024-007",
    name: "Neurology Pilot",
    status: "Setup" as const,
    enrollment: "12%",
    compliance: "95%",
  },
  {
    id: "SF-2024-009",
    name: "Pediatric Observational",
    status: "Active" as const,
    enrollment: "71%",
    compliance: "97%",
  },
];

const statusMap = {
  Active: "green" as const,
  Enrolling: "blue" as const,
  Setup: "yellow" as const,
};

export default function DashboardMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden w-full max-w-lg">
      {/* Titlebar */}
      <div className="bg-[#1E3A5F] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-white/80 ml-2 font-medium">
            StudyFlow — Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="h-3 w-px bg-white/20" />
          <span className="text-[10px] text-white/60">Dr. Cohen</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 bg-[#F7F9FB]">
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2">
          <StatCard
            icon={Activity}
            label="Active Studies"
            value="12"
            trend="+2"
            color="text-teal"
          />
          <StatCard
            icon={Users}
            label="Participants"
            value="847"
            trend="+34"
            color="text-blue-600"
          />
          <StatCard
            icon={ClipboardCheck}
            label="Pending Approvals"
            value="5"
            color="text-yellow-600"
          />
          <StatCard
            icon={AlertTriangle}
            label="Compliance Alerts"
            value="2"
            color="text-red-500"
          />
        </div>

        {/* Chart area */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-gray-700">
              Study Progress Overview
            </span>
            <span className="text-[9px] text-gray-400">Last 6 months</span>
          </div>
          <div className="space-y-2">
            <ProgressBar label="Cardiology III" pct={82} color="bg-teal" />
            <ProgressBar
              label="Oncology BM"
              pct={45}
              color="bg-blue-500"
            />
            <ProgressBar
              label="Neurology Pilot"
              pct={12}
              color="bg-yellow-500"
            />
            <ProgressBar
              label="Pediatric Obs"
              pct={71}
              color="bg-green-500"
            />
          </div>
        </div>

        {/* Studies table */}
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-50 flex items-center justify-between">
            <span className="text-[11px] font-medium text-gray-700">
              Active Studies
            </span>
            <span className="text-[9px] text-teal cursor-pointer">
              View All →
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[9px] text-gray-400 uppercase tracking-wider">
                <th className="text-left px-3 py-1.5 font-medium">ID</th>
                <th className="text-left px-3 py-1.5 font-medium">Study</th>
                <th className="text-left px-3 py-1.5 font-medium">Status</th>
                <th className="text-right px-3 py-1.5 font-medium">Enroll.</th>
                <th className="text-right px-3 py-1.5 font-medium">Compl.</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((s) => (
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
                    <StatusBadge label={s.status} variant={statusMap[s.status]} />
                  </td>
                  <td className="px-3 py-1.5 text-[10px] text-gray-600 text-right">
                    {s.enrollment}
                  </td>
                  <td className="px-3 py-1.5 text-[10px] text-gray-600 text-right">
                    {s.compliance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
