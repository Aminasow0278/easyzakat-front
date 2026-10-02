import {
  CloudUpload,
  FileText,
  Upload,
} from "lucide-react";

function FileUpload({
  files,
  fileInputRef,
  onFiles,
  onDrop,
}) {
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={onFiles}
      />

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center transition hover:border-[#B9F2D1] hover:bg-[#F8FCFA] sm:px-6"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0F3D2E] shadow-sm">
          <CloudUpload size={24} />
        </div>

        <h3 className="mt-4 text-sm font-semibold text-slate-700">
          Glissez-déposez vos fichiers ici
        </h3>

        <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-400">
          CNI, certificat d'indigence, factures médicales
          <br />
          (Max 5MB)
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#0F3D2E] transition hover:bg-slate-100"
        >
          <Upload size={16} />
          Parcourir les fichiers
        </button>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
            >
              <FileText
                size={18}
                className="shrink-0 text-[#0F3D2E]"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-700">
                  {file.name}
                </p>

                <p className="text-xs text-slate-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FileUpload;