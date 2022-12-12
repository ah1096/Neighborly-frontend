import Posts from './Posts.js';
import SideNav from'./SideNav.js'

export default function ExchangePage(){
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