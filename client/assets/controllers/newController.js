app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          // console.log("hello from newController index var");
                          // console.log($scope.friends);
                          // console.log($scope);
                        });
            };
index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/

  $scope.create = function(){
    console.log("CREATE inside newController.js $scope.create");
    friendsFactory.create($scope.friend, function() {
      // $location.url('/');
    });
    $location.url('/');
  }

  $scope.edit = function(index){
    console.log("EDIT inside newController.js $scope.edit");
    friendsFactory.show($scope, index, function(returnedData){
                          $scope.person = returnedData;
                          // console.log("hello from newController index var");
                          console.log($scope);
                          console.log($scope.person);
                        });
    $location.url('/edit/' + index);
  }

  $scope.show = function(){
    console.log("SHOW inside newController.js $scope.show");
    friendsFactory.show($scope, index, function(returnedData){
                          $scope.person = returnedData;
                          // console.log("hello from newController index var");
                          console.log($scope.person);
                          // console.log($scope);
                        });
  }

  $scope.delete = function(id){
    console.log("DELETE inside newController.js $scope.DELETE");
    // console.log(id);
    
    friendsFactory.delete(id);

    index();
  }




}]);