import SideNav from './SideNav.js';

import defaulticon from './images/defaulticon.png';
import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../context/GlobalState.js";
import request from '../services/api.request';
import { useState } from "react"

const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 200,
    imageWidth: 200,
};



export default function UserProfile(props){
    const [ state, dispatch ] = useGlobalState();
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        async function getUserData() {
            let options = {
                url: `user/${state.currentUser.user_id}`,
                method: 'GET',
            }
            let resp = await request(options)
            setUserData(resp.data)
        }
        getUserData();
        console.log(state.currentUser)
        }, []);

        console.log(userData)
        if (!userData) return null

    return(



<div className="row">

    <div className="col-3">
        <SideNav />
    </div>


    <div className="col-6">

        
            <div className="card mb-3 shadow-sm bg-body rounded">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img className="d-block mx-lg-auto img-fluid rounded-circle m-3" 
                                    loading="lazy" 
                                    alt="default user icon" 
                                    src= {image.imageUrl}
                                    style={{
                                        width: image.imageWidth,
                                        height: image.imageHeight
                                    }}
                                    ></img>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{userData.username + "   "}<span className="badge bg-secondary">{userData.roletag}</span></h5>
                        <p className="card-text">{userData.biotext}</p>

                        
                            <p>
                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    skills
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    {userData.skills}
                                </div>
                            </div>

                        <p className="card-text"><small className="text-muted">{userData.location}</small></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
                    

    )
}