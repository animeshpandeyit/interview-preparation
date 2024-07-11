// const arr = [5, 1, 3, 2, 6];

// // // sum , max , min ,

// // // function findSum(arr) {
// // //   let sum = 0;
// // //   for (let i = 0; i < arr.length; i++) {
// // //     // sum = sum + arr[i];
// // //     /* The line `sum += arr[i];` is shorthand for `sum = sum + arr[i];`. It is adding the value of the
// // //     current element in the array to the `sum` variable. This is a more concise way of writing the
// // //     addition operation. */
// // //     sum += arr[i];
// // //   }
// // //   return sum;
// // // }

// // const output = arr.reduce(function (previousValue, currentValue) {
// //   return (previousValue += currentValue);
// // }, 0);

// // console.log(output);

// // // const maxOutput = arr.reduce(function (previousValue, currentValue) {
// // //   if (previousValue > currentValue) {
// // //     previousValue = currentValue;
// // //   }
// // // }, []);

// // // console.log(findSum(arr));

// // // function findMax(arr) {
// // //   let max = arr[0];

// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i] > max) {
// // //       max = arr[i];
// // //     }
// // //   }
// // //   return max;
// // // }

// // // console.log(findMax(arr));

// function findMax(arr) {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// const findMaxx = arr.reduce(function (max, current) {
//   if (current > max) {
//     max = current;
//   }
//   return max;
// }, 0);

// console.log(findMaxx);
// ----------------------------------------------------------------

let users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    occupation: "Software Developer",
    isActive: true,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 25,
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: "456 Oak St, Othertown, USA",
    occupation: "Graphic Designer",
    isActive: false,
  },
  {
    firstname: "Alice",
    lastname: "Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    address: "789 Pine St, Newtown, USA",
    occupation: "Data Analyst",
    isActive: true,
  },
  {
    firstname: "Bob",
    lastname: "Brown",
    age: 35,
    email: "bob.brown@example.com",
    phone: "444-987-6543",
    address: "321 Maple St, Oldtown, USA",
    occupation: "Project Manager",
    isActive: true,
  },
  {
    firstname: "Eve",
    lastname: "Davis",
    age: 32,
    email: "eve.davis@example.com",
    phone: "222-333-4444",
    address: "654 Birch St, Nexttown, USA",
    occupation: "HR Manager",
    isActive: false,
  },
  {
    firstname: "Tom",
    lastname: "Wilson",
    age: 29,
    email: "tom.wilson@example.com",
    phone: "111-222-3333",
    address: "987 Cedar St, Lasttown, USA",
    occupation: "Marketing Specialist",
    isActive: true,
  },
];

console.log(users);

// fullname i.e map

// const output = users.map(
//   (user) =>
//     //   console.log(user.firstname + " " + user.lastname + " ");
//     //   const name = user.firstname + " " + user.lastname;
//     //   return name;

//     user.firstname + " " + user.lastname
// );

// console.log(output);

//  different age and people with same age

/* This code snippet is using the `reduce` method on the `users` array to create an object (`{}`) that
stores the count of users based on their age. Here's a breakdown of how it works: */
const output = users.reduce(function (acc, current) {
  if (acc[current.age]) {
    acc[current.age] = ++acc[current.age];
  } else {
    acc[current.age] = 1;
  }
  return acc;
}, {});

console.log(output);
//  acc = {"25:1", "25:2", "25:3", "25:4"};
