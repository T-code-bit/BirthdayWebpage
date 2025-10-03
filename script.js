document.addEventListener('DOMContentLoaded', () => {
    // --- YouTube Audio Player --- //
    const youtubeContainer = document.getElementById('youtube-audio');
    const youtubePlayer = document.getElementById('youtube-player');
    let playButton = null;

    // YouTube Video ID - Replace with your chosen song's video ID
    const videoId = 'dQw4w9WgXcQ'; // Default Rick Roll as placeholder

    // Create YouTube embed URL with autoplay
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&disablekb=1&modestbranding=1&rel=0&start=0&end=180&loop=1&playlist=${videoId}`;

    youtubePlayer.src = embedUrl;

    // Show play button if autoplay doesn't work
    setTimeout(() => {
        if (youtubePlayer && youtubePlayer.contentWindow) {
            console.log('YouTube audio loaded successfully');
        } else {
            console.log('YouTube autoplay may be blocked. Click to enable audio.');
            // Create a play button as fallback
            playButton = document.createElement('button');
            playButton.className = 'play-music-btn';
            playButton.innerHTML = '🎵 Enable Audio';
            playButton.onclick = () => {
                youtubePlayer.src = embedUrl;
                playButton.classList.add('hidden');
            };
            document.body.appendChild(playButton);
        }
    }, 2000);

    // Click handler for manual play
    document.addEventListener('click', () => {
        if (youtubePlayer && !youtubePlayer.src.includes('autoplay=1')) {
            youtubePlayer.src = embedUrl;
            if (playButton) {
                playButton.classList.add('hidden');
            }
        }
    }, { once: true });

    // --- Birthday Wishes --- //
    const wishes = [
        "Wishing you a day filled with happiness and a year filled with joy.",
        "Hope your special day brings you all that your heart desires!",
        "Happy birthday! May your day be as special as you are.",
        "Sending you smiles for every moment of your special day.",
        "Another adventure-filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor.",
        "May all your dreams and wishes come true!"
    ];

    const wishElement = document.querySelector('.wish-text');
    let wishIndex = 0;

    function changeWish() {
        wishElement.classList.remove('fade-in');
        setTimeout(() => {
            wishIndex = (wishIndex + 1) % wishes.length;
            wishElement.textContent = wishes[wishIndex];
            wishElement.classList.add('fade-in');
        }, 500); // Wait for fade-out transition to complete
    }

    // Initial wish
    wishElement.textContent = wishes[wishIndex];
    wishElement.classList.add('fade-in');

    setInterval(changeWish, 3000); // Change wish every 3 seconds

    // --- Image Gallery --- //
    const imageGrid = document.querySelector('.image-grid');
    // Gallery images are already in HTML - no need for JavaScript array

    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDownload = document.getElementById('lightbox-download');
    const lightboxClose = document.querySelector('.lightbox-close');

    function openLightbox(imageSrc) {
        lightbox.classList.add('active');
        lightboxImg.src = imageSrc;
        lightboxDownload.href = imageSrc;
        lightboxDownload.download = imageSrc.split('/').pop();
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Close lightbox on click outside image or on close button
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            closeLightbox();
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function populateGallery() {
        // Gallery is already populated in HTML - no need to add placeholders
        // If you want to use JavaScript for dynamic image loading, add image paths to the images array above
        console.log('Gallery already populated in HTML');
    }

    populateGallery();
});
