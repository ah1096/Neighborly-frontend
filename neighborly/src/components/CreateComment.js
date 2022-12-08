import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};

export default function CreateComment(){
    return(

    <div class="card mb-3">
        <div class="card-body">

            <div class="row">
                
                <div class="col-1">
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

                <div class="col-11">
                        <form> 
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Write a comment..." aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                <i className="bi bi-plus-lg d-inline"></i>
                                </button>
                            </div>
                        </form>
                </div>

            </div>

        </div>
    </div>


    )
}