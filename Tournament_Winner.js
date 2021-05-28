/*
Ques-  There's an algorithms tournament taking place in which teams of programmers
      compete against each other to solve algorithmic problems as fast as possible.
      Teams compete in a round robin, where each team faces off against all other
      teams. Only two teams compete against each other at a time, and for each
      competition, one team is designated the home team, while the other team is the
      away team. In each competition there's always one winner and one loser; there
      are no ties. A team receives 3 points if it wins and 0 points if it loses. The
      winner of the tournament is the team that receives the most amount of points.

      Given an array of pairs representing the teams that have competed against each
      other and an array containing the results of each competition, write a
      function that returns the winner of the tournament. The input arrays are named
      competitions and results
      
      Input--> competitions= [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ]
    results = [0, 0, 1]

    Output--> "Python"
*/

/*** This code takes O(nlogn)time because of sorting | O(k) Space */

function tournamentWinner(competitions, results) {
  let newObj = { competitions };
  let newArray = [];
  for (let i in results) {
    if (results[i] === 0) {
      newArray.push(newObj.competitions[i][1]);
    } else {
      newArray.push(newObj.competitions[i][0]);
    }
  }
  return newArray
    .sort(
      (a, b) =>
        newArray.filter((v) => v === a).length -
        newArray.filter((v) => v === b).length
    )
    .pop();
}

/*** Best code O(n)time | O(k)space */

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}
