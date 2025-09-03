<!DOCTYPE html>
<html lang="it" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ItinerAI – Beta</title>
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/animejs/lib/anime.iife.min.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .hero-gradient {
            background: linear-gradient(135deg, #1e3a8a 0%, #0c4a6e 100%);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col">
    <header class="hero-gradient text-white">
        <div class="container mx-auto px-6 py-16 relative">
            <div class="flex justify-between items-center mb-12">
                <div class="flex items-center">
                    <i data-feather="compass" class="w-8 h-8 mr-2"></i>
                    <span class="text-xl font-bold">ItinerAI</span>
                </div>
                <div class="hidden md:flex space-x-6">
                    <a href="#" class="hover:text-gray-200 transition">Home</a>
                    <a href="#" class="hover:text-gray-200 transition">Features</a>
                    <a href="#" class="hover:text-gray-200 transition">About</a>
                    <a href="#" class="hover:text-gray-200 transition">Contact</a>
                </div>
                <button class="md:hidden">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </div>

            <div class="max-w-3xl mx-auto text-center py-20" data-aos="fade-up">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">Benvenuto nella beta di <span class="text-yellow-300">ItinerAI</span>!</h1>
                <p class="text-xl md:text-2xl mb-10 opacity-90">Rivoluziona il modo in cui pianifichi i tuoi viaggi con l'intelligenza artificiale</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button class="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition transform hover:-translate-y-1">
                        Prova Ora
                    </button>
                    <button class="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition transform hover:-translate-y-1">
                        Scopri di più
                    </button>
                </div>
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    </header>

    <main class="flex-grow">
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Come funziona ItinerAI?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Scopri la potenza dell'IA nella pianificazione dei tuoi viaggi</p>
                </div>

                <div class="grid md:grid-cols-3 gap-10">
                    <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <i data-feather="map" class="w-8 h-8 text-blue-800"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">Destinazione</h3>
                        <p class="text-gray-600">Dicci dove vuoi andare e i tuoi interessi. L'IA analizzerà milioni di dati per suggerirti le migliori opzioni.</p>
                    </div>

                    <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="100">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <i data-feather="calendar" class="w-8 h-8 text-blue-800"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">Pianificazione</h3>
                        <p class="text-gray-600">Ricevi un itinerario personalizzato in pochi secondi, ottimizzato per tempo, budget e preferenze.</p>
                    </div>

                    <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="200">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <i data-feather="navigation" class="w-8 h-8 text-blue-800"></i>
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-800">Esperienza</h3>
                        <p class="text-gray-600">Goditi il viaggio perfetto con suggerimenti in tempo reale e aggiornamenti basati sulle tue esigenze.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Travel planning" class="rounded-xl shadow-xl w-full max-w-lg mx-auto">
                    </div>
                    <div class="md:w-1/2 md:pl-16" data-aos="fade-left">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Perché scegliere ItinerAI?</h2>
                        <p class="text-gray-600 mb-6">La nostra piattaforma beta utilizza algoritmi avanzati di intelligenza artificiale per creare itinerari di viaggio perfettamente personalizzati.</p>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="w-5 h-5 text-green-500 mr-3 mt-1"></i>
                                <span class="text-gray-700">Risparmia ore di ricerca e pianificazione</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="w-5 h-5 text-green-500 mr-3 mt-1"></i>
                                <span class="text-gray-700">Scopri gemme nascoste e località meno conosciute</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="w-5 h-5 text-green-500 mr-3 mt-1"></i>
                                <span class="text-gray-700">Adatta il viaggio alle tue preferenze in tempo reale</span>
                            </li>
                            <li class="flex items-start">
                                <i data-feather="check-circle" class="w-5 h-5 text-green-500 mr-3 mt-1"></i>
                                <span class="text-gray-700">Integrazione con servizi di prenotazione</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-8 md:mb-0">
                    <div class="flex items-center mb-4">
                        <i data-feather="compass" class="w-6 h-6 mr-2 text-orange-500"></i>
                        <span class="text-xl font-bold">ItinerAI</span>
                    </div>
                    <p class="text-gray-400 max-w-xs">Rivoluzioniamo la pianificazione dei viaggi con l'IA.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Navigazione</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Features</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Pricing</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Terms</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contatti</h4>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                                <span class="text-gray-400">info@itinerai.travel</span>
                            </li>
                            <li class="flex items-center">
                                <i data-feather="twitter" class="w-4 h-4 mr-2"></i>
                                <span class="text-gray-400">@ItinerAI</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 ItinerAI. Tutti i diritti riservati.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition"><i data-feather="facebook"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i data-feather="twitter"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i data-feather="instagram"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i data-feather="linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <script>AOS.init();</script>
    <script>const { animate } = anime;</script>
    <script>feather.replace();</script>
    <script>
        // Simple animation for hero section
        document.addEventListener('DOMContentLoaded', function() {
            anime({
                targets: '.hero-gradient h1',
                translateY: [-30, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutExpo'
            });
            
            anime({
                targets: '.hero-gradient p',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 300,
                easing: 'easeOutExpo'
            });
            
            anime({
                targets: '.hero-gradient button',
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(200),
                easing: 'easeOutExpo'
            });
        });
    </script>
</body>
</html>