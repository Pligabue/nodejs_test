import React, { Component } from 'react';
import axios from "axios";
import Button from "react-bootstrap/Button"
import '../../styles/Form.scss'

function checkFields(state, fields) {
    try {
        for (let field of fields) {
            if (!state[field.name]) {
                return false;
            }
        }
    } catch {
        return false;
    }
    return true;
}

export class Form extends Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.fields = this.props.fields;
        this.url = this.props.url;
        this.getData = this.props.getData;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errorMessage: ""
        }
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let validated = checkFields(this.state, this.fields)
        if (!validated) {
            this.setState({
                errorMessage: "*Fill all fields"
            })
        } else {
            let url = this.url
            let data = {}
            for (let field of this.fields) {
                data[field.name] = this.state[field.name]
            }
            if (this.props.userId) {
                data.userId = this.props.userId
            }
            axios.post(url, data)
                .then(response => {
                    this.setState({
                        errorMessage: ""
                    })
                    this.getData(response.data)
                })
                .catch(error => {
                    console.log(error.response);
                    if (error.response.data) {
                        let { message } = error.response.data;
                        if (message) 
                            this.setState({
                                errorMessage: "*" + message
                            })
                    } else 
                        this.setState({
                            errorMessage: "*Serverside error" 
                    })
                })
            this.setState({
                errorMessage: ""
            })
        }
    }

    render() {
        let forms = []
        for (let field of this.fields) {
            switch (field.type) {
                case "select":
                    let options = []
                    for (let option of field.options) {
                        options.push(<option key={option.title} value={option.value}>{option.title}</option>)
                    }
                    forms.push(
                        <div key={field.name} className="form-select">
                            <label htmlFor={field.name}>{field.title}</label>
                            <select onChange={this.handleChange} id={field.name} name={field.name} defaultValue="default">
                                <option value="default" disabled>Select an option</option>
                                {options}
                            </select>      
                        </div>
                    )
                    break;
                
                case "textarea":
                    forms.push(
                        <div key={field.name} className="form-textarea">
                            <label htmlFor={field.name}>{field.title}</label>
                            <div>
                                <textarea 
                                    onChange={this.handleChange} 
                                    name={field.name} 
                                    type={field.type} 
                                    id={field.name} 
                                    cols={field.cols ? field.cols : 100}
                                    rows={field.rows ? field.rows : 10}
                                />
                            </div>
                        </div>
                    );
                    break;

                default:
                    forms.push(
                        <div key={field.name} className="form-item">
                            <label htmlFor={field.name}>{field.title}</label>
                            <input onChange={this.handleChange} name={field.name} type={field.type} id={field.name} />
                        </div>
                    );
                    break;
            }     
        }
        return (<div className="form-container">
            <h1 className="form-title">{this.title}</h1>
            <form onSubmit={this.handleSubmit} className="form">
                {forms}
                <p className="form-error">{this.state.errorMessage}</p>
                <Button type="submit" block>Submit</Button>
            </form>
        </div>);
    }
}

export default Form;
