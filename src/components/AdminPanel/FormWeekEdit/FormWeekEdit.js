import React, { useState } from "react";
import styles from "./FormWeekEdit.module.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
const FormWeekEdit = ({ weekSettings, setWeekEdit }) => {
  const [editName, setEditName] = useState(weekSettings.nameWeek);
  const [editDate, setEditDate] = useState(weekSettings.dateWeek);

  const handleEdit = () => {
    weekSettings.nameWeek = editName;
    weekSettings.dateWeek = editDate;
    setWeekEdit();
  };

  const handleEditName = (e) => setEditName(e.target.value);
  const handleEditDate = (e) => setEditDate(e.target.value);
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col>
          <Form.Label>Name</Form.Label>
          <FormControl value={editName} onChange={handleEditName} />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={editDate}
              onChange={handleEditDate}
            />
          </Form.Group>
        </Col>
        <Col className={styles.buttonWrapper}>
          <Button onClick={handleEdit} className={styles.button}>
            Confirm
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormWeekEdit;
