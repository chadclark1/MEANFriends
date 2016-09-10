console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models



var FriendSchema = new mongoose.Schema({
 	firstName: String,
 	lastName: String,
 	age: Number,
 	date_added: String
})
var Friend = mongoose.model('Friend', FriendSchema); // We are setting this Schema in our Models as 'Mongoose'