export default function App() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={overlayStyle}>
          <nav style={navStyle}>
            <div style={brandStyle}>
              <img
                src="/038E4D26-E547-43A5-AC81-E92C710FFB77.PNG"
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
              <a href="#diensten" style={navLink}>
                Diensten
              </a>

              <a href="#kwaliteit" style={navLink}>
                Kwaliteit
              </a>

              <a href="#contact" style={navLink}>
                Contact
              </a>
            </div>
          </nav>

          <div style={heroContent}>
            <p style={eyebrow}>
              PROFESSIONELE ONDERSTEUNING
              VOOR UITVAARTONDERNEMINGEN
            </p>

            <h1 style={heroTitle}>
              Rust, discretie en ondersteuning
              wanneer het ertoe doet.
            </h1>

            <p style={heroText}>
              Houvast Postmortale Zorg ondersteunt
              uitvaartondernemingen binnen het volledige traject
              tussen overlijden en uitvaart.
              Professioneel, betrokken en 24/7 inzetbaar.
            </p>

            <div style={buttonRow}>
              <a href="#diensten" style={primaryButton}>
                Bekijk dienstverlening
              </a>

              <a href="#contact" style={secondaryButton}>
                Direct contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={statsSection}>
        <div style={statsGrid}>
          <div style={statCard}>
            <h3 style={statNumber}>24/7</h3>
            <p style={statText}>Bereikbaar en inzetbaar</p>
          </div>

          <div style={statCard}>
            <h3 style={statNumber}>Professioneel</h3>
            <p style={statText}>
              Met kennis en betrokkenheid
            </p>
          </div>

          <div style={statCard}>
            <h3 style={statNumber}>Ondersteunend</h3>
            <p style={statText}>
              Voor uitvaartondernemingen
            </p>
          </div>
        </div>
      </section>

      <section id="diensten" style={servicesSection}>
        <div style={sectionHeader}>
          <p style={sectionEyebrow}>
            DIENSTVERLENING
          </p>

          <h2 style={sectionTitle}>
            Ondersteuning binnen alle facetten
            van postmortale zorg.
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

      <section id="kwaliteit" style={darkSection}>
        <div style={darkInner}>
          <div>
            <p style={sectionEyebrowDark}>
              WAAROM HOUVAST
            </p>

            <h2 style={darkTitle}>
              Een betrouwbare partner
              achter de schermen.
            </h2>

            <p style={darkText}>
              Wij ondersteunen uitvaartondernemingen
              met rust, discretie en professionele uitvoering.
              Altijd met respect voor overledene,
              nabestaanden en opdrachtgever.
            </p>
          </div>

          <div style={qualityGrid}>
            <div style={qualityCard}>
              <h3>24/7 inzetbaar</h3>
              <p>
                Dag en nacht beschikbaar
                wanneer ondersteuning nodig is.
              </p>
            </div>

            <div style={qualityCard}>
              <h3>Zorgteam</h3>
              <p>
                Ons professioneel betrokken zorgteam
                denkt graag met u mee.
              </p>
            </div>

            <div style={qualityCard}>
              <h3>Regio gebonden</h3>
              <p>
                Wij zijn werkzaam binnen regio Zuid-Limburg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={imageSection}>
        <div style={imageOverlay}>
          <div style={imageContent}>
            <p style={sectionEyebrowLight}>
              SAMENWERKING
            </p>

            <h2 style={imageTitle}>
              Ondersteuning waarop
              uitvaartondernemingen kunnen bouwen.
            </h2>
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
              <strong>Telefoon</strong><br />
              085 400 7800
            </p>

            <p>
              <strong>E-mail</strong><br />
              info@houvast-ontzorgen.net
            </p>

            <p>
              <strong>Adres</strong><br />
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
          Professionele ondersteuning
          voor uitvaartondernemingen
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    title: "Rouwvervoer",
    text: "Dag en nacht beschikbaar voor overbrengingen namens uitvaartondernemingen.",
  },
  {
    title: "Verzorging",
    text: "Respectvolle verzorging met aandacht voor rust en waardigheid.",
  },
  {
    title: "Thuisopbaring",
    text: "Ondersteuning bij thuisopbaringen en opbaring op locatie.",
  },
  {
    title: "Mortuarium dienstverlening",
    text: "Professionele ondersteuning binnen mortuaria en uitvaartcentra.",
  },
  {
    title: "Grafdelving",
    text: "Voor alle denkbare werkzaamheden op en rond begraafplaatsen.",
  },
  {
    title: "Balseming / Thanatopraxie",
    text: "Wij brengen u graag in contact met een gecertificeerd balsemer.",
  },
  {
    title: "Telefoondiensten",
    text: "Overname van avond-, nacht- en bereikbaarheidsdiensten.",
  },
];

