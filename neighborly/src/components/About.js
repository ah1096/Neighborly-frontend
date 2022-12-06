import placeholder from './images/neighborhood.jpg';

const image = {
    name: 'placeholder',
    imageUrl: placeholder,
    imageHeight: 400,
    imageWidth: 400,
}




export default function About(props){

    return(
        <div className="vh-100" id="AboutSection">
    <div className="px-4">

    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse  g-5 py-5">

            <div className="col-10 col-sm-8 col-lg-6">

                {/* <span className="hover-img"> */}
                    <img className="d-block mx-lg-auto img-fluid" 
                        loading="lazy" 
                        alt="a generic neighborhood" 
                        src= {image.imageUrl}
                        style={{
                            width: image.imageWidth,
                            height: image.imageHeight
                            }}
                    ></img>
                {/* </span> */}

            </div>

            <div className="col-lg-6">

                <h1 className="display-5 fw-bold lh-1 mb-3" >Hi, neighbor!</h1>
                    <div>
                        <p>Welcome to Neighborly, an app for forging connections both friendly and commercial.</p>
                        <p>
                        Locavore mixtape polaroid, biodiesel pork belly woke bitters affogato thundercats bruh. Ramps freegan ennui godard hell of, polaroid before they sold out. Hoodie fashion axe dreamcatcher glossier, chia next level typewriter franzen edison bulb VHS shaman marfa. La croix kale chips disrupt prism, selfies cold-pressed freegan distillery. Brooklyn chambray ascot you probably haven't heard of them. Squid prism blog banjo flannel. Adaptogen pop-up photo booth hella taxidermy quinoa blog gluten-free twee hexagon tonx keffiyeh fashion axe trust fund raclette.
                        </p>
                    </div>
                    
            </div>
        </div>
        </div>
    </div>
</div>

    )
}