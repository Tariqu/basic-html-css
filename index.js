// Destructure

const a = {
  firstName: 'Tarique',
  lastName: 'Akhtar',
  age: 26,
  address: { city: 'Bhubaneswar', state: 'Odisha', country: 'India' },
};

function myFunc({ age, address }) {
  console.log(age, address);
}

myFunc(a);

// const { address } = a;

// console.log(address);

// const a = { firstName: 'Tarique', age: 26 };
// //x001
// const b = { ...a };
// //x002

// b.firstName = 'adsfadf';
// b.lastName = 'Nothing';
// b.address = {};
// console.log(a);
// console.log(b);

// phase one 1
// phase two 2

// Clouser
// Event Loop
// hoisting
// reference,
// ... spread operators
// destructure
