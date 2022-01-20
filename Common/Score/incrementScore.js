function incrementScore(scoreValue) {
  localStorage.setItem("userScore", `${+localStorage.getItem("userScore") + +scoreValue}`);
}
export { incrementScore };
