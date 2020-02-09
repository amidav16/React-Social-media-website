#Project Description

This project is a very simple React application that displays a menu, an About us screen and a next weeks theme screen.
The visitor of said page will be able to see the menu for the week, this menu could have been made in a simple table instead of displaying an Array.
Theres also 2 other react pages that can be accessed via React-Router.
On the home menu theres a state that can be triggered using the like button which displays the ammount of likes accumulated.

I created a homepage.jsx file which is where almost all of the code is located, this project consist mostly of frontend therefore
the folders server and shared are empty, however i do accknowledge i could store an array for example here and fetch it from homepage.jsx for easier code readability
i have commented to make things clear.

To get started start from the root folder and perform:

##Setup Instructions:

### Start from the root directory

### `npm install`

### `npm install react-router-dom --save`

### `npm start`

npm Starts the server port at 8080 and launches the react application

Small parts of this code has been used to achieve the functions: https://github.com/techsithgit/react-router/blob/master/src/App.js

The focus of this application is to be within the passing grade requirements, i do believe i could have done way better to achieve a more sophisticated
solution to the exam, due to lack of time this is the best result i could produce.

Below is a long list of requirements i have done:

Requirements That HAVE and HAVE NOT been done:

Submitted as zip file? Yes

Use one server? Yes

Followed Folder layout? Yes (NOTE: the app was made with create-react-app and it wont allow me to redirect the public folder and index.js from their original location)

Submitted Acceptable Zip file? Yes

Provided Readme.md? Yes

Skipped instruction in the document? No

Bugs? No (Only one warning)

Home page accessible at http://localhost:8080? Yes

Specifiy parts of exam that are not completed? Yes

Grade Requirements that HAVE and HAVE NOT been done:

Necessary but not sufficient requirement to get at least an E mark for:

Write a home page with React: Yes

At least 2 other React pages that can be accessed via React-Router: Yes

At least one page should have some “state”, whose change should be triggerable from the GUI
(i.e., there should be some actions for which a React component should be re-rendered and
produce different HTML):Yes

Necessary but not sufficient requirements to get at least a D:

Create a RESTful API handling at least one GET and one POST (besides the ones for authentication/authorization of users), using JSON: No

The frontend must use such API: No

Necessary but not sufficient requirements to get at least a C:

You need to handle authentication/authorization, e.g., session-based via cookies: No

Necessary but not sufficient requirements to get at least a B:

Add WebSockets to your app, with the frontend using it: No

Application Requirements Done:

(Grade E-D) A visitor of the page should be able to see the menu for the week. DONE

(Grade E-D) When the application starts in development mode, you must have some existing. DONE
