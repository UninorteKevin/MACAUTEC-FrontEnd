import { Card, Row, Col, Form, Image } from "react-bootstrap";
const Perfil = () => {
    return ( 
        <div className="container">
            <h1>Perfil del usuario</h1>
            <hr />
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Image src="/profile_default.svg" roundedCircle />
                            <div className="details text-center">
                                <h4>Username</h4>
                                <span>User role</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="container">
                                <Form>
                                    <div className="row mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Identificacion" disabled = {true} />
                                        </div>
                                    </div>
                                    <div className="row g-2 mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Nombres"/>
                                        </div>
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Apellidos"/>
                                        </div>
                                    </div>
                                    <div className="form-row mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Correo electronico" />
                                        </div>
                                    </div>
                                    <div className="form-row mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Rol" disabled = {true}/>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4>Administrar credenciales</h4>
                                    <div className="form-row mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Cambiar contraseña" />
                                        </div>
                                    </div>
                                    <div className="form-row mb-2">
                                        <div className="col">
                                            <input className = "form-control" type="text" placeholder = "Confirmar contraseña" />
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="col">
                                            <input className = "btn btn-success" type="submit" value="Guardar cambios" />
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Perfil;