//запуск видео

import { incrementScore } from "../../../Common/Score/incrementScore.js";
import { addResultModal } from "../../../Common/Results/result.js";
// import { decrmentLifes } from "../../../Common/Lifes/decrementLifes.js";


const video_time = 5;
  function video_num(video_time){
    return Math.floor(Math.random() * video_time)+11;
  }

  let result = video_num(video_time);
  // alert(result);


  let map = new Map();
    map.set(11, "./Video/11.mp4");
    map.set(12, "./Video/12.mp4");
    map.set(13, "./Video/13.mp4");
    map.set(14, "./Video/14.mp4");
    map.set(15, "./Video/15.mp4");

  video_play.src=map.get(result);

  function video(options, timer) {
  let strt = document.getElementById("buttonStart");
  let idlink = document.getElementById("video_play");
  let video_effect = document.getElementById("effect");

  strt.addEventListener("click", () => {
    idlink.play();
    strt.classList.add("button_hide");
  });

  //   function delete_btn(button) {
  //     button.remove();
  //   }

  const scnd = document.getElementById("time_id");
  const correct_time_min = result-1;
  const correct_time_max = result+1;
  let check_res = document.getElementById("buttonCheckResult");

  check_res.addEventListener("click", () => {
    if (correct_time_min < scnd.value && scnd.value < correct_time_max) {
      timer.clearTimer();
      incrementScore(options.Score);
      document.body.appendChild(addResultModal(true, options.Score, "../Lvl_3/lvl3.html"));
      setTimeout(() => {
        document.querySelector(".resultLayer").classList.add("open");
      }, 1);
      console.log("si");
    } else {
      timer.clearTimer();
      // decrmentLifes();
      location.reload();
      console.log("no");
    }
  });
}

export { video };
