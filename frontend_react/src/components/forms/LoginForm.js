import React, { Component } from 'react';
import Form from './Form';

export class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.url = "/api/login"
    }
    
    getData = (data) => {
        console.log(data)
        window.location.assign("/")
    }

    render() {
        return (
            <Form
                title="Log In"
                fields={[
                    {title: "E-mail",   name: "email",   type: "email"},
                    {title: "Password", name: "password", type: "password", validation: (value) => {
                        if (value.length < 8)
                            return "*Password must be at least 8 characters long"
                    }}
                ]}
                url={this.url}
                getData={this.getData}
            />
        );
    }
}

export default LoginForm;
