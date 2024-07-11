// Map
const arr = [123, 134, 4, 234, 2, 2341, 4, 141, 34234];

// double
// triple
// binary

const doubleArr = function (arr) {
  return arr * 2;
};

const calculate = function (arr, logic) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i]));
  }

  return result;
};

// console.log(calculate(arr, doubleArr));

// or

function double(arr) {
  return arr * 2;
}
const res = arr.map(double);

// console.log(res);
//  filterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

// const filterArr = arr.filter((arr_index) => {
//   if (arr_index % 2 === 0) {
//     console.log("even number", arr_index);
//   }
// });
// console.log(filterArr);

//  filter odd numbers

// const filterLogic = function (x) {
//   return x % 2;
// };

// const output = arr.filter(filterLogic);
/* The code `const output = arr.filter((index) => { index > 5; });` is attempting to filter out
elements from the `arr` array that are greater than 5. However, there is a mistake in the arrow
function passed to the `filter` method. */
const output = arr.filter((x) => {
  x > 5;
});
console.log(output);


const arr1 = [3, 6, 8, 2, 7];

// Incorrect filter function
const output1 = arr1.filter((x) => {
  x > 5;
});
console.log(output1); // Output: []

// Correct filter function
const output2 = arr1.filter((x) => x > 5);
console.log(output2); // Output: [6, 8, 7]
