var path = require("path");

module.exports = function (app) {

    // Uses the path /new to add entries to friends object
    app.post("/api/new", function (req, res) {
        
        var newfriend = req.body;

        newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);

        friends.push(newfriend);
        res.json(newfriend);

    });
    
//  Returns results when client accesses GET friends
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