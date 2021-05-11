function tournamentWinner(competitions, results) {
  let newObj = { competitions };
  let newArray = [];
  for (let i in results) {
    if (results[i] === 0) {
      newArray.push(newObj.competitions[i][1]);
    } else {
      newArray.push(newObj.competitions[i][0]);
    }
    //console.log(newObj.competitions[0][1]);
  }
  return newArray
    .sort(
      (a, b) =>
        newArray.filter((v) => v === a).length -
        newArray.filter((v) => v === b).length
    )
    .pop();
}

console.log(
  tournamentWinner(
    // [
    //   ["HTML", "PYTHON"],
    //   ["C#", "PYTHON"],
    //   ["PYTHON", "HTML"],
    // ],
    // [0, 0, 1]
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
    // [
    //   ["HTML", "Java"],
    //   ["Java", "Python"],
    //   ["Python", "HTML"],
    //   ["C#", "Python"],
    //   ["Java", "C#"],
    //   ["C#", "HTML"],
    //   ["SQL", "C#"],
    //   ["HTML", "SQL"],
    //   ["SQL", "Python"],
    //   ["SQL", "Java"],
    // ],
    // [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
  )

  //tournamentWinner([["bulls", "eagles"]], [1])
);
