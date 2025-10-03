document.addEventListener('DOMContentLoaded', () => {
    // --- Background Music --- //
    const music = document.getElementById('background-music');
    let playButton = null;
    
    // Try to autoplay music
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Audio is playing automatically');
        }).catch(error => {
            console.log('Autoplay prevented. Showing play button.');
            // Create a play button if autoplay fails
            playButton = document.createElement('button');
            playButton.className = 'play-music-btn';
            playButton.innerHTML = '🎵 Play Music';
            playButton.onclick = () => {
                music.play();
                playButton.classList.add('hidden');
            };
            document.body.appendChild(playButton);
        });
    }
    
    // Also try to play on any user interaction
    document.addEventListener('click', () => {
        if (music.paused) {
            music.play().then(() => {
                if (playButton) {
                    playButton.classList.add('hidden');
                }
            }).catch(err => console.log('Play failed:', err));
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
