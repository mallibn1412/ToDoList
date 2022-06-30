const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();

app.set("view engine","ejs");  // use below this line const app = express();

app.use(bodyParser.urlencoded ({extended:true}));
app.use(express.static("public"));

let items=["Buy Food","Cook Food","Eat Food"];
let workitems=[];

var day="";
app.get("/",function(req,res){

    day=date.getDay();
    res.render("list",{listTitle: day,newlistitems: items});
});

app.post("/",function(req,res){
    let item=req.body.newitem;
    if(req.body.list==day){
        items.push(item);
        res.redirect("/");
        console.log(req.body.list);
    }
    else{
        workitems.push(item);
        res.redirect("/work");
        console.log(req.body.list);
      
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newlistitems:workitems});
});

app.get("/about",function(req,res){
   res.render("about");
});
 
// app.post("/work",function(req,res){
//     let item=req.body.newitem;
//     workitems.push(item);
//     res.redirect("/work");
// });
 
app.listen(3000,function(){
    console.log("server runnning at port 3000");
});

