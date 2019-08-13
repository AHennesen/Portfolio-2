import React, { Component } from "react";
import { Card, Container, Row } from 'react-bootstrap';
import {Image, Col} from 'react-bootstrap';
import './style.css';


class SideCardPic extends Component {
    render () {
        return (
<Container>
    <Row>
        <Col xs={3} md={2}>
        <Image src="http://lorempixel.com/output/city-q-g-300-200-9.jpg" rounded />
        </Col>
    </Row>
    
    <Card>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
</Container>
    )
    }
}

export default SideCardPic;