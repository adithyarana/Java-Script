let randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const gussslot = document.querySelector('.guesses')
const lastresult = document.querySelector('.lastResult')
const lowhig = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')


const p = document.createElement('p')


let prevguess = [];
let numguess = 1;

let playgame=true

if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess);
        
        validateguess(guess)
    })


}

function validateguess(guess){
if(isNaN(guess)){
    alert("plz enter the valid number")
}
else if(guess < 1){
    alert("plz enter the number greater than 0")
}
else if(guess >100 ){
    alert("plz enter the number less  than 100 ")
}
else{
    prevguess.push(guess)
    if(numguess === 11){
        displayguess(guess)
        displaymessage(`game over .random number was ${randomnumber}`)
        endgame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
}
     

}

function checkguess(guess){

    if(guess === randomnumber){
        displaymessage('congrats! you guessed it right')
        endgame()
    }else if(guess < randomnumber){
        displaymessage('number is too low ')
        
    }else if (guess > randomnumber){
        displaymessage('number is too high')
    }

}

// it is a cleanup message 

function displayguess(guess){
 userinput.value =''
 gussslot.innerHTML += `${guess} , `
 numguess++;
 lastresult.innerHTML = `${11 - numguess}`
 

}

function displaymessage(messages){
  
    lowhig.innerHTML = `<h2>${messages}</h2>`
}

function newgame(){

  const newgamebutton= document.querySelector('#newGame')
  newgamebutton.addEventListener('click', function(e){
    randomnumber = parseInt(Math.random()*100+1);
    prevguess = []
    numguess = 1
    gussslot.innerHTML = ''
    lastresult.innerHTML = `${11 - numguess}`
     userinput.removeAttribute('disabled')
     lowhig.innerHTML = ''
     startover.removeChild(p)

     playgame=true

  });
}

function endgame(){

  userinput.value=''
  userinput.setAttribute('disabled' , '')
  p.classList.add=('button')
  p.innerHTML=`<h2 id="newGame">start a new game</h2>`;
  startover.appendChild(p)
  playgame= false
  newgame();

}