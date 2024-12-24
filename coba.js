'use strict';

function makeCounter() {
  function counter() {
    counter.count = 0;
    console.log('difunction', counter.count);
    return counter.count++;
  }

  console.log('setelah function', counter.count);
  return counter;
}

let myCounter = makeCounter();

console.log(myCounter());
console.log(myCounter());
