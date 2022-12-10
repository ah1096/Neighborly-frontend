import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom"
import AuthService from "../services/auth.service"



export default function SideNav(){

    const [ state, dispatch ] = useGlobalState();

    let navigate = useNavigate();



    return(

<div className="ms-3 row pe-5 text-align-center">
    <div id="sidenav" className="d-flex w-25 col-12 flex-column flex-shrink-0 p-3 mt-5">

        <ul className="nav nav-pills flex-column mb-auto">


        {state.currentUser && (
                        
            <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
                <a href="#" className="row nav-link link-dark" >

                <Link to="/main" className="nav-link">
                <i className="col-4 bi bi-house-door-fill me-3"></i>
                    <span id="sidenavtext" className="col-8">
                    Home
                    </span>
                </Link>

                    
                </a>
            </li>
                    )}

        <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i className="col-4 bi bi-arrow-left-right me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Exchange
                </span>
            </a>
        </li>

        <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i className="col-4 bi bi-chat-left-heart me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Social
                </span>
            </a>
        </li>

        <li id="postbutton" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i className="col-4bi bi-plus-lg me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Post
                </span>
            </a>
        </li>

        </ul>
        
    </div>
</div>
    )
}