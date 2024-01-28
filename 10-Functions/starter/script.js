'use strict';

const flight = 'LL12321';

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // Recall that functions have default properties too, e.g.: name here
};

transformer('Javascript is the best!', upperFirstWord);

// Function returning funciton
const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hey')('james');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){} - This is conventional way of creating functions
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// This will work where it is a method call, so `this` here refers to the object
lufthansa.book(635, 'John');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 29, 'Mary');
console.log(lufthansa);

lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  this.plane++;
  console.log(this.planes);
};

// Challenge: Function returning function
const addTax = rate => value => console.log(value + value * rate);

const addVAT = addTax(0.23);
addVAT(100);
