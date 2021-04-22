import React from "react";
import styles from "./SingleScheduleMatch.module.css";
const SingleScheduleMatch = ({ host, guest, time, date, dateWeek }) => {
  return (
    <>
      {dateWeek && (
        <div className={styles.wrapper}>
          <div classname={styles.wrapper_host}>{host}</div>
          <div classname={styles.wrapperDate}>
            <div className={styles.date}>{date}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <div classname={styles.guest}>{guest}</div>
        </div>
      )}
    </>
  );
};

export default SingleScheduleMatch;
