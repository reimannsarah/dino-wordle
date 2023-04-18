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

let dinoArray;

function printDino(dino) {
  document.querySelector('#show-dino').innerText = dino;
  dinoArray = dino[0][0].toUpperCase().split("");
  const regex = /[AEIUO]/;
  let form = document.getElementById("form");
  for (let i = 0; i < dinoArray.length; i++) {
    if (regex.test(dinoArray[i])) {
      let span = document.createElement("span");
      span.setAttribute("class", "vowels");
      span.setAttribute("id", [i]);
      span.innerText = dinoArray[i];
      form.append(span);
    } else {
      let input = document.createElement("input");
      input.setAttribute("class", "consonants");
      input.setAttribute("id", [i]);
      input.setAttribute("style", "text-transform:uppercase");
      form.append(input);
    }
  }
}

function checkDino(event) {
  event.preventDefault();
  for (let i = 0; i < dinoArray.length; i++) {
    let element = document.getElementById(i).value.toUpperCase();
    console.log(element);
    if (dinoArray[i] === element) {
      document.getElementById(i).style.backgroundColor = "green";
      // } else if (dinoArray[i] !== element) {
      //   document.getElementById(i).style.backgroundColor = "red";
      // }
    }
  }
}

function printError(errorDino) {
  document.querySelector('#showDino').innerText = `There was a jurassic error accessing the dino data: ${errorDino[0].status} ${errorDino[0].statusText}: ${errorDino[1].message}`;
}

getDino();
document.querySelector("form").addEventListener("submit", checkDino);