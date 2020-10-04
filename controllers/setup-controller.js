// var Classse =require("../models/classes-model");
// var Provinces = require("../models/provinces-model");
// var Students =require("../models/students-model");


// module.exports =function (app) {
//     app.get("/api/setupClassse",function (req,res) {
//         //setup send data
//         var setupClasses =[
//             {
//                 idClass: "N01",
//                 nameClass:"Cntt K17h"
//             },
//         ];
        
//         Classse.create(setupClasses,function (err,results) {
//             res.send(results);
//         })
//     });

//     app.get("/api/setupProvinces",function (req,res) {
//         //setup send data
//         var setupProvinces =[
//             {
//                 idProvince: "20",
//                 nameProvince:"thái nguyên"
//             },
//         ];
        
//         Provinces.create(setupProvinces,function (err,results) {
//             res.send(results);
//         })
//     });


//     app.get("/api/setupStudents",function (req,res) {
//         //setup send data
//         var setupStudents =[
//             {
//                 idStudent:"dtc1854802010116",
//                 name:"phạm hoàng kim",
//                 isMale:true,
//                 idClass:"N01",
//                 idProvince:"20",
//                 avg:3.2
//             },
//         ];
        
//         Students.create(setupStudents,function (err,results) {
//             res.send(results);
//         })
//     });
    
// }