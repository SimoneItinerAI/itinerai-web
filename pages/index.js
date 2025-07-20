import Sidebar from '@/components/Sidebar'

const menuItems = [
  {
    title: 'Le migliori esperienze degli utenti',
    children: [
      { label: 'Escursione in barca', href: '/esperienze/barca' },
      { label: 'Tour in quad',       href: '/esperienze/quad'  },
      { label: 'Passeggiata a cavallo', href: '/esperienze/cavallo' },
    ],
  },
  {
    title: 'Guida pratica',
    children: [
      { label: 'Video tutorial',    href: '/guida/video' },
      { label: 'PDF di istruzioni', href: '/guida/istruzioni.pdf' },
    ],
  },
]

export default function Home() {
  return (
    <>
      {/* 1) DRAWER MENU */}
      <Sidebar items={menuItems} />

      {/* 2) HEADER ----------------------------------------------------------- */}
      <header
        style={{
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #eee',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>ItinerAI</span>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '.9rem' }}>
          <a href="#how"     style={{ textDecoration: 'none', color: '#333' }}>Come funziona</a>
          <a href="#create"  style={{ textDecoration: 'none', color: '#333' }}>Crea itinerario</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contatti</a>
        </nav>
      </header>

      {/* 3) HERO ------------------------------------------------------------- */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '60vh',
          padding: '0 1rem',
          background:
            'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80) center / cover',
          backgroundColor: '#1a1a1a', // fallback scuro
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', margin: 0, textShadow: '0 2px 8px #0005' }}>
          Benvenuto nella beta di ItinerAI
        </h1>
        <p style={{ fontSize: '1.1rem', marginTop: '.5rem', textShadow: '0 1px 6px #0004' }}>
          Il tuo viaggio pianificato in 30&nbsp;secondi.
        </p>
        <a
          href="#create"
          style={{
            marginTop: '1.5rem',
            background: '#ff7e1b',
            color: '#fff',
            padding: '.8rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 3px 10px #0003',
          }}
        >
          Crea il tuo itinerario
        </a>
      </section>

      {/* 4) HOW IT WORKS ----------------------------------------------------- */}
      <section
        id="how"
        style={{
          maxWidth: '900px',
          margin: '4rem auto',
          padding: '0 1rem',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Come funziona</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: '2rem',
          }}
        >
          {[
            { step: 1, title: 'Scegli la destinazione', text: 'Inserisci la città o la regione.' },
            { step: 2, title: 'Personalizza',        text: 'Seleziona budget, durata e interessi.' },
            { step: 3, title: 'Goditi il viaggio',   text: 'Ricevi itinerario, mappe e prenotazioni.' },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                padding: '1.5rem',
                border: '1px solid #f0f0f0',
                borderRadius: '12px',
                boxShadow: '0 2px 8px #0001',
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ff7e1b',
                  marginBottom: '.5rem',
                }}
              >
                {item.step}
              </div>
              <h3 style={{ margin: '.3rem 0 1rem', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '.9rem', color: '#555' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5) PLACEHOLDER CREA ITINERARIO ----------------------------------------------------- */}
      <section
        id="create"
        style={{
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h2>Crea il tuo itinerario</h2>
        <p>Funzionalità in arrivo…</p>
      </section>

      {/* 6) FOOTER ----------------------------------------------------------- */}
      <footer
        id="contact"
        style={{
          background: '#fafafa',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          fontSize: '.85rem',
          color: '#666',
        }}
      >
        © {new Date().getFullYear()} ItinerAI ·{' '}
        <a href="mailto:info@itinerai.travel">info@itinerai.travel</a>
      </footer>
    </>
  )
}

