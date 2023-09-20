import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const saveInLocalStorage = data => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    Math.round(data.seconds) + ' seconds'
  );
  localStorage.getItem(LOCAL_STORAGE_KEY);
};

const throttledFunction = throttle(saveInLocalStorage, 1000);

player.on('timeupdate', throttledFunction);

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY)).then(
  (setTime = seconds => {
    seconds = localStorage.getItem(LOCAL_STORAGE_KEY);
  })
);
