// DOM Elements
const lightThemeBtn = document.getElementById("light-theme-btn");
const darkThemeBtn = document.getElementById("dark-theme-btn");
const animatedBox = document.getElementById("animated-box");
const animateBoxBtn = document.getElementById("animate-box-btn");
const clickMeBtn = document.getElementById("click-me-btn");
const clickCount = document.getElementById("click-count");

// Constants
const THEME_KEY = "user-theme";

// Functions
const applyTheme = (theme) => {
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(theme);
  localStorage.setItem(THEME_KEY, theme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light-theme";
  applyTheme(savedTheme);
};

const animateBox = () => {
  animatedBox.classList.toggle("animate");
};

let clickCounter = 0;
const handleClickMe = () => {
  clickCounter++;
  clickCount.textContent = clickCounter;
};

// Event Listeners
lightThemeBtn.addEventListener("click", () => applyTheme("light-theme"));
darkThemeBtn.addEventListener("click", () => applyTheme("dark-theme"));
animateBoxBtn.addEventListener("click", animateBox);
clickMeBtn.addEventListener("click", handleClickMe);

// Initialize
loadTheme();