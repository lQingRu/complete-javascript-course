// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// let question = `${poll.question} \n`;

// for (let optionId = 0; optionId < poll.options.length; optionId++) {
//   question += `${poll.options[optionId]} \n`;
// }

// question += '(Write option number)';

// const displayResults =
//   (type = 'array') =>
//   value => {
//     if (type === 'array') {
//       console.log(value);
//     } else if (type === 'string') {
//       console.log('Poll results are ' + value.join(','));
//     } else {
//       alert('Invalid results type!');
//     }
//   };

// const registerNewAnswer = () => {
//   let answer = prompt(question);
//   if (answer >= 0 && answer <= 3) {
//     poll.answers[answer]++;
//     displayResults()(poll.answers);
//   } else {
//     alert('Invalid answer!');
//   }
//   console.log(poll);
// };
// document.querySelector('.poll').addEventListener('click', registerNewAnswer);

// const testData = [5, 2, 3];
// const testData2 = [1, 5, 3, 9, 6, 1];

// const arrayDR = displayResults('array');
// const stringDR = displayResults('string');
// arrayDR(testData);
// stringDR(testData);

// stringDR(testData2);
// arrayDR(testData2);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const question = `${this.question} \n${this.options.join(
      '\n'
    )} (Write option number)`;

    // Get answer
    const answer = Number(prompt(question));
    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
      this.displayResults();
    } else {
      alert('Invalid answer!');
    }
    console.log(poll);
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log('Poll results are ' + this.answers.join(','));
    } else {
      alert('Invalid results type!');
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData = {
  answers: [5, 2, 3],
};
const testData2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(testData);
poll.displayResults.call(testData, 'string');

poll.displayResults.call(testData2);
poll.displayResults.call(testData2, 'string');
