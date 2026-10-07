import { useState } from "react";

import ZakatHeader from "../../components/zakat/ZakatHeader";
import ZakatAssets from "../../components/zakat/ZakatAssets";
import ZakatDebts from "../../components/zakat/ZakatDebts";
import ZakatNote from "../../components/zakat/ZakatNote";
 
import BottomNav from "../../layouts/PublicLayout/BottomNav";

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

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateZakat = () => {
    const assets =
      Number(form.cash || 0) +
      Number(form.bank || 0) +
      Number(form.savings || 0) +
      Number(form.gold || 0) +
      Number(form.silver || 0) +
      Number(form.merchandise || 0) +
      Number(form.receivables || 0) +
      Number(form.otherAssets || 0);

    const debts =
      Number(form.debts || 0) +
      Number(form.immediateObligations || 0);

    const zakatableAmount = Math.max(0, assets - debts);

    const nisab = 500000;

    if (zakatableAmount >= nisab) {
      setZakat(zakatableAmount * 0.025);
    } else {
      setZakat(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8fc] text-[#143f35]">

      <ZakatHeader />

      <main className="mx-auto max-w-7xl px-4 pb-[150px] pt-7 sm:px-6 sm:pt-9 lg:px-10 lg:pb-[120px] lg:pt-12">

        <section className="mb-7 sm:mb-9">
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.7px] sm:text-4xl lg:text-[42px]">
            Calculez votre Zakat
          </h1>

          <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#59605d] sm:text-[15px] sm:leading-6">
            Renseignez vos biens et dettes pour déterminer votre contribution
            annuelle.
          </p>
        </section>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-7">

          <ZakatAssets
            form={form}
            handleChange={handleChange}
          />

          <div className="space-y-5">

            <ZakatDebts
              form={form}
              handleChange={handleChange}
              onCalculate={calculateZakat}
            />

            <ZakatNote />

          </div>

        </div>
      </main>

      <div className="fixed bottom-[61px] left-0 right-0 z-40 bg-[#086c51] shadow-[0_-3px_12px_rgba(0,0,0,0.12)] md:bottom-0">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[9px] sm:px-6 sm:py-3 lg:px-10">

          <div>
            <p className="text-[9px] leading-3 text-white/60 sm:text-[11px]">
              Ma Zakat
            </p>

            <p className="text-[17px] font-bold leading-5 text-white sm:text-xl">
              {new Intl.NumberFormat("fr-FR", {
                maximumFractionDigits: 0,
              }).format(zakat)}{" "}
              FCFA
            </p>
          </div>

          <button
            type="button"
            className="rounded-[5px] bg-[#e8c944] px-6 py-3 text-[11px] font-semibold text-[#4c461d] shadow-sm transition hover:bg-[#dabb31] sm:px-8 sm:py-3.5"
          >
            Donner
          </button>

        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e1e1e1] bg-white lg:hidden">
        <div className="mx-auto grid h-[61px] max-w-lg grid-cols-5">
          <BottomNav />
        </div>
      </nav>

    </div>
  );
}

export default CalculZakat;