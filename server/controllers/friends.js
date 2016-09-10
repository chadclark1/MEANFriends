console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below


var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');







function FriendsController(){
  this.index = function(req,res){
    //your code here
    // console.log("in FriendsController this.index");
    Friend.find({}, function(err, results){
      // console.log("in FriendsController this.index, Friend.find");
      // console.log(results);
      if(err) {console.log(err);}
      res.json(results);
    })
    
  };
  this.create = function(req,res){
    //your code here
    console.log(req.body);
    Friend.create({ firstName: req.body.firstName, 
          lastName: req.body.lastName, 
          age: req.body.age, 
          date_added: req.body.date_added}, function(err, results){
      // console.log("in FriendsController this.index, Friend.find");
      // console.log(results);
      if(err) {console.log(err);}
      // res.json(results);
    })
    // Friend.create({ firstName: req.body.firstName, 
    //       lastName: req.body.lastName, 
    //       age: req.body.age, 
    //       date_added: req.body.date_added}, function(err, response) {
    //   if (err) { console.log(err); }
    //   res.json({ names: response });
    // });


    res.json({placeholder:'create'});
  };

  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here

    // Friend.delete({_id: })
    console.log(req.body);

    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController(); // what does this export?