import {
  Calculator,
  Gift,
  Home,
  User,
  BarChart3
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  const items = [
    {
      name: "Home",
      icon: Home,
      path: "/"
    },
    {
      name: "Calculer",
      icon: Calculator,
      path: "/calculer-zakat"
    },
    {
      name: "Give",
      icon: Gift,
      path: "/donation"
    },
    {
      name: "Impact",
      icon: BarChart3,
      path: "/impact"
    },
    {
      name: "Profil",
      icon: User,
      path: "/profil"
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden ">

      <div className="mx-auto flex max-w-lg justify-around">

        {items.map((item) => {

          const Icon = item.icon;

          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex min-w-[55px] flex-col items-center gap-1 rounded-full px-3 py-1.5 text-[9px] font-medium sm:text-[10px] ${
                active
                  ? "bg-[#005b49] text-white"
                  : "text-gray-500"
              }`}
            >

              <Icon size={17} />

              <span>
                {item.name}
              </span>

            </Link>
          );
        })}

      </div>

    </nav>
  );
}

export default BottomNav;