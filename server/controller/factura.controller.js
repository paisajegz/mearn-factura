const mongoose = require("mongoose")
const FacturasSchema = require("../schemas/facturas.schema")
const controllerFactura ={}


controllerFactura.mostrarFactura=async function(req,res){
    res.send(await FacturasSchema.find().exec())
}


controllerFactura.crearFactura=async function(req,res){
    req.body.vendedor = req.vendedor._id
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
    console.log("el id es" +req.params.id)
    FacturasSchema.deleteOne({_id:req.params.id},function(err){
        if(err){
            console.log(err)
            res.send({title:"error",message:"factura no encontrada y no se ha podido eliminar"})
        }else {
            res.send({
                title:"ok",
                message:"se elimino sastifactoriamente la factura"
            })
        }
    })
}


module.exports = controllerFactura