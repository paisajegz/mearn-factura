const jwt = require("jsonwebtoken")

const autorizacion = (req,res,next)=>{
    token=req.headers["Authorization"]
    if(token){
        jwt.verify(token,"el software es bueno",(err,decode)=>{
            if(err){
                res.send({  title:"NoAutentication",
                            message:"el usuario no ha sido autenticado"
                        })
            }else{
                req.vendedor=decode
                next()
            }
        })
    }

}  



module.exports=autorizacion