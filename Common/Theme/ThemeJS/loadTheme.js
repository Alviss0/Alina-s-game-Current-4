let themeLink = document.getElementById("themeLink");

const LTlightThemeLink = "../../Common/Theme/ThemeCSS/lightTheme.css";
const LTdarkThemeLink = "../../Common/Theme/ThemeCSS/darkTheme.css";

const LTlightTheme = "lightTheme";
const LTdarkTheme = "darkTheme";

let LTcurrTheme = localStorage.getItem("currTheme");

if (LTcurrTheme == LTlightTheme || LTcurrTheme == "undefined") {
  themeLink.href = LTlightThemeLink;
} else {
  themeLink.href = LTdarkThemeLink;
}
