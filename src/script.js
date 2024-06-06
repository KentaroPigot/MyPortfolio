import Landing1 from "./Experience/worlds/Landing1.js";
import ElementManager from "./Experience/utils/elementManager.js";
import section2Animations from "../src/Experience/gsap/section2Animations.js";
import section3Animations from "../src/Experience/gsap/section3Animations.js";
import section4Animations from "../src/Experience/gsap/section4Animations.js";
import section5Animations from "./Experience/gsap/section5Animations.js";
// import section6Animations from "../src/Experience/gsap/section6Animations.js";
import section7Animations from "../src/Experience/gsap/section7Animations.js";

const elementManager = new ElementManager();

const landing = new Landing1(document.querySelector("canvas.webgl"));
const section3 = document.querySelector(".section--3");
const section2Animation = new section2Animations(elementManager).animate();
const section3Animation = new section3Animations(elementManager).transition();
const section4Animation = new section4Animations(elementManager).transition();
const section5Animation = new section5Animations(elementManager).transition();
// const section6Animation = new section6Animations(elementManager).transition();
const section7Animation = new section7Animations(elementManager).transition();

let currenSection = 0;
let screenYFinger;
let prevScreenYFinger;
let isTouching = false;
let isAnimating = false;
// let isScrollingSection = false;

function playAnimationOnScroll(event) {
  if (isAnimating) return;
  const delta = event.deltaY;
  isAnimating = true;

  // Animate forward
  if (delta > 0) {
    if (currenSection === 0) {
      currenSection = 1;
      section2Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 1) {
      currenSection = 2;
      section3Animation.tlTransition.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 2) {
      currenSection = 3;
      section4Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 3) {
      currenSection++;
      section5Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 4) {
      currenSection++;
      section7Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else {
      isAnimating = false;
    }

    // Animate backward
  } else if (delta < 0) {
    if (currenSection === 1) {
      currenSection = 0;
      section2Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 2) {
      // if (window.scrollY === 0) {
      // }
      // if (window.scrollY > 0) {
      //   isAnimating = false;
      //   return;
      // }
      currenSection = 1;
      section3Animation.tlTransition
        .reverse()
        .eventCallback("onReverseComplete", () => {
          isAnimating = false;
        });
    } else if (currenSection === 3) {
      currenSection = 2;
      section4Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 4) {
      currenSection--;
      section5Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 5) {
      currenSection--;
      section7Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else {
      isAnimating = false;
    }
  }
}

const handleTouchMove = (e) => {
  if (isAnimating) return;

  screenYFinger = e.touches[0].screenY;

  if (!isTouching) {
    prevScreenYFinger = screenYFinger;
    isTouching = true;
  }

  if (screenYFinger - prevScreenYFinger < -20) {
    if (currenSection === 0) {
      isAnimating = true;
      currenSection = 1;
      section2Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 1) {
      isAnimating = true;
      currenSection = 2;
      section3Animation.tlTransition.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 2) {
      isAnimating = true;
      currenSection = 3;
      section4Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 3) {
      isAnimating = true;
      currenSection = 4;
      section5Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 4) {
      isAnimating = true;
      currenSection = 5;
      section7Animation.play().eventCallback("onComplete", () => {
        isAnimating = false;
      });
    }
  }

  if (screenYFinger - prevScreenYFinger > 10) {
    if (currenSection === 1) {
      isAnimating = true;
      currenSection = 0;
      section2Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 2) {
      if (window.scrollY === 0) {
      }
      if (window.scrollY > 0) {
        isAnimating = false;
        return;
      }
      isAnimating = true;
      currenSection = 1;
      section3Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 3) {
      isAnimating = true;
      currenSection = 2;
      section4Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 4) {
      isAnimating = true;
      currenSection = 3;
      section5Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    } else if (currenSection === 5) {
      isAnimating = true;
      currenSection = 4;
      section7Animation.reverse().eventCallback("onReverseComplete", () => {
        isAnimating = false;
      });
    }
  }
};

const handleTouchEnd = () => {
  isTouching = false;
  prevScreenYFinger = null;
  screenYFinger = null;
};
const handleHoverEvent = (section3hover, isHover, event) => {
  const area = event.target.dataset.area;
  if (!area) return;
  if (isHover) {
    section3hover.hover(area);
  } else {
    section3hover.leave(area);
  }
};

const hoverAnimation = (section3hover) => {
  let hoverAreas = [];
  for (let i = 1; i < 4; i++) {
    hoverAreas.push(
      ...section3.querySelectorAll(`[class^="section--3_"][class$="--${i}"]`)
    );
  }

  hoverAreas.forEach((area) => {
    area.addEventListener(
      "mouseover",
      handleHoverEvent.bind(null, section3hover, true)
    );
    area.addEventListener(
      "mouseleave",
      handleHoverEvent.bind(null, section3hover, false)
    );
  });
};
hoverAnimation(section3Animation);

window.addEventListener("wheel", playAnimationOnScroll);
document.addEventListener("touchmove", handleTouchMove, false);
document.addEventListener("touchend", handleTouchEnd, false);
