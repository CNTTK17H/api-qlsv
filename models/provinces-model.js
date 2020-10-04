var mongoose =require("mongoose");

var Schema = mongoose.Schema;

var provinceSchema = new Schema({
        idProvince: String,
        nameProvince:String
});

var Provinces = mongoose.model("Provinces",provinceSchema);

module.exports= Provinces;