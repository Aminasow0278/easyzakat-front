function UrgencySelector({ value, onChange }) {
  const levels = ["Modéré", "Élevé", "Critique"];

  return (
    <div className="md:col-span-2">
      <label className="mb-3 block text-sm font-medium text-slate-600">
        Niveau d'urgence
      </label>

      <div className="grid grid-cols-3 gap-2">
        {levels.map((level) => {
          const isActive = value === level;

          return (
            <button
              key={level}
              type="button"
              onClick={() => onChange(level)}
              className={`rounded-xl border px-3 py-3 text-xs font-semibold transition sm:text-sm ${
                isActive
                  ? "border-[#0F3D2E] bg-[#C9F5DC] text-[#0F3D2E]"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#B9F2D1] hover:bg-slate-50"
              }`}
            >
              {level}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default UrgencySelector;