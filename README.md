# Rentalator Web Application

Front end for the "rentalated" application

## Cloudformation Commands

Create stack
```
aws cloudformation create-stack --stack-name rentalated-front-end --template-body file://cloudFormationTemplates/s3SiteHosting.yml
```

Check stack
```
aws cloudformation describe-stacks --stack-name rentalated-front-end
```

Update stack
```
aws cloudformation update-stack --stack-name rentalated-front-end --template-body file://cloudFormationTemplates/s3SiteHosting.yml
```

## Development Notes

> Updating any of the values in your .env file requires a full restart of the app

Requires a test server running on `localhost:5000`. The backends can be found here:

* Backends: https://github.com/gschool?q=rentalated
* API Documentation: https://documenter.getpostman.com/view/250019/S1Zw8BDS?version=latest

To setup:
``` 
npm install
cp .env.example .env.development  # CHECK THIS FILE BEFORE RUNNING SERVER
npm start
```

To run tests:
``` 
cp .env.development .env.test
npm test
```

## Service API Requirements

To view request and response formats, visit the link below.
Link: https://documenter.getpostman.com/view/250019/S1Zw8BDS?version=latest

Summary:
``` 
GET     /api/v1/properties
POST    /api/v1/properties
GET     /api/v1/properties/:id
PUT     /api/v1/properties/:id

GET     /api/v1/listings
POST    /api/v1/listings
GET     /api/v1/listings/:id
PUT     /api/v1/listings/:id

POST    /api/v1/signup     
POST    /api/v1/login
POST    /api/v1/token
```

api/register >> accounts service >> token service >> client response

----

# Create React App Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


