import React, { useState } from "react";
import styles from "./NoteRender.module.css";
import NoteEdit from "../../MatchNote/NoteEdit/NoteEdit";
import Note from "../../MatchNote/Note/Note";
import { Col } from "react-bootstrap";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
const NoteRender = ({ singleMatch, note, setNote }) => {
  const [editNote, setEditNote] = useState();

  const handleRemoveNote = (idNote) => {
    setNote(note.filter((item) => item.idNote !== idNote));
  };
  return (
    <>
      {note.map(
        (singleNote) =>
          singleMatch.idMatch === singleNote.idMatchNote &&
          (singleNote.idNote !== editNote ? (
            <>
              <Col className={styles.wrapperButton}>
                <AiFillEdit
                  className={styles.button}
                  onClick={() => setEditNote(singleNote.idNote)}
                />

                <AiTwotoneDelete
                  className={styles.button}
                  onClick={() => {
                    handleRemoveNote(singleNote.idNote);
                  }}
                />
              </Col>
              <Note action={singleNote.noteType} key={singleNote.idNote}>
                {singleNote.noteValue}
              </Note>
            </>
          ) : (
            <>
              <NoteEdit singleNote={singleNote} setEditNote={setEditNote} />
            </>
          ))
      )}
    </>
  );
};

export default NoteRender;
