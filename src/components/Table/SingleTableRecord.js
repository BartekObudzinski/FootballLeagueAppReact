import React from "react";

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
    <tr>
      <th>{position}</th>
      <th>{name}</th>
      <th>{matches}</th>
      <th>{wins}</th>
      <th>{draws}</th>
      <th>{loses}</th>
      <th>{goalScored}</th>
      <th>{goalLoses}</th>
      <th>{points}</th>
    </tr>
  );
};

export default SingleTableRecord;
