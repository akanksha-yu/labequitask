const mongoose = require("mongoose")
const { Equipment } = require("../models/Equipment")
module.exports = app => {
    app.get("/getEquipment/:id", (req, res) => {
        Equipment.findOne({ _id:req.params.id }).then(equip => { res.send(equip) })
    })
    app.get("/getEquipments",(req,res)=>{
        
        Equipment.find({}).then(equip=>{res.send(equip)})
    })
    app.post("/postEquipment",(req,res)=>{
        
        const equip=new Equipment(req.body)
        equip.save().then(doc=>res.send(doc))
    })
}