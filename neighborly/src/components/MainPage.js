import Post from './Post.js';
import CreatePost from './CreatePost.js';

export default function MainPage(){
    return(
        <span>
        <CreatePost />
        <Post />
        </span>
    )
}