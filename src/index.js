module.exports = function toReadable (number) {
let toStr = '';
let till19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
                 'eighteen', 'nineteen'];
let decs = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let str = String(number);

let num;
let numDec;
let numHundred;
if (str.length === 1) {
  toStr = till19[number];
} else if (str.length === 2) {
  if (str[0] === '1') {
    toStr = till19[number];
  } else if (str[1] === '0') {
    numDec = Math.floor(number / 10);
    toStr = decs[numDec];
  } else {
    numDec = Math.floor(number / 10);
    num = number % 10;
    toStr = decs[numDec] + ' ' + till19[num];
  }
} else {
  numHundred = Math.floor(number / 100);
  if (str[1] === '0' && str[2] === '0') {
    toStr = till19[numHundred] + ' hundred';

  } else if (str[1] === '1' && str[2] === '0') {
    num = number % 100 / 10;
    toStr = till19[numHundred] + ' hundred ' + decs[num];
  } else if (str[1] === '1' || str[1] === '0') {
    num = number % 100;
    toStr = till19[numHundred] + ' hundred ' + till19[num];
  } else if (str[2] === '0') {
    num = Math.floor((number % 100)) / 10;
    toStr = till19[numHundred] + ' hundred ' + decs[num];
  } else {
    numDec = Math.floor((number % 100) / 10);
    num = (number % 10) % 10;
    toStr = till19[numHundred] + ' hundred ' + decs[numDec] + ' ' + till19[num];
    };
  };
  return toStr;
}
