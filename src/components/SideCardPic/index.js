import React, { Component } from "react";
import {Image } from 'react-bootstrap';
import './style.css';

class Portfolio extends Component {
    render () {
        return (
    <section class = 'container' id = 'portfolio'>
        {/* Liri bot app */}
        <div class = 'row mb-80'>
            <div class = 'col-sm-6'>
                <Image src="http://lorempixel.com/output/city-q-g-300-200-9.jpg" width='90%' rounded/>
            </div>
            <div class = 'col-sm-6'>
                <h4 class = 'mt-60'>Liri-Bot</h4>
                <p>A text based version of SIRI</p>
                <a href = 'https://github.com/AHennesen/liri-node-app' class = 'btn btn-default' target = '_blank' rel = 'noopener noreferrer'>Visit the repository</a>
            </div>
        </div>

        {/* React Book Search */}
        <div class="row mb-80">	
				<div class="col-sm-6 descrip-left">
					<h4 class="mt-60">React Book Search</h4>
					<p>React book Search is a react based application that allows the user to search for a book and provides a list of relative search results.  The user can then either save to book to their reading list or they can procede to directly buy a copy from azamzon.</p>
                    <p>This project was made with: HTML5, CSS3, React, Axios, and Bootstrap. </p>
					<a href="https://floating-wave-65456.herokuapp.com/" class="btn btn-default" target="_blank" rel = 'noopener noreferrer'>Visit the Site</a>
				</div>
				<div class="col-sm-6">
					<Image src="https://media.giphy.com/media/USPKH79Sd0x2nzRWmp/giphy.gif" width="90%" rounded/>
				</div>
			</div>

            {/*  */}


        </section>
    )
    }
}

export default Portfolio;