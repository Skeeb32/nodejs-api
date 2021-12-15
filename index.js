//The file index.js acts as the main server for the Node.js application

//Acts as the main server and binds every API route together. 
//The file is in the root directory of the project

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/api/users")); 
app.listen(3000, () => console.log('Server started'));

 
/*
To run: 
node index.js 
Server started 

Use Postman for API calls:
GET to retrieve data: http://localhost:3000/api/users/
POST with JSON body to add a user: http://localhost:3000/api/users/
PUT with JSON body to update data for user-id: http://localhost:3000/api/users/1
DELETE to delete a user: http://localhost:3000/api/users/1

*/
