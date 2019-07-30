import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import './style.css'
import {Image} from '../Images/me.jpg'


class CardPic extends Component {
    render () {
        return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        )
    }};

export default CardPic;