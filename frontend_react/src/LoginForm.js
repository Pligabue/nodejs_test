import React, { Component } from 'react';
import Form from './Form';

export class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.getData = this.props.getData
        this.url = this.props.url
    }

    render() {
        return (
            <Form
                title="Register"
                fields={[
                    {title: "E-mail",   name: "email",   type: "email"},
                    {title: "Password", name: "password", type: "password"}
                ]}
                url={this.url}
                getData={this.getData}
            />
        );
    }
}

export default LoginForm;
