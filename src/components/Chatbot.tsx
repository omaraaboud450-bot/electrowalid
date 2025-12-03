import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle, MapPin, Gift, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const { t, language, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = getGreeting();
      setMessages([{
        id: '1',
        text: greeting,
        isBot: true,
        timestamp: new Date(),
      }]);
    }
  }, [isOpen, language]);

  const getGreeting = () => {
    const greetings = {
      ar: 'مرحبا بيك فـ متجر وليد! 🎉\nكيفاش نقدر نعاونك اليوم؟\n\n• شوف المنتجات ديالنا\n• تواصل معانا على واتساب\n• شوف موقع الحانوت\n• اعرف نظام النقاط',
      fr: 'Bienvenue chez Electro Walid! 🎉\nComment puis-je vous aider?\n\n• Voir nos produits\n• Nous contacter sur WhatsApp\n• Trouver notre magasin\n• Programme de fidélité',
      en: 'Welcome to Electro Walid! 🎉\nHow can I help you today?\n\n• Browse our products\n• Contact us on WhatsApp\n• Find our store location\n• Loyalty points program',
    };
    return greetings[language];
  };

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // WhatsApp/Contact
    if (lowerMessage.includes('واتساب') || lowerMessage.includes('whatsapp') || lowerMessage.includes('contact')) {
      return {
        ar: '📱 تواصل معانا على واتساب:\nhttps://wa.me/212714108999\n\nغادي نردو عليك بسرعة إن شاء الله!',
        fr: '📱 Contactez-nous sur WhatsApp:\nhttps://wa.me/212714108999\n\nNous vous répondrons rapidement!',
        en: '📱 Contact us on WhatsApp:\nhttps://wa.me/212714108999\n\nWe\'ll respond quickly!',
      }[language];
    }

    // Location
    if (lowerMessage.includes('موقع') || lowerMessage.includes('location') || lowerMessage.includes('adresse') || lowerMessage.includes('فين')) {
      return {
        ar: '📍 موقع الحانوت:\nتطوان - بوجراح\n\nشوف الخريطة:\nhttps://maps.app.goo.gl/NRGtxLc3oYYS8epi9\n\nمرحبا بيك!',
        fr: '📍 Notre adresse:\nTétouan - Boujarah\n\nVoir sur la carte:\nhttps://maps.app.goo.gl/NRGtxLc3oYYS8epi9\n\nBienvenue!',
        en: '📍 Our location:\nTetouan - Boujarah\n\nSee on map:\nhttps://maps.app.goo.gl/NRGtxLc3oYYS8epi9\n\nWelcome!',
      }[language];
    }

    // Points/Loyalty
    if (lowerMessage.includes('نقاط') || lowerMessage.includes('points') || lowerMessage.includes('fidélité') || lowerMessage.includes('loyalty')) {
      return {
        ar: '🎁 نظام النقاط:\n\n✅ كل مرة تمسح QR Code = +20 نقطة\n✅ وصلتي 100 نقطة = هدية مجانية!\n\nامسح الكود ديما فاش تجي للحانوت!',
        fr: '🎁 Programme de fidélité:\n\n✅ Chaque scan QR = +20 points\n✅ À 100 points = cadeau gratuit!\n\nScannez le code à chaque visite!',
        en: '🎁 Loyalty Program:\n\n✅ Each QR scan = +20 points\n✅ At 100 points = free gift!\n\nScan the code on every visit!',
      }[language];
    }

    // Products
    if (lowerMessage.includes('منتج') || lowerMessage.includes('product') || lowerMessage.includes('produit') || lowerMessage.includes('شنو عندكم')) {
      return {
        ar: '📦 عندنا بزاف ديال المنتجات:\n\n📱 هواتف iPhone و Samsung\n💻 لابتوبات HP و Dell\n🎧 إكسسوارات متنوعة\n📺 Android TV Box\n\nشوف كاملين فـ قسم المنتجات!',
        fr: '📦 Nos produits:\n\n📱 iPhone & Samsung\n💻 Laptops HP & Dell\n🎧 Accessoires variés\n📺 Android TV Box\n\nVoir tous dans la section produits!',
        en: '📦 Our products:\n\n📱 iPhone & Samsung phones\n💻 HP & Dell laptops\n🎧 Various accessories\n📺 Android TV Box\n\nSee all in products section!',
      }[language];
    }

    // Default response
    return {
      ar: 'شكرا على الرسالة ديالك! 😊\nواش بغيتي:\n• تشوف المنتجات\n• تعرف موقع الحانوت\n• تفهم نظام النقاط\n• تتواصل معانا',
      fr: 'Merci pour votre message! 😊\nVoulez-vous:\n• Voir les produits\n• Notre adresse\n• Programme de fidélité\n• Nous contacter',
      en: 'Thanks for your message! 😊\nWould you like to:\n• Browse products\n• Find our location\n• Learn about loyalty points\n• Contact us',
    }[language];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const quickActions = [
    { icon: MessageCircle, label: { ar: 'واتساب', fr: 'WhatsApp', en: 'WhatsApp' }, action: () => setInput('واتساب') },
    { icon: MapPin, label: { ar: 'الموقع', fr: 'Adresse', en: 'Location' }, action: () => setInput('موقع') },
    { icon: Gift, label: { ar: 'النقاط', fr: 'Points', en: 'Points' }, action: () => setInput('نقاط') },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 w-16 h-16 rounded-full bg-primary glow-red flex items-center justify-center transition-transform hover:scale-110 animate-pulse-glow ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="h-8 w-8 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 w-[90vw] max-w-md animate-slide-up`}>
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-border">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-foreground">{t('chat.title')}</h3>
                  <p className="text-xs text-primary-foreground/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-background/20 transition-colors"
              >
                <X className="h-5 w-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-bl-none'
                        : 'bg-primary text-primary-foreground rounded-br-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-border flex gap-2 overflow-x-auto">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={action.action}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted hover:bg-primary/20 transition-colors text-sm whitespace-nowrap"
                >
                  <action.icon className="h-4 w-4" />
                  {action.label[language]}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-muted border-0"
                />
                <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
