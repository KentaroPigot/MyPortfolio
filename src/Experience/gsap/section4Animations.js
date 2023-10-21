import { gsap } from "gsap";
import { splitWords } from "../../utils/splitWords";

export default class section4Animations {
  constructor() {
    this.getElements();

    splitWords(this.title.children[0]);
    splitWords(this.title.children[0]);

    this.colsSlideDuration = 1;
  }

  getElements() {
    // Select Background elements (columns, lines, etc...)
    this.section4 = document.querySelector(".section--4");
    this.colsContainer = document.querySelectorAll(".bg-zone-container");
    this.allCols = document.querySelectorAll(".bg-zone");
    this.topCols = document.querySelectorAll('[class*="zone_"][class$="-2"]');
    this.bottomCols = document.querySelectorAll(
      '[class*="zone_"]:not([class$="-2"])'
    );
    // this.lines1 = document.querySelectorAll('[class*="line_1"]');
    for (let i = 1; i < 7; i++) {
      this[`lines${i}`] = document.querySelectorAll(`[class*="line_${i}"]`);
    }
    // this.cols1 = document.querySelectorAll('[class*="zone_1"]');
    for (let i = 1; i < 7; i++) {
      this[`cols${i}`] = document.querySelectorAll(`[class*="zone_${i}"]`);
    }

    // Select section elements
    this.title = document.querySelector(".section--4_title");
    this.texts = document.querySelector(".section--4_content-right");
    this.image1 = document.querySelector(".section--4_image-1");
    this.image2 = document.querySelector(".section--4_image-2");
    this.shadow = document.querySelector(".section--4_hidder_shadow");
  }

  transition() {
    this.tl = gsap.timeline({ paused: true });

    this.tl
      .addLabel("start")
      .to(this.topCols, { top: 0 }, "start")
      .to(this.bottomCols, { bottom: 0 }, "start")
      .to(this.allCols, { backgroundColor: "white", height: "0%" }, "start")
      .to(this.colsContainer, { zIndex: 12 }, "start")
      .addLabel("firstGroup")
      .to(
        this.cols6,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "firstGroup"
      )
      .to(
        this.cols5,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "firstGroup"
      )
      .to(
        this.lines4,
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "firstGroup"
      )
      .to(
        this.lines5,
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "firstGroup"
      )
      .addLabel("secondGroup", "-=1.15")
      .to(
        this.cols3,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "secondGroup"
      )
      .to(
        this.cols4,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "secondGroup"
      )
      .to(
        this.lines3,
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "secondGroup"
      )
      .to(
        this.lines2,
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "secondGroup"
      )
      .addLabel("thirdGroup", "-=1.15")
      .to(
        this.cols1,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "thirdGroup"
      )
      .to(
        this.cols2,
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "thirdGroup"
      )
      .to(
        this.lines1,
        { duration: 1, height: "50%", ease: "power4.inOut" },
        "thirdGroup"
      )
      .addLabel("firstGroupDissapear", "-=0.75")
      .to(
        this.lines5,
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .to(
        this.lines4,
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .addLabel("secondGroupDissapear", "-=0.75")
      .to(
        this.lines3,
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "secondGroupDissapear"
      )
      .to(
        this.lines2,
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "secondGroupDissapear"
      )
      .addLabel("firstGroupDissapear", "-=0.75")
      .to(
        this.lines1,
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .addLabel("sec4AppearStart", "-=0.25")
      .to(this.section4, { opacity: 1 }, "sec4AppearStart")
      .to(this.shadow, { duration: 1, opacity: 1 }, "sec4AppearStart")
      .addLabel("imageThrown", "-=0.5")
      .to(
        this.image1,
        {
          duration: 1,
          x: "13%",
          rotate: "-16deg",
          ease: "power4.out",
        },
        "imageThrown"
      )
      .to(
        this.image2,
        {
          duration: 1,
          x: "22%",
          rotate: "-16deg",
          ease: "power4.out",
        },
        "imageThrown"
      )
      .addLabel("textAppears", "-=0.5")
      .to(
        document.querySelectorAll(".section--4_titleLetter"),
        {
          stagger: 0.05,
          duration: 0.75,
          y: "0%",
          ease: "power4.out",
        },
        "textAppears"
      )
      .to(
        this.texts,
        { duration: 2, opacity: 1, ease: "power2.out" },
        "textAppears"
      );
    return this.tl;
  }
}
