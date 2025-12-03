import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Clock } from 'lucide-react';

const Contact = () => {
  const { t, language, dir } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: { ar: 'العنوان', fr: 'Adresse', en: 'Address' },
      value: { ar: 'تطوان - بوجراح', fr: 'Tétouan - Boujarah', en: 'Tetouan - Boujarah' },
      link: 'https://maps.app.goo.gl/NRGtxLc3oYYS8epi9',
      color: 'text-secondary',
    },
    {
      icon: Phone,
      title: { ar: 'الهاتف', fr: 'Téléphone', en: 'Phone' },
      value: { ar: '+212 714-108999', fr: '+212 714-108999', en: '+212 714-108999' },
      link: 'tel:+212714108999',
      color: 'text-green-500',
    },
    {
      icon: MessageCircle,
      title: { ar: 'واتساب', fr: 'WhatsApp', en: 'WhatsApp' },
      value: { ar: 'تواصل معنا مباشرة', fr: 'Contactez-nous directement', en: 'Contact us directly' },
      link: 'https://wa.me/212714108999',
      color: 'text-green-500',
    },
    {
      icon: Clock,
      title: { ar: 'ساعات العمل', fr: 'Horaires', en: 'Working Hours' },
      value: { ar: '9:00 - 21:00 كل يوم', fr: '9h00 - 21h00 tous les jours', en: '9:00 AM - 9:00 PM daily' },
      link: null,
      color: 'text-primary',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/electro_darraz', label: 'Instagram', color: 'from-purple-500 to-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/share/17M6Yvxu66', label: 'Facebook', color: 'from-blue-600 to-blue-400' },
  ];

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title[language]}</p>
                      <p className="font-semibold text-lg">{info.value[language]}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title[language]}</p>
                      <p className="font-semibold text-lg">{info.value[language]}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">{t('footer.followUs')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-4 rounded-xl bg-gradient-to-r ${social.color} text-center font-semibold text-white hover:opacity-90 transition-opacity`}
                  >
                    <social.icon className="h-6 w-6 mx-auto mb-1" />
                    {social.label}
                  </a>
                ))}
                <a
                  href="https://vm.tiktok.com/ZSHTffcj1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-center font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 mx-auto mb-1 fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212714108999"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 gap-3">
                <MessageCircle className="h-6 w-6" />
                {t('hero.whatsapp')}
              </Button>
            </a>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl overflow-hidden glow-blue">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5!2d-5.37!3d35.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM0JzEyLjAiTiA1wrAyMicxMi4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/NRGtxLc3oYYS8epi9"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full py-6 text-lg border-secondary text-secondary hover:bg-secondary/10 gap-2">
                <MapPin className="h-5 w-5" />
                {t('contact.findUs')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
