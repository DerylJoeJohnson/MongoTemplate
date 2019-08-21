var exp=require('express')

var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var url="mongodb://localhost/library"

var author=require("../model/author")
const router=exp.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB2 Connected!");
})
/*var barray=[
    {
        title1:"War And Peace",
        genre:"Historical Fiction",
        author:"Lev Nicolayevich",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UtJjBgHB2ZMgAKoGL-Z2XSHWL5OFWiyZ0vOKmzGDUI68SUKc",
        des:"Very good author"
    },
    {
        title1:"Wings of fire",
        genre:"Autobiography",
        author:"APJ ABDUL KALAM",
        img:"https://s3.india.com/wp-content/uploads/2015/10/0001.jpg",
        des:"Very good author"
    },
    {
        title1:"Ramayana",
        genre:"Religious",
        author:"VAlmiki",
        img:"https://www.haribhoomi.com/cms/gall_content/2018/10/maharishi-valmiki-katha_2018102312115607.jpg",
        des:"Very good author"
    },
    {
        title1:"Harry Potter",
        genre:"Fantasy Fiction ",
        author:"J K Rowling",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_EHmQlzsOO3R9mR1V_5yRlTi6kuHjE5rDWJ8jnLCoj8rWZ5e",
        des:"Very good author"
    }];*/
//app.get('/author',function(req,res){
    //res.send("Higly Confidential")
  //  res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
//})
router.get('/',function(req,res){
    author.find({},function(err,result){
    if(err)
    throw err;
    else
    res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"},{link:"/book/newbook",title:"Add Books"}],bk:result});
})
});
router.get("/:id",function(req,res){
    var id=req.params.id;
  //  console.log(id)
   // console.log(barray[id].title1)
    author.find({},function(err,result){
        if(err)
        throw err;
        else

    
    res.render("singleauthor",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:result[id]});
})
});
module.exports=router;