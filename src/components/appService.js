import React from "react";
import { Col, Row } from "react-bootstrap";
import "../components/appServices.css"

let AppService = () => {
    return (
        <section id="service">
        <div className="AppServices mt-3">
            <div className="head text-center">
                <h3>OUR SERVICE</h3>
                <p>Fires immediately when the slide instance method is invoked.</p>
            </div>
            <Row className="p-4 m-5">
                <Col sm={4} className="border-radius-none">
                    <div class="card border-0" >
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                <div className="card border-0" style={{width: "18rem;"}}>
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </Col>
                <Col sm={4}>
                <div className="card border-0" style={{width: "18rem;"}}>
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>


                <Col sm={4}>
                    <div className="card border-0" style={{width: "18rem;"}}>
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                <div className="card border-0" style={{width: "18rem;"}}>
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </Col>
                <Col sm={4}>
                <div className="card  border-0" style={{width: "18rem;"}}>
                        <div className="card-body">
                        <i className="fa fa-file fa-3x rounded-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                            <h2 className="">Respossive Design</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
        </section>
    )
}

export default AppService