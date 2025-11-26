import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProfileCardProps {
  name?: string;
  phone?: string;
  rating?: number;
  trips?: number;
}

export default function ProfileCard({ 
  name = 'Анна Смирнова', 
  phone = '+7 (999) 123-45-67',
  rating = 4.9,
  trips = 47
}: ProfileCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white animate-scale-in">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-white">
          <AvatarFallback className="bg-white text-primary text-xl font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-white/80 text-sm">{phone}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Star" size={16} className="fill-yellow-300 text-yellow-300" />
            <span className="text-2xl font-bold">{rating}</span>
          </div>
          <p className="text-white/70 text-xs">Рейтинг</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Car" size={16} />
            <span className="text-2xl font-bold">{trips}</span>
          </div>
          <p className="text-white/70 text-xs">Поездок</p>
        </div>
      </div>
    </Card>
  );
}
