const COLORS = {
  green: "rgba(21,50,46,0.70)",
};

export default function SectionDivider() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px 0",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          maxWidth: "300px",
          height: "1px",
          backgroundColor: COLORS.green,
          opacity: 0.4,
        }}
      />
    </div>
  );
}
