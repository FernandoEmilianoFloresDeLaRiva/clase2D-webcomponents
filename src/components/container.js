export class ContainerCards extends HTMLElement {
  constructor() {
    super();
    this.painted = false;
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("container creado");
    const divBody = document.createElement("div");
    for (let i = 0; i < 4; i++) {
      const customCard = document.createElement("custom-card");
      customCard.setAttribute("cardName", `Hola usuario num. ${i + 1}`);
      customCard.setAttribute(
        "cardImg",
        "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      );
      divBody.appendChild(customCard);
    }
    this.shadow.appendChild(divBody)
    this.painted = true;
  }

  disconnectedCallback() {
    this.painted = false;
  }
}
