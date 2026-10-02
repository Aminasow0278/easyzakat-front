function MobilePaymentCard({ payment }) {
  const success = payment.status === "Success";

  return (
    <div className="border-b border-[#eee] px-5 py-4">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-[7px] text-[#999]">{payment.ref}</p>
          <p className="mt-1 text-[10px] font-bold">{payment.donor}</p>
          <p className="mt-1 text-[8px] text-[#777]">{payment.method}</p>
        </div>

        <div className="text-right">
          <p className="text-[9px] font-bold">{payment.amount}</p>

          <p
            className={`mt-2 text-[8px] ${
              success ? "text-[#27745d]" : "text-[#9d8a3d]"
            }`}
          >
            ● {payment.status}
          </p>

          <p className="mt-1 text-[7px] text-[#999]">{payment.date}</p>
          <p className="text-[7px] text-[#999]">{payment.time}</p>
        </div>
      </div>
    </div>
  );
}

export default MobilePaymentCard;