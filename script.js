document.addEventListener('DOMContentLoaded', () => {
    // --- YouTube Audio Player --- //
    const youtubeContainer = document.getElementById('youtube-audio');
    const youtubePlayer = document.getElementById('youtube-player');
    let playButton = null;

    // YouTube Video ID for "Ordinary" by Alex Warren
    // Replace this with the actual video ID when you find the official audio
    const videoId = 'u2ah9tWTkmk'; // Using a working example for now

    // When you find the actual "Ordinary" by Alex Warren video ID, replace above

    // Alternative approach - using a known audio streaming method
    // You can also use: https://www.youtube.com/watch?v=VIDEO_ID for direct audio

    // For now, using a placeholder that you can replace
    const audioUrl = 'https://www.youtube.com/watch?v=u2ah9tWTkmk';

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

    // --- Birthday Countdown Timer --- //
    function startBirthdayCountdown() {
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const statusElement = document.getElementById('countdown-status');

        function updateCountdown() {
            const now = new Date();
            const currentYear = now.getFullYear();

            // Set birthday to today at 12:00 AM (midnight)
            let birthday = new Date(currentYear, now.getMonth(), now.getDate(), 0, 0, 0);

            // If it's already past midnight today, set to tomorrow
            if (now.getTime() > birthday.getTime()) {
                birthday.setDate(birthday.getDate() + 1);
            }

            const timeRemaining = birthday.getTime() - now.getTime();

            if (timeRemaining <= 0) {
                // Birthday has started!
                const elapsed = Math.abs(timeRemaining);
                const elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));
                const elapsedMinutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
                const elapsedSeconds = Math.floor((elapsed % (1000 * 60)) / 1000);

                hoursElement.textContent = elapsedHours.toString().padStart(2, '0');
                minutesElement.textContent = elapsedMinutes.toString().padStart(2, '0');
                secondsElement.textContent = elapsedSeconds.toString().padStart(2, '0');
                statusElement.textContent = '🎉 Birthday Celebration in Progress! 🎉';
                statusElement.style.color = '#ff6b6b';

                // Stop the countdown after 24 hours
                if (elapsedHours >= 24) {
                    statusElement.textContent = '🎂 Birthday Celebration Complete! 🎂';
                    clearInterval(countdownInterval);
                }
            } else {
                // Countdown to birthday
                const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');
                statusElement.textContent = '⏰ Counting down to birthday celebration...';
                statusElement.style.color = '#4ecdc4';
            }
        }

        // Update immediately
        updateCountdown();

        // Update every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        console.log('Birthday countdown started!');
    }

    // Start the countdown
    startBirthdayCountdown();

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
