import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const saveInLocalStorage = data => {
  localStorage.setItem(KEY, Math.round(data.seconds) + " seconds");
  localStorage.getItem(KEY);
};

const throttledFunction = throttle(saveInLocalStorage, 1000);

player.on('timeupdate', throttledFunction);

player.setCurrentTime(localStorage.getItem(KEY)).then(
  (setTime = seconds => {
    seconds = localStorage.getItem(KEY);
  })
);
