
//DO THE INTERFACE DOM MANIPULATION HERE




const chronometer = new Chronometer();

let myNewchronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here

  //UPDATE DOM HERE  with printMinutes & printSeconds
let printedTime=

//Update dom to printed time:


}

function printMinutes() {
  // ... your code goes here


let printedMins = getMinutes();

//UPDATE DOM HERE:

}

function printSeconds() {
  // ... your code goes here

  //grab values by chronometer method getSeconds, then update DOM

  let printedSecs = getSeconds();    ///

  //UPDATE DOM HERE:

  
  }


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
//um verhalten der knöpfe zu ändern, müssen wir Klasse umschalten


// to change status, toggle class. Toggle method:

//----TOGGLE-----------------------------------
//btnLeftElement.classList.toggle("");


//does this work as well???
if(btnLeftElement.className === 'btn start'){

//create code to call start method here:
  

  btnLeftElement.className = 'btn stop';
  btnRightElement.className = 'btn split';


  //set the btnLeft/right text to STOP here:
  btnLeftElement.innerText    = "STOP";
btnRightElement.innerText   = "SPLIT";

} else {
  btnLeftElemnt.className = 'btn start';
  btnRightElement.className = 'btn reset';

  btnLeftElement.innerText = "START";
  btnRightElement.innerText = "RESET";

  //create code to call stop method here:


}

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here




});


//Create the necessary code in the index.js to call the 
//Chronometer's start method if the button has the start class, 
//or the stop method if the button has the stop class applied.