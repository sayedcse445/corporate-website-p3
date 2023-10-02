import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const blogData = [
  {
    id: 1,
    image: require('../img/pexels-pixabay-259915.jpg'),
    time: '15 Nov 2016',
    title: 'Coffee Lovers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../img/pexels-rovenimagescom-949587.jpg'),
    time: '10 Nov 2016',
    title: 'Tips for UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../img/pexels-pixabay-531880.jpg'),
    time: '07 Nov 2016',
    title: 'Beautiful Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.twitter.com'
  }
]


let BlogApp = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="tittle-holder">
          <h2>Latest from Blog</h2>
          <div className="subtittle">Get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map (blog =>{
              return(
                <Col sm={3} md={6} key={blog.id}>
            <div className="holder">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blog.image} />
                <Card.Body>
                  <time>{blog.key}</time>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>
                    {blog.description}
                  </Card.Text>
                  <a href={blog.link} className="btn btn-primary">Read More <i class='fas fa-chevron-right'></i></a>
                </Card.Body>
              </Card>
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

export default BlogApp