import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime || 0);

var throttle = require('lodash.throttle');

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    });
}, 1000));
