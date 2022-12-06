import React, { useState } from "react"
import AuthService from "../services/auth.service.js";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState.js";
import jwtDecode from "jwt-decode";
import request from "../services/api.request.js";



export default function Login(){

    let navigate = useNavigate();

    const [ , dispatch ] = useGlobalState();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService
            .login(username, password)
            .then(async (resp) => {
                let data = jwtDecode(resp.access)

                await dispatch({
                    currentUserToken: resp.access,
                })
                navigate('/profile') //change to profile, RRDOM; refer to Lindsay or Mason for help or Tyler
            });
    }




    return(
    <div className="row justify-content-center">
        <form onSubmit={handleLogin}>
            <div className="col-4 mt-5 mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                    type="username" 
                    id="username"
                    name="username"
                    className="form-control" 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="pass" className="col-sm-2 col-form-label">Password</label>
                <input 
                    type="password" 
                    id="pass"
                    className="form-control" 
                    name="password"
                    minLength="2"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                    className="btn btn-primary mt-3" 
                    type="submit" 
                    value="Login"
                />
            </div>
        </form>
    </div>

    

    )
}