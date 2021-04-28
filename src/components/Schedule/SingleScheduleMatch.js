import React from "react";
import styles from "./SingleScheduleMatch.module.css";
import { Container, Row, Col } from "react-bootstrap";
const SingleScheduleMatch = ({
  host,
  guest,
  time,
  date,
  dateWeek,
  singleMatch,
}) => {
  return (
    <>
      {dateWeek && (
        <Container className={styles.wrapper}>
          <Row>
            <Col classname={styles.wrapperDate}>
              <div className={styles.date}>{date}</div>
            </Col>
            <Col
              xs={6}
              classname={styles.wrapper_match}
            >{`${host} vs ${guest}`}</Col>
            {singleMatch.matchHappend ? (
              <Col
                classname={styles.result}
              >{`${singleMatch.hostGoals}:${singleMatch.guestGoals}`}</Col>
            ) : (
              <Col classname={styles.result}>{time}</Col>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingleScheduleMatch;
