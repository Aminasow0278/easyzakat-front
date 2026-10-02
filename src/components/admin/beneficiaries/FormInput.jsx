function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  min,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-600"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0F3D2E] focus:bg-white focus:ring-2 focus:ring-[#B9F2D1]"
      />
    </div>
  );
}

export default FormInput;