export default function Home() {
  return (
    <>
      <head>
        <title>ItinerAI – Beta</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="hero-gradient text-white">
          <div className="container mx-auto px-6 py-16 relative">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center">
                <i data-feather="compass" className="w-8 h-8 mr-2"></i>
                <span className="text-xl font-bold">ItinerAI</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-gray-200 transition">
                  Home
                </a>
                <a href="#" className="hover:text-gray-200 transition">
                  Features
                </a>
                <a href="#" className="hover:text-gray-200 transition">
                  About
                </a>
                <a href="#" className="hover:text-gray-200 transition">
                  Contact
                </a>
              </div>
              <button className="md:hidden">
                <i data-feather="menu" className="w-6 h-6"></i>
              </button>
            </div>

            <div
              className="max-w-3xl mx-auto text-center py-20"
              data-aos="fade-up"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Benvenuto nella beta di{" "}
                <span className="text-yellow-300">ItinerAI</span>!
              </h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90">
                Rivoluziona il modo in cui pianifichi i tuoi viaggi con
                l&apos;intelligenza artificiale
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition transform hover:-translate-y-1">
                  Prova Ora
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition transform hover:-translate-y-1">
                  Scopri di più
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-grow">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Come funziona ItinerAI?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Scopri la potenza dell&apos;IA nella pianificazione dei tuoi
                  viaggi
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                <div
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
                  data-aos="fade-up"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <i data-feather="map" className="w-8 h-8 text-blue-800"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Destinazione
                  </h3>
                  <p className="text-gray-600">
                    Dicci dove vuoi andare e i tuoi interessi. L&apos;IA
                    analizzerà milioni di dati per suggerirti le migliori
                    opzioni.
                  </p>
                </div>

                <div
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <i
                      data-feather="calendar"
                      className="w-8 h-8 text-blue-800"
                    ></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Pianificazione
                  </h3>
                  <p className="text-gray-600">
                    Ricevi un itinerario personalizzato in pochi secondi,
                    ottimizzato per tempo, budget e preferenze.
                  </p>
                </div>

                <div
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <i
                      data-feather="navigation"
                      className="w-8 h-8 text-blue-800"
                    ></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Esperienza
                  </h3>
                  <p className="text-gray-600">
                    Goditi il viaggio perfetto con suggerimenti in tempo reale e
                    aggiornamenti basati sulle tue esigenze.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <i
                    data-feather="compass"
                    className="w-6 h-6 mr-2 text-orange-500"
                  ></i>
                  <span className="text-xl font-bold">ItinerAI</span>
                </div>
                <p className="text-gray-400 max-w-xs">
                  Rivoluzioniamo la pianificazione dei viaggi con l&apos;IA.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Navigazione</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contatti</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i data-feather="mail" className="w-4 h-4 mr-2"></i>
                      <span className="text-gray-400">
                        info@itinerai.travel
                      </span>
                    </li>
                    <li className="flex items-center">
                      <i data-feather="twitter" className="w-4 h-4 mr-2"></i>
                      <span className="text-gray-400">@ItinerAI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2023 ItinerAI. Tutti i diritti riservati.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i data-feather="facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i data-feather="twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i data-feather="instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i data-feather="linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}