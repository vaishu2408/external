const express=require('express')
const app=express()
var fs=require('fs')
app.use(express.json())
 
app.get('/',(req,res)=>{
    res.send("Express server home page")
})
 
//to fetch the data
app.get('/users',(req,res)=>{
    fs.readFile('user.json',function(err,data){
        res.send(data)
    })
})
 
//to insert the document 
app.post('/adduser',(req,res)=>{
    console.log(req.body)
    const newu={
        id :req.body.id,
        name:req.body.name,
        loc:req.body.loc
    }
    fs.readFile('user.json',function(err,data){
        var ndata=JSON.parse(data);
        ndata.push(newu)
    fs.writeFile('user.json',JSON.stringify(ndata),function(err,data){
        console.log("data inserted")
    })
    })
    res.send("users data inserted successfully")
})
 
//to perform the data using put in postman
app.put('/updateuser/:id',(req,res)=>{
    var id=req.body.id;
    fs.readFile('user.json',function(err,data){
        var ndata=JSON.parse(data)
        for(let i in ndata){
            if(id===ndata[i]['id']){
                ndata[i]['id']=req.body.id;
                ndata[i]['name']=req.body.name;
                ndata[i]['loc']=req.body.loc;
                fs.writeFile('user.json',JSON.stringify(ndata),function(err,data){
                    console.log("data updated successfully")
                })
            }
        }
        res.send("user gets updated successfully")
    })
})
 
app.delete('/deleteuser/:id',(req,res)=>{
    var id=req.body.id;
    fs.readFile('user.json',function(err,data){
        var ndata=JSON.parse(data);
        for(let i in ndata){
            if(id===ndata[i]['id']){
                ndata.splice(i,1)
                fs.writeFile('user.json',JSON.stringify(ndata),function(err,data){
                    console.log("data deleted successfully")
                })
            }
        }
        res.send("user data deleted successfully")
    })
})
 
app.listen(8000,()=>{
    console.log("Express server started")
})