import React, { useEffect, useState } from "react";
import Posts from './component/Posts';
import AddPost from "./component/AddPost";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostDetail from "./component/PostDeail";
import EditPost from "./component/EditPost";

function App() {
  const DB_NAME = "http://localhost:9000";
  let [posts, setPosts] = useState([]);
  
  const addPost = async(post) => {
    await fetch(`${DB_NAME}/posts`, {
      method: "POST",
      body: JSON.stringify({
        image: post.image,
        title: post.title,
        description: post.description
      }),
      headers:{
        "content-type": "application/json"
      }
    })
    setPosts([post, ...posts]);
  }

  const postDeleteHandler = async(id) => {
    await fetch(`${DB_NAME}/posts/${id}`, { method: 'DELETE' });
    let remainPost = posts.filter( pos => pos.id != id)
    setPosts(remainPost);
  }

  const postUpdateHandler = async(updatePost) => {
    await fetch(`${DB_NAME}/posts/${updatePost.id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatePost),
      headers: {
        "content-type": "application/json"
      }
    });
    setPosts(posts.map(po => po.id === updatePost.id ? updatePost : po));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let posts = await (await fetch(`${DB_NAME}/posts`)).json();
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);  

  return (
    <div>
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container" style={{maxWidth: 800}}>
            <div className="navbar-brand">Blogs</div>
            <div className="navbar-nav">
              <li className="nav-item">
                <Link to="/add" className="text-decoration-none">
                  <div className="nav-link text-primary" style={{cursor: "pointer"}}>Add New +</div>
                </Link>
              </li>
            </div>
          </div>
        </nav>
        <div className="container" style={{maxWidth: 800}}>
          <Routes>
            <Route path="/add" element={<AddPost addPost={addPost}/>} />
            <Route path="/" element={<Posts posts={posts} postDelete={postDeleteHandler}/>} />
            <Route path="/post/:id" element={<PostDetail/>} exact/>
            <Route path="/post/edit/:id" element={<EditPost updatePost={postUpdateHandler} />} exact/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
