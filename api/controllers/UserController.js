/*---------------------
	:: User 
	-> controller
---------------------*/
var UserController = {
  create: function(req, res) {
    User.create({
      name: req.params.name
    }).done(function(err, user){
      if (err) {
        return console.log(err);
      } else {
        console.log("User created:", user);
      }
      res.send('abc');
    });
    console.log(req.param);
  }


};
module.exports = UserController;
