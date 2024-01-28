const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
var goalIndex = 1;
for (const name of game.scored) {
  console.log(`Goal ${goalIndex}: ${name}`);
  goalIndex++;
}
/// Remarks: Can just use [i,player] of game.scored.entries since already includes index

// Task 2
const oddValues = Object.values(game.odds);
var sum = 0;
for (oddValue of oddValues) {
  sum += oddValue;
}
console.log(sum / oddValues.length);

// Task 3
var categoryValues = Object.entries(game.odds);
//// Remarks: can do const[team,odd] of Object.entries(game.odds) insteaad
for (categoryValue of categoryValues) {
  if (categoryValue[0] !== 'x') {
    const teamName = game[categoryValue[0]];
    console.log(`Odd of victory ${teamName}: ${categoryValue[1]}`);
  } else {
    console.log(`Odd of draw: ${categoryValue[1]}`);
  }
}

// Bonus
var scorer = {};
for (const name of game.scored) {
  scorer[name] == null ? (scorer[name] = 1) : scorer[name]++;
}
console.log(scorer);
