import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import {  
  useParams
} from "react-router-dom";

export default function Usuario() {
  const { id } = useParams();
  //useEffect es para correr algo una vez luego que se haya cargado el formulario
  useEffect(() => {
    if(id !== 'nuevo'){

        axios.get('http://localhost:3999/api/users/' + id)
        .then(res => {
          
            setNames(res.data.user.names);
            setSurnames(res.data.user.surnames);
            setEmail(res.data.user.email);
            setStatus(res.data.user.status);
            setRole(res.data.user.role);
            console.log('Editando usuario');
            
          }).catch((error) => {
            console.log('Creando nuevo usuario');
            console.log(error);
          })    
      }
  }, [])
  let [names, setNames] = useState('')
  let [surnames, setSurnames] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword1] = useState('')
  let [password2, setPassword2] = useState('')
  let [status, setStatus] = useState('')
  let [role, setRole] = useState('')
  let [errors, setErrors] = useState('')
  
  
  function onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      names: names,
      surnames: surnames,
      email: email,
      password: password,      
      status: status,
      role: role
    };
    console.log(studentObject);
    if(id !== 'nuevo'){
        axios.put('http://localhost:3999/api/users/' + id, studentObject)
        .then((res) => {
          //console.log(res.data)
          console.log('Usuario editado con exito')
          window.location.reload()
        }).catch((error) => {
          console.log(error)
        })
    }else{
        axios.post('http://localhost:3999/api/users/add/', studentObject)
        .then((res) => {
          //console.log(res.data)
          console.log('Usuario agregado con exito')
          window.location.reload()
        }).catch((error) => {
          console.log(error)
        })
        
    }
    
  }

  function onChangeNames(e) {    
    setNames(e.target.value);    
  }
  function onChangeSurnames(e) {
    setSurnames(e.target.value);
  }
  function onChangeStatus(e) {    
    setStatus(e.target.value);
  }
  function onChangeEmail(e) {    
    setEmail(e.target.value);
  }
  function onChangePassword1(e) {
    let errors = {};
    errors["password2"] = "";
    if(e.target.value !== password2){
      errors["password2"] = "Las contraseñas deben ser iguales.";
    }
    setErrors(errors);
    setPassword1(e.target.value);
  }
  function onChangePassword2(e) {
    let errors = {};
    errors["password2"] = "";
    if(e.target.value !== password){
      errors["password2"] = "Las contraseñas deben ser iguales.";
    }
    setErrors(errors);
    setPassword2(e.target.value);
  }
  function onChangeRole(e) {    
    setRole(e.target.value);    
  }

  return (
    
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Nombres">
          <Form.Label><strong>Nombre</strong></Form.Label>
          <Form.Control type="text" value={names} onChange={onChangeNames} required/>
        </Form.Group>

        <Form.Group controlId="Apellidos">
          <Form.Label><strong>Apellidos</strong></Form.Label>
          <Form.Control type="text" value={surnames} onChange={onChangeSurnames} required/>
        </Form.Group>

        <Form.Group controlId="Status">
          <Form.Label><strong>Status</strong></Form.Label>
          <Form.Check
            value="A"
            type="radio"
            
            name="OpcionesStatus"
            label="Activo"
            checked={status === "A"}
            onChange={onChangeStatus}
            required
          />
          <Form.Check
            value="I"
            type="radio"
            
            name="OpcionesStatus"
            label="Inactivo"
            checked={status === "I"}
            onChange={onChangeStatus}            
          />
        </Form.Group>        

        <Form.Group controlId="Email">
          <Form.Label><strong>Email</strong></Form.Label>
          <Form.Control type="email" value={email} onChange={onChangeEmail} required/>
        </Form.Group>

        <Form.Group controlId="Password1">
          <Form.Label><strong>Contraseña</strong></Form.Label>
          <Form.Control type="password" value={password} onChange={onChangePassword1} required/>
        </Form.Group>

        <Form.Group controlId="Password2">
          <Form.Label><strong>Repetir contraseña</strong></Form.Label>
          <Form.Control type="password" value={password2} onChange={onChangePassword2} required/>
          <div className="text-danger">{errors.password2}</div>
        </Form.Group>

        <Form.Group controlId="Rol">
          <Form.Label><strong>Rol</strong></Form.Label>        
          <Form.Check
            value="Administrador"
            type="radio"
            
            name="OpcionesRol"
            label="Administrador"
            checked={role === "Administrador"}
            onChange={onChangeRole}
            required
          />
          <Form.Check
            value="Planta"
            type="radio"
            
            name="OpcionesRol"
            label="Planta"
            checked={role === "Planta"}
            onChange={onChangeRole}
          />

          <Form.Check
            value="Mecanico"
            type="radio"
            
            name="OpcionesRol"
            label="Mecanico"
            checked={role === "Mecanico"}
            onChange={onChangeRole}
          />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}