import { gsap } from "gsap";

export default class ElementManager {
  constructor() {
    this.section1 = document.querySelector(".section--1");
    this.section2 = document.querySelector(".section--2");
    this.section3 = document.querySelector(".section--3");
    this.section4 = document.querySelector(".section--4");
    this.section5 = document.querySelector(".section--4_content.secondLayer");
    this.section6 = document.querySelector(".section--4_content.thirdLayer");
    this.section7 = document.querySelector(".section--5");

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

    // Section 3 specific elements
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

    this.section4_title = document.querySelector(".section--4_title");
    this.section4_texts = document.querySelector(".section--4_content-right");
    this.section4_image1 = document.querySelector(".section--4_image-1");
    this.section4_image2 = document.querySelector(".section--4_image-2");
    this.section4_shadow = document.querySelector(".section--4_hidder_shadow");
    this.section4_hidder = document.querySelector(".section--4_hidder");

    this.section5_lines = document.querySelectorAll(
      ".section--4--2--left_content_line"
    );
    this.section5_titles = document.querySelectorAll(
      ".section--4--2--left_titles>h3"
    );
    this.section5_right = document.querySelector(".section--4--2--right");
    this.section5_floatImage = document.querySelector(".section--4_cursor");
    this.section5_images = document.querySelectorAll(".cursorImage");

    // this.section6_carrousel = document.querySelector(".thirdLayer_carrousel");
    // this.section6_mark = document.querySelector(".thirdLayer_mark");
    // this.section6_projects = Array.from(
    //   document.querySelectorAll(".project_container")
    // );
    // this.section6_buttons = document.querySelector(".thirdLayer_buttons");

    // this.section6_projectsWithElements = this.section6_projects.map(
    //   (project) => ({
    //     title: project.querySelector(".project_titles_title"),
    //     subtitle: project.querySelector(".project_titles_subtitle"),
    //     description: project.querySelector(".project_description"),
    //     imageContainer: project.querySelector(".project_image-container"),
    //     image: project.querySelector(".project_image-container>img"),
    //   })
    // );

    this.section7_background = document.querySelector(".section--5_background");
    for (let i = 1; i < 7; i++) {
      this[`section7_line${i}_2`] = document.querySelectorAll(
        `[class*="section--5_container_zone--${i}"]`
      );
    }
    this.section7_links = document.querySelector(
      ".section--5_container_zone--4 > a"
    );

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
}
