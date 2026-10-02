import {
  ArrowLeft,
  BarChart3,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";

function BeneficiaryHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 md:hidden"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F3D2E] text-white">
              <span className="text-lg font-bold">✦</span>
            </div>

            <span className="text-lg font-bold tracking-tight text-[#0F3D2E]">
              EasyZakat
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#0F3D2E]"
          >
            <LayoutDashboard size={17} />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-[#0F3D2E]"
          >
            <Users size={17} />
            Beneficiaries
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#0F3D2E]"
          >
            <BarChart3 size={17} />
            Reports
          </a>
        </nav>

        <div className="flex items-center gap-2 rounded-full bg-[#0F3D2E] px-3 py-2 text-sm font-medium text-white">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B9F2D1] text-[#0F3D2E]">
            <User size={14} />
          </div>

          <span className="hidden sm:inline">
            Ahmad Diop
          </span>
        </div>

      </div>
    </header>
  );
}

export default BeneficiaryHeader;