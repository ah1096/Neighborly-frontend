

export default function SideNav(){
    return(

<div className="row pe-5">
    <div id="sidenav" className="d-flex w-25 col-12 flex-column flex-shrink-0 p-3 mt-5 bg-light">

        
        <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item badge rounded-pill text-bg-primary mb-3">
            <a href="#" className="nav-link link-dark" >
            <i class="bi bi-house-door-fill me-3"></i>
                <span id="sidenavtext">
                Dashboard
                </span>
            </a>
        </li>

        <li className="nav-item badge rounded-pill text-bg-primary mb-3">
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-arrow-left-right me-3"></i>
                <span id="sidenavtext">
                    Exchange
                </span>
            </a>
        </li>

        <li className="nav-item badge rounded-pill text-bg-primary mb-3">
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-chat-left-heart me-3"></i>
                <span id="sidenavtext">
                    Social
                </span>
            </a>
        </li>

        <li className="nav-item badge rounded-pill text-bg-primary mb-3">
            <a href="#" className="nav-link link-dark">
            <i class="bi bi-plus-lg me-3"></i>
            Post
            </a>
        </li>

        </ul>
        
    </div>
</div>
    )
}