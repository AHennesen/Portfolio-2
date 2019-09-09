import {Dropdown} from 'react-bootstrap'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

class DropdownButton extends Component {
    render() {
        return (
        <Dropdown>
            <Dropdown.Toggle variant="clear" id="dropdown-basic">
                ≡
            </Dropdown.Toggle>

            <Dropdown.Menu variant="clear"> 
                <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
                <Dropdown.Item> <Link to="/Portfolio">Portfolio</Link> </Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
        )
    }
}
// bootstrap menu dark  
export default DropdownButton;