const mongoose = require('mongoose');

const FacturasSchema = new mongoose.Schema({
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Clientes"
    },
    vendendor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Vendedor"
    },
    total:{
        type:String,
        required:true
    },
    productos:[
        {
            idProducto:{
                type:mongoose.Schema.Types.ObjectId,
                required:true
             },
             precio:{
                 type:String,
                 required:true
             },
             cantidad:{
                 type:String,
                 required:true
             }
        }
    ]
});


module.exports=mongoose.model("Facturas",FacturasSchema)