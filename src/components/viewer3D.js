import { LitElement, html, css } from 'lit';

class Viewer3D extends LitElement {
  static styles = css`
    .viewer {
      width: 100%;
      height: 300px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      border: 1px solid #ccc;
    }
  `;

  render() {
    return html`<div class="viewer">3D T-Shirt Viewer (Placeholder)</div>`;
  }
}

customElements.define('viewer-3d', Viewer3D);
