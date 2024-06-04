import { gsap } from "gsap";
import { splitWords } from "../../utils/splitWords";

export default class section5Animations {
  constructor(elementManager) {
    this.elements = elementManager;
    this.cursorPosition = { x: null, y: null };

    this.currentSection = false;
    // this.getElements();
    this.imageWidth = this.elements.section5_floatImage.offsetWidth;
    this.imageHeight = this.elements.section5_floatImage.offsetHeight;
    this.hoverEffect();
  }

  // getElements() {
  // Zone à faire disparaitre
  // this.title = document.querySelector(".section--4_title");
  // this.texts = document.querySelector(".section--4_content-right");
  // this.image1 = document.querySelector(".section--4_image-1");
  // this.image2 = document.querySelector(".section--4_image-2");
  // this.hidder = document.querySelector(".section--4_hidder");
  // Zone 4_2
  // this.section5 = document.querySelector(".section--4_content.secondLayer");
  // this.section5_titles = document.querySelectorAll(
  //   ".section--4--2--left_content_line"
  // );
  // this.section5_titles = document.querySelectorAll(
  //   ".section--4--2--left_titles>h3"
  // );
  // this.blocks = document.querySelectorAll(
  //   ".section--4--2--left_content_block"
  // );
  // this.section5_right = document.querySelector(".section--4--2--right");
  // this.section5_floatImage = document.querySelector(".section--4_cursor");
  // this.imageWidth = this.floatImage.offsetWidth;
  // this.imageHeight = this.floatImage.offsetHeight;
  // this.section5_images = document.querySelectorAll(".cursorImage");
  // }

  transition() {
    this.tl = gsap.timeline({ paused: true });

    this.tl
      .addLabel("start")
      .to(
        this.elements.section4_title,
        { duration: 1.5, opacity: 0, ease: "power4.inOut" },
        "start"
      )
      .to(
        this.elements.section4_texts,
        { duration: 1.5, opacity: 0, ease: "power4.inOut" },
        "start"
      )
      .addLabel("imageThrown", "-=1")
      .to(
        this.elements.section4_image1,
        {
          duration: 1,
          x: "100%",
          rotate: "0deg",
          ease: "power4.in",
        },
        "imageThrown"
      )
      .to(
        this.elements.section4_image2,
        {
          duration: 1,
          x: "100%",
          rotate: "0deg",
          ease: "power4.in",
        },
        "imageThrown"
      )
      .to(
        this.elements.section4_hidder,
        { duration: 1.5, width: "70%", ease: "power4.inOut" },
        "-=0.5"
      )
      .addLabel("4_2Appears", "-=0.6")
      .to(
        this.elements.section5_titles,
        { duration: 0.5, stagger: 0.2, y: "0%", autoAlpha: 1 },
        "4_2Appears"
      )
      .to(
        this.elements.section5_lines,
        {
          duration: 2,
          stagger: 0.1,
          x: "0%",
          ease: "power4.inOut",
        },
        "-=1"
      )
      .to(
        document.querySelectorAll(".block_text"),
        {
          duration: 0.5,
          stagger: 0.06,
          y: "0%",
          autoAlpha: 1,
          ease: "power4.inOut",
        },
        "-=1"
      )
      .to(
        this.elements.section5_right,
        { duration: 0.5, autoAlpha: 1 },
        "-=0.7"
      )
      .to(this.elements.section5, {
        pointerEvents: "all",
        onComplete: () => {
          this.currentSection = true;
        },
      });

    return this.tl;
  }

  updateUI() {
    // Function to handle UI updates based on targetId
    const tlHover = gsap.timeline();
    tlHover.to(this.elements.section5_floatImage, {
      duration: 0.5,
      x: this.cursorPosition.x - this.imageWidth / 2,
      y: this.cursorPosition.y - this.imageHeight / 2,
    });
    if (this.targetId) {
      this.elements.section5_images.forEach((img) => {
        const tlImage = gsap.timeline();
        if (img.dataset.id === this.targetId) {
          tlImage.to(img, { duration: 0.5, autoAlpha: 1 });
        } else {
          tlImage.to(img, { duration: 0.5, autoAlpha: 0 });
        }
      });
    } else {
      const tlHover = gsap.timeline();
      tlHover.to(this.elements.section5_images, {
        duration: 0.5,
        autoAlpha: 0,
      });
    }
  }

