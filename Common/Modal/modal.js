"use strict";

import { isGameOver } from "../Lifes/isGameOver.js";

const isEnd = isGameOver();

function addModal(options, timer) {
  const node = createModal(options);
  document.body.appendChild(node);

  setTimeout(() => {
    node.classList.add("open");
  }, 1);

  document.querySelector(".modal__go").addEventListener("click", () => {
    timer.createTimer();

    const modal = document.querySelector(".modalLayer");
    modal.classList.remove("open");
    modal.classList.add("close");
    setTimeout(() => {
      modal.classList.remove("close");
    }, 1500);
  });
}

function createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("modalLayer");

  const modalContent = `
    <div class="modal__overlay">
        <div class="modal__window">
          <div class="modal__header">
            <h2 class="modal__title">${isEnd ? "Игра закончена" : options.Title}</h2>
          </div>
          <div class="modal__body">
            <ul class="modal__goalList">
              ${fillList(isEnd, options.Rules)}
            </ul>
          </div>
          <div class="modal__footer">
          ${addControl(isEnd)}
            
          </div>
        </div>
    </div>`;

  modal.insertAdjacentHTML("afterbegin", modalContent);
  return modal;
}

function fillList(isEnd, rules) {
  let content = "";

  if (isEnd) {
    content += `<li class="modal__goal">- Игра закончена</li>\n`;
    return content;
  }
  for (let rule in rules) {
    content += `<li class="modal__goal">- ${rules[rule]}</li>\n`;
  }
  return content;
}

function addControl(isEnd) {
  let content = "";

  if (isEnd) {
    content = `<a class="modal__go" href="../EndGame/EndGame.html">Закончить игру</a>`;
  } else {
    content = '<button class="modal__go">Начать</button>';
  }
  return content;
}

export { addModal };
