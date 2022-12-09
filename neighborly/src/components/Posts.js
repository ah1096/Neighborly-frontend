import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";

import defaulticon from './images/defaulticon.png';
const image = {
    name: 'defaulticon',
    imageUrl: defaulticon,
    imageHeight: 50,
    imageWidth: 50,
};


export default function Posts(){


    const [state, dispatch] = useGlobalState();
    const [postData, setPostData] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [commentData, setCommentData] = useState([])
    const [comments, setComments] = useState('')

    async function getPosts() {
        let options = {
            url: "posts/",
            method: "GET",
            params: {
                author_id: state.currentUser.user_id,
            },
        };
        let resp = await request(options);
        setPostData(resp.data);
        console.log(postData)
    }

    useEffect(() => {
        getPosts();
    }, []);


    async function createPost() {
        let options = {
            url: "post/",
            method: "POST",
            data: {
                body: postContent,
                author: state.currentUser.user_id,
            },
        };
        let resp = await request(options);
        setPostData([
            ...postData,
            resp.data
        ])
    }

    useEffect(() => {
        async function getComments() {
            let options = {
                url: "comments/",
                method: "GET",
                params: {
                    // author__id: state.currentUser.user_id,
                    // comment: commentData,
                    author: state.currentUser.user_id,
                    // post: post.id,

                },
            };
            let resp = await request(options);
            setCommentData(resp.data);
        }
        getComments();
    }, []);



    async function createComment(postId) {

        let options = {
            url: 'comments/',
            method: 'POST',
            data: {
                comment: comments,
                author: state.currentUser.user_id,
                post: postId,
            }
        }
        console.log(options)
        let resp = await request(options);
        setCommentData([
            ...commentData,
            resp.data
        ])
        getPosts()
    }


/////////////////////////////////////////////RETURN//////////////////////////////////////////////////
/////////////////////////////////////////////RETURN//////////////////////////////////////////////////
/////////////////////////////////////////////RETURN//////////////////////////////////////////////////

return(

<div>

{/* CREATE POST */}
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
                                    <input type="text" className="form-control" placeholder="Write a post..." data-bs-toggle="modal" data-bs-target="#createpostmodal" />
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>



    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createpostmodal">
        Launch demo modal
    </button> */}


        <div className="modal fade" id="createpostmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">

                        <h1 className="col-11 modal-title fs-5" id="exampleModalLabel">
                            Create post
                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form>
                        <div className="modal-body">

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
                                            <input type="text" onChange={(e) => setPostContent(e.target.value)} className="form-control" placeholder="Write a post..." aria-describedby="button-addon2"/>
                                        </div>
                                </div>

                            </div>

                        </div>

                        <div className="modal-footer">

                            <div className="input-group">
                                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option value>Exchange type...</option>
                                        <option value="1">None</option>
                                        <option value="2">Trade</option>
                                        <option value="3">Gig</option>
                                        <option value="4">Favor</option>
                                </select>

                                <button id="createpostbtn" onClick={createPost} className="btn btn-outline-secondary" type="submit">
                                    <i className="bi bi-plus-lg"></i>
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>


{/* // USER POST */}
{postData.map((post) => (
    <div key={post.id}>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img className="col-2 d-inline mx-lg-auto img-fluid rounded-circle" 
                                        loading="lazy" 
                                        alt="default user icon" 
                                        src= {image.imageUrl}
                                        style={{
                                            width: image.imageWidth,
                                            height: image.imageHeight
                                            }}
                                    ></img>
                    </div>

                    <div className="col-8">
                        <h6 id="postauthor" className="card-title">
                                {post.author}
                            <span id="extag" className="badge bg-secondary ms-3">
                                extag
                            </span>
                        </h6>

                        <p id="wherewhen" className="text-muted">
                            {post.author.location} | {post.created_on}
                        </p>
                    </div>

            {/* EDIT/DELETE POST DROPDOWN - only available to current user on OWN posts; 
            onclick = EDIT and DELETE options become available */}

                    <div className="col-2">
                        <div className="dropdown">

                            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </button>

                            <ul className="dropdown-menu">
                                <li >
                                    <a id="editpost" className="dropdown-item d-inline" href="#">
                                        Edit post 
                                        <i id="pencilicon"className="bi bi-pencil d-inline ms-5"></i>
                                    </a>
                                </li>

                                <li >
                                    <a id="deletepost" className="dropdown-item d-inline" href="#">
                                        Delete post 
                                        <i id="trashicon" className="bi bi-trash d-inline ms-4"></i>
                                    </a>
                                    {/* add onclick 'Are you sure?' popup */}
                                </li>
                            </ul>

                        </div>
                    </div>



                </div>

                <p id="postcontent" className="card-text">
                    {post.body}
                </p>

                { post.comments.map((c) => (
                                    <div key={c.id}className="row">
                                        {c.comment} - {c.commented_by}
                                    </div>
                                ))}

            {/* COMMENT DROPDOWN */}
                <p>
                    <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        view # comments
                    </button>
                </p>

                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                                

                            {/* USER COMMENT */}
                                <div className="card mb-3">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col">
                                                <img className="col-2 d-inline mx-lg-auto img-fluid rounded-circle" 
                                                    loading="lazy" 
                                                    alt="default user icon" 
                                                    src= {image.imageUrl}
                                                    style={{
                                                        width: image.imageWidth,
                                                        height: image.imageHeight
                                                        }}
                                                ></img>
                                            </div>

                                            <div className="col-8">
                                                <h6 id="postauthor" className="card-title">
                                                    Username 
                                                </h6>
                                                <p id="wherewhen" className="text-muted">
                                                    time posted
                                                </p>
                                            </div>
                                    
                                    {/* EDIT/DELETE DROPDOWN */}
                                        <div className="col-2">
                                            <div className="dropdown">

                                                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots"></i>
                                                </button>

                                                <ul className="dropdown-menu">
                                                    <li >
                                                        <a id="editcomment" className="dropdown-item d-inline" href="#">
                                                            Edit comment 
                                                            <i id="pencilicon"className="bi bi-pencil d-inline ms-5"></i>
                                                        </a>
                                                    </li>

                                                    <li >
                                                        <a id="deletecomment" className="dropdown-item d-inline" href="#">
                                                            Delete comment 
                                                            <i id="trashicon" className="bi bi-trash d-inline ms-4"></i>
                                                        </a>
                                                        {/* add onclick 'Are you sure?' popup */}
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        </div>
                                        
                                        <p>
                                            COMMENT CONTENT
                                        </p>
                                    
                                    </div>
                                </div>


                            {/* CREATE COMMENT FIELD */}

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
                                                            <input type="text" onChange={(e) => setComments(e.target.value)} className="form-control" placeholder="Write a comment..." aria-describedby="button-addon2"/>
                                                            <button id="createcommentbtn" onClick={() => postComment(post.id)} className="btn btn-outline-secondary" type="button">
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
    </div>
))}

{/* {commentData.map((comment) => (
                <div key={comment.id}>
                    {comment.comment}
                    {comment.comment_author}
                </div> */}
            {/* ))} */}



</div>
    )
}