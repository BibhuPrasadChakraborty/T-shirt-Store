

This project is deployed using **Cloudflare Workers**

# T-Shirt Customization Store (Lit + Storybook)

A customizable T-shirt store built using **Lit** and styled with CSS. This is a **Single Page Application (SPA)** that allows users to explore product types (T-shirt, Hoodie, Full-Sleeve), preview the item, and visualize their designs.

## Features

- Fast and modular build with **Vite** and **Lit**
- Reusable UI components (Shirt, Hoodie, TextEditor, Preview, etc.)
- Preview system for shirt display and customization
- **Storybook** integration for isolated UI component testing
- Deployed using **GitHub + Cloudflare Pages**

---


##  Deployment (Cloudflare Pages)

### How It Was Deployed

1. **Pushed the project to GitHub**
2. **Connected the GitHub repo to Cloudflare Pages**
3. **Set build settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`

###  Live Link

 [https://tshirtstore.bibhuprasadchakraborty9366.workers.dev/](https://tshirtstore.bibhuprasadchakraborty9366.workers.dev/)

<!-- Deployment of the url may not work right now, but will definitely ge fixed in the future. -->

---

##  Storybook Integration

### Setup Process

- Initialized Storybook using:
  ```bash
  npx storybook init

### Created individual .stories.js files for each component 

###Ran Storybook locally using:

 "bash"

>> npm run storybook


### What It Does
Isolates each component (like TextEditor, T-Shirt, etc.) for independent testing

Allows visual preview and state testing

Ensures consistency between all components (as per project requirement)

### Note
This project was expected to support 3 different layout and color variations using styles from this Codepen, and enable switching using Alt + Q.
**This feature is currently under development and not fully implemented.**