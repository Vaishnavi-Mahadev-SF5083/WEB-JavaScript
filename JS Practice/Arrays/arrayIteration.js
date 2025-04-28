// ! forEach(item, index,array)
// calls a function (a callback function) once for each array element.
var numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, arr) => {
  console.log(value);
});


// ! map()
// map() method creates a new array by performing a function on each array element.
// method does not change the original array.
var newArray=numbers.map((value, index, arr) => {
    return value*10
});
console.log(newArray);

// ! flatMap()
var newNumbers=numbers.flatMap((x)=>[x,x*10])
console.log(newNumbers);

// ! filter
// method creates a new array with array elements that pass a test.
var filteredArray=numbers.filter((value,index,arr)=>{
    return value>18
})
console.log(filteredArray);

// ! reduce()
// runs a function on each array element to produce (reduce it to) a single value.
//method does not reduce the original array.
//works from left-to-right in the array
var sum=numbers.reduce((total,value)=>total+value,200)
console.log(sum);

// ! reduceRight
//works from right-to-left in the array
//method does not reduce the original array.
var sum1=numbers.reduceRight((total,value)=>total+value)
console.log(sum1);

// ! every()
//method checks if all array values pass a test. return true or false

var flag=numbers.every((value)=>value>3)
console.log(flag);

// ! some()
// method checks if some array values pass a test.

var flag=numbers.some((value)=>value>40)
console.log(flag);

// ! from()
// method returns an Array object from any object with a length property or any iterable object.
console.log(Array.from("ABCDEFG"));

// ! keys()
// method returns an Array Iterator object with the keys of an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var keys = fruits.keys();
for (var element of keys) {
    console.log(element); 
}

// ! entries()
//method returns an Array Iterator object with key/value pairs:
var entry=(fruits.entries());
for (var element of entry) {
    console.log(element);
    
}

// ! Array with() Method
//It is a safe way to update elements in an array without altering the original array.
const months1 = ["January", "February", "Mar", "April"];
const myMonths1 = months1.with(2, "March");
console.log("Updated Array : "+myMonths1);
 
 
// ! Array Spread (...)
//The ... operator expands an iterable (like an array) into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log("Spreaded Array : "+year);

// ! const
const car = ["Saab", "Volvo", "BMW"];
// car=["Toyota", "Volvo", "Audi"];

//this const keyword make the reference (car) as contant one not the array
//we can change the elements or modify
car[0]="Benz"
console.log(car);
car.push("Audi");
console.log(car);


