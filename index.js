//! task 1: 
//! make unique array of objects [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }] 
//! -> [{ a:1, b:2 }, { a:2, c:3 }]

const a =  [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }];
a.pop();
const b = a;
console.log(b);

//! task 2:
//! get through array without any for/while, map, forEach, reduce, etc. functions.
//! You can only use getting element of an array by it's index and getting array's
//! length, self-made functions.

const arr = [0, 1, 2, 3, 4, 5];
const walkArr = function(arr, i = 0) {
  console.log(arr[i]);
  if (i < arr.length - 1) {
    walkArr(arr, i + 1);
  }
}

walkArr(arr);

//! task 3:
//! Find letters in ukranian words that are written the same as English ones.
//! 'Дерево' -> ['e', 'p', 'o']

function findLetters(word) {
  const letters = 'АаВЕеКМНОоРрСсТуХхІі';
  const sameLetters = [];

  for(i = 0; i < word.length; i++) {
    if (letters.includes(word[i]) && !sameLetters.includes(word[i])) {
      sameLetters.push(word[i]);
    }
  }
  console.log(sameLetters);
}

findLetters('дерево');