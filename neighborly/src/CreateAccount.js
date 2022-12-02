import { useState } from "react";
import axios from "axios";




export default function CreateAccount(){

const [state, setState] = useState({
        email: "",
        password: "",
        username: "",
        first_name: "",
        last_name: "",
        bio: ""
    });
    
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
        email: state.email,
        password: state.password,
        username: state.username,
        first_name: state.first_name,
        last_name: state.last_name,
        bio: state.bio,
        };
        axios.post("https://8000-ah1096-neighborly-6d4agkbyvba.ws-us77.gitpod.io/api/user/", userData).then((response) => {
        console.log(response.status);
        console.log(response.data);
        });
    };

// from this article: https://blog.logrocket.com/understanding-axios-post-requests/




    return(

    <div className="row justify-content-center">

        <div className="col-4">
{/* //EMAIL AND PASSWORD INPUTS */}

        <form>
            <div className="mt-5 mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="emailinput" 
                        placeholder="name@example.com"
                        onSubmit={handleSubmit}
                        value = {state.email}
                        onChange={handleChange}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Create password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        id="passwordinput"
                        onSubmit={handleSubmit}
                        value={state.password}
                        onChange={handleChange}
                    />
            </div>

{/* unsure how to make it so that passwords have to match in order for them to be registered; revisit later */}
            {/* <div className="mb-3">
                <label for="inputPassword" className="form-label">Re-enter password</label>
                <input type="password" className="form-control" id="passwordinput2"/>
            </div> */}

{/* //USERNAME INPUT */}

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Username</label>
                <textarea 
                className="form-control" 
                name="username"
                id="usernameinput" 
                rows="1"
                onSubmit={handleSubmit}
                value={state.username}
                onChange={handleChange}
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
                    onSubmit={handleSubmit}
                    value={state.first_name}
                    onChange={handleChange}
                    />
                <input 
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="lastnamesubmit"
                    onSubmit={handleSubmit}
                    value={state.last_name}
                    onChange={handleChange}
                    />
            </div>


    {/* //BUILD A PROFILE */}


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                <textarea 
                className="form-control" 
                name="bio"
                id="bioinput" 
                rows="3"
                onSubmit={handleSubmit}
                value={state.bio}
                onChange={handleChange}
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

            <input className="btn btn-primary" type="submit" value="Create Account" onClick={handleSubmit}/>

        </form>
    </div>
</div>
    )
}