import { gsap } from "gsap";

export default class section2Animations {
  constructor(elementManager) {
    this.elements = elementManager;
  }

  animate() {
    this.tl = gsap.timeline({ paused: true });

    this.tl
      .addLabel("prestart")
      .to(
        this.elements.col1_2,
        {
          duration: 1,
          height: "80%",
          // bottom: "7%",
          top: "13%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .to(
        this.elements.col2_2,
        {
          duration: 1,
          height: "80%",
          // bottom: "25%",
          top: "-5%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .to(
        this.elements.col3_2,
        {
          duration: 1,
          height: "80%",
          // bottom: "6%",
          top: "14%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .to(
        this.elements.col4_2,
        {
          duration: 1,
          height: "75%",
          // bottom: "0%",
          top: "25%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .to(
        this.elements.col5_2,
        {
          duration: 1,
          height: "75%",
          // bottom: "9%",
          top: "16%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .to(
        this.elements.col6_2,
        {
          duration: 1,
          height: "35%",
          // bottom: "15%",
          top: "50%",
          ease: "power3.inOut",
        },
        "prestart"
      )
      .addLabel("start", "-=0.85")
      .to(
        this.elements.col1,
        {
          duration: 1.5,
          height: "80%",
          bottom: "7%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col2,
        {
          duration: 1.5,
          height: "80%",
          bottom: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col3,
        {
          duration: 1.5,
          height: "80%",
          bottom: "6%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col4,
        {
          duration: 1.5,
          height: "75%",
          bottom: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col5,
        {
          duration: 1.5,
          height: "75%",
          bottom: "9%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col6,
        {
          duration: 1.5,
          height: "35%",
          bottom: "15%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line2,
        {
          duration: 1.5,
          height: "14%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line3,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line4,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line5,
        {
          duration: 1.5,
          height: "50%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line2_2,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line3_2,
        {
          duration: 1.5,
          height: "6%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line4_2,
        {
          duration: 1.5,
          height: "9%",
          ease: "power3.inOut",
        },
        "start"
      )
      // .to(this.elements.more, { duration: 1, opacity: 0 }, "start")
      .to(this.elements.marginText, { duration: 1, opacity: 0 }, "start")
      // .to(this.elements.slide, { duration: 1, transform: "translateX(0%)" }, "start")
      .to(this.elements.text, { duration: 1, autoAlpha: 1 }, "start+=1")
      .to(this.elements.title, { duration: 1, opacity: 0 }, "start");
    // .to(material, { duration: 1, value: 10 }, "start");

    return this.tl;
  }
}
