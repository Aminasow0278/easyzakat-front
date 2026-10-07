import { useState } from "react";
import {Link} from "react-router-dom"
import {
  Menu,
  WalletCards,
  ArrowDownLeft,
  Info,
  House,
  Calculator,
  Heart,
  Sparkles,
  User,
} from "lucide-react";

import BottomNav from "../../layouts/BottomNav";

  function CalculZakat() {
  const [form, setForm] = useState({
  cash: "",
  bank: "",
  savings: "",
  gold: "",
  silver: "",
  merchandise: "",
  receivables: "",
  otherAssets: "",
  debts: "",
  immediateObligations: "",
});

const [zakat, setZakat] = useState(0);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(""); 

const calculateZakat = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      "http://localhost:5000/api/zakat/calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cash: Number(form.cash || 0),
          bankBalance: Number(form.bank || 0),
          savings: Number(form.savings || 0),
          gold: Number(form.gold || 0),
          silver: Number(form.silver || 0),
          tradeGoods: Number(form.merchandise || 0),
          receivables: Number(form.receivables || 0),
          otherAssets: Number(form.otherAssets || 0),
          shortTermDebt: Number(form.debts || 0),
          immediateObligations: Number(
            form.immediateObligations || 0
          ),
          nisab: 500000,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur du serveur");
    }

    setZakat(data.result.zakatAmount);

    console.log("Résultat backend :", data);
  } catch (error) {
    console.error("Erreur calcul Zakat :", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#f8f8fc] text-[#143f35]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#e7e7e7] bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#174b3e] hover:bg-[#f2f5f3] md:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="text-[19px] font-bold tracking-[-0.4px] sm:text-[21px]">
              EasyZakat
            </div>

          </div>

          {/* Donate desktop */}
          <button
            type="button"
            className="rounded-full bg-[#0d6b50] px-5 py-2 text-[12px] font-medium text-white transition hover:bg-[#095940] sm:px-6 sm:py-2.5"
          >
            Donate Now
          </button>

        </div>

      </header>


      {/* ================= CONTENU ================= */}
      <main className="mx-auto max-w-7xl px-4 pb-[150px] pt-7 sm:px-6 sm:pt-9 lg:px-10 lg:pb-[120px] lg:pt-12">

        {/* TITRE */}
        <section className="mb-7 sm:mb-9">

          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.7px] sm:text-4xl lg:text-[42px]">
            Calculez votre Zakat
          </h1>

          <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#59605d] sm:text-[15px] sm:leading-6">
            Renseignez vos biens et dettes pour
            déterminer votre contribution annuelle.
          </p>

        </section>


        {/* ================= GRILLE ================= */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-7">

          {/* ================= ACTIFS ================= */}
          <section className="rounded-[10px] border border-[#d8dfdc] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]">

            {/* Titre actif */}
            <div className="border-t-[2px] border-[#174b3e] px-4 pb-2 pt-4 sm:px-6 sm:pt-5">

              <div className="flex items-center gap-2">

                <WalletCards
                  size={16}
                  strokeWidth={2}
                  className="text-[#174b3e]"
                />

                <h2 className="text-[17px] font-bold sm:text-lg">
                  Actifs
                </h2>
                <MoneyInput
                  label="Épargne"
                  value={form.savings}
                  onChange={(value) => handleChange("savings", value)}
                />

              </div>

            </div>


            {/* Champs */}
            <div className="space-y-4 px-4 pb-5 sm:px-6 sm:pb-7">

              <MoneyInput
                label="Épargne et Cash"
                value={form.cash}
                onChange={(value) => handleChange("cash", value)}
              />

              <MoneyInput
                label="Banque (Comptes courants)"
                value={form.bank}
                onChange={(value) => handleChange("bank", value)}
              />

              <MoneyInput
                label="Valeur de l'Or"
                value={form.gold}
                onChange={(value) => handleChange("gold", value)}
              />

              <MoneyInput
                label="Valeur de l'Argent (Métal)"
                value={form.silver}
                onChange={(value) => handleChange("silver", value)}
              />

              <MoneyInput
                label="Marchandises en stock"
                value={form.merchandise}
                onChange={(value) =>
                  handleChange("merchandise", value)
                }
              />

              <MoneyInput
                label="Créances (Argent dû)"
                value={form.receivables}
                onChange={(value) =>
                  handleChange("receivables", value)
                }
              />

            </div>

          </section>


          {/* ================= DETTES + NOTE ================= */}
          <div className="space-y-5">

            {/* DETTES */}
            <section className="rounded-[10px] border border-[#dddcb7] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]">

              <div className="border-t-[2px] border-[#8b8535] px-4 pb-2 pt-4 sm:px-6 sm:pt-5">

                <div className="flex items-center gap-2">

                  <ArrowDownLeft
                    size={17}
                    className="text-[#7b7425]"
                  />

                  <h2 className="text-[17px] font-bold text-[#5f5b20] sm:text-lg">
                    Dettes
                  </h2>

                </div>

              </div>


              <div className="px-4 pb-5 sm:px-6 sm:pb-7">

                <MoneyInput
                  label="Dettes à court terme (Dues maintenant)"
                  value={form.debts}
                  onChange={(value) =>
                    handleChange("debts", value)
                  }
                />

                <MoneyInput
                  label="Obligations immédiates"
                  value={form.immediateObligations}
                  onChange={(value) =>
                    handleChange("immediateObligations", value)
                  }
                />
              </div>

            </section>
                  {/* boutton */}
                 <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={calculateZakat}
                    disabled={loading}
                    className="rounded-lg bg-[#0d6b50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#095940] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Calcul en cours..." : "Calculer ma Zakat"}
                  </button>
                </div>
                

            {/* ================= NOTE RELIGIEUSE ================= */}
            <section className="rounded-[10px] border border-[#d9dcef] bg-[#f1f2ff] p-4 sm:p-6">

              <div className="flex gap-3">

                <div className="mt-[2px] shrink-0">

                  <Info
                    size={17}
                    className="text-[#174b3e]"
                  />

                </div>

          
                <div>

                  <h3 className="text-[12px] font-bold text-[#174b3e] sm:text-sm">
                    Note Religieuse & Disclaimer
                  </h3>

                  <p className="mt-2 text-[12px] leading-[18px] text-[#555b67] sm:text-[13px] sm:leading-5">
                    La Zakat est due si votre patrimoine dépasse
                    le seuil du Nisab et qu’il a été maintenu pendant
                    une année lunaire (Hawl). Ce calculateur utilise
                    un taux standard de 2,5%. Veuillez consulter un
                    érudit local pour des cas complexes liés à
                    l’immobilier ou aux investissements spécifiques.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </div>

      </main>


      {/* ================= BARRE MA ZAKAT ================= */}
      <div className="fixed bottom-[61px] left-0 right-0 z-40 bg-[#086c51] shadow-[0_-3px_12px_rgba(0,0,0,0.12)] md:bottom-0">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[9px] sm:px-6 sm:py-3 lg:px-10">

          <div>

            <p className="text-[9px] leading-3 text-white/60 sm:text-[11px]">
              Ma Zakat
            </p>

            <p className="text-[17px] font-bold leading-5 text-white sm:text-xl">
              {formatNumber(zakat)} FCFA
            </p>

          </div>


          <Link
            to="/type"
            className="rounded-[5px] bg-[#e8c944] px-6 py-3 text-[11px] font-semibold text-[#4c461d] shadow-sm transition hover:bg-[#dabb31] sm:px-8 sm:py-3.5"
          >
            Donner
          </Link>

        </div>

      </div>


      {/* ================= NAVIGATION MOBILE ================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e1e1e1] bg-white lg:hidden">

        <div className="mx-auto grid h-[61px] max-w-lg grid-cols-5">
                  <BottomNav />
        </div>

      </nav>

    </div>
  );
}


/* =========================================================
  INPUT ARGENT
========================================================= */

function MoneyInput({ label, value, onChange }) {
  return (
    <div>

      <label className="mb-[6px] block text-[10px] font-medium text-[#65615c] sm:text-[12px]">
        {label}
      </label>

      <div className="relative">

        <input
          type="number"
          min="0"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="
            h-[38px]
            w-full
            rounded-[6px]
            border
            border-[#dedde5]
            bg-[#fafafe]
            px-3
            pr-[65px]
            text-[12px]
            text-[#59605d]
            outline-none
            transition

            focus:border-[#0d6b50]
            focus:ring-2
            focus:ring-[#0d6b50]/10

            sm:h-[42px]
            sm:text-[13px]
          "
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#50535a] sm:text-[12px]">
          FCFA
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   NAVIGATION MOBILE
========================================================= */

function BottomItem({ icon, label, active = false }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-[2px]"
    >

      <span
        className={`
          flex h-[29px] min-w-[54px]
          items-center justify-center
          rounded-full

          ${
            active
              ? "bg-[#086c51] text-white"
              : "text-[#555b58]"
          }
        `}
      >
        {icon}
      </span>

      <span
        className={`
          text-[9px]
          ${
            active
              ? "font-semibold text-[#086c51]"
              : "text-[#555b58]"
          }
        `}
      >
        {label}
      </span>

    </button>
  );
}


/* =========================================================
   FORMAT FCFA
========================================================= */

function formatNumber(number) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(number);
}

export default CalculZakat;