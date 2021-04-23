import React, { useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
const FormWeekEdit = ({ weekSettings, setWeekEdit }) => {
  const [editName, setEditName] = useState(weekSettings.nameWeek);
  const [editDate, setEditDate] = useState(weekSettings.dateWeek);
  return (
    <Row>
      <Col xs={12} md={8}>
        <Form.Label>Name</Form.Label>
        <input value={editName} onChange={(e) => setEditName(e.target.value)} />
      </Col>
      <Col>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col xs={6} md={4}>
        <Button
          onClick={() => {
            weekSettings.nameWeek = editName;
            weekSettings.dateWeek = editDate;
            setWeekEdit();
          }}
        >
          Edit
        </Button>
        <Button>Delete</Button>
      </Col>
    </Row>
  );
};

export default FormWeekEdit;
