/*Find numbers which are divisible by given number*/


function divisibleBy(numbers, divisor){
    let numbersArray = [];
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
                numbersArray.push(numbers[i]);
        }
    }
    return numbersArray;
}



divisibleBy([1,2,3,4,5,6], 2);
divisibleBy([1,2,3,4,5,6], 3);