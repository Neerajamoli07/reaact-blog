import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
//import axios from 'axios';
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent'; 
//loading NewPost dynamically , as this concept help in bigger project
// download component when needed. i.e lazy loading 
const AsyncComponent = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                 to="/posts" 
                                 exact
                                 activeClassName="my-active"
                                 activeStyle={{
                                     color: '#fa923f',
                                     textDecoration: 'underlne'
                                 }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                // hash: '#submit',
                                // search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ?<Route path="/new-post" component={AsyncComponent} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route render={() => <h1>Not Found!</h1>}/> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
                
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;