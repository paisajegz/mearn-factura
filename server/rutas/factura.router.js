const express = require("express")
const router = express.Router()
const contrllerFacturas = require("../controller/factura.controller")
const autorizacion = require("../midleware/autorization.midleware")
const validate = require("../midleware/validate.midleware")
const { body } = require("express-validator")
router.get("/",autorizacion,contrllerFacturas.mostrarFactura)

router.get("/:id",autorizacion,contrllerFacturas.mostrarFacturaById)

router.post("/add",[autorizacion,validate(
    [
        body("cliente").exists().withMessage("el cliente no existe"),
        body("vendedor").exists().withMessage("el vendedor no existe"),
        body("total").exists().withMessage("el total no existe"),
        body("productos").exists().withMessage("no existe productos")
    ]
)],contrllerFacturas.crearFactura)


router.delete("/:id",autorizacion,contrllerFacturas.eliminarFactura)


module.exports=router