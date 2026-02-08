import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { colors, spacing } from '../styles';

type Props = {
  images: string[];
  alts?: string[];
  itemWidth?: any;              // p.ej. { base: "75%", sm: "55%", md: "40%", lg: "30%" }
  ratio?: number;               // más chico = más alto (ej. 3/2, 4/3, 1.2)
  showArrows?: boolean;
  hover?: boolean;
};

export default function ImageStrip({
  images,
  alts,
  ratio = 3 / 2,                // más alto que 16/9
  itemWidth = { base: "75%", sm: "55%", md: "40%", lg: "30%" },
  showArrows = true,
  hover = true,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="imagestrip-container imagestrip-group">
      {/* Pista */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Tira de imágenes"
        className="imagestrip-track"
      >
        {images.map((src, i) => (
          <div key={i} className="imagestrip-item">
            <div 
              className="imagestrip-image-wrapper"
              style={{
                paddingTop: `${(1 / ratio) * 100}%`,
              }}
            >
              <img
                src={src}
                alt={alts?.[i] || `imagen ${i + 1}`}
                className="imagestrip-image"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flechas overlay semitransparentes */}
      {showArrows && images.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="imagestrip-arrow imagestrip-arrow-left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            aria-label="Siguiente"
            onClick={() => scrollBy(1)}
            className="imagestrip-arrow imagestrip-arrow-right"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
