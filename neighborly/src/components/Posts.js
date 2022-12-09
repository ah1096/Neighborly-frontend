import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};


export default function Posts(){
    return(

// USER POST
<div className="card">
<div className="card-body">
    <div className="row">
        <div className="col">
            <img className="col-2 d-inline mx-lg-auto img-fluid rounded-circle" 
                            loading="lazy" 
                            alt="default user icon" 
                            src= {image.imageUrl}
                            style={{
                                width: image.imageWidth,
                                height: image.imageHeight
                                }}
                        ></img>
        </div>

        <div className="col-8">
            <h6 id="postauthor" className="card-title">
                    Username
                <span id="extag" className="badge bg-secondary ms-3">
                    extag
                </span>
            </h6>

            <p id="wherewhen" className="text-muted">
                location | time posted
            </p>
        </div>

{/* DROPDOWN - only available to current user on OWN posts; 
onclick = EDIT and DELETE options become available */}

        <div className="col-2">
            <div className="dropdown">

                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots"></i>
                </button>

                <ul className="dropdown-menu">
                    <li >
                        <a id="editpost" className="dropdown-item d-inline" href="#">
                            Edit post 
                            <i id="pencilicon"className="bi bi-pencil d-inline ms-5"></i>
                        </a>
                    </li>

                    <li >
                        <a id="deletepost" className="dropdown-item d-inline" href="#">
                            Delete post 
                            <i id="trashicon" className="bi bi-trash d-inline ms-4"></i>
                        </a>
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
                    

                {/* USER COMMENTS */}

                    <div className="card mb-3">
                        <div className="card-body">

                            <div className="row">
                                <div className="col">
                                    <img className="col-2 d-inline mx-lg-auto img-fluid rounded-circle" 
                                        loading="lazy" 
                                        alt="default user icon" 
                                        src= {image.imageUrl}
                                        style={{
                                            width: image.imageWidth,
                                            height: image.imageHeight
                                            }}
                                    ></img>
                                </div>

                                <div className="col-8">
                                    <h6 id="postauthor" className="card-title">
                                        Username 
                                    </h6>
                                    <p id="wherewhen" className="text-muted">
                                        time posted
                                    </p>
                                </div>

                            <div className="col-2">
                                <div className="dropdown">

                                    <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li >
                                            <a id="editcomment" className="dropdown-item d-inline" href="#">
                                                Edit comment 
                                                <i id="pencilicon"className="bi bi-pencil d-inline ms-5"></i>
                                            </a>
                                        </li>

                                        <li >
                                            <a id="deletecomment" className="dropdown-item d-inline" href="#">
                                                Delete comment 
                                                <i id="trashicon" className="bi bi-trash d-inline ms-4"></i>
                                            </a>
                                            {/* add onclick 'Are you sure?' popup */}
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            </div>
                            
                            <p>
                                COMMENT CONTENT
                            </p>
                        
                        </div>
                    </div>


                {/* CREATE COMMENT FIELD */}

                    <div className="card mb-3">
                        <div className="card-body">

                            <div className="row">
                                
                                <div className="col-2">
                                    <img className="d-block mx-lg-auto img-fluid rounded-circle" 
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
                                        <form> 
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Write a comment..." aria-describedby="button-addon2"/>
                                                <button id="createcommentbtn" className="btn btn-outline-secondary" type="button">
                                                <i className="bi bi-plus-lg d-inline"></i>
                                                </button>
                                            </div>
                                        </form>
                                </div>

                            </div>

                        </div>
                    </div>                            



            </div>
        </div>
</div>
</div>







    )
}