const express = require('express')
const router = express.Router();
const data = require('../data.json').property;

//Route for the "root" homepage
//imports the entire json as variable
router.get('/', (req, res) => {
        res.render('index', { 
                jsonData: data
            });
})

//Route to the about page
router.get('/about', (req, res) => {
        res.render('about');
})

//so index.js can be used in app.js
module.exports = router;