import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import Cards from "./Cards";

const Homepage = () => {
    return (
        <div className="homepage">
  <Card className="card">
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Cards />
    </Card.Body>
  </Card>
  
</div>
    );
}

export default Homepage;