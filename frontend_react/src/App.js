import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button"
import Toast from "react-bootstrap/Toast"
import Dropdown from "react-bootstrap/Dropdown"
import Table from "react-bootstrap/Table"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Form from './Form';

class App extends React.Component {
        
    getData = (data) => {
        this.setState({
            data: data
        })
    }

    render = () => (
        <div className="App">
            <Form 
                title="Register"
                fields={[
                    {title: "Name",     name: "name",    type: "text"},
                    {title: "E-mail",   name: "email",   type: "email"},
                    {title: "Number",   name: "number",  type: "select", options: [
                        {title: "1", value: 1},
                        {title: "2", value: 2},
                        {title: "3", value: 2},
                        {title: "4", value: 4},
                    ]},
                    {title: "Password", name: "password", type: "password"}
                ]}
                url="/api/login"
                getData={this.getData}
            />
        </div>
    );
}

export default App;
