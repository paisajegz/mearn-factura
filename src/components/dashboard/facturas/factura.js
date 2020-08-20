import React from 'react';


export default class Factura extends React.Component
{

    render(){
        return(
            <div>
                <div class="modal fade modal-factura" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Factura</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    <div class="modal-body">
        <h3>Cliente</h3>
        <div class="row">
            <div class="col-md-6">
                <p>Nombre: <span id="modal-cliente-nombre"></span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-cliente-apellido"></span></p>
            </div>
            <div class="col-md-6">
                <p>Correo: <span id="modal-cliente-correo"></span></p>
            </div>
            <div class="col-md-6">
                <p>Telefono: <span id="modal-cliente-telefono"></span></p>
            </div>
            <div class="col-md-6">
                <p>Documento: <span id="modal-cliente-documento"></span></p>
            </div>
            <div class="col-md-6">
                <p>Tipo Documento: <span id="modal-cliente-tipodoc"></span></p>
            </div>
        </div>
        <h3>Vendedor</h3>
        <div class="row">
            <div class="col-md-6">
                <p>Nombre: <span id="modal-vendedor-nombre"></span></p>
            </div>
            <div class="col-md-6">
                <p>Apellido: <span id="modal-vendedor-apellido"></span></p>
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
            </tbody>
        </table>
        <div>
        </div>
    </div>
    <div class="modal-footer">s
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
  </div>
</div>

<div id="container-facturas">
<h2 class="mb-4">Facturas</h2>

<div class="container-fluid my-5">
    <div >
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Fecha</th>
                <th scope="col">Total</th>
                <th scope="col">Eventos</th>
              </tr>
      
            </thead>
            <tbody id="table-factura">
                <tr>
                    <td scope="row">1</td>
                    <td>DASJDAKDJASDJ</td>
                    <td>jasudauduas jasuduas jjuasaud uasd</td>
                    <td>192292929</td>
                    <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
              <tr>
                  <td scope="row">1</td>
                  <td>DASJDAKDJASDJ</td>
                  <td>jasudauduas jasuduas jjuasaud uasd</td>
                  <td>192292929</td>
                  <td><button class="btn  btn-success"><i class="fa fa-plus"></i></button> <button class="btn  btn-danger"><i class="fa fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
    </div>
    
</div>
</div>
            </div>
        );
    }
}