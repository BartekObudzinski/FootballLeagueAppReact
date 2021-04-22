import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import AddMatch from "./AddMatch";
import FormWeek from "./FormWeek";
import SingleScheduleMatch from "../Schedule/SingleScheduleMatch";
const AdminPanel = ({ match, setMatch, week, setWeek }) => {
  const matchData = Array.from(match);
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
              {matchData.map((singleMatch, index) =>
                !match ? (
                  <p>Add your match!</p>
                ) : (
                  <SingleScheduleMatch
                    key={index}
                    host={singleMatch.host}
                    guest={singleMatch.guest}
                    time={singleMatch.time}
                    date={singleMatch.date}
                    dateWeek={singleMatch.date}
                  />
                )
              )}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <BsPlusSquare /> Schedule Settings
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <FormWeek week={week} setWeek={setWeek} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default AdminPanel;
