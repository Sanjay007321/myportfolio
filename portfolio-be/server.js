const express = require("express");
const mongo = require("mongoose")
const cors = require("cors")
const app = express()
const uri = "mongodb+srv://saniay007aj:sanjay123@cluster0.ic5sl1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors())
app.use(express.json())
mongo.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
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
app.get('/',(req,res)=>{
  res.send("<h2>Server is Live</h2>");
})
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
    console.log(`server is listening to ${port}`)
})


