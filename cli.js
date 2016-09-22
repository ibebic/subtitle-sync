#!/usr/bin/env node
'use strict';
const fs = require('fs');
const helpers = require('./helpers.js');
const timeSync = helpers.timeSync;
let args = process.argv.slice(2);
// reading the .srt file and storing it in a variable srt
let srt = fs.readFileSync('./sampleFile.srt', 'utf8', function (err, data) {
  if (err) {
    return console.log('.srt file not found');
  }
  return data;
});
// find all timestamps (hh:mm:ss:msmsmsm) from srt and store them in timeStamps
let timeStamps = srt.match(/\d{2}:\d{2}:\d{2},\d{3}/g);
// ajdust all timestamps
timeStamps = timeSync(timeStamps, args);
// replace all timestamps from srt with it's corresponding ajusted timestamp
let i = 0;
srt = srt.replace(/\d{2}:\d{2}:\d{2},\d{3}/g, function () {
  return timeStamps[i++];
});
// write the modified srt to a new file
fs.writeFile('./convFile.srt', srt, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Modified .srt created!');
});
