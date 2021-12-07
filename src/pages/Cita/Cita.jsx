import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import {  
  useParams
} from "react-router-dom";

export default function Cita() {
  const { id } = useParams();
  //useEffect es para correr algo una vez luego que se haya cargado el formulario
  useEffect(() => {
    if(id !== 'nuevo'){

        axios.get('http://localhost:3999/api/services/' + id)
        .then(res => {
          
            setName(res.data.service.name);
            setState(res.data.service.state);
            setDescription(res.data.service.description);
            setCost(res.data.service.cost);
            setDurationHours(res.data.service.durationHours);
            console.log('Editando Cita');
            
          }).catch((error) => {
            console.log('Creando nuevo Cita');
            console.log(error);
          })    
      }
  }, [])
  let [name, setName] = useState('')
  let [state, setState] = useState('')
  let [description, setDescription] = useState('')
  let [cost, setCost] = useState('')
  let [durationHours, setDurationHours] = useState('')

  let [errors, setErrors] = useState('')
  
  function onChangeName(e) {    
    setName(e.target.value);    
  }
  function onChangeState(e) {
    setState(e.target.value);
  }
  function onChangeDescription(e) {    
    setDescription(e.target.value);
  }
  function onChangeCost(e) {    
    setCost(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: name,
      state: state,
      description: description,
      cost: cost,      
      durationHours: durationHours
    };
    console.log(studentObject);
    if(id !== 'nuevo'){
        axios.put('http://localhost:3999/api/services/' + id, studentObject)
        .then((res) => {
          //console.log(res.data)
          console.log('Cita editado con exito')
          window.location.reload()
        }).catch((error) => {
          console.log(error)
        })
    }else{
        axios.post('http://localhost:3999/api/services/add/', studentObject)
        .then((res) => {
          //console.log(res.data)
          console.log('Cita agregado con exito')
          window.location.reload()
        }).catch((error) => {
          console.log(error)
        })
        
    }
    
  }

  return (
    
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Nombres">
          <Form.Label><strong>Nombre</strong></Form.Label>
          <Form.Control type="text" value={name} onChange={onChangeName} required/>
        </Form.Group>

        <Form.Group controlId="Estado">
          <Form.Label><strong>Estado</strong></Form.Label>
          <Form.Check
            value="Disponible"
            type="radio"
            
            name="OpcionesStatus"
            label="Disponible"
            checked={state === "Disponible"}
            onChange={onChangeState}
            required
          />
          <Form.Check
            value="No disponible"
            type="radio"
            
            name="OpcionesStatus"
            label="No disponible"
            checked={state === "No disponible"}
            onChange={onChangeState}            
          />
        </Form.Group>        

        <Form.Group controlId="Descripcion">
          <Form.Label><strong>Descripcion</strong></Form.Label>
          <Form.Control type="textarea" value={description} onChange={onChangeDescription} required/>
        </Form.Group>

        <Form.Group controlId="Costo">
          <Form.Label><strong>Costo</strong></Form.Label>
          <Form.Control type="text" value={cost} onChange={onChangeCost} required/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}