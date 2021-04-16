import React from "react";
import SingleTableRecord from "./SingleTableRecord";
import { footballTeams } from "../../data/footballTeams";
import { Container } from "react-bootstrap";
const Table = () => {
  var tablePlace = 1;
  return (
    <Container>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {footballTeams.map((item) => (
              <SingleTableRecord
                key={item.name}
                position={tablePlace++}
                name={item.name}
                matches={item.matches}
                wins={item.wins}
                draws={item.draws}
                loses={item.loses}
                goalScored={item.goalScored}
                goalLoses={item.goalLoses}
                points={item.points}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Table;

<SingleTableRecord
  name="sraka"
  matches={1}
  wins={1}
  draws={1}
  loses={1}
  goalScored={1}
  goalLoses={1}
  points={1}
/>;
