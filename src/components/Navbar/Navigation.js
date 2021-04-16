import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Navbar.Brand href="/home" className={styles.activeClass}>
            Football League
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/teams">Teams</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
            <Nav.Link href="/admin-panel">Panel Admin</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
