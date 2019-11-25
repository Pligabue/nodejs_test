import React, { Component } from 'react';
import Form from './Form';

export class PostForm extends Component {

    constructor(props) {
        super(props);
        this.url = "/api/post/new"
        this.state = {
            userId: this.props.userId
        }
    }

    getData = (data) => {
        console.log(data)
        window.location.reload()
    }

    render() {
        return (
            <Form
                title="New Post"
                fields={[
                    {title: "Title",   name: "title",   type: "text"},
                    {title: "Content", name: "content", type: "textarea"}
                ]}
                url={this.url}
                getData={this.getData}
                userId={this.props.userId}
            />
        );
    }
}

export default PostForm;
