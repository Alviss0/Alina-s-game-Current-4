function CountingResults() {
  const OutputFieldUserName = document.getElementById("OutputFieldUserName");
  const OutputFieldUserScore = document.getElementById("OutputFieldUserScore");

  OutputFieldUserName.innerText = localStorage.getItem("userName");
  OutputFieldUserScore.innerText = localStorage.getItem("userScore");
}
export { CountingResults };
