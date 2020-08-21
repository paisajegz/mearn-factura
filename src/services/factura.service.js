class ServiceFactura{
    crearFactura(data){
        return new Promise(async (resolve)=>{
            const response=await fetch("http://localhost:3003/factura/add",{
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            const json = await response.json()
            resolve(json)
        })
    }
}



export default new ServiceFactura()