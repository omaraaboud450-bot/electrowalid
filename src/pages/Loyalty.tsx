import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Gift, QrCode, Star, Check, Camera, X } from 'lucide-react';
import { Html5Qrcode } from 'html5-qrcode';
import { toast } from 'sonner';

const Loyalty = () => {
  const { t, language, dir } = useLanguage();
  const [points, setPoints] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scannerReady, setScannerReady] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const scannerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedPoints = localStorage.getItem('loyaltyPoints');
    if (savedPoints) {
      setPoints(parseInt(savedPoints));
    }
  }, []);

  const startScanner = async () => {
    try {
      setIsScanning(true);
      
      // Wait for DOM to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const scanner = new Html5Qrcode('qr-reader');
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: 'environment' }, // Back camera
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          // Check if scanned QR matches the loyalty URL
          if (decodedText.includes('electro-walid') || decodedText.includes('lovableproject.com')) {
            // Add points
            const newPoints = points + 20;
            setPoints(newPoints);
            localStorage.setItem('loyaltyPoints', newPoints.toString());
            localStorage.setItem('lastScan', Date.now().toString());
            
            toast.success(
              language === 'ar' 
                ? '🎉 مبروك! حصلت على +20 نقطة' 
                : language === 'fr' 
                ? '🎉 Félicitations! +20 points gagnés'
                : '🎉 Congratulations! +20 points earned'
            );
            
            stopScanner();
          } else {
            toast.error(
              language === 'ar'
                ? 'رمز QR غير صحيح'
                : language === 'fr'
                ? 'Code QR invalide'
                : 'Invalid QR code'
            );
          }
        },
        () => {} // Ignore errors during scanning
      );
      
      setScannerReady(true);
    } catch (err) {
      console.error('Scanner error:', err);
      toast.error(
        language === 'ar'
          ? 'تعذر تشغيل الكاميرا. يرجى السماح بالوصول للكاميرا.'
          : language === 'fr'
          ? 'Impossible de démarrer la caméra. Veuillez autoriser l\'accès.'
          : 'Could not start camera. Please allow camera access.'
      );
      setIsScanning(false);
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current = null;
      } catch (err) {
        console.error('Error stopping scanner:', err);
      }
    }
    setIsScanning(false);
    setScannerReady(false);
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  const steps = [
    {
      icon: QrCode,
      title: t('loyalty.step1'),
      desc: { ar: 'عند كل زيارة للمتجر', fr: 'À chaque visite au magasin', en: 'On each store visit' },
    },
    {
      icon: Star,
      title: t('loyalty.step2'),
      desc: { ar: 'تُضاف لرصيدك تلقائياً', fr: 'Ajoutés automatiquement', en: 'Added automatically' },
    },
    {
      icon: Gift,
      title: t('loyalty.step3'),
      desc: { ar: 'هدايا قيمة ومفاجآت', fr: 'Cadeaux et surprises', en: 'Valuable gifts and surprises' },
    },
  ];

  const rewards = [
    { points: 50, reward: { ar: 'خصم 10%', fr: '10% de réduction', en: '10% discount' } },
    { points: 100, reward: { ar: 'هدية مجانية', fr: 'Cadeau gratuit', en: 'Free gift' } },
    { points: 200, reward: { ar: 'خصم 25%', fr: '25% de réduction', en: '25% discount' } },
  ];

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t('loyalty.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('loyalty.subtitle')}</p>
        </div>

        {/* Points Display */}
        <div className="max-w-md mx-auto mb-16">
          <div className="glass-card rounded-3xl p-8 text-center glow-red animate-pulse-glow">
            <p className="text-muted-foreground mb-2">{t('loyalty.yourPoints')}</p>
            <div className="text-7xl font-bold gradient-text mb-4">{points}</div>
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${Math.min(points, 100)}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {100 - points > 0 
                ? `${100 - points} ${language === 'ar' ? 'نقطة للهدية' : language === 'fr' ? 'points pour le cadeau' : 'points to gift'}`
                : language === 'ar' ? '🎉 مبروك! يمكنك الحصول على هديتك' : language === 'fr' ? '🎉 Félicitations! Réclamez votre cadeau' : '🎉 Congratulations! Claim your gift'
              }
            </p>
          </div>
        </div>

        {/* QR Scanner Section */}
        <div className="max-w-md mx-auto mb-16">
          <div className="glass-card rounded-3xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'امسح للحصول على النقاط' : language === 'fr' ? 'Scannez pour gagner des points' : 'Scan to earn points'}
            </h3>
            
            {!isScanning ? (
              <Button 
                onClick={startScanner}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
              >
                <Camera className="h-5 w-5 mr-2" />
                {language === 'ar' ? 'افتح الكاميرا' : language === 'fr' ? 'Ouvrir la caméra' : 'Open Camera'}
              </Button>
            ) : (
              <div className="space-y-4">
                <div 
                  id="qr-reader" 
                  ref={scannerDivRef}
                  className="w-full rounded-xl overflow-hidden"
                />
                <Button 
                  onClick={stopScanner}
                  variant="outline"
                  size="lg"
                  className="border-destructive text-destructive hover:bg-destructive/10"
                >
                  <X className="h-5 w-5 mr-2" />
                  {language === 'ar' ? 'إغلاق الكاميرا' : language === 'fr' ? 'Fermer la caméra' : 'Close Camera'}
                </Button>
              </div>
            )}
            
            <p className="text-sm text-muted-foreground mt-4">
              {language === 'ar' 
                ? 'وجه الكاميرا نحو رمز QR في المتجر'
                : language === 'fr'
                ? 'Pointez la caméra vers le code QR dans le magasin'
                : 'Point the camera at the QR code in the store'
              }
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('loyalty.howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="text-center glass-card rounded-2xl p-8 hover-lift animate-slide-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'ar' ? 'المكافآت المتاحة' : language === 'fr' ? 'Récompenses disponibles' : 'Available Rewards'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {rewards.map((reward, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 text-center relative overflow-hidden ${
                  points >= reward.points ? 'border-2 border-primary' : ''
                }`}
              >
                {points >= reward.points && (
                  <div className="absolute top-4 right-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div className="text-5xl font-bold gradient-text mb-2">{reward.points}</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'ar' ? 'نقطة' : 'points'}
                </p>
                <p className="font-semibold text-lg">{reward.reward[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t('loyalty.scanNow')}</h3>
            <div className="bg-background p-4 rounded-2xl inline-block mb-6">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://electro-walid--elcwaliide.replit.app')}`}
                alt="QR Code"
                className="w-48 h-48"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              {language === 'ar' 
                ? 'هذا هو رمز QR الخاص بالمتجر - امسحه بالكاميرا أعلاه'
                : language === 'fr'
                ? 'Voici le code QR du magasin - scannez-le avec la caméra ci-dessus'
                : 'This is the store QR code - scan it with the camera above'
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loyalty;
