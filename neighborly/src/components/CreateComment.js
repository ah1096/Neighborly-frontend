import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};

export default function CreateComment(){

// put POST request stuff HERE; model off of CreateAccount


    return(
<div>
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


    )
}