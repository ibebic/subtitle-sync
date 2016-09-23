#!/usr/bin/env node
'use strict';
const fs = require('fs');
const es = require('event-stream');
const helpers = require('./helpers.js');
const timeSync = helpers.timeSync;
let args = process.argv.slice(2);

fs.createReadStream('sampleFile.srt')  // process.stdin
  .pipe(es.split())
  .pipe(es.mapSync(line =>
    line.replace(/\d{2}:\d{2}:\d{2},\d{3}/g, timeStamp => timeSync(timeStamp, args))))
  .pipe(es.join('\n'))
  .on('error', err => console.error(err))
  .on('end', () => console.error('Modified .srt created!'))
  .pipe(fs.createWriteStream('convFile.srt')); // .pipe(process.stdout);
