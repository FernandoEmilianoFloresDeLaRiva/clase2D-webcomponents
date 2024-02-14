export class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.painted = false;
    this.shadow = this.attachShadow({ mode: "open" });
    this.cardName = this.getAttribute("cardName");
    this.cardImg = this.getAttribute("cardImg");
  }
  connectedCallback() {
    const cardContainer = document.createElement("article");
    const imgCard = document.createElement("img");
    imgCard.src = this.getAttribute("cardImg");
    const nameCard = document.createElement("span");
    nameCard.innerHTML = this.getAttribute("cardName");
    cardContainer.appendChild(imgCard);
    cardContainer.appendChild(nameCard);
    this.shadow.appendChild(cardContainer);
    this.painted = true;
    console.log("card creada");
  }

  disconnectedCallback() {
    this.painted = false;
  }

  attributeChangedCallback(name, oldName, newName) {
    console.log(`El atributo ${name} cambio de ${oldName} a ${newName}`);
  }

  static get observedAttributes() {
    return ["cardName", "cardImg"];
  }
}
