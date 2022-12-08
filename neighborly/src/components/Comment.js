import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};



export default function Comment(){
    return(

        <div className="card mb-3">
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
                        <h6 id="postauthor" className="card-title">Username </h6>
                        <p id="wherewhen" className="text-muted">time posted</p>
                    </div>

                <div className="col-1">
                    <div class="dropdown">

                        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-three-dots"></i>
                        </button>

                        <ul class="dropdown-menu">
                            <li >
                                <a id="editcomment" class="dropdown-item d-inline" href="#">Edit comment <i id="pencilicon"class="bi bi-pencil d-inline ms-5"></i></a>
                            </li>

                            <li >
                                <a id="deletecomment" class="dropdown-item d-inline" href="#">Delete comment <i id="trashicon" class="bi bi-trash d-inline ms-4"></i></a>
                                {/* add onclick 'Are you sure?' popup */}
                            </li>
                        </ul>

                    </div>
                </div>


                </div>

                COMMENT CONTENT; Ebon eidolon etiolated left to me looming, bewitched aspect? 
                Broken fragile epithet, disconsolately bedewed flesh envious ancestral gesticulation 
                heavy-hearted madness disquiet discomfited ad Misericordiam.
            
            </div>
        </div>


    )
}