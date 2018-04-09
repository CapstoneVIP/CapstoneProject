/**
 * ShuttleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

//Add a shuttle to the database 
addShuttle: function (req, res) {
  Shuttle.create({
      name: req.body.name,
			latitude: req.body.latitude,
			longitude: req.body.longitude
      }).exec(function callback(err, shuttle) {
		return res.json(shuttle);
		});
	},
	
	//Ommitting the password for json response
  customToJSON: function() {
     return _(this)
  },
};

