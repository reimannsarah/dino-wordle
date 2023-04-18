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
  for (let i = 0; i < dinoArray.length; i++) {
    if (regex.test(dinoArray[i])) {
      let div = document.getElementById("letters");
      let span = document.createElement("p");
      span.setAttribute("class", "letters");
      span.innerText = dinoArray[i];
      div.append(span);
    } else {
      let form = document.getElementById("form");
      let input = document.createElement("input");
      input.setAttribute("class", "letters");
      input.setAttribute("placeholder", dinoArray[i]);
      form.append(input);
    }
  }

  //   dinoArray.forEach((element) => {
  //     if() {
  //       console.log(typeof element);
  //       let form = document.getElementById("form");
  //       let input = document.createElement("input");
  //       input.setAttribute("class", "letters");
  //       input.setAttribute("placeholder", element)
  //       form.append(input);
  //     }else {
  // let div = document.getElementById("letters");
  // let span = document.createElement("span");
  // span.setAttribute("class", "letters");
  // div.append(span);
  //     }
  //   });
  //   console.log(dinoArray);
}

function printError(errorDino) {
  document.querySelector('#showDino').innerText = `There was a jurassic error accessing the dino data: ${errorDino[0].status} ${errorDino[0].statusText}: ${errorDino[1].message}`;
}


getDino();