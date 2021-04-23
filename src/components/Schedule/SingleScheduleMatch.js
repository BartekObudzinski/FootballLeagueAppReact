import React from "react";
import styles from "./SingleScheduleMatch.module.css";
const SingleScheduleMatch = ({ host, guest, time, date, dateWeek }) => {
  return (
    <>
      {dateWeek && (
        <div className={styles.wrapper}>
          <div classname={styles.wrapperDate}>
            <div className={styles.date}>{date}</div>
          </div>
          <div classname={styles.wrapper_match}>{`${host} vs ${guest}`}</div>

          <div classname={styles.result}>{time}</div>
        </div>
      )}
    </>
  );
};

export default SingleScheduleMatch;
