import React, { useState } from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import SingleScheduleMatch from "./SingleScheduleMatch";
import styles from "./Schedule.module.css";
import NoteToggle from "../MatchNote/NoteToggle/NoteToggle";
import Note from "../MatchNote/Note/Note";

const Schedule = ({ match, week, note }) => {
  const [key, setKey] = useState("week1");
  const weekData = Array.from(week);
  const [showNote, setShowNote] = useState();
  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {week &&
          weekData.map((singleWeek) => (
            <Tab
              key={singleWeek.nameWeek}
              eventKey={singleWeek.nameWeek}
              title={singleWeek.nameWeek}
            >
              <Container className={styles.wrapper}>
                <Row>
                  <Col>{<h1>{singleWeek.nameWeek}</h1>}</Col>
                </Row>
                <Row>
                  <Col>{<h4>{singleWeek.dateWeek}</h4>}</Col>
                </Row>
                {match.map(
                  (singleMatch) =>
                    singleMatch.date === singleWeek.dateWeek && (
                      <>
                        <SingleScheduleMatch
                          key={singleMatch.idMatch}
                          host={singleMatch.host}
                          guest={singleMatch.guest}
                          time={singleMatch.time}
                          date={singleMatch.date}
                          dateWeek={singleWeek.dateWeek}
                          singleMatch={singleMatch}
                        />
                        {singleMatch.idMatch !== showNote ? (
                          <NoteToggle
                            onClick={() => setShowNote(singleMatch.idMatch)}
                          />
                        ) : (
                          <>
                            {note.map(
                              (singleNote) =>
                                singleMatch.idMatch ===
                                  singleNote.idMatchNote && (
                                  <Note
                                    action={singleNote.noteType}
                                    key={singleNote.idMatchNote}
                                  >
                                    {singleNote.noteValue}
                                  </Note>
                                )
                            )}
                            <NoteToggle onClick={() => setShowNote()} />
                          </>
                        )}
                      </>
                    )
                )}
              </Container>
            </Tab>
          ))}
      </Tabs>
    </Container>
  );
};

export default Schedule;
