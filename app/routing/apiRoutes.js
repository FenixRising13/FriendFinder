var path = require("path");
var friends = require('../data/friends');

module.exports = function (app) {

    // Uses the path /new to add entries to friends object
    app.post("/api/friends", function (req, res) {
        console.log('This button works');
        var newfriend = req.body;

        newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        res.json(newfriend);

    });

    //  Returns results when client accesses GET friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

};