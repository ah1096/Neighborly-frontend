
import placeholder from './images/neighborhood.jpg';
const image = {
    name: 'placeholder',
    imageUrl: placeholder,
    imageHeight: 200,
    imageWidth: 200,
}


export default function UserProfile(props){
    return(

<div className="row d-flex justify-content-end align-items-start pe-5 ps-3">
<div className="card mb-3 w-75">
    <div className="row g-0">
        <div className="col-md-4">
        <img className="d-block mx-lg-auto img-fluid rounded-circle m-3" 
                        loading="lazy" 
                        alt="a generic neighborhood" 
                        src= {image.imageUrl}
                        style={{
                            width: image.imageWidth,
                            height: image.imageHeight
                            }}
                    ></img>
        </div>

        <div className="col-md-8">
            <div className="card-body">
            <h5 className="card-title">{props.username}<span className="badge bg-secondary">{props.roletag}</span></h5>
            <p className="card-text">{props.biotext}</p>

            
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        skills
                    </button>
                </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        {props.skills}
                    </div>
                </div>

            <p className="card-text"><small className="text-muted">{props.location}</small></p>
            </div>
        </div>
    </div>
</div>
</div>
    )
}