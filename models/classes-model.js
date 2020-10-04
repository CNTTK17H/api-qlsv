var mongoose =require("mongoose");

var Schema = mongoose.Schema;

var classSchema = new Schema({
        idClass: String,
        nameClass:String
});

var Classes = mongoose.model("Classes",classSchema);

module.exports= Classes;