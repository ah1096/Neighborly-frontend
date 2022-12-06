import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom"
import AuthService from "../services/auth.service"



export default function Navbar(props) {
    const [ state, dispatch ] = useGlobalState();

    
    let navigate = useNavigate();

            function Logout() {
                navigate("home");
                AuthService.logout();
                window.location.reload();
                }

    return(

        <nav id="navbar" className="navbar navbar-expand-lg bg-success">

            <div className="container-fluid">

            <Link to="/home" className="navbar-brand">
                Neighborly
            </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    {state.currentUser && (
                        <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            Profile Page
                        </Link>
                        </li>
                    )}

                    </ul>

                    {state.currentUser && (
                        <div className="d-flex">
                            <Link to='/' className="nav-link" 
                                onClick={Logout}>Log Out
                            </Link>
                        </div>
                    )}

                    {!state.currentUser && (
                    <div className="d-flex">
                        <Link to="/login" className="btn btn-primary" type="submit">
                            login 
                        </Link>
                    </div>
                    )
                    }


                    {!state.currentUser && (
                    <div className="d-flex">
                        <Link to="/register" className="btn btn-primary" type="submit">
                            sign up
                        </Link>
                    </div>
                    )
                    }


                </div>

            </div>
        </nav>

)}