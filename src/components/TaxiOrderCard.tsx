import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TaxiOrderCardProps {
  onOrderSubmit?: (from: string, to: string, tariff: string) => void;
}

const tariffs = [
  { id: 'economy', name: 'Эконом', price: '250-300', time: '5 мин', icon: 'Car' },
  { id: 'comfort', name: 'Комфорт', price: '350-400', time: '7 мин', icon: 'Sparkles' },
  { id: 'business', name: 'Бизнес', price: '500-600', time: '10 мин', icon: 'Crown' },
];

export default function TaxiOrderCard({ onOrderSubmit }: TaxiOrderCardProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedTariff, setSelectedTariff] = useState('economy');

  const handleSubmit = () => {
    if (from && to) {
      onOrderSubmit?.(from, to, selectedTariff);
    }
  };

  return (
    <Card className="p-6 space-y-6 bg-white shadow-lg animate-fade-in">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
            <Icon name="MapPin" size={20} />
          </div>
          <Input
            placeholder="Откуда"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-accent">
            <Icon name="MapPin" size={20} />
          </div>
          <Input
            placeholder="Куда"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-muted-foreground">Выберите тариф</h3>
        <div className="space-y-2">
          {tariffs.map((tariff) => (
            <button
              key={tariff.id}
              onClick={() => setSelectedTariff(tariff.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                selectedTariff === tariff.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${selectedTariff === tariff.id ? 'text-primary' : 'text-muted-foreground'}`}>
                  <Icon name={tariff.icon as any} size={24} />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{tariff.name}</div>
                  <div className="text-sm text-muted-foreground">{tariff.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{tariff.price} ₽</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!from || !to}
        className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
      >
        <Icon name="Search" size={20} className="mr-2" />
        Найти водителя
      </Button>
    </Card>
  );
}
