var exp=require('express')
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var url="mongodb://localhost/library"

var book=require("../model/book")
const router=exp.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected!");
})

/*var barray=[
    {
        title1:"War And Peace",
        genre:"Historical Fiction",
        author:"Lev Nicolayevich",
        img:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        des:"Very good Book"
    },
    {
        title1:"Wings of fire",
        genre:"Autobiography",
        author:"APJ ABDUL KALAM",
        img:"https://images.pexels.com/photos/356192/pexels-photo-356192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        des:"Very good Book"
    },
    {
        title1:"Ramayana",
        genre:"Religious",
        author:"VAlmiki",
        img:"https://im.indiatimes.in/content/itimes/photo/2016/Jul/21/1469099518-cutest-baby-images-you-cannot-ignore-her.jpg",
        des:"Very good Book"
    },
    {
        title1:"Harry Potter",
        genre:"Fantasy Fiction ",
        author:"J K Rowling",
        img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-519624386-1553774727.jpg?crop=0.670xw:1.00xh;0.294xw,0&resize=480:*",
        des:"Very good Book"
    }];
*/

router.get('/',function(req,res){
    book.find({},function(err,result){
        if(err)
        throw err;
        else
        res.render('books',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:result});
});
    })
    
router.get("/:id",function(req,res){
    

    var id=req.params.id
    console.log(id)
    //console.log(barray[id].title1)
    book.find({},function(err,result){
        if(err)
        throw err;
        else
    
    res.render("singlebook",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:result[id]});
})
})
module.exports=router;