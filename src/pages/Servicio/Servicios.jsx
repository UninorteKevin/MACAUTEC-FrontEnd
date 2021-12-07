import { Card, Row, Col, Button, Table, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Servicio = () => {
    return ( 
        <div className="table-wrapper">
            <h1>Gestionar servicios</h1>
            <Row className = "mb-3">
                <Col md = "3">
                    <Card>
                        <Card.Body>
                            <h4>Mas solicitado</h4>
                            <span>---</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md = "3">
                    <Card>
                        <Card.Body>
                            <h4>Menos solicitado</h4>
                            <span>---</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="3" className = "px-3 d-flex align-items-center justify-content-center">
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
              </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Revisión de frenos</td>
                    <td>No disponible</td>
                    <td>4</td>
                    <td>150000</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Rotación de llantas</td>
                    <td>Disponible</td>
                    <td>5</td>
                    <td>350000</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Amortiguadores</td>
                    <td>Disponible</td>
                    <td>3</td>
                    <td>250000</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">Ver</Button>
                    </td>
                    <td>
                        <Button className = "btn btn-warning btn-danger ml-3">Eliminar</Button>
                    </td>
                </tr>

                <tr>
                    <td>Cambio de aceite</td>
                    <td>Disponible</td>
                    <td>1</td>
                    <td>150000</td>
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