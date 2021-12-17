
//const sortArray = require('sort-array');

import sortArray from 'sort-array'

export const orderWordArray = (array)=> {
  console.log(array);
  const sortedArray = sortArray(array);
  return sortedArray
}

export const randomReturn = (array) => {
  const word = array[Math.floor(Math.random()*array.length)];
  console.log(word);
   return word;
}
