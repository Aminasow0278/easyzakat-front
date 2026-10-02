import { CalendarDays, Download } from "lucide-react";

function DashboardHeader() {
  return (
    <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-[22px] font-bold text-[#073f32] sm:text-[25px] md:text-[27px]">
          Admin Overview
        </h2>

        <p className="mt-1 max-w-[280px] text-[10px] text-[#65716e] sm:text-[11px]">
          Real-time Zakat financial intelligence dashboard.
        </p>
      </div>

      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 rounded-full bg-[#ecebfb] px-4 py-2.5 text-[10px]">
          <CalendarDays size={11} />
          Last 30 Days
        </button>

        <button className="flex items-center gap-1.5 rounded-full bg-[#075b45] px-4 py-2.5 text-[10px] text-white">
          <Download size={11} />
          Export Report
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;