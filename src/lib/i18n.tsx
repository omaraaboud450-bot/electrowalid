import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'fr' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', fr: 'Accueil', en: 'Home' },
  'nav.products': { ar: 'المنتجات', fr: 'Produits', en: 'Products' },
  'nav.loyalty': { ar: 'نقاط الولاء', fr: 'Fidélité', en: 'Loyalty' },
  'nav.contact': { ar: 'اتصل بنا', fr: 'Contact', en: 'Contact' },

  // Hero
  'hero.title': { ar: 'متجر وليد للإلكترونيات', fr: 'Electro Walid', en: 'Electro Walid' },
  'hero.subtitle': { ar: 'أفضل الأجهزة الإلكترونية بأسعار منافسة', fr: 'Les meilleurs appareils électroniques à prix compétitifs', en: 'Best electronics at competitive prices' },
  'hero.cta': { ar: 'تصفح المنتجات', fr: 'Voir les produits', en: 'Browse Products' },
  'hero.whatsapp': { ar: 'تواصل عبر واتساب', fr: 'Contacter via WhatsApp', en: 'Contact on WhatsApp' },

  // Products
  'products.title': { ar: 'منتجاتنا المميزة', fr: 'Nos produits vedettes', en: 'Featured Products' },
  'products.contact': { ar: 'تواصل عبر واتساب', fr: 'Contacter via WhatsApp', en: 'Contact on WhatsApp' },
  'products.price': { ar: 'درهم', fr: 'DH', en: 'MAD' },

  // Chatbot
  'chat.title': { ar: 'مرحبا بيك فـ متجر وليد!', fr: 'Bienvenue chez Walid!', en: 'Welcome to Walid Shop!' },
  'chat.placeholder': { ar: 'اكتب رسالتك هنا...', fr: 'Écrivez votre message...', en: 'Type your message...' },
  'chat.send': { ar: 'إرسال', fr: 'Envoyer', en: 'Send' },
  'chat.greeting': { ar: 'أهلا وسهلا! كيفاش نقدر نعاونك اليوم؟', fr: 'Bonjour! Comment puis-je vous aider?', en: 'Hello! How can I help you today?' },

  // Loyalty
  'loyalty.title': { ar: 'نظام نقاط الولاء', fr: 'Programme de fidélité', en: 'Loyalty Points Program' },
  'loyalty.subtitle': { ar: 'اجمع النقاط واحصل على هدايا مجانية!', fr: 'Collectez des points et obtenez des cadeaux!', en: 'Collect points and get free gifts!' },
  'loyalty.howItWorks': { ar: 'كيف يعمل النظام؟', fr: 'Comment ça marche?', en: 'How does it work?' },
  'loyalty.step1': { ar: 'امسح رمز QR عند كل زيارة', fr: 'Scannez le QR à chaque visite', en: 'Scan QR code on each visit' },
  'loyalty.step2': { ar: 'احصل على +20 نقطة', fr: 'Gagnez +20 points', en: 'Earn +20 points' },
  'loyalty.step3': { ar: 'عند 100 نقطة، احصل على هدية!', fr: 'À 100 points, recevez un cadeau!', en: 'At 100 points, get a free gift!' },
  'loyalty.scanNow': { ar: 'امسح الآن', fr: 'Scanner maintenant', en: 'Scan Now' },
  'loyalty.yourPoints': { ar: 'نقاطك', fr: 'Vos points', en: 'Your Points' },

  // Contact
  'contact.title': { ar: 'تواصل معنا', fr: 'Contactez-nous', en: 'Contact Us' },
  'contact.location': { ar: 'الموقع: تطوان - بوجراح', fr: 'Localisation: Tétouan - Boujarah', en: 'Location: Tetouan - Boujarah' },
  'contact.whatsapp': { ar: 'واتساب', fr: 'WhatsApp', en: 'WhatsApp' },
  'contact.findUs': { ar: 'موقعنا على الخريطة', fr: 'Trouvez-nous', en: 'Find Us' },

  // Footer
  'footer.rights': { ar: 'جميع الحقوق محفوظة', fr: 'Tous droits réservés', en: 'All rights reserved' },
  'footer.followUs': { ar: 'تابعنا', fr: 'Suivez-nous', en: 'Follow Us' },

  // Theme
  'theme.light': { ar: 'فاتح', fr: 'Clair', en: 'Light' },
  'theme.dark': { ar: 'داكن', fr: 'Sombre', en: 'Dark' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ar', 'fr', 'en'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
