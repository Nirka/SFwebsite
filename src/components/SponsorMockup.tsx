import {
  Clock,
  Users,
  Zap,
  BarChart3,
  Plus,
  ArrowRight,
} from "lucide-react";

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
    <div className="bg-white rounded-lg border border-gray-100 p-3">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon size={12} className="text-teal" />
        <span className="text-[10px] text-gray-500">{label}</span>
      </div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="text-[10px] text-gray-400">{sub}</p>
    </div>
  );
}

const pipeline = [
  { label: "Submitted", count: 3, color: "bg-blue-500" },
  { label: "Under Review", count: 2, color: "bg-yellow-500" },
  { label: "Approved", count: 4, color: "bg-green-500" },
  { label: "Active", count: 8, color: "bg-teal" },
  { label: "Completed", count: 12, color: "bg-gray-400" },
];

const sponsorStudies = [
  {
    name: "Roche — Oncology Phase II",
    status: "Active",
    enrollment: "68%",
    responsiveness: "92%",
  },
  {
    name: "Pfizer — Cardiology III",
    status: "Active",
    enrollment: "82%",
    responsiveness: "95%",
  },
  {
    name: "Novartis — Neurology Pilot",
    status: "Under Review",
    enrollment: "—",
    responsiveness: "—",
  },
];

const activities = [
  { text: "Protocol SF-2024-012 submitted by MedPharm", time: "2h ago" },
  { text: "Site responsiveness score updated: 94%", time: "5h ago" },
  { text: "Enrollment milestone reached: Cardiology III", time: "1d ago" },
];

export default function SponsorMockup() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden w-full max-w-xl">
      {/* Titlebar */}
      <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: "linear-gradient(90deg, #1E3A5F, #2F7F7F)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-white/80 ml-2 font-medium">
            StudyFlow — Sponsor Workspace
          </span>
        </div>
        <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-[10px] text-white px-2 py-1 rounded transition-colors">
          <Plus size={10} />
          Submit New Study
        </button>
      </div>

      <div className="p-4 space-y-4 bg-[#F7F9FB]">
        {/* Metrics */}
        <div className="grid grid-cols-4 gap-2">
          <MetricCard
            icon={BarChart3}
            label="Active Studies"
            value="8"
            sub="across 3 sponsors"
          />
          <MetricCard
            icon={Clock}
            label="Avg. Approval Time"
            value="14d"
            sub="target: 21d"
          />
          <MetricCard
            icon={Users}
            label="Recruitment Rate"
            value="87%"
            sub="above benchmark"
          />
          <MetricCard
            icon={Zap}
            label="Site Responsiveness"
            value="94%"
            sub="30-day average"
          />
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <span className="text-[11px] font-medium text-gray-700 mb-2 block">
            Study Pipeline
          </span>
          <div className="flex items-center gap-1">
            {pipeline.map((stage, i) => (
              <div key={stage.label} className="flex items-center flex-1">
                <div className="flex-1 text-center">
                  <div
                    className={`${stage.color} text-white text-[10px] font-semibold rounded-md py-1.5 mb-1`}
                  >
                    {stage.count}
                  </div>
                  <span className="text-[8px] text-gray-500 leading-none">
                    {stage.label}
                  </span>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight size={10} className="text-gray-300 mx-0.5 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
          <div className="px-3 py-2 border-b border-gray-50">
            <span className="text-[11px] font-medium text-gray-700">
              Sponsor Studies
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[9px] text-gray-400 uppercase tracking-wider">
                <th className="text-left px-3 py-1.5 font-medium">Study</th>
                <th className="text-left px-3 py-1.5 font-medium">Status</th>
                <th className="text-right px-3 py-1.5 font-medium">Enrollment</th>
                <th className="text-right px-3 py-1.5 font-medium">Response</th>
              </tr>
            </thead>
            <tbody>
              {sponsorStudies.map((s) => (
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
                  <td className="px-3 py-1.5 text-[10px] text-gray-600 text-right">
                    {s.enrollment}
                  </td>
                  <td className="px-3 py-1.5 text-[10px] text-gray-600 text-right">
                    {s.responsiveness}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg border border-gray-100 p-3">
          <span className="text-[11px] font-medium text-gray-700 mb-2 block">
            Recent Activity
          </span>
          <div className="space-y-2">
            {activities.map((a) => (
              <div key={a.text} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mt-1 flex-shrink-0" />
                <p className="text-[10px] text-gray-600 flex-1">{a.text}</p>
                <span className="text-[9px] text-gray-400 flex-shrink-0">
                  {a.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
