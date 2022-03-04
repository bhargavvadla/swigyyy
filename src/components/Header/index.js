import "./index.css"
import {Link} from 'react-router-dom'

const Header = () => {

    return <><div className="header-container">
        <div className="header-responsive-lg">
            <Link to="/" className="nav-link">
                <img
                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645633658/swigyyy/assets/logo_ebleaj.png"
                    alt="website logo"
                    className="nav-logo"
                />
            </Link>

                <ul className="nav-menu-lg">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active-link" >
                            Home 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">
                            Services 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            About Us
                        </a>
                    </li>
                </ul>

            <ul className="get-in-container">

                <li className="nav-item">
                    <Link to="/signin" className="nav-link active-link">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        <button type="button" className="signup-btn">
                        Sign Up

                        </button>
                    </Link>
                </li>
            </ul>

        </div>

        <div className="header-responsive-sm">
            <Link to="/" className="nav-link">
                <img
                    src="https://res.cloudinary.com/bhargavvadla4b6/image/upload/v1645633658/swigyyy/assets/logo_ebleaj.png"
                    alt="website logo"
                    className="nav-logo"
                />
            </Link>
        </div>
        
    </div>
    </>
}

export default Header 