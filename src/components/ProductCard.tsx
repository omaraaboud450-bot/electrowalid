import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: { ar: string; fr: string; en: string };
  price: number;
  image: string;
  description: { ar: string; fr: string; en: string };
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { language, t, dir } = useLanguage();

  return (
    <div 
      className={`group glass-card rounded-2xl overflow-hidden hover-lift animate-slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name[language]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg line-clamp-1">{product.name[language]}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description[language]}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-primary">
            {product.price} <span className="text-sm">{t('products.price')}</span>
          </span>
        </div>

        <a 
          href={`https://wa.me/212714108999?text=${encodeURIComponent(`مرحبا، أريد الاستفسار عن: ${product.name.ar}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
            <MessageCircle className="h-4 w-4" />
            {t('products.contact')}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
