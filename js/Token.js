class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }
  /**
   * Gets associated htmlToken.
   * @return  {element}   Html element associated with token object.
   */
  get htmlToken() {
      return document.getElementById(this.id);
  }
  


  drawHTMLToken(){
    const token = document.createElement("div");

    document.getElementById('game-board-underlay').appendChild(token);

    token.setAttribute('id', this.id); /*created a new div, then added it to an existing HTML element, adding an id, and a class to it, and a color*/
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }
}
