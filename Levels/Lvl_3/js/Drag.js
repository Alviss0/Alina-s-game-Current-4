"use strict";

// import { decrmentLifes } from "../../../Common/Lifes/decrementLifes.js";
import { incrementScore } from "../../../Common/Score/incrementScore.js";

function addDrop(options, timer) {
  const answersDropFields = document.querySelectorAll(".answer__dropField");
  const colorsItems = document.querySelectorAll(".variants__color");
  const blocks = document.querySelectorAll(".variants__block");

  for (let DropField of answersDropFields) {
    DropField.ondragover = allowDrop;
    DropField.ondrop = drop;
  }
  function allowDrop(event) {
    event.preventDefault();
  }

  for (let colorItem of colorsItems) {
    colorItem.ondragstart = drag;
  }
  function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
  }

  function drop(event) {
    let element = document.getElementById(event.dataTransfer.getData("id"));

    if (event.target.classList[0] !== "answer__dropField") return;
    if (event.target.children.length !== 0) return;
    event.target.append(element);

    element.closest(".answer__dropField").style.borderStyle = "solid";

    if (isAnswersEmpty(blocks)) {
      if (checkCorrect(colorsItems)) {
        timer.clearTimer();
        result("Правильно!", "Перейти на следующий уровень");
        incrementScore(options.Score);

        document.getElementById("resultBtn").onclick = function () {
          location.href = "../EndGame/EndGame.html";
        };
      } else {
        timer.clearTimer();
        result("Неправильно!", "Пройти уровень заново");
        // decrmentLifes();

        document.getElementById("resultBtn").onclick = function () {
          location.reload();
        };
      }
    }
  }

  function isAnswersEmpty(nodes) {
    for (let node of nodes) {
      if (node.children.length !== 0) return false;
    }
    return true;
  }

  function checkCorrect(nodes) {
    for (let node of nodes) {
      if (node.id.slice(-1) !== node.closest(".answer__dropField").id.slice(-1)) return false;
    }
    return true;
  }

  function result(result, next) {
    const answer = document.querySelector(".variants");

    while (answer.firstChild) {
      answer.removeChild(answer.firstChild);
    }

    answer.classList.remove("controll__variants", "variants");
    answer.classList.add("result");
    answer.innerHTML = `
    <h2 class="result__label">${result}</h2>
                <button id="resultBtn" class="button result__button">${next}</button>
    `;
  }
}

export { addDrop };
