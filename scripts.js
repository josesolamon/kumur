document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                playButton.style.display = 'none'; // Button hides after the music starts
            }).catch(error => {
                console.error('Müzik otomatik başlatılamadı:', error);
            });
        }
    });
});
