import { useMemo, useState } from "react";

const ADMIN_API_URL =
  "https://script.google.com/macros/s/AKfycbzgTXIHhPWgCCDCYOiWfywCYT0mU6Ix-XC9y9qd1s7RunEKIwh45ZFEKRFged2ZMOZ2/exec";

const WERKBON_URL = "https://thriving-lily-981fb3.netlify.app/";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1b_VWF9JCin55pErob3syvm7u25RLkG9YB4GJkSO5CPA/edit?usp=sharing";

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

export default function App() {
  const [staffPassword, setStaffPassword] = useState("");
  const [staffUnlocked, setStaffUnlocked] = useState(false);
  const [staffError, setStaffError] = useState("");

  const [adminPassword, setAdminPassword] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminData, setAdminData] = useState(null);

  const urenItems = useMemo(() => {
    if (!adminData?.urenPerMedewerker) return [];
    return Object.entries(adminData.urenPerMedewerker).sort(
      (a, b) => Number(b[1]) - Number(a[1])
    );
  }, [adminData]);

  const totaalUren = useMemo(
    () => urenItems.reduce((total, [, hours]) => total + Number(hours || 0), 0),
    [urenItems]
  );

  function handleStaffLogin(event) {
    event.preventDefault();

    if (staffPassword === "Houvast2026") {
      setStaffUnlocked(true);
      setStaffError("");
      setStaffPassword("");
      return;
    }

    setStaffError("Onjuist wachtwoord.");
  }

  async function handleAdminLogin(event) {
    event.preventDefault();

    if (adminPassword !== "HouvastAdmin2026") {
      setAdminError("Onjuist wachtwoord.");
      return;
    }

    try {
      setAdminLoading(true);
      setAdminError("");

      const response = await fetch(ADMIN_API_URL);
      const data = await response.json();

      setAdminData(data);
      setAdminUnlocked(true);
      setAdminPassword("");
    } catch (error) {
      setAdminError("Kan administratie niet laden. Probeer het later opnieuw.");
    } finally {
      setAdminLoading(false);
    }
  }

  return (
    <main>
      <style>{styles}</style>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <nav className="nav">
            <a className="brand" href="#top" aria-label="Houvast home">
              <img src="/logo.png" alt="Houvast logo" />
              <span>
                <strong>Houvast</strong>
                <small>postmortale zorg</small>
              </span>
            </a>

            <div className="nav-links">
              <a href="#diensten">Diensten</a>
              <a href="#kwaliteit">Kwaliteit</a>
              <a href="#personeel">Personeel</a>
              <a href="#administratie">Administratie</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content fade-up">
            <p className="eyebrow">Professionele ondersteuning voor uitvaartondernemingen</p>
            <h1>Rust, discretie en ondersteuning wanneer het ertoe doet.</h1>
            <p>
              Houvast Postmortale Zorg ondersteunt uitvaartondernemingen binnen
              het volledige traject tussen overlijden en uitvaart. Professioneel,
              betrokken en 24/7 inzetbaar.
            </p>
            <div className="button-row">
              <a className="button primary" href="#diensten">Bekijk dienstverlening</a>
              <a className="button secondary" href="#contact">Direct contact</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <article className="stat-card premium-card">
            <strong>24/7</strong>
            <span>Bereikbaar en inzetbaar</span>
          </article>
          <article className="stat-card premium-card">
            <strong>Professioneel</strong>
            <span>Met kennis en betrokkenheid</span>
          </article>
          <article className="stat-card premium-card">
            <strong>Zuid-Limburg</strong>
            <span>Regio gebonden ondersteuning</span>
          </article>
        </div>
      </section>

      <section className="intro">
        <p className="section-label">Wat wij doen</p>
        <h2>Wij ondersteunen uitvaartondernemingen achter de schermen.</h2>
        <p>
          Houvast verzorgt geen uitvaarten. Wij ondersteunen uitvaartondernemingen
          bij rouwvervoer, verzorging, opbaring, mortuariumwerkzaamheden,
          begraafplaatswerkzaamheden en bereikbaarheidsdiensten.
        </p>
      </section>

      <section id="diensten" className="section">
        <div className="section-heading">
          <p className="section-label">Dienstverlening</p>
          <h2>Ondersteuning binnen alle facetten van postmortale zorg.</h2>
        </div>

        <div className="cards-grid">
          {services.map((service) => (
            <article className="service-card premium-card" key={service.title}>
              <span>✦</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kwaliteit" className="dark-section">
        <div className="dark-grid">
          <div>
            <p className="section-label light">Waarom Houvast</p>
            <h2>Een betrouwbare partner achter de schermen.</h2>
            <p>
              Wij ondersteunen uitvaartondernemingen met rust, discretie en
              professionele uitvoering. Altijd met respect voor overledene,
              nabestaanden en opdrachtgever.
            </p>
          </div>

          <div className="quality-grid">
            <article>
              <h3>24/7 inzetbaar</h3>
              <p>Dag en nacht beschikbaar wanneer ondersteuning nodig is.</p>
            </article>
            <article>
              <h3>Zorgteam</h3>
              <p>Ons professioneel betrokken zorgteam denkt graag met u mee.</p>
            </article>
            <article>
              <h3>Regio gebonden</h3>
              <p>Wij zijn werkzaam binnen regio Zuid-Limburg.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="personeel" className="portal-section light-portal">
        <div className="portal-card">
          <p className="section-label">Personeel</p>
          <h2>Inloggen personeel</h2>
          <p>Toegang voor medewerkers van Houvast.</p>

          {!staffUnlocked ? (
            <form className="login-form" onSubmit={handleStaffLogin}>
              <input
                type="password"
                placeholder="Wachtwoord"
                value={staffPassword}
                onChange={(event) => setStaffPassword(event.target.value)}
              />
              <button type="submit">Inloggen</button>
              {staffError && <p className="error">{staffError}</p>}
            </form>
          ) : (
            <div className="portal-content">
              <article className="workorder-box">
                <h3>Digitale werkbon</h3>
                <p>Open hier de digitale werkbon voor opdrachten onderweg.</p>
                <a href={WERKBON_URL} target="_blank" rel="noreferrer" className="button dark">
                  Werkbon openen
                </a>
              </article>

              <h3 className="list-title">Telefoonlijst</h3>
              <div className="phone-grid">
                {phoneNumbers.map((item) => (
                  <a key={`${item.name}-${item.phone}`} href={`tel:${item.phone}`} className="phone-item">
                    <strong>{item.name}</strong>
                    <span>{item.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="administratie" className="admin-section">
        <div className="admin-shell">
          <div className="admin-intro">
            <p className="section-label light">Administratie</p>
            <h2>Houvast administratie dashboard</h2>
            <p>
              Intern overzicht van digitale werkbonnen en geregistreerde uren.
              De gegevens worden rechtstreeks opgehaald uit de Google Sheet.
            </p>
          </div>

          {!adminUnlocked ? (
            <form className="admin-login" onSubmit={handleAdminLogin}>
              <h3>Inloggen administratie</h3>
              <input
                type="password"
                placeholder="Administratie wachtwoord"
                value={adminPassword}
                onChange={(event) => setAdminPassword(event.target.value)}
              />
              <button type="submit" disabled={adminLoading}>
                {adminLoading ? "Laden..." : "Inloggen"}
              </button>
              {adminError && <p className="admin-error">{adminError}</p>}
            </form>
          ) : (
            <div className="admin-dashboard">
              <div className="metric-grid">
                <article>
                  <span>Totaal werkbonnen</span>
                  <strong>{adminData?.totaalWerkbonnen || 0}</strong>
                </article>
                <article>
                  <span>Totaal geregistreerde uren</span>
                  <strong>{totaalUren.toFixed(2)}</strong>
                </article>
                <article>
                  <span>Medewerkers met uren</span>
                  <strong>{urenItems.length}</strong>
                </article>
              </div>

              <div className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <p className="section-label">Urenoverzicht</p>
                    <h3>Uren per medewerker</h3>
                  </div>
                  <a href={SHEET_URL} target="_blank" rel="noreferrer">
                    Open Google Sheet
                  </a>
                </div>

                {urenItems.length === 0 ? (
                  <p>Er zijn nog geen uren geregistreerd.</p>
                ) : (
                  <div className="hours-list">
                    {urenItems.map(([name, hours]) => (
                      <div className="hours-row" key={name}>
                        <div>
                          <strong>{name}</strong>
                          <span>Geregistreerde uren</span>
                        </div>
                        <strong>{Number(hours).toFixed(2)} uur</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="admin-note">
                Versie 1 van het administratieportaal. Later kunnen hier
                werkbonoverzicht, opdrachtgevers, maandfilters, export en
                facturatievoorbereiding aan worden toegevoegd.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="image-section">
        <div>
          <p className="section-label light">Samenwerking</p>
          <h2>Ondersteuning waarop uitvaartondernemingen kunnen bouwen.</h2>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Direct ondersteuning nodig?</h2>
          <p>
            Neem contact op met Houvast Postmortale Zorg voor ondersteuning,
            samenwerking of beschikbaarheid.
          </p>
          <div className="contact-details">
            <p><strong>Telefoon</strong><br />085 400 7800</p>
            <p><strong>E-mail</strong><br />info@houvast-ontzorgen.net</p>
          </div>
          <div className="button-row centered">
            <a className="button dark" href="tel:0854007800">Bel direct</a>
            <a className="button outline" href="mailto:info@houvast-ontzorgen.net">Stuur e-mail</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© Houvast Postmortale Zorg</span>
        <span>Professionele ondersteuning voor uitvaartondernemingen</span>
      </footer>
    </main>
  );
}

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  main { margin: 0; background: #f4f1eb; color: #1f2933; font-family: Arial, sans-serif; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.06); } }

  .fade-up { animation: fadeUp 1s ease forwards; }
  .hero-bg { animation: slowZoom 18s ease-in-out infinite alternate; }
  .premium-card { transition: transform .35s ease, box-shadow .35s ease; }
  .premium-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(15, 23, 42, .12); }

  .hero { min-height: 100vh; position: relative; overflow: hidden; }
  .hero-bg { position: absolute; inset: 0; background: linear-gradient(rgba(15,20,28,.54), rgba(15,20,28,.44)), url('/branding-bg.jpg') center/cover; }
  .hero-inner { position: relative; z-index: 1; min-height: 100vh; padding: 30px; display: flex; flex-direction: column; backdrop-filter: blur(1.2px); }
  .nav { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; }
  .brand { display: flex; align-items: center; gap: 14px; color: #fff; text-decoration: none; }
  .brand img { width: 78px; height: 78px; object-fit: contain; }
  .brand strong { display: block; font-size: 22px; }
  .brand small { color: #e7edf1; font-size: 14px; }
  .nav-links { display: flex; gap: 24px; flex-wrap: wrap; }
  .nav-links a { color: #fff; text-decoration: none; font-size: 15px; }
  .hero-content { margin-top: auto; margin-bottom: 12vh; max-width: 900px; }
  .eyebrow, .section-label { text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #72889a; margin: 0 0 18px; }
  .section-label.light, .eyebrow { color: #d6e1e8; }
  .hero h1 { font-size: clamp(3.4rem, 8vw, 7rem); line-height: 1.02; color: #fff; margin: 0 0 28px; text-shadow: 0 10px 30px rgba(0,0,0,.35); }
  .hero-content p:not(.eyebrow) { color: #f0f4f6; font-size: 22px; line-height: 1.8; max-width: 760px; text-shadow: 0 8px 24px rgba(0,0,0,.35); }
  .button-row { display: flex; gap: 16px; flex-wrap: wrap; }
  .button-row.centered { justify-content: center; margin-top: 40px; }
  .button { display: inline-block; padding: 18px 32px; border-radius: 999px; text-decoration: none; font-weight: bold; transition: transform .25s ease, opacity .25s ease; }
  .button:hover { transform: translateY(-2px); opacity: .88; }
  .button.primary { background: #d6e0e6; color: #1f2933; }
  .button.secondary { border: 1px solid rgba(255,255,255,.5); color: #fff; background: rgba(255,255,255,.08); }
  .button.dark { background: #1f2933; color: #fff; border: 0; cursor: pointer; }
  .button.outline { border: 1px solid rgba(31,41,51,.2); color: #1f2933; }

  .stats { padding: 0 24px; margin-top: -70px; position: relative; z-index: 2; }
  .stats-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
  .stat-card { background: #fff; padding: 34px; border-radius: 28px; text-align: center; box-shadow: 0 18px 40px rgba(15,23,42,.08); }
  .stat-card strong { display: block; font-size: 30px; margin-bottom: 12px; }
  .stat-card span { color: #62707b; }

  .intro { max-width: 980px; margin: 0 auto; padding: 120px 24px 40px; text-align: center; }
  .intro h2, .section-heading h2, .contact-card h2, .portal-card h2 { font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.15; margin: 0 0 24px; }
  .intro p:last-child { font-size: 21px; line-height: 1.8; color: #5f6d78; }
  .section { padding: 90px 24px 120px; }
  .section-heading { max-width: 900px; margin: 0 auto 60px; text-align: center; }
  .cards-grid { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
  .service-card { background: #fff; padding: 36px; border-radius: 30px; box-shadow: 0 15px 40px rgba(15,23,42,.07); }
  .service-card span { color: #72889a; font-size: 24px; }
  .service-card h3 { font-size: 24px; }
  .service-card p { color: #5f6e79; line-height: 1.8; }

  .dark-section { background: #1f2933; padding: 120px 24px; }
  .dark-grid { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; }
  .dark-grid h2 { color: #fff; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.15; }
  .dark-grid p { color: #d7e1e8; line-height: 1.9; font-size: 18px; }
  .quality-grid { display: grid; gap: 20px; }
  .quality-grid article { background: rgba(255,255,255,.08); padding: 26px; border-radius: 22px; color: #fff; }

  .portal-section { padding: 120px 24px; }
  .light-portal { background: #eef3f6; }
  .portal-card, .contact-card { max-width: 980px; margin: 0 auto; background: #fff; border-radius: 34px; padding: 54px; text-align: center; box-shadow: 0 15px 40px rgba(15,23,42,.08); }
  .portal-card > p:not(.section-label), .contact-card > p { color: #5f6d78; line-height: 1.8; font-size: 18px; }
  .login-form { margin-top: 30px; display: flex; justify-content: center; align-items: center; gap: 14px; flex-wrap: wrap; }
  .login-form input { padding: 17px 20px; border-radius: 999px; border: 1px solid rgba(31,41,51,.22); font-size: 16px; min-width: 240px; }
  .login-form button, .portal-card button { background: #1f2933; color: #fff; padding: 18px 32px; border-radius: 999px; border: none; cursor: pointer; font-weight: bold; }
  .error { width: 100%; color: #b91c1c; font-weight: bold; }
  .portal-content { margin-top: 36px; }
  .workorder-box { background: #f4f1eb; border-radius: 28px; padding: 34px; margin-bottom: 40px; }
  .list-title { font-size: 28px; margin-bottom: 24px; }
  .phone-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; text-align: left; }
  .phone-item { background: #f8fafc; color: #1f2933; text-decoration: none; padding: 18px; border-radius: 18px; display: flex; flex-direction: column; gap: 6px; border: 1px solid rgba(31,41,51,.08); }

  .admin-section { padding: 120px 24px; background: #111827; }
  .admin-shell { max-width: 1180px; margin: 0 auto; }
  .admin-intro { max-width: 850px; margin-bottom: 40px; }
  .admin-intro h2 { color: #fff; font-size: clamp(2.4rem, 5vw, 4.6rem); line-height: 1.08; margin: 0 0 22px; }
  .admin-intro p:not(.section-label) { color: #d7e1e8; font-size: 18px; line-height: 1.8; }
  .admin-login { max-width: 620px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); border-radius: 30px; padding: 34px; display: grid; gap: 16px; }
  .admin-login h3 { color: #fff; font-size: 26px; margin: 0; }
  .admin-login input { padding: 18px 20px; border-radius: 999px; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.1); color: #fff; font-size: 16px; }
  .admin-login button { background: #d6e0e6; color: #111827; padding: 18px 32px; border-radius: 999px; border: 0; font-weight: bold; cursor: pointer; }
  .admin-error { color: #fecaca; font-weight: bold; margin: 0; }
  .admin-dashboard { display: grid; gap: 28px; }
  .metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 22px; }
  .metric-grid article { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); border-radius: 28px; padding: 30px; color: #fff; }
  .metric-grid span { color: #b8c8d6; display: block; margin-bottom: 12px; }
  .metric-grid strong { font-size: 42px; line-height: 1; }
  .admin-panel { background: #fff; border-radius: 34px; padding: 36px; box-shadow: 0 20px 60px rgba(0,0,0,.16); }
  .admin-panel-header { display: flex; justify-content: space-between; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 24px; }
  .admin-panel-header h3 { font-size: 30px; margin: 0; }
  .admin-panel-header a { background: #1f2933; color: #fff; padding: 14px 22px; border-radius: 999px; text-decoration: none; font-weight: bold; }
  .hours-list { display: grid; gap: 12px; }
  .hours-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid rgba(31,41,51,.08); border-radius: 18px; padding: 18px; }
  .hours-row span { display: block; margin-top: 4px; color: #6b7280; font-size: 14px; }
  .hours-row > strong { font-size: 20px; }
  .admin-note { color: #cbd5e1; font-size: 14px; line-height: 1.7; }

  .image-section { min-height: 70vh; background: linear-gradient(rgba(18,24,32,.45), rgba(18,24,32,.45)), url('/branding-bg.jpg') center/cover; display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; }
  .image-section h2 { color: #fff; max-width: 900px; font-size: clamp(2.4rem, 6vw, 5rem); line-height: 1.1; text-shadow: 0 10px 30px rgba(0,0,0,.35); }
  .contact-section { padding: 120px 24px; }
  .contact-details { margin-top: 36px; line-height: 1.9; color: #1f2933; }
  footer { background: #111827; color: #d6e1e8; padding: 32px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 14px; }

  @media (max-width: 700px) {
    .nav-links { display: none; }
    .hero h1 { font-size: clamp(2.8rem, 14vw, 4.6rem); }
    .hero-content p:not(.eyebrow) { font-size: 18px; }
    .portal-card, .contact-card, .admin-panel { padding: 28px; }
    .admin-section, .portal-section, .contact-section, .dark-section { padding: 80px 18px; }
  }
`;
