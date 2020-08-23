import React from 'react';
import ServiceFactura from "../../../services/factura.service"
import Modal from 'react-modal';
import ServiceCliente from "../../../services/clientes.service"
import ServiceVendedor from "../../../services/vendedor.service"
import Swal from 'sweetalert2'


export default class Factura extends React.Component
{
    customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       
    state={
        facturas:[],
        modal:false,
        facturaUnica:{
            productos:[]
        },
        clienteFactura:{},
        vendedorFactura:{},
        documentoCliente:""
    }

    closeModal(){
        this.setState({modal:false})
    }

    async componentDidMount(){
        this.mostrarFacturas()
        
    }
    async mostrarFacturas(){
        const facturas=await ServiceFactura.mostrarFacturas()
        console.log(facturas)
        
        this.setState({facturas})
    }
    async eliminarFactura(id){
        Swal.fire({
            title: ' borrar?',
            text: "quieres borrar la factura",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si',
            cancelButtonText:"cancelar"
          }).then(async (result) => {
            if (result.value) {
                const data = await ServiceFactura.eliminarFactura(id)
                if(data.title="ok"){
                    Swal.fire(
                        data.title,
                        data.message,
                        'success'
                      )        
                      this.mostrarFacturas()
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: data.title,
                        text: data.message,
                        
                    })
                }
              
            }
          })
        
    }

    async BuscarDocumento(e){
        if(e.keyCode==13){
            let facturas=[] 
            facturas= await ServiceFactura.mostrarFacturasByCliente(this.state.documentoCliente)
            console.log(facturas)
            this.setState({facturas})
        }        
    }

    async mostrarCampos(id){
        this.setState({modal:true})
        const facturaUnica=this.state.facturas[id]
        const clienteFactura=await ServiceCliente.mostrarClienteFactura(facturaUnica.cliente)
        const vendedorFactura = await ServiceVendedor.mostrarVendedorById(facturaUnica.vendedor)
        console.log(this.state.facturas[id].productos)
        this.setState({facturaUnica})
        this.setState({clienteFactura})
        this.setState({vendedorFactura})
    }
    render(){
        return(
            <div>

                <Modal style={this.customStyles} isOpen={this.state.modal} >
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Factura</h5>
        </div>
    <div class="modal-body">
        <h3>Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <p>Nombre: <span id="modal-cliente-nombre">{this.state.clienteFactura.primerNombre} {this.state.clienteFactura.segundoNombre}</span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-cliente-apellido">{this.state.clienteFactura.primerApellido} {this.state.clienteFactura.segundoApellido}</span></p>
            </div>
            <div class="col-md-6">
                <p>Correo: <span id="modal-cliente-correo">{this.state.clienteFactura.correo}</span></p>
            </div>
            <div class="col-md-6">
                <p>Documento: <span id="modal-cliente-documento">{this.state.clienteFactura.documento}</span></p>
            </div>
            <div class="col-md-6">
                <p>Tipo Documento: <span id="modal-cliente-tipodoc">{this.state.clienteFactura.tipoDocumento}</span></p>
            </div>
        </div>
        <h3>Vendedor</h3>
        <div class="row">
            <div class="col-md-6">
            <p>Nombre: <span id="modal-vendedor-nombre">{this.state.vendedorFactura.primerNombre} {this.state.vendedorFactura.segundoNombre}</span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-vendedor-apellido">{this.state.vendedorFactura.primerApellido} {this.state.vendedorFactura.segundoApellido}</span></p>
            </div>
        </div>
        <h3>Productos</h3> 
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">cantidad</th>
                <th scope="col">precio</th>
                </tr>
            </thead>
            <tbody id="modal-product">
                {this.state.facturaUnica.productos.map((producto,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        </div>
    </div>
    <div class="modal-footer">s
        <button type="button" class="btn btn-secondary" onClick={this.closeModal.bind(this)}>Close</button>
    </div>
    </div>
  </div>
</Modal>

<div id="container-facturas">
<h2 class="mb-4">Facturas</h2>

<div class="container-fluid my-5">
    <div className="row my-3">
        <div className="col-md-4">
           <label for="input-cliente">Buscar por cliente</label>
           <input type="text" id="input-cliente" value={this.state.documentoCliente} onChange={(e)=>{this.setState({documentoCliente:e.target.value})}} onKeyUp={this.BuscarDocumento.bind(this)}/>
        </div>
    </div>
    <div >
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Total</th>
                <th scope="col">Eventos</th>
              </tr>
      
            </thead>
            <tbody id="table-factura">
                {this.state.facturas.map((factura,index)=>(
                    <tr>
                    <td scope="row">{factura._id}</td>
                    <td>{factura.fecha}</td>
                    <td>{factura.total}</td>
                    <td><button class="btn  btn-success" onClick={this.mostrarCampos.bind(this,index)}><i class="fa fa-plus"></i></button> <button class="btn  btn-danger" onClick={this.eliminarFactura.bind(this,factura._id)}><i class="fa fa-trash"></i></button></td>
                </tr>    
                ))}
            </tbody>
          </table>
    </div>
    
</div>
</div>
            </div>
        );
    }
}