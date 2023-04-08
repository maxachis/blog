import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/blog/:postId" component={PostPage} />
    </Switch>
);

export default Routes;
