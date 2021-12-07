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
                <th>Servico</th>
                <th>Estado</th>
                <th>Tiempo estimado</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>
                        <Button className = "btn btn-warning btn-small">View</Button>
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