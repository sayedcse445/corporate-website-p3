import React from "react";
import { Container, Row } from "react-bootstrap";
import '../components/appAbout.css'


let AppAbout = () => {
    return (
        <div className="App">
            <Container >
                <Row xs ={7}>
                <div className="mt-5">
                    <div className="head text-center">
                        <h3>ABOUT US</h3>
                        <p>Using color to add meaning only provides a visual indication.</p>
                    </div>
                    <div className="d-flex mb-4">
                        <div className=" " >
                            <img src="https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg?auto=compress&cs=tinysrgb&w=300"  alt="" />

                        </div>
                        <div className="">
                            <p className="m-2">Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.</p>
                                
                            <div className="m-2">
                            <h4>HTML/CSS/JS</h4>
                            <div className="progress">
                                <div className="progress-bar bg-info" style={{width: "20%"}}></div>
                            </div>
                            <h4>RESPONSIVE</h4>
                            <div className="progress">
                                <div clclassNameass="progress-bar bg-success" style={{width: "40%"}}></div>
                            </div>
                            <h4>PHOTOSHOP</h4>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{width: "80%"}}></div>
                            </div>
                            <h4>PYTHONE</h4>
                            <div className="progress">
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                            </div>


                        </div>
                    </div>
                </div>
                </Row>
            </Container>
        </div>
    )
}

export default AppAbout