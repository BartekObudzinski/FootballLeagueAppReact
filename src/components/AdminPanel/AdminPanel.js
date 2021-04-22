import React from "react";
import { Container, Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import AddMatch from "./AddMatch";
import FormWeek from "./FormWeek";
import SingleScheduleMatch from "../Schedule/SingleScheduleMatch";
import styles from "./AdminPanel.module.css";
const AdminPanel = ({ match, setMatch, week, setWeek }) => {
  const handleRemoveWeek = (itemId) => {
    setWeek(week.filter((item) => item.idWeek !== itemId));
  };

  const handleRemoveMatch = (matchId) => {
    setMatch(match.filter((item) => item.idMatch !== matchId));
  };
  return (
    <Container>
      <Accordion defaultActiveKey>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <BsPlusSquare /> Add a match!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <AddMatch match={match} setMatch={setMatch} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <BsPlusSquare /> Change a result!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {match.map((singleMatch) => (
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
                    <Button>Edit Match</Button>
                    <Button
                      onClick={() => {
                        handleRemoveMatch(singleMatch.idMatch);
                      }}
                    >
                      Delete Match
                    </Button>
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <BsPlusSquare /> Schedule Settings
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <FormWeek
                week={week}
                setWeek={setWeek}
                handleRemove={handleRemoveWeek}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default AdminPanel;
