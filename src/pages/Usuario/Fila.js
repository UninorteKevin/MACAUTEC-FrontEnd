import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UsuarioFila extends Component {

    constructor(props) {
        super(props);
        this.borrarUsuario = this.borrarUsuario.bind(this);
    }

    borrarUsuario() {
        axios.delete('http://localhost:3999/api/users/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Usuario borrado con exito!')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
        
    }
    
    render() {
        const esMecanico = this.props.obj.role === 'Mecanico'

        return (
            <tr>
                <td>{this.props.obj.names} {this.props.obj.surnames}</td>
                <td>{this.props.obj.status}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.createdAt}</td>
                <td>{this.props.obj.role}</td>
                <td>
                    {esMecanico ? (
                    <Link className="btn btn-primary" to={"/agenda/mecanico/" + this.props.obj._id}>
                        Agenda
                    </Link>
                    ):(<div></div>)}
                    <Link className="btn btn-success" to={"/usuarios/" + this.props.obj._id}>
                        Editar
                    </Link>
                    <Button onClick={this.borrarUsuario} className="btn btn-danger" variant="danger">Borrar</Button>
                </td>
            </tr>
        );
    }
}