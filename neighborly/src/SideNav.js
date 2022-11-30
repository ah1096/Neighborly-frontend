import './App.css';

export default function SideNav(){
    return(

<div className="row">
    <div id="sidenav" className="d-flex w-25 flex-column flex-shrink-0 p-3 mt-5 bg-light">

        
        <ul className="nav nav-pills flex-column mb-auto">

        <li className="nav-item">
            <a href="#" className="nav-link link-dark" >
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
            Dashboard
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-dark">
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
            Exchange
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-dark">
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
            Social
            </a>
        </li>

        <li>
            <a href="#" className="nav-link link-dark">
            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
            Post
            </a>
        </li>

        </ul>
        
    </div>
</div>
    )
}