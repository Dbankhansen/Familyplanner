import React from 'react';
import { Cloud, Sun, Thermometer } from 'lucide-react';

const Weather: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Weather</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sun className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold text-gray-800">24°C</p>
              <p className="text-sm text-gray-600">Mostly Sunny</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-lg font-semibold text-gray-800">65%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { time: 'Now', temp: '24°', icon: <Sun className="w-5 h-5" /> },
            { time: '2PM', temp: '26°', icon: <Cloud className="w-5 h-5" /> },
            { time: '5PM', temp: '22°', icon: <Thermometer className="w-5 h-5" /> },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-2 text-center"
            >
              <p className="text-sm text-gray-600">{item.time}</p>
              <div className="flex justify-center my-1 text-gray-600">
                {item.icon}
              </div>
              <p className="font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;