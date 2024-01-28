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

var [players1, players2] = game.players;
var [gk1, fieldPlayers1] = players1;
var allPlayers = [...players1, ...players2];
var [gk2, fieldPlayers2] = players1;

var players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisitc'];

const {
  odds: { team1, x: daraw, team2 },
} = game;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');

team2 < team1 && console.log('Team 2 is more likely to win');
