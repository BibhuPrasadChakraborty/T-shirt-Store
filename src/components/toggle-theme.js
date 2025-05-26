import { LitElement, html, css } from 'lit';

const themes = [
  'neon',
  'pastel',
  'cyberpunk'
];

export class ThemeSwitcher extends LitElement {
  static properties = {
    theme: { type: String }
  };
  static styles = css`
  /* Neon Gradient Card Theme */
:host {
  display: block;
  background: linear-gradient(135deg, #0fffc1 0%, #7e0fff 100%);
  border-radius: 1.5rem;
  box-shadow: 0 0 32px #0fffc1, 0 0 64px #7e0fff;
  padding: 2rem;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  transition: background 0.5s;
}
h2 {
  margin-top: 0;
  font-size: 2rem;
  letter-spacing: 0.1em;
}
button {
  background: #fff;
  color: #7e0fff;
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 8px #0fffc1;
  transition: background 0.3s, color 0.3s;
}
button:hover {
  background: #7e0fff;
  color: #fff;
}

/* Pastel Glassmorphism Theme */
:host {
  display: block;
  background: rgba(255,255,255,0.25);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 2rem;
  color: #333;
  font-family: 'Poppins', sans-serif;
}
h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #a18cd1;
}
button {
  background: linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%);
  color: #333;
  border: none;
  border-radius: 1rem;
  padding: 0.75rem 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px #a6c1ee55;
  transition: background 0.3s, color 0.3s;
}
button:hover {
  background: #a18cd1;
  color: #fff;
}

/* Cyberpunk Terminal Theme */
:host {
  display: block;
  background: #18181b;
  border: 2px solid #00ffe7;
  border-radius: 1rem;
  box-shadow: 0 0 24px #00ffe7, 0 0 48px #ff00ea;
  padding: 2rem;
  color: #00ffe7;
  font-family: 'Fira Mono', monospace;
  letter-spacing: 0.05em;
}
h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #ff00ea;
  text-shadow: 0 0 8px #ff00ea;
}
button {
  background: #18181b;
  color: #00ffe7;
  border: 2px solid #ff00ea;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 8px #ff00ea;
  transition: background 0.3s, color 0.3s;
}
button:hover {
  background: #ff00ea;
  color: #18181b;
}
  `

  constructor() {
    super();
    this.theme = 'neon';
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this._onKeyDown);
    super.disconnectedCallback();
  }

  _onKeyDown(e) {
    if (e.altKey && e.key.toLowerCase() === 'q') {
      const idx = themes.indexOf(this.theme);
      this.theme = themes[(idx + 1) % themes.length];
    }
  }

  static get styles() {
    return [
      // Neon
      css`
        :host([theme="neon"]) { /* Neon styles from above */ }
        :host([theme="neon"]) h2 { /* ... */ }
        :host([theme="neon"]) button { /* ... */ }
        :host([theme="neon"]) button:hover { /* ... */ }
      `,
      // Pastel
      css`
        :host([theme="pastel"]) { /* Pastel styles from above */ }
        :host([theme="pastel"]) h2 { /* ... */ }
        :host([theme="pastel"]) button { /* ... */ }
        :host([theme="pastel"]) button:hover { /* ... */ }
      `,
      // Cyberpunk
      css`
        :host([theme="cyberpunk"]) { /* Cyberpunk styles from above */ }
        :host([theme="cyberpunk"]) h2 { /* ... */ }
        :host([theme="cyberpunk"]) button { /* ... */ }
        :host([theme="cyberpunk"]) button:hover { /* ... */ }
      `
    ];
  }

  render() {
    return html`
      <h2>Theme: ${this.theme}</h2>
      <button @click=${() => this._onKeyDown({altKey:true, key:'q'})}>Switch Theme (Alt+Q)</button>
      <slot></slot>
    `;
  }

  updated(changed) {
    this.setAttribute('theme', this.theme);
  }
}

customElements.define('theme-switcher', ThemeSwitcher);