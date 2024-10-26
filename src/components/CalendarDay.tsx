import React from 'react';

interface Event {
  member: string;
  event: string;
  color: string;
  icon: string;
}

interface CalendarDayProps {
  day: number;
  monthLabel?: string | null;
  events: Event[];
  isToday: boolean;
  isCurrentMonth: boolean;
  isPastDay: boolean;
  isInCurrentWeek: boolean;
  isFutureMonth: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ 
  day, 
  monthLabel,
  events, 
  isToday, 
  isCurrentMonth,
  isPastDay,
  isInCurrentWeek,
  isFutureMonth
}) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-800',
    pink: 'bg-pink-100 text-pink-800',
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800'
  };

  const getBackgroundStyle = () => {
    if (isToday) return 'border-indigo-400 bg-indigo-50 shadow-md';
    if (isFutureMonth) return 'border-orange-100 bg-orange-50/30';
    if (!isCurrentMonth) return 'border-gray-100 bg-gray-50';
    if (isPastDay && !isInCurrentWeek) return 'border-gray-100 bg-gray-50/50';
    return 'border-gray-200 hover:border-gray-300 bg-white';
  };

  const getTextStyle = () => {
    if (!isCurrentMonth || (isPastDay && !isInCurrentWeek)) return 'text-gray-400';
    if (isFutureMonth) return 'text-orange-600';
    return 'text-gray-700';
  };

  return (
    <div
      className={`h-[100px] p-2 rounded-lg border transition-all ${getBackgroundStyle()}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className={`font-semibold ${getTextStyle()}`}>
          {day}
        </span>
        {monthLabel && (
          <span className="text-xs font-medium text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded">
            {monthLabel}
          </span>
        )}
      </div>
      <div className="space-y-1">
        {events.map((event, index) => (
          <div
            key={index}
            className={`${
              colorMap[event.color]
            } p-1.5 rounded-md text-xs transition-transform hover:scale-105 ${
              isPastDay && !isInCurrentWeek ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-center gap-1">
              <span>{event.icon}</span>
              <span className="font-semibold truncate">{event.member}</span>
            </div>
            <div className="truncate">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;