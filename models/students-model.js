var mongoose = require("mongoose");
var Schema=mongoose.Schema;

var studentSchema = new Schema({
    idStudent:String,
    name:String,
    isMale:Boolean,
    idClass:String,
    idProvince:String,
    avg:Number
});

var Students=mongoose.model("Students",studentSchema);

module.exports=Students;