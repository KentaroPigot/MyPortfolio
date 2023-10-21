import { gsap } from "gsap";

export default class Section4_3Animations {
  constructor() {
    this.sliderNumber = 0;
    this.getElements();

    this.clickButton();
    this.hoverHandler();
    this.isClickable = true;
    this.isAnimating = false;
  }

  getElements() {
    this.section4_3 = document.querySelector(".section--4_content.thirdLayer");
    this.carrousel = document.querySelector(".thirdLayer_carrousel");
    this.mark = document.querySelector(".thirdLayer_mark");
    this.projects = Array.from(document.querySelectorAll(".project_container"));
    this.buttons = document.querySelector(".thirdLayer_buttons");

    this.projectsWithElements = this.projects.map((project) => ({
      title: project.querySelector(".project_titles_title"),
      subtitle: project.querySelector(".project_titles_subtitle"),
      description: project.querySelector(".project_description"),
      imageContainer: project.querySelector(".project_image-container"),
      image: project.querySelector(".project_image-container>img"),
    }));
  }

  // Add your transition and other methods here

  clickButton() {
    this.sliderTl = gsap.timeline();
    this.section4_3.addEventListener("click", (e) => {
      if (!e.target.classList.contains("button") || this.isAnimating) return;

      this.isAnimating = true;
      const direction = e.target.dataset.direction === "up" ? 1 : -1;
      this.sliderNumber += direction;

      // if (this.sliderNumber < 0) this.sliderNumber = 0;
      // if (this.sliderNumber >= this.projects.length - 1)
      //   this.sliderNumber = this.projects.length - 2;

      const offset = this.sliderNumber * 280;
      this.currentProject = this.projects[this.sliderNumber + 1];

      // console.log(this.sliderNumber + 1);

      this.currentProjectElements =
        this.projectsWithElements[this.sliderNumber + 1];

      this.projects.forEach((prj) => {
        prj.classList.remove("active");
        prj.classList.remove("enableHover");
      });
      this.currentProject.classList.add("active");
      this.currentProject.classList.add("enableHover");

      // this.projects.forEach((prj) => {
      //   this.sliderTl.to(prj, {duration: 1, x:})
      // })

      this.sliderTl.addLabel("start").to(
        this.carrousel,
        {
          duration: 1,
          y: offset,
          onComplete: () => {
            this.isAnimating = false;
          },
        },
        "start"
      );
      // .to(
      //   this.currentProjectElements.imageContainer,
      //   {
      //     duration: 1,
      //     minWidth: "300px",
      //     maxHeight: "300px",
      //   },
      //   "start"
      // )
      // .to(
      //   this.currentProjectElements.image,
      //   {
      //     duration: 1,
      //     height: "200%",
      //     width: "200%",
      //   },
      //   "start"
      // )
      // .to(
      //   this.currentProjectElements.title,

      //   {
      //     duration: 1,
      //     autoAlpha: 1,
      //     fontSize: "65px",
      //   },
      //   "start"
      // )
      // .to(
      //   this.currentProjectElements.subtitle,

      //   {
      //     duration: 1,
      //     autoAlpha: 1,
      //     fontSize: "30px",
      //   },
      //   "start"
      // );
    });
  }

  hoverHandler = () => {
    document.addEventListener("click", (e) => {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const target = e.target.closest(".project_container");
      if (!target) return;
      const targetProject = Number(target.dataset.projectid) - 1;
      const project = this.projectsWithElements[targetProject];

      if (this.isClickable) {
        this.isClickable = false;
        this.expandAnimation(project).play();
      } else {
        this.isClickable = true;
        this.shrinkAnimation(project).play();
      }
    });
  };

  expandAnimation = (project) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(project.imageContainer, {
      duration: 0.5,
      minWidth: "50vw",
      maxHeight: "350px",
      ease: "power4.inOut",
    });

    tl.to(project.description, {
      duration: 0.5,
      width: "450px",
      paddingLeft: "35px",
      paddingRight: "35px",
      opacity: 1,
      ease: "power4.inOut",
    });

    tl.to(project.description.querySelector("p"), {
      duration: 0.5,
      opacity: 1,
    });

    tl.to(this.buttons, {
      duration: 0.5,
      autoAlpha: 0,
      pointerEvents: "none",
      onComplete: () => (this.isAnimating = false),
    });

    return tl;
  };

  shrinkAnimation = (project) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(project.description.querySelector("p"), {
      duration: 1,
      autoAlpha: 0,
    });

    tl.to(project.description.querySelector("p"), {
      duration: 0,
      fontSize: "0px",
    });

    tl.addLabel("shrink");

    tl.to(project.description, {
      duration: 2,
      width: "0px",
      paddingLeft: "8px",
      paddingRight: "8px",
      opacity: 0,
      ease: "power4.inOut",
    });

    tl.to(
      project.imageContainer,
      {
        duration: 2,
        minWidth: "300px",
        maxHeight: "300px",
        ease: "power4.inOut",
      },
      "shrink"
    );

    tl.to(this.buttons, {
      duration: 1,
      autoAlpha: 1,
      pointerEvents: "all",
      onComplete: () => (this.isAnimating = false),
    });

    return tl;
  };
}
