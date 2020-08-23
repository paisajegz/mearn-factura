import React from 'react';
import ServiceCliente from "../../../services/clientes.service"
import Swal from 'sweetalert2'

export default class CrearClientes extends React.Component
{
    state={
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
    }

    limpiarClientes(){
        this.setState({
            primerNombre:"",
            segundoNombre:"",
            primerApellido:"",
            segundoApellido:"",
            correo:"",
            tipoDocumento:"CC",
            documento:""
    })
    }
    async guardarCliente(){
        const data = await ServiceCliente.crearCliente(this.state)
        if(data.title="ok"){
            Swal.fire(
                data.title,
                data.message,
                'success'
              )
              this.limpiarClientes()
        }else{
            Swal.fire({
                icon: 'error',
                title: data.title,
                text: data.message,
                
            })
        }
    }

    render(){
        return(
            <div id="container-crear-clientes">
                <div class="card">
                    <div class="card-header">
                        <h2 class="mb-4">Crear Clientes</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Primer Nombre</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-prinombre" value={this.state.primerNombre}  onChange={(e) => this.setState({primerNombre:e.target.value})}/>
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Segundo Nombre</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-segnombre" value={this.state.segundoNombre}  onChange={(e)=>this.setState({segundoNombre:e.target.value})}/>
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Primer Apellido</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-priapellido" value={this.state.primerApellido} onChange={(e)=>this.setState({primerApellido:e.target.value})}/>
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Segundo Apellido</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-segapellido"  value={this.state.segundoApellido} onChange={(e)=>this.setState({segundoApellido:e.target.value})}/>
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Correo</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-correo" value={this.state.correo} onChange={(e)=>{this.setState({correo:e.target.value})}} />
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Digite Documento</label><br/>
                                <input class="w-100" type="text" id="txt-cliente-doc" value={this.state.documento} onChange={(e)=>{this.setState({documento:e.target.value})}}/>
                            </div>
                            <div class="col-md-6 px-3 my-2">
                                <label for="">Selleccionw Documento</label><br/>
                                <select class="form-control" id="txt-cliente-tipodoc" value={this.state.tipoDocumento} onChange={(e)=>{this.setState({tipoDocumento:e.target.value})}}>
                                    <option value="CC">Cedula de Ciudadania</option>
                                    <option value="TI">Tarjeta de Identidad</option>
                                    <option value="NIT">NIT</option>
                                </select> 
                            </div>
                            <button class="btn btn-danger my-3 mx-3" onClick={this.limpiarClientes.bind(this)}>Limpiar campos</button><button class="btn btn-success my-3 mx-3" onClick={this.guardarCliente.bind(this)}>Agregar usuario</button>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}