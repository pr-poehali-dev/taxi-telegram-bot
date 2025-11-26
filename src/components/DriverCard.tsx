import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DriverCardProps {
  name: string;
  rating: number;
  car: string;
  carNumber: string;
  arrivalTime: string;
  reviews?: number;
}

export default function DriverCard({
  name,
  rating,
  car,
  carNumber,
  arrivalTime,
  reviews = 234
}: DriverCardProps) {
  return (
    <Card className="p-6 space-y-4 animate-slide-in-right">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-primary text-white font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{rating}</span>
              </div>
              <span className="text-muted-foreground text-xs">({reviews} отзывов)</span>
            </div>
          </div>
        </div>
        
        <Badge className="bg-green-500 text-white px-3 py-1">
          <Icon name="Clock" size={14} className="mr-1" />
          {arrivalTime}
        </Badge>
      </div>

      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Icon name="Car" size={24} className="text-primary" />
          </div>
          <div>
            <div className="font-semibold">{car}</div>
            <div className="text-sm text-muted-foreground">{carNumber}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-3 rounded-lg border-2 border-border hover:border-primary transition-colors flex items-center justify-center gap-2">
          <Icon name="Phone" size={18} />
          <span className="font-semibold">Позвонить</span>
        </button>
        <button className="flex-1 py-3 rounded-lg border-2 border-border hover:border-primary transition-colors flex items-center justify-center gap-2">
          <Icon name="MessageCircle" size={18} />
          <span className="font-semibold">Написать</span>
        </button>
      </div>
    </Card>
  );
}
