const express = require('express')
const router = express.Router();
const data = require('../data.json').property;



// console.log(data[1])
// console.log('Dude')
router.get('/', (req, res) => {
        res.render('index', { 
                jsonData: data
            });
})


router.get('/about', (req, res) => {
        res.render('about');
})


//so index.js can be used in app.js
module.exports = router;