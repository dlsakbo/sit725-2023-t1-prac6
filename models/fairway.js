let client = require('../dbConnect')
let collection = client.db().collection('fairway');


function postFairway(fairway, callback) {
    collection.insertOne(fairway, callback);
}


function getAllFairway(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { postFairway, getAllFairway }