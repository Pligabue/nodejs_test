import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./styles/Menu.scss"

export class Menu extends Component {
    render() {
        return (
            <div className="side-menu">
                <h1>Menu</h1>
                <Link to="/post">Post</Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Menu;
