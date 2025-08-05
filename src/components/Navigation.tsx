'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import Link from 'next/link';

// Language context
const LanguageContext = createContext({
  language: 'cs',
  setLanguage: (lang: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('cs');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navigation = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageExpanded, setIsLanguageExpanded] = useState(false);

  const getFlagSrc = (lang: string) => {
    if (lang === 'cs') return "/stažený soubor.png";
    if (lang === 'en') return "/Flag_of_the_United_Kingdom.svg.png";
    return "/Flag_of_Germany.svg";
  };

  const getFlagAlt = (lang: string) => {
    if (lang === 'cs') return "Czech Flag";
    if (lang === 'en') return "UK Flag";
    return "German Flag";
  };

  const getLanguageTitle = (lang: string) => {
    if (lang === 'cs') return 'Čeština';
    if (lang === 'en') return 'English';
    return 'Deutsch';
  };

  const getNextLanguage = (currentLang: string) => {
    if (currentLang === 'cs') return 'en';
    if (currentLang === 'en') return 'de';
    return 'cs';
  };

  const getPrevLanguage = (currentLang: string) => {
    if (currentLang === 'cs') return 'de';
    if (currentLang === 'en') return 'cs';
    return 'en';
  };

  const handleLanguageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLanguageExpanded) {
      // Přepni na další jazyk a skryj rozbalení
      setLanguage(getNextLanguage(language));
      setIsLanguageExpanded(false);
    } else {
      // Rozbal možnosti
      setIsLanguageExpanded(true);
    }
  };

  // Zavři rozbalení při kliknutí mimo
  useEffect(() => {
    const handleClickOutside = () => {
      if (isLanguageExpanded) {
        setIsLanguageExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageExpanded]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-green-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo vlevo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/ntih.png" 
                alt="NTiH Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Language Selector vpravo */}
          <div className="hidden md:flex items-center">
            {/* Language Selector - Expandable Flag Bubble */}
            <div className="relative">
              <button
                onClick={handleLanguageClick}
                className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105"
                title={getLanguageTitle(language)}
              >
                <img 
                  src={getFlagSrc(language)}
                  alt={getFlagAlt(language)}
                  className="w-8 h-8 object-cover rounded-full"
                />
              </button>
              
              {/* Rozbalené možnosti */}
              {isLanguageExpanded && (
                <>
                  <button
                    onClick={() => {
                      setLanguage(getNextLanguage(language));
                      setIsLanguageExpanded(false);
                    }}
                    className="absolute top-0 -left-12 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-left"
                    title={getLanguageTitle(getNextLanguage(language))}
                  >
                    <img 
                      src={getFlagSrc(getNextLanguage(language))}
                      alt={getFlagAlt(getNextLanguage(language))}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setLanguage(getPrevLanguage(language));
                      setIsLanguageExpanded(false);
                    }}
                    className="absolute top-0 -left-24 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-left"
                    title={getLanguageTitle(getPrevLanguage(language))}
                  >
                    <img 
                      src={getFlagSrc(getPrevLanguage(language))}
                      alt={getFlagAlt(getPrevLanguage(language))}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg rounded-lg mt-2">
              {/* Mobile Language Selector */}
              <div className="relative px-3 py-2">
                <button
                  onClick={handleLanguageClick}
                  className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105"
                  title={getLanguageTitle(language)}
                >
                  <img 
                    src={getFlagSrc(language)}
                    alt={getFlagAlt(language)}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </button>
                
                {/* Rozbalené možnosti */}
                {isLanguageExpanded && (
                  <>
                    <button
                      onClick={() => {
                        setLanguage(getNextLanguage(language));
                        setIsLanguageExpanded(false);
                      }}
                      className="absolute top-2 left-15 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-left"
                      title={getLanguageTitle(getNextLanguage(language))}
                    >
                      <img 
                        src={getFlagSrc(getNextLanguage(language))}
                        alt={getFlagAlt(getNextLanguage(language))}
                        className="w-8 h-8 object-cover rounded-full"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setLanguage(getPrevLanguage(language));
                        setIsLanguageExpanded(false);
                      }}
                      className="absolute top-2 left-27 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-left"
                      title={getLanguageTitle(getPrevLanguage(language))}
                    >
                      <img 
                        src={getFlagSrc(getPrevLanguage(language))}
                        alt={getFlagAlt(getPrevLanguage(language))}
                        className="w-8 h-8 object-cover rounded-full"
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;