import { Link } from "react-router-dom";

const links = [
  {
    label: "Transparency",
    path: "/impact",
  },
  {
    label: "Zakat Guide",
    path: "/guide-zakat",
  },
  {
    label: "Impact Reports",
    path: "/rapports",
  },
  {
    label: "Privacy Policy",
    path: "/privacy",
  },
];

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-[#E2E8F8] hidden sm:block">

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

        {/* Logo / copyright */}
        <div>
          <Link
            to="/"
            className="text-lg font-extrabold text-[#0F3D2E]"
          >
            EasyZakat
          </Link>

          <p className="mt-1 text-xs text-[#5E5E5C]">
            © 2024 EasyZakat. Spiritual Serenity in Finance.
          </p>
        </div>

        {/* Liens */}
        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 lg:grid-cols-4">

          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-xs font-semibold text-[#5E5E5C] transition hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}

        </nav>

      </div>

    </footer>
  );
}

export default Footer;