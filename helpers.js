'use strict';
const moment = require('moment');
let times = {};
// ajdust the time of each timestamp according to the passed argument
function timeSync(timeStamps, args) {
  for (let i = 0; i < timeStamps.length; i++) {
    times[i] = moment(timeStamps[i], 'HH:mm:ss,SSS');
    if (args[0] === '-') {
      times[i] = times[i].subtract(args[1], 'milliseconds');
    } else {
      times[i] = times[i].add(args[1], 'milliseconds');
    }
    let hours = times[i].hours().toString();
    while (hours.length < 2) hours = '0' + hours;
    let minutes = times[i].minutes().toString();
    while (minutes.length < 2) minutes = '0' + minutes;
    let seconds = times[i].seconds().toString();
    while (seconds.length < 2) seconds = '0' + seconds;
    let milliseconds = times[i].milliseconds().toString();
    while (milliseconds.length < 3) milliseconds = '0' + milliseconds;
    timeStamps[i] = (hours + ':' + minutes + ':' + seconds + ',' + milliseconds);
  }
  return timeStamps;
}
module.exports = {
  timeSync
};
