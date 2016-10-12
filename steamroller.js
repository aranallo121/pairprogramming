var _ = require('lodash');
var array = require('lodash/array');


function steamrollArray(arr) {  
  return _.flattenDeep(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


function pairwise(arr, arg) {
   var num = 0;
   var newArr = arr.slice();
   for (i = 0; i < newArr.length; i++) {
       for (j = i + 1; j < newArr.length; j++) {
           if (newArr[i] + newArr[j] === arg) {
               num += i + j;
               newArr[i] = NaN;
               newArr[j] = NaN;
           }
       }
   }
   console.log(num);
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([7, 9, 11, 13, 15], 20)