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
// "/dog" => "MEOW!"