import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
 
function AddPost(props) {
    const [image, setImage] = useState('');
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const navigate = useNavigate();

    const imageChangeHandler = (e) => {
        setImage(e.target.value) 
    };
    const titleChangeHandler = (e) => {
        settitle(e.target.value) 
    };
    const descriptionChangeHandler = (e) => {
        setdescription(e.target.value) 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let post = {
            id: "", title, image, description
        }
        props.addPost(post);
        setImage("");
        settitle("");
        setdescription("");
        navigate("/");
    }

    return (
        <div className="card bg-dark p-3 my-3">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Image" id="image" onChange={imageChangeHandler} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Title" id="title" onChange={titleChangeHandler} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Description" id="description" onChange={descriptionChangeHandler} required />
                </div>
                <button type="submit" className="btn float-end btn-primary btn sm">Add</button>
            </form>
        </div>
    )
}

export default AddPost;