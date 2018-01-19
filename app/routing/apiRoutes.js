var path = require("path");
var app = require("express");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    })

    app.post("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "view.html"));
    })
}