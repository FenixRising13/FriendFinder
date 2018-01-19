var path = require("path");
// var app = require("express");

module.exports = function (app) {
    app.post("/api/new", function (req, res) {
    })
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "view.html"));
    })
}