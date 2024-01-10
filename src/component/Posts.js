import React, { useState } from "react";
import PostCard from "./postCard";

function Post(props) {
    return (
        <div className="my-3">
            {
                props.posts.map( pos => <PostCard key={pos.id} post={pos} postDelete={props.postDelete}/>)
            }
        </div>
    )
}

export default Post;