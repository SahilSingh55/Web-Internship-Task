import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Cards = () => {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="primary">3M Likes</Button>
                                <div>
                                <FavoriteBorderIcon />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;    