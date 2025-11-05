// Music toggle button
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🎵 Play Music 🎵';
        isPlaying = false;
    } else {
        bgMusic.play();
        musicBtn.textContent = '🎵 Pause Music 🎵';
        isPlaying = true;
    }
});

// Surprise reveal button with confetti
document.getElementById('surprise-btn').addEventListener('click', function() {
    const reveal = document.getElementById('surprise-reveal');
    reveal.style.display = 'block';
    // Add confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});