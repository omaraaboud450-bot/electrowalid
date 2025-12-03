import kobraBox from '@/assets/products/kobra-box.jpg';
import phoneStand from '@/assets/products/phone-stand.jpg';
import hpLaptop from '@/assets/products/hp-laptop.jpg';
import iphonePurple from '@/assets/products/iphone-purple.jpg';
import iphoneGreen from '@/assets/products/iphone-green.jpg';
import iphoneBlack from '@/assets/products/iphone-black.jpg';
import iphoneRed from '@/assets/products/iphone-red.jpg';
import iphone13Blue from '@/assets/products/iphone-13-blue.jpg';
import ps3 from '@/assets/products/ps3.jpg';
import smartwatchGs520 from '@/assets/products/smartwatch-gs520.jpg';
import dellCharger from '@/assets/products/dell-charger.jpg';
import wirelessEarbuds from '@/assets/products/wireless-earbuds.jpg';
import hpElitebook from '@/assets/products/hp-elitebook.jpg';
import samsungA26 from '@/assets/products/samsung-a26.jpg';
import goldrayReceiver from '@/assets/products/goldray-receiver.jpg';
import gamingKeyboard from '@/assets/products/gaming-keyboard.jpg';

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
    name: { ar: 'iPhone 13 أزرق', fr: 'iPhone 13 Bleu', en: 'iPhone 13 Blue' },
    price: 4200,
    image: iphone13Blue,
    description: { ar: 'iPhone 13 - 128GB - حالة ممتازة', fr: 'iPhone 13 - 128GB - Excellent état', en: 'iPhone 13 - 128GB - Excellent condition' },
  },
  {
    id: 6,
    name: { ar: 'Samsung Galaxy A26 5G', fr: 'Samsung Galaxy A26 5G', en: 'Samsung Galaxy A26 5G' },
    price: 2800,
    image: samsungA26,
    description: { ar: 'هاتف سامسونج الجديد مع شبكة 5G', fr: 'Nouveau Samsung avec réseau 5G', en: 'New Samsung with 5G network' },
  },
  {
    id: 7,
    name: { ar: 'لابتوب HP', fr: 'Laptop HP', en: 'HP Laptop' },
    price: 4500,
    image: hpLaptop,
    description: { ar: 'لابتوب HP عالي الأداء', fr: 'Laptop HP haute performance', en: 'High performance HP laptop' },
  },
  {
    id: 8,
    name: { ar: 'HP EliteBook', fr: 'HP EliteBook', en: 'HP EliteBook' },
    price: 5500,
    image: hpElitebook,
    description: { ar: 'لابتوب HP EliteBook احترافي', fr: 'Laptop HP EliteBook professionnel', en: 'Professional HP EliteBook laptop' },
  },
  {
    id: 9,
    name: { ar: 'PlayStation 3', fr: 'PlayStation 3', en: 'PlayStation 3' },
    price: 1200,
    image: ps3,
    description: { ar: 'PS3 مع يد تحكم - حالة ممتازة', fr: 'PS3 avec manette - Excellent état', en: 'PS3 with controller - Excellent condition' },
  },
  {
    id: 10,
    name: { ar: 'ساعة ذكية GS520', fr: 'Montre Smart GS520', en: 'Smart Watch GS520' },
    price: 350,
    image: smartwatchGs520,
    description: { ar: 'ساعة ذكية Azami Tech GS520', fr: 'Montre connectée Azami Tech GS520', en: 'Azami Tech GS520 Smart Watch' },
  },
  {
    id: 11,
    name: { ar: 'سماعات لاسلكية Air1', fr: 'Écouteurs sans fil Air1', en: 'Wireless Earbuds Air1' },
    price: 180,
    image: wirelessEarbuds,
    description: { ar: 'سماعات Moi لاسلكية ستيريو', fr: 'Écouteurs Moi True Wireless Stereo', en: 'Moi True Wireless Stereo Earbuds' },
  },
  {
    id: 12,
    name: { ar: 'كيبورد جيمينج K510', fr: 'Clavier Gaming K510', en: 'Gaming Keyboard K510' },
    price: 250,
    image: gamingKeyboard,
    description: { ar: 'كيبورد Jedel RGB للألعاب', fr: 'Clavier Jedel RGB Gaming', en: 'Jedel RGB Gaming Keyboard' },
  },
  {
    id: 13,
    name: { ar: 'Kobra X Smart', fr: 'Kobra X Smart', en: 'Kobra X Smart' },
    price: 450,
    image: kobraBox,
    description: { ar: 'Android TV Box 4K + 3 اشتراكات IPTV', fr: 'Android TV Box 4K + 3 abonnements IPTV', en: 'Android TV Box 4K + 3 IPTV subscriptions' },
  },
  {
    id: 14,
    name: { ar: 'GoldRay Mini HD4 Plus', fr: 'GoldRay Mini HD4 Plus', en: 'GoldRay Mini HD4 Plus' },
    price: 300,
    image: goldrayReceiver,
    description: { ar: 'جهاز استقبال رقمي Full HD 1080', fr: 'Récepteur numérique Full HD 1080', en: 'Digital Receiver Full HD 1080' },
  },
  {
    id: 15,
    name: { ar: 'حامل هاتف 360°', fr: 'Support Téléphone 360°', en: '360° Phone Stand' },
    price: 120,
    image: phoneStand,
    description: { ar: 'حامل للهاتف والتابلت قابل للدوران', fr: 'Support rotatif pour téléphone et tablette', en: 'Rotatable phone and tablet stand' },
  },
  {
    id: 16,
    name: { ar: 'شاحن Dell 90W', fr: 'Chargeur Dell 90W', en: 'Dell Charger 90W' },
    price: 200,
    image: dellCharger,
    description: { ar: 'شاحن Dell أصلي 19.5V - 4.62A - 90W', fr: 'Chargeur Dell original 19.5V - 4.62A - 90W', en: 'Original Dell charger 19.5V - 4.62A - 90W' },
  },
  // Placeholder products
  ...Array.from({ length: 4 }, (_, i) => ({
    id: 17 + i,
    name: { ar: `منتج ${17 + i}`, fr: `Produit ${17 + i}`, en: `Product ${17 + i}` },
    price: Math.floor(Math.random() * 3000) + 200,
    image: `https://placehold.co/400x400/1a1a1a/ef4444?text=Product+${17 + i}`,
    description: { 
      ar: 'منتج إلكتروني عالي الجودة', 
      fr: 'Produit électronique de haute qualité', 
      en: 'High quality electronic product' 
    },
  })),
];
