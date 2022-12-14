import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom"
import AuthService from "../services/auth.service"

import logo from './images/Neighborly-Logo.png';
import defaulticon from "./images/defaulticon.png";

const image = {
    name: "defaulticon",
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};

const NavLogo = {
    name: 'NavLogo',
    imageUrl: logo,
    imageHeight: 80,
    imageWidth: 140,
}

export default function Navbar(props) {
    const [ state, dispatch ] = useGlobalState();

    let navigate = useNavigate();

            function Logout() {
                navigate("home");
                AuthService.logout();
                window.location.reload();
                }

    return(

        <nav id="navbar" className="navbar navbar-expand-lg">

            <div className="container-fluid">

            <Link to="/home" className="navbar-brand">
                <img 
                        alt="the Neighborly site logo" 
                        src= {NavLogo.imageUrl}
                        style={{
                            width: NavLogo.imageWidth,
                            height: NavLogo.imageHeight
                            }}></img>
            </Link>

                <button id="button" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


{/* MAIN PAGE filters all posts to show those only in the user's location
                    {state.currentUser && (
                        <li className="nav-item">
                        <Link to="/main" className="nav-link">
                            Main Page
                        </Link>
                        </li>
                    )} */}

{/* EXCHANGE PAGE filters all posts by those with exchange tags */}
                    {/* {state.currentUser && (
                        <li className="nav-item">
                        <Link to="/exchange" className="nav-link">
                            Exchange Page
                        </Link>
                        </li>
                    )} */}

{/* SOCIAL PAGE filters all posts by those WITHOUT exchange tags */}
                    {/* {state.currentUser && (
                        <li className="nav-item">
                        <Link to="/exchange" className="nav-link">
                            Social Page
                        </Link>
                        </li>
                    )} */}

                    </ul>





                    {state.currentUser && (
                        <div className="nav-item me-1">
                        <Link to="/profile" className="nav-link">
                            <img
                                className="d-block mx-lg-auto img-fluid rounded-circle"
                                loading="lazy"
                                alt="default user icon"
                                src={image.imageUrl}
                                style={{
                                    width: image.imageWidth,
                                    height: image.imageHeight,
                                }}
                            ></img>
                        </Link>
                        </div>
                    )}

                    {state.currentUser && (
                        <div className="d-flex">
                            <Link to='/' className="nav-link" 
                                onClick={Logout}>Log Out
                            </Link>
                        </div>
                    )}

                    {!state.currentUser && (
                    <div className="d-flex">
                        <Link to="/login" id="button" className="btn mb-1" type="submit">
                            login 
                        </Link>
                    </div>
                    )
                    }


                    {!state.currentUser && (
                    <div className="d-flex">
                        <Link to="/register" id="button" className="btn mb-1" type="submit">
                            sign up
                        </Link>
                    </div>
                    )
                    }


                </div>

            </div>
        </nav>

)}