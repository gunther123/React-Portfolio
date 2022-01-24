import React from 'react';
import {  Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import avatar from './avatar.jpg'

function AboutMe() {
    return (
        <Container>
            <div className='d-flex flex-column align-items-center'>
            <img className='mw-50 mh-50' src={avatar}></img>
            </div>
            <div className='d-flex flex-column align-items-center mt-4'>
            <section className='mx-5 mb-4 font-weight-bold'>Hello! My name is Steven Slocum and I am a Full-Stack Engineer. I am currently based out of Minneapolis, MN. </section>
            <section className='mx-5 font-weight-bold'>I have a passion for creating things! I create webpages, video-games, and music in a band called "The Cellar Door". I also have an affinty for playing video games at a semi-pro level. I have competed at major tournaments such as "Combo-Breaker" and "Frosty Faustings". My goal is to work in a development role for companies creating databases, webpages, and eventually game development. Please browse my below work and reach out to me if you think I would be a good fit for your team!</section>
            </div>
        </Container>
    );
}

export default AboutMe;