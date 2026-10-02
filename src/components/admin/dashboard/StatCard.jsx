function StatCard({
  icon,
  iconBg,
  iconColor,
  border,
  top,
  title,
  value,
  danger = false,
}) {
  return (
    <div
      className={`relative min-h-[116px] rounded-lg border bg-white p-4 shadow-sm ${border}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-md ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

        {top && (
          <span
            className={`text-[7px] font-bold ${
              danger ? "text-[#b52d3b]" : "text-[#48766a]"
            }`}
          >
            {top}
          </span>
        )}
      </div>

      <p className="mt-3 text-[8px] text-[#707875]">{title}</p>

      <p className="mt-1 text-[16px] font-bold text-[#244d42] sm:text-[17px]">
        {value}
      </p>

      <p className="mt-1 text-[12px] font-bold text-[#244d42]">CFA</p>
    </div>
  );
}

export default StatCard;