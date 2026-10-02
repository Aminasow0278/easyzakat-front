import { Menu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImpactHeader() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Menu mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0F3D2E] md:hidden"
        >
          <Menu size={23} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B9F2D1] text-[#0F3D2E]">
            <Zap size={20} fill="currentColor" />
          </div>

          <span className="text-lg font-extrabold text-[#0F3D2E]">
            EasyZakat
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-[#0F3D2E]"
          >
            Home
          </Link>

          <Link
            to="/calculer-zakat"
            className="text-sm font-medium text-gray-500 hover:text-[#0F3D2E]"
          >
            Calculate
          </Link>

          {/* Page active */}
          <Link
            to="/transparence"
            className="relative text-sm font-bold text-[#0F3D2E]"
          >
            Impact

            <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#0F3D2E]" />
          </Link>

          <Link
            to="/profil"
            className="text-sm font-medium text-gray-500 hover:text-[#0F3D2E]"
          >
            Profile
          </Link>

        </nav>

        {/* Donate */}
        <Link
          to="/don"
          className="rounded-full bg-[#0F3D2E] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0a2e23] sm:px-5 sm:text-sm"
        >
          Donate Now
        </Link>

      </div>
    </header>
  );
}

