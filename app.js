var exp=require("express");
const app=exp();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));


const path=require('path');
var bookrouter=require("./routes/bookrouter")
var authrouter=require("./routes/authrouter")
var userrouter=require("./routes/userrouter")
//var emprouter=require("./routes/emp")
app.listen(3000,function(){
    console.log("Server thudangi makkale....")
});
app.get('/',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html")
    res.render('login',{pageTitle:"Library",nav:[]});
});

// app.get('/register',function(req,res){
//   res.render('register',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}]});
// })
app.use(exp.static(path.join(__dirname,"/Public")));
app.get('/index',function(req,res){
  //res.sendFile(__dirname+"/src/views/index.html")
  res.render('index',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}]});
});

app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/book",bookrouter);
app.use("/author",authrouter);
app.use("/user",userrouter);
//app.use("/emp",emprouter);