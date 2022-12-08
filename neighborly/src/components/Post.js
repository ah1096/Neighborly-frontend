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
<div className="card w-75">
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

            <div className="col-11">
                <h6 id="postauthor" className="card-title">Username <span id="extag" className="badge bg-secondary">extag</span></h6>
                <p id="wherewhen" className="text-muted">location | time posted</p>
            </div>
        </div>

        <p id="postcontent" className="card-text">POST CONTENT; Ivory stalk pallid beneficent have lost in prayer lonely 
        shriek repentant eidolon. Death beyond such smothered reverie outpouring. Swoon morose 
        memory miserable wearied intangible dignified charnel emaciated masquerade my fateful mercy.
        Malicious lonely deathly dolorous rendered descending foreboding pendulum. Dreary etiolated 
        manorial condemn repose beneficent wearied despairing grace remembrance grotesquerie impassive 
        cloister.</p>


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

        
    )
}