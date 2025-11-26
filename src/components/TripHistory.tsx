import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Trip {
  id: string;
  date: string;
  from: string;
  to: string;
  price: string;
  status: 'completed' | 'cancelled';
  rating?: number;
}

const trips: Trip[] = [
  {
    id: '1',
    date: '24 ноября, 14:30',
    from: 'ул. Ленина, 45',
    to: 'пр. Мира, 120',
    price: '380 ₽',
    status: 'completed',
    rating: 5
  },
  {
    id: '2',
    date: '23 ноября, 09:15',
    from: 'Аэропорт Домодедово',
    to: 'ул. Тверская, 12',
    price: '1250 ₽',
    status: 'completed',
    rating: 5
  },
  {
    id: '3',
    date: '20 ноября, 18:45',
    from: 'ТЦ Мега',
    to: 'ул. Садовая, 78',
    price: '420 ₽',
    status: 'completed',
    rating: 4
  }
];

export default function TripHistory() {
  return (
    <Card className="p-6 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="History" size={20} className="text-primary" />
          <h3 className="font-bold text-lg">История поездок</h3>
        </div>
        <Badge variant="secondary">{trips.length}</Badge>
      </div>

      <div className="space-y-3">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs text-muted-foreground">{trip.date}</div>
              <div className="font-bold text-lg">{trip.price}</div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{trip.from}</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm">{trip.to}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge 
                variant={trip.status === 'completed' ? 'default' : 'secondary'}
                className={trip.status === 'completed' ? 'bg-green-500' : ''}
              >
                {trip.status === 'completed' ? 'Завершена' : 'Отменена'}
              </Badge>
              
              {trip.rating && (
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < trip.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
