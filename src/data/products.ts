import kobraBox from '@/assets/products/kobra-box.jpg';
import phoneStand from '@/assets/products/phone-stand.jpg';
import hpLaptop from '@/assets/products/hp-laptop.jpg';
import iphonePurple from '@/assets/products/iphone-purple.jpg';
import iphoneGreen from '@/assets/products/iphone-green.jpg';
import iphoneBlack from '@/assets/products/iphone-black.jpg';
import iphoneRed from '@/assets/products/iphone-red.jpg';

export interface Product {
  id: number;
  name: { ar: string; fr: string; en: string };
  price: number;
  image: string;
  description: { ar: string; fr: string; en: string };
}

export const products: Product[] = [
  {
    id: 1,
    name: { ar: 'iPhone 12 أحمر', fr: 'iPhone 12 Rouge', en: 'iPhone 12 Red' },
    price: 3500,
    image: iphoneRed,
    description: { ar: 'iPhone 12 - 128GB - حالة ممتازة', fr: 'iPhone 12 - 128GB - Excellent état', en: 'iPhone 12 - 128GB - Excellent condition' },
  },
  {
    id: 2,
    name: { ar: 'iPhone 12 أسود', fr: 'iPhone 12 Noir', en: 'iPhone 12 Black' },
    price: 3500,
    image: iphoneBlack,
    description: { ar: 'iPhone 12 - 128GB - حالة ممتازة', fr: 'iPhone 12 - 128GB - Excellent état', en: 'iPhone 12 - 128GB - Excellent condition' },
  },
  {
    id: 3,
    name: { ar: 'iPhone 12 بنفسجي', fr: 'iPhone 12 Violet', en: 'iPhone 12 Purple' },
    price: 3500,
    image: iphonePurple,
    description: { ar: 'iPhone 12 - 128GB - حالة ممتازة', fr: 'iPhone 12 - 128GB - Excellent état', en: 'iPhone 12 - 128GB - Excellent condition' },
  },
  {
    id: 4,
    name: { ar: 'iPhone 12 أخضر', fr: 'iPhone 12 Vert', en: 'iPhone 12 Green' },
    price: 3500,
    image: iphoneGreen,
    description: { ar: 'iPhone 12 - 128GB - حالة ممتازة', fr: 'iPhone 12 - 128GB - Excellent état', en: 'iPhone 12 - 128GB - Excellent condition' },
  },
  {
    id: 5,
    name: { ar: 'لابتوب HP', fr: 'Laptop HP', en: 'HP Laptop' },
    price: 4500,
    image: hpLaptop,
    description: { ar: 'لابتوب HP عالي الأداء', fr: 'Laptop HP haute performance', en: 'High performance HP laptop' },
  },
  {
    id: 6,
    name: { ar: 'Kobra X Smart', fr: 'Kobra X Smart', en: 'Kobra X Smart' },
    price: 450,
    image: kobraBox,
    description: { ar: 'Android TV Box 4K + 3 اشتراكات IPTV', fr: 'Android TV Box 4K + 3 abonnements IPTV', en: 'Android TV Box 4K + 3 IPTV subscriptions' },
  },
  {
    id: 7,
    name: { ar: 'حامل هاتف 360°', fr: 'Support Téléphone 360°', en: '360° Phone Stand' },
    price: 120,
    image: phoneStand,
    description: { ar: 'حامل للهاتف والتابلت قابل للدوران', fr: 'Support rotatif pour téléphone et tablette', en: 'Rotatable phone and tablet stand' },
  },
  // Placeholder products
  ...Array.from({ length: 13 }, (_, i) => ({
    id: 8 + i,
    name: { ar: `منتج ${8 + i}`, fr: `Produit ${8 + i}`, en: `Product ${8 + i}` },
    price: Math.floor(Math.random() * 3000) + 200,
    image: `https://placehold.co/400x400/1a1a1a/ef4444?text=Product+${8 + i}`,
    description: { 
      ar: 'منتج إلكتروني عالي الجودة', 
      fr: 'Produit électronique de haute qualité', 
      en: 'High quality electronic product' 
    },
  })),
];
