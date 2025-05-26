import { LitElement, html, css } from 'lit';

class TextEditor extends LitElement {
  static styles = css`
    textarea {
      width: 100%;
      height: 100px;
      font-size: 1rem;
      padding: 0.5rem;
      resize: none;
    }
  `;

  render() {
    return html`
      <textarea maxlength="150" placeholder="Enter text for your design..."></textarea>
    `;
  }
}

customElements.define('text-editor', TextEditor);
