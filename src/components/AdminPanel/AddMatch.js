import React, { useState } from "react";
import { v4 as matchId } from "uuid";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormTeamOption from "./FormOption/FormTeamOption";
import FormWeekOption from "./FormOption/FormWeekOption";
import { footballTeams } from "../../data/footballTeams";
const AddMatch = ({ match, setMatch, week, team }) => {
  const [hostFootball, setHostFootball] = useState(footballTeams[0].name);
  const [guestFootball, setGuestFootball] = useState(footballTeams[1].name);
  const [dateMatch, setDateMatch] = useState(week[0].dateWeek);
  const [timeMatch, setTimeMatch] = useState("12:00");

  const AddSingleMatch = (e) => {
    e.preventDefault();
    setMatch([
      ...match,
      {
        idMatch: matchId(),
        host: hostFootball,
        guest: guestFootball,
        date: dateMatch,
        time: timeMatch,
        hostGoals: 0,
        guestGoals: 0,
        matchHappend: false,
      },
    ]);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Football host</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setHostFootball(e.target.value)}
        >
          <FormTeamOption team={team} />
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Football guest</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => setGuestFootball(e.target.value)}
        >
          <FormTeamOption team={team} />
        </Form.Control>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setDateMatch(e.target.value)}
            >
              <FormWeekOption week={week} />
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              onChange={(e) => setTimeMatch(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button onClick={AddSingleMatch} variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddMatch;
