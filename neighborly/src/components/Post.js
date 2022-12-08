
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
<div class="card w-75">
    <div class="card-body">
        <div class="row">
            <div class="col">
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

            <div class="col-11">
                <h6 id="postauthor" class="card-title">Username <span id="extag" className="badge bg-secondary">extag</span></h6>
                <p id="wherewhen" class="text-muted">location | time posted</p>
            </div>
        </div>

        <p id="postcontent" class="card-text">POST CONTENT; Ivory stalk pallid beneficent have lost in prayer lonely 
        shriek repentant eidolon. Death beyond such smothered reverie outpouring. Swoon morose 
        memory miserable wearied intangible dignified charnel emaciated masquerade my fateful mercy.
        Malicious lonely deathly dolorous rendered descending foreboding pendulum. Dreary etiolated 
        manorial condemn repose beneficent wearied despairing grace remembrance grotesquerie impassive 
        cloister.</p>

        <p>

{/* COMMENT DROPDOWN */}
        <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            view # comments
        </button>

        </p>

            <div className="collapse" id="collapseExample">
                <div className="card card-body">

{/* USER COMMENT */}
                    <div class="card mb-3">
                        <div class="card-body">

                        <div class="row">
                            <div class="col">
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

                            <div class="col-11">
                                <h6 id="postauthor" class="card-title">Username </h6>
                                <p id="wherewhen" class="text-muted">time posted</p>
                            </div>
                        </div>

                            COMMENT CONTENT; Ebon eidolon etiolated left to me looming, bewitched aspect? Broken fragile epithet, disconsolately bedewed flesh envious ancestral gesticulation heavy-hearted madness disquiet discomfited ad Misericordiam.
                        </div>
                    </div>

{/* CREATE A COMMENT */}

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

{/* CREATE COMMENT */}
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

                </div>
            </div>
    </div>
</div>

        
    )
}