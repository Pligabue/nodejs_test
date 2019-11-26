import React, { Component } from 'react';
import Form from './Form';

export class RegistrationForm extends Component {
    
    constructor(props) {
        super(props)
        this.url = "/api/register"
    }
    
    getData = (data) => {
        console.log(data)
        window.location.assign("/")
    }

    render() {
        return (
            <Form
                title="Register"
                fields={[
                    {title: "First Name", name: "firstName"},
                    {title: "Last Name",  name: "lastName"},
                    {title: "E-mail",     name: "email",    type: "email"},
                    {title: "Password",   name: "password", type: "password"}
                ]}
                url={this.url}
                getData={this.getData}
            />
        );
    }
}

export default RegistrationForm;
