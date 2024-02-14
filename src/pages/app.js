export class CustomBody extends HTMLElement {
  constructor() {
    super();
    this.painted = false;
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const divBody = document.createElement("div");
    const cardContainer = document.createElement("card-container");
    divBody.appendChild(cardContainer);
    
    this.shadow.appendChild(divBody);
    this.painted = true;
    console.log("Componente creado index");
  }

  disconnectedCallback() {
    this.painted = false;
  }
}
