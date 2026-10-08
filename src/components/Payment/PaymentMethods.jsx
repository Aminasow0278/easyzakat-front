import { useState } from "react";
import { WalletCards } from "lucide-react";

import { PAYMENT_METHODS } from "../../components/Payment/paymentMethod";
import PaymentMethodCard from "./PaymentMethodCard";

function PaymentMethods({
  methods = PAYMENT_METHODS,
  selectedMethod,
  onMethodChange,
}) {
  const [internalMethod, setInternalMethod] = useState(
    selectedMethod || "wave"
  );

  function handleMethodSelect(methodId) {
    setInternalMethod(methodId);

    if (onMethodChange) {
      onMethodChange(methodId);
    }
  }

  function renderPaymentMethod(method) {
    return (
      <PaymentMethodCard
        key={method.id}
        id={method.id}
        name={method.name}
        selected={internalMethod === method.id}
        onSelect={function () {
          handleMethodSelect(method.id);
        }}
      />
    );
  }

  const availableMethods = methods.filter(function (method) {
    return method.enabled;
  });

  return (
    <section
      className="
        w-full
        rounded-[14px]
        bg-white
        p-5
        shadow-[0_2px_8px_rgba(0,0,0,0.02)]

        sm:p-6

        lg:p-7
      "
    >
      {/* Title */}

      <div className="flex items-center gap-2">
        <WalletCards
          size={20}
          strokeWidth={2}
          className="text-[#005B4F]"
        />

        <h2
          className="
            text-[19px]
            font-semibold
            text-[#174E45]

            sm:text-[21px]
          "
        >
          Modes de paiement
        </h2>
      </div>

      {/* Methods */}

      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-3

          sm:gap-4

          lg:grid-cols-3
        "
      >
        {availableMethods.map(renderPaymentMethod)}
      </div>
    </section>
  );
}

export default PaymentMethods;