import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const promos = [
  { code: 'FIRST50', discount: '50%', description: 'Скидка на первую поездку' },
  { code: 'SUMMER2024', discount: '20%', description: 'Летняя скидка' },
];

export default function PromoCard() {
  const [promoCode, setPromoCode] = useState('');
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if (promoCode) {
      setApplied(true);
      setTimeout(() => setApplied(false), 2000);
    }
  };

  return (
    <Card className="p-6 space-y-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <Icon name="Ticket" size={20} className="text-accent" />
        <h3 className="font-bold text-lg">Промокоды</h3>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Введите промокод"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
          className="flex-1"
        />
        <Button 
          onClick={handleApply}
          variant={applied ? "default" : "outline"}
          className={applied ? "bg-green-500 hover:bg-green-600" : ""}
        >
          {applied ? <Icon name="Check" size={20} /> : 'Применить'}
        </Button>
      </div>

      <div className="space-y-2">
        {promos.map((promo) => (
          <div
            key={promo.code}
            className="p-3 rounded-lg border border-dashed border-border bg-muted/30 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
            onClick={() => setPromoCode(promo.code)}
          >
            <div>
              <div className="font-mono font-bold text-sm">{promo.code}</div>
              <div className="text-xs text-muted-foreground">{promo.description}</div>
            </div>
            <Badge variant="secondary" className="bg-accent text-white">
              {promo.discount}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
