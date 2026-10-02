function FormSection({ icon: Icon, title, description, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F8EE] text-[#0F3D2E]">
          <Icon size={20} />
        </div>

        <div>
          <h2 className="font-bold text-[#0F3D2E]">{title}</h2>

          <p className="text-xs text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}

export default FormSection;