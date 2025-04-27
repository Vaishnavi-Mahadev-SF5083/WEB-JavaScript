//Arrays comes under the composite dataType
 
//Arrays store objects . and also used to store multiple values
 
//syntax1
 
var car1;
car1=["Mango","Apple","Orange","Guava"];
console.log(car1);
 
//syntax2
 
var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);
 
//syntax3
 
var cars3 = new Array("Audi", "Volvo", "BMW");
console.log(cars3);
 
//Element Access
 
var cars4 = new Array("Saab", "Volvo", "BMW");
var singleCar=cars4[0];
var lastElement=cars4[cars4.length-1];
console.log(singleCar);
console.log(" lastElement : "+lastElement);
 
 
//Print the values with for loop
 
var car5=["Mango","Apple","Orange","Guava"];
 
for(var i=0;i<car5.length;i++){
    console.log(car5[i]);
 
}
 
 
//Array length -- Give the Length of the Array
 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var size = fruits.length;
console.log(size);
 
//ToString() -- convert the array into string
 
var fullstring = fruits.toString();
var joinedArray =fruits.join(" * ");
console.log("FullString : "+fullstring);
console.log("Joined Array with (*) : "+joinedArray);
 
//At(index) -- Give the element present in respective index
var fruit = fruits.at(2);
console.log("element at 2nd Index : "+fruit);
 
//pop()--Remove the last element and Display it
 
console.log("PopedElement : "+fruits.pop()+"\nLength: "+fruits.length);
 
//push() -- Add the element at last index and returns the new Array length
console.log("Push  : "+fruits.push("Kiwi"));
 
//Shifting Elements
 
//shift() -- method removes the first array element
// and "shifts" all other elements to a lower index.
console.log(fruits.shift() +"\nLength: "+fruits.length);
 
//unshift() -- method adds a new element to an array (at the beginning), returns the new array length
console.log(fruits.unshift("Lemon"));
 
//concat()
 
//This method does not change the existing arrays.
//  It always returns a new array.
//The concat() method can take any number of array arguments.
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
 
 
//copyWithin()
 
//copyWithin(position,start index , end index) method copies array elements to another position in an array
//overwrites the existing values,does not add items to the array.does not change the length of the array.
var fruits5 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits5.copyWithin(2, 0, 2));
 
 
//flat()
//flat() method Flattening an array is the process of reducing the dimensionality of an array
//  creates a new array with sub-array elements concatenated to a specified depth.
var myArr = [[1,2],[3,4],[5,6]];
var newArr = myArr.flat();
console.log("Flattened Array: "+newArr);
 
 
//flatMap()
//flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
var myArr1 = [1, 2, 3, 4, 5, 6];
var newArr1 = myArr1.flatMap(x => [x, x*10]);
console.log("Mapped Array: "+newArr1);
 
 
//splice()
//splice() method adds new items to an array
//splice 1 -- used to add new items to an array
//The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added
var fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Removed Elements : "+fruits6.splice(2, 0, "Lemon", "Kiwi"));
console.log("After Splicing Array :  "+fruits6);
 
 
 
 
//splice()
// splice 2 -- method returns an array with the deleted items
var fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Removed Elements : "+fruits7.splice(2, 2, "Lemon", "Kiwi"));
console.log("After Splicing Array :  "+fruits7);
 
 
//splice()
//splice 3
//The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.
var fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Removed Elements : "+fruits8.splice(0, 1));
console.log("After Splicing Array :  "+fruits8);
 
 
 
//toSpliced() -- safe way  to splice an array without altering the original array.
var months = ["Jan", "Feb", "Mar", "Apr"];
var spliced = months.toSpliced(0, 1);
console.log("Spliced Array using toSpliced() Method : "+spliced);
 
 
//slice()
// slice() with one argument - method slices out a piece of an array into a new array and does not remove any element from the source Array
//Slice out a part of an array starting from array element 1 ("Orange")
var fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var slicedArray = fruits9.slice(1);
console.log("Sliced Array:  "+slicedArray);
 
//slice() with two argument - method can take two arguments like slice(1, 3)
//The method then selects elements from the start argument, and up to (but not including) the end argument.
var fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var slicedArray2 = fruits10.slice(1, 3);
console.log("Sliced Array:  "+slicedArray2);