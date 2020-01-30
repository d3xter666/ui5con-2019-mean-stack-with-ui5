# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.


## How to proceed.
Every step of the exercise is in a separate branch. You could either browse the branches or use the links in every step.

For each step, there's a list with the new/modified files which you need to alter.
You could see the increment between the current and the previous step.

### [Start Here](./00_webapp_template)


## Agenda

1. Bootstrap- initial project with dependencies.
2. Build a simple static server.
3. Build the frontend
    - Rename all JS files to TS
    - Switch to ES6 syntax
    - Layouts
        - Use mock data
    - Enable CRUD (mocked)
4. Backend + GraphQL
5. Integrate frontend with the backend
    - Create GraphQL model
    - Enable real CRUD
6. Build a self-containing app
    - Change static server to serve content from the /dist folder
    - Switch Service Worker caches to the /dist folder
7. Build a Progressive Web App with UI5
    - manifest
    - Service Worker
    - Install button
8. (Bonus) Run with Docker