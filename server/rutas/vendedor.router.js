const express = require("express")
const router = express.Router()
const controllerVendedor = require("../controller/vendedor.controller")
const autorizacion = require("../midleware/autorization.midleware")
const validate = require("../midleware/validate.midleware")
const { body } = require("express-validator")

router.get("/",autorizacion,controllerVendedor.mostrarVendedor)

router.post("/login", validate([
    body("correo").exists().withMessage("no existe correo").isEmail().withMessage("correo invaldo"),
    body("clave").exists().withMessage("clave no existe")
]),controllerVendedor.login)

router.get("/:id",autorizacion,controllerVendedor.mostrarVendedorById)

router.post("/add",autorizacion,controllerVendedor.crearVendedor)


router.delete("/:id",autorizacion,controllerVendedor.eliminarVendedor)



module.exports=router