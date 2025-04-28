//alphabetic sort
const a_fruits = ["Banana", "Orange", "Apple", "mango"];
//to sort in alphabetic order
console.log(a_fruits.sort());
//to reverse
console.log(a_fruits.sort().reverse());
//to sort without changing the orignal array safe way to sort
const sort_fruits = a_fruits.toSorted();
console.log(sort_fruits);

//to reverse the given array
const revsort_fruits = a_fruits.toReversed();
console.log(revsort_fruits);

//numeric sort
//nomal function is suitable for strings
//ascending order
const a_numbers = [40, 100, 2, 1, 5];
a_numbers.sort(function (a, b) {
  return a - b;
});
//if result is negative a is sorted before b
//if result is positive b is sorted before a
//if result 0 no changes
console.log(a_numbers);

//decending order
a_numbers.sort(function (a, b) {
  return b - a;
});
console.log(a_numbers);

//sorting an array in random order
a_numbers.sort(function () {
  return 0.5 - Math.random();
});
console.log(a_numbers);

//find the lowest and highest array value
console.log(
  "minimum Value" + a_numbers[0] + "Maximum Value" + a_numbers[a_numbers.length - 1]
);
console.log(
  "Minimum Value:" +
    Math.min.apply(null, a_numbers) +
    "Maximum Value" +
    Math.max.apply(null, a_numbers)
);

//sorting object array
const a_cars = [
  { type: "Ford", years: 2010 },
  { type: "BMW", years: 2001 },
  { type: "volvo", years: 2000 },
];
a_cars.sort(function (a, b) {
  return a.years - b.years;
});
for (let x in a_cars) {
  console.log(a_cars[x].type + ":" + a_cars[x].years);
}
