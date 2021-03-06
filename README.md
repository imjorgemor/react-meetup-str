# REACT MEETUPS APP

![cover](https://github.com/imjorgemor/react-meetup-str/blob/main/public/GITHUB_COVER.png)

### Intro

The purpose of this project is develop a react single page application with the latest libraries like Redux Toolkit(v.18.2) for state management or Playwright as an end-2-end testing platform. It has been fun to learn these tools while developing this project.

* [Built With](#built-with)
* [Features](#features)
* [Setup](#setup)
* [Available scripts](#available-scripts)
* [Contact](#contact)


## Built with

This project has been built with:
* [Create React App](https://github.com/facebook/create-react-app) 
* The New Redux Toolkit library to manage a global app state [ReduxToolKit](https://redux-toolkit.js.org/)
* [Playwright](https://playwright.dev/) for end-2-end testing
* CSS Modules for styling
* [React-routerV6](https://reactrouter.com/docs/en/v6/getting-started/overview) for managing app routes.


## Features

### Add favorite meetup

Each meetup card contains a button to add or remove from favorites. Once the button is clicked, the meetup is added to MyFavorites page and the favorites counter is increased by one. After being added the caption of the button changes to "Remove from favorites", and then on click again it executes the inverse function described and the caption change to "Add favorite".

For this purpose instead of using the react hook useContext I preferred to use the Redux Toolkit library to manage a global state accesible from any component/page of this application. This library simplifies all the boilerplate and store configuration of the traditional Redux pattern while enables a precise control of the state and its actions.

### Header show/hide on scroll

For this feature I have developed the useScroll custom hook which return the position and direction of the scrollY. The header component obtains these two states and show/hide according to ternary application of css module classes on scroll up or down.

### Routing for SEO purposes

All the appRoutes are configured in the following directory "src/router/AppRouter.js". Each page/view has their own route and if the user introduces a route that does not exist in the application it automatically redirects to the home page.

### End2end testing with Playwright

The react testing scenario right now is somehow confusing. While Jest was transferred on May 2022 to the OpenJS foundation needing a lot of external libraries to test custom hooks and reducers, Enzyme has no official adaptation or release from React v 17, end2end testing platforms catched on for frontend developing. To this regard, Microsoft has developed Playwright, a fun and easy library to test modern websites. 

The tests run in this application cover mainly render tests and the main feature of adding and removing meetups to the "app-fav-counter".


## Setup

Get a local copy up and run these following simple steps.
```sh
git clone https://github.com/imjorgemor/react-meetup-str.git
```

Install NPM packages
```sh
npm install
```

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run test`

Launches the Playwright test runner in the interactive watch mode. Please note that the test will only run if the app is running in development mode.
To see the test results on the browser run the following script:

### `npx playwright show-report`


## Contact

Email me at: jorge-mor@outlook.es 

Or visit my [Linkedin](https://www.linkedin.com/in/jorge-mor-reactdev/).

Do not forget to smash the like button in my last article [about NFTs in the fashion business](https://www.linkedin.com/pulse/high-n-rise-meta-fashion-90s-one-jorge-mor/)