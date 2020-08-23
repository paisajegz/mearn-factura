const express = require("express")
const router = express.Router()
const controllerProductos = require("../controller/productos.controller")
const autorizacion = require("../midleware/autorization.midleware")
const validate = require("../midleware/validate.midleware")
const { body } = require("express-validator")

router.get("/",autorizacion,controllerProductos.mostrarProductos)

router.get("/:id",autorizacion,controllerProductos.mostrarProductosById)

router.post("/add",[autorizacion, validate(
    [
        body("nombre").exists().withMessage("el nombre no existe"),
        body("precio").exists().withMessage("el precio no existe"),
        body("cantidad").exists().withMessage("la cantidad no existe")        
    ]
)],controllerProductos.crearProductos)


router.delete("/:id",autorizacion,controllerProductos.eliminarProductos)


module.exports=router
