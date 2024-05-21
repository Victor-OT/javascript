//solución 1
/* const competitions = [
    ['Javascript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'Javascript']
  ];

  const results = [0, 0, 1]
  
  let teamPoints = [
    {name:'Javascript', points: 0},
    {name:'Python', points: 0},
    {name:'C#', points: 0}
  ]

function findWinner(competiciones, resultados, teamPoints){
    function sumPoints(name){
        let competitionWinner = teamPoints.find(team => team.name === name)
        competitionWinner.points += 3
    }

    function getWinner(teamPoints){
        let maxValue = teamPoints[0].points
        for(i = 0; i < teamPoints.length; i++){
            if(teamPoints[i].points > maxValue){
                maxValue = teamPoints[i].points
            }
        }
        const winner = teamPoints.find(team => team.points === maxValue)
        return winner.name
    }


    for(i = 0; i < results.length; i++)
        {
            if(results[i] === 1){
                sumPoints(competitions[i][0])
            }
            else{
                sumPoints(competitions[i][1])
            }
        }
    console.log('Resultados:')
    console.log(teamPoints[0].name + ': ' + teamPoints[0].points)
    console.log(teamPoints[1].name + ': ' + teamPoints[1].points)
    console.log(teamPoints[2].name + ': ' + teamPoints[2].points)
    console.log('El ganador es: ' + getWinner(teamPoints))
}

findWinner(competitions, results, teamPoints) */

//Solución 2
const competitions = [
    ['Javascript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'Javascript']
  ];

const results = [0, 0, 1]

function winnerTournament(competitions, results) {
    const teamPoints = {}
    let winner = ''

    for(let i = 0; i < competitions.length; i++){
        const [home, away] = competitions[i]
        const winnerTeam = results[i] === 1 ? home : away

        teamPoints[winnerTeam] = (teamPoints[winnerTeam] || 0) + 3

        if(!winner || teamPoints[winnerTeam] > teamPoints[winner]){
            winner = winnerTeam
        }
    }
    console.log(teamPoints)
    return winner
}

console.log(winnerTournament(competitions, results))