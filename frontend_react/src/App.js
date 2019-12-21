import React from 'react';
import { Route } from "react-router-dom"

import './styles/App.scss';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import LoginForm from './components/forms/LoginForm';
import PostForm from './components/forms/PostForm';
import Axios from 'axios';
import RegistrationForm from './components/forms/RegistrationForm';
import PostList from './components/PostList';
import About from './components/About';

class App extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {
            userId: null
        }
    }

    componentDidMount() {
        Axios.get("/api/session")
            .then(response => {
                this.setState({
                    userId: response.data.id
                })
            })
    }

    render = () => (
        <div className="App">
            <div className="main-grid"> 
                <div className="navbar-grid">
                    <Navbar />
                </div>
                <div className="menu-grid">
                    <Menu userId={this.state.userId} />
                </div>
                <div className="page-grid">
                    <Route path="/about"><About /></Route>
                    <Route path="/register"><RegistrationForm /></Route>
                    <Route path="/login"><LoginForm /></Route>
                    <Route path="/post"><PostForm userId={this.state.userId} /></Route>
                    <Route path="/posts"><PostList userId={this.state.userId}/></Route>
                </div>
                <div className="extra-grid">

                </div>
            </div>
        </div>
    );
}

export default App;
