export default function App() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={heroOverlay}>
          <nav style={navStyle}>
            <div style={brandStyle}>
              <div style={logoMark}>H</div>
              <div>
                <strong>Houvast</strong>
                <div style={brandSub}>postmortale zorg</div>
              </div>
            </div>

            <div style={navLinks}>
              <a style={navLink} href="#diensten">Diensten</a>
              <a style={navLink} href="#werkwijze">Werkwijze</a>
              <a style={navLink} href="#contact">Contact</a>
            </div>
          </nav>

          <div style={heroContent}>
            <p style={eyebrow}>NAMENS UITVAARTONDERNEMINGEN</p>

            <h1 style={heroTitle}>
              Postmortale zorg met respect en aandacht.
            </h1>

            <p style={heroText}>
              Houvast Postmortale Zorg ondersteunt uitvaartondernemingen
              in het traject tussen overlijden en uitvaart. Discreet,
              professioneel en 24 uur per dag inzetbaar.
            </p>

            <div style={buttonRow}>
              <a style={primaryButton} href="#diensten">
                Onze dienstverlening
              </a>

              <a style={secondaryButton} href="#contact">
                Direct contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={introSection}>
        <div style={introInner}>
          <p style={sectionEyebrow}>WAT WIJ DOEN</p>

          <h2 style={sectionTitle}>
            Ondersteuning van overlijden tot aan de dag van de uitvaart.
          </h2>

          <p style={largeText}>
            Wij verzorgen geen uitvaarten. Houvast Postmortale Zorg ondersteunt
            uitvaartondernemingen bij de praktische en postmortale zorg rondom
            overlijden, opbaring en voorbereiding richting uitvaart.
          </p>
        </div>
      </section>

      <section id="diensten" style={servicesSection}>
        <div style={sectionHeader}>
          <p style={sectionEyebrow}>DIENSTVERLENING</p>
          <h2 style={sectionTitle}>Zorgvuldig, representatief en inzetbaar wanneer nodig.</h2>
        </div>

        <div style={cardsGrid}>
          {[
            [
              "Overledenen ophalen",
              "Dag en nacht beschikbaar voor overbrengingen namens uitvaartondernemingen.",
            ],
            [
              "Verzorging",
              "Respectvolle verzorging met oog voor rust, waardigheid en detail.",
            ],
            [
              "Thuisopbaring",
              "Ondersteuning bij thuisopbaringen, bedopbaringen en kistopbaringen op locatie.",
            ],
            [
              "Mortuarium dienstverlening",
              "Professionele ondersteuning binnen mortuaria, verzorgingsruimten en uitvaartcentra.",
            ],
            [
              "Grafdelving",
              "Discreet en zorgvuldig uitgevoerd rondom begraafplaatsen en voorbereidende werkzaamheden.",
            ],
            [
              "Telefoondiensten",
              "Overname van bereikbaarheidsdiensten in avond, nacht en weekend.",
            ],
          ].map(([title, text]) => (
            <article style={cardStyle} key={title}>
              <div style={cardIcon}>✦</div>
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardText}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="werkwijze" style={processSection}>
        <div style={processInner}>
          <div>
            <p style={sectionEyebrowLight}>WERKWIJZE</p>
            <h2 style={sectionTitleLight}>
              Een betrouwbare partner achter de schermen.
            </h2>
          </div>

          <div style={timeline}>
            {[
              "Melding overlijden",
              "Ophalen overledene",
              "Verzorging",
              "Opbaring of bewaring",
              "Overdracht richting uitvaart",
            ].map((item, index) => (
              <div style={timelineItem} key={item}>
                <span style={timelineNumber}>{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={whySection}>
        <div style={sectionHeader}>
          <p style={sectionEyebrow}>WAAROM HOUVAST</p>
          <h2 style={sectionTitle}>Rust, discretie en betrouwbaarheid.</h2>
        </div>

        <div style={whyGrid}>
          <div style={whyItem}>
            <h3>24/7 inzetbaar</h3>
            <p>Dag en nacht beschikbaar wanneer ondersteuning nodig is.</p>
          </div>

          <div style={whyItem}>
            <h3>Representatief</h3>
            <p>Professioneel handelen met respect voor overledene en nabestaanden.</p>
          </div>

          <div style={whyItem}>
            <h3>Voor ondernemers</h3>
            <p>Wij werken in opdracht van uitvaartondernemingen en ondersteunen achter de schermen.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={contactSection}>
        <div style={contactCard}>
          <p style={sectionEyebrow}>CONTACT</p>

          <h2 style={contactTitle}>Direct ondersteuning nodig?</h2>

          <p style={contactText}>
            Neem contact op met Houvast Postmortale Zorg voor beschikbaarheid,
            samenwerking of directe ondersteuning.
          </p>

          <div style={contactDetails}>
            <p><strong>Telefoon:</strong> 085 400 7800</p>
            <p><strong>E-mail:</strong> info@houvast-ontzorgen.net</p>
            <p><strong>Website:</strong> www.houvast-ontzorgen.net</p>
            <p>
              <strong>Adres:</strong><br />
              Langs de Gewannen 20<br />
              6235 NV Ulestraten
            </p>
          </div>

          <div style={buttonRowCenter}>
            <a style={primaryButtonDark} href="tel:0854007800">
              Bel direct
            </a>

            <a style={secondaryButtonDark} href="mailto:info@houvast-ontzorgen.net">
              Stuur e-mail
            </a>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>© Houvast Postmortale Zorg</p>
        <p>Professionele ondersteuning voor uitvaartondernemingen</p>
      </footer>
    </main>
  );
}

const pageStyle = {
  margin: 0,
  fontFamily: "Arial, sans-serif",
  background: "#f5f3ef",
  color: "#1f2933",
};

const heroStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(rgba(17,24,39,0.72), rgba(17,24,39,0.62)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop') center/cover",
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
  gap: "24px",
  color: "#fff",
};

const brandStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  letterSpacing: "0.5px",
};

const logoMark = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.18)",
  border: "1px solid rgba(255,255,255,0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const brandSub = {
  fontSize: "13px",
  color: "#d9e1e8",
};

const navLinks = {
  display: "flex",
  gap: "22px",
  flexWrap: "wrap",
};

const navLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
};

