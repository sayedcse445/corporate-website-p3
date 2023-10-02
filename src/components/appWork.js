import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from '../img/pexels-ferdinand-studio-1020056.jpg'
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}




let AppWork = () => {
    return (
        <section id='work'>
        <Container>
            <div className="app">
                <div className="text-center">
                    <h3>OUR WORKS</h3>
                    <p>Easily realign text to components with text alignment classes.</p>
                </div>
                <div className="">
                    <Row className="">
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md='auto' >
                            <div className="col-md-6 d-flex  mt-2">
                                <div className="imageitem1">
                                    <img className="imageitem2" src={img} alt="" />
                                    <div className="intro"><h3>Tittle</h3><p>Subtittle</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="mt-3 d-flex justify-content-center align-items-center">
                        <Pagination>{items}</Pagination>
                        <br />
                    </div>
                </div>

            </div>
        </Container>
        </section>
    )
}

export default AppWork