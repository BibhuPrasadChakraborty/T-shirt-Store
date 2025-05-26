import { LitElement, html, css } from "lit";
import "../assets/tshirt.js";
class ProductSelector extends LitElement {
  static styles = css`
    .menu {
      display: flex;
      gap: 1rem;
      justify-content: center;
      // border : 1px solid #ccc;
    }
    button {
      padding: 0.5rem 1rem;
      border: none;
      background: blue;
      cursor: pointer;
      font-size: 1rem;
      color: white;
      border-radius: 5px;
      transition: background 0.3s;
    }
    button:hover {
      background: darkblue;
      transform: scale(1.05);
      trasition: all 0.3s;
    }
    button.active {
      background: #333;
      color: white;
    }
  `;

  static properties = {
    selected: { type: String },
  };

  constructor() {
    super();
    this.selected = "tshirt";
  }

  selectItem(type) {
    this.selected = type;
    this.dispatchEvent(
      new CustomEvent("product-selected", {
        detail: { type },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const items = ["tshirt", "hoodie", "sleevie", "cap"];
    return html`
      <div class="menu">
        ${items.map(
          (item) => html`
            <button
              class="${this.selected === item ? "active" : "goodbye"}"
              @click=${() =>
                this.selectItem(alert(`${item} selected`))}
              }
            >
              ${item}
            </button>
          `
        )}
      </div>
    `;
  }
}

customElements.define("product-selector", ProductSelector);
