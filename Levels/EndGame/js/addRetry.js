function addRetry() {
  const buttonRetry = document.getElementById("buttonRetry");
  buttonRetry.addEventListener("click", () => {
    location.href = "../Main/index.html";
  });
}
export { addRetry };
