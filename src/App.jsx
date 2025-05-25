import React, { useState } from 'react';
import StoryList from './components/StoryList';
import StoryViewer from './components/StoryViewer';
import storiesData from './data/stories';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSelectStory = (id) => {
    const index = storiesData.findIndex((story) => story.id === id);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 < storiesData.length ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : storiesData.length - 1
    );
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold p-4">Instagram Stories</h1>
      <StoryList stories={storiesData} onSelectStory={handleSelectStory} />
      {currentIndex !== null && (
        <StoryViewer
          stories={storiesData}
          currentIndex={currentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
