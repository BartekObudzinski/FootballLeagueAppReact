import React, { useState } from "react";
import styles from "./FormResultEdit.module.css";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import FormWeekOption from "../FormOption/FormWeekOption";
import FormTeamOption from "../FormOption/FormTeamOption";
const FormResultEdit = ({ singleMatch, setResultEdit, week }) => {
  const [editHostResult, setEditHostResult] = useState(singleMatch.hostGoals);
  const [editGuestResult, setEditGuestResult] = useState(
    singleMatch.guestGoals
  );
  const [editHost, setEditHost] = useState(singleMatch.host);
  const [editGuest, setEditGuest] = useState(singleMatch.guest);
  const [editDate, setEditDate] = useState(singleMatch.date);
  const [editTime, setEditTime] = useState(singleMatch.time);

  const [happend, setHappend] = useState(singleMatch.matchHappend);

  const confirmEdit = () => {
    singleMatch.hostGoals = editHostResult;
    singleMatch.guestGoals = editGuestResult;
    singleMatch.matchHappend = happend;
    singleMatch.host = editHost;
    singleMatch.guest = editGuest;
    singleMatch.date = editDate;
    singleMatch.time = editTime;
    setResultEdit();
  };

  const handleHappend = () => setHappend(!happend);

  return (
    <Col>
      <Container>
        <Row className={styles.wrapper}>
          <Col className={styles.teamWrapper}>
            <Form.Group>
              <Form.Control
                as="select"
                value={editHost}
                onChange={(e) => setEditHost(e.target.value)}
              >
                <FormTeamOption />
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.result}>
            <Col className={styles.resultWrapper}>
              <Col xs={6} md={4}>
                <Form.Control
                  type="number"
                  value={editHostResult}
                  placeholder="host"
                  onChange={(e) => setEditHostResult(e.target.value)}
                />
              </Col>
              vs
              <Col xs={6} md={4}>
                <Form.Control
                  type="number"
                  value={editGuestResult}
                  placeholder="host"
                  onChange={(e) => setEditGuestResult(e.target.value)}
                />
              </Col>
            </Col>
            <Col>
              <Col>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    as="select"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                  >
                    <FormWeekOption week={week} />
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Col>
          </Col>
          <Col className={styles.teamWrapper}>
            <Form.Group>
              <Form.Control
                as="select"
                value={editGuest}
                onChange={(e) => setEditGuest(e.target.value)}
              >
                <FormTeamOption />
              </Form.Control>
            </Form.Group>
          </Col>
          <Col className={styles.buttonsWrapper} md={1.5}>
            <input
              type="checkbox"
              checked={happend}
              onClick={handleHappend}
              className={styles.checkbox}
            />
            <Button onClick={confirmEdit}>Confirm</Button>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default FormResultEdit;
