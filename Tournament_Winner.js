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
