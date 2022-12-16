import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") == null ? 0:localStorage.getItem("videoplayer-current-time"));

var throttle = require('lodash.throttle');

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    });
}, 1000));
