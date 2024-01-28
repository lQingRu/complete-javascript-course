const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//=== Background
//- Eating too much: current food portion > recommended food portion
// - Eating okay amount: food portion is within 10% above and 10% below the recommended

// Task 1
const calcRecommendedFood = function (weight) {
  return Math.trunc(weight ** 0.75 * 28);
};
dogs.forEach(dog => (dog.recommendedFood = calcRecommendedFood(dog.weight)));
console.log(dogs);

// Task 2
for (const dog of dogs) {
  if (dog.owners.some(owner => owner === 'Sarah')) {
    console.log(dog.curFood > calcRecommendedFood(dog.weight));
  }
}

// Task 3
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
for (const dog of dogs) {
  if (dog.curFood > dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
  } else {
    ownersEatTooLittle.push(dog.owners);
  }
}
ownersEatTooLittle = ownersEatTooLittle.flat();
ownersEatTooMuch = ownersEatTooMuch.flat();
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);
