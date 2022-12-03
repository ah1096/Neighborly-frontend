
export default function Navbar(props) {
    return(

        <nav id="navbar" className="navbar navbar-expand-lg bg-success">

            <div className="container-fluid">

            <a className="navbar-brand" onClick={() => props.setpage('home')} aria-current="page" href="#">Neighborly</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                        <a className="nav-link" onClick={() => props.setpage('profile')} href="#">Profile Page</a>
                        </li>

                    </ul>

                    <div className="d-flex">
                        <button onClick={() => props.setpage('login')} className="btn btn-primary" type="submit">
                            login 
                        </button>
                    </div>


                    <div className="d-flex">
                        <button onClick={() => props.setpage('createaccount')} className="btn btn-primary" type="submit">
                            sign up
                        </button>
                    </div>

                </div>

            </div>
        </nav>

)
}