import { checkLifes } from "./checkLifes.js";

function isGameOver() {
  if (checkLifes() === "0") return true;
  return false;
}

export { isGameOver };
