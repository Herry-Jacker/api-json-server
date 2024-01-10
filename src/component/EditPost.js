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
                        onChange={e => {setState(prevState => ({
                            ...prevState, image: e.target.value })
                            )}}
                        value={state.image}
                        readOnly={false} 
                        disabled={false}
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Title" 
                        onChange={e => {setState(prevState => ({
                            ...prevState, title: e.target.value })
                            )}}
                        value={state.title} 
                        readOnly={false} 
                        disabled={false}
                        required />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" className="form-control" 
                        placeholder="Description" 
                        onChange={e => {setState(prevState => ({
                            ...prevState, description: e.target.value })
                            )}}
                        value={state.description} 
                        readOnly={false} 
                        disabled={false}
                        required />
                </div>
                <button type="submit" className="btn float-end btn-primary btn sm">Update</button>
            </form>
        </div>
    )
}

export default EditPost;