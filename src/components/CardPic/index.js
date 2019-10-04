import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import { ButtonGroup} from 'react-bootstrap';
import './style.css';
import  Image from './me.jpg';


class CardPic extends Component {
    render () {
        return (
<Card>
  <Card.Img variant = 'top' src = {Image} />
  <Card.Body>
    <Card.Title>Hello, My name is Andrew Hennesen</Card.Title>
    <Card.Text>
      Hello I am a new Full Stack Web Developer with lifelong dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among coworkers and friends for strong wit and dedication to getting the job done.
    </Card.Text>
    <Card.Text>
      I am proficent in the following skills: HTML5 ,Redux, ReactJS, Github, CSS3, Bootstrap, VueJS, Version Control(Git), JavaScript, jQuery, ES6, VSCode, ExpressJS, NodeJS, AJAX, API Interactions, MySQL, MongoDB, Firebase.
    </Card.Text>
    <Card.Text>
      You can see my a collection of the projects that I have worked on in my <a href = 'http://localhost:3000/Portfolio-2/Portfolio' class = 'fancy'>portfolio page.</a> 
    </Card.Text>
  </Card.Body>
</Card>

        )
    }};

export default CardPic;