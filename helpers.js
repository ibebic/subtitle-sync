'use strict';
const moment = require('moment');
const format = 'HH:mm:ss,SSS';
// ajdust the time of each timestamp according to the passed argument
function timeSync(timeStamp, args) {
  if (args[0] === '-') {
    return moment(timeStamp, format)
      .subtract(args[1], 'milliseconds')
      .format(format);
  }
  return moment(timeStamp, format)
    .add(args[1], 'milliseconds')
    .format(format);
}
module.exports = {
  timeSync
};
