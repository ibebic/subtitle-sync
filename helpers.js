'use strict';
const moment = require('moment');
// ajdust the time of each timestamp according to the passed argument
function timeSync(timeStamps, args) {
  let times = {};
  for (let i = 0; i < timeStamps.length; i++) {
    times[i] = moment(timeStamps[i], 'HH:mm:ss,SSS');
    if (args[0] === '-') {
      times[i] = times[i].subtract(args[1], 'milliseconds');
    } else {
      times[i] = times[i].add(args[1], 'milliseconds');
    }
    let hours = trailingZeros(times[i].hours().toString(), 2);
    let minutes = trailingZeros(times[i].minutes().toString(), 2);
    let seconds = trailingZeros(times[i].seconds().toString(), 2);
    let milliseconds = trailingZeros(times[i].milliseconds().toString(), 3);
    timeStamps[i] = (hours + ':' + minutes + ':' + seconds + ',' + milliseconds);
  }
  return timeStamps;
}
function trailingZeros(digits, numb) {
  while (digits.length < numb) digits = '0' + digits;
  return digits;
}
module.exports = {
  timeSync
};
