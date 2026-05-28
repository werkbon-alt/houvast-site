export default function App() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={heroOverlay}>
          <nav style={navStyle}>
            <div style={brandStyle}>
              <img
                src="/logo.png"
                alt="Houvast logo"
                style={logoStyle}
              />

              <div>
                <div style={brandTitle}>Houvast</div>
                <div style={brandSub}>
                  postmortale zorg
                </div>
              </div>
            </div>

            <div style={navLinks}>
              <a style={navLink} href="#diensten">
                Diensten
              </a>

              <a style={navLink} href="#werkwijze">
                Werkwijze
              </a>

              <a style={navLink} href="#contact">
                Contact
              </a>
            </div>
          </nav>

          <div style={heroContent}>
            <p style={eyebrow}>
              NAMENS UITVAARTONDERNEMINGEN
            </p>

            <h1 style={heroTitle}>
              Professionele ondersteuning
              tussen overlijden en uitvaart.
            </h1>

            <p style={heroText}>
              Houvast Postmortale Zorg ondersteunt
              uitvaartondernemingen bij postmortale zorg,
              overbrengingen, verzorging en ondersteuning
              achter de schermen.
            </p>

            <div style={buttonRow}>
              <a href="#diensten" style={primaryButton}>
                Onze dienstverlening
              </a>

              <a href="#contact" style={secondaryButton}>
                Direct contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={introSection}>
        <div style={introInner}>
          <p style={sectionEyebrow}>
            WAT WIJ DOEN
          </p>

          <h2 style={sectionTitle}>
            Zorgvuldige ondersteuning
            van overlijden tot aan de dag van de uitvaart.
          </h2>

          <p style={largeText}>
            Wij verzorgen geen uitvaarten.
            Houvast ondersteunt uitvaartondernemingen
            binnen alle facetten van postmortale zorg,
            opbaring en praktische ondersteuning.
          </p>
        </div>
      </section>

      <section id="diensten" style={servicesSection}>
        <div style={sectionHeader}>
          <p style={sectionEyebrow}>
            DIENSTVERLENING
          </p>

          <h2 style={sectionTitle}>
            Professioneel, representatief en inzetbaar wanneer nodig.
          </h2>
        </div>

        <div style={cardsGrid}>
          {services.map((service) => (
            <div key={service.title} style={cardStyle}>
              <div style={cardIcon}>✦</div>

              <h3 style={cardTitle}>
                {service.title}
              </h3>

              <p style={cardText}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="werkwijze" style={darkSection}>
        <div style={darkInner}>
          <div>
            <p style={sectionEyebrowDark}>
              WERKWIJZE
            </p>

            <h2 style={darkTitle}>
              Een betrouwbare partner achter de schermen.
            </h2>
          </div>

          <div style={timeline}>
            {steps.map((step, index) => (
              <div key={step} style={timelineItem}>
                <div style={timelineNumber}>
                  {index + 1}
                </div>

                <div>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={contactSection}>
        <div style={contactCard}>
          <p style={sectionEyebrow}>
            CONTACT
          </p>

          <h2 style={contactTitle}>
            Direct ondersteuning nodig?
          </h2>

          <p style={contactText}>
            Neem contact op met Houvast
            Postmortale Zorg voor ondersteuning,
            samenwerking of beschikbaarheid.
          </p>

          <div style={contactDetails}>
            <p>
              <strong>Telefoon:</strong><br />
              085 400 7800
            </p>

            <p>
              <strong>E-mail:</strong><br />
              info@houvast-ontzorgen.net
            </p>

            <p>
              <strong>Adres:</strong><br />
              Langs de Gewannen 20<br />
              6235 NV Ulestraten
            </p>
          </div>

          <div style={buttonRowCenter}>
            <a
              href="tel:0854007800"
              style={primaryDarkButton}
            >
              Bel direct
            </a>

            <a
              href="mailto:info@houvast-ontzorgen.net"
              style={secondaryDarkButton}
            >
              Stuur e-mail
            </a>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>
          © Houvast Postmortale Zorg
        </div>

        <div>
          Professionele ondersteuning voor uitvaartondernemingen
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Overledenen ophalen",
    text: "Dag en nacht beschikbaar voor overbrengingen namens uitvaartondernemingen.",
  },
  {
    title: "Verzorging",
    text: "Respectvolle verzorging met aandacht voor rust, waardigheid en detail.",
  },
  {
    title: "Thuisopbaring",
    text: "Ondersteuning bij thuisopbaringen, bedopbaringen en opbaring op locatie.",
  },
  {
    title: "Mortuarium dienstverlening",
    text: "Professionele ondersteuning binnen mortuaria en uitvaartcentra.",
  },
  {
    title: "Grafdelving",
    text: "Discreet en zorgvuldig uitgevoerd rondom begraafplaatsen.",
  },
  {
    title: "Telefoondiensten",
    text: "Overname van avond-, nacht- en bereikbaarheidsdiensten.",
  },
];

const steps = [
  "Melding overlijden",
  "Ophalen overledene",
  "Verzorging",
  "Opbaring of bewaring",
  "Overdracht richting uitvaart",
];

const pageStyle = {
  margin: 0,
  background: "#f4f2ee",
  color: "#1f2933",
  fontFamily: "Arial, sans-serif",
};

const heroStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(rgba(16,24,32,0.72), rgba(16,24,32,0.62)), url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1800&auto=format&fit=crop') center/cover",
};

const heroOverlay = {
  minHeight: "100vh",
  padding: "28px",
  display: "flex",
  flexDirection: "column",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "24px",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const logoStyle = {
  width: "70px",
  height: "70px",
  objectFit: "contain",
};

const brandTitle = {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: "20px",
};

const brandSub = {
  color: "#d3dce5",
  fontSize: "14px",
};

const navLinks = {
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
};

const navLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
};

const heroContent = {
  marginTop: "auto",
  marginBottom: "10vh",
  maxWidth: "820px",
};

const eyebrow = {
  color: "#c8d8e5",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(3rem, 8vw, 6.4rem)",
  lineHeight: "1.05",
  color: "#ffffff",
  marginBottom: "28px",
};

const heroText = {
  color: "#e6edf3",
  fontSize: "20px",
  lineHeight: "1.8",
  maxWidth: "680px",
  marginBottom: "40px",
};

const buttonRow = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
};

const buttonRowCenter = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "40px",
};

const primaryButton = {
  background: "#d7e1e7",
  color: "#1f2933",
  padding: "18px 30px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.45)",
  color: "#ffffff",
  padding: "18px 30px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const introSection = {
  padding: "110px 24px",
};

const introInner = {
  maxWidth: "950px",
  margin: "0 auto",
  textAlign: "center",
};

const sectionEyebrow = {
  color: "#70879a",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionEyebrowDark = {
  color: "#b7c8d6",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: "1.15",
  marginBottom: "30px",
};

const largeText = {
  fontSize: "21px",
  lineHeight: "1.8",
  color: "#596874",
};

const servicesSection = {
  padding: "0 24px 110px",
};

const sectionHeader = {
  maxWidth: "900px",
  margin: "0 auto 50px",
  textAlign: "center",
};

const cardsGrid = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
};

const cardStyle = {
  background: "#ffffff",
  padding: "34px",
  borderRadius: "28px",
  boxShadow: "0 15px 40px rgba(15,23,42,0.07)",
};

const cardIcon = {
  color: "#6f8796",
  marginBottom: "18px",
  fontSize: "22px",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "14px",
};

const cardText = {
  lineHeight: "1.8",
  color: "#5c6b76",
};

const darkSection = {
  background: "#1f2933",
  padding: "110px 24px",
};

const darkInner = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "60px",
};

const darkTitle = {
  color: "#ffffff",
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: "1.15",
};

const timeline = {
  display: "grid",
  gap: "18px",
};

const timelineItem = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "18px",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const timelineNumber = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "#d7e1e7",
  color: "#1f2933",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const contactSection = {
  padding: "110px 24px",
};

const contactCard = {
  maxWidth: "860px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "32px",
  padding: "50px",
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
};

const contactTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  marginBottom: "20px",
};

const contactText = {
  color: "#5d6a75",
  lineHeight: "1.8",
  fontSize: "18px",
};

const contactDetails = {
  marginTop: "34px",
  lineHeight: "1.9",
  color: "#1f2933",
};

const primaryDarkButton = {
  background: "#1f2933",
  color: "#ffffff",
  padding: "18px 30px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryDarkButton = {
  border: "1px solid rgba(31,41,51,0.2)",
  color: "#1f2933",
  padding: "18px 30px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const footerStyle = {
  background: "#111827",
  color: "#d5dde4",
  padding: "30px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "14px",
};
