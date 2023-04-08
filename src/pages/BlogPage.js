import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../posts.json';

const BlogPage = () => (
    <div>
        <h1>Blog</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default BlogPage;
