function canvas() {
  let pixelCount = 20;
  const container = document.querySelector(".canvas-container");
  for (let i = 0; i < pixelCount**2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
    pixel.setAttribute("style", `width: ${200/pixelCount}px; height: ${200/pixelCount}px`);
  }
}


function main() {
  canvas();

  const dots = document.querySelectorAll(".pixel");
  dots.forEach((dot) => dot.addEventListener("mouseover", color));
}

function color() {
  let color = "black";
  this.style.background = color;

  const options = document.querySelectorAll("button");
  options.forEach((option) => option.addEventListener("click", selection));


}

function selection() {
  let mode = this.id;
  pixels = Array.from(document.getElementsByClassName("pixel"));

  switch (mode) {

    case "clear":
      pixels.forEach(function(pixel) { pixel.style.background = "white" })
      break;
    case "erase":
      pixels.forEach((pixel) => pixel.addEventListener("mouseover", function() { this.style.background = "white"}));
      break;
    case "rainbow":
      pixels.forEach( (pixel) => pixel.addEventListener("mouseover", function() {
        let colors = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime",
      "olive", "yellow", "navy", "blue", "teal", "aqua"];
        this.style.background = colors[Math.floor(Math.random()*colors.length)];
      }))
      break;
  }
}

main()