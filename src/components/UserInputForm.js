import { LitElement, html, css } from 'lit';

class UserInputForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 1rem;
    }

    label {
      display: block;
      margin: 0.5rem 0 0.2rem;
    }

    input, select {
      width: 100%;
      padding: 0.4rem;
      margin-bottom: 0.5rem;
    }
  `;

  render() {
    return html`
      <label for="height">Height (cm)</label>
      <input id="height" type="number" value="180" />

      <label for="weight">Weight (kg)</label>
      <input id="weight" type="number" value="80" />

      <label for="build">Build</label>
      <select id="build">
        <option>lean</option>
        <option>reg</option>
        <option selected>athletic</option>
        <option>big</option>
      </select>
    `;
  }
}

customElements.define('user-input-form', UserInputForm);
