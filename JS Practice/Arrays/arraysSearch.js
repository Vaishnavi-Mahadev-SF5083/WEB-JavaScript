//  Searching elements in array

// ! IndexOf-- Syntax arr.indexOf(item,start)
//item --> element to be searched
// start>> from which position searching should be start(optional)

//searches an array for an element value and returns its position.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple"));

// ! lastIndexOf(item,start)
console.log(fruits.lastIndexOf("Apple"));

// ! includes
//checks if an element is present in an array
console.log(fruits.includes("Apple"));

// ! find
//returns the value of the first array element that passes a test function.
var numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(myFunction));

function myFunction(value, index, array) {
  return value > 18;
}

// ! findIndex()
// method returns the index of the first array element that passes a test function.
console.log(numbers.findIndex(myFunction));

// ! findLast()
//itwill start from the end of an array and return the value of the first element that satisfies a condition.
console.log(numbers.findLast((x) => x > 12));

// ! findLastIndex()
// finds the index of the last element that satisfies a condition
console.log(numbers.findLastIndex((x) => x > 12));
