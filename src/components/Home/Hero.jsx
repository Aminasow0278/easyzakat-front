import { Calculator, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="rounded-3xl bg-[#075c43] px-6 py-6 text-white sm:px-10 lg:px-16 lg:py-16">
      <div className="max-w-3xl">
        <p className="mb-1 text-sm font-semibold text-emerald-400">
          Total collecté ce mois(FCFA)</p>
        <p className="mb-3 text-2xl font-semibold text-emerald-300">124.500.000 CFA</p>
        <p className="mb-3 text-sm font-semibold text-emerald-200">+12% vs mois dernier</p>
      </div>
    </section>
  );
}

export default Hero;