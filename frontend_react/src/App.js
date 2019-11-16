import React from 'react';
import { Route } from "react-router-dom"

import './styles/App.scss';
import Navbar from './Navbar';
import Menu from './Menu';
import LoginForm from './LoginForm';
import PostForm from './PostForm';

class App extends React.Component {
        
    getData = (data) => {
        this.setState({
            data: data
        })
    }

    render = () => (
        <div className="App">
            <div className="main-grid"> 
                <div className="navbar-grid">
                    <Navbar />
                </div>
                <div className="menu-grid" style={{borderRadius: "15px"}}>
                    <Menu />
                </div>
                <div className="page-grid">
                    <Route path="/login" render={(props) => <LoginForm {...props} getData={this.getData} url="/api/login" />} />
                    <Route path="/post" render={(props) => <PostForm {...props} getData={this.getData} url="/api/post" />} />
                </div>
                <div className="extra-grid">

                </div>
            </div>
        </div>
    );
}

export default App;
