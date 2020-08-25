import React from 'react';
import ServiceCliente from "../../../services/clientes.service"
import ServiceProducto from "../../../services/productos.service"
import ServiceFactura from "../../../services/factura.service"
import Swal from 'sweetalert2'
export default class CrearFactura extends React.Component{
    state={
        documentoCliente:"",
        nombreProducto:"",
        datosCliente:{},
        datosProductos:{},
        disableCar:true,
        listaProductos:[],
        totalFactura:0
    }

    calcularPrecio(){
        
        let total=0
        this.state.listaProductos.forEach(product => {
            total+=parseInt(product.total)
        });
        this.setState({totalFactura:total})
    }

    async buscarCliente(e){
        if(e.keyCode==13){
            const data=await ServiceCliente.mostrarClientesById(e.target.value)  
            this.setState({datosCliente: data})
        }
    }

    actualizarCantidad(e,index){
        console.log("funciona")
        const listaProductos=this.state.listaProductos
        listaProductos[index].cantidad=e.target.value
        listaProductos[index].total=listaProductos[index].precio*listaProductos[index].cantidad
        this.setState({listaProductos})
        console.log(listaProductos)
        this.calcularPrecio()
    }


    async buscarProducto(e){
        if(e.keyCode==13){
            const data =await ServiceProducto.mostrarProductosById(e.target.value)
            console.log(data)
            this.setState({datosProductos: data})
            this.setState({disableCar:false})
        }
    }
    eliminarLista(){
        this.setState({listaProductos:[]})
        this.setState({totalFactura:0})
        this.setState({disableCar:true})
        this.setState({datosProductos:{}})
        this.setState({datosCliente:{}})
    }

    agregarProductoFactura(){
        const index=this.state.listaProductos.length
        const listaProductos = this.state.listaProductos
        const datosProductos=this.state.datosProductos
        const itemProduct ={
            id:index+1,
            _id:datosProductos._id,
            nombre:datosProductos.nombre,
            cantidad: datosProductos.cantidad,
            precio:datosProductos.precio,
            total:parseInt(datosProductos.cantidad)*parseInt(datosProductos.precio)
        }
        listaProductos.push(itemProduct)
        this.setState({listaProductos})
        this.setState({disableCar:true})
        this.calcularPrecio()
    }

    async hacerPago(){
        const factura={
            cliente:this.state.datosCliente._id,
            vendedor:"5f3e79e6f163321e0092cc49",
            total:this.state.totalFactura.toString(),
            productos:[
            ]
        }    
        this.state.listaProductos.forEach((product)=>{
            factura.productos.push({
                nombre:product.nombre,
                idProducto:product._id,
                cantidad:product.cantidad,
                precio:product.precio
            })
        })
        console.log(factura)
        const data= await ServiceFactura.crearFactura(factura)
        if(data.title="ok"){
            Swal.fire(
                data.title,
                data.message,
                'success'
              )
              this.eliminarLista()
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
           <div id="container-crear-factura">
            <div class="card my-5">
                <div class="card-header">
                    <h2 class="mb-4">crear facturas</h2>
                </div>
                <div class="card-body">
                    <h3>Descripcion</h3>
                    <input type="text" id="factura-descripcion"/>
                    <div class="card">
                        <div class="card-header">
                            <h3>Datos del cliente</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 px-3 my-2">
                                    <label for="">Digite Documento</label>
                                    <input class="w-100" type="text" value={this.state.documentoCliente} onChange={(e)=>this.setState({documentoCliente:e.target.value})} onKeyUp={this.buscarCliente.bind(this)} />
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">Nombre: <span id="span-nombre">{this.state.datosCliente.primerNombre} {this.state.datosCliente.segundoNombre}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">Apellido: <span id="span-apellido">{this.state.datosCliente.primerApellido} {this.state.datosCliente.segundoApellido}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">Correo: <span id="span-correo">{this.state.datosCliente.correo}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">Tipo Documento: <span id="span-tipodoc">{this.state.datosCliente.tipoDocumento}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">Documento: <span id="span-doc">{this.state.datosCliente.documento}</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card my-5">
                        <div class="card-header">
                            <h1>Agregar Producto</h1>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Digite codigo del producto:</label><br/>
                                    <input type="text" class="w-50" value={this.state.nombreProducto}  onChange={(e)=>{this.setState({ nombreProducto: e.target.value}) }} onKeyUp={this.buscarProducto.bind(this)}/> 
                                </div>
                                <div class="col-md-6 px-3 my-2">
        <label for="">codigo: <span id="span-codigo">{this.state.datosProductos._id}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
        <label for="">Nombre: <span id="span-nombre">{this.state.datosProductos.nombre}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
        <label for="">Precio: <span id="span-precio">{this.state.datosProductos.precio}</span></label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <label for="">cantidad: <span id="span-cantidad">{this.state.datosProductos.cantidad}</span> </label>
                                </div>
                                <div class="col-md-6 px-3 my-2">
                                    <button class="btn btn-success"  id="btn-agregar-pro-fac" disabled={this.state.disableCar} onClick={this.agregarProductoFactura.bind(this)}>Agregar al factura</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card my-5" id="productos-crear-factura">
                        <div class="card-header">
                            <h1>Productos</h1>
                        </div>
                        <div class="card-body">
                            
                        <table class="w-100 text-center">
                            <thead>
                                <tr>
                                    <th style={{width: '10%'}}>id</th>
                                    <th style={{width: '20%'}}>nombre</th>
                                    <th style={{width: '10%'}}>cantidad</th>
                                    <th style={{width: '30%'}}>precio unidad</th>
                                    <th style={{width: '30%'}}>Total</th>
                                </tr>                                       
                            </thead>
                            <tbody id="contenido-factura">
                                {   
                                    this.state.listaProductos.map((product,index)=>(
                                        <tr>
                                            <th style={{width: '10%'}}>{product.id}</th>
                                    <th style={{width: '20%'}}>{product.nombre}</th>
                                    <th style={{width: '10%'}}><input type="text" style={{width:"80%"}} value={product.cantidad} onChange={(e)=>this.actualizarCantidad(e,index)}/></th>
                                    <th style={{width: '30%'}}>{product.precio}</th>
                                    <th style={{width: '30%'}}>{product.total}</th>
                                        </tr>  
                                    ))
                                }
                                
                            </tbody>
                        </table>
                        </div>
                        <div class="card-footer">
                            total: <span id="total-factura">{this.state.totalFactura}</span>
                            <button class="btn btn-danger" id="btn-limpiar-factura" onClick={this.eliminarLista.bind(this)}>limpiar todo</button><button class="btn btn-success" id="btn-enviar-factura" onClick={this.hacerPago.bind(this)}>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}