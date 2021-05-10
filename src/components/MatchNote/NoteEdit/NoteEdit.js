import React, { useState } from "react";
import styles from "./NoteEdit.module.css";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

import { GiConfirmed } from "react-icons/gi";
const NoteEdit = ({ singleNote, setEditNote }) => {
  const [noteType, setNoteType] = useState(singleNote.noteType);
  const [noteText, setNoteText] = useState(singleNote.noteValue);

  const handleEdit = () => {
    singleNote.noteType = noteType;
    singleNote.noteValue = noteText;
    setEditNote();
  };
  return (
    <>
      <Col className={styles.wrapperButton}>
        <GiConfirmed className={styles.button} onClick={handleEdit} />
      </Col>
      <Container>
        <Row className={styles.wrapper}>
          <Col className={styles.wrapperCol} md={2}>
            <Form.Control
              as="select"
              value={noteType}
              onChange={(e) => setNoteType(e.target.value)}
            >
              <option>Goal</option>
              <option>Yellow Card</option>
              <option>Red Card</option>
              <option>Faul</option>
            </Form.Control>
          </Col>
          <Col className={styles.wrapperCol}>
            <FormControl
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NoteEdit;
