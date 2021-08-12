// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉


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

  // PRINT SCORED PLAYERS
  for (const player of game.scored) {
      console.log(`Goal 1: ${player}`);
  }

  // PRINT ODDS AVERAGE
  console.log(`------------------------`);
  console.log(Object.values(game.odds));
  let odds = Object.values(game.odds);
  let sum = 0;
  for (const odd of odds) {
    sum += odd;
  }
  const average = sum / odds.length
  console.log(`Odds vidurkis: , ${average}`);

// PRINT 3 ODDS WITH FULL DESCRIPTION
console.log(`------------------------`);
odds = Object.entries(game.odds);
console.log(odds);
console.log(odds[0][1]);    // team1
console.log(odds[2][0]);    // ream2
console.log(`Odd of victory ${game[odds[0][0]]}: ${odds[0][1]}`);
console.log(`Odd of draw: ${odds[1][1]}`);
console.log(`Odd of victory ${game[odds[2][0]]}: ${odds[2][1]}`);
console.log(`------------------------`);

// [ [ 'team1', 1.33 ], [ 'x', 3.25 ], [ 'team2', 6.5 ] ]
for (const [team, results] of odds) {
    if (game[team]) {
        console.log(`Odd of victory ${game[team]}: ${results}`);
    } else {
        console.log(`Odd of draw: ${results}`);
    }
}


