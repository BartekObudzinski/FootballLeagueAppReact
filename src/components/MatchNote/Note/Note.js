import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { GiSoccerKick } from "react-icons/gi";
import { FaExclamation as GiFaul } from "react-icons/fa";
import { BsFile } from "react-icons/bs";
import styles from "./Note.module.css";
const Note = ({ children, action }) => {
  return (
    <Container>
      <Row className={styles.wrapper}>
        <Col className={styles.wrapperCol} md={1}>
          {action === "Goal" && <GiSoccerKick className={styles.icon} />}
          {action === "Red Card" && <BsFile className={styles.iconCardRed} />}
          {action === "Yellow Card" && (
            <BsFile className={styles.iconCardYellow} />
          )}
          {action === "Faul" && <GiFaul className={styles.icon} />}
        </Col>
        <Col className={styles.wrapperCol}>{children}</Col>
      </Row>
    </Container>
  );
};

export default Note;
