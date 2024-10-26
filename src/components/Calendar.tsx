import React from 'react';
import { getDaysInMonth, getFirstDayOfMonth } from '../utils/dateUtils';
import CalendarDay from './CalendarDay';

interface CalendarProps {
  currentDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate }) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Calculate the current week's start (Monday)
  const currentWeekStart = new Date(today);
  const daysSinceMonday = (today.getDay() + 6) % 7;
  currentWeekStart.setDate(today.getDate() - daysSinceMonday);

  const firstVisibleDay = new Date(currentWeekStart);
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Calculate visible days
  const visibleDays: Array<{ date: Date; events: any[] }> = [];
  let currentDatePointer = new Date(firstVisibleDay);
  
  // Calculate how many weeks to show (always show 6 rows)
  const TOTAL_ROWS = 6;
  const DAYS_IN_WEEK = 7;
  const totalDaysToShow = TOTAL_ROWS * DAYS_IN_WEEK;

  // Fill the calendar with visible days
  for (let i = 0; i < totalDaysToShow; i++) {
    visibleDays.push({
      date: new Date(currentDatePointer),
      events: []
    });
    currentDatePointer.setDate(currentDatePointer.getDate() + 1);
  }

  const events = {
    15: [
      { member: 'Dad', event: 'Team Meeting', color: 'blue', icon: '💼' },
      { member: 'Emma', event: 'Dance Class', color: 'pink', icon: '💃' }
    ],
    27: [
      { member: 'Mom', event: 'Dentist', color: 'purple', icon: '🦷' }
    ],
    25: [
      { member: 'Family', event: 'Movie Night', color: 'green', icon: '🎬' }
    ]
  };

  const isInCurrentWeek = (date: Date) => {
    return date >= currentWeekStart && date <= today;
  };

  const getMonthTransitionLabel = (date: Date) => {
    if (date.getMonth() !== currentDate.getMonth()) {
      return date.toLocaleString('default', { month: 'short' });
    }
    return null;
  };

  return (
    <div className="w-full h-[calc(100%-4rem)]">
      <div className="grid grid-cols-7 gap-4 mb-4">
        {weekDays.map(day => (
          <div
            key={day}
            className="text-center font-semibold text-gray-600 text-sm"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4">
        {visibleDays.map(({ date }, index) => {
          const dayNumber = date.getDate();
          const isCurrentMonth = date.getMonth() === currentDate.getMonth();
          const isToday = date.getDate() === currentDay && 
                         date.getMonth() === currentMonth && 
                         date.getFullYear() === currentYear;
          const monthLabel = getMonthTransitionLabel(date);
          
          return (
            <CalendarDay
              key={`day-${index}`}
              day={dayNumber}
              monthLabel={monthLabel}
              events={isCurrentMonth ? events[dayNumber] || [] : []}
              isToday={isToday}
              isCurrentMonth={isCurrentMonth}
              isPastDay={date < today}
              isInCurrentWeek={isInCurrentWeek(date)}
              isFutureMonth={date.getMonth() > currentDate.getMonth()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;