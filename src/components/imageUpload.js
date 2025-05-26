import { LitElement, html, css } from 'lit';

class ImageUpload extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 5px dashed #aaa;
      background-color:rgb(201, 205, 214);
      padding: 1rem;
      font-family: sans-serif;
      text-align: center;
    }

  `;

  render() {
    return html`
      <p>Upload Image (Drag & Drop or File Picker)</p>
      <input type="file" accept="image/*"/>
    `;
  }
}

customElements.define('image-upload', ImageUpload);
