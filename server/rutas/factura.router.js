const express = require("express")
const router = express.Router()
const contrllerFacturas = require("../controller/factura.controller")
const autorizacion = require("../midleware/autorization.midleware")
router.get("/",contrllerFacturas.mostrarFactura)

router.get("/:id",contrllerFacturas.mostrarFacturaById)

router.post("/add",contrllerFacturas.crearFactura)


router.delete("/:id",contrllerFacturas.eliminarFactura)


module.exports=router