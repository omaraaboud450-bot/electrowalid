import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up stagger-1">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2 ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
            <Link to="/products">
              <Button size="lg" className="glow-red text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <ShoppingBag className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('hero.cta')}
              </Button>
            </Link>
            <a href="https://wa.me/212714108999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10">
                <MessageCircle className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('hero.whatsapp')}
              </Button>
            </a>
          </div>

          {/* Video Section */}
          <div className="mt-16 animate-slide-up stagger-3">
            <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden glow-blue">
              <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1RNPuzABD4f5QTaSKCwzoVzuaoVyQtXsx/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
