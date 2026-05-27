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
              Discreet, professioneel en 24 uur per dag inzetbaar.
            </p>

            <div style={buttonContainer}>
              <button style={primaryButton}>
                Onze dienstverlening
              </button>

              <button style={secondaryButton}>
                Direct contact
              </button>
            </div>
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
  background:
    "linear-gradient(rgba(15,15,15,0.55), rgba(15,15,15,0.55)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop') center/cover",
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
  color: "#d9d9d9",
  fontSize: "14px",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "clamp(3rem, 8vw, 6rem)",
  lineHeight: "1.1",
  color: "#fff",
  marginBottom: "24px",
};

const subtitleStyle = {
  color: "#e4e4e4",
  fontSize: "20px",
  lineHeight: "1.8",
  marginBottom: "40px",
  maxWidth: "600px",
};

const buttonContainer = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
};

const primaryButton = {
  background: "#d5d0c7",
  color: "#111",
  border: "none",
  padding: "18px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  cursor: "pointer",
};

const secondaryButton = {
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.5)",
  padding: "18px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  cursor: "pointer",
};
