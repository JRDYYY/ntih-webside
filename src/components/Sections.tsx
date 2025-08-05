'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from './Navigation';
import { translations, Language } from '../lib/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations.hero[language as Language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = {
    cs: [
      {
        id: 1,
        image: "/sep-ct-logo-full2-01.png",
        title: "SEP-CT",
        description: "Společnost, která se zabývá ukládáním tepla a chladu do speciálních kontejnerů. Využívá se to hlavně pro úsporu energie při vytápění nebo chlazení budov.",
        buttonText: "Přejít na",
        link: "https://sep-ct.com/"
      },
      {
        id: 2,
        image: "/ntih.png", 
        title: "NTiH",
        description: "Společnost zaměřená na požární bezpečnost a technologie pro moderní bydlení. Nabízí i poradenství a informace k ochraně domů a staveb.",
        buttonText: "Přejít na",
        link: "https://ntih.cz/"
      },
      {
        id: 3,
        image: "/Snímek obrazovky 2025-08-03 031009-fotor-bg-remover-202508033136.png",
        title: "Blackout Connect",
        description: "Společnost, která vyvíjí mobilní aplikaci na ovládání světel. Hodí se třeba na koncerty nebo akce, kde je potřeba mít osvětlení pod kontrolou bezdrátově.",
        buttonText: "Přejít na",
        link: "https://blackoutconnect.com/"
      }
    ],
    en: [
      {
        id: 1,
        image: "/sep-ct-logo-full2-01.png",
        title: "SEP-CT",
        description: "A company that specializes in storing heat and cold in special containers. This is mainly used for energy savings in heating or cooling buildings.",
        buttonText: "Go to",
        link: "https://sep-ct.com/"
      },
      {
        id: 2,
        image: "/ntih.png",
        title: "NTiH", 
        description: "A company focused on fire safety and technologies for modern housing. Also offers consulting and information for protecting homes and buildings.",
        buttonText: "Go to",
        link: "https://ntih.cz/"
      },
      {
        id: 3,
        image: "/Snímek obrazovky 2025-08-03 031009-fotor-bg-remover-202508033136.png",
        title: "Blackout Connect",
        description: "A company that develops a mobile app for controlling lights. Perfect for concerts or events where wireless lighting control is needed.",
        buttonText: "Go to",
        link: "https://blackoutconnect.com/"
      }
    ],
    de: [
      {
        id: 1,
        image: "/sep-ct-logo-full2-01.png",
        title: "SEP-CT",
        description: "Ein Unternehmen, das sich auf die Speicherung von Wärme und Kälte in speziellen Behältern spezialisiert. Dies wird hauptsächlich für Energieeinsparungen beim Heizen oder Kühlen von Gebäuden verwendet.",
        buttonText: "Gehen zu",
        link: "https://sep-ct.com/"
      },
      {
        id: 2,
        image: "/ntih.png",
        title: "NTiH",
        description: "Ein Unternehmen, das sich auf Brandschutz und Technologien für modernes Wohnen konzentriert. Bietet auch Beratung und Informationen zum Schutz von Häusern und Gebäuden.",
        buttonText: "Gehen zu",
        link: "https://ntih.cz/"
      },
      {
        id: 3,
        image: "/Snímek obrazovky 2025-08-03 031009-fotor-bg-remover-202508033136.png",
        title: "Blackout Connect",
        description: "Ein Unternehmen, das eine mobile App zur Lichtsteuerung entwickelt. Perfekt für Konzerte oder Veranstaltungen, bei denen drahtlose Lichtsteuerung benötigt wird.",
        buttonText: "Gehen zu",
        link: "https://blackoutconnect.com/"
      }
    ]
  };

  // Automatické přepínání slidů každých 10 sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides[language as keyof typeof slides].length);
    }, 10000);

    return () => clearInterval(interval);
  }, [language, slides]);

  const currentSlideData = slides[language as keyof typeof slides][currentSlide];
  
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
      <div className="relative z-10 w-full h-full flex flex-col px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hlavní nadpis */}
        <div className="max-w-6xl mx-auto w-full text-center mb-16 mt-16">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl mb-12">
            NEW TRENDS in HOUSING
          </h1>
        </div>

        {/* Prezentace */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Obrázek vlevo */}
              <div className="flex justify-center">
                <img 
                  src={currentSlideData.image} 
                  alt={currentSlideData.title}
                  className="w-40 h-40 object-contain"
                />
              </div>
              
              {/* Text a tlačítko vpravo */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {currentSlideData.title}
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {currentSlideData.description}
                </p>
                <a 
                  href={currentSlideData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentSlideData.buttonText} →
                </a>
              </div>
            </div>
            
            {/* Indikátory slidů */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides[language as keyof typeof slides].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-500 scale-125 shadow-lg shadow-green-500/50' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Timer progress bar */}
            <div className="mt-4 w-full bg-gray-600/30 rounded-full h-1">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${((currentSlide + 1) / slides[language as keyof typeof slides].length) * 100}%` }}
              />
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
