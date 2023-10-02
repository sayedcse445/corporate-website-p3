import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

let FooterApp = () =>{

    // const [showTopBtn,setShowTopBtn] =useState(false);

    // useEffect(()=>{
    //     window.addEventListener('scroll',()=>{
    //         if(window.screenY > 400) {
    //             setShowTopBtn(true)
    //         }else{
    //             setShowTopBtn(false)
    //         }
    //     })
    // },[])

    // function goTop () {
    //     window.scrollTo({
    //         top:0,
    //         behavior: 'smooth'
    //     })
    // }

    return(
        <section id='footer' className="Footer">
            <Container fluid>
            <div className="head"style={{background:"orange"}}>
                    <div className="text-center ">@2023 Corporate. All Right Reserved</div>
                    <div className="social">
                        <ul className=" list-unstyled justify-content-center align-items-center d-flex ">
                        <li className="mr-2"><a href=""><i className="fab fa-facebook"></i></a></li>
                        <li  className="mr-2"><a href=""><i className="fab fa-twitter"></i></a></li>
                        <li  className="mr-2"><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                } */}
            </Container>
        </section>
    )
}
export default FooterApp