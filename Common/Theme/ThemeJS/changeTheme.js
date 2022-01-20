function changeTheme() {
  let btn = document.getElementById("BtnColorChange");
  let link = document.getElementById("themeLink");

  const lightThemeLink = "../../Common/Theme/ThemeCSS/lightTheme.css";
  const darkThemeLink = "../../Common/Theme/ThemeCSS/darkTheme.css";

  const lightTheme = "lightTheme";
  const darkTheme = "darkTheme";

  btn.onclick = function ChangeTheme() {
    let currTheme = localStorage.getItem("currTheme");

    if (currTheme == lightTheme) {
      currTheme = darkTheme;
      localStorage.setItem("currTheme", currTheme);
      link.href = darkThemeLink;
    } else {
      currTheme = lightTheme;
      localStorage.setItem("currTheme", currTheme);
      link.href = lightThemeLink;
    }
  };
}

export { changeTheme };
