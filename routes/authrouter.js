var exp=require('express')
const router=exp.Router();
var barray=[
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
    }];
//app.get('/author',function(req,res){
    //res.send("Higly Confidential")
  //  res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
//})
router.get('/',function(req,res){
    res.render('authors',{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray});
});
router.get("/:id",function(req,res){
    var id=req.params.id
    console.log(id)
    console.log(barray[id].title1)

    
    res.render("singleauthor",{pageTitle:"Library",nav:[{link:"/book",title:"Books"},{link:"/author",title:"AUTHOR"}],bk:barray[id]});
})
module.exports=router;