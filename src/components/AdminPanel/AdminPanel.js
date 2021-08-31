import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import AddMatch from "./AddMatch";
import FormWeek from "./FormWeek/FormWeek.js";
import FormResult from "./FormResult/FormResult";
import AddTeam from "./AddTeam/AddTeam";
const AdminPanel = ({
  match,
  setMatch,
  week,
  setWeek,
  note,
  setNote,
  team,
  setTeam,
}) => {
  const handleRemoveWeek = (itemId) => {
    setWeek(week.filter((item) => item.idWeek !== itemId));
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
              <AddMatch
                match={match}
                setMatch={setMatch}
                week={week}
                team={team}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <BsPlusSquare /> Change a result!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <FormResult
              match={match}
              week={week}
              note={note}
              setNote={setNote}
              team={team}
              setTeam={setTeam}
              setMatch={setMatch}
            />
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
                team={team}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <BsPlusSquare /> Add Team
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <AddTeam team={team} setTeam={setTeam} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default AdminPanel;
