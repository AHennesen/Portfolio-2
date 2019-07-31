import {Dropdown} from 'react-bootstrap'
import React, { Component } from "react";
import './style.css'

class DropdownButton extends Component {
    render() {
        return (
        <Dropdown>
            <Dropdown.Toggle variant="clear" id="dropdown-basic">
                ≡
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
        )
    }
}

export default DropdownButton;