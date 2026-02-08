export default function HeroVideoBanner() {
  return (
    <section className="hero-video-section">
      <div className="hero-video-container">
        <video
          src="/BANNER%20WEB%20LOGO%20VIDEO(1).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
      </div>
    </section>
  );
}

