var path = require("path");
// var app = require("express");

module.exports = function (app) {
    app.post("/api/new", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        friends.push(newfriend);
        res.json(newfriend);

    });

    app.get("/api/friends", function (req, res) {
        var chosen = req.params.friends;

        if (chosen) {
            console.log(chosen);

            for (var i = 0; i < friends.length; i++) {
                if (chosen === friends[i].uniqueid) {
                    return res.json(friends[i]);
                }
            }
            return res.json(false);
        }
        return res.json(friends);
    });
}