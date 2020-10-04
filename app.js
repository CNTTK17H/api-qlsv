
var express = require("express");
var bodyPaser = require("body-parser");
var mogan =require("morgan");
var mongoose =require("mongoose");
var config =require("./config/index");
var app = express();
var port=process.env.port|| 3000;


//var setupController=require("./controllers/setup-controller")
var StudentsController = require("./controllers/students-controller");
var ClassesController = require("./controllers/classes-controller");
var ProvincesController = require("./controllers/provinces-controller");



app.use("/assets",express.static(__dirname+"/public"));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:true}));

app.use(mogan("dev"));

app.set("view engine","ejs");




//console.log(config.getDbConectionString());
mongoose.connect(config.getDbConectionString(), { useNewUrlParser: true,useUnifiedTopology: true })
StudentsController(app);
ClassesController(app);
ProvincesController(app);


app.get("/home",function(req,res){
    res.render("index");
});

app.listen(port,function () {
    console.log("app listen on port "+port);
});