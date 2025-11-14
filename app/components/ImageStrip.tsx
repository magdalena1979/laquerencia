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
    <div className="imagestrip-container imagestrip-group" style={{
      position: 'relative',
      width: '100%',
    }}>
      {/* Pista */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Tira de imágenes"
        className="imagestrip-track"
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: '75%',
          gap: 0,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'contain',
        }}
      >
        {images.map((src, i) => (
          <div key={i} style={{
            position: 'relative',
            scrollSnapAlign: 'start',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: `${(1 / ratio) * 100}%`,
            }}>
              <img
                src={src}
                alt={alts?.[i] || `imagen ${i + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  userSelect: 'none',
                  display: 'block',
                  transition: 'transform 0.35s ease, filter 0.35s ease',
                  transformOrigin: 'center',
                }}
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
            style={{
              position: 'absolute',
              left: spacing.sm,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(2px)',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            aria-label="Siguiente"
            onClick={() => scrollBy(1)}
            className="imagestrip-arrow imagestrip-arrow-right"
            style={{
              position: 'absolute',
              right: spacing.sm,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '40px',
              height: '40px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(2px)',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
