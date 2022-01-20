import { decrmentLifes } from "../Lifes/decrementLifes.js";
import { addResultModal } from "../Results/result.js";

// function createTimer(time) {
//   console.log("timerAlive");
//   setTimeout(() => {
//     decrmentLifes();
//     document.body.appendChild(addResultModal(false, 0, location.pathname));
//     setTimeout(() => {
//       document.querySelector(".resultLayer").classList.add("open");
//     }, 1);
//   }, +time * 1000);
// }

// function clearTimer(timerId) {
//   console.log("timer Dead :(");
//   clearTimeout(timerId);
// }

function createTimer(time) {
  const timer = {
    timerId: null,
    createTimer() {
      console.log("timerAlive");
      this.timerId = setTimeout(() => {
        decrmentLifes();
        document.body.appendChild(addResultModal(false, 0, location.pathname));
        setTimeout(() => {
          this.clearTimer();
          document.querySelector(".resultLayer").classList.add("open");
        }, 1);
      }, +time * 1000);
    },
    clearTimer() {
      console.log("timer Dead :(");
      clearTimeout(this.timerId);
    },
  };
  return timer;
}

export { createTimer };
