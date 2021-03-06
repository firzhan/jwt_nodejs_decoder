// Again we are importing the libraries we are going to use
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

//On our router variable, we'll be able to include various methods. 
//For our app we'll only make use of GET requests, so the method router.get will handle that interaction. 
//This method takes a string as its first parameter and that is the URL path, so for the first route, we are just giving it '/', which means the default route.
router.get('/', (req, res) => {
    res.send('You are on the homepage');
});


// We are going to do the same thing for the remaining routes.
router.get('/login', (req, res) => {
    res.send('You are on the login page');
});

router.get('/logout', (req, res) => {
    res.send('You are on the logout page');
});

router.get('/polls', (req, res) => {
    res.send('You are on the polls page');
});

router.get('/user', (req, res) => {
        var token = req.header('X-JWT-Assertion');
        console.log(token);
        var decoded = jwt.decode(token, {complete: true});
console.log(decoded.header);
console.log(decoded.payload)
        res.send('You are on the user page');
});

// Finally, we export this module so that we can import it in our app.js file and gain access to the routes we defined.
module.exports = router;


