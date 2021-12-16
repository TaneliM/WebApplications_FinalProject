# WebApplications_FinalProject
 Final project work for web applications course. A simple website mimicing the functionality of sites like stackoverflow.
 
 Uses Express as its Node.js backend and React as its frontend.

 Running the project requires npm to be installed. Additionally the backend uses "MongoDB" as its database which means the MongoDB service needs to be installed and running. The database and schemas will automatically be created. The path to the database is defined as: "mongodb://localhost:27017/FinalProjectDB" in the "./server/app.js" -file. Other packages should be included but they can be easily installed with "npm i 'name of the package'" if necessary.

 Running the project in developement mode:
 Running "npm run dev" starts the backend and frontend in the same terminal window using "concurrently". Concurrently might need to be installed separately, however separately running both of the scripts that concurrently runs together will also work. These scripts ("client", "server" and "dev" which includes them both) can be found in the "./package.json" -file and can be run with: "npm run 'name of the script'". The frontend starts on "localhost:3000" and the backend starts on "localhost:5000" by default. The client uses a proxy to the server defined in "./client/package.json" to make the needed api calls.

 Once the services are running they can be accessed via "localhost:3000" with a browser. The database will be empty so there will be no users, posts or comments. They can be added manually by making a user account(s) and then making posts and commenting on the posts.
 
 The site wasn't really made to be usable but to meet the requirements for the final project of the course. However the site could be made a lot more usable with little effort for example by placing some restrictions on the api calls (Restricting making empty posts/comments for example) and rethinking some of the structure for the components to make it more responsive (Getting rid of the few redirects for example).

 List of features and scoring for the course:
 The project meets the basic requirements scoring 25 points:
 - Backend uses Express.js (project is written in javaScript)
 - Project uses MongoDB as its database
 - Authentication is implemented. User accounts can be created and they can login. Uses JWT for authorization. Adding content via api calls requires a valid JWT.
 - The App uses responsive design. Uses Materialize and material ui.
 - Documentation is done. Code that was not automatically generated or just self commenting has comments explaining what it does and is used for. This README exists.
 
 Additional features:
 - The project uses React as its frontend. (5 points)

 This project should score 30 points for the course.