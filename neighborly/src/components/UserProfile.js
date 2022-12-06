
import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 200,
    imageWidth: 200,
};

import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../context/GlobalState.js";


export default function UserProfile(props){
    const [ state, dispatch ] = useGlobalState();

    // useEffect(() => {
    //     async function getUser(){}
    //     let user = await request({
    //         url:`user/${data.user_id}`,
    //         method: 'GET'
    //     })
    // }, [])

    const client = axios.create({
        baseURL: "https://8000-ah1096-neighborly-6d4agkbyvba.ws-us77.gitpod.io/api/user" 
    });

    React.useEffect(() => {
        async function getUser() {
            const user = await client.get(`/${data.user_id}`);
            setUser(user.data);
        }
        getUser();
        }, []);





    return(

<div className="row d-flex justify-content-end align-items-start pe-5 ps-3">
<div className="card mb-3 w-75">
    <div className="row g-0">
        <div className="col-md-4">
        <img className="d-block mx-lg-auto img-fluid rounded-circle m-3" 
                        loading="lazy" 
                        alt="a generic neighborhood" 
                        src= {image.imageUrl}
                        style={{
                            width: image.imageWidth,
                            height: image.imageHeight
                            }}
                    ></img>
        </div>

        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{state.profile.username + "   "}<span className="badge bg-secondary">{state.profile.roletag}</span></h5>
            <p className="card-text">{state.profile.biotext}</p>

            
                <p>
                    <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        skills
                    </button>
                </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        {state.profile.skills}
                    </div>
                </div>

            <p className="card-text"><small className="text-muted">{state.profile.location}</small></p>
            </div>
        </div>
    </div>
</div>
</div>
    )
}