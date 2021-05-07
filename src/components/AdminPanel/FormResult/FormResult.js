import React, { useState } from "react";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import styles from "./FormResult.module.css";
import SingleScheduleMatch from "../../Schedule/SingleScheduleMatch";
import FormResultEdit from "../FormResultEdit/FormResultEdit";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import FormWeekOption from "../FormOption/FormWeekOption";
import NoteToggle from "../../MatchNote/NoteToggle/NoteToggle";
import Note from "../../MatchNote/Note/Note";
import AddNote from "../../MatchNote/AddNote/AddNote";

const FormResult = ({ match, week, handleRemoveMatch, note, setNote }) => {
  const [resultEdit, setResultEdit] = useState();
  const [chooseWeek, setChooseWeek] = useState(week[0].dateWeek);
  const [showNote, setShowNote] = useState();

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
                  <Col className={styles.wrapperButton}>
                    <Col className={styles.buttonDate}>
                      {`${singleMatch.date}
                       | ${singleMatch.time}`}
                    </Col>
                    <AiFillEdit
                      className={styles.button}
                      onClick={() => setResultEdit(singleMatch.idMatch)}
                    />

                    <AiTwotoneDelete
                      className={styles.button}
                      onClick={() => {
                        handleRemoveMatch(singleMatch.idMatch);
                      }}
                    />
                  </Col>
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
                  {singleMatch.idMatch !== showNote ? (
                    <NoteToggle
                      onClick={() => setShowNote(singleMatch.idMatch)}
                    />
                  ) : (
                    <>
                      <Note />
                      <AddNote
                        noteId={singleMatch.idMatch}
                        note={note}
                        setNote={setNote}
                      />
                      <NoteToggle onClick={() => setShowNote()} />
                    </>
                  )}
                </Col>
              </Row>
            </Container>
          ) : (
            <FormResultEdit
              singleMatch={singleMatch}
              setResultEdit={setResultEdit}
              week={week}
            />
          ))
      )}
    </Card.Body>
  );
};

export default FormResult;
