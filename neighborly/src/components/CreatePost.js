import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};

export default function CreatePost(){
    return(

    <div className="card mb-3">
        <div className="card-body">

            <div className="row">
                
                <div className="col-1">
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

                <div className="col-11">
                        <form> 
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Write a post..." rows="3" />
                            </div>
                        </form>
                </div>

            </div>

            <div className="row">

                <div className="btn-group col-1">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Exchange type
                    </button>
                <ul className="dropdown-menu">
                    <li>None</li>
                    <li>Trade</li>
                    <li>Gig</li>
                    <li>Favor</li>
                </ul>

                <div className="col-1">
                    <button className="btn btn-secondary btn-sm" type="button">
                    <i className="bi bi-plus-lg d-inline"></i>
                    </button>
                </div>
</div>



<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">

                <h1 class="col-11 modal-title fs-5" id="exampleModalLabel">
                    Create post
                </h1>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

        <form>

            <div class="modal-body">

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
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Write a post..." aria-describedby="button-addon2"/>
                                </div>
                    </div>

                </div>

            </div>

            <div class="modal-footer">

                <div className="row">
                        <div classname="col-10">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Exchange tag</option>
                                    <option value="1">None</option>
                                    <option value="2">Trade</option>
                                    <option value="3">Gig</option>
                                    <option value="4">Favor</option>
                            </select>
                        </div>

                        <div className="col-2">
                            <button id="createpostbtn" className="btn btn-secondary btn-sm" type="submit">
                                <i className="bi bi-plus-lg"></i>
                            </button>
                        </div>

                </div>
            </div>
        </form>

        </div>
    </div>
</div>
</div>
</div>
</div>



    )
}