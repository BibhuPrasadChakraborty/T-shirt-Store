import { LitElement, html, css } from "lit";


class RenderTshirt extends LitElement {
  static styles = css`
  
    .tshirt {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:rgb(177, 239, 253);
    }
  `;

  render() {
    return html`
      <div class="tshirt">
        <img src="" alt="plain white t-shirt" />
      </div>
    `;
  }
}

customElements.define("render-tshirt", RenderTshirt);
