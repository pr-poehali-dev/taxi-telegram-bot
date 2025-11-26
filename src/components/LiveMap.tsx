import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

interface LiveMapProps {
  driverName: string;
  arrivalTime: string;
  carNumber: string;
}

export default function LiveMap({ driverName, arrivalTime, carNumber }: LiveMapProps) {
  const [distance, setDistance] = useState(2.4);
  const [eta, setEta] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => Math.max(0.1, prev - 0.1));
      setEta(prev => Math.max(1, prev - 0.2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden animate-scale-in">
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" 
                 style={{ width: '120px', height: '120px' }} />
            <div className="relative bg-white rounded-full p-4 shadow-lg">
              <Icon name="MapPin" size={40} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 
                        bg-white rounded-full p-3 shadow-lg animate-pulse">
          <Icon name="Car" size={24} className="text-secondary" />
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M 80 60 Q 150 100, 200 160"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge className="bg-white text-foreground shadow-md">
            <Icon name="Navigation" size={14} className="mr-1 text-primary" />
            {distance.toFixed(1)} км
          </Badge>
          <Badge className="bg-green-500 text-white shadow-md">
            <Icon name="Clock" size={14} className="mr-1" />
            {Math.ceil(eta)} мин
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">{driverName}</div>
                <div className="text-xs text-muted-foreground">{carNumber}</div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <Icon name="Phone" size={18} className="text-primary" />
                </button>
                <button className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <Icon name="MessageCircle" size={18} className="text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
              style={{ width: `${100 - (distance / 2.4 * 100)}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            {Math.round(100 - (distance / 2.4 * 100))}%
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span>Водитель едет к вам</span>
          </div>
          <button className="text-primary font-semibold hover:underline">
            Отменить
          </button>
        </div>
      </div>
    </Card>
  );
}
