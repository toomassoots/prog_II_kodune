// Import express and put it into express constant
const express = require('express');
// Create express object and put it into app constant
const app = express();

// Module import

const usersController=require('./api/controller/usersController')
const washController=require('./api/controller/washController')
const authController=require('./api/controller/authController')
//const lecturersController=require('./api/controller/lecturersController')
// Middleware required for receiving body from request object as JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database mockup

// Endpoint for checking if API is alive (response 200 OK means, it is working)
// GET - ping
// Required values: none
// Optional values: none
// Returns: status 200 - OK and { success: true } message
app.get('/api/ping', (req, res) => {
    res.status(200).json({
        success: true
    });
});

// Endpoint for getting list of available users
// GET - users
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of users in response body
app.get('/api/users', usersController.read);


// Endpoint for getting user specified by id
// GET - users
// Required: id
// Optional: none
// Returns: status 200 - OK and user data in response body
//app.get('/api/users/:email', usersController.userByEmail);
app.get('/api/users/:id', usersController.user);


// Endpoint for creating new user
// POST - users
// Required values: firstName, lastName, email, password
// Optionalvalues: none
// Returns:
//  Success: status 201 - Created and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.post('/api/users', usersController.create);

// Endpoint for updating user specified by id
// PUT - users
// Required: id
// Optional: firstName, lastName, email, password
// Returns:
//  Success: status 200 - OK and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.put('/api/users', usersController.update);

// Endpoint for deleting user specified by id
// DELETE - users
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK and { success: true } message
//  Fail: status 400 - Bad Request and error message in response body
app.delete('/api/users/:id', usersController.delete);
// Endpoint for getting list of available users
// GET - users
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of users in response body
app.get('/api/wash', washController.read);


// Endpoint for getting user specified by id
// GET - users
// Required: id
// Optional: none
// Returns: status 200 - OK and user data in response body
app.get('/api/wash/:id', washController.wash);

// Endpoint for creating new user
// POST - users
// Required values: firstName, lastName, email, password
// Optionalvalues: none
// Returns:
//  Success: status 201 - Created and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.post('/api/wash', washController.create);

// Endpoint for updating user specified by id
// PUT - users
// Required: id
// Optional: firstName, lastName, email, password
// Returns:
//  Success: status 200 - OK and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.put('/api/wash', washController.update);

// Endpoint for deleting user specified by id
// DELETE - users
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK and { success: true } message
//  Fail: status 400 - Bad Request and error message in response body
app.delete('/api/wash/:id', washController.delete);

app.post('/api/login',authController.login);
app.listen(3000, () => {
    console.log('Server running');
});