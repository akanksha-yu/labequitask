const mongoose=require("mongoose")

const {Schema}=mongoose

const equipmentSchema=new Schema({
Image:{type:String},
 EquipmentName:{type:String,default:"unknown"},
 Vendorname:{type:String,default:"Lab Vendor"},
 Location:{type:String,default:"Bangalore"},
 Model:{type:String,default:"XVS"},
 Serial:{type:String,default:"QWERTY"},
 Description:{type:String,default:"unknown device"}
})

const Equipment=mongoose.model("equipment",equipmentSchema)

module.exports={Equipment}