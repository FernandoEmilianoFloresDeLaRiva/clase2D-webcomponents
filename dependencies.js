import { CustomBody } from "./src/pages/app.js";
import { CustomCard } from "./src/components/card.js";
import { ContainerCards } from "./src/components/container.js";

window.customElements.define("custom-body", CustomBody)
window.customElements.define("card-container", ContainerCards)
window.customElements.define("custom-card", CustomCard)
