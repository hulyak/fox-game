export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

// day to night to rain
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoop(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
