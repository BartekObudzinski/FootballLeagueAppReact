import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navigation.module.css";
import { useHistory } from "react-router";
const Navigation = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Navbar.Brand href="/home" className={styles.activeClass}>
            Football League
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => history.push("/teams")}>Teams</Nav.Link>
            <Nav.Link onClick={() => history.push("/schedule")}>
              Schedule
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/table")}>Table</Nav.Link>
            <Nav.Link onClick={() => history.push("/admin-panel")}>
              Panel Admin
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
