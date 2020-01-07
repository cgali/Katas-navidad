/*Sum Mixed Array*/


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