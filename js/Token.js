class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }
  /**
   * Gets associated htmlToken.
   * @return  {element}   Html element associated with token object.
   */
  get htmlToken() {
      return document.getElementById(this.id);
  }

  /*It tells us how far left an element is relative to the nearest ancestor without a static position. You'll be using the offsetLeft property to tell how far, in pixels, the htmlToken has traveled from the left edge of the game board. This value is needed to calculate the new left position of the htmlToken after a left or right arrow key has been pressed.*/
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }


  drawHTMLToken(){
    const token = document.createElement("div");

    document.getElementById('game-board-underlay').appendChild(token);

    token.setAttribute('id', this.id); /*created a new div, then added it to an existing HTML element, adding an id, and a class to it, and a color*/
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  moveRight(columns) {
    if (this.columnLocation < columns - 1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }
  /**
   * Drops html token into targeted board space.
   * @param   {Object}   target - Targeted space for dropped token.
   * @param   {function} reset  - The reset function to call after the drop animation has completed.
   */
   drop(target, reset) {
     this.dropped = true;
        $(this.htmlToken).animate({
          top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
      }
}
