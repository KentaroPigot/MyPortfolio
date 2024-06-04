import { gsap } from "gsap";
import { splitWords } from "../../utils/splitWords";

export default class section4Animations {
  constructor(elementManager) {
    this.elements = elementManager;

    splitWords(this.elements.section4_title.children[0]);
    splitWords(this.elements.section4_title.children[0]);

    this.colsSlideDuration = 1;
  }

  transition() {
    this.tl = gsap.timeline({ paused: true });

    this.tl
      .addLabel("start")
      .to(this.elements.topCols, { top: 0 }, "start")
      .to(this.elements.bottomCols, { bottom: 0 }, "start")
      .to(
        this.elements.allCols,
        { backgroundColor: "white", height: "0%" },
        "start"
      )
      .to(this.elements.backgroundZones, { zIndex: 12 }, "start")
      .addLabel("firstGroup")
      .to(
        [this.elements.col6, this.elements.col6_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "firstGroup"
      )
      .to(
        [this.elements.col1, this.elements.col1_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "firstGroup"
      )
      .to(
        [this.elements.line1, this.elements.line1_2],
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "firstGroup"
      )
      .to(
        [this.elements.line5, this.elements.line5_2],
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "firstGroup"
      )
      .addLabel("secondGroup", "-=1.15")
      .to(
        [this.elements.col2, this.elements.col2_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "secondGroup"
      )
      .to(
        [this.elements.col5, this.elements.col5_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "secondGroup"
      )
      .to(
        [this.elements.line2, this.elements.line2_2],
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "secondGroup"
      )
      .to(
        [this.elements.line4, this.elements.line4_2],
        { duration: 1.5, height: "50%", ease: "power4.inOut" },
        "secondGroup"
      )
      .addLabel("thirdGroup", "-=1.15")
      .to(
        [this.elements.col3, this.elements.col3_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "thirdGroup"
      )
      .to(
        [this.elements.col4, this.elements.col4_2],
        {
          duration: 1,
          height: "50%",
          ease: "power4.inOut",
        },
        "thirdGroup"
      )
      .to(
        [this.elements.line3, this.elements.line3_2],
        { duration: 1, height: "50%", ease: "power4.inOut" },
        "thirdGroup"
      )
      .addLabel("firstGroupDissapear", "-=0.75")
      .to(
        [this.elements.line5, this.elements.line5_2],
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .to(
        [this.elements.line1, this.elements.line1_2],
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .addLabel("secondGroupDissapear", "-=0.75")
      .to(
        [this.elements.line2, this.elements.line2_2],
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "secondGroupDissapear"
      )
      .to(
        [this.elements.line4, this.elements.line4_2],
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "secondGroupDissapear"
      )
      .addLabel("firstGroupDissapear", "-=0.75")
      .to(
        [this.elements.line3, this.elements.line3_2],
        { duration: 1, height: "0%", ease: "power4.inOut" },
        "firstGroupDissapear"
      )
      .addLabel("sec4AppearStart", "-=0.25")
      .to(this.elements.section4, { opacity: 1 }, "sec4AppearStart")
      .to(
        this.elements.section4_shadow,
        { duration: 1, opacity: 1 },
        "sec4AppearStart"
      )
      .addLabel("imageThrown", "-=0.5")
      .to(
        this.elements.section4_image1,
        {
          duration: 1,
          x: "13%",
          rotate: "-16deg",
          ease: "power4.out",
        },
        "imageThrown"
      )
      .to(
        this.elements.section4_image2,
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
        this.elements.section4_texts,
        { duration: 2, opacity: 1, ease: "power2.out" },
        "textAppears"
      );
    return this.tl;
  }
}
