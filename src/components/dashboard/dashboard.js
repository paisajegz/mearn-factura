import React from 'react';
import './dashboard.css'
import Clientes from "./clientes/clientes"
import CrearClientes from "./crear-clientes/crear-clientes"
import CrearFactura from  "./crear-factura/crear-factura"
import { Route, Link, Redirect } from "react-router-dom";
import Factura from './facturas/factura';
import Logout from '../logout/logout';

export default class DashBoard extends React.Component{
    state={
        active:"active"
    }

    constructor(props){
        super(props)
    }

    cambiarEstadoMenu(){
        this.setState({active:((this.state.active=="")?"active":"")})
    }
    render(){
        return(
            <div className="wrapper d-flex align-items-stretch">
            <nav id="sidebar" className={this.state.active}>
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={this.cambiarEstadoMenu.bind(this)}>
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <h1><a href="index.html" className="logo">Flash</a></h1>
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <Link to="/dashboard/facturas"><span className="fas fa-store mr-3"></span> Factura</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/crear-factura"><span className="fa fa-plus mr-3"></span> Crear Facturas</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/clientes" ><span className="fa fa-user mr-3"></span> Clientes</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/crear-cliente" ><span className="fa fa-user-plus mr-3"></span> Crear Clientes</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/close"><span className="fa fa-times mr-3"></span> Cerrar session</Link>
                        </li>
                    </ul>

                    <div className="mb-5">
                        <h3 className="h6 mb-3">Facturas</h3>
                        <form action="#" className="subscribe-form">
                            <div className="form-group d-flex">
                                <div className="icon"><span className="icon-paper-plane"></span></div>
                                <input type="text" className="form-control" placeholder="Enter Email Address"/>
                            </div>
                        </form>
                    </div>

                    <div className="footer">
                        <p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                            </p>
                    </div>

                </div>
            </nav>

            
            <div id="content" className="p-4 p-md-5 pt-5">
                <Redirect to="/dashboard/facturas"/>
                <Route path="/dashboard/facturas">
                    <Factura/>
                </Route>
                <Route path="/dashboard/crear-factura">
                    <CrearFactura/>
                </Route>
                <Route path="/dashboard/crear-cliente">
                    <CrearClientes/>
                </Route>
                <Route path="/dashboard/clientes">
                    <Clientes/>
                </Route>
                <Route path="/dashboard/close">
                    <Logout cambiarLogin={this.props.cambiarLogin}/>
                </Route>
            </div>
        </div>
        );
    }
}