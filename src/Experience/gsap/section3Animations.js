import { gsap } from "gsap";

export default class section3Animations {
  constructor() {
    this.getElements();
  }

  getElements() {
    this.section2 = document.querySelector(".section--2");
    this.section3 = document.querySelector(".section--3");

    this.text = document.querySelectorAll(".section--2_text");

    this.backgroundZones = document.querySelector(".bg-zone-container");
    this.allCols = document.querySelectorAll(".bg-zone");

    this.background = document.querySelectorAll('[class^="section--3_bg-"]');
    this.animSquares = document.querySelectorAll(
      '[class^="section--3_animSquare-"]'
    );

    this.topCols = document.querySelectorAll('[class*="zone_"][class$="-2"]');

    this.bottomCols = document.querySelectorAll(
      '[class*="zone_"]:not([class$="-2"])'
    );

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

    this.slide = document.querySelector(".section--2_slide_container");

    this.title = document.querySelector(".section--3_bg--b h2");

    // Elements section 3

    this.frontend = document.querySelector(".section--3_title--1");
    this.backend = document.querySelector(".section--3_title--2");
    this.moreSkills = document.querySelector(".section--3_title--3");

    this.sub1 = document.querySelector(".section--3_subtitle--1");
    this.sub2 = document.querySelector(".section--3_subtitle--2");
    this.sub3 = document.querySelector(".section--3_subtitle--3");

    this.more1 = document.querySelector(".section--3_more--1");
    this.more1_1 = document.querySelector(".section--3_more2--1");
    this.more2 = document.querySelector(".section--3_more--2");
    this.more2_1 = document.querySelector(".section--3_more2--2");
    this.more3 = document.querySelector(".section--3_more--3");
    this.more3_1 = document.querySelector(".section--3_more2--3");

    this.square1 = document.querySelector(".section--3_animSquare--1");
    this.square2 = document.querySelector(".section--3_animSquare--2");
    this.square3 = document.querySelector(".section--3_animSquare--3");

    this.area1 = {
      title: this.frontend,
      subtitle: this.sub1,
      more1: this.more1,
      more1_1: this.more1_1,
      square: this.square1,
    };
    this.area2 = {
      title: this.backend,
      subtitle: this.sub2,
      more1: this.more2,
      more1_1: this.more2_1,
      square: this.square2,
    };
    this.area3 = {
      title: this.moreSkills,
      subtitle: this.sub3,
      more1: this.more3,
      more1_1: this.more3_1,
      square: this.square3,
    };
  }

  transition() {
    this.tlTransition = gsap.timeline({ paused: true });

    this.tlTransition
      .addLabel("start")
      .to(
        this.col1,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col2,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col3,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col4,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col5,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col6,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col1_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col2_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col3_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col4_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col5_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.col6_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line1,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line3,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line4,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line5,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line1_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line2_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line3_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line4_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.line5_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(this.text, { duration: 1, opacity: 0 }, "start")
      // .to(this.slide, { duration: 1, transform: "translateX(100%)" }, "start")
      .addLabel("backgroundSet-=0.2")
      .to(
        this.section3,
        {
          duration: 1.3,
          autoAlpha: 1,
        },
        "backgroundSet"
      )
      .to(this.section3, {
        duration: 0,
        pointerEvents: "all",
      })
      .to(
        this.section2,
        { duration: 0, opacity: 0, autoAlpha: 0 },
        "backgroundSet"
      )
      // .to(this.allCols, { duration: 1.5, height: "0%" }, "backgroundSet+=0.7")
      .to(
        this.bottomCols,
        { stagger: 0.15, duration: 1, height: "0%" },
        "backgroundSet+=0.60"
      )
      .to(
        this.topCols,
        { stagger: 0.15, duration: 1, height: "0%" },
        "backgroundSet+=0.7"
      );

    return this.tlTransition;
  }

  hover(areaString) {
    const area = parseInt(areaString);
    let currentArea;
    switch (area) {
      case 1:
        currentArea = this.area1;
        break;
      case 2:
        currentArea = this.area2;
        break;
      case 3:
        currentArea = this.area3;
        break;
      default:
        currentArea = undefined;
    }

    if (!currentArea) {
      return;
    }

    // console.log(currentArea);

    this.tlHover = gsap.timeline({ paused: true });

    this.tlHover
      .addLabel("start")
      .to(
        [
          currentArea.title,
          currentArea.subtitle,
          currentArea.more1,
          currentArea.more1_1,
          currentArea.square,
        ],
        {
          duration: 0.5,
          backgroundColor: "rgba(181, 201, 10, 1)",
          color: "black",
        },
        "start"
      )
      // .to(currentArea.square, { duration: 0.5, scaleY: 0.75 }, "start")
      .to(currentArea.more1, { duration: 0.5, scaleY: 1 }, "start")
      .to(currentArea.more1_1, { duration: 0.5, scaleY: 1 }, "start")
      .to(currentArea.square, { duration: 0.5, opacity: 0.5 }, "start");

    return this.tlHover;
  }

  leave(areaString) {
    this.tlHover = gsap.timeline({ paused: true });

    const area = parseInt(areaString);
    let currentArea;

    switch (area) {
      case 1:
        currentArea = this.area1;
        break;
      case 2:
        currentArea = this.area2;
        break;
      case 3:
        currentArea = this.area3;
        break;
    }

    this.tlHover
      .addLabel("start")
      .to(
        [
          currentArea.title,
          currentArea.subtitle,
          currentArea.more1,
          currentArea.more1_1,
          currentArea.square,
        ],
        {
          duration: 0.5,
          backgroundColor: "black",
          color: "white",
        },
        "start"
      )
      // .to(currentArea.square, { duration: 0.5, scaleY: 1 }, "start")
      .to(currentArea.more1, { duration: 0.5, scaleY: 0 }, "start")
      .to(currentArea.more1_1, { duration: 0.5, scaleY: 0 }, "start")
      .to(currentArea.square, { duration: 0.5, opacity: 0 }, "start");

    return this.tlHover;
  }
}
