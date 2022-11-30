import { useState } from 'react'
import axios from 'axios';
import UserProfile from './UserProfile.js'

export default function GetUser() {
    const [user, setUser] = useState([])
    const callAPI = () => {
        axios.get('https://8000-ah1096-neighborly-6d4agkbyvba.ws-us77.gitpod.io/api/myapp')
        .then(response => {
            console.log(response.data)
            setUser(response.data)
        }).catch(error =>{
            console.log(error)
        })
    
    }

    const profile = user.filter(item => item.id === 9).map(item => 
        <div>
            <UserProfile
                username={item.username}
                // firstname={item.first_name}
                // roletag={}
                biotext={item.biotext}
                skills={item.skills}
                // location={}
                />
        </div>)

    
    return (
        
        <div className="GetUser">

            <div>
                <p>
                    <button onClick={callAPI} id="button"className="btn" type="button">
                        call API
                    </button>
                </p>

                {profile}
            </div>
        </div>          
            
    )
}
