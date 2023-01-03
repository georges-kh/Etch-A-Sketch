function canvas() {
  let pixelCount = 20;
  const container = document.querySelector(".canvas-container");
  for (let i = 0; i < pixelCount**2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
    pixel.setAttribute("style", `min-width: ${200/pixelCount}px; min-height: ${200/pixelCount}px`);
  }
}

function selection() {
  const options = document.querySelectorAll("buttons");
  options.forEach((option) => option.addEventListener("click", function() {
    mode = this.class;
    return mode;
  }));

  switch (mode) {
    case "erase":

  }
}

function main() {
  canvas();

  const dots = document.querySelectorAll(".pixel");
  dots.forEach((dot) => dot.addEventListener("mouseover", function() {
    this.setAttribute("style", "background-color: black;");
  }));
}

main()