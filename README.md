# React social-media website

## Summary

This repository is built using html/css, Javascript, Webpack and babel7, using SPA (React), SPA Routing and REST api.
Note that there has been no tests done, therefore the ./tests folder will be empty.

The focus of this application is to show all the techniques i've learned through class and show my understanding towards them.
Additionally i've utilized bootstrap's css to show my understanding of stylization, however i'm aware the course is not frontend focused.

This project creates a social media website, it's structured in which we have 4 react routes, using navbar. When navigated to Users you can see a list of users obtained from a GET request and by pressing their names you can check their displayed information in a different page, there's also a friendship request button however it isn't functional. Here you can create additional users using a POST request, I used React-Router-dom for the routing navigation. Note the searchbar will filter out the list based of name.

In Media we have something quite similar to users, however with different data, i also reversed the array so posts will display in a chronological order. pressing create post prompts the user to enter a message also using a POST request, and will push that data to the beginning of the array so the post is displayed first.

All users names are clickable, clicking on their names will bring up additional information about the user, while also displaying the media timeline. I attempted to filter the user posts to only show their posts, however i couldn't figure it out.

Also note that i have used babel7, to show my understanding of webpack and bundle.js and how they work with a project like this.

To get started start from the root folder and perform:

## Setup Instructions:

Starting from the root directory

### `npm install`

### `npm run dev OR yarn dev`

### `Open a browser and enter localhost:8080`

npm run dev / yarn dev will create a **bundle.js** file at the ./public folder
and starts a **single NodeJS instance serving both the frontend and backend** , at server port 8080.
The application will also reload using nodemon everytime a change has been made.
