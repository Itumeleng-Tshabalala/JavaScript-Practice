/* 
*
*
  Find highest value in array
*
*
*/

let arr = [3,1,4,5,2];
function findHighestValue() {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > highest) {
            highest = arr[i];
        }
    }
    console.log(highest);
}
findHighestValue();


/* 
*
*
  Find Lowest value in array
*
*
*/

let arr = [3,1,4,5,2];
function findLowestValue() {
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(lowest > arr[i]) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
}
findLowestValue();

/* 
*
*
  Sort an array
*
*
*/

let arr = [3,1,4,5,2];
function sortArray() {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
sortArray();

/* 
*
*
  Randomize an array
*
*
*/

let arr = [1,2,3,4,5];
function rand(n) {
  return Math.floor(Math.random() * n) + 1;
}
function randomize() {
  for (let i = arr.length - 1; i >= 0; i--) {
    let random = rand(i);
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}
console.log(randomize());