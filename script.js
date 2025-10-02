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
    const images = [
        // Add your image paths here
        // e.g., { path: 'images/photo1.jpg' },
    ];

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
        if (images.length === 0) {
            // Add placeholder content if no images are provided
            for (let i = 1; i <= 6; i++) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-item placeholder';
                const placeholderImg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%23667eea' opacity='0.4'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dy='.3em'%3E🎂 Photo ${i}%3C/text%3E%3C/svg%3E`;
                placeholder.innerHTML = `
                    <img src="${placeholderImg}" alt="Placeholder ${i}" style="cursor: pointer;">
                    <a href="${placeholderImg}" download="photo${i}.svg" class="download-btn">⬇ Download</a>
                `;
                
                const img = placeholder.querySelector('img');
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openLightbox(placeholderImg);
                });
                
                imageGrid.appendChild(placeholder);
            }
        } else {
            images.forEach(image => {
                const item = document.createElement('div');
                item.className = 'image-item';

                const img = document.createElement('img');
                img.src = image.path;
                img.alt = 'Birthday Party Image';
                img.loading = 'lazy';
                img.style.cursor = 'pointer';

                // Open lightbox on image click
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openLightbox(image.path);
                });

                const downloadLink = document.createElement('a');
                downloadLink.href = image.path;
                downloadLink.download = image.path.split('/').pop();
                downloadLink.className = 'download-btn';
                downloadLink.textContent = '⬇ Download';
                downloadLink.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent opening lightbox when downloading
                });

                item.appendChild(img);
                item.appendChild(downloadLink);
                imageGrid.appendChild(item);
            });
        }
    }

    populateGallery();
});
