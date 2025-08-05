const container = document.querySelector(".container");
const containerWidth = parseFloat(getComputedStyle(container).width);

const squaresPerSide = 4;

for (let i = 0; i < squaresPerSide ** 2; i++) {
  let square = document.createElement("div");
  square.classList.add("square");

  let squareSide = Math.floor(containerWidth / squaresPerSide) + 2;
  square.style.width = `${squareSide}px`;

  container.appendChild(square);
}