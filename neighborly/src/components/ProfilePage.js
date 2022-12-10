import GetUser from './GetUser.js';
import SideNav from './SideNav.js';


export default function ProfilePage(){
    return(
        <span>
            <div className="row">
                <div className="col-3">
                    <SideNav />
                </div>

                <div className="col-6">
                    <GetUser />
                </div>
                
            </div>
        </span>
    )


}