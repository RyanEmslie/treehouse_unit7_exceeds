const express = require('express');
const app = express();
// const path = require('path');


//view engine setup
app.set('view engine', 'pug');
// app.set('views', './views');

const mainRoutes = require('./routes');
const projectsRoutes = require('./routes/project')


app.use(mainRoutes);
app.use('/project', projectsRoutes)


app.use(express.static('public'));


app.listen(3000, () => {
        console.log('The application is running on localhost:3000!');
});