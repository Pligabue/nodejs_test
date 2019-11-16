import React, { Component } from 'react';
import { Link } from "react-router-dom"

import "./styles/Navbar.scss"

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link id="title" to="/">My Site</Link>
            </div>
        );
    }
}

export default Navbar;
