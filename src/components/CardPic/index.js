import React, { Component } from "react";
import { Card } from 'react-bootstrap'
import './style.css'
import  Image from './me2.jpg'


class CardPic extends Component {
    render () {
        return (
<Card>
  <Card.Img variant = 'top' src = {Image} />
  <Card.Body>
    <Card.Title>Hello, My name is Andrew Hennesen</Card.Title>
    <Card.Text>
      I am a new Full Stack Web Deleoper exited to make ideas into realities.
    </Card.Text>
    <Card.Text>
      You can see my a collection of the projects that I have worked on in my portfolio page.
    </Card.Text>
  </Card.Body>
</Card>
        )
    }};

export default CardPic;