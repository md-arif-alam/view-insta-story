import React from 'react';

const StoryList = ({ stories, onSelectStory }) => {
  return (
    <div className="flex overflow-x-auto space-x-3 p-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="w-20 h-20 flex-shrink-0 border-2 border-pink-500 rounded-full cursor-pointer overflow-hidden"
          onClick={() => onSelectStory(story.id)}
        >
          <img
            src={story.image}
            alt={`Story ${story.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default StoryList;
