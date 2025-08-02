import { useState } from 'react'

const menuItems = [
  {
    title: 'Le migliori esperienze degli utenti',
    children: [
      { label: 'Escursione in barca', href: '#' },
      { label: 'Tour in quad',       href: '#' },
      { label: 'Passeggiata a cavallo', href: '#' },
    ],
  },
  {
    title: 'Guida pratica',
    children: [
      { label: 'Video tutorial',    href: '#' },
      { label: 'PDF di istruzioni', href: '#' },
    ],
  },
]

function Sidebar({ items }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
          zIndex: 1000,
        }}
      />
      {/* Sidebar a scomparsa */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: open ? 0 : '-260px',
          width: '260px',
          height: '100%',
          background: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
          padding: '2rem 1rem',
          transition: 'left 0.3s',
          zIndex: 1001,
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((section, i) => (
            <li key={i} style={{ marginBottom: '1.5rem' }}>
              <details>
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
                  {section.title}
                </summary>
                <ul style={{ marginTop: '.5rem', paddingLeft: '1rem' }}>
                  {section.children.map((link, j) => (
                    <li key={j} style={{ marginBottom: '.5rem' }}>
                      <a href={link.href} style={{ textDecoration: 'none', color: '#333' }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </nav>
      {/* Bottone hamburger fuori header (ma ora verrà spostato dentro) */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Apri menu"
        // questo style non serve più, lo gestiamo dentro l'header
        style={{ display: 'none' }}
      />
    </>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* ===== HEADER ===== */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #eee',
        fontFamily: 'sans-serif',
        position: 'relative',
        zIndex: 1002, // sopra tutto
      }}>
        {/* Bottone hamburger ora dentro la header */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginRight: '1rem',    // spazio tra linee e logo
            padding: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#333',
            boxShadow: '0 6px 0 #333, 0 12px 0 #333',
          }} />
        </button>

        {/* Logo */}
        <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>ItinerAI</span>

        {/* Navigazione principale */}
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: '1.5rem', fontSize: '.9rem' }}>
          <a href="#how"    style={{ textDecoration: 'none', color: '#333' }}>Come funziona</a>
          <a href="#create" style={{ textDecoration: 'none', color: '#333' }}>Crea itinerario</a>
          <a href="#contact"style={{ textDecoration: 'none', color: '#333' }}>Contatti</a>
        </nav>

        {/* Inserisco qui la Sidebar per il controllo di apertura */}
        {menuOpen && <Sidebar items={menuItems} />}
      </header>

      {/* ===== HERO ===== */}
      <section style={{
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        textAlign:'center', height:'60vh', padding:'0 1rem',
        background:`url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80) center / cover`,
        backgroundColor:'#1a1a1a', color:'#fff'
      }}>
        {/* ... resto della pagina identico */}
        <h1 style={{ fontSize:'2.5rem', margin:0, textShadow:'0 2px 8px #0005' }}>
          Benvenuto nella beta di ItinerAI
        </h1>
        <p style={{ fontSize:'1.1rem', marginTop:'.5rem', textShadow:'0 1px 6px #0004' }}>
          Il tuo viaggio pianificato in 30&nbsp;secondi.
        </p>
        <a href="#create" style={{
          marginTop:'1.5rem', background:'#ff7e1b', color:'#fff',
          padding:'.8rem 1.5rem', borderRadius:'8px', textDecoration:'none',
          fontWeight:600, boxShadow:'0 3px 10px #0003'
        }}>
          Crea il tuo itinerario
        </a>
      </section>

      {/* ===== COME FUNZIONA ===== */}
      <section id="how" style={{
        maxWidth:'900px', margin:'4rem auto', padding:'0 1rem',
        fontFamily:'sans-serif', textAlign:'center'
      }}>
        <h2 style={{ fontSize:'1.8rem', marginBottom:'2rem' }}>Come funziona</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',
          gap:'2rem',
        }}>
          {[ /* ... steps ... */ ].map(item => (
            <div key={item.step} style={{
              padding:'1.5rem', border:'1px solid #f0f0f0',
              borderRadius:'12px', boxShadow:'0 2px 8px #0001',
            }}>
              {/* ... */}
            </div>
          ))}
        </div>
      </section>

      {/* ===== CREA ===== */}
      <section id="create" style={{ padding:'2rem', textAlign:'center', fontFamily:'sans-serif' }}>
        <h2>Crea il tuo itinerario</h2>
        <p>Funzionalità in arrivo…</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" style={{
        background:'#fafafa', padding:'1.5rem 2rem',
        textAlign:'center', fontFamily:'sans-serif',
        fontSize:'.85rem', color:'#666'
      }}>
        © {new Date().getFullYear()} ItinerAI · <a href="mailto:info@itinerai.travel">info@itinerai.travel</a>
      </footer>
    </div>
  )
}