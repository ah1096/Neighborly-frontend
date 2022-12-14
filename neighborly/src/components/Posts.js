import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import defaulticon from "./images/defaulticon.png";
const image = {
  name: "defaulticon",
  imageUrl: defaulticon,
  imageHeight: 50,
  imageWidth: 50,
};

export default function Posts() {
  const [state, dispatch] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [comments, setComments] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const [tag, setTag] = useState([]);

  async function getTag(e) {
    let options = {
      url: "exchanges/",
      method: "GET",
    };
    let resp = await request(options);
    setTag(resp.data);
  }

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
  }

  async function getComments() {
    let options = {
      url: "comments/",
      method: "GET",
      params: {
        author: state.currentUser.user_id,
      },
    };
    let resp = await request(options);
    setCommentData(resp.data);
  }

  useEffect(() => {
    getPosts();
    getTag();
    getComments();
  }, []);

  // useEffect(() => {
  //     getPosts();
  // }, []);

  async function createPost(e) {
    e.preventDefault();
    let options = {
      url: "posts/",
      method: "POST",
      data: {
        content: postContent,
        author: state.currentUser.user_id,
        exTag: selectedTag,
      },
    };
    console.log(selectedTag);
    let resp = await request(options);
    setPostData([...postData, resp.data]);
  }

  // async function editPost() {
  //     let options = {
  //         url: "post/",
  //         method: "PATCH",
  //         data: {
  //             content: postContent,
  //             author: state.currentUser.user_id,
  //         },
  //     };
  //     let resp = await request(options);
  //     setPostData([
  //         ...postData,
  //         resp.data
  //     ])
  // }

  // useEffect(() => {

  // }, []);

  async function createComment(postid) {
    let options = {
      url: "comments/",
      method: "POST",
      data: {
        comment: comments,
        author: state.currentUser.user_id,
        post: postid,
      },
    };
    console.log(options);
    let resp = await request(options);
    setCommentData([...commentData, resp.data]);
    getPosts();
  }

  /////////////////////////////////////////////RETURN//////////////////////////////////////////////////
  /////////////////////////////////////////////RETURN//////////////////////////////////////////////////
  /////////////////////////////////////////////RETURN//////////////////////////////////////////////////

  return (
    <div>
      {/* CREATE POST */}
      <div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <img
                  className="d-block mx-lg-auto img-fluid rounded-circle"
                  loading="lazy"
                  alt="default user icon"
                  src={image.imageUrl}
                  style={{
                    width: image.imageWidth,
                    height: image.imageHeight,
                  }}
                ></img>
              </div>

              <div className="col-10">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write a post..."
                      data-bs-toggle="modal"
                      data-bs-target="#createpostmodal"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="createpostmodal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="col-11 modal-title fs-5" id="exampleModalLabel">
                  Create post
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-2">
                      <img
                        className="d-block mx-lg-auto img-fluid rounded-circle"
                        loading="lazy"
                        alt="default user icon"
                        src={image.imageUrl}
                        style={{
                          width: image.imageWidth,
                          height: image.imageHeight,
                        }}
                      ></img>
                    </div>

                    <div className="col-10">
                      <div className="input-group">
                        <input
                          type="text"
                          onChange={(e) => setPostContent(e.target.value)}
                          className="form-control"
                          placeholder="Write a post..."
                          aria-describedby="button-addon2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <div className="input-group">
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      onChange={(e) => setSelectedTag(e.target.value)}
                    >
                      {tag.map((tag) => (
                        <option
                          key={`${tag.id}${tag.exchange_tag}`}
                          value={tag.id}
                        >{`${tag.exchange_tag}`}</option>
                      ))}
                    </select>

                    <button
                      id="createpostbtn"
                      onClick={createPost}
                      className="btn btn-outline-secondary"
                      type="submit"
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT POST */}

      {/* add edit post modal to popup on click of Edit button */}

      {/* // USER POST */}
      {postData.map((post) => (
        <div key={post.id}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <img
                    className="col-2 d-inline mx-lg-auto img-fluid rounded-circle"
                    loading="lazy"
                    alt="default user icon"
                    src={image.imageUrl}
                    style={{
                      width: image.imageWidth,
                      height: image.imageHeight,
                    }}
                  ></img>
                </div>

                {/* map over posts */}
                {/* then check to see if each post has a tag */}
                <div className="col-8">
                  <h6 id="postauthor" className="card-title">
                    {post.author}
                    <span id="extag" className="badge bg-secondary ms-3">
                      {post.exTag}
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
                    <button
                      className="btn btn-sm btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <a
                          id="editpost"
                          className="dropdown-item d-inline"
                          data-bs-toggle="modal"
                          data-bs-target="#editpostmodal"
                          href="#"
                        >
                          Edit post
                          <i
                            id="pencilicon"
                            className="bi bi-pencil d-inline ms-5"
                          ></i>
                        </a>
                      </li>

                      <li>
                        <a
                          id="deletepost"
                          className="dropdown-item d-inline"
                          href="#"
                        >
                          Delete post
                          <i
                            id="trashicon"
                            className="bi bi-trash d-inline ms-4"
                          ></i>
                        </a>
                        {/* add onclick 'Are you sure?' popup */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p id="postcontent" className="card-text">
                {post.content}
              </p>

              {/* COMMENT DROPDOWN */}
              <p>
                <button
                  className="btn btn-sm btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  view # comments
                </button>
              </p>

              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  {post.comments.map((c) => (
                    <div key={c.id}>
                      {/* USER COMMENT */}
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <img
                                className="col-2 d-inline mx-lg-auto img-fluid rounded-circle"
                                loading="lazy"
                                alt="default user icon"
                                src={image.imageUrl}
                                style={{
                                  width: image.imageWidth,
                                  height: image.imageHeight,
                                }}
                              ></img>
                            </div>

                            <div className="col-8">
                              <h6 id="postauthor" className="card-title">
                                {c.author}
                              </h6>
                              <p id="timeposted" className="text-muted">
                                {c.created_at}
                              </p>
                            </div>

                            {/* EDIT/DELETE DROPDOWN */}
                            <div className="col-2">
                              <div className="dropdown">
                                <button
                                  className="btn btn-sm btn-secondary dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </button>

                                <ul className="dropdown-menu">
                                  <li>
                                    <a
                                      id="editcomment"
                                      className="dropdown-item d-inline"
                                      href="#"
                                    >
                                      Edit comment
                                      <i
                                        id="pencilicon"
                                        className="bi bi-pencil d-inline ms-5"
                                      ></i>
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      id="deletecomment"
                                      className="dropdown-item d-inline"
                                      href="#"
                                    >
                                      Delete comment
                                      <i
                                        id="trashicon"
                                        className="bi bi-trash d-inline ms-4"
                                      ></i>
                                    </a>
                                    {/* add onclick 'Are you sure?' popup */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <p>{c.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* CREATE COMMENT FIELD */}

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <img
                            className="d-block mx-lg-auto img-fluid rounded-circle"
                            loading="lazy"
                            alt="default user icon"
                            src={image.imageUrl}
                            style={{
                              width: image.imageWidth,
                              height: image.imageHeight,
                            }}
                          ></img>
                        </div>

                        <div className="col-10">
                          <form>
                            <div className="input-group">
                              <input
                                type="text"
                                onChange={(e) => setComments(e.target.value)}
                                className="form-control"
                                placeholder="Write a comment..."
                                aria-describedby="button-addon2"
                              />
                              <button
                                id="createcommentbtn"
                                onClick={() => createComment(post.id)}
                                className="btn btn-outline-secondary"
                                type="button"
                              >
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

      {commentData.map((comment) => (
        <div key={comment.id}>
          {comment.comment}
          {comment.author}
        </div>
      ))}
    </div>
  );
}
