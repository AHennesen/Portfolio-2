import {Dropdown} from 'react-bootstrap'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu} from "react-burger-menu";
import './style.css'

class DropdownButton extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
        <Menu>
            <a id = "home" className = "menu-item" href="/">Home</a>
            <a id = "portfolio" className = "menu-item" href="/portfolio">portfolio</a>
    </Menu>
        )
    }
}
// bootstrap menu dark  
export default DropdownButton;