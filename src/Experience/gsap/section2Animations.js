import { gsap } from "gsap";

export default class section2Animations {
  constructor() {
    this.getElements();
  }

  getElements() {
    this.section1 = document.querySelector(".section--1");
    this.section2 = document.querySelector(".section--2");

    this.title = document.querySelector(".title");
    this.text = document.querySelectorAll(".section--2_text");

    this.cols = document.querySelectorAll('[class^="zone"]');

    this.col1 = document.querySelector(".zone_6-1");
    this.col2 = document.querySelector(".zone_4-1");
    this.col3 = document.querySelector(".zone_2-1");
    this.col4 = document.querySelector(".zone_1-1");
    this.col5 = document.querySelector(".zone_3-1");
    this.col6 = document.querySelector(".zone_5-1");

    this.col1_2 = document.querySelector(".zone_6-2");
    this.col2_2 = document.querySelector(".zone_4-2");
    this.col3_2 = document.querySelector(".zone_2-2");
    this.col4_2 = document.querySelector(".zone_1-2");
    this.col5_2 = document.querySelector(".zone_3-2");
    this.col6_2 = document.querySelector(".zone_5-2");

    this.line1 = document.querySelector(".line_4-1");
    this.line2 = document.querySelector(".line_2-1");
    this.line3 = document.querySelector(".line_1-1");
    this.line4 = document.querySelector(".line_3-1");
    this.line5 = document.querySelector(".line_5-1");

    this.line1_2 = document.querySelector(".line_4-2");
    this.line2_2 = document.querySelector(".line_2-2");
    this.line3_2 = document.querySelector(".line_1-2");
    this.line4_2 = document.querySelector(".line_3-2");
    this.line5_2 = document.querySelector(".line_5-2");

    this.more = document.querySelector(".more-infos");
    this.marginText = document.querySelector(".subtitles");

    this.styleLines = document.querySelector(".style-lines");

    this.slide = document.querySelector(".section--2_slide_container");
  }
  animate() {
    this.tl = gsap.timeline({ paused: true });

    this.tl
      .addLabel("prestart")
      .to(
        this.col1_2,
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
        this.col2_2,
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
        this.col3_2,
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
        this.col4_2,
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
        this.col5_2,
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
        this.col6_2,
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
        this.col1,
        {
          duration: 1.5,
          height: "80%",
          bottom: "7%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col2,
        {
          duration: 1.5,
          height: "80%",
          bottom: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col3,
        {
          duration: 1.5,
          height: "80%",
          bottom: "6%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col4,
        {
          duration: 1.5,
          height: "75%",
          bottom: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col5,
        {
          duration: 1.5,
          height: "75%",
          bottom: "9%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col6,
        {
          duration: 1.5,
          height: "35%",
          bottom: "15%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line2,
        {
          duration: 1.5,
          height: "14%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line3,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line4,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line5,
        {
          duration: 1.5,
          height: "50%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line2_2,
        {
          duration: 1.5,
          height: "25%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line3_2,
        {
          duration: 1.5,
          height: "6%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line4_2,
        {
          duration: 1.5,
          height: "9%",
          ease: "power3.inOut",
        },
        "start"
      )
      // .to(this.more, { duration: 1, opacity: 0 }, "start")
      .to(this.marginText, { duration: 1, opacity: 0 }, "start")
      // .to(this.slide, { duration: 1, transform: "translateX(0%)" }, "start")
      .to(this.text, { duration: 1, autoAlpha: 1 }, "start+=1")
      .to(this.title, { duration: 1, opacity: 0 }, "start");
    // .to(material, { duration: 1, value: 10 }, "start");

    return this.tl;
  }
}
