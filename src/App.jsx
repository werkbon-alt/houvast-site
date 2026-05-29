import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loginError, setLoginError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (password === "Houvast2026") {
      setUnlocked(true);
      setLoginError("");
      setPassword("");
    } else {
      setLoginError("Onjuist wachtwoord.");
    }
  }

  return (
    <main style={pageStyle}>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slowZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.06);
            }
          }

          .fade-up {
            animation: fadeUp 1s ease forwards;
          }

          .hero-bg {
            animation: slowZoom 18s ease-in-out infinite alternate;
          }

          .premium-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .premium-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 60px rgba(15,23,42,0.12);
          }

          .premium-button {
            transition: transform 0.25s ease, opacity 0.25s ease;
          }

          .premium-button:hover {
            transform: translateY(-2px);
            opacity: 0.88;
          }

          @media (max-width: 700px) {
            .hide-mobile {
              display: none !important;
            }
          }
        `}
      </style>

      <section style={heroWrapper}>
        <div className="hero-bg" style={heroBackground} />

        <div style={heroOverlay}>
          <nav style={navStyle}>
            <div style={brandStyle}>
              <img src="/logo.png" alt="Houvast logo" style={logoStyle} />

              <div>
                <div style={brandTitle}>Houvast</div>
                <div style={brandSub}>postmortale zorg</div>
              </div>
            </div>

            <div className="hide-mobile" style={navLinks}>
              <a href="#diensten" style={navLink}>Diensten</a>
              <a href="#kwaliteit" style={navLink}>Kwaliteit</a>
              <a href="#personeel" style={navLink}>Personeel</a>
              <a href="#contact" style={navLink}>Contact</a>
            </div>
          </nav>

          <div className="fade-up" style={heroContent}>
            <p style={eyebrow}>
              PROFESSIONELE ONDERSTEUNING VOOR UITVAARTONDERNEMINGEN
            </p>

            <h1 style={heroTitle}>
              Rust, discretie en ondersteuning wanneer het ertoe doet.
            </h1>

            <p style={heroText}>
              Houvast Postmortale Zorg ondersteunt uitvaartondernemingen binnen
              het volledige traject tussen overlijden en uitvaart.
              Professioneel, betrokken en 24/7 inzetbaar.
            </p>

            <div style={buttonRow}>
              <a className="premium-button" href="#diensten" style={primaryButton}>
                Bekijk dienstverlening
              </a>

              <a className="premium-button" href="#contact" style={secondaryButton}>
                Direct contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={statsSection}>
        <div style={statsGrid}>
          <div className="premium-card" style={statCard}>
            <h3 style={statNumber}>24/7</h3>
            <p style={statText}>Bereikbaar en inzetbaar</p>
          </div>

          <div className="premium-card" style={statCard}>
            <h3 style={statNumber}>Professioneel</h3>
            <p style={statText}>Met kennis en betrokkenheid</p>
          </div>

          <div className="premium-card" style={statCard}>
            <h3 style={statNumber}>Zuid-Limburg</h3>
            <p style={statText}>Regio gebonden ondersteuning</p>
          </div>
        </div>
      </section>

      <section style={introSection}>
        <div style={introInner}>
          <p style={sectionEyebrow}>WAT WIJ DOEN</p>

          <h2 style={sectionTitle}>
            Wij ondersteunen uitvaartondernemingen achter de schermen.
          </h2>

          <p style={largeText}>
            Houvast verzorgt geen uitvaarten. Wij ondersteunen
            uitvaartondernemingen bij rouwvervoer, verzorging, opbaring,
            mortuariumwerkzaamheden, begraafplaatswerkzaamheden en
            bereikbaarheidsdiensten.
          </p>
        </div>
      </section>

      <section id="diensten" style={servicesSection}>
        <div style={sectionHeader}>
          <p style={sectionEyebrow}>DIENSTVERLENING</p>

          <h2 style={sectionTitle}>
            Ondersteuning binnen alle facetten van postmortale zorg.
          </h2>
        </div>

        <div style={cardsGrid}>
          {services.map((service) => (
            <article className="premium-card" key={service.title} style={cardStyle}>
              <div style={cardIcon}>✦</div>
              <h3 style={cardTitle}>{service.title}</h3>
              <p style={cardText}>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kwaliteit" style={darkSection}>
        <div style={darkInner}>
          <div>
            <p style={sectionEyebrowDark}>WAAROM HOUVAST</p>

            <h2 style={darkTitle}>
              Een betrouwbare partner achter de schermen.
            </h2>

            <p style={darkText}>
              Wij ondersteunen uitvaartondernemingen met rust, discretie en
              professionele uitvoering. Altijd met respect voor overledene,
              nabestaanden en opdrachtgever.
            </p>
          </div>

          <div style={qualityGrid}>
            <div style={qualityCard}>
              <h3>24/7 inzetbaar</h3>
              <p>Dag en nacht beschikbaar wanneer ondersteuning nodig is.</p>
            </div>

            <div style={qualityCard}>
              <h3>Zorgteam</h3>
              <p>Ons professioneel betrokken zorgteam denkt graag met u mee.</p>
            </div>

            <div style={qualityCard}>
              <h3>Regio gebonden</h3>
              <p>Wij zijn werkzaam binnen regio Zuid-Limburg.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="personeel" style={staffSection}>
        <div style={staffCard}>
          <p style={sectionEyebrow}>PERSONEEL</p>

          <h2 style={contactTitle}>Inloggen personeel</h2>

          <p style={contactText}>
            Toegang voor medewerkers van Houvast.
          </p>

          {!unlocked ? (
            <form onSubmit={handleLogin} style={loginForm}>
              <input
                type="password"
                placeholder="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={passwordInput}
              />

              <button type="submit" style={primaryDarkButton}>
                Inloggen
              </button>

              {loginError && (
                <p style={errorText}>{loginError}</p>
              )}
            </form>
          ) : (
            <div style={staffContent}>
              <div style={staffActionBox}>
                <h3>Digitale werkbon</h3>
                <p>
                  Open hier de digitale werkbon voor opdrachten onderweg.
                </p>

                <a
                  href="https://thriving-lily-981fb3.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={primaryDarkButton}
                >
                  Werkbon openen
                </a>
              </div>

              <h3 style={phoneTitle}>Telefoonlijst</h3>

              <div style={phoneGrid}>
                {phoneNumbers.map((item) => (
                  <a
                    key={`${item.name}-${item.phone}`}
                    href={`tel:${item.phone.replace(/\s/g, "")}`}
                    style={phoneItem}
                  >
                    <strong>{item.name}</strong>
                    <span>{item.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section style={imageSection}>
        <div style={imageOverlay}>
          <div style={imageContent}>
            <p style={sectionEyebrowLight}>SAMENWERKING</p>

            <h2 style={imageTitle}>
              Ondersteuning waarop uitvaartondernemingen kunnen bouwen.
            </h2>
          </div>
        </div>
      </section>

      <section id="contact" style={contactSection}>
        <div style={contactCard}>
          <p style={sectionEyebrow}>CONTACT</p>

          <h2 style={contactTitle}>Direct ondersteuning nodig?</h2>

          <p style={contactText}>
            Neem contact op met Houvast Postmortale Zorg voor ondersteuning,
            samenwerking of beschikbaarheid.
          </p>

          <div style={contactDetails}>
            <p><strong>Telefoon</strong><br />085 400 7800</p>
            <p><strong>E-mail</strong><br />info@houvast-ontzorgen.net</p>
          </div>

          <div style={buttonRowCenter}>
            <a className="premium-button" href="tel:0854007800" style={primaryDarkButton}>
              Bel direct
            </a>

            <a
              className="premium-button"
              href="mailto:info@houvast-ontzorgen.net"
              style={secondaryDarkButton}
            >
              Stuur e-mail
            </a>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>© Houvast Postmortale Zorg</div>
        <div>Professionele ondersteuning voor uitvaartondernemingen</div>
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

const phoneNumbers = [
  { name: "Nicky Thomassen", phone: "0614395169" },
  { name: "Mike Schellings", phone: "0636517318" },
  { name: "Gerald Walpot", phone: "0620977499" },
  { name: "Mortuarium MUMC+", phone: "0622781040" },
  { name: "Bianca Walczack", phone: "0638092039" },
  { name: "Funeral Assist Voerendaal", phone: "0455748520" },
  { name: "Cécile Habets", phone: "0612319175" },
  { name: "Planning / kantoor", phone: "0854007800" },
  { name: "Nelleke", phone: "0642721339" },
  { name: "Walpot Receptie", phone: "0434091244" },
  { name: "Walpot crematorium agenda", phone: "0434093703" },
  { name: "Sassen Kantoor", phone: "0433212000" },
  { name: "Sassen Maurice", phone: "0651644914" },
  { name: "Sassen Cathelijne", phone: "0620801278" },
  { name: "Sassen Eelco", phone: "0610900157" },
  { name: "Sassen Huup", phone: "0651227441" },
  { name: "Sassen Andre", phone: "0627412460" },
  { name: "Walpot Marc", phone: "0653912321" },
  { name: "Walpot Angelique", phone: "0627061456" },
];

const pageStyle = {
  margin: 0,
  background: "#f4f1eb",
  color: "#1f2933",
  fontFamily: "Arial, sans-serif",
};

const heroWrapper = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
};

const heroBackground = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(rgba(15,20,28,0.54), rgba(15,20,28,0.44)), url('/branding-bg.jpg') center/cover",
};

const heroOverlay = {
  position: "relative",
  zIndex: 1,
  minHeight: "100vh",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  backdropFilter: "blur(1.2px)",
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
  width: "78px",
  height: "78px",
  objectFit: "contain",
};

const brandTitle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "bold",
};

const brandSub = {
  color: "#e7edf1",
  fontSize: "14px",
};

const navLinks = {
  display: "flex",
  gap: "24px",
};

const navLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "15px",
};

const heroContent = {
  marginTop: "auto",
  marginBottom: "12vh",
  maxWidth: "900px",
};

const eyebrow = {
  color: "#e8eef2",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "22px",
};

const heroTitle = {
  fontSize: "clamp(3.4rem, 8vw, 7rem)",
  lineHeight: "1.02",
  color: "#ffffff",
  marginBottom: "28px",
  textShadow: "0 10px 30px rgba(0,0,0,0.35)",
};

const heroText = {
  color: "#f0f4f6",
  fontSize: "22px",
  lineHeight: "1.8",
  maxWidth: "760px",
  marginBottom: "42px",
  textShadow: "0 8px 24px rgba(0,0,0,0.35)",
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
  border: "1px solid rgba(255,255,255,0.5)",
  color: "#ffffff",
  padding: "18px 32px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  background: "rgba(255,255,255,0.08)",
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

const introSection = {
  padding: "120px 24px 40px",
};

const introInner = {
  maxWidth: "980px",
  margin: "0 auto",
  textAlign: "center",
};

const largeText = {
  fontSize: "21px",
  lineHeight: "1.8",
  color: "#5f6d78",
};

const servicesSection = {
  padding: "90px 24px 120px",
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

const staffSection = {
  padding: "120px 24px",
  background: "#eef3f6",
};

const staffCard = {
  maxWidth: "980px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "34px",
  padding: "54px",
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
};

const loginForm = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
};

const passwordInput = {
  padding: "17px 20px",
  borderRadius: "999px",
  border: "1px solid rgba(31,41,51,0.22)",
  fontSize: "16px",
  minWidth: "240px",
};

const errorText = {
  width: "100%",
  color: "#b91c1c",
  fontWeight: "bold",
};

const staffContent = {
  marginTop: "36px",
};

const staffActionBox = {
  background: "#f4f1eb",
  borderRadius: "28px",
  padding: "34px",
  marginBottom: "40px",
};

const phoneTitle = {
  fontSize: "28px",
  marginBottom: "24px",
};

const phoneGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "14px",
  textAlign: "left",
};

const phoneItem = {
  background: "#f8fafc",
  color: "#1f2933",
  textDecoration: "none",
  padding: "18px",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  border: "1px solid rgba(31,41,51,0.08)",
};

const imageSection = {
  minHeight: "70vh",
  background:
    "linear-gradient(rgba(18,24,32,0.45), rgba(18,24,32,0.45)), url('/branding-bg.jpg') center/cover",
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
  textShadow: "0 10px 30px rgba(0,0,0,0.35)",
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
  border: "none",
  cursor: "pointer",
  display: "inline-block",
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
