import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';

const Routes_ = () => (
    <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:postId" component={PostPage} />
    </Routes>
);

export default Routes_;
