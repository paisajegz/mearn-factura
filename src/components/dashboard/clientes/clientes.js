import React from 'react';
export default class Clientes extends React.Component{
    state={
        clientes:[],
        actualizando:false,
        updateCliente:{
            _id:"",
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
        }
    }
    changeData(e){
        console.log(e.target.id,e.target.value)
        const cliente=this.state.updateCliente
        cliente[e.target.id]=e.target.value
        this.setState({updateCliente:cliente})
    }

    eliminarCliente(index){
        fetch(`http://localhost:3003/clientes/${index}`,{
            method:"DELETE"
        })
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }

    actulizarCliente(index){
        this.setState({updateCliente:this.state.clientes[index]})
        this.setState({actualizando:true})

    }
    componentDidMount(){
        fetch("http://localhost:3003/clientes")
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({clientes:data})
        })
    }

    submitUpdateClient(){
        delete this.state.updateCliente._id
       console.log(`http://localhost:3003/clientes/${this.state.updateCliente.documento}`)
        fetch(`http://localhost:3003/clientes/${this.state.updateCliente.documento}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(this.state.updateCliente)
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            alert(data.title)
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Hola CLientes</h1>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">documento</th>
                            <th scope="col">1er nombre</th>
                            <th scope="col">2nd nombre</th>
                            <th scope="col">1er apellido</th>
                            <th scope="col">2nd Apellido</th>
                            <th scope="col">opciones</th>
                            </tr>
                        </thead>
                        <tbody>{
                                this.state.clientes.map((cliente,index)=>(
                                    <tr>
                            <th scope="row">{cliente.documento}</th>
                            <td>{cliente.primerNombre}</td>
                            <td>{cliente.segundoNombre}</td>
                            <td>{cliente.primerApellido}</td>
                            <td>{cliente.segundoApellido}</td>
                            <td><button className="btn btn-success"  onClick={this.actulizarCliente.bind(this,index)} >U</button><button className="btn btn-danger"  onClick={this.eliminarCliente.bind(this,cliente._id)} >I</button></td>
                            </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                {
                    
                    (this.state.actualizando)?(<div id="container-crear-clientes">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="mb-4">Actualizar Cliente</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Primer Nombre</label><br/>
                                        <input class="w-100" type="text" id="primerNombre"  value={this.state.updateCliente.primerNombre} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Segundo Nombre</label><br/>
                                        <input class="w-100" type="text" id="segundoNombre"  value={this.state.updateCliente.segundoNombre} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Primer Apellido</label><br/>
                                        <input class="w-100" type="text" id="primerApellido"  value={this.state.updateCliente.primerApellido} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Segundo Apellido</label><br/>
                                        <input class="w-100" type="text" id="segundoApellido"  value={this.state.updateCliente.segundoApellido} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Correo</label><br/>
                                        <input class="w-100" type="text" id="correo"   value={this.state.updateCliente.correo} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Digite Documento</label><br/>
                                        <input class="w-100" type="text" id="documento"  value={this.state.updateCliente.documento} onChange={this.changeData.bind(this)}/>
                                    </div>
                                    <div class="col-md-6 px-3 my-2">
                                        <label for="">Selleccionw Documento</label><br/>
                                        <select class="form-control" id="tipoDocumento"   value={this.state.updateCliente.tipoDocumento} onChange={(e)=>{this.changeData.bind(this,'tipoDocumento',e.target.value)}}>
                                            <option value="CC">Cedula de Ciudadania</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="NIT">NIT</option>
                                        </select> 
                                    </div>
                                    <button class="btn btn-success my-3 mx-3" onClick={this.submitUpdateClient.bind(this)} >Agregar usuario</button>
                                </div>
                            </div>
                        </div>
                    </div>):(<br/>)
            
                }
            </div>
            
        );
    }
}