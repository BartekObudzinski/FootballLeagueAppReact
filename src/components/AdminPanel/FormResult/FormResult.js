import React, { useState } from "react";
import { Card, Row, Col, Button, Container, Form } from "react-bootstrap";
import styles from "./FormResult.module.css";
import SingleScheduleMatch from "../../Schedule/SingleScheduleMatch";
import FormResultEdit from "../FormResultEdit/FormResultEdit";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import FormWeekOption from "../FormOption/FormWeekOption";
const FormResult = ({ match, week, handleRemoveMatch }) => {
  const [resultEdit, setResultEdit] = useState();
  const [chooseWeek, setChooseWeek] = useState("");
  return (
    <Card.Body>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Choose a Week!</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setChooseWeek(e.target.value)}
            >
              <FormWeekOption week={week} />
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      {match.map(
        (singleMatch) =>
          singleMatch.date === chooseWeek &&
          (singleMatch.idMatch !== resultEdit ? (
            <Container>
              <Row className={styles.wrapper}>
                <Col>
                  <Button
                    className={styles.button}
                    onClick={() => setResultEdit(singleMatch.idMatch)}
                  >
                    <AiFillEdit />
                  </Button>
                  <Button
                    className={styles.button}
                    onClick={() => {
                      handleRemoveMatch(singleMatch.idMatch);
                    }}
                  >
                    <AiTwotoneDelete />
                  </Button>
                </Col>
                <Col>
                  <SingleScheduleMatch
                    key={singleMatch.idMatch}
                    host={singleMatch.host}
                    guest={singleMatch.guest}
                    time={singleMatch.time}
                    date={singleMatch.date}
                    dateWeek={singleMatch.date}
                    singleMatch={singleMatch}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            <FormResultEdit
              singleMatch={singleMatch}
              setResultEdit={setResultEdit}
            />
          ))
      )}
    </Card.Body>
  );
};

export default FormResult;
