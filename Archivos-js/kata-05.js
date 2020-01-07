/*Count of positives / sum of negatives*/


function countPositivesSumNegatives(input) {
    let positiveNum = [];
    let negativeNum = [];
    if (input == null || input.length < 1) {
        return [];
    }
   for(i = 0; i < input.length; i++) {
        if(input[i] > 0 ) {
            positiveNum.push(input[i]);
        }
        else {
            negativeNum.push(input[i]);
        }
    }

    let countPositiveNum = positiveNum.length;
    let sumNegativeNum = negativeNum.reduce(function(a,b){
        return a + b },0);
    
    let result = [];
    result.push(countPositiveNum, sumNegativeNum);
    return result;
    }


    /* https://www.codewars.com/kata/576bb71bbbcf0951d5000044 */ 