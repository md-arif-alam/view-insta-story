📸 Instagram Stories Clone (React + Tailwind CSS)

A simplified version of the Instagram Stories feature built with React and Tailwind CSS.
This app focuses on user interface and interaction for mobile screens, displaying a series of stories (images) with manual and auto-navigation.
🌟 Features

✅ Mobile-first design
✅ Horizontal scrollable list of stories (images)
✅ Tap on a story to view it fullscreen
✅ Left/right tap areas for navigation
✅ Auto-advance to the next story every 5 seconds
✅ Smooth image fitting with object-cover
✅ Story data fetched from an external file
📷 Demo

Instagram Stories Clone Demo
(Replace this with your demo gif or screenshot)
🚀 Tech Stack

    React (Vite)

    Tailwind CSS

📦 Getting Started
1️⃣ Clone the repository

git clone https://github.com/your-username/instagram-stories-clone.git
cd instagram-stories-clone

2️⃣ Install dependencies

npm install

3️⃣ Run the development server

npm run dev

Visit http://localhost:5173 in your browser (mobile view recommended).
📂 Project Structure

📦 instagram-stories-clone
├── 📁 src
│   ├── 📁 components
│   │   ├── StoryList.jsx
│   │   └── StoryViewer.jsx
│   ├── 📁 data
│   │   └── stories.js
│   ├── App.jsx
│   └── main.jsx
├── 📄 index.html
├── 📄 tailwind.config.js
└── 📄 README.md

📖 How It Works

    Story List (StoryList.jsx):
    Displays stories in a horizontally scrollable list with clickable thumbnails.

    Story Viewer (StoryViewer.jsx):
    Opens the selected story in fullscreen mode, with:

        Left/right tap zones for navigation.

        Auto-advance every 5 seconds.

        Close button to exit.

    Story Data (data/stories.js):
    Contains an array of story objects with image URLs.

⏳ Time Breakdown
Task	Time Spent
Project setup (React + Tailwind)	~15 minutes
Story List implementation	~25 minutes
Image responsiveness and layout tweaks	~30 minutes
Story Viewer component with navigation	~40 minutes
Auto-advance logic (5 sec)	~15 minutes
Testing & refinements	~20 minutes
Total	~2 hours 25 minutes
🧠 Challenges

The biggest challenge was ensuring that images display correctly across various screen sizes while maintaining aspect ratios and fitting into the designated containers (object-cover helped a lot here). Implementing tap areas for navigation without third-party libraries also required careful layout handling.
📄 License

MIT License
🤝 Contributing

Contributions, issues, and suggestions are welcome!
Feel free to open a Pull Request or Issue.
