// var slugify = require('slugify');
import slugify from 'slugify'

export const SlugifyString = (string)=> {
  return slugify(string)
}

export const capitalize = (str) => {
  var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   console.log(splitStr.join(' '));
   return splitStr.join(' ');
}
