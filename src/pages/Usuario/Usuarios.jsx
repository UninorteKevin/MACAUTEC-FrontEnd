import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UsuarioFila from './Fila';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { Card, Row, Col, Button } from "react-bootstrap";

export default class Usuarios extends Component {
    
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
            this.setState({ filtrados: this.state.usuarios });
            return;
        }            
        if(filtro === 'names'){
            this.setState({ filtrados: this.state.usuarios.filter(function (el) {                
                return el.names.toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1 || el.surnames.toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1;
            }) });
            
        }else{            
            this.setState({ filtrados: this.state.usuarios.filter(function (el) {
                return el[filtro].toString().toLowerCase().indexOf(cadena.toString().toLowerCase()) > -1;
            }) });            
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
          <h1>Gestionar usuarios</h1>
          <Row className = "mb-3">
              <Col md="3">
                <Card className = "py-1 rounded-pill bg-info">
                    <Card.Body><strong>Total usuarios: {this.state.usuarios.length}</strong></Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card className = "p-1 rounded-pill bg-success">
                    <Card.Body><strong>Usuarios activos: {this.state.activos.length}</strong></Card.Body>
                </Card>
              </Col>
              <Col md="3" className = "px-3 d-flex align-items-center justify-content-center">
                <Link className="btn btn-success rounded-pill" to={"/usuarios/nuevo/"}>
                    Nuevo
                </Link>
              </Col>
          </Row>

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