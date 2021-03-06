var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about_me',{ title: 'About Me',});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects',{ title: 'About Me',});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact',{ title: 'About Me',});
});

module.exports = router;
