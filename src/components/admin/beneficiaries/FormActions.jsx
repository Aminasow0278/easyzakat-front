import { Save, Send } from "lucide-react";

function FormActions({ onDraft }) {
  return (
    <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-end">
      <button
        type="button"
        onClick={onDraft}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#0F3D2E] transition hover:bg-slate-50 sm:w-auto"
      >
        <Save size={18} />
        Sauvegarder le brouillon
      </button>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F3D2E] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12402F] sm:w-auto"
      >
        <Send size={18} />
        Soumettre le dossier
      </button>
    </div>
  );
}

export default FormActions;