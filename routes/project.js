const express = require('express')
const router = express.Router();
const data = require('../data.json').property;



router.get('/:id', (req, res) => {
       
        res.render('project', { 
                projectId: data[req.params.id].id,
                title: data[req.params.id].project_name,
                description: data[req.params.id].description,
                technologies: data[req.params.id].technologies,
                live_link: data[req.params.id].live_link,
                github_link: data[req.params.id].github_link,
                image_urls: data[req.params.id].image_urls
            });
           
});

module.exports = router;