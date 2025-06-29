import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <section className='registration w-100 h-auto'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 content border-3 border-right ">
                            <Link to="/registration-form"><Button>Test Registration <FaArrowCircleRight /> </Button></Link>
                        </div>
                        <div className="col-md-6 content border-3 border-left ">
                            <Link to="/enquiry-form"><Button>Enquriy Form <FaArrowCircleRight /> </Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-light pt-5 pb-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <h5>e<sup>4</sup>exams</h5>
                            <p>Building solutions for a better e<sup>4</sup>exams experience. Reach out to us with any questions or feedback.</p>
                        </div>

                        <div className="footer-services col-md-4 mb-4">
                            <h5>Our Services</h5>
                            <p>
                                <li><a href="#">Examination Delivery</a></li>
                                <li><a href="#">Examination Manpower Services</a></li>
                                <li><a href="#">Examination Infrastructure Services</a></li>
                                <li><a href="#">Examination Auxiliary Services</a></li>
                            </p>
                        </div>


                        <div className="col-md-4 mb-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>Email: <a href="mailto:info@yourcompany.com" className="text-decoration-none text-info">e4examss@gmail.com</a></li>
                                <li>Phone: <a href="tel:+1234567890" className="text-decoration-none text-info">+91 8383816014 , 8368201763 , 8851107734</a></li>
                                <li>Address: : 205 A, Shyam Vihar Phase 1, Krishna Market Road, Deenpur,
                                    Najafgarh - N.D-110043</li>
                            </ul>
                        </div>

                    </div>

                    <div className="text-center mt-4 small text-secondary">
                        &copy; 2025 e<sup>4</sup>exams. All rights reserved.<br/>
                        Website Desgin and Developed Ashish Kumar
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
