import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const AddTeam = ({ team, setTeam }) => {
  const [input, setInput] = useState({
    name: "",
    shortName: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setTeam([
      ...team,
      {
        name: input.name,
        shortName: input.shortName,
        matches: [0],
        wins: [0],
        draws: [0],
        loses: [0],
        goalScored: [0],
        goalLoses: [0],
        points: [0],
      },
    ]);
    setInput({
      name: "",
      shortName: "",
    });
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Teams Name</Form.Label>
            <Form.Control name="name" onChange={handleChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Short Teams Name</Form.Label>
            <Form.Control
              maxLength="3"
              name="shortName"
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button onClick={handleClick}>Add Team</Button>
    </Form>
  );
};

export default AddTeam;
