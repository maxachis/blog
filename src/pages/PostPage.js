import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../posts.json';

const PostPage = () => {
    const { postId } = useParams();
    const post = posts.find(p => p.id === parseInt(postId));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;
