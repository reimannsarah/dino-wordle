import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dino from './get-dino.js';

//Business Logic

function getDino() {
  let promise = Dino.getDino();
  promise.then(function (dino) {
    printDino(dino);
  }, function (errorDino) {
    printError(errorDino);
  });
}

//UI Logic

function printDino(dino) {
  document.querySelector('#show-dino').innerText = dino;
  let dinoArray = dino[0][0].toUpperCase().split("");
  console.log(dinoArray);
  const regex = /[AEIUO]/;
  let form = document.getElementById("form");
  for (let i = 0; i < dinoArray.length; i++) {
    if (regex.test(dinoArray[i])) {
      let span = document.createElement("span");
      span.setAttribute("class", "vowels");
      span.innerText = dinoArray[i];
      form.append(span);
    } else {      
      let input = document.createElement("input");
      input.setAttribute("class", "consonants");
      input.setAttribute("style", "text-transform:uppercase");
      form.append(input);
    }
  }
}

function printError(errorDino) {
  document.querySelector('#showDino').innerText = `There was a jurassic error accessing the dino data: ${errorDino[0].status} ${errorDino[0].statusText}: ${errorDino[1].message}`;
}


getDino();