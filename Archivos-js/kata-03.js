/*Vowel Count*/


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