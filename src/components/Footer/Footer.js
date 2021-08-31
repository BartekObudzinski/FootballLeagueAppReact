import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col>{<AiFillInstagram className={styles.icon} />}</Col>
        <Col>{<AiFillFacebook className={styles.icon} />}</Col>
        <Col>{<AiFillTwitterSquare className={styles.icon} />}</Col>
      </Row>
      <Row>
        <Col>
          <h6>&copy; {new Date().getFullYear()} Copyright Holinice</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
