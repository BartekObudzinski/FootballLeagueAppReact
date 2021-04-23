import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import AddMatch from "./AddMatch";
import FormWeek from "./FormWeek";

import FormResult from "./FormResult";

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
              <AddMatch match={match} setMatch={setMatch} week={week} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <BsPlusSquare /> Change a result!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <FormResult match={match} handleRemoveMatch={handleRemoveMatch} />
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
