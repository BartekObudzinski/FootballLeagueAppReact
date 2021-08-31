import React from "react";

import { Container, Col, Row } from "react-bootstrap";

const SingleNote = () => {
  return (
    <Container>
      <Row className={styles.wrapper}>
        <Col className={styles.wrapperCol} md={2}>
          gówno
        </Col>
        <Col className={styles.wrapperCol}>gówno 1</Col>
      </Row>
    </Container>
  );
};

export default SingleNote;
