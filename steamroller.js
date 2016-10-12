var _ = require('lodash');
var array = require('lodash/array');


function steamrollArray(arr) {  
  return _.flattenDeep(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));