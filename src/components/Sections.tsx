'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from './Navigation';
import { translations, Language } from '../lib/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations.hero[language as Language];
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

const slides = {
  cs: [
    {
      id: 1,
      image: "/sep ct obrazek .png",
      title: "SEP-CT",
      description: "Chytrý energetický bod – Kontejnerové věže jsou revoluční technologií pro hospodaření s energiemi. Jedná se o velkokapacitní akumulační nádrže, které umožňují oddělit výrobu tepelné energie a její spotřebu v čase. Různé zdroje tepla lze libovolně kombinovat, stejně jako spotřebu.",
      buttonText: "Přejít na",
      link: "https://sep-ct.com/"
    },
    {
      id: 2,
      image: "/ntih pozar.jpg",
      title: "NTiH",
      description: "Speciální technologie a produkty v oblasti požárního zabezpečení elektronických zařízení, lithiových baterií, elektromobilů v podzemních garážích. Maximální zabezpečení energetické a informační konektivity v krizových situacích, při blackoutu, při živelných událostech.",
      buttonText: "Přejít na",
      link: "https://ntih.cz/"
    },
    {
      id: 3,
  image: "/ChatGPT Image Aug 18, 2025, 09_40_46 PM.png",
      title: "Blackout Connect",
      description: "Když vše zhasne, Vy zůstanete ve spojení.\nPřenosová satelitní souprava s vlastním internetem, telefonem, napájením a nonstop dohledem - připravená obnovit spojení do 10 minut, i když mobilní síť, pevné linky a elektřina vypadnou.",
      buttonText: "Přejít na",
      link: "https://blackoutconnect.com/"
    }
  ],
  en: [
    {
      id: 1,
      image: "/sep ct obrazek .png",
      title: "SEP-CT",
      description: "Smart Energy Point - Container Towers is a revolutionary technology for energy management. These are large-capacity accumulation tanks that allow separating thermal energy production and consumption over time. Various heat sources can be freely combined, as well as consumption.",
      buttonText: "Go to",
      link: "https://sep-ct.com/"
    },
    {
      id: 2,
      image: "/ntih pozar.jpg",
      title: "NTiH",
      description: "A company focused on fire safety and technologies for modern housing. Also offers consulting and information for protecting homes and buildings.",
      buttonText: "Go to",
      link: "https://ntih.cz/"
    },
    {
      id: 3,
      image: "/ChatGPT Image Aug 18, 2025, 09_40_46 PM.png",
      title: "Blackout Connect",
      description: "A company that develops a mobile app for controlling lights. Perfect for concerts or events where wireless lighting control is needed.",
      buttonText: "Go to",
      link: "https://blackoutconnect.com/"
    }
  ],
  de: [
    {
      id: 1,
      image: "/sep ct obrazek .png",
      title: "SEP-CT",
      description: "Smart Energy Point - Container Türme ist eine revolutionäre Technologie für das Energiemanagement. Es handelt sich um großvolumige Akkumulationstanks, die es ermöglichen, Wärmeenergieerzeugung und -verbrauch zeitlich zu trennen. Verschiedene Wärmequellen können beliebig kombiniert werden, ebenso der Verbrauch.",
      buttonText: "Gehen zu",
      link: "https://sep-ct.com/"
    },
    {
      id: 2,
      image: "/ntih pozar.jpg",
      title: "NTiH",
      description: "Ein Unternehmen, das sich auf Brandschutz und Technologien für modernes Wohnen konzentriert. Bietet auch Beratung und Informationen zum Schutz von Häusern und Gebäuden.",
      buttonText: "Gehen zu",
      link: "https://ntih.cz/"
    },
    {
      id: 3,
      image: "/ChatGPT Image Aug 18, 2025, 09_40_46 PM.png",
      title: "Blackout Connect",
      description: "Ein Unternehmen, das eine mobile App zur Lichtsteuerung entwickelt. Perfekt für Konzerte oder Veranstaltungen, bei denen drahtlose Lichtsteuerung benötigt wird.",
      buttonText: "Gehen zu",
      link: "https://blackoutconnect.com/"
    }
  ]
};

  // Plynulé nekonečné rolování
  useEffect(() => {
    if (isPaused) return;

    const animationSpeed = 15; // rychlost rolování (nižší číslo = rychleji) - zrychleno z 30 na 15
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const slideWidth = 100; // 100% šířka jednoho slidu
        const totalSlides = slides[language as keyof typeof slides].length;
        const maxTranslate = slideWidth * totalSlides;
        
        if (prev >= maxTranslate) {
          return 0; // reset na začátek
        }
        return prev + 0.15; // plynulé posouvání po malých krocích - zrychleno z 0.1 na 0.15
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [language, slides, isPaused]);
  
  return (
    <section id="uvod" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/new-background-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
  <div className="relative z-10 w-full h-full flex flex-col px-4 sm:px-6 lg:px-8 pt-16">
        {/* Hlavní nadpis */}
        <div className="max-w-6xl mx-auto w-full text-center mb-16 mt-16">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl mb-12">
            NEW TRENDS in HOUSING
          </h1>
        </div>

        {/* Prezentace s plynulým nekonečným rolováním */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 shadow-2xl overflow-hidden">
            {/* Nekonečně rolující obsah */}
            <div className="relative">
              <div 
                className="flex"
                style={{ 
                  transform: `translateX(-${translateX}%)`,
                  transition: 'none'
                }}
              >
                {/* Původní slidy */}
                {slides[language as keyof typeof slides].map((slide, index) => (
                  <div key={`original-${slide.id}`} className="w-full flex-shrink-0 relative px-12">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch min-h-[280px]">
                      {/* Obrázek vlevo */}
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className={`object-contain ${
                            ["SEP-CT", "NTiH", "Blackout Connect"].includes(slide.title)
                              ? "w-full h-full max-w-[400px] max-h-[300px]"
                              : "w-40 h-40"
                          }`}
                        />
                      </div>
                      
                      {/* Text a tlačítko vpravo */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                          <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {slide.title}
                          </h2>
                          <p className="text-lg text-gray-200 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                        <div>
                          <a 
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            {slide.buttonText} →
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rozdělovač - bílá čárka napravo */}
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/70 to-transparent"></div>
                  </div>
                ))}
                
                {/* Duplikované slidy pro nekonečný efekt */}
                {slides[language as keyof typeof slides].map((slide, index) => (
                  <div key={`duplicate-${slide.id}`} className="w-full flex-shrink-0 relative px-12">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch min-h-[280px]">
                      {/* Obrázek vlevo */}
                      <div className="flex justify-center items-stretch">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className={`object-contain ${
                            slide.title === "SEP-CT" 
                              ? "w-full h-full max-w-[400px] max-h-[300px]" 
                              : "w-40 h-40"
                          }`}
                        />
                      </div>
                      
                      {/* Text a tlačítko vpravo */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                          <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {slide.title}
                          </h2>
                          <p className="text-lg text-gray-200 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                        <div>
                          <a 
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            {slide.buttonText} →
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rozdělovač - bílá čárka napravo */}
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/70 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tlačítko pozastavit/spustit */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center space-x-3 bg-gray-700/50 hover:bg-gray-600/70 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {isPaused ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Spustit rolování</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                    <span>Pozastavit rolování</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spodní kontaktní lišta */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-t border-gray-600/30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="grid grid-cols-3 items-center gap-4 text-sm text-white">
            {/* Levá strana */}
            <div className="flex flex-col space-y-1">
              <span className="font-semibold">NEW TRENDS in HOUSING</span>
              <span>IČO: 08543135</span>
              <span>info@ntih.com</span>
              <span>601 069 988</span>
            </div>
            
            {/* Logo uprostřed */}
            <div className="flex justify-center">
              <img 
                src="/ntih.png" 
                alt="NTiH Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            {/* Pravá strana */}
            <div className="flex flex-col space-y-1 text-right">
              <span>adm. kanceláře</span>
              <span>Shiran Tower</span>
              <span>SEP-CT</span>
              <span>Lužná 716/2,</span>
              <span>Praha 6, 160 00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations.about[language as Language];
  
  return (
    <section id="o-nas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
            <p className="text-xl text-gray-300">
              {t.text1}
            </p>
            <p className="text-lg text-gray-400 mt-4">
              {t.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations.contact[language as Language];
  
  return (
    <section id="kontakty" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-xl text-gray-300">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Napište nám</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Jméno</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="vas@email.cz"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Zpráva</label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Napište nám svou zprávu..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Kontaktní informace</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Adresa</h4>
                  <p className="text-gray-300">Praha 1, Česká republika</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <p className="text-gray-300">+420 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">info@ntih.cz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
