export default function HeroVideoBanner() {
  return (
    <section
      style={{
        width: "100%",
        marginInline: "auto",
        padding: "0",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1920,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <video
          src="/BANNER%20WEB%20LOGO%20VIDEO(1).mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

