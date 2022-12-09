import Posts from './Posts.js';
import SideNav from'./SideNav.js'

export default function MainPage(){
    return(
        <span>
            <div className="row">
                <div className="col-3">
                    <SideNav />
                </div>

                <div className="col-6">
                    <Posts />
                </div>
            </div>
        </span>
    )
}