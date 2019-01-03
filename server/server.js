const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
//importing models
const {Equipment}=require("./models/Equipment")
//initializing the app
const app=express();
//connecting with database
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/labequipment",{ useNewUrlParser: true })

//applying middlewares
app.use(bodyParser.json())

require("./routes/equipment")(app)
const PORT=process.env.PORT || 3004;

//connecting to port
app.listen(PORT,()=>{
    console.log(`app started at port ${PORT}`)
})
