import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UsuarioFila from './usuario-fila';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

export default class UsuariosGestionar extends Component {

    constructor(props) {
        super(props)

        this.onChangeTipoFiltro = this.onChangeTipoFiltro.bind(this);
        this.onChangeCadenaFiltro = this.onChangeCadenaFiltro.bind(this);

        this.state = {
            textobuscar:'',
            filtrobuscar:'names',
            usuarios: [],
            filtrados: [],
            activos: []
        };
    }
    
    ejecutaFiltro(cadena, filtro){
        if(cadena === ''){
            this.state.filtrados = this.state.usuarios;
            return;
        }            
        if(filtro === 'names'){
            this.state.filtrados = this.state.usuarios.filter(function (el) {                
                return el.names.toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1 || el.surnames.toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1;
            });
        }else{            
            this.state.filtrados = this.state.usuarios.filter(function (el) {
                return el[filtro].toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1;
            });
        } 
    }

    onChangeCadenaFiltro(e) {

        this.setState({ textobuscar: e.target.value });
        this.ejecutaFiltro(e.target.value, this.state.filtrobuscar)
    }
    onChangeTipoFiltro(e) {
        this.setState({ filtrobuscar: e.target.value });
        this.ejecutaFiltro(this.state.textobuscar, e.target.value)
    }

    componentDidMount() {
        axios.get('http://localhost:3999/api/users/list')
          .then(res => {
            console.log(res.data.users);
            this.setState({
              usuarios: res.data.users,
              filtrados: res.data.users,
              activos: res.data.activeusers
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    DataTable() {
        return this.state.filtrados.map((res, i) => {
            return <UsuarioFila obj={res} key={i} />;
        });
    }

    render() {
        return (<div className="table-wrapper">
          <h1>GESTIONAR USUARIOS</h1>
          <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>Total usuarios: {this.state.usuarios.length}</td>
                    <td>Activos: {this.state.activos.length}</td>
                    <td>
                        <Link className="btn btn-info" to={"/usuario-nuevo/"}>
                            Nuevo
                        </Link>
                    </td>
                </tr>
            </tbody>
          </Table>

          <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>
                        <Form.Group controlId="Descripcion">
                            <Form.Control placeholder="Buscar" type="text" value={this.state.textobuscar} onChange={this.onChangeCadenaFiltro} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Control as="select" value={this.state.filtrobuscar} onChange={this.onChangeTipoFiltro} >
                            <option value="names">Nombre</option>
                            <option value="email">Email</option>                            
                            <option value="role">Rol</option>
                        </Form.Control>
                    </td>
                </tr>
            </tbody>
          </Table>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Email</th>
                <th>Creado</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
      }
}