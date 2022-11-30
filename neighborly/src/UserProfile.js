import placeholder from './images/neighborhood.jpg';
const image = {
    name: 'placeholder',
    imageUrl: placeholder,
    imageHeight: 200,
    imageWidth: 200,
}





export default function UserProfile(){
    return(

<div class="row d-flex justify-content-end align-items-start pe-5 ps-3">
<div class="card mb-3 w-75">
    <div class="row g-0">
        <div class="col-md-4">
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

        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Username <span class="badge bg-secondary">ROLE</span></h5>
            <p class="card-text">this is a bio text field</p>

            
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        skills
                    </button>
                </p>
                    <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        List of skills goes here
                    </div>
                </div>







            <p class="card-text"><small class="text-muted">LOCATION TAG</small></p>
            </div>
        </div>
    </div>
</div>
</div>
    )
}