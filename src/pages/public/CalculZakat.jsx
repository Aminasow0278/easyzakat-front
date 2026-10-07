import { useState } from "react";
import {Link} from "react-router-dom"

import ZakatAssets from "../../components/zakat/ZakatAssets";
import ZakatDebts from "../../components/zakat/ZakatDebts";
import ZakatNote from "../../components/zakat/ZakatNote";
import Recapitulatif from "../../components/zakat/Recapitulatif";

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

  const [totalActifs, setTotalActifs] = useState(0);
  const [dettes, setDettes] = useState(0);
  const [assiette, setAssiette] = useState(0);
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

    const debtsAmount =
      Number(form.debts || 0) +
      Number(form.immediateObligations || 0);

    const zakatableAmount = Math.max(0, assets - debtsAmount);

    const nisab = 500000;

    setTotalActifs(assets);
    setDettes(debtsAmount);
    setAssiette(zakatableAmount);

    if (zakatableAmount >= nisab) {
      setZakat(zakatableAmount * 0.025);
    } else {
      setZakat(0);
    }
  };

  const handleDonate = () => {
    console.log("Don de :", zakat);
  };

  return (
    <div className="min-h-screen bg-[#f8f8fc] text-[#143f35]">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-7 sm:px-6 sm:pt-9 lg:px-10 lg:pb-0 lg:pt-12">
        <section className="mb-7 sm:mb-9">
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.7px] sm:text-4xl lg:text-[42px]">
            Calculez votre Zakat
          </h1>

          <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#59605d] sm:text-[15px] sm:leading-6">
            Renseignez vos biens et dettes pour déterminer votre contribution
            annuelle.
          </p>
        </section>

        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-7">
          <div className="lg:col-span-8">
            <ZakatAssets
              form={form}
              handleChange={handleChange}
            />

            <div className="mt-5 space-y-5">
              <ZakatDebts
                form={form}
                handleChange={handleChange}
                onCalculate={calculateZakat}
              />

              <ZakatNote />
            </div>
          </div>

          <div className="lg:col-span-4">
            <Recapitulatif
              totalActifs={totalActifs}
              dettes={dettes}
              assiette={assiette}
              zakat={zakat}
              onDonate={handleDonate}
            />
          </div>
        </div>
      </main>

      {/* Barre mobile */}
      <div className="fixed bottom-[61px] left-0 right-0 z-40 bg-[#086c51] shadow-[0_-3px_12px_rgba(0,0,0,0.12)] lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[9px] sm:px-6 sm:py-3">
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


          <Link
            to="/type"
            className="rounded-[5px] bg-[#e8c944] px-6 py-3 text-[11px] font-semibold text-[#4c461d] shadow-sm transition hover:bg-[#dabb31] sm:px-8 sm:py-3.5"
          >
            Donner
          </Link>

        </div>
      </div>

      {/* Navigation mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e1e1e1] bg-white lg:hidden">
        <div className="mx-auto grid h-[61px] max-w-lg grid-cols-5">
          <BottomNav />
          <Footer />
        </div>
      </nav>
    </div>
  );
}

export default CalculZakat;
