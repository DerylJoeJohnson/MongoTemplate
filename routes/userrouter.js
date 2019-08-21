var exp=require('express')
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var url="mongodb://localhost/library"
var user=require("../model/user")
const router=exp.Router();
const path=require('path');
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB3 Connected!");
})
router.post('/login',function(req,res){
    var a= new user();
    a.username=req.body.username;
    a.password=req.body.password;
    
    user.find({username:a.username, password:a.password},function(err,result)
    {
        if(err)
        throw err;
        else
        {
            console.log(result);
            if(result.length!=0)
            res.redirect("/index")
            else
            res.redirect("/");
           // res.render("index",{userdata:result});
        }
            
    })
})

    //   router.get('/register',function(req,res){
    //     res.render("register",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"},{link:"/login",title:"Login"}]});
    //   })

    router.get('/',function(req,res){
            //res.redirect("/register");
            res.render('register',{pageTitle:"Library",nav:[]});
          })

      router.post('/add',function(req,res){
        console.log("button clicked")
        var a= new user();
        a.fname=req.body.fname;
        a.username=req.body.username;
        a.password=req.body.password;
        a.role=req.body.role;
        a.save(function(err){
          if(err) throw err
          else
          {
            res.redirect("/")
          }
        })
      })
module.exports=router;