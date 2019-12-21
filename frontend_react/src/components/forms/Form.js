import React, { Component } from 'react';
import axios from "axios";
import Button from "react-bootstrap/Button"
import '../../styles/Form.scss'

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
            errorMessages: ""
        }
    }

    removeMessage = () => {
        this.setState({
            errorMessages: ""
        })
    }

    addMessage = (message) => {
        this.setState({
            errorMessages: message
        })
    }

    checkFields = () => {
        try {
            for (let field of this.fields) {
                if (!this.state[field.name] && !field.optional) {
                    this.addMessage("*Fill all fields")
                    return false;
                } 
                if (field.validation) {
                    let message = field.validation(this.state[field.name])
                    if (message) {
                        this.addMessage(message)
                        return false;
                    }
                }
            }
        } catch {
            this.addMessage("*Something went wrong. Reload the page.")
            return false;
        }
        this.removeMessage()
        return true;
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let validated = this.checkFields()
        if (validated) {
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
                    this.removeMessage()
                    this.getData(response.data)
                })
                .catch(error => {
                    console.log(error.response);

                    let { message } = error.response.data;
                    if (message)
                        this.addMessage(message)
                    else {
                        let { statusText } = error.response;
                        if (statusText)
                            this.addMessage("*"+statusText)
                        else
                            this.addMessage("*Serverside error")
                    }
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
                <p className="form-error">{this.state.errorMessages}</p>
                <Button type="submit" block>Submit</Button>
            </form>
        </div>);
    }
}

export default Form;
