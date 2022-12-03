import React, { useState } from "react"
import AuthService from "../services/auth.service.js";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState.js";
import jwtDecode from "jwt-decode";



export default function Login(){

    let navigate = useNavigate();

    const [ state, dispatch ] = useGlobalState();

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
                    currentUser: data
                })
                navigate('/profile')
            });
    }




    return(
    <div class="row justify-content-center">
        <form onSubmit={handleLogin}>
            <div class="col-4 mt-5 mb-3">
                <label htmlFor="username" class="form-label">Username</label>
                <input 
                    type="username" 
                    id="username"
                    name="username"
                    class="form-control" 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="pass" class="col-sm-2 col-form-label">Password</label>
                <input 
                    type="password" 
                    id="pass"
                    class="form-control" 
                    name="password"
                    minlength="8"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                    class="btn btn-primary mt-3" 
                    type="submit" 
                    value="Login"
                />
            </div>
        </form>
    </div>

    

    )
}