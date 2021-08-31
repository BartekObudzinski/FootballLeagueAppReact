import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./NoteToggle.module.css";
import { AiOutlineCaretDown } from "react-icons/ai";
const NoteToggle = ({ onClick }) => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col className={styles.buttonWrapper}>
          <AiOutlineCaretDown onClick={onClick} className={styles.button} />
        </Col>
      </Row>
    </Container>
  );
};

export default NoteToggle;
