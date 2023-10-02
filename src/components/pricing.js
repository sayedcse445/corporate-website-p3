import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
        id: 1,
        plan: 'Basic',
        price: '£49',
        features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.google.com'
      },
      {
        id: 2,
        plan: 'Premium',
        price: '£149',
        features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.facebook.com'
      },
      {
        id: 3,
        plan: 'Ultimate',
        price: '£349',
        features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.twitter.com'
      }
]


let AppPricing = () => {
    return (
        <section id="pricing" className="block pricing">
            <Container fluid>
                <div className="tittle-holder align-items-center flex-column d-flex justify-content-center">
                    <h2>Pricing &amp; plans</h2>
                    <div className="subtittle"> -check our pricing & plans</div>
                </div>
                <Row>
                    {
                        pricingData.map(pricing => {
                            return (
                                <Col sm={3} key={pricing.id}>
                                    <div className="heading">
                                        <h3>{pricing.plan}</h3>
                                        <span className="price">{pricing.price}</span>
                                    </div>
                                    <div className="content">
                                            {
                                                pricing.features.map((features,index) =>{
                                                    return(
                                                        <ListGroup.Item key={index}>{features}</ListGroup.Item>
                                                    )
                                                })
                                            }
                                            
                                    </div>
                                    <div className="btn-holder">
                                        <a href={pricing.link} className="btn btn-primary">Order Now</a>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}
export default AppPricing 