var exp=require("express");
const app=exp();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
const path=require('path');
var bookrouter=require("./routes/bookrouter")
var authrouter=require("./routes/authrouter")
//var emprouter=require("./routes/emp")
app.listen(3000,function(){
    console.log("Server thudangi makkale....")
});
app.get('/',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html")
    res.render('index',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}]});
});
//app.get('/book',function(req,res){
  //  res.render('books',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
//});
//app.get("/book/:id",function(req,res){
  //  var id=req.params.id
    //console.log(id)
    //console.log(barray[id].title1)

    
    //res.render("singlebook",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray[id]});
//})

//app.get('/author',function(req,res){
    //res.send("Higly Confidential")
  //  res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
//})
//app.get('/author/:id',function(req,res){
  //  res.render('singleauthor',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray[id]});
//})
app.use(exp.static(path.join(__dirname,"/Public")));
app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/book",bookrouter);
app.use("/author",authrouter);
//app.use("/emp",emprouter);