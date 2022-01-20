function decrmentLifes() {
  localStorage.setItem("lifes", localStorage.getItem("lifes") - 1);
}
export { decrmentLifes };
