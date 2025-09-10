import { useEffect, useRef } from "react";

type Props = {
  src: string;
  ratio?: number; // 9/16 vertical, 16/9 horizontal
  maxW?: any;     // responsive width para Chakra
  poster?: string;
};

export default function VideoLugar({
  src,
  ratio = 9 / 16,
  maxW = "260px sm:320px md:360px",
  poster,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;       // necesario para autoplay
    v.playsInline = true; // iOS
    v.defaultMuted = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => setTimeout(tryPlay, 200));
    };

    v.addEventListener("loadedmetadata", tryPlay, { once: true });
    tryPlay();

    return () => v.pause();
  }, []);

  return (
    <div 
      className="rounded-xl overflow-hidden shadow-lg"
      style={{ 
        maxWidth: maxW,
        aspectRatio: ratio.toString()
      }}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}
