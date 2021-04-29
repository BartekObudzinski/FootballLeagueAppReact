import React, { useState } from "react";
import styles from "./FormResultEdit.module.css";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
const FormResultEdit = ({ singleMatch, setResultEdit }) => {
  const [editHostResult, setEditHostResult] = useState(singleMatch.hostGoals);
  const [editGuestResult, setEditGuestResult] = useState(
    singleMatch.guestGoals
  );

  const [happend, setHappend] = useState(singleMatch.matchHappend);

  const confirmEdit = () => {
    singleMatch.hostGoals = editHostResult;
    singleMatch.guestGoals = editGuestResult;
    singleMatch.matchHappend = happend;
    setResultEdit();
  };

  const handleHappend = () => setHappend(!happend);

  return (
    <Col>
      <Container>
        <Row className={styles.wrapper}>
          <Col className={styles.teamWrapper}>{singleMatch.host}</Col>
          <Col className={styles.result}>
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
          <Col className={styles.teamWrapper}>{singleMatch.guest}</Col>
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
/*<div className={styles.wrapper}>
      <div classname={styles.wrapperDate}>
        <div className={styles.date}>{singleMatch.date}</div>
      </div>
      <div
        classname={styles.wrapper_match}
      >{`${singleMatch.host} vs ${singleMatch.guest}`}</div>

      <div classname={styles.result}>
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
      </div>
      <input type="checkbox" checked={happend} onClick={handleHappend} />
      <Button onClick={confirmEdit}>Confirm</Button>
    </div>*/
