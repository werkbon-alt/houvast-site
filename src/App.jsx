import { useMemo, useState } from "react";

const ADMIN_API_URL =
  "https://script.google.com/macros/s/AKfycbzgTXIHhPWgCCDCYOiWfywCYT0mU6Ix-XC9y9qd1s7RunEKIwh45ZFEKRFged2ZMOZ2/exec";

const WERKBON_URL = "https://thriving-lily-981fb3.netlify.app/";
const PLANNING_URL = "https://effervescent-elf-77f68d.netlify.app/";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1b_VWF9JCin55pErob3syvm7u25RLkG9YB4GJkSO5CPA/edit?usp=sharing";

const services = [
  ["Rouwvervoer", "Dag en nacht beschikbaar voor overbrengingen namens uitvaartondernemingen."],
  ["Verzorging", "Respectvolle verzorging met aandacht voor rust en waardigheid."],
  ["Thuisopbaring", "Ondersteuning bij thuisopbaringen en opbaring op locatie."],
  ["Mortuarium dienstverlening", "Professionele ondersteuning binnen mortuaria en uitvaartcentra."],
  ["Grafdelving", "Werkzaamheden op en rond begraafplaatsen."],
  ["Telefoondiensten", "Overname van avond-, nacht- en bereikbaarheidsdiensten."],
];

const phoneNumbers = [
  ["Nicky Thomassen", "0614395169"],
  ["Mike Schellings", "0636517318"],
  ["Gerald Walpot", "0620977499"],
  ["Mortuarium MUMC+", "0622781040"],
  ["Bianca Walczack", "0638092039"],
  ["Cécile Habets", "0612319175"],
  ["Planning / kantoor", "0854007800"],
  ["Nelleke", "0642721339"],
  ["Sassen Kantoor", "0433212000"],
  ["Walpot Receptie", "0434091244"],
];

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("nl-NL");
}

function formatHours(value) {
  const total = Number(value || 0);
  const uren = Math.floor(total);
  const minuten = Math.round((total - uren) * 60);
  if (!uren && !minuten) return "0 min";
  if (!uren) return `${minuten} min`;
  if (!minuten) return `${uren} uur`;
  return `${uren} uur ${minuten} min`;
}

