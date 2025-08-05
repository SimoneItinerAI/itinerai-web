import { useState } from 'react';

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
      { label: 'Domande frequenti', href: '#' },
    ],
  },
  {
    title: 'Risorse utili',
    children: [
      { label: 'Supporto clienti', href: '#' },
      { label: 'Blog di viaggio', href: '#' },
      { label: 'Newsletter',      href: '#' },
    ],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* overlay scuro */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
        />
      )}

      {/* drawer laterale */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: open ? 0 : '-260px',
          width: '260px',
          height: '100%',
          background: '#fff',
          boxShadow: '2px 0 6px rgba(0,0,0,0.1)',
          transition: 'left 0.3s ease',
          zIndex: 1001,
          padding: '1rem',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Chiudi menu"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        {menuItems.map((section) => (
          <nav key={section.title} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '600', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
              {section.title}
            </h3>
            <ul style={{ display: 'grid', gap: '0.5rem' }}>
              {section.children.map((item) => (
                <li key={item.label}>
                  <a href={item.href} style={{ color: '#0366d6', textDecoration: 'none' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </aside>

      {/* pulsante hamburger, visibile solo se il drawer è chiuso */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Apri menu"
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 1002,
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      )}

      {/* hero section semplificata */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1.5rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Benvenuto nella beta di ItinerAI!
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          Pianifica viaggi personalizzati con intelligenza artificiale.
        </p>
        <a
          href="#create"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#0d6efd',
            color: '#fff',
            borderRadius: '0.375rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Crea il tuo itinerario
        </a>
      </section>

      {/* sezione placeholder "Create" */}
      <section id="create" style={{ padding: '4rem 1.5rem', background: '#f7f9fc' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
          Prossimamente qui potrai creare il tuo itinerario
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          Stiamo integrando il motore AI e la mappa interattiva per offrirti suggerimenti
          personalizzati su misura per le tue date, il tuo budget e i tuoi interessi.
        </p>
      </section>
    </>
  );
}
