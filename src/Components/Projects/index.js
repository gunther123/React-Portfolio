import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import wanderPhoto from './assets/Wander2.png';
import pwPhoto from "./assets/password-generator.png";
import rbPhoto from "./assets/run-buddy.png";
import btPhoto from "./assets/budget-tracker.PNG";
import tPhoto from "./assets/tennant.png"
import ntPhoto from "./assets/note-taker.png"
import { Card, Container, Row, Col } from 'react-bootstrap';

function Projects() {
    return (
        <Container className='mb-5'>
            <Row className='m-4'>
                <Col className='m-auto'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={wanderPhoto} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Wander</Card.Title>
                                <Card.Text>
                                <a className='font-weight-bold text-dark' href='https://gunther123.github.io/Wander/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='hhttps://github.com/gunther123/Wander'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='m-auto'>
                    <Card className="bg-dark text-white">
                            <Card.Img src={tPhoto} alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title>Tennant</Card.Title>
                                <Card.Text>
                                <a className='font-weight-bold text-dark' href='https://tennant-webapp-2.herokuapp.com/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='https://github.com/gunther123/Tennant'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='m-auto'>
                <Card className="bg-dark text-white">
                        <Card.Img src={rbPhoto} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Run Buddy</Card.Title>
                                <Card.Text>
                                <a className='font-weight-bold text-dark' href='https://gunther123.github.io/run-buddy/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='https://github.com/gunther123/run-buddy'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className='m-4'>
                <Col className='m-auto'>
                <Card className="bg-dark text-white">
                        <Card.Img src={pwPhoto} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Password Generator</Card.Title>
                                <Card.Text>
                                <a className='font-weight-bold text-dark' href='https://gunther123.github.io/Password-Generator/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='hhttps://github.com/gunther123/Password-Generator'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='m-auto'>
                <Card className="bg-dark text-white">
                        <Card.Img src={ntPhoto} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Note Taker</Card.Title>
                                <Card.Text>
                                <a className='font-weight-bold text-dark' href='https://pacific-cliffs-22046.herokuapp.com/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='https://github.com/gunther123/note-taker'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='m-auto'>
                <Card className="bg-dark text-white">
                        <Card.Img src={btPhoto} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Budget Tracker</Card.Title>
                                    <Card.Text>
                                    <a className='font-weight-bold text-dark' href='https://still-sierra-89558.herokuapp.com/'>Deployed URL</a>
                                    </Card.Text>
                                    <Card.Text><a className='font-weight-bold text-dark' href='https://github.com/gunther123/Budget-Tracker'>Github Repo</a></Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;