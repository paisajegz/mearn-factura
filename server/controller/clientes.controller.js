const controllerCliente ={}
const ClienteSchema = require("../schemas/cliente.schema")
const FacturasSchema = require("../schemas/facturas.schema")
const facturasSchema = require("../schemas/facturas.schema")

controllerCliente.mostrarClientes=async function(req,res){
    res.send(await ClienteSchema.find().exec())
}


controllerCliente.crearClientes=async function(req,res){
    try{
        cliente = new ClienteSchema(req.body)
        await cliente.save();
        res.send({title:"ok", message:"usuario registrado"})
    }catch(e){
        res.send({title:"error",message:e})
    }
    
    
}

controllerCliente.mostrarClientesById=async function(req,res){
    try{
        res.send(await ClienteSchema.findOne({_id:req.params.id}).exec())
    }catch(e){
        res.send({})
    }
    
}


controllerCliente.eliminarCliente=function(req,res){
    
    ClienteSchema.deleteOne({_id:req.params.id},function(err){
        if(err) res.send({title:"error",message: "no encontro el id"})
        res.send({title:"ok",message:"el usuario a sido eliminado sastifactoriamente"})
    })
}


controllerCliente.buscarByDocumento=async function(req,res){
    const user=await ClienteSchema.findOne({documento:req.params.doc}).exec();
    if(user)res.send(user)
    else res.send({})
    

}

controllerCliente.actualizarCliente= async function(req,res){
    try{
        await ClienteSchema.updateOne({documento:req.params.id},{$set:req.body})
        res.send(
            {
                title:"ok",
                message:"se ha actualizado sastifactoriamente el cliente"
            }
        )
    }catch(e){
        console.log(e)
        res.send(
            {
                title:"error",
                message:"no se pudo actualizar el componente"
            }
        )
    }    
}


controllerCliente.monstrarFacturasByClientes = async function(req,res){
    const user=await ClienteSchema.findOne({documento:req.params.id}).exec();
    if(user){
        const facturas=await facturasSchema.find({ cliente: user._id})
        res.send(facturas)
    }else{
        res.send([])
    }
}


module.exports = controllerCliente