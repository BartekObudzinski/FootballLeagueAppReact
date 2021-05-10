import React, { useState } from "react";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import styles from "./FormResult.module.css";
import SingleScheduleMatch from "../../Schedule/SingleScheduleMatch";
import FormResultEdit from "../FormResultEdit/FormResultEdit";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import FormWeekOption from "../FormOption/FormWeekOption";
import NoteToggle from "../../MatchNote/NoteToggle/NoteToggle";
import AddNote from "../../MatchNote/AddNote/AddNote";

import NoteRender from "../NoteRender/NoteRender";
const FormResult = ({
  match,
  week,
  setMatch,
  note,
  setNote,
  team,
  setTeam,
}) => {
  const [resultEdit, setResultEdit] = useState();
  const [chooseWeek, setChooseWeek] = useState(week[0].dateWeek);
  const [showNote, setShowNote] = useState();

  const handleRemoveMatch = (matchId, hos, gues, dat) => {
    setMatch(match.filter((item) => item.idMatch !== matchId));
    const findHost = team.find((element) => element.name === hos);
    const findGuest = team.find((element) => element.name === gues);
    const indeks = week.findIndex((x) => x.dateWeek === dat);
    findHost.matches[indeks] = 0;
    findHost.wins[indeks] = 0;
    findHost.draws[indeks] = 0;
    findHost.loses[indeks] = 0;
    findHost.goalScored[indeks] = 0;
    findHost.goalLoses[indeks] = 0;
    findHost.points[indeks] = 0;

    findGuest.matches[indeks] = 0;
    findGuest.wins[indeks] = 0;
    findGuest.draws[indeks] = 0;
    findGuest.loses[indeks] = 0;
    findGuest.goalScored[indeks] = 0;
    findGuest.goalLoses[indeks] = 0;
    findGuest.points[indeks] = 0;
  };
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
                        handleRemoveMatch(
                          singleMatch.idMatch,

                          singleMatch.host,
                          singleMatch.guest,
                          singleMatch.date
                        );
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
                      <NoteRender
                        singleMatch={singleMatch}
                        note={note}
                        setNote={setNote}
                      />
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
              team={team}
              setTeam={setTeam}
            />
          ))
      )}
    </Card.Body>
  );
};

export default FormResult;
