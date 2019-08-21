var mongoose = require("mongoose");
var schema= mongoose.Schema; // instance created for schema

var empschema = new schema(             //schema structure
    {
        id:String,
        title1:{type:String,required:true},
        genre:{type:String,required:true},
        author:{type:String,required:true},
        img:{type:String,required:true},
        des:{type:String,required:true},
        
    }
)

var authormodel=mongoose.model("author",empschema,"author");  
module.exports=authormodel;