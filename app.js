var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
    res.send("Hi there!");
})
app.listen(3000, function () {
    console.log("Server Has Started");
});
// "/bye" => "Goodbye"
app.get("/bye", function (req, res) {
    res.send("Goodbye");
});
// "/dog" => "MEOW!"
app.get("/dog", function (req, res) {
    res.send("MEOW!");
})

//Added section here//