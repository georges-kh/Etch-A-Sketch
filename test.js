window.onload = main();

function main() {
  const container = document.getElementById("canvas-container");
  const gridSize = document.getElementById("size");
  gridSize.addEventListener("change", updateCanvas);
  const currentSize = 33;

  canvas(currentSize, container);
  // initialises the option to color so user can start coloring as soon as the page loads
  let option = "color";

  // selects all the pixels and run the selector function on each pixel
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => pixel.addEventListener("mouseover", selector(event, option)));

  // selects all the buttons and modifies the value of option (to be used in selector)
  const buttons = document.querySelectorAll("button");
  buttons.forEach( (button) => button.addEventListener("click", function() {
    option = this.getAttribute("id")
  }));

  // selects the clear button and sets the background to all pixels to white when button is clicked
  const clearBtn = document.getElementById("clear");
  clearBtn.onclick = function() {
    pixels.forEach( function(pixel) {
      // resets the opacity to 1 if opacity was previously modified with gradient button
      //pixel.style.opacity = 1;
      pixel.style.background = "white"
      // resets the option to color so user doesn't have to re-click the color button after clearing
      option = "color";
  })};
}

// creates pixels inside container
function canvas(currentSize, container) {
  for (let i = 0; i < currentSize**2; i++) {

    // creates individual pixel
    const pixel = document.createElement("div");

    // adds pixel class
    pixel.classList.add("pixel");

    // initialises the opacity for the pixel (to be modified with gradient button)
    //pixel.style.opacity = 1;

    // sets the width and height of each pixel depending on container size and number of pixels per side
    pixel.style.width = `${+(container.clientWidth) / +currentSize}px`;
    pixel.style.height= `${+(container.clientHeight) / +currentSize}px`;

    container.appendChild(pixel);
  }
}



function updateCanvas() {
  if (gridSize.value !== currentSize) {
    currentSize = gridSize.value;
  }
  container.innerHTML = "";
  canvas();
  const sizeText = document.getElementById("size-text");
  sizeText.textContent = `Grid size is ${currentSize} x ${currentSize}`;
}

function selector(event, option) {

  // makes selected pixel less opaque and reveals the black background
  if (option === "gradient") {
    this.style.opacity -= 0.15;

  } else {
    // resets the opacity to 1 if it has been modified by the gradient button
    //this.style.opacity = 1;

    // sets the background to black
    if (option === "color") {
      this.style.background = "black";

    // sets the background to white
    } else if (option === "erase") {
      this.style.background = "white";

    // sets the background of each pixel to random color
    } else if (option === "rainbow") {
      this.style.background = rainbow();
    }
  }
}

// return an rgb color with a random value
function rainbow() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;
  return randomColor;
}



