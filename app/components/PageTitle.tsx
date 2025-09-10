interface PageTitleProps {
    children: React.ReactNode;
  }
  
  export default function PageTitle({ children }: PageTitleProps) {
    return (
      <h1
        style={{
          margin: "0 0 16px",
          marginTop: "clamp(96px, 12vh, 128px)", // deja espacio bajo navbar
          color: "#FFFFFF",
          fontSize: "clamp(28px, 5vw, 40px)",   // responsivo
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: "0.02em",
          lineHeight: 1.3,
        }}
      >
        {children}
      </h1>
    );
  }
  