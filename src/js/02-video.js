import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player(document.querySelector('#vimeo-player'));
const PLAYER_KEY = "videoplayer-current-time";


player
    .setCurrentTime(JSON.parse(localStorage.getItem(PLAYER_KEY)))
    .then(function (seconds) {

    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
    });

player.on('timeupdate', throttle(
    ({ seconds }) => {
        localStorage.setItem(PLAYER_KEY, JSON.stringify(seconds));
    }, 1000)
);