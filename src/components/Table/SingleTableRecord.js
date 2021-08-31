import React from "react";
import styles from "./SingleTableRecord.module.css";
const SingleTableRecord = ({
  position,
  name,
  matches,
  wins,
  draws,
  loses,
  goalScored,
  goalLoses,
  points,
}) => {
  return (
    <tr className={styles.wrapper}>
      <td>{position}</td>
      <td>{name}</td>
      <td>
        {matches.reduce((prevValue, currentValue) => prevValue + currentValue)}
      </td>
      <td>
        {wins.reduce((prevValue, currentValue) => prevValue + currentValue)}
      </td>
      <td>
        {draws.reduce((prevValue, currentValue) => prevValue + currentValue)}
      </td>
      <td>
        {loses.reduce((prevValue, currentValue) => prevValue + currentValue)}
      </td>
      <td>
        {goalScored.reduce(
          (prevValue, currentValue) => prevValue + currentValue
        )}
      </td>
      <td>
        {goalLoses.reduce(
          (prevValue, currentValue) => prevValue + currentValue
        )}
      </td>
      <td>
        {points.reduce((prevValue, currentValue) => prevValue + currentValue)}
      </td>
    </tr>
  );
};

export default SingleTableRecord;
