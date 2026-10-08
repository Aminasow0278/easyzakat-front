import { useState } from "react";

import Header from '../../layouts/Header';
import BottomNav from '../../layouts/BottomNav';
import Footer from '../../layouts/Footer';
import PaymentIntro from "../../components/Payment/PaymentIntro";
import PaymentMethods from "../../components/Payment/PaymentMethods";
import DonorInformation from "../../components/Payment/DonorInformation";
import DonationSummary from "../../components/Payment/DonationSummary";
import ShariaCertification from "../../components/Payment/ShariaCertification";

const INITIAL_FORM_DATA = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  anonymous: false,
  whatsappReceipt: true,
  emailReceipt: true,
};

const INITIAL_DONATION = {
  type: "Zakat Al-Maal",
  cause: "Familles Vulnérables",
  amount: 75000,
  serviceFee: 0,
  total: 75000,
};

function Payment() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [selectedMethod, setSelectedMethod] = useState("wave");

  function handleFormChange(field, value) {
    setFormData(function (currentData) {
      return {
        ...currentData,
        [field]: value,
      };
    });
  }

  function handleMethodChange(methodId) {
    setSelectedMethod(methodId);
  }

  function handlePay() {
    const paymentData = {
      donor: formData,
      paymentMethod: selectedMethod,
      donation: INITIAL_DONATION,
    };

    console.log("Données du paiement :", paymentData);
  }

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#F8F9FD]
      "
    >
      <Header />
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          pb-12
          pt-8
          mb-20
          mt-20
          

          sm:px-7
          sm:pt-10

          md:px-10

          lg:px-12
          lg:pt-12
        "
      >
        {/* ================= INTRO ================= */}

        <PaymentIntro />

        {/* ================= PAYMENT ================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-6

            lg:mt-10
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >
          {/* Colonne gauche */}

          <div className="space-y-6">
            <PaymentMethods
              selectedMethod={selectedMethod}
              onMethodChange={handleMethodChange}
            />

            <DonorInformation
              formData={formData}
              onChange={handleFormChange}
            />
          </div>

          {/* Colonne droite */}

          <div className="space-y-5">
            <DonationSummary
              donation={INITIAL_DONATION}
              onPay={handlePay}
            />

            <ShariaCertification />
          </div>
        </div>
      </div>
        <BottomNav />
        <Footer />
    </main>
  );
}

export default Payment;