var Provinces = require("../models/provinces-model");




function getProvinces(res) {
    Provinces.find(function (err,results) {
        if(err){
            res.status(500).json(err);
          }else{
              res.json(results);
          }
    });
}



module.exports= function (app) {
//get all
    app.get("/api/provinces",async (req,res)=> {
      await  getProvinces(res);
    });

 // get by id
 app.get("/api/provinces/:id",async (req,res) =>{
   await Provinces.findById({_id: req.params.id },function (err,results) {
        if(err){
           throw err;
        }else{
            res.json(results);
        }
    });
});

// create
app.post("/api/provinces",async (req,res)=> {
    var province ={
        idProvince: req.body.idProvince,
        nameProvince:req.body.nameProvince
    };

  await  Provinces.create(province,(err,results) =>{
        if(err){
            throw err;
         }else{
           getProvinces(res);
         }
    });
});

//update

app.put("/api/provinces",async (req,res)=> {
    if(!req.body.id){
        return res.status(500).send("id is required");
    }else{
      await  Provinces.update({
            _id:req.body.id
        },{
            idProvince: req.body.idProvince,
            nameProvince:req.body.nameProvince
        },(err,results)=> {
            if(err){
                return res.status(500).json(err);
            }else{
                getProvinces(res);
            }
        })
    }
});


//delete

app.delete("/api/provinces/:id",async (req,res)=> {
   await Provinces.remove({
        _id:req.params.id
    },(err,results)=> {
        if(err){
            return res.status(500).json(err);
        }else{
            getProvinces(res);
        }
    });
});


}