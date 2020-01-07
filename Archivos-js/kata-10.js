/* Flatten */

let flatten = function (array){
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  }


  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]);
