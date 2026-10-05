const castDomain = 'https://cdn.jsdelivr.net/gh/appcreator05/post@main/cu12/';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cast-embed').forEach(el => {
        const path = el.getAttribute('data-path');
        if (path && path !== '/placeholder.jpg') {
            el.style.backgroundImage = `url(${castDomain + path})`;
        } else {
            el.style.backgroundImage = `url(${castDomain})`;
        }
    });
});

let playerInstance = null;

function toggleDesc() { 
    const box = document.getElementById('descBox'); 
    const btn = document.getElementById('moreBtn'); 
    if (box.style.webkitLineClamp === 'unset') { 
        box.style.webkitLineClamp = '3'; 
        btn.innerText = 'Show More'; 
    } else { 
        box.style.webkitLineClamp = 'unset'; 
        btn.innerText = 'Show Less'; 
    } 
} 

function activatePlayer(id) { 
    document.getElementById('watchBtn').style.display = 'none'; 
    const wrapper = document.getElementById('player-wrapper'); 
    wrapper.style.display = 'block'; 
    const videoElement = document.getElementById('player');
    videoElement.src = 'https://debasis.installapkapps.workers.dev/?id=' + id;
    
    if (!playerInstance) {
        playerInstance = new Plyr(videoElement, {
            controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'settings', 'fullscreen'],
            settings: ['quality', 'speed']
        });
    } else {
        playerInstance.source = {
            type: 'video',
            sources: [{ src: 'https://debasis.installapkapps.workers.dev/?id=' + id, type: 'video/mp4' }]
        };
    }
    
    playerInstance.on('enterfullscreen', function() { 
        screen.orientation.lock('landscape').catch(() => {}); 
    });
    
    playerInstance.on('exitfullscreen', function() { 
        screen.orientation.unlock(); 
    });
    
    setTimeout(() => { 
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        playerInstance.play(); 
    }, 300); 
}