import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
const AdminPanel = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <BsPlusSquare /> Add a match!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>tu se normlanie bede mecza dodawal</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <BsPlusSquare /> Change a result!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              a tu se mi sie wyrenderuja mecze i se bede je wybieral po dacie i
              zmienial im wynik es{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default AdminPanel;
