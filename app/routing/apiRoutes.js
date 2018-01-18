var app = require('express');
var friends = require('/data/friends');

app.get("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
});