import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { v4 as weekId } from "uuid";
const FormWeek = ({ week, setWeek, handleRemove }) => {
  const [weekName, setWeekName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const AddSingleWeek = (e) => {
    e.preventDefault();
    setWeek([
      ...week,
      {
        idWeek: weekId(),
        nameWeek: weekName,
        dateWeek: weekDate,
      },
    ]);
  };

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
      {week.map((weekSettings) => (
        <Row>
          <Col xs={12} md={8}>
            <div>{weekSettings.nameWeek}</div>
            <div>{weekSettings.dateWeek}</div>
          </Col>
          <Col xs={6} md={4}>
            <Button onClick={() => console.log(...week)}>Edit</Button>
            <Button onClick={() => handleRemove(weekSettings.idWeek)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </Form>
  );
};

export default FormWeek;
