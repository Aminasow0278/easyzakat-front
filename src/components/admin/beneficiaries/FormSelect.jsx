function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-600"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#0F3D2E] focus:bg-white focus:ring-2 focus:ring-[#B9F2D1]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;