import { useState, useEffect } from 'react';
import logo from '../src/assets/logo.png';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
  partenza: '',
  destinazione: '',
  durata: '',
  data: '',
  viaggiatori: ''
});
  
const [itinerario, setItinerario] = useState(null);

const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIntroVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const heroBg =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2100&q=80';

  const features = [
    { num: 1, title: 'Scegli la destinazione', desc: 'Indica dove vuoi andare e quando partirai.' },
    { num: 2, title: 'Personalizza', desc: 'Seleziona budget, interessi e stile di viaggio.' },
    { num: 3, title: 'Goditi il viaggio', desc: 'Ricevi un itinerario pronto da seguire con mappa interattiva.' },
  ];

  return (
    <>
      {/* —— Global Styles —— */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap');
        :root{--primary:#ff7e1b;--primary-dark:#e56700;--text-light:#ffffff;--text-dark:#111827;--bg-light:#ffffff;--bg-section:#f7f9fc}
        *,*:before,*:after{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'Poppins',sans-serif;color:var(--text-dark);background:var(--bg-light)}
        a{text-decoration:none;color:inherit}
        @keyframes introFade{0%{opacity:1}70%{opacity:1}100%{opacity:0;visibility:hidden}}
        .intro{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;background:var(--bg-light);animation:introFade 2.2s ease forwards;z-index:9999}
        .intro-logo{width:80px;height:80px}
        .intro-title{font-size:2rem;font-weight:700;color:var(--primary)}
        .navbar{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.9);backdrop-filter:saturate(180%) blur(12px);box-shadow:0 1px 2px rgba(0,0,0,.05)}
        .nav-container{max-width:1200px;margin:0 auto;padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between}
        .nav-links{display:flex;gap:1.5rem;font-weight:600}
        .hamburger{display:none;font-size:1.5rem;background:transparent;border:none;cursor:pointer}
        @media(max-width:768px){.nav-links{display:none}.hamburger{display:block}}
        .drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4)}
        .drawer{position:fixed;top:0;left:0;height:100vh;width:260px;background:#fff;box-shadow:2px 0 6px rgba(0,0,0,.1);padding:1.25rem;transform:translateX(-100%);transition:transform .3s ease}
        .drawer.open{transform:translateX(0)}
        .drawer nav{display:grid;gap:1rem;margin-top:2rem}
        .hero{min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;color:var(--text-light);background:url(${heroBg}) center/cover no-repeat}
        .hero:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35)0%,rgba(0,0,0,.3)40%,rgba(0,0,0,.4)100%)}
        .hero>*{position:relative;z-index:1}
        .hero-title{font-size:clamp(2rem,5vw,3rem);font-weight:700;margin-bottom:.5rem}
        .hero-subtitle{font-size:1.125rem;margin-bottom:1.5rem}
        .btn-primary{display:inline-block;padding:.75rem 1.75rem;border-radius:.375rem;font-weight:600;background:var(--primary);color:var(--text-light);transition:background .2s}
        .btn-primary:hover {
  background: var(--primary-dark);
  box-shadow: 0 0 12px rgba(255, 126, 27, 0.4);
  transform: scale(1.03);
  transition: all 0.2s ease-in-out;
}
        .section{padding:4rem 1.5rem}
        .section-title{text-align:center;font-size:2rem;font-weight:700;margin-bottom:2.5rem}
        .features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;max-width:1000px;margin:0 auto}
        .feature-card{background:var(--bg-light);border:1px solid #e5e7eb;border-radius:.375rem;padding:2rem 1.25rem;text-align:center}
        .feature-number{font-size:2rem;font-weight:700;color:var(--primary);margin-bottom:.75rem}
        footer{background:#111827;color:#9ca3af;text-align:center;padding:2rem 1.5rem}
        .form-section {
  animation: fadeSlideDown 0.5s ease forwards;
  background: #ffffff;
  padding: 2rem 1.5rem;
}
@keyframes fadeSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-section {
  animation: fadeSlideDown 1s ease-in-out forwards;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  color: #ffffff;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-container h3 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.form-group label {
  min-width: 100px;
  margin-bottom: 0;
  font-weight: 500;
  color: #ffffff;
}

.form-group input {
  padding: 0.65rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 6px;
  outline: none;
  font-size: 1rem;
  transition: border 0.2s ease, background-color 0.2s ease;
}

.form-group input::placeholder {
  color: #ddd;
}

.form-group input:focus {
  border-color: var(--primary);
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 6px rgba(255, 126, 27, 0.3);
}
      `}</style>

      {introVisible && (
        <div className="intro">
          <img src={logo.src} alt="Logo ItinerAI" className="intro-logo" />
          <span className="intro-title">ItinerAI</span>
        </div>
      )}

      <header className="navbar">
        <div className="nav-container">
          <a href="/" style={{display:'flex',alignItems:'center',gap:'0.5rem',fontWeight:700,fontSize:'1.25rem',color:'var(--primary)'}}>
            <img src={logo.src} alt="Logo" style={{width:'28px',height:'28px'}} />
            <span>ItinerAI</span>
          </a>
          <nav className="nav-links">
  <a href="#how">Come funziona</a>
  <a href="#contact">Contatti</a>
</nav>
          <button className="hamburger" aria-label="Apri menu" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
          <aside className={`drawer ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => setMenuOpen(false)} aria-label="Chiudi menu" style={{position:'absolute',top:'1rem',right:'1rem',background:'transparent',border:'none',fontSize:'1.5rem',cursor:'pointer'}}>×</button>
            <nav>
  <a href="#how" onClick={() => setMenuOpen(false)}>Come funziona</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contatti</a>
</nav>
          </aside>
        </>
      )}

      <section className="hero">
  <h1 className="hero-title">Benvenuto nella beta di ItinerAI</h1>
  <p className="hero-subtitle">Il tuo viaggio pianificato in 30 secondi.</p>
  <a onClick={() => setShowForm(!showForm)} className="btn-primary" style={{cursor: 'pointer'}}>
    Crea il tuo itinerario
  </a>

  {showForm && (
    <div className="form-section">
      <div className="form-container">
        <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>Inizia a pianificare il tuo viaggio</h3>
        <form onSubmit={(e) => {
  e.preventDefault();
  setGenerating(true);
  setTimeout(() => {
    setGenerating(false);
    setItinerario({
  giorno1: `Arrivo a ${formData.destinazione}, sistemazione in hotel, esplorazione del centro storico.`,
  giorno2: `Visita a musei e attrazioni principali di ${formData.destinazione}.`,
  giorno3: `Relax, escursione o attività locali. Rientro previsto.`,
});
  }, 2000);
}}>
          <div className="form-grid">
            <div className="form-group">
              <label>Partenza</label>
              <input
  type="text"
  placeholder="Es. Roma"
  value={formData.partenza}
  onChange={(e) => setFormData({ ...formData, partenza: e.target.value })}
/>
            </div>
            <div className="form-group">
              <label>Destinazione</label>
              <input
  type="text"
  placeholder="Es. Parigi"
  value={formData.destinazione}
  onChange={(e) => setFormData({ ...formData, destinazione: e.target.value })}
/>
            </div>
            <div className="form-group">
              <label>Durata (giorni)</label>
              <input
  type="number"
  min="1"
  placeholder="Es. 5"
  value={formData.durata}
  onChange={(e) => setFormData({ ...formData, durata: e.target.value })}
/>
            </div>
            <div className="form-group">
              <label>Data partenza</label>
              <input
  type="date"
  value={formData.data}
  onChange={(e) => setFormData({ ...formData, data: e.target.value })}
/>
            </div>
            <div className="form-group">
              <label>Numero viaggiatori</label>
              <input
  type="number"
  min="1"
  value={formData.viaggiatori}
  onChange={(e) => setFormData({ ...formData, viaggiatori: e.target.value })}
/>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{marginTop: '1rem'}}>Genera itinerario</button>
    {generating && (
    <p style={{ color: "#fff", textAlign: "center", marginTop: "1rem" }}>
      🎉 Generazione itinerario in corso...
    </p>
  )}
    {itinerario && (
  <div style={{
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
  }}>
    <h4 style={{ marginBottom: '1rem' }}>🧭 Itinerario suggerito:</h4>
    <ul style={{ lineHeight: '1.6' }}>
      <li><strong>Giorno 1:</strong> {itinerario.giorno1}</li>
      <li><strong>Giorno 2:</strong> {itinerario.giorno2}</li>
      <li><strong>Giorno 3:</strong> {itinerario.giorno3}</li>
    </ul>
  </div>
)}
        </form>
      </div>
    </div>
  )}
</section>

      <section id="how" className="section">
        <h2 className="section-title">Come funziona</h2>
        <div className="features-grid">
          {features.map(({ num, title, desc }) => (
            <div key={num} className="feature-card">
              <div className="feature-number">{num}</div>
              <h3 style={{fontSize:'1.25rem',fontWeight:600,marginBottom:'0.5rem'}}>{title}</h3>
              <p style={{lineHeight:1.5}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="create" className="section" style={{background:'var(--bg-section)'}}>
        <h2 className="section-title">Crea il tuo itinerario</h2>
        <p style={{textAlign:'center',maxWidth:'600px',margin:'0 auto'}}>Il nostro motore AI è in arrivo: presto potrai generare itinerari personalizzati completi di mappa e suggerimenti locali.</p>
      </section>

      <footer id="contact">
        <p>© {new Date().getFullYear()} ItinerAI — Tutti i diritti riservati.</p>
      </footer>
    </>
  );
}
