document.addEventListener('DOMContentLoaded', () => {
    // --- YouTube Audio Player --- //
    const youtubeContainer = document.getElementById('youtube-audio');
    const youtubePlayer = document.getElementById('youtube-player');
    let playButton = null;

    // YouTube Video ID for "Ordinary" by Alex Warren
    // Let's try a working example first - replace this with the actual video ID
    const videoId = 'hTWKbfoikeg'; // Known working song as example

    // Alternative: Popular birthday song if needed
    // const videoId = 'dQw4w9WgXcQ'; // Another option

    // Alternative approach - using a known audio streaming method
    // You can also use: https://www.youtube.com/watch?v=VIDEO_ID for direct audio

    // For now, using a placeholder that you can replace
    const audioUrl = 'https://www.youtube.com/watch?v=YOUR_ORDINAY_ALEX_WARREN_VIDEO_ID';

    // Create YouTube embed URL with autoplay (audio only)
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&disablekb=1&modestbranding=1&rel=0&loop=1&playlist=${videoId}&start=0`;

    youtubePlayer.src = embedUrl;

    // Show play button if autoplay doesn't work
    setTimeout(() => {
        console.log('Testing with video ID:', videoId);

        // Create a play button as fallback for autoplay restrictions
        const playButton = document.createElement('button');
        playButton.className = 'play-music-btn';
        playButton.innerHTML = '🎵 Play Music';
        playButton.onclick = () => {
            youtubePlayer.src = embedUrl;
            playButton.classList.add('hidden');
            console.log('Manual play activated');
        };
        document.body.appendChild(playButton);

        // Most browsers block autoplay, so show the button immediately
        console.log('Note: Most browsers block autoplay. Click the Play Music button to start audio.');
    }, 1000);

    // Click handler for manual play (if autoplay is blocked)
    document.addEventListener('click', () => {
        if (youtubePlayer && !youtubePlayer.src.includes('autoplay=1')) {
            youtubePlayer.src = embedUrl;
            console.log('Manual audio activation triggered');
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
    setInterval(changeWish, 3000); // Change wish every 3 seconds

    // --- Image Gallery --- //
    const imageGrid = document.querySelector('.image-grid');
    populateGallery();

    // Lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDownload = document.getElementById('lightbox-download');

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
