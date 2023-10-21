export default class Cursor {
  constructor() {
    this.cursorPosition = { x: 0, y: 0 };
    this.cursor = document.querySelector(".cursor");

    this.getCursorPosition();
  }

  getCursorPosition() {
    window.addEventListener("mousemove", (e) => {
      this.cursorPosition.x = e.clientX;
      this.cursorPosition.y = e.clientY + window.scrollY;
      this.cursor.style.transform = `translate(${
        this.cursorPosition.x - 15
      }px, ${this.cursorPosition.y - 15}px)`;
    });
  }
}
