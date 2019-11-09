











let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
