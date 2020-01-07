/*Get the mean of an array*/


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