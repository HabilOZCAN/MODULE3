/**
 * In this converter you should indicate if give year is Hijri  with 'H' or 'h' 
 * or Gregorian with letters 'G' or 'g' as a second parameter after the year
 * which will be converted. 
 * exp. usage is below
 * node app.js 2021 G // conveted 2021 Gregorian to Hicri 1442
 * node app.js 1442 H // converted 1442 Hijri year to Gregorian 2020
 * results are approximated.
 */


const yearConverter = require('./functions');

const argv = process.argv.slice(2);

console.log(yearConverter(Number(argv[0]), argv[1]));