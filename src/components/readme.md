1. STORYBOOK USAGE

This project uses **Storybook** to build, test, and document individual components in isolation for a customizable print-on-demand (POD) T-shirt store built using **Lit** and **Vite**.



## How Storybook Was Integrated Into Workflow

1. HOW WE HAVE DONE THE STORYBOOK SETUP...
   Storybook was initialized using:

   ```bash
   npx storybook@latest init

   ```





2. HOW LIT AUTOMATICALLY HAVE DITECTED THE FILES AFTER INSTALLATION?

It automatically configured Storybook for a **Vite + Lit** project. We confirmed **.storybook/main.js** is correctly set to use the **@storybook/web-components-vite framework.**







3.  HOW THE SETUP IS STRUCTURED?
    All UI components **(TextEditor, imageUpload, ProductSelector, UserInputForm, viewer3D etc.)** are located in the src/components/ directory. Corresponding Storybook files are created with the **.stories.js** extension to demonstrate each component.



4.  HOW THE PREVIEW OF THE COMPONENT IS DONE IN STORYBOOK?
    Example: For **TextEditor component**, we created **TextEditor.stories.js** that renders and documents it with different **props/states.**

        The same process we have followed for the other components as well.






5.  HOW STORYBOOK HAVE PREVIEWED THE COMPONENTS?

During development, Storybook runs with:

> > npm run storybook

**This helped preview individual components, design variants, and test interactivity independent of the app’s logic.**






6. STYLE CONSISTENCY

Storybook ensured visual and behavioral consistency between all UI components — which was crucial, as maintaining consistency was a requirement in the assignment.










7. CAN IT BE COLLABORATIVE FRIENDLY?

If this project is handed to a designer, teammate, or tester, Storybook serves as an interactive component library/documentation — without needing to run the full app.





8. Theme Switching with Alt + Q — (Planned Feature)


**Status:**
 Feature planned, not fully implemented due to time constraints.


**Next Step:**
Complete the implementation by adding theme state and styling logic across components. Ensure Alt + Q updates the theme globally.