const heroContent = {
  maxWidth: "820px",
  marginTop: "auto",
  marginBottom: "12vh",
  color: "#fff",
};

const eyebrow = {
  letterSpacing: "4px",
  color: "#c7d7e3",
  fontSize: "13px",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(3.1rem, 8vw, 6.7rem)",
  lineHeight: "1.05",
  margin: "0 0 28px",
  fontWeight: 700,
};

const heroText = {
  fontSize: "20px",
  lineHeight: "1.8",
  color: "#e9eef2",
  maxWidth: "700px",
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
  marginTop: "30px",
};

const primaryButton = {
  background: "#d8e2e9",
  color: "#111827",
  padding: "17px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  textDecoration: "none",
};

const secondaryButton = {
  border: "1px solid rgba(255,255,255,0.5)",
  color: "#fff",
  padding: "17px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  textDecoration: "none",
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
  letterSpacing: "4px",
  color: "#6f8796",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionEyebrowLight = {
  letterSpacing: "4px",
  color: "#b8ccd9",
  fontSize: "13px",
  marginBottom: "18px",
};

const sectionTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
  lineHeight: "1.15",
  margin: "0 0 26px",
};

const sectionTitleLight = {
  fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
  lineHeight: "1.15",
  margin: "0",
  color: "#fff",
};

const largeText = {
  fontSize: "21px",
  lineHeight: "1.8",
  color: "#51616c",
};

const servicesSection = {
  padding: "30px 24px 110px",
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
  background: "#fff",
  padding: "34px",
  borderRadius: "28px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.07)",
  border: "1px solid rgba(15,23,42,0.06)",
};

const cardIcon = {
  color: "#6f8796",
  fontSize: "24px",
  marginBottom: "18px",
};

const cardTitle = {
  fontSize: "22px",
  marginBottom: "12px",
};

const cardText = {
  color: "#5b6872",
  lineHeight: "1.75",
};

const processSection = {
  background: "#1f2933",
  padding: "110px 24px",
};

const processInner = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "50px",
  alignItems: "start",
};

const timeline = {
  display: "grid",
  gap: "16px",
};

const timelineItem = {
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  padding: "20px",
  borderRadius: "18px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const timelineNumber = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  background: "#d8e2e9",
  color: "#111827",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const whySection = {
  padding: "110px 24px",
};

const whyGrid = {
  maxWidth: "1050px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
};

const whyItem = {
  background: "#eef3f6",
  padding: "32px",
  borderRadius: "26px",
  lineHeight: "1.7",
};

const contactSection = {
  padding: "80px 24px 110px",
};

const contactCard = {
  maxWidth: "850px",
  margin: "0 auto",
  background: "#fff",
  padding: "48px",
  borderRadius: "34px",
  boxShadow: "0 18px 50px rgba(15,23,42,0.09)",
  textAlign: "center",
};

const contactTitle = {
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  margin: "0 0 20px",
};

const contactText = {
  color: "#5b6872",
  fontSize: "18px",
  lineHeight: "1.7",
};

const contactDetails = {
  marginTop: "30px",
  color: "#1f2933",
  lineHeight: "1.8",
};

const primaryButtonDark = {
  background: "#1f2933",
  color: "#fff",
  padding: "17px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  textDecoration: "none",
};

const secondaryButtonDark = {
  border: "1px solid rgba(31,41,51,0.25)",
  color: "#1f2933",
  padding: "17px 28px",
  borderRadius: "999px",
  fontWeight: "bold",
  textDecoration: "none",
};

const footerStyle = {
  background: "#111827",
  color: "#d9e1e8",
  padding: "28px",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  flexWrap: "wrap",
  fontSize: "14px",
};
