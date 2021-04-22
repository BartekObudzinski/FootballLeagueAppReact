import React, { useState } from "react";
import { v4 as matchId } from "uuid";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormTeamOption from "./FormTeamOption";

const AddMatch = ({ match, setMatch }) => {
  const [hostFootball, setHostFootball] = useState();
  const [guestFootball, setGuestFootball] = useState();
  const [dateMatch, setDateMatch] = useState();
  const [timeMatch, setTimeMatch] = useState();

  const AddSingleMatch = (e) => {
    e.preventDefault();
    setMatch([
      ...match,
      {
        idMatch: matchId(),
        host: hostFootball,
        guest: guestFootball,
        date: dateMatch,
        time: timeMatch,
      },
    ]);
    console.log("added match");
  };
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Football host</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setHostFootball(e.target.value)}
        >
          <FormTeamOption />
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Football guest</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setGuestFootball(e.target.value)}
        >
          <FormTeamOption />
        </Form.Control>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setDateMatch(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              onChange={(e) => setTimeMatch(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button onClick={AddSingleMatch} variant="primary" type="submit">
        Add
      </Button>
      <Button onClick={() => console.log(match.length)}>asdasd</Button>
    </Form>
  );
};

export default AddMatch;
