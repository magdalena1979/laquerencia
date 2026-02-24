import HeroQuerencia from "../components/Hero";
import Hero2 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Hero6 from "../components/Hero6";
import HeroVideoBanner from "../components/HeroVideoBanner";
// import AboutPreview from "../components/quienes_somos";
import ImageStrip from "../components/ImageStrip";
// import TestTailwind from "../components/TestTailwind"; // Removido temporalmente



// slider
const NUM_SLIDER_IMAGES = 39; // Update this to reflect the current number of images in /public/slider
const SLIDER_IMAGE_EXT = "webp"; 

const stripImages = Array.from({ length: NUM_SLIDER_IMAGES }, (_, i) =>
  `/slider/slider-${String(i + 1).padStart(2, "0")}.${SLIDER_IMAGE_EXT}`
);

const NUM_SLIDER_VIDEOS = 14; // Update this to reflect the current number of videos in /public/videos
const SLIDER_VIDEO_EXT = "mp4"; 
const stripVideos = Array.from({ length: NUM_SLIDER_VIDEOS }, (_, i) =>
  `/videos/video-${String(i + 1).padStart(2, "0")}.${SLIDER_VIDEO_EXT}`
);


//const stripMedia = [...stripImages, ...stripVideos].sort(() => Math.random() - 0.5);

const stripMedia = [...stripImages, ...stripVideos];

for (let i = stripMedia.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [stripMedia[i], stripMedia[j]] = [stripMedia[j], stripMedia[i]];
}


export default function Home() {
  return (
    <>      
      <HeroQuerencia />
      <HeroVideoBanner />
      <Hero2 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      {/* <AboutPreview /> */}
      <div className="mx-[calc(50%-50vw)] w-screen">        
        <ImageStrip
          images={stripMedia}
          ratio={4 / 3} 
          itemWidth={{ base: "75%", sm: "55%", md: "38%", lg: "28%" }}
        />
      </div>
    </>
  );
}
