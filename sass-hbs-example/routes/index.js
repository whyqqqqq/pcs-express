
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Handlebars and Sass Rule! Jade and Stylus Drool' });
};