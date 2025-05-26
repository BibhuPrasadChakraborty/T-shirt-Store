// import { LitElement, css, html } from 'lit'
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'

// export class MyElement extends LitElement {
//   static get properties() {
//     return {
//       /**
//        * Copy for the read the docs hint.
//        */
//       docsHint: { type: String },

//       /**
//        * The number of times the button has been clicked.
//        */
//       count: { type: Number },
//     }
//   }

//   constructor() {
//     super()
//     this.docsHint = 'Click on the Vite and Lit logos to learn more'
//     this.count = 0
//   }

//   render() {
//     return html`
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src=${viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://lit.dev" target="_blank">
//           <img src=${litLogo} class="logo lit" alt="Lit logo" />
//         </a>
//       </div>
//       <slot></slot>
//       <div class="card">
//         <button @click=${this._onClick} part="button">
//           count is ${this.count}
//         </button>
//       </div>
//       <p class="read-the-docs">${this.docsHint}</p>
//     `
//   }

//   _onClick() {
//     this.count++
//   }

//   static get styles() {
//     return css`
//       :host {
//         max-width: 1280px;
//         margin: 0 auto;
//         padding: 2rem;
//         text-align: center;
//       }

//       .logo {
//         height: 6em;
//         padding: 1.5em;
//         will-change: filter;
//         transition: filter 300ms;
//       }
//       .logo:hover {
//         filter: drop-shadow(0 0 2em #646cffaa);
//       }
//       .logo.lit:hover {
//         filter: drop-shadow(0 0 2em #325cffaa);
//       }

//       .card {
//         padding: 2em;
//       }

//       .read-the-docs {
//         color: #888;
//       }

//       a {
//         font-weight: 500;
//         color: #646cff;
//         text-decoration: inherit;
//       }
//       a:hover {
//         color: #535bf2;
//       }

//       ::slotted(h1) {
//         font-size: 3.2em;
//         line-height: 1.1;
//       }

//       button {
//         border-radius: 8px;
//         border: 1px solid transparent;
//         padding: 0.6em 1.2em;
//         font-size: 1em;
//         font-weight: 500;
//         font-family: inherit;
//         background-color: #1a1a1a;
//         cursor: pointer;
//         transition: border-color 0.25s;
//       }
//       button:hover {
//         border-color: #646cff;
//       }
//       button:focus,
//       button:focus-visible {
//         outline: 4px auto -webkit-focus-ring-color;
//       }

//       @media (prefers-color-scheme: light) {
//         a:hover {
//           color: #747bff;
//         }
//         button {
//           background-color: #f9f9f9;
//         }
//       }
//     `
//   }
// }

// window.customElements.define('my-element', MyElement)
// import { LitElement, html, css } from "lit";

// export class MyElement extends LitElement {
//   static styles = css`
//     :host {
//       display: block;
//       padding: 1rem;
//       color: #333;
//       font-family: sans-serif;
//     }

//     h1 {
//       font-size: 2rem;
//       color: #0070f3;
//     }
//     .name {
//       color: red;
//       font-size: 2rem;
//     }
//   `;

//   static properties = {
//     name: { type: String },
//   };

//   constructor() {
//     super();
//     this.name = "World";
//     this.myname = "Bibhu";
//   }

//   render() {
//     return html`
//       <h2 class="name">My name is ${this.myname}</h2>
//       <h1>Hello, ${this.name}!</h1>
//       <p>Welcome to Lit + Vite!</p>
//     `;
//   }
// }

// customElements.define("my-element", MyElement);

import { LitElement, html, css } from "lit";
import "./components/imageUpload.js";
import "./components/viewer3D.js";
import "./components/UserInputForm.js";
import "./components/ProductSelector.js";
import "./components/TextEditor.js";
import "./assets/tshirt.js";

// import "./components/toggle-theme.js";

class App extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      padding: 1rem;
    }
    .container {
      display: grid;
      grid-template-areas:
        "menu menu menu"
        "image viewer form"
        "text text text";
      grid-template-columns: 1fr 2fr 1fr;
      gap: 1rem;
    }
    .menu {
      grid-area: menu;
    }
    .image {
      grid-area: image;
    }
    .viewer {
      grid-area: viewer;
    }
    .form {
      grid-area: form;
    }
    .text {
      grid-area: text;
    }
    .container {
    }
  `;

  render() {
    return html`
    <div>
    <h1>3D T-Shirt Customizer</h1>
    
    <theme-switcher></theme-switcher>
    </div>

        <div class="container">
          <div class="menu">
            <product-selector></product-selector>
          </div>
          <div class="image"><image-upload></image-upload></div>
          <div class="viewer"><viewer-3d></viewer-3d></div>
          <div class="form"><user-input-form></user-input-form></div>
          <div class="text"><text-editor></text-editor></div></div>
    `;
  }
}

window.customElements.define("my-app", App);
