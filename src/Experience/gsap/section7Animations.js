import { gsap } from "gsap";

export default class Section7Animations {
  constructor(elementManager) {
    this.elements = elementManager;
    this.groupColorCols();
  }

  groupColorCols() {
    // Cols black
    this.blackCols = [];
    for (let i = 1; i < 7; i++) {
      this.blackCols.push(this.elements[`col${i}`]);
    }
    console.log(this.blackCols);

    // Cols green
    this.greenCols = [];
    for (let i = 1; i < 7; i++) {
      this.greenCols.push(this.elements[`col${i}_2`]);
    }
  }

  transition() {
    this.tlTransition = gsap.timeline({ paused: true });

    this.tlTransition
      .to(this.elements.section7_background, { duration: 1, autoAlpha: 1 })
      .addLabel("setup")
      .to(this.elements.section4, { duration: 0, opacity: 0 }, "setup")
      .to(this.elements.section3, { duration: 0, opacity: 0 }, "setup")
      .to(
        this.blackCols,
        { duration: 0, bottom: "0%", height: "0%", backgroundColor: "black" },
        "setup"
      )
      .to(
        this.greenCols,
        {
          duration: 0,
          bottom: "auto",
          top: "100%",
          height: "82%",
          backgroundColor: "rgba(181, 201, 10, 1)",
        },
        "setup"
      )
      .to(this.elements.backgroundZones, { zIndex: 17 }, "setup")
      .addLabel("animateCols")
      .to(
        this.greenCols,
        { stagger: 0.1, duration: 0.7, top: "18%", ease: "power4.out" },
        "animateCols"
      )
      .to(
        this.greenCols,
        { stagger: 0.1, duration: 0.7, height: "17%", ease: "power4.out" },
        "-=0.7"
      )
      .to(
        this.blackCols,
        { stagger: 0.1, duration: 0.7, height: "45%", ease: "power4.out" },
        "-=0.7"
      )
      .addLabel("appears")
      .to(
        this.elements.section7_background,
        { duration: 1, autoAlpha: 0, ease: "power4.out" },
        "appears"
      )
      .to(
        this.elements.section7,
        { autoAlpha: 1, duration: 1, ease: "power4.inOut" },
        "appears"
      )
      .to(this.greenCols[1], { duration: 1, top: "24%" }, "appears")
      .to(this.blackCols[1], { duration: 1, height: "39%" }, "appears")
      .to(
        this.elements.section7_links,
        { duration: 0, pointerEvents: "all" },
        "appears"
      );

    return this.tlTransition;
  }
}
