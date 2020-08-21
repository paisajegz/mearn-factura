const mongoose = require("mongoose")
const FacturasSchema = require("../schemas/facturas.schema")
const controllerFactura ={}


controllerFactura.mostrarFactura=async function(req,res){
    res.send(await FacturasSchema.find().exec())
}


controllerFactura.crearFactura=async function(req,res){
    //req.body.vendedor=mongoose.Schema.Types.ObjectId(req.body.vendedor)
    console.log(req.body.vendedor)
    //res.send(req.body)
    const factura= new FacturasSchema(req.body)
    await factura.save()
    res.send({
        title:"ok",
        message:"se ha registrado sastifactoriamente la factura"
    })
}

controllerFactura.mostrarFacturaById=async function(req,res){
    res.send(await FacturasSchema.find({_id:req.params.id}).exec())
}


controllerFactura.eliminarFactura=function(req,res){
    FacturasSchema.deleteOne({_id:req.params.id},function(err){
        if(err)res.send({title:"error",message:"factura no encontrada y no se ha podido eliminar"})
        res.send({
            title:"ok",
            message:"se elimino sastifactoriamente la factura"
        })
    })
}


module.exports = controllerFactura