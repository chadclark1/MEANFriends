console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;

    this.create = function(newfriend,callback){
      console.log(newfriend);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(){ // what parameters do we need?
      // Your code here
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
        console.log(callback);
      })
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id){// what parameters do we need?
        $http.delete("/friends/" + id);
    };
    
    this.show = function($scope, index, callback){// what parameters do we need?
        // Your code here
        console.log("show factory");
        $http.get('/friends').then(function(returned_data){
          // console.log(returned_data.data[index]);
          person = returned_data.data[index];
          callback(person);
        })
       
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);