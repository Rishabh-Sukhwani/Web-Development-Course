const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight / (height*height);

    res.send("The bmi is :" + result);
});

app.listen(3000, function(req, res){
    console.log("Server started at port 3000");
});