export default function App() {
  const [staffPassword, setStaffPassword] = useState("");
  const [staffUnlocked, setStaffUnlocked] = useState(false);
  const [staffError, setStaffError] = useState("");

  const [adminPassword, setAdminPassword] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWerkbon, setSelectedWerkbon] = useState(null);

  const werkbonnen = useMemo(() => {
    const all = adminData?.alleWerkbonnen || adminData?.laatsteWerkbonnen || [];
    return [...all].reverse();
  }, [adminData]);

  const filteredWerkbonnen = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return werkbonnen;

    return werkbonnen.filter((item) =>
      [
        item.werkbonnummer,
        item.opdrachtgever,
        item.medewerker1,
        item.medewerker2,
        item.naamOverledene,
        item.handelingen,
        item.bijzonderheden,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [searchTerm, werkbonnen]);

  const weekItems = Object.entries(adminData?.urenDezeWeek || {});
  const maandItems = Object.entries(adminData?.urenDezeMaand || {});
  const jaarItems = Object.entries(adminData?.urenDitJaar || {});
  const opdrachtgevers = Object.entries(adminData?.opdrachtenPerOpdrachtgever || {});

  function handleStaffLogin(e) {
    e.preventDefault();
    if (staffPassword === "Houvast2026") {
      setStaffUnlocked(true);
      setStaffPassword("");
      setStaffError("");
    } else {
      setStaffError("Onjuist wachtwoord.");
    }
  }

  async function handleAdminLogin(e) {
    e.preventDefault();

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
    } catch {
      setAdminError("Kan administratie niet laden.");
    } finally {
      setAdminLoading(false);
    }
  }

  return (
    <main>
      <style>{styles}</style>

      <section className="hero" id="top">
        <nav className="nav">
          <div className="brand">
            <strong>Houvast</strong>
            <span>postmortale zorg</span>
          </div>
          <div className="nav-links">
            <a href="#diensten">Diensten</a>
            <a href="#personeel">Personeel</a>
            <a href="#administratie">Administratie</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
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
        <p className="section-label">Dienstverlening</p>
        <h2>Ondersteuning binnen alle facetten van postmortale zorg.</h2>
        <div className="cards-grid">
          {services.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <p className="section-label light">Waarom Houvast</p>
        <h2>Een betrouwbare partner achter de schermen.</h2>
        <p>
          Wij ondersteunen met rust, discretie en professionele uitvoering.
          Altijd met respect voor overledene, nabestaanden en opdrachtgever.
        </p>
      </section>

      <section id="personeel" className="portal-section">
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
                onChange={(e) => setStaffPassword(e.target.value)}
              />
              <button type="submit">Inloggen</button>
              {staffError && <p className="error">{staffError}</p>}
            </form>
          ) : (
            <div className="portal-content">
              <div className="action-grid">
                <article className="workorder-box">
                  <h3>Digitale werkbon</h3>
                  <p>Open de digitale werkbon voor opdrachten onderweg.</p>
                  <a className="button dark" href={WERKBON_URL} target="_blank" rel="noreferrer">
                    Werkbon openen
                  </a>
                </article>

                <article className="workorder-box">
                  <h3>Planning</h3>
                  <p>Open het planningsoverzicht en start werkbonnen vanuit planning.</p>
                  <a className="button dark" href={PLANNING_URL} target="_blank" rel="noreferrer">
                    Planning openen
                  </a>
                </article>
              </div>

              <h3>Handleiding digitale werkbon</h3>
              <p className="help-text">
                Open de werkbon via de knop hierboven. Op de telefoon kan de
                werkbon worden toegevoegd aan het beginscherm. Na verzending
                wordt de werkbon automatisch opgeslagen, verwerkt in de
                urenregistratie, zichtbaar in administratie en per e-mail verzonden.
              </p>

              <h3>Telefoonlijst</h3>
              <div className="phone-grid">
                {phoneNumbers.map(([name, phone]) => (
                  <a className="phone-item" key={name} href={`tel:${phone}`}>
                    <strong>{name}</strong>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="administratie" className="admin-section">
        <div className="admin-shell">
          <h2>Administratie dashboard</h2>

          {!adminUnlocked ? (
            <form className="admin-login" onSubmit={handleAdminLogin}>
              <h3>Inloggen administratie</h3>
              <input
                type="password"
                placeholder="Administratie wachtwoord"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <button type="submit" disabled={adminLoading}>
                {adminLoading ? "Laden..." : "Inloggen"}
              </button>
              {adminError && <p className="admin-error">{adminError}</p>}
            </form>
          ) : (
            <div className="admin-dashboard">
              <div className="metric-grid">
                <article><span>Totaal werkbonnen</span><strong>{adminData?.totaalWerkbonnen || 0}</strong></article>
                <article><span>Uren deze week</span><strong>{formatHours(adminData?.totaalUrenDezeWeek)}</strong></article>
                <article><span>Uren deze maand</span><strong>{formatHours(adminData?.totaalUrenDezeMaand)}</strong></article>
                <article><span>Uren dit jaar</span><strong>{formatHours(adminData?.totaalUrenDitJaar)}</strong></article>
              </div>

              <div className="admin-three">
                <Panel title="Deze week" items={weekItems} />
                <Panel title="Deze maand" items={maandItems} />
                <Panel title="Dit jaar" items={jaarItems} />
              </div>

              <div className="admin-panel">
                <h3>Opdrachten per opdrachtgever</h3>
                {opdrachtgevers.map(([name, amount]) => (
                  <div className="row" key={name}>
                    <strong>{name}</strong>
                    <span>{amount} opdrachten</span>
                  </div>
                ))}
              </div>

              <div className="admin-panel">
                <div className="panel-header">
                  <h3>Werkbonnen zoeken</h3>
                  <a href={SHEET_URL} target="_blank" rel="noreferrer">Open Google Sheet</a>
                </div>

                <input
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Zoek op werkbonnummer, opdrachtgever, medewerker of overledene"
                />

                <div className="workorders-list">
                  {filteredWerkbonnen.map((item) => (
                    <button
                      className="workorder-row"
                      key={item.werkbonnummer}
                      onClick={() => setSelectedWerkbon(item)}
                    >
                      <strong>{item.werkbonnummer}</strong>
                      <span>{formatDate(item.datum)}</span>
                      <small>{item.opdrachtgever || "-"} · {item.naamOverledene || "-"}</small>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedWerkbon && (
        <div className="modal-backdrop" onClick={() => setSelectedWerkbon(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedWerkbon(null)}>×</button>
            <h2>{selectedWerkbon.werkbonnummer}</h2>
            <p><b>Datum:</b> {formatDate(selectedWerkbon.datum)}</p>
            <p><b>Opdrachtgever:</b> {selectedWerkbon.opdrachtgever || "-"}</p>
            <p><b>Medewerkers:</b> {[selectedWerkbon.medewerker1, selectedWerkbon.medewerker2].filter(Boolean).join(" & ") || "-"}</p>
            <p><b>Overledene:</b> {selectedWerkbon.naamOverledene || "-"}</p>
            <p><b>Handelingen:</b> {selectedWerkbon.handelingen || "-"}</p>
            <p><b>Bijzonderheden:</b> {selectedWerkbon.bijzonderheden || "-"}</p>
          </div>
        </div>
      )}

      <section id="contact" className="contact-section">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Direct ondersteuning nodig?</h2>
          <p>Neem contact op met Houvast Postmortale Zorg.</p>
          <p><strong>Telefoon:</strong> 085 400 7800</p>
          <p><strong>E-mail:</strong> info@houvast-ontzorgen.net</p>
          <p><strong>Website:</strong> www.houvast-ontzorgen.net</p>
        </div>
      </section>

      <footer>
        <span>© Houvast Postmortale Zorg</span>
        <span>Professionele ondersteuning voor uitvaartondernemingen</span>
      </footer>
    </main>
  );
}

function Panel({ title, items }) {
  return (
    <div className="admin-panel">
      <h3>{title}</h3>
      {items.length === 0 ? (
        <p>Geen uren.</p>
      ) : (
        items.map(([name, hours]) => (
          <div className="row" key={`${title}-${name}`}>
            <strong>{name}</strong>
            <span>{formatHours(hours)}</span>
          </div>
        ))
      )}
    </div>
  );
}

const styles = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
main { background: #f4f1eb; color: #1f2933; font-family: Arial, sans-serif; }

.hero {
  min-height: 92vh;
  color: #fff;
  background: linear-gradient(rgba(15,20,28,.62), rgba(15,20,28,.55)), url('/branding-bg.jpg') center/cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.brand strong { display: block; font-size: 28px; }
.brand span { color: #dbe4ea; }

.nav-links { display: flex; gap: 22px; flex-wrap: wrap; }
.nav-links a { color: #fff; text-decoration: none; font-weight: bold; }

.hero-content {
  max-width: 900px;
  margin-top: auto;
  margin-bottom: 12vh;
}

.eyebrow, .section-label {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 13px;
  color: #72889a;
}

.section-label.light, .eyebrow { color: #d6e1e8; }

.hero h1 {
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1.02;
  margin: 0 0 24px;
}

.hero p { font-size: 20px; line-height: 1.8; max-width: 760px; }

.button-row { display: flex; gap: 14px; flex-wrap: wrap; }

.button {
  display: inline-block;
  padding: 16px 28px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: bold;
}

.button.primary { background: #d6e0e6; color: #1f2933; }
.button.secondary { border: 1px solid rgba(255,255,255,.5); color: #fff; }
.button.dark { background: #1f2933; color: #fff; }

.intro, .section, .portal-section, .contact-section {
  padding: 90px 24px;
  max-width: 1180px;
  margin: 0 auto;
}

.intro { text-align: center; }
.intro h2, .section h2, .portal-card h2, .contact-card h2 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.15;
}

.intro p:last-child { font-size: 20px; color: #5f6d78; line-height: 1.8; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.card, .portal-card, .contact-card, .admin-panel {
  background: #fff;
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 15px 40px rgba(15,23,42,.08);
}

.card p { color: #5f6d78; line-height: 1.7; }

.dark-section {
  background: #1f2933;
  color: #fff;
  padding: 100px 24px;
}

.dark-section > * {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.dark-section p { color: #d7e1e8; line-height: 1.8; }

.login-form, .admin-login {
  display: grid;
  gap: 14px;
  max-width: 520px;
}

.login-form input, .admin-login input, .search-input {
  padding: 16px 18px;
  border-radius: 999px;
  border: 1px solid rgba(31,41,51,.2);
  font-size: 16px;
}

.login-form button, .admin-login button {
  background: #1f2933;
  color: #fff;
  padding: 16px 24px;
  border-radius: 999px;
  border: 0;
  font-weight: bold;
}

.error, .admin-error { color: #b91c1c; font-weight: bold; }

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 20px;
}

.workorder-box {
  background: #f4f1eb;
  border-radius: 24px;
  padding: 26px;
  margin-bottom: 20px;
}

.help-text { color: #5f6d78; line-height: 1.8; }

.phone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 12px;
}

.phone-item {
  background: #f8fafc;
  color: #1f2933;
  text-decoration: none;
  padding: 16px;
  border-radius: 16px;
  display: grid;
  gap: 4px;
}

.admin-section {
  background: #111827;
  padding: 100px 24px;
}

.admin-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.admin-shell > h2 {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 4rem);
}

.admin-login {
  background: rgba(255,255,255,.08);
  padding: 30px;
  border-radius: 26px;
}

.admin-login h3 { color: #fff; }

.admin-dashboard {
  display: grid;
  gap: 24px;
}

.metric-grid, .admin-three {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
  gap: 18px;
}

.metric-grid article {
  background: rgba(255,255,255,.08);
  color: #fff;
  border-radius: 24px;
  padding: 26px;
}

.metric-grid span { color: #b8c8d6; display: block; margin-bottom: 10px; }
.metric-grid strong { font-size: 30px; }

.row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  background: #f8fafc;
  padding: 14px;
  border-radius: 14px;
  margin-top: 10px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.workorders-list { display: grid; gap: 10px; margin-top: 18px; }

.workorder-row {
  width: 100%;
  background: #f8fafc;
  border: 1px solid rgba(31,41,51,.08);
  border-radius: 18px;
  padding: 16px;
  text-align: left;
  cursor: pointer;
  display: grid;
  gap: 4px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(17,24,39,.72);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal {
  background: #fff;
  border-radius: 28px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  padding: 32px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  border: 0;
  background: #111827;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 22px;
}

.contact-card { text-align: center; }

footer {
  background: #111827;
  color: #d6e1e8;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 700px) {
  .nav-links { display: none; }
  .hero { min-height: 80vh; padding: 22px; }
  .hero h1 { font-size: clamp(2.8rem, 14vw, 4.4rem); }
  .hero p { font-size: 17px; }
  .intro, .section, .portal-section, .contact-section { padding: 70px 18px; }
  .card, .portal-card, .contact-card, .admin-panel { padding: 24px; }
}
`;
