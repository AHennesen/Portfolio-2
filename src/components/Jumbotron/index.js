import React, { Component } from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css'

class Jumbo extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Portfolio</h1>
                    <p>
                    This is just a small collection of projects that I would like to share with you.
                    </p>
                </Container>
                </Jumbotron>
        )
    };
};

export default Jumbo;