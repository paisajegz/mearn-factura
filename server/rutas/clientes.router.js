const express = require("express")
const router = express.Router()
const controllerClientes = require("../controller/clientes.controller")

const { body} = require("express-validator")
const autorizacion = require("../midleware/autorization.midleware")
const validate = require("../midleware/validate.midleware")
const controllerCliente = require("../controller/clientes.controller")
  


router.get("/",controllerClientes.mostrarClientes)

router.get("/documento/:doc",controllerCliente.buscarByDocumento)

router.get("/:id",controllerClientes.mostrarClientesById)

router.post("/add",[ validate([
    body('correo').exists().isEmail()
])],controllerClientes.crearClientes)


router.delete("/:id",controllerClientes.eliminarCliente)


router.get("/facturas/:id",autorizacion,function(req,res){

})


router.put("/:id", controllerCliente.actualizarCliente)


module.exports=router