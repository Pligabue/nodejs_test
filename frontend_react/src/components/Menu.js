import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/Menu.scss"
import Axios from 'axios';

export class Menu extends Component {
    
    logOut = () => {
        Axios.get("/api/logout")
        window.location.assign("/")
    }

    render() {
        
        let userLinks = null

        if (this.props.userId) {
            userLinks = [
                <Link to="/post" key="new-post">New Post</Link>,
                <Link to="/" onClick={this.logOut} key="logout">Log Out</Link>
            ]
        } else {
            userLinks = [
                <Link to="/login" key="login">Login</Link>
            ]
        }

        return (
            <div className="side-menu">
                <h1>Menu</h1>
                <Link to="/about">About</Link>
                {userLinks}
            </div>
        );
    }
}

export default Menu;
