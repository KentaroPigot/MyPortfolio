import { gsap } from "gsap";

export default class titleAppears {
  constructor() {
    this.kentaro = document.querySelector(".landing-title__1");
    this.pigot = document.querySelector(".landing-title__2");
    this.french = document.querySelector(".subtitle__1");
    this.line = document.querySelector(".subtitle__line");
    this.japanese = document.querySelector(".subtitle__2");
    this.web = document.querySelector(".subtitle__12");
    this.dev = document.querySelector(".subtitle__22");

    this.splitTextIntoSpans(this.kentaro);
    this.splitTextIntoSpans(this.pigot);
    this.splitTextIntoSpans(this.french);
    this.splitTextIntoSpans(this.japanese);
    this.splitTextIntoSpans(this.web);
    this.splitTextIntoSpans(this.dev);

    // this.animate();
  }

  splitTextIntoSpans(element) {
    const text = element.innerText;
    const letters = text.split("");
    const spans = letters.map((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      return span;
    });

    element.innerHTML = ""; // Remove the original text content

    spans.forEach((span) => {
      element.appendChild(span);
    });
  }

  animate() {
    gsap.to(this.kentaro.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.pigot.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.french.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.line, {
      duration: 0.5,
      stagger: 0.1,
      width: "20vw",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.japanese.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.web.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
    gsap.to(this.dev.querySelectorAll("span"), {
      duration: 0.5,
      stagger: 0.1,
      rotateX: "0deg",
      rotateY: "0deg",
      autoAlpha: 1,
      rotate: 0,
    });
  }
}
