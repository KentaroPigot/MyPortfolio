import { gsap } from "gsap";

export default class section3Animations {
  constructor(elementManager) {
    this.elements = elementManager;
    this.initAreas();
    // this.tlHover = gsap.timeline({ paused: true });
    this.initTimelines();
  }

  initAreas() {
    this.areas = {
      1: this.elements.area1,
      2: this.elements.area2,
      3: this.elements.area3,
    };
  }

  getCurrentArea(areaString) {
    const area = parseInt(areaString, 10);
    return this.areas[area];
  }

  transition() {
    this.tlTransition = gsap.timeline({ paused: true });

    this.tlTransition
      .addLabel("start")
      .to(
        this.elements.col1,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col2,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col3,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col4,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col5,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col6,
        {
          duration: 1.5,
          height: "100%",
          bottom: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col1_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col2_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col3_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col4_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col5_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.col6_2,
        {
          duration: 1.5,
          height: "100%",
          top: "0",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line1,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line3,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line4,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line5,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line1_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line2_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line3_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line4_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(
        this.elements.line5_2,
        {
          duration: 1.5,
          height: "0%",
          ease: "power3.inOut",
        },
        "start"
      )
      .to(this.elements.text, { duration: 1, opacity: 0 }, "start")
      // .to(this.elements.slide, { duration: 1, transform: "translateX(100%)" }, "start")
      .addLabel("backgroundSet-=0.2")
      .to(
        this.elements.section3,
        {
          duration: 1.3,
          autoAlpha: 1,
        },
        "backgroundSet"
      )
      .to(this.elements.section3, {
        duration: 0,
        pointerEvents: "all",
      })
      .to(
        this.elements.section2,
        { duration: 0, opacity: 0, autoAlpha: 0 },
        "backgroundSet"
      )
      // .to(this.elements.allCols, { duration: 1.5, height: "0%" }, "backgroundSet+=0.7")
      .to(
        this.elements.bottomCols,
        { stagger: 0.15, duration: 1, height: "0%" },
        "backgroundSet+=0.60"
      )
      .to(
        this.elements.topCols,
        { stagger: 0.15, duration: 1, height: "0%" },
        "backgroundSet+=0.7"
      );
    this.tlTransition;

    return this;
  }

  initTimelines() {
    this.timelines = {};

    for (let areaKey in this.areas) {
      this.timelines[areaKey] = gsap.timeline({ paused: true, reversed: true });

      const currentArea = this.areas[areaKey];

      this.timelines[areaKey]
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
        .to(currentArea.more1, { duration: 0.5, scaleY: 1 }, "start")
        .to(currentArea.more1_1, { duration: 0.5, scaleY: 1 }, "start")
        .to(currentArea.square, { duration: 0.5, opacity: 0.5 }, "start");
    }
  }

  hover(areaString) {
    const areaKey = parseInt(areaString, 10);
    if (!this.timelines[areaKey]) return;

    this.timelines[areaKey].play();
  }

  leave(areaString) {
    const areaKey = parseInt(areaString, 10);
    if (!this.timelines[areaKey]) return;

    this.timelines[areaKey].reverse();
  }
}
