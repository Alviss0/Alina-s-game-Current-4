function addStart() {
  const defaultName = "Игрок";

  const inputNameField = document.getElementById("InputNameField");
  const startButton = document.getElementById("buttonStart");

  startButton.addEventListener("click", () => {
    if (inputNameField.value === "") {
      let cfm = confirm("Имя не введено! Для ввода имени нажми ОТМЕНИТЬ, иначе будет использовано имя по умолчанию");
      if (cfm == true) {
        localStorage.setItem("userName", defaultName);
        localStorage.setItem("userScore", "0");
        location.href = "../Lvl_1/lvl1.html";
      } else {
        return;
      }
    } else {
      localStorage.setItem("userName", inputNameField.value);
      localStorage.setItem("userScore", "0");
      location.href = "../Lvl_1/lvl1.html";
    }
  });
}

export { addStart };
