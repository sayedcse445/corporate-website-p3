import { Button } from "bootstrap";
import React from "react";
import '../components/heros.css'
import img1 from '../img/pexels-ferdinand-studio-1020056.jpg'
import im2 from '../img/pexels-evg-kowalievska-1191090.jpg'
import im3 from '../img/pexels-sabel-blanco-1589082.jpg'



let Heros = () =>{

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  
  <div className="carousel-item active fixed-background" style={{
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover', // Set the background to fixed on scroll
    backgroundPosition: 'center top',
    height: '100vh', // Set a fixed height for the item to make it occupy the full viewport height
}}>
    <div className="parent-container flex-column">
        <h3>Green University of Bangladesh</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button type="button" className="btn btn-primary">Primary</button>
    </div>
</div>
    

    <div className="carousel-item carouselTwo fixed-background"style={{backgroundImage:`url(${im2})`,backgroundSize:'cover',vh:'100%',hv:'cover'}} >
    <div className="parent-container flex-column">
        <h3>Green University of bangladesh</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
    </div>
   
    <div className="carousel-item carouselThree fixed-background" style={{backgroundImage:`url(${im3})`,backgroundSize:'cover',hv:'100%',hv:'cover'}} >
    <div className="parent-container flex-column">
        <h3>Green University of bangladesh</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Heros