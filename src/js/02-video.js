import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(settTime, 1000));
function settTime(time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  console.log(time);
}
const setTime = localStorage.getItem('videoplayer-current-time');
const object = JSON.parse(setTime);
player.setCurrentTime(object.seconds);
