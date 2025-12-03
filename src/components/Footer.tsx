import { useLanguage } from '@/lib/i18n';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t, language, dir } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/electro_darraz', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/17M6Yvxu66', label: 'Facebook' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              {dir === 'rtl' ? 'متجر وليد' : 'Electro Walid'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'أفضل الأجهزة الإلكترونية بأسعار منافسة في تطوان'
                : language === 'fr'
                ? 'Les meilleurs appareils électroniques à Tétouan'
                : 'Best electronics at competitive prices in Tetouan'
              }
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('contact.title')}</h4>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/NRGtxLc3oYYS8epi9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-5 w-5 text-primary" />
                {language === 'ar' ? 'تطوان - بوجراح' : 'Tétouan - Boujarah'}
              </a>
              <a 
                href="https://wa.me/212714108999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
              >
                <Phone className="h-5 w-5 text-green-500" />
                +212 714-108999
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="https://vm.tiktok.com/ZSHTffcj1n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Electro Walid. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
