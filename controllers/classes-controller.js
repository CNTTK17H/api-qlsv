var Classes = require("../models/classes-model");



function getClasses(res) {
    Classes.find( (err,results)=> {
        if(err){
            res.status(500).json(err);
          }else{
              res.json(results);
          }
    });
}



module.exports= function (app) {
//get all
    app.get("/api/classes",async (req,res)=> {
      await  getClasses(res);
    });

 // get by id
 app.get("/api/classes/:id",async (req,res) =>{
   await Classes.findById({_id: req.params.id },function (err,results) {
        if(err){
           throw err;
        }else{
            res.json(results);
        }
    });
});

// create
app.post("/api/classes",async (req,res)=> {
    var classe ={
        idClass: req.body.idClass,
        nameClass: req.body.nameClass
    };

  await  Classes.create(classe,(err,results) =>{
        if(err){
            throw err;
         }else{
            res.json(results);
         }
    });
});

//update

app.put("/api/classes",async (req,res)=> {
    if(!req.body.id){
        return res.status(500).send("id is required");
    }else{
      await  Classes.update({
            _id:req.body.id
        },{
            idClass: req.body.idClass,
            nameClass: req.body.nameClass
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

app.delete("/api/classes/:id",async (req,res)=> {
   await Classes.remove({
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