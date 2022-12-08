import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};



export default function Comment(){
    return(

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

                COMMENT CONTENT; Ebon eidolon etiolated left to me looming, bewitched aspect? 
                Broken fragile epithet, disconsolately bedewed flesh envious ancestral gesticulation 
                heavy-hearted madness disquiet discomfited ad Misericordiam.
            
            </div>
        </div>


    )
}