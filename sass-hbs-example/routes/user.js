
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.json(JSON.stringify({"user": "Wallace", "petname": "Gromit", "favoriteCheese": "Wenslydale"}));
};