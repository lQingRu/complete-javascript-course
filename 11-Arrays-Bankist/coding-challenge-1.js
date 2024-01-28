// Adult dog: >= 3 years old
// Puppy: < 3 years old

const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // shallow copy
  let _dogsJulia = dogsJulia.slice();
  _dogsJulia = _dogsJulia.slice(1, 3);
  let newArray = [..._dogsJulia, ...dogsKate];
  for (const [i, dog] of newArray.entries()) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  }
};

checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);
