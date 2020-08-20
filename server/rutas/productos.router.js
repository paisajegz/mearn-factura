const express = require("express")
const router = express.Router()
const controllerProductos = require("../controller/productos.controller")
const autorizacion = require("../midleware/autorization.midleware")

router.get("/",controllerProductos.mostrarProductos)

router.get("/:id",controllerProductos.mostrarProductosById)

router.post("/add",controllerProductos.crearProductos)


router.delete("/:id",autorizacion,controllerProductos.eliminarProductos)


module.exports=router
