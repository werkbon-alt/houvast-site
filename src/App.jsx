export default function App() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={overlayStyle}>
          <div style={contentStyle}>
            <p style={smallTextStyle}>
              HOUVAST POSTMORTALE ZORG
            </p>

            <h1 style={titleStyle}>
              Professionele ondersteuning
              voor uitvaartondernemingen.
            </h1>

            <p style={subtitleStyle}>
              Houvast ondersteunt uitvaartondernemingen
              in het traject tussen overlijden en uitvaart.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const pageStyle = {
  fontFamily: "Arial, sans-serif",
};

const heroStyle = {
  minHeight: "100vh",
  background: "#1f1f1f",
  display: "flex",
  alignItems: "center",
};

const overlayStyle = {
  width: "100%",
  padding: "40px",
};

const contentStyle = {
  maxWidth: "700px",
};

const smallTextStyle = {
  letterSpacing: "4px",
  color: "#cccccc",
  fontSize: "14px",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "clamp(3rem, 8vw, 6rem)",
  lineHeight: "1.1",
  color: "#ffffff",
  marginBottom: "24px",
};

const subtitleStyle = {
  color: "#dddddd",
  fontSize: "20px",
  lineHeight: "1.8",
};
