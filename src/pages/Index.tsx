import { useLanguage } from '@/lib/i18n';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Index = () => {
  const { t, language, dir } = useLanguage();
  const featuredProducts = products.slice(0, 8);
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <main>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('products.title')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10">
                {language === 'ar' ? 'عرض جميع المنتجات' : language === 'fr' ? 'Voir tous les produits' : 'View All Products'}
                <Arrow className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: { ar: 'توصيل سريع', fr: 'Livraison rapide', en: 'Fast Delivery' },
                desc: { ar: 'توصيل لجميع مدن المغرب', fr: 'Livraison dans tout le Maroc', en: 'Delivery across Morocco' },
              },
              {
                icon: '✅',
                title: { ar: 'ضمان الجودة', fr: 'Qualité garantie', en: 'Quality Guarantee' },
                desc: { ar: 'منتجات أصلية 100%', fr: 'Produits 100% authentiques', en: '100% authentic products' },
              },
              {
                icon: '🎁',
                title: { ar: 'نقاط الولاء', fr: 'Points fidélité', en: 'Loyalty Points' },
                desc: { ar: 'اجمع النقاط واحصل على هدايا', fr: 'Collectez des points, gagnez des cadeaux', en: 'Collect points, win gifts' },
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-8 glass-card rounded-2xl hover-lift animate-slide-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title[language]}</h3>
                <p className="text-muted-foreground">{feature.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('contact.findUs')}</h2>
            <p className="text-muted-foreground">{t('contact.location')}</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden glow-blue">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5!2d-5.37!3d35.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM0JzEyLjAiTiA1wrAyMicxMi4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/NRGtxLc3oYYS8epi9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary hover:bg-secondary/90">
                {language === 'ar' ? 'افتح في خرائط جوجل' : language === 'fr' ? 'Ouvrir dans Google Maps' : 'Open in Google Maps'}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
