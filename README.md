# Birthday Website - TRIBAL 🎂

A stunning birthday website with network particles, rainbow animations, and YouTube audio integration.

## 🎵 Audio Setup

### YouTube Integration
The website is set up to play audio from YouTube. To add your chosen birthday song:

1. **Find your YouTube video** (e.g., "Happy Birthday Song" or any song you want)
2. **Get the video ID** from the URL:
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
3. **Update the JavaScript** in `script.js`:
   ```javascript
   const videoId = 'YOUR_VIDEO_ID_HERE'; // Replace with your chosen video ID
   ```

### Alternative: Local Audio Files
If you prefer to use local audio files:

1. **Add your audio file** to the `music/` folder:
   ```
   music/
   └── birthday-song.mp3
   ```

2. **Update the HTML** in `index.html`:
   ```html
   <audio id="background-music" loop autoplay>
       <source src="music/birthday-song.mp3" type="audio/mpeg">
   </audio>
   ```

3. **Uncomment the audio element** and comment out the YouTube section

## 🎨 Features

- ✨ **Rainbow animated title** with TRIBAL's name
- 🌌 **Network particle background** with floating animations
- 💫 **Glassmorphism design** with backdrop blur effects
- 📱 **Fully responsive** on all devices
- 🎵 **YouTube audio integration** with autoplay support
- 🖼️ **Interactive image gallery** with hover effects

## 🚀 Quick Start

1. **Clone or download** the project files
2. **Open `index.html`** in your browser
3. **Set up audio** using either YouTube or local files (see above)
4. **Customize** colors, text, or images as needed

## 📁 Project Structure

```
birthday-website/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── music/              # Audio files folder (create this)
└── images/             # Image files (add your photos here)
```

## 🌈 Color Scheme

- **Background**: Purple gradient with network particles
- **Text**: Rainbow gradient (coral → teal → sky → mint → gold)
- **Accents**: Glassmorphism with transparency effects

## 📱 Responsive Design

- **Desktop**: Full-width layout with large text
- **Tablet**: Medium-sized elements with 2-column grid
- **Mobile**: Single column with touch-friendly buttons

---

**Happy Birthday TRIBAL!** 🎉🎂
