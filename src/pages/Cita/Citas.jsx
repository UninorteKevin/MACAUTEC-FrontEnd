import { Card, Row, Col, Button, Table, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Servicio = () => {
    return ( 
        <div className="table-wrapper">
            <h1>Gestionar citas</h1>
            <Row className = "mb-3">
                   <Col md="3" className = "px-3">
                    <Link className="btn btn-success rounded-pill" to={"/servicios/nuevo/"}>
                        Nuevo
                    </Link>                    
                </Col>
            </Row>
            <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>
                        <Form.Group controlId="Descripcion">
                            <Form.Control placeholder="Buscar" type="text" />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Control as="select" >
                            <option value="names">Cliente</option>
                            <option value="email">Tipo servicio</option>                            
                            <option value="role">Mecanico</option>
                        </Form.Control>
                    </td>
                </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Estado</th>
                <th>Tiempo estimado</th>
                <th>Costo</th>
                <th>Cliente</th>
                <th>Placa vehiculo</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Revisión de frenos</td>
                    <td>Agendada</td>
                    <td>4</td>
                    <td>150000</td>
                    <td>El Kevin</td>
                    <td>HTD 524</td>
                    <td>15-12-2021</td>
                    <td>9:00</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Rotación de llantas</td>
                    <td>En progreso</td>
                    <td>5</td>
                    <td>350000</td>
                    <td>El Javier</td>
                    <td>TYU 687</td>
                    <td>15-12-2021</td>
                    <td>10:00</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Amortiguadores</td>
                    <td>Cancelada</td>
                    <td>3</td>
                    <td>250000</td>
                    <td>La Jeimy</td>
                    <td>PRT 147</td>
                    <td>15-12-2021</td>
                    <td>11:00</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Cambio de aceite</td>
                    <td>Completada</td>
                    <td>1</td>
                    <td>50000</td>
                    <td>El profe</td>
                    <td>PLA 693</td>
                    <td>15-12-2021</td>
                    <td>12:00</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>
                
            </tbody>
          </Table>
        </div>
     );
}
 
export default Servicio;