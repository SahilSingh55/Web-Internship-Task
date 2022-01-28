import React from "react";
import { Card, Form, Dropdown, InputGroup, DropdownButton, FormControl, Button } from "react-bootstrap";
import "./Homepage.css";
import Cards from "../Card/Cards";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Homepage = () => {
  return (
    <div className="homepage">

      <div id="goback">
        <ArrowBackIcon />
        <b>Collection Details</b>
      </div>

      <Card className="card">
        <div className="img"></div>

        <Avatar alt="Remy Sharp" className="avatar" src="" sx={{ width: 100, height: 100 }} />

        <div className="button">
          <Button id="button1" variant="outline-dark">Delete report</Button>
          <Button id="button2" variant="primary">Delist</Button>
        </div>
        <Card.Body>
          <Card.Text>
            <b>King of Programming</b>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </Card.Text>
          <div id="input">
            <Form.Control className="search" type="text" placeholder="Search" />
            <SearchIcon />

            <InputGroup className="mb-3">
              <FormControl aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title="Status"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title="Price"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>

            <InputGroup className="mb-4">
              <FormControl aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title="Sort by"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <Cards />
        </Card.Body>
      </Card>

    </div>
  );
}

export default Homepage;