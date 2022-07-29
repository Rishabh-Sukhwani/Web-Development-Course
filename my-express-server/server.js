const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: abc@xyz.com");
});

app.get("/about", function(req, res){
    res.send("My name is Rishabh.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>code</li><li>code 2</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

