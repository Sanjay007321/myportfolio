const express = require("express");
const mongo = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
mongo.connect("mongodb://localhost:27017/").then(()=>{
    console.log("Mdb CONNECTED")
}).catch(()=>{console.log("ERROR")})
const mySchema = new mongo.Schema({
    name: {required:true,
        type:String},
    email:{required:true,
        type:String},
    message:{required:true,
        type:String}
    })
const model = mongo.model("msg",mySchema)
app.post('/',async(req,res)=>{
    try{
        const newUser = await model.create(req.body);
        console.log(req.body)
        res.status(201).json(newUser);
    }
    catch(error){ 
        console.log(error)
        res.status(400).json({message:error.message}); 
    }
})
// app.get("/",(req,res)=>{
//     res.send("<h1>HELLO</h1>")
// })

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`success is listening to ${port}`)
})


