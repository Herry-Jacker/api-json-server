import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditPost(props) {
    const location = useLocation();
    const post = location.state.post;
    const [state, setState] = useState({
        id: post.id,
        image: post.image,
        title: post.title,
        description: post.description
    })
    const navigate = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();
        props.updatePost(state);
        navigate("/");
    }
    return (
        <div className="card bg-dark p-3 my-3">
            <form onSubmit={updateHandler.bind()}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Image"
                        value={state.image}
                        onChange={e => {setState(prevState => ({
                        ...prevState, image: e.target.value })
                        )}}
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Title"
                        value={state.title}
                        onChange={e => {setState(prevState => ({
                        ...prevState, title: e.target.value })
                        )}}
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" className="form-control" 
                        placeholder="Description"
                        value={state.description}
                        onChange={e => {setState(prevState => ({
                        ...prevState, description: e.target.value })
                        )}}
                        required />
                </div>
                <button type="submit" className="btn float-end btn-primary btn sm">Update</button>
            </form>
        </div>
    )
}

export default EditPost;