import HeroQuerencia from "../components/Hero";
import Hero2 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Hero6 from "../components/Hero6";
import HeroVideoBanner from "../components/HeroVideoBanner";
// import AboutPreview from "../components/quienes_somos";
import ImageStrip from "../components/ImageStrip";
// import TestTailwind from "../components/TestTailwind"; // Removido temporalmente

// Dynamically generate image URLs for all images in /public/slider named slider-01, slider-02, etc.
// We'll assume images are named sequentially and have the same extension (e.g., .jpg or .png).
// You must set the total number of images and the file extension.

// There's no way to dynamically read the contents of /public/slider at runtime on the client side.
// In Remix (and most React setups), you can't access the filesystem on the client—this would require a build step, an API endpoint,
// or hardcoding the number. For now, you must manually update the image count:
const NUM_SLIDER_IMAGES = 29; // Update this to reflect the current number of images in /public/slider
const SLIDER_IMAGE_EXT = "webp"; // Update this if your images use a different extension

const stripImages = Array.from({ length: NUM_SLIDER_IMAGES }, (_, i) =>
  `/slider/slider-${String(i + 1).padStart(2, "0")}.${SLIDER_IMAGE_EXT}`
);

export default function Home() {
  return (
    <>
      {/* <TestTailwind /> */}
      <HeroQuerencia />
      <HeroVideoBanner />
      <Hero2 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      {/* <AboutPreview /> */}
      <div className="mx-[calc(50%-50vw)] w-screen">
        {/* opcional full-bleed */}
        <ImageStrip
          images={stripImages}
          ratio={4 / 3} // más alto; bajá hasta 1.2 si querés aún más altura
          itemWidth={{ base: "75%", sm: "55%", md: "38%", lg: "28%" }}
        />
      </div>
    </>
  );
}
