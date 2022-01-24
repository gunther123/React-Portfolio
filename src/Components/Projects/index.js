import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Projects() {
    return (
        <Container>
            <Row className='m-4'>
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://place-hold.it/350x350" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-dark text-white">
                            <Card.Img src="https://place-hold.it/350x350" alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className='m-4'>
                <Col className='m-auto'>
                <Card className="bg-dark text-white">
                        <Card.Img src="https://place-hold.it/350x350" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col>
                <Card className="bg-dark text-white">
                        <Card.Img src="https://place-hold.it/350x350" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col>
                <Card className="bg-dark text-white">
                        <Card.Img src="https://place-hold.it/350x350" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;