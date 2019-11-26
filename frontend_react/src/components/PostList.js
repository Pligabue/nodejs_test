import React, { Component } from 'react';
import Axios from 'axios';

import "../styles/PostList.scss";

export class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            userId: this.props.userId
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.setState({
                userId: this.props.userId
            });
            this.getPostList()
        }
    }

    componentDidMount() {
        this.getPostList()
    }

    getPostList() {
        if (this.props.userId)
            Axios.post("/api/posts", {userId: this.props.userId})
                .then(response => {
                    let { posts } = response.data
                    let postList = posts.map(post => {
                        return (<div className="post" key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                        </div>)
                    })
                    this.setState({
                        posts: postList
                    })
                })
    }

    render() {
        return (
            <div className="post-list">
                {this.state.posts}
            </div>
        );
    }
}

export default PostList;
