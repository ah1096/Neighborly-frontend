import React, { useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom"


export default function CreateAccount(){
let navigate = useNavigate()

const [user, setUser] = useState({
        email: "",
        password: "",
        passwordConf: "",
        username: "",
        first_name: "",
        last_name: "",
        biotext: ""
    });
    
    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
    })
    }
    
    const handleRegister = (e) => {
        e.preventDefault();
        AuthService.register(user).then(()=> navigate('/profile'))
    }



    return(

    <div className="row justify-content-center">

        <div className="col-4">
{/* //EMAIL AND PASSWORD INPUTS */}

        <form onSubmit={handleRegister}>
            <div className="mt-5 mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="emailinput" 
                        placeholder="name@example.com"
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Create password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        id="passwordinput"
                        minLength="8"
                        required
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
            </div>


            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Re-enter password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="passwordinput2"
                    minLength="8"
                    required
                    onChange={(e) => handleChange('passwordConf', e.target.value)}/>
            </div>

{/* //USERNAME INPUT */}

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Username</label>
                <textarea 
                    className="form-control" 
                    name="username"
                    id="usernameinput" 
                    rows="1"
                    onChange={(e) => handleChange('username', e.target.value)}
                    required
                ></textarea>
            </div>



{/* //FIRST AND LAST NAME INPUT */}

            <div className="input-group mb-3">
                <span className="input-group-text">First & last name</span>
                <input 
                    type="text" 
                    className="form-control"
                    name="first_name"
                    id="firstnamesubmit"
                    required
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    />
                <input 
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="lastnamesubmit"
                    required
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    />
            </div>


    {/* //BUILD A PROFILE */}


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                <textarea 
                className="form-control" 
                name="biotext"
                id="bioinput" 
                rows="3"
                required
                onChange={(e) => handleChange('biotext', e.target.value)}
                ></textarea>
            </div>


            {/* <select className="mb-3 form-select" id="roleinput">
                <option selected>Select a role tag</option> */}
    {/* figure out how to add tooltips to give description of role tag on hover */}
                
                {/* <option value="1">
                    User</option>

                <option value="2">
                    Maker</option>

                <option value="3">
                    Fixer</option>

                <option value="4">
                    Teacher</option>

                <option value="5">
                    Helper</option>
            </select> */}

            <input 
            className="btn btn-primary" 
            type="submit" 
            value="Create Account"
            id="button2"
            disabled={(
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.firstName &&
                user.lastName &&
                user.email
            ) ? false : true}
            />

        </form>
    </div>
</div>
    )
}