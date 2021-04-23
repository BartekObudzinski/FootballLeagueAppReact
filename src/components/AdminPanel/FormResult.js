import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "./AdminPanel.module.css";
import SingleScheduleMatch from "../Schedule/SingleScheduleMatch";
import FormResultEdit from "./FormResultEdit";
const FormResult = ({ match, handleRemoveMatch }) => {
  const [resultEdit, setResultEdit] = useState();
  return (
    <Card.Body>
      {match.map((singleMatch) =>
        singleMatch.idMatch !== resultEdit ? (
          <Row className={styles.wrapper}>
            <Col>
              <SingleScheduleMatch
                key={singleMatch.idMatch}
                host={singleMatch.host}
                guest={singleMatch.guest}
                time={singleMatch.time}
                date={singleMatch.date}
                dateWeek={singleMatch.date}
              />
            </Col>
            <Col>
              <Button onClick={() => setResultEdit(singleMatch.idMatch)}>
                Edit Match
              </Button>
              <Button
                onClick={() => {
                  handleRemoveMatch(singleMatch.idMatch);
                }}
              >
                Delete Match
              </Button>
            </Col>
          </Row>
        ) : (
          <FormResultEdit
            singleMatch={singleMatch}
            setResultEdit={setResultEdit}
          />
        )
      )}
    </Card.Body>
  );
};

export default FormResult;
