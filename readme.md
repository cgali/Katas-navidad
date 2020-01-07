<h1>SOLUCIONES</h1>
<br>
<br>
<br>
<br>

<h2>Kata-01. Numbers to Letters</h2>

~~~
function switcher(x){
    const alphabet={1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
  11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
  21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '}
    
  return x.map(function change(v) {
    return alphabet[v*1]}).join('');
  }


switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
~~~
<br>
<br>
<br>

<h2>Kata-02. Remove First and Last Character</h2>

~~~
function removeChar(str){
    return str = str.slice(1,-1);
    };

removeChar('eloquent');
~~~
<br>
<br>
<br>


<h2>Kata-03. Vowel Count</h2>

~~~
function getCount(str) {
    let vowelsCount = 0;
    let stringToArray = str.split('');
    for (i = 0; i < stringToArray.length; i++) {
      if (stringToArray[i] === 'a' || stringToArray[i] === 'e' || stringToArray[i] === 'i' || stringToArray[i] === 'o' || stringToArray[i] === 'u') {
        vowelsCount = vowelsCount + 1;
      }
    }
    return vowelsCount;
}


getCount("abracadabra");
~~~
<br>
<br>
<br>

<h2>Kata-04. Sum Mixed Array</h2>

~~~
function sumMix(x){
    let integer = []; 
    for (i = 0; i < x.length; i++) {
     integer.push (parseInt (x[i], 10));
    }

    let sumTotal = 0;

    for (i = 0; i < integer.length; i++) {
        sumTotal = sumTotal + integer[i];
    }
    return sumTotal;
}

sumMix([9, 3, '7', '3']);
~~~

<h2>Kata-05. Count of positives / sum of negatives</h2>

~~~
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
~~~

<h2>Kata-06. Get the mean of an array</h2>

~~~
function getAverage(marks){
    let sum = 0;
    for (let i=0; i < marks.length; i++) {
        sum = sum + parseInt(marks[i], 10);
    }
    let average = Math.floor(sum/marks.length);
    return average;
}




getAverage([1,2,3,4,5,])
getAverage([1,1,1,1,1,1,1,2])
~~~

<h2>Kata-07. Find numbers which are divisible by given number</h2>

~~~
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
~~~

<h2>Kata-09. Credit Card Mask</h2>

~~~
function maskify(cc) {
    cc = cc.replace(/\d(?=\d{4})/g, "#");
    return cc;
}



maskify('4556364607935616');
~~~

<h2>Kata-10. Flatten</h2>

~~~
let flatten = function (array){
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  }


flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]);
~~~

  *Tiene errores, no he conseguido que devuelva solo un nivel de array sino que devuelva todo en una sola array.