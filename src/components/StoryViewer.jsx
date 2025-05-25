import React, { useEffect, useRef } from 'react';

const StoryViewer = ({ stories, currentIndex, onNext, onPrev, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);

  if (!stories[currentIndex]) return null;

  return (
    <div className="fixed inset-0 bg-black z-50">
      <img
        src={stories[currentIndex].image}
        alt={`Story ${stories[currentIndex].id}`}
        className="h-full w-full object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full" onClick={onPrev}></div>
        <div className="w-1/2 h-full" onClick={onNext}></div>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">×</button>
    </div>
  );
};

export default StoryViewer;
