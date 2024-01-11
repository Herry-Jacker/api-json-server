import React, {useState, createRef } from "react";
import { useNavigate } from "react-router-dom";
 
function AddPost(props) {
    const imageRef = createRef();
    const titleRef = createRef();
    const descriptionRef = createRef();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        let post = {
            id: "",
            title: titleRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        }
        props.addPost(post);
        titleRef.current.value = "";
        imageRef.current.value = "";
        descriptionRef.current.value = "";
        navigate("/");
    }

    return (
        <div className="card bg-dark p-3 my-3">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Image" id="image" required ref={imageRef}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Title" id="title" required ref={titleRef}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Description" id="description" required ref={descriptionRef}/>
                </div>
                <button type="submit" className="btn float-end btn-primary btn sm">Add</button>
            </form>
        </div>
    )
}

export default AddPost;