import React, { useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./AddNote.module.css";
import { v4 as idNote } from "uuid";
const AddNote = ({ noteId, note, setNote }) => {
  const [noteText, setNoteText] = useState();
  const [noteAction, setNoteAction] = useState("Goal");

  const AddNote = (e) => {
    e.preventDefault();
    setNote([
      ...note,
      {
        idMatchNote: noteId,
        idNote: idNote(),
        noteValue: noteText,
        noteType: noteAction,
      },
    ]);
  };
  return (
    <Container>
      <Row className={styles.wrapper}>
        <Col className={styles.wrapperCol} md={1}>
          <AiFillPlusCircle className={styles.button} onClick={AddNote} />
        </Col>
        <Col className={styles.wrapperCol} md={2}>
          <Form.Control
            as="select"
            onChange={(e) => setNoteAction(e.target.value)}
          >
            <option>Goal</option>
            <option>Yellow Card</option>
            <option>Red Card</option>
            <option>Faul</option>
          </Form.Control>
        </Col>
        <Col className={styles.wrapperCol}>
          <FormControl onChange={(e) => setNoteText(e.target.value)} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddNote;
