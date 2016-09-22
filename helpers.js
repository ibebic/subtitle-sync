'use strict';
// ajdust the time of each timestamp according to the passed argument
function timeSync(timeStamps, args) {
  for (let i = 0; i < timeStamps.length; i++) {
    // convert hh:mm:ss:msmsmsm format to milliseconds
    let hours = timeStamps[i].substring(0, 2) * 3600000;
    let minutes = timeStamps[i].substring(3, 5) * 60000;
    let seconds = timeStamps[i].substring(6, 8) * 1000;
    let milliseconds = parseInt(timeStamps[i].substring(9, 12), 10);
    let total = hours + minutes + seconds + milliseconds;
    // check if the time needs to be added or subtracted
    if (args[0] === '-') {
      total -= parseInt(args[1], 10);
    } else {
      total += parseInt(args[1], 10);
    }
    // extract hours from total time and convert to String
    hours = Math.floor(total / 3600000).toString();
    //  add zeros if neccessarry so the format matches the one from source
    while (hours.length < 2) {
      hours = '0' + hours;
    }
    // get modulus of 3600000 from total so the hours are extracted
    total %= 3600000;
    // extract minutes from total time and convert to String
    minutes = Math.floor(total / 60000).toString();
    while (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    total %= 60000;
    // extract seconds from total time and convert to String
    seconds = Math.floor(total / 1000).toString();
    while (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    // extract milliseconds from total time and convert to String
    milliseconds = (total % 1000).toString();
    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }
    // add everything to timeStamps[i] and make sure the format matches the source
    timeStamps[i] = (hours + ':' + minutes + ':' + seconds + ',' + milliseconds);
  }
  return timeStamps;
}
module.exports = {
  timeSync
};
