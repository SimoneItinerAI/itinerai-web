import { useState, useEffect } from 'react';

const menuSections = [
  {
    title: 'Le migliori esperienze',
    items: [
      { label: 'Escursione in barca', href: '#' },
      { label: 'Tour in quad', href: '#' },
      { label: 'Passeggiata a cavallo', href: '#' },
    ],
  },
  {
    title: 'Guida pratica',
    items: [
      { label: 'Video tutorial', href: '#' },
      { label: 'PDF di istruzioni', href: '#' },
      { label: 'Domande frequenti', href: '#' },
    ],
  },
  {
    title: 'Risorse utili',
    items: [
      { label: 'Supporto clienti', href: '#' },
      { label: 'Blog di viaggio', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  // Abilita dark‑mode di default se l'utente la preferisce
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // blocca lo scroll quando il drawer è aperto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-30 h-14 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold text-primary-600 dark:text-primary-400">
            {/* logo placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L19 21H5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ItinerAI
          </a>

          {/* desktop nav */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-primary-600 dark:hover:text-primary-400">Funzioni</a>
            <a href="#create" className="hover:text-primary-600 dark:hover:text-primary-400">Crea itinerario</a>
          </nav>

          {/* hamburger mobile */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl leading-none hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Apri menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay & Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Chiudi menu"
            >
              ×
            </button>
            <nav className="p-6 space-y-6">
              {menuSections.map(section => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map(item => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block text-sm hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </>
      )}

      {/* Main content, con offset per la navbar */}
      <main className="flex-1 pt-14">
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 sm:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-slate-800 dark:to-slate-900">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Pianifica viaggi su misura
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
            Con ItinerAI crei itinerari personalizzati, ottimizzati per tempo, costi e passioni.
          </p>
          <a
            href="#create"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 py-3 px-6 font-semibold text-white hover:bg-primary-700 focus:outline-none focus-visible:ring focus-visible:ring-primary-600/75"
          >
            Crea il tuo itinerario
          </a>
        </section>

        {/* Feature steps */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { title: 'Scegli', desc: 'Dove e quando partire' },
            { title: 'Personalizza', desc: 'Interessi e budget' },
            { title: 'Goditi', desc: 'Un itinerario pronto da seguire' },
          ].map(f => (
            <div key={f.title} className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Placeholder create section */}
        <section id="create" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Funzionalità in arrivo</h2>
            <p className="text-slate-700 dark:text-slate-300">
              Stiamo integrando il motore AI e la mappa interattiva per offrirti suggerimenti di viaggio su misura.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} ItinerAI. Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}
