import React, { Component } from "react";
import {Image} from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';
import onBoard from './Images/onBoard.gif';
import liriPic from './Images/movie-this.png';
import artGif from './Images/ClickGame.gif';
import hackerNews from './Images/HackerNews.gif';

class Portfolio extends Component {
    render () {
        return (
    <section class = 'container' id = 'portfolio'>
        <Jumbotron fluid>
            <Container>
                <h1>Portfolio</h1>
                <p>
                This is just a small collection of projects that I would like to share with you.
                </p>
                </Container>
        </Jumbotron>
        {/* Liri bot app */}
        <div class = 'row mb-80'>
            <div class = 'col-sm-6'>
                <Image src= {liriPic} width='90%' rounded/>
            </div>
            <div class = 'col-sm-6'>
                <h4 class = 'mt-60'>Liri-Bot</h4>
                <p>A text based version of SIRI that takes in commands through the use of specific keywords.  Liri-Bot is a command-line interface Node.js app that searches different APIs and returns tour dates for bands, details about songs, and information about movies.</p>
                <a href = 'https://github.com/AHennesen/liri-node-app' class = 'btn btn-default' target = '_blank' rel = 'noopener noreferrer'>Visit the repository</a>
            </div>
        </div>

        {/* ReactClickGame */}
        <div class="row mb-80">	
			<div class="col-sm-6 descrip-left">
				<h4 class="mt-60">Know Your Art</h4>
				<p>Know Your Art is a react based memory game that revolves around famous art. The user must click eact painting only once per round. Once all the paintings have been clicked the user wins.</p>
                <p>This project was made useing: HTML5, CSS3, React, Axios, and Bootstrap. </p>
				<a href="https://ahennesen.github.io/ReactClickGame/" class="btn btn-default" target="_blank" rel = 'noopener noreferrer'>Give it a try </a> 
				<a href="https://github.com/AHennesen/ReactClickGame" class="btn btn-default" target="_blank" rel = 'noopener noreferrer'>Or visit the repository</a> 
			</div>
			<div class="col-sm-6">
				<Image src= {artGif} width="90%" rounded/>
			</div>
		</div>

        {/* HackerNews Scrapper */}
        <div class = 'row mb-80'>
            <div class = 'col-sm-6'>
                <Image src= {hackerNews} width='90%' rounded/>
            </div>
            <div class = 'col-sm-6'>
                <h4 class = 'mt-60'>Hacker News Scrapper</h4>
                <p>A website that searches for the top stories from news.ycombinator and brings them up in a list.  Users can then comment on and save articles they would like to look at again later.</p>
                <p>This project was made useing: HTML5, CSS3, AJAX, Axios, and Cheerio. </p>
                <a href = 'https://cryptic-oasis-79349.herokuapp.com/' class = 'btn btn-default' target = '_blank' rel = 'noopener noreferrer'>Visit the website </a>
                <a href = 'https://github.com/AHennesen/moongoseHackerNews' class = 'btn btn-default' target = '_blank' rel = 'noopener noreferrer'>Or take look at the repository</a>
            </div>
        </div>

        {/* onBoard */}
        <div class="row mb-80">	
			<div class="col-sm-6 descrip-left">
				<h4 class="mt-60">onBoard</h4>
				<p>onBoard is a web based app that allows people to both find and create pick-up games for all their favorite board games.  Users must make an account and from there they can choose to join another players game that is already schedule or make their own if they would prefer.</p>
                <p>This project was made useing: HTML5, CSS3, React, Redux,  Axios, and Bootstrap. </p>
				<a href="https://quiet-fortress-68299.herokuapp.com" class="btn btn-default" target="_blank" rel = 'noopener noreferrer'>Visit the Site </a>
				<a href="https://github.com/AHennesen/onBoard" class="btn btn-default" target="_blank" rel = 'noopener noreferrer'>Or take a look at the repository</a>
			</div>
			<div class="col-sm-6">
				<Image src = {onBoard} width="90%" rounded/>
			</div>
		</div>


        </section>
    )
    }
}

export default Portfolio;