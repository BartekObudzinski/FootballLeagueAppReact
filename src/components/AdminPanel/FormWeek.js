import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
const FormWeek = ({ week, setWeek }) => {
  const [weekName, setWeekName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const AddSingleWeek = (e) => {
    e.preventDefault();
    setWeek([
      ...week,
      {
        nameWeek: weekName,
        dateWeek: weekDate,
      },
    ]);
  };

  const weekData = Array.from(week);
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Week Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Week name"
          onChange={(e) => setWeekName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => setWeekDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={AddSingleWeek}>
        Submit
      </Button>
      {weekData.map((weekSettings) => (
        <Row>
          <Col xs={12} md={8}>
            <div>{weekSettings.nameWeek}</div>
            <div>{weekSettings.dateWeek}</div>
          </Col>
          <Col xs={6} md={4}>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Col>
        </Row>
      ))}
    </Form>
  );
};

export default FormWeek;
