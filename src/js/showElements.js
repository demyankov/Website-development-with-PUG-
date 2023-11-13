const stacks = document.querySelectorAll(".stackSection_hide");
const stages = document.querySelectorAll(".stagesSection_hide");

const showElements = (className, elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.transitionDelay = `${0.3 * i}s`;
    elements[i].classList.remove(className);
  }

  window.removeEventListener("load", className);
};

const showStackItems = () => showElements("stackSection_hide", stacks);
const showStages = () => showElements("stagesSection_hide", stages);

window.addEventListener("load", showStackItems);
window.addEventListener("load", showStages);
