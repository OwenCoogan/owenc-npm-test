var slugify = require('slugify');
const sortArray = require('sort-array');
const wordArray = ['zezezezezeeezezezezeze','bebebebebebe','cececececececec','azeaezaez'];


const orderWordArray = (array)=> {
  console.log(array);
  const sortedArray = sortArray(array);
  return sortedArray
}
const SlugifyString = (string)=> {
  return slugify(string)
}

const capitalize = (str) => {
  var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   console.log(splitStr.join(' '));
   return splitStr.join(' ');
}
const randomReturn = (array) => {
  const word = array[Math.floor(Math.random()*array.length)];
  console.log(word);
   return word;
}

// Executions

SlugifyString('qrsdfsdfsdfsdf zerzesdvcxcvxdr.com/zerzer');
orderWordArray(wordArray);
capitalize("zerzerz zerzerzer zerzerzer");
randomReturn(wordArray);
