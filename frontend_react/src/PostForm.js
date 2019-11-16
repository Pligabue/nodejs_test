import React, { Component } from 'react';
import Form from './Form';

export class PostForm extends Component {

    constructor(props) {
        super(props);
        this.getData = this.props.getData
        this.url = this.props.url
        this.user_id = this.props.user_id;
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
                user_id={this.user_id}
            />
        );
    }
}

export default PostForm;