const pageStyle = {
  margin: 0,
  background: "#f4f1eb",
  color: "#1f2933",
  fontFamily: "Arial, sans-serif",
};

const heroStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(rgba(10,18,26,0.72), rgba(10,18,26,0.62)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop') center/cover",
};

const overlayStyle = {
  minHeight: "100vh",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const logoStyle = {
  width: "76px",
  height: "76px",
  objectFit: "contain",
};

const brandTitle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "bold",
};

const brandSub = {
  color: "#d5dde5",
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
  marginBottom: "12vh",
  maxWidth: "860px",
};

const eyebrow = {
  color: "#c7d6e2",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(3.4rem, 8vw, 7rem)",
  lineHeight: "1.02",
  color: "#ffffff",
  marginBottom: "28px",
};

const heroText = {
  color: "#e4edf3",
  fontSize: "22px",
  lineHeight: "1.8",
  maxWidth: "720px",
  marginBottom: "42px",
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
  background: "#d6e0e6",
  color: "#1f2933",
  padding: "18px 32px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.4)",
  color: "#ffffff",
  padding: "18px 32px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const statsSection = {
  padding: "0 24px",
  marginTop: "-70px",
  position: "relative",
  zIndex: 2,
};

const statsGrid = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "24px",
};

const statCard = {
  background: "#ffffff",
  padding: "34px",
  borderRadius: "28px",
  textAlign: "center",
  boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
};

const statNumber = {
  fontSize: "30px",
  marginBottom: "12px",
};

const statText = {
  color: "#62707b",
};

const servicesSection = {
  padding: "120px 24px",
};

const sectionHeader = {
  maxWidth: "900px",
  margin: "0 auto 60px",
  textAlign: "center",
};

const sectionEyebrow = {
  color: "#72889a",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionEyebrowDark = {
  color: "#c7d6e2",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionEyebrowLight = {
  color: "#d6e1e8",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: "1.15",
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
  padding: "36px",
  borderRadius: "30px",
  boxShadow: "0 15px 40px rgba(15,23,42,0.07)",
};

const cardIcon = {
  color: "#72889a",
  fontSize: "24px",
  marginBottom: "18px",
};

const cardTitle = {
  fontSize: "24px",
  marginBottom: "14px",
};

const cardText = {
  lineHeight: "1.8",
  color: "#5f6e79",
};

const darkSection = {
  background: "#1f2933",
  padding: "120px 24px",
};

const darkInner = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "60px",
};

const darkTitle = {
  color: "#ffffff",
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: "1.15",
  marginBottom: "28px",
};

const darkText = {
  color: "#d7e1e8",
  lineHeight: "1.9",
  fontSize: "18px",
};

const qualityGrid = {
  display: "grid",
  gap: "20px",
};

const qualityCard = {
  background: "rgba(255,255,255,0.08)",
  padding: "26px",
  borderRadius: "22px",
  color: "#ffffff",
  lineHeight: "1.8",
};

const imageSection = {
  minHeight: "70vh",
  background:
    "linear-gradient(rgba(18,24,32,0.55), rgba(18,24,32,0.55)), url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1800&auto=format&fit=crop') center/cover",
};

const imageOverlay = {
  minHeight: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "24px",
};

const imageContent = {
  maxWidth: "900px",
};

const imageTitle = {
  color: "#ffffff",
  fontSize: "clamp(2.4rem, 6vw, 5rem)",
  lineHeight: "1.1",
};

const contactSection = {
  padding: "120px 24px",
};

const contactCard = {
  maxWidth: "860px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "34px",
  padding: "54px",
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
};

const contactTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  marginBottom: "22px",
};

const contactText = {
  color: "#5f6d78",
  lineHeight: "1.8",
  fontSize: "18px",
};

const contactDetails = {
  marginTop: "36px",
  lineHeight: "1.9",
  color: "#1f2933",
};

const primaryDarkButton = {
  background: "#1f2933",
  color: "#ffffff",
  padding: "18px 32px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryDarkButton = {
  border: "1px solid rgba(31,41,51,0.2)",
  color: "#1f2933",
  padding: "18px 32px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
};

const footerStyle = {
  background: "#111827",
  color: "#d6e1e8",
  padding: "32px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "12px",
  fontSize: "14px",
};
