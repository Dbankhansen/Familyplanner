import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import Calendar from './components/Calendar';
import PhotoFrame from './components/PhotoFrame';
import Weather from './components/Weather';
import { getMonthName } from './utils/dateUtils';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-green-50">
      <div className="max-w-[1400px] mx-auto px-8 py-10 min-h-screen">
        <div className="h-full grid grid-cols-4 gap-6">
          {/* Calendar Section - 75% width */}
          <div className="col-span-3 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-8 h-8 text-indigo-600" />
                <h1 className="text-3xl font-bold text-gray-800 font-display">
                  {getMonthName(currentDate)} {currentDate.getFullYear()}
                </h1>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            <Calendar currentDate={currentDate} />
          </div>

          {/* Right Column - 25% width */}
          <div className="col-span-1 flex flex-col gap-6">
            {/* Photo Frame Section */}
            <div className="flex-1">
              <PhotoFrame />
            </div>
            {/* Weather Section */}
            <div className="flex-1">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;