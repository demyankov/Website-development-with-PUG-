// -----IntersectionObserver------

let observerOptions = {
  rootMargin: "10px",
};

const start = (callback) => (entries, obs) => {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    // Отключаем «наблюдателя»
    obs.unobserve(entry.target);
    callback();

    window.removeEventListener("load", createObserver);
  });
};

const createObserver = (callback, target) => () => {
  observer = new IntersectionObserver(start(callback), observerOptions);
  observer.observe(target);
};

// -----SHOW_COLORS------

let colors = document.querySelectorAll(".sectionColors__colorItemHide");
let backgrounds = document.querySelectorAll(".sectionColors_backgroundWrapper");
let colorText = document.querySelectorAll(".sectionColors_colorText");

const showColors = (entries, obs) => {
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    color.style.transitionDelay = `${0.3 * i}s`;
    backgrounds[i].style.background = color.textContent;
    color.classList.remove("sectionColors__colorItemHide");

    if (color.textContent.includes("000000")) {
      colorText[i].style.color = "#ffffff";
    }
  }
};

window.addEventListener("load", createObserver(showColors, colors[0]));

// -----SHOW_STACKS_AND_STAGES------

const stacks = document.querySelectorAll(".stackSection_hide");
const stages = document.querySelectorAll(".stagesSection_hide");

const showElements = (className, elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.transitionDelay = `${0.3 * i}s`;
    elements[i].classList.remove(className);
  }

  window.removeEventListener("load", showElements);
};

const showStackItems = () => showElements("stackSection_hide", stacks);
const showStages = () => showElements("stagesSection_hide", stages);

window.addEventListener("load", createObserver(showStackItems, stacks[0]));
window.addEventListener("load", createObserver(showStages, stages[0]));

// -----SHOW_LETTERS-----

const letters = document.querySelectorAll(".sectionColors__letterHide");

const showLetters = () => {
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    letter.style.fontSize = `${76 - i * 10}px`;
    letter.style.transitionDelay = `${0.3 * i}s`;
    letter.classList.remove("sectionColors__letterHide");
  }
  window.removeEventListener("load", showLetters);
};

window.addEventListener("load", createObserver(showLetters, letters[0]));
