'use strict'

// Step 1
/* Create a function called logPlace that will take two arguments. The first argument should be called 'marker' and 
the second should be called 'thing'.  The reuslt of this function should be a console.log entry that is a string in
the format of '(marker) thing'.

ex: marker = '*',  thing = "potato" the output in the console should be '(*) potato'
*/



function logPlace(marker,thing){

  console.log(`(${marker}) ${thing}`);

}

logPlace('*', 'potato');



// Write a function that takes a string and have it print it twice

function printString(x){
  console.log(x);
  console.log(x);
}

printString('String')

let a1 = [];
console.log(a1);
a1.push("potato")
console.log(a1);
// Write a function that takes and array and a number and puts the number inside the array and returns that.

function arrNum(arr1, number){
  // console.log(arr1);
  
  arr1.push(number);
  return arr1;
  
}

let heaven = arrNum(['word'], 4);

console.log(heaven);


// Step 2
/* Create a method called addItem that will take an array and an item.  The result should be the array with the item added on to the end of it.  

Stretch: If that item is not a string you should instead return. "Item is not valid."

ex: [], "potato" result = ["potato"]
ex: ["potato"], "ice cream" = ["potato", "ice cream"]
ex: [], 2 = "Item is not valid"
*/

let first = [];

function addItem(arrA, item){

  arrA.push(item);

  // return arrA;

}

function removeLastItem(arrB){

  arrB.pop();

  // return arrB;

}



addItem(first, 'string')

console.log(first);


addItem(first, 'potato');
console.log(first);

removeLastItem(first);

console.log(first);


// write a function that is called "createNumArray". It should take an integer and return an array with that number from 1 up until the number that was entered.

function createNumArray(integer){

let array = [];

for(let i = 1; i <= integer; i++){
  
  array.push(i);

}

return array;
}

console.log(createNumArray(5));


// let first = [];
// let second = 'potato';

// function addItem(x,y){
  
//   first.push(y);

// }

// function addItem(x, y){


  if (typeof y === 'string'){
    console.log([x, y]);
  
//   // } else {
//   //   console.log("Item is not valid");
//   // }
  
// console.log(x, y)

// }




// Step 3
/* Create a function called bulkAdd that takes and array, an integer and a string.  The result should be the array with the
string added to the end of the array the number of times of the integer.  You should not use operators to do this. 
ex: ["potato"], 3, "ice" = ["potato", "ice", "ice", "ice"]
*/






// Step 4
/* Create a function called viewList that takes in an array of groceries and lists them in the console in order.

ex: ["potato", "ice", "apple"] = 
"(1) potato"
"(2) ice"
"(3) apple"
*/





//Step 5
/* Create a method that called checkOff that takes an array and an item that is a string.  
It should log the starting list.  
Then remove the item from the list. 
Then it should log "I have bought the item!" 
Then display the remaing list and return the list. 
 */
