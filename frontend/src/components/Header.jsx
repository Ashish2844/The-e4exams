import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
import logo from './../assets/images/logo-image.jpeg'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-3 fw-bold" to="/"><img src={logo} alt="logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 ms-4" aria-current="page" role='button' aria-expanded="false" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 ms-4" role="button" aria-expanded="false" to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5 ms-4" role='button' aria-expanded="false" to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <Link 
                                className="nav-link fs-5 ms-4" role='button' aria-expanded="false" 
                                to="footer"
                                smooth={true}
                                duration={500}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
