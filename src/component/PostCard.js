import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
    const postDeleteHandler = () => {
        props.postDelete(props.post.id);
    }

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-2">
                    <img src={props.post.image} width={"70px"} height={"70px"}></img>
                </div>
                <div className="mt-2 col-7">
                    <h6>{props.post.title}</h6>
                    <p className="mb-0">{props.post.description}</p>
                </div>
                <div className="col-3 mt-2">
                    <Link to={`/post/${props.post.id}`} state={{post: props.post}}>
                        <button className="btn btn-sm btn-info m-1">
                            <i className="fa fa-eye"></i>
                        </button>
                    </Link>
                    <Link to={`/post/edit/${props.post.id}`} state={{post: props.post}}>
                        <button className="btn btn-sm btn-warning m-1">
                            <i className="fa fa-edit"></i>
                        </button>
                    </Link>
                    <button className="btn btn-sm btn-danger m-1" onClick={postDeleteHandler}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard;