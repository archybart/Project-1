/*----- constants -----*/


/*----- state variables -----*/
let p1Choice,
    p2Choice,
    winner;

let state = {
    p1Choice,
    p2Choice,
    winner: undefined

}

/*----- cached elements  -----*/
//player choices

/*----- event listeners -----*/
function handleChoice(event) {
    state.p1Choice = event.target.value
}
console.log(handleChoice)
/*----- functions -----*/

function winnerDeclared() {

}