  handleMouseMove = (e) => {
    if (!this.currentSection) return;
    if (!this.isThrottled) {
      this.cursorPosition.x = e.clientX;
      this.cursorPosition.y = e.clientY;
      this.targetId = e.target.closest(
        ".section--4--2--left_content_block"
      )?.dataset.blockid;

      // console.log(this.targetId);
      this.updateUI();
      this.isThrottled = true;
      setTimeout(() => {
        this.isThrottled = false;
      }, this.throttleDuration);
    }
  };

  hoverEffect() {
    this.isThrottled = false;
    this.throttleDuration = 100; // Adjust as needed
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  // hoverEffect() {
  //   let isThrottled = false;

  //   window.addEventListener("mousemove", (e) => {
  //     if (!this.currentSection) return;
  //     if (!isThrottled) {
  //       this.cursorPosition.x = e.clientX;
  //       this.cursorPosition.y = e.clientY;

  //       this.targetId = e.target.closest(
  //         ".section--4--2--left_content_block"
  //       )?.dataset.blockid;

  //       console.log(this.targetId);
  //       if (this.targetId) {
  //         const tlHover = gsap.timeline();
  //         tlHover.to(this.floatImage, {
  //           duration: 0.5,
  //           autoAlpha: 1,
  //           x: this.cursorPosition.x - this.imageWidth / 2,
  //           y: this.cursorPosition.y - this.imageHeight / 2,
  //         });
  //         section5_images.forEach((img) => {
  //           if (img.dataset.id === this.targetId) {
  //             const tlimage = gsap.timeline();
  //             tlimage.to(img, { duration: 0.5, autoAlpha: 1 });
  //           } else {
  //             const tlimage2 = gsap.timeline();
  //             tlimage2.to(img, { duration: 0.5, autoAlpha: 0 });
  //           }
  //         });
  //       }
  //       if (!this.targetId) {
  //         const tlHover = gsap.timeline();
  //         tlHover.to(this.floatImage, {
  //           duration: 0.5,
  //           autoAlpha: 0,
  //         });
  //       }

  //       isThrottled = true;
  //       setTimeout(() => {
  //         isThrottled = false;
  //       }, 100);
  //     }
  //   });
  // }

  // hoverEffect() {
  //   this.tlHover = gsap.timeline();

  //   // if (this.currentSection === 4)
  //   let imgCenter;
  //   let hovering = false;
  //   this.prevTarget = null;

  //   window.addEventListener("mousemove", (e) => {
  //     this.target = e.target.closest(".section--4--2--left_content_block");
  //     this.cursorPosition.x = e.clientX;
  //     this.cursorPosition.y = e.clientY;

  //     // this.targetId = this.target.dataset.blockId;

  //     // Si la cible est le block, on récupère son image
  //     if (this.target) {
  //       this.currImg = this.target.querySelector(".block_background_container");

  //       // On récupère le centre de l'image et calcul la différence entre le centre et le curseur.
  //       imgCenter =
  //         this.target.getBoundingClientRect().x +
  //         this.target.getBoundingClientRect().width / 2;
  //       let deltaX = this.cursorPosition.x - imgCenter;
  //       // console.log(deltaX);
  //       // On déplace l'image pour qu'elle se situe sous le curseur
  //       this.currImg.style.transform = `translateX(${deltaX}px)`;

  //       if (!hovering) {
  //         this.tlHover.to(this.currImg, { duration: 0.5, autoAlpha: 1 });
  //         hovering = true;
  //       }
  //     } else {
  //       if (hovering) {
  //         this.tlHover.reverse();
  //         hovering = false;
  //       }
  //     }

  //     // if (!hovering) {
  //     //   this.tlHover.to(this.currImg, { duration: 0.5, autoAlpha: 1 });
  //     //   hovering = true;
  //     // } else {
  //     //   if (hovering) {
  //     //     this.tlHover.reverse();
  //     //     hovering = false;
  //     //   }
  //     // }
  //     console.log(hovering);
  //     // soustraire emplacement du curseur avec celui du centre du rectBound. Et plus la valeur augmente, plus y a du transform

  //     // 3) Bouge la div, en fonction de l'emplacement de la souris, dans la target.
  //     //   3.1) Récupérer centre

  //     // this.cursor.style.transform = `translate(${
  //     //   this.cursorPosition.x - 15
  //     // }px, ${this.cursorPosition.y - 15}px)`;
  //   });
  // }
}
