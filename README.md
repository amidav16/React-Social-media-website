# React social-media website

## Summary

This repository is built using html/css, Javascript, Webpack and babel7, using SPA (React), SPA Routing and REST api.
Note that there has been no tests done, therefore the ./tests folder will be empty.

The focus of this application is to show all the techniques i've learned through class and show my understanding towards them.
Additionally i've utilized bootstrap's css to show my understanding of stylization, however i'm aware the course is not frontend focused.

This project creates a social media website, it's structured in which we have 4 react routes, using navbar. When navigated to Users you can see a list of users obtained from a GET request and by pressing their names you can check their displayed information in a different page, there's also a friendship request button however it isn't functional. Here you can create additional users using a POST request, I used React-Router-dom for the routing navigation.

Inn Media we have something quite similar to users, however with different data, i also reversed the array so posts will display in a chronological order. pressing create post prompts the user to enter a message also using a POST request, and will push that data to the beginning of the array so the post is displayed first.

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

Note that i did not make all of the code, it has been re-used from the main repository of the course.

Below is a long list of requirements i have done:

## Requirements That have been done in order to not get a straight F:

### `DONE`

- Submitted as zip file
- Submitted small zip file (less than 10mb)
- Use single NodeJs instance serving both the frontend and backend
- Followed Folder layout
- Provided Readme.md
- Not Skipped instruction in the document
- No Bugs
- Home page accessible at http://localhost:8080
- Specifiy parts of exam that are not completed

## Grade Requirements that HAVE and HAVE NOT been done:

### `DONE`

Necessary but not sufficient requirements to get at least a (E - D) Grade

- Write a home page with React
- At least 2 other React pages that can be accessed via React-Router
- At least one page should have some “state”, whose change should be triggerable from the GUI
- (i.e., there should be some actions for which a React component should be re-rendered and
- produce different HTML)
- Create a RESTful API handling at least one GET and one POST (besides the ones for authentication/authorization of users), using JSON.
  The frontend must use such API.

### `NOT DONE`

Necessary but not sufficient requirements to get at least a C:

- You need to handle authentication/authorization, e.g., session-based via cookies: NOT DONE

Necessary but not sufficient requirements to get at least a B:

- Add WebSockets to your app, with the frontend using it: NOT DONE

## Application Requirements Done/Not Done:

### `DONE`

1. When the application starts, you must have some existing fake/test data representing valid users.
2. Should be possible to register new users.
3. Each user should have a page displaying his/her information (e.g, name, surname, date of birth and location).
4. Should be possible to search for existing users.

### `NOT DONE`

4. A user should be able to post new messages on his/her "timeline", which should be displayed in chronological order together in the same page with the user's info.
5. Users can send "friendship requests to other users. This latter will decide wheter to accept it or not.
6. Two friends can see each other timeline / user-details, but not the ones of the other users they are not friends with.
7. The home of a user will be the merged timeline of all of his/her friends, in chronological order, updated in real-time (e.g, Using Websockets).
8. Should have a live-chat (using WebSockets) for friends.
9. When a message contains a URL (e.g, a link to an externalø web page), that should be displayed as an actual clickable link. Pay particular attention to the security aspects of such funcitonality.
