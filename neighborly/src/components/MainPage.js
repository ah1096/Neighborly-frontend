import Posts from './Posts.js';
import CreatePost from './CreatePost.js';

export default function MainPage(){
    return(
        <span>
            <div className="row justify-content-center">
                <div className="col-6">
                    <CreatePost />
                    <Posts />
                </div>
            </div>
        </span>
    )
}