import React from "react";
import { Link, useLocation } from "react-router-dom";

function PostDetail() {
    const location = useLocation();
    const post = location.state.post;
    return (
        <div>
            <div className="m-3">
                <Link to={"/"} >
                    <span className="">
                        <i className="fa fa-arrow-left text-primary fs-5"></i>
                    </span>
                </Link>
            </div>
            <div className="card m-auto" style={{width: "23rem"}}>
                <img src={post.image} className="card-img-top" alt="userimage" />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;