function addResultModal(passed, score, link) {
  const modal = document.createElement("div");
  modal.classList.add("resultLayer");

  const titlePassed = "Уровень пройден!";
  const titleNotPassed = "Уровень не пройден!";

  const notePassed = `- Получено ${score} очков`;
  const noteNotPassed = "Попробуйте еще!";

  const messagePassed = "Перейти на следующий уровень";
  const messageNotPassed = "Пройти уровень снова";

  const modalContent = `
      <div class="result__overlay">
      <div class="result__window">
        <div class="result__header">
          <h2 class="result__title">${passed ? titlePassed : titleNotPassed}</h2>
        </div>
        <div class="result__body">
          <ul class="result__goalList">
            <li class="result__goal">${passed ? notePassed : noteNotPassed}</li>
          </ul>
        </div>
        <div class="result__footer">
          <a class="result__go" href=${link}>${passed ? messagePassed : messageNotPassed}</a>
        </div>
      </div>
    </div>`;

  modal.insertAdjacentHTML("afterbegin", modalContent);
  return modal;
}

export { addResultModal };
