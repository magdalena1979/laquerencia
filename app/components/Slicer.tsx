import ImageStrip from "./ImageStrip";

/**
 * Importar los archivos del slicer desde app/assets/slicer (copiados por scripts/copy-slicer-to-app.js).
 * Así Vite genera URLs que cargan en dev y en build.
 */
const slicerModules = import.meta.glob<string>("../assets/slicer/*", {
  eager: true,
  query: "?url",
  import: "default",
});

// Ordenar por número: slicer.1, slicer.2, ... slicer.10, ...
const stripMedia = Object.entries(slicerModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.replace(/.*slicer\.(\d+).*/, "$1"), 10);
    const numB = parseInt(b.replace(/.*slicer\.(\d+).*/, "$1"), 10);
    return numA - numB;
  })
  .map(([, url]) => (typeof url === "string" ? url : (url as { default?: string })?.default ?? ""))
  .filter(Boolean);

export default function Slicer() {
  if (stripMedia.length === 0) {
    return (
      <div className="mx-[calc(50%-50vw)] w-screen bg-black/5 py-12 text-center text-gray-600">
        Ejecutá <code className="bg-black/10 px-1 rounded">npm run copy-slicer</code> y luego{" "}
        <code className="bg-black/10 px-1 rounded">npm run dev</code> para ver el slicer.
      </div>
    );
  }
  return (
    <div className="mx-[calc(50%-50vw)] w-screen">
      <p
        style={{
          margin: 0,
          padding: "8px 16px",
          fontSize: 14,
          color: "#666",
          textAlign: "center",
        }}
      >
        {stripMedia.length} fotos y videos
      </p>
      <ImageStrip
        images={stripMedia}
        ratio={1}
        ariaLabel={`Tira de ${stripMedia.length} fotos y videos`}
      />
    </div>
  );
}
