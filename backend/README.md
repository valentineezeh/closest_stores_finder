# Jumbo-backend

This is the simple implementation of the backend functionality that handles the API features for the store locator

# Technologies Used
- Backend: Node/Express
- MongoDB
- Libaries: Es6, Babel-CLI, eslint, supertest, express, goeLib

## API Backend Endpoint
- https://jumbo-backend-test.herokuapp.com/

# Features
- Script that handle bulk insert of all stores in the json file into mongoDB
- User can fetch all stores vai an api call
- Upon clicking a particular store user can fetch 5 nearby stores to the store selected

| Endpoint                                             | Functionality                      |
| ---------------------------------------------------- | ---------------------------------- |
| GET /stores                                          | API to get all stores              |
| POST /closest/stores                                 | API to get 5 nearby stores         |

# To Install
- Download or clone
- Open terminal inside the root directory of clone folder and cd into the backend
- Type `npm install` to install all dependencies
- run `npm heroku-postbuild` to transpile and run build files
- `npm start` to run the build app in production environment
- npm run `dev` to run development environment
- `npm run test` to run the test suits on the app

## AUTHOR
[Valentine Ezeh](https://github.com/valentineezeh/closest_stores_finder)