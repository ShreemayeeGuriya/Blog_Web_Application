import express from "express";
const app=express();

const port=3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs",{posts});
});

//right now creating arrays to store posts as databases are not taught yet

var posts=[];

app.get("/posts",(req,res)=>{
    res.render("posts.ejs");
});

app.post("/posts",(req,res)=>{
    posts.push(
        {
            id:Date.now(),
            title:req.body.title,
            content:req.body.content
        }
    )
    //console.log(req.body.title);
    //console.log(req.body.content);
    res.redirect("/");
});

app.get("/edit/:id",(req,res)=>{
    posts.forEach(post =>{
        if((Number(req.params.id))===post.id)
        {
            res.render("edit.ejs",{post});
        }
    });
    
});

app.post("/edit/:id",(req,res)=>{
     posts.forEach(post =>{
        if((Number(req.params.id))===post.id)
        {
            post.title=req.body.title;
            post.content=req.body.content;
        }
    });
    res.redirect("/");
});

app.get("/delete/:id",(req,res)=>{
    posts = posts.filter(post => post.id !== Number(req.params.id));
     res.redirect("/");
});


app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});