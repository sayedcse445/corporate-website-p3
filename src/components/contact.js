import React from "react";

let ContactApp = () => {
    return (
        <section id="contact">
            <div className="text-center">
                <h2>Contact us</h2>
                <div>Get contat with us</div>
            </div>
            <div>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" required />
                        </div>
                        <div className="col">
                            <input type="Email" className="form-control" placeholder="Email Address" required />
                        </div>
                        <div className="col">
                            <input type="Number" className="form-control" placeholder="Enter Your Full Number" required />
                        </div>

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 mt-2">
                        <label for="comment">Your Comment:</label>
                        <textarea id="comment" name="comment" rows="4" cols="80"></textarea><br></br>

                        <input className="btn btn-info mx-auto" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <div className="google-map mt-2">
                {/* <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"></iframe> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459152.14486109844!2d89.08714135880456!3d25.963903398775123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e322dd64e6a709%3A0xfdbd594fde75d5d4!2sChaparhat%20High%20School!5e0!3m2!1sen!2sbd!4v1696248814030!5m2!1sen!2sbd" width="2000" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact">
                <div className="d-flex list-unstyled justify-content-between text-center">
                    <div className=" mr-5 col-lg-4 "> 
                        <i className="fas fa-envelope" style={{color:'red'}}></i><br/>
                        <p>hello@domain.com</p>
                    </div>
                    <div  className=" mr-5 col-lg-4">
                        <i className="fas fa-phone" style={{color:'red'}}></i><br/>
                        0000-0000-0000
                    </div>
                    <div  className=" mr-5 col-lg-4">
                        <i className="fas fa-map-marker-alt " style={{color:'red'}}></i><br/>
                        London, United Kingdom
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactApp