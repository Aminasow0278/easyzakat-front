import { useState } from "react";
import { Menu, X, Heart, Calculator, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* MENU */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#075c43] transition hover:bg-gray-100"
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>

          {/* LOGO */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xl font-bold tracking-tight text-[#075c43] sm:text-2xl"
          >
            EasyZakat
          </button>

          {/* DON */}
          <button
            type="button"
            onClick={() => navigate("/give")}
            className="flex items-center gap-1.5 rounded-full bg-[#006b4f] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#00553f] sm:px-5 sm:text-sm"
          >
            <Heart size={15} fill="currentColor" />
            <span>Donate Now</span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]
          h-full
          w-[280px]
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        <div className="flex h-16 items-center justify-between border-b px-5">

          <span className="text-xl font-bold text-[#075c43]">
            EasyZakat
          </span>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        <nav className="space-y-2 p-4">

          <button
            type="button"
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <Heart size={20} />
            Accueil
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/calculate");
              closeMenu();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <Calculator size={20} />
            Calculer ma Zakat
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/profile");
              closeMenu();
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <User size={20} />
            Mon profil
          </button>

        </nav>

      </aside>
    </>
  );
}

export default Header;