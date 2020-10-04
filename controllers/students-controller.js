var Students = require("../models/students-model");



function getStudents(res) {
    Students.find(function (err,results) {
        if(err){
            res.status(500).json(err);
          }else{
              res.json(results);
          }
    });
}



module.exports= function (app) {
//get all
    app.get("/api/students",async (req,res)=> {
      await  getStudents(res);
    });

 // get by id
 app.get("/api/students/:id",async (req,res) =>{
   await Students.findById({_id: req.params.id },function (err,results) {
        if(err){
           throw err;
        }else{
            res.json(results);
        }
    });
});

// create
app.post("/api/students",async (req,res)=> {
    var student ={
        idStudent:req.body.idStudent,
        name:req.body.name,
        isMale:req.body.isMale,
        idClass:req.body.idClass,
        idProvince:req.body.idProvince,
        avg:req.body.avg
    };

  await  Students.create(student,(err,results) =>{
        if(err){
            throw err;
         }else{
            res.json(results);
         }
    });
});

//update

app.put("/api/students",async (req,res)=> {
    if(!req.body.id){
        return res.status(500).send("id is required");
    }else{
      await  Students.update({
            _id:req.body.id
        },{
            idStudent:req.body.idStudent,
            name:req.body.name,
            isMale:req.body.isMale,
            idClass:req.body.idClass,
            idProvince:req.body.idProvince,
            avg:req.body.avg
        },(err,results)=> {
            if(err){
                return res.status(500).json(err);
            }else{
                res.json(results);
            }
        })
    }
});


//delete

app.delete("/api/students/:id",async (req,res)=> {
   await Students.remove({
        _id:req.params.id
    },(err,results)=> {
        if(err){
            return res.status(500).json(err);
        }else{
            res.json(results);
        }
    });
});


}