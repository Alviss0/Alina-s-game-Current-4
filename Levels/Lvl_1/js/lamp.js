// import { decrmentLifes } from "../../../Common/Lifes/decrementLifes.js";
import { incrementScore } from "../../../Common/Score/incrementScore.js";
import { addResultModal } from "../../../Common/Results/result.js";

const num_lamp = 3; //кол-во ламп
//рандом кол-ва ламп
function lamp_random(num_lamp) {
  return Math.floor(Math.random() * num_lamp)+5;
}

let res = lamp_random(num_lamp);
//  alert(res);

//рандом координат ламп
const num_map = 75;
function lamp_map(num_map){
  let result = Math.floor(Math.random() * num_map)+5;
  return result;
}


function lamp(options, timer) {

  let lampCount = 0;
  let count = 1; 
  const field = document.getElementById("deployField");

  //let count = 1;
  //ставим на поле
  function deployLamp() {
    
    let rowLamp = createLamp();
    for (let i=1; i<res;i++){
       
          rowLamp.style.top = `${lamp_map(num_map)}%`;
          rowLamp.style.left = `${lamp_map(num_map)}%`;
          rowLamp.src = "Pictures/lampOff.jpg";
          
          field.appendChild(rowLamp);
         
          // alert(count);
    }
    count++;
    
  }

  function createLamp() {
    let node = document.createElement("img");

      // node.classList.add("lamp", `lamp${i}`);
      // node.id = `lamp${i}`;
      node.classList.add("lamp", `lamp${count}`);
      node.id = `lamp${count}`;

    return node;
  }

  let map = new Map();
  map.set(8, 1400);
  map.set(7, 1600);
  map.set(6, 1950);
  map.set(5, 2000);

  let timerId = setInterval(() => deployLamp(), map.get(res));
  setTimeout(() => {
    clearInterval(timerId);
  }, 12000);

  //включаем лампы
  field.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.classList.contains("lamp")) return;

    target.src = "Pictures/lampOn.jpg";

    lampCount++;
    if (lampCount === res) {
      timer.clearTimer();
      incrementScore(options.Score);
      document.body.appendChild(addResultModal(true, options.Score, "../Lvl_2/lvl2.html"));
      setTimeout(() => {
        document.querySelector(".resultLayer").classList.add("open");
      }, 1);
    }
  });
}

export { lamp };
