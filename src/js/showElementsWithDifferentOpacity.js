const wrapperElements = document.querySelectorAll(".sectionServices_item");
const textElements = document.querySelectorAll(".sectionServices_text");

const count = wrapperElements.length;

const showElementsWithDifferentOpacity = () => {
  for (let i = 0; i < count; i++) {
    textElements[i].style.opacity = `${100 - i * 8}%`;
    wrapperElements[i].style.borderBottom = `1px solid rgba(0,0,0,${
      1 - 0.9 * Math.random()
    })`;
  }

  window.removeEventListener("load", showElementsWithDifferentOpacity);
};

window.addEventListener("load", showElementsWithDifferentOpacity);
