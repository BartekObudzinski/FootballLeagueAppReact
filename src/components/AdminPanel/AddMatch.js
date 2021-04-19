import React from "react";
import { Form, Button } from "react-bootstrap";
import FormTeamOption from "./FormTeamOption";
const AddMatch = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Football hosts</Form.Label>
        <Form.Control as="select">
          <FormTeamOption />
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Football guests</Form.Label>
        <Form.Control as="select">
          <FormTeamOption />
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="datetime-local" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddMatch;
