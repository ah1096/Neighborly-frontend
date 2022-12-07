

export default function SideNav(){
    return(

<div className="row pe-5 text-align-center">
    <div id="sidenav" className="d-flex w-25 col-12 flex-column flex-shrink-0 p-3 mt-5">

        
        <ul className="nav nav-pills flex-column mb-auto">

        <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark" >
                <i class="col-4 bi bi-house-door-fill me-3"></i>
                <span id="sidenavtext" className="col-8">
                Home
                </span>
            </a>
        </li>

        <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i class="col-4 bi bi-arrow-left-right me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Exchange
                </span>
            </a>
        </li>

        <li id="sidenavitem" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i className="col-4 bi bi-chat-left-heart me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Social
                </span>
            </a>
        </li>

        <li id="postbutton" className="nav-item badge rounded-pill mb-3">
            <a href="#" className="row nav-link link-dark">
                <i className="col-4bi bi-plus-lg me-3"></i>
                <span id="sidenavtext" className="col-8">
                    Post
                </span>
            </a>
        </li>

        </ul>
        
    </div>
</div>
    )
}