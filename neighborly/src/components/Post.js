import Comment from './Comment.js'
import CreateComment from './CreateComment.js'

import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};


export default function Post(){
    return(

// USER POST
    <div>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img className="col-1 d-inline mx-lg-auto img-fluid rounded-circle" 
                                        loading="lazy" 
                                        alt="default user icon" 
                                        src= {image.imageUrl}
                                        style={{
                                            width: image.imageWidth,
                                            height: image.imageHeight
                                            }}
                                    ></img>
                    </div>

                    <div className="col-10">
                        <h6 id="postauthor" className="card-title">
                            Username
                        <span id="extag" className="badge bg-secondary">extag</span></h6>
                        <p id="wherewhen" className="text-muted">location | time postd</p>
                    </div>

        {/* DROPDOWN - only available to current user on OWN posts; 
        onclick = EDIT and DELETE options become available */}

                    <div className="col-1">
                        <div className="dropdown">

                            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"></i>
                            </button>

                            <ul className="dropdown-menu">
                                <li >
                                    <a id="editpost" className="dropdown-item d-inline" href="#">Edit post <i id="pencilicon"className="bi bi-pencil d-inline ms-5"></i></a>
                                </li>

                                <li >
                                    <a id="deletepost" className="dropdown-item d-inline" href="#">Delete post <i id="trashicon" className="bi bi-trash d-inline ms-4"></i></a>
                                    {/* add onclick 'Are you sure?' popup */}
                                </li>
                            </ul>

                        </div>
                    </div>



                </div>

                <p id="postcontent" className="card-text">
                    POST CONTENT
                </p>


        {/* COMMENT DROPDOWN */}
                <p>
                    <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        view # comments
                    </button>
                </p>

                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                                <Comment />
                                <CreateComment />
                        </div>
                    </div>
            </div>
        </div>
    </div>

        
    )
}