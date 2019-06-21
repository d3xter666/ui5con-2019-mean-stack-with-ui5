# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that IU5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.


## Agenda

1. Bootstrap- initial project with dependencies. Describe needed packages
2. Build a simple static server
3. Build the frontend
    - Split into steps
    - Rename all JS files to TS
    - Layouts
        - Use mock data
    - Enable CRUD (mocked)
4. Backend + GraphQL
5. Integrate frontend with the backend
    - Create GraphQL library
    - Enable real CRUD
6. Build a self containing app
    - Change static server to serve content from the /dist folder
    - Switch Service Worker caches to the /dist folder + Component-preload
7. Build a Progressive Web App with UI5
    - manifest
    - Service Worker
    - Install button
8. (Bonus) Run with Docker

## Run with Docker

#### 1) Build an image
```bash
docker build -t ui5con/ui5-full-stack .
```

#### 2) Create a network
```bash
docker network create -d bridge --subnet=172.20.0.0/16 ui5con-network
```

#### 3) Create a mongo container
```bash
docker run -d -p 27017:27017 --name ui5-mongodb --network ui5con-network --ip 172.20.0.22 mongo:3.4
```

#### 4) Run the image
```bash
docker run -p 8080:8080 -d --name ui5-full-stack-app --network ui5con-network --ip 172.20.0.27 --env MONGO=mongodb://172.20.0.22:27017/local ui5con/ui5-full-stack
```
