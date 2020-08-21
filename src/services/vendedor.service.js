class ServiceVendedor{
    async login(datos){
        return new Promise(async (resolve)=>{
            const response= await fetch("http://localhost:3003/vendedor/login",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(datos)
            })
            const json = await response.json()
            console.log(json)
            resolve(json)
        })
    }
}


export default new ServiceVendedor()