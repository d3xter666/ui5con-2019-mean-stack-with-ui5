# “MEAN Stack”.replace(“A”, “OpenUI5”)
  
In the UI5 world there is a belief that UI5 is not to be used out of the SAP world. Frankly, the reality is quite different.
In our session we will show you how you can use UI5 “out of the box” and easily integrate our framework into any hype or stack.
We’ll build a modern full stack App from scratch, using OpenUI5 as frontend layer.

## Steps

Dockerize the app.

We'd dockerize the application by building a Docker image.

Then we'll create a MongoDB container and run both containers (mongodb + app) within the same network. 

#### Modified Files in this step


- :new: [``` Dockerfile ```](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/14_pwa_make_app_installable...15_BONUS_Dockerize_the_app#diff-3254677a7917c6c01f55212f86c57fbf)


[See Full Comparison](https://github.com/d3xter666/ui5con-2019-mean-stack-with-ui5/compare/14_pwa_make_app_installable...15_BONUS_Dockerize_the_app)


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

#### 4) Run the App image
```bash
docker run -p 8080:8080 -d --name ui5-full-stack-app --network ui5con-network --ip 172.20.0.27 --env MONGO=mongodb://172.20.0.22:27017/local ui5con/ui5-full-stack
```
