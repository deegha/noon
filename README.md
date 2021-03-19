
#### Technologies used

##### Front end
- Next js with type scripts
- scss for styling

##### backend
- firebase cloud function with type scripts
- check in the /functions folder for the clode functions
- these functions are hosted in my firebase, so you do not need to run these locally.

#### How to install

##### Prerequires
- nvm (so you can test the app in the same node version, which will reduce any technical dificalites to get the app started)
- node

##### Setting up
- clone the project
- run `nvm use` to get use the specific node verstion that I have used. If you do not have this node version, terminal vill show you a message to install the specific version

> recomended way

- run `yarn install` to install the dependancies
- run `yarn dev` to run the project in localhost port 3000

> you also can use npm

- run `npm install` to install the dependancies
- run `npm run build` to build the project
- run `npm start` to start the project in localhost port 3000

#### Troubleshooting
- If you are facing node sass issue, make sure you are running in node v12.16.1 (npm v6.13.4)
- If you must run the backend locally, (you do not have to do this as this is already hosted and the frontend is using the specific base URL)
  - setup firebase emulator
  - navigate to functions folder `cd functions`
  - run `npm run build` to build the project
  - run `firebase serve` to start the project
  - change the base url in the services/backend-client.ts

#### What could have done more in order for more scalability
- I could have used Redux instead of the context to have a more maintanable state. that will allow you to have the whole logic in one place. but for this very small project that will be an overkill
- I usually love to use a seperate folder to hold the views of pages. That allows me to put more logics on the page and use the views only for presentational. And that way when the views are getting more complex I could have the specific styles for that view inside its own folder. But in this project I didnt not have much styles or complex views.
- In a prodcution app, I would have seperate services for each domain area. But in this case we only have two backend calls, so in the interest of keeping things simple and readable I wrote a common service module.

#### FAQ
- Why firebase cloude functions as backend :
  - Easy to host and I could use firestore as the database



