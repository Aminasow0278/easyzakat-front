function PaymentRow({ payment }) {
  const success = payment.status === "Success";

  return (
    <tr className="border-b border-[#f3f3f3]">
      <td className="px-5 py-4 text-[8px] text-[#777]">{payment.ref}</td>

      <td className="px-5 py-4 text-[9px] font-bold">
        {payment.donor}
      </td>

      <td className="px-5 py-4 text-[8px]">{payment.amount}</td>

      <td className="px-5 py-4 text-[8px]">{payment.method}</td>

      <td className="px-5 py-4">
        <span
          className={`text-[8px] ${
            success ? "text-[#27745d]" : "text-[#9d8a3d]"
          }`}
        >
          ● {payment.status}
        </span>
      </td>

      <td className="px-5 py-4">
        <p className="text-[8px]">{payment.date}</p>
        <p className="text-[7px] text-[#999]">{payment.time}</p>
      </td>
    </tr>
  );
}

export default PaymentRow;