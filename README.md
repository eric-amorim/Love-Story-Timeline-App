# 💌 Love Story Timeline App - React

A beautifully crafted, interactive web application designed as a romantic gift. This app mimics the sleek UI of modern streaming platforms (like Spotify) to tell the story of a couple through a customized timeline of memories, photos, and a special soundtrack.

<img width="167" height="358" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Love-Story-Timeline-App/refs/heads/main/screenshots/1.png" /> <img width="167" height="358" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Love-Story-Timeline-App/refs/heads/main/screenshots/2.png" /> <img width="167" height="358" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Love-Story-Timeline-App/refs/heads/main/screenshots/3.png" />

## ✨ Features

* 📱 **Mobile-First Design:** Fully responsive. When opened on a desktop, it elegantly simulates a mobile app interface with a fixed aspect ratio and dark background framing.
* ⏱️ **Live Time Counter:** A real-time tracker showing the exact days, hours, minutes, and seconds since a special starting date.
* 🎵 **Audio Integration:** Global background music with intuitive play/pause controls.
* ▶️ **Smart YouTube Player:** Embedded YouTube video for a special song that automatically pauses the background music when its specific slide is reached.
* ✨ **Smooth Animations:** Seamless page transitions and progress bars powered by Framer Motion.
* 📖 **Interactive Timeline:** Tap/click navigation (left/right invisible touch zones) to progress through milestone slides.

## 🛠️ Technologies Used

* **React** (with Hooks)
* **Vite** (for fast bundling and development)
* **Tailwind CSS** (for styling and mobile simulation)
* **Framer Motion** (for slide animations and transitions)
* **Lucide React** (for modern, scalable icons)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eric-amorim/love-story-timeline-app.git

2. Navigate into the project directory:
   ```bash
   cd love-story-timeline-app

3. Install the dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

### How to Customize

1. Set the Date: Open *src/App.jsx* and change the **START_DATE** constant to your own starting date (format: YYYY-MM-DDTHH:mm:ss).

2. Change the Music: Replace **music.mp3** in the *public/* folder with your own background track.

3. Update the YouTube Video: Change the **ID_YOUTUBE_VIDEO** constant in *src/App.jsx* to the ID of your chosen video. e.g. youtube.com/watch?v=**9HZ_tx8aWuA**.

4. Swap the Photos: Add your own images to the *public/* folder and update the image **src** paths within the slides array in **App.jsx**. 

5. Edit the Text: Modify the titles, paragraphs, and milestone dates directly inside the slides array in *src/App.jsx*.

## 📦 Development Notes

Autoplay Policies: Modern web browsers block automatic audio playback unless the user has interacted first. Navigating through slides ensures that the user's click safely triggers the **music.mp3** background sound.

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.

Developed by [Eric Amorim](https://github.com/eric-amorim)
