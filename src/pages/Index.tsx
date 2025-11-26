import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaxiOrderCard from '@/components/TaxiOrderCard';
import ProfileCard from '@/components/ProfileCard';
import PromoCard from '@/components/PromoCard';
import DriverCard from '@/components/DriverCard';
import TripHistory from '@/components/TripHistory';
import Icon from '@/components/ui/icon';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [orderActive, setOrderActive] = useState(false);
  const { toast } = useToast();

  const handleOrderSubmit = (from: string, to: string, tariff: string) => {
    setOrderActive(true);
    toast({
      title: "Ищем водителя...",
      description: `Маршрут: ${from} → ${to}`,
    });

    setTimeout(() => {
      toast({
        title: "Водитель найден!",
        description: "Прибудет через 5 минут",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-md mx-auto p-4 pb-20">
        <div className="mb-6 pt-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TaxiBot
            </h1>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                <Icon name="Bell" size={22} className="text-primary" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                <Icon name="Settings" size={22} className="text-primary" />
              </button>
            </div>
          </div>
          <p className="text-muted-foreground">Быстрый заказ такси в Telegram</p>
        </div>

        <Tabs defaultValue="order" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="order" className="flex items-center gap-2">
              <Icon name="Car" size={18} />
              <span className="hidden sm:inline">Заказ</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Icon name="History" size={18} />
              <span className="hidden sm:inline">История</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="order" className="space-y-4 mt-6">
            <TaxiOrderCard onOrderSubmit={handleOrderSubmit} />
            
            {orderActive && (
              <DriverCard
                name="Иван Петров"
                rating={4.9}
                car="Volkswagen Polo белый"
                carNumber="А123БВ 777"
                arrivalTime="5 мин"
                reviews={342}
              />
            )}

            <PromoCard />
          </TabsContent>

          <TabsContent value="profile" className="space-y-4 mt-6">
            <ProfileCard />
            
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors flex flex-col items-center gap-2">
                <Icon name="Ticket" size={24} className="text-accent" />
                <span className="font-semibold text-sm">Промокоды</span>
              </button>
              <button className="p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors flex flex-col items-center gap-2">
                <Icon name="CreditCard" size={24} className="text-primary" />
                <span className="font-semibold text-sm">Оплата</span>
              </button>
              <button className="p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors flex flex-col items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
                <span className="font-semibold text-sm">Поддержка</span>
              </button>
              <button className="p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors flex flex-col items-center gap-2">
                <Icon name="Share2" size={24} className="text-accent" />
                <span className="font-semibold text-sm">Пригласить</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-accent to-orange-500 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">Реферальная программа</h3>
                  <p className="text-white/90 text-sm">Приглашайте друзей и получайте бонусы</p>
                </div>
                <Icon name="Gift" size={32} className="opacity-80" />
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <code className="flex-1 font-mono text-sm">ANNA_REF_2024</code>
                <button className="px-3 py-1 bg-white text-accent rounded-md font-semibold text-sm hover:bg-white/90 transition-colors">
                  Копировать
                </button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4 mt-6">
            <TripHistory />
          </TabsContent>
        </Tabs>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
