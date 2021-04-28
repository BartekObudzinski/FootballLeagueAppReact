import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { v4 as weekId } from "uuid";
import FormWeekEdit from "../FormWeekEdit/FormWeekEdit";
import styles from "./FormWeek.module.css";
const FormWeek = ({ week, setWeek, handleRemove }) => {
  const [weekName, setWeekName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const [weekEdit, setWeekEdit] = useState();
  const AddSingleWeek = (e) => {
    setWeek([
      ...week,
      {
        idWeek: weekId(),
        nameWeek: weekName,
        dateWeek: weekDate,
      },
    ]);
    console.log(`${weekName} i ${weekDate}`);
  };

  const handleWeekEdit = (weekSettings) => {
    setWeekEdit(weekSettings.idWeek);
  };
  const onRemoveClick = (weekSettings) => {
    handleRemove(weekSettings.idWeek);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Week Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Week name"
              onChange={(e) => setWeekName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setWeekDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Button
          variant="primary"
          type="submit"
          onClick={AddSingleWeek}
          className={styles.buttonSubmit}
        >
          Submit
        </Button>
      </Row>
      <Row>
        <Col>
          {week.map((weekSettings) =>
            weekSettings.idWeek !== weekEdit ? (
              <Container key={weekSettings.idWeek} className={styles.wrapper}>
                <Row>
                  <Col className={styles.column}>{weekSettings.nameWeek}</Col>
                  <Col className={styles.column}>{weekSettings.dateWeek}</Col>
                  <Col className={styles.buttonWrapper}>
                    <Button onClick={() => handleWeekEdit(weekSettings)}>
                      Edit
                    </Button>
                    <Button onClick={() => onRemoveClick(weekSettings)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Container>
            ) : (
              <FormWeekEdit
                weekSettings={weekSettings}
                setWeekEdit={setWeekEdit}
              />
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FormWeek;
