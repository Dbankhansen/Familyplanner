import React, { useState, useEffect } from 'react';

const PhotoFrame: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    'https://images.unsplash.com/photo-1571172964276-91faaa704e1f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=600&fit=crop',
    'https://picsum.photos/800/600?random=1'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Family Moments</h2>
      <div className="relative h-[calc(100%-4rem)] rounded-lg overflow-hidden">
        <img
          src={photos[currentPhotoIndex]}
          alt="Family moment"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <p className="text-white text-sm">Captured memories</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;