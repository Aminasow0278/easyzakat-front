import {
  BarChart3,
  Calculator,
  Home,
  User,
} from "lucide-react";

function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 px-2 py-2">

        <a
          href="#"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-slate-400"
        >
          <Home size={19} />
          <span className="text-[10px] font-medium">
            Home
          </span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-slate-400"
        >
          <Calculator size={19} />
          <span className="text-[10px] font-medium">
            Calculate
          </span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[#0F3D2E]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F3D2E] text-white">
            <User size={17} />
          </span>

          <span className="text-[10px] font-bold">
            Profile
          </span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-slate-400"
        >
          <BarChart3 size={19} />

          <span className="text-[10px] font-medium">
            Impact
          </span>
        </a>

      </div>
    </nav>
  );
}

export default MobileBottomNav;