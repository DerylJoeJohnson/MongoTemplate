var mongoose = require("mongoose");
var schema= mongoose.Schema; // instance created for schema

var empschema = new schema(             //schema structure
    {
        id:String,
        username:{type:String,required:true},
        password:{type:String,required:true},
        fname:{type:String,required:true},
        role:{type:String,required:true},
        //des:{type:String,required:true},
        
    }
)

var usermodel=mongoose.model("user",empschema,"user");  
module.exports=usermodel;