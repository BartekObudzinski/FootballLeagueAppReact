import React from "react";
import SingleTableRecord from "./SingleTableRecord";
import { Container, Table } from "react-bootstrap";
const TableTeams = ({ team }) => {
  var tablePlace = 1;
  return (
    <Container>
      <Table striped bordered>
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
          {team.map((item) => (
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
      </Table>
    </Container>
  );
};

export default TableTeams;

// <div className="wrapper">
// <table>
//   <thead>
//     <tr>
//       <th>Position</th>
//       <th>Club</th>
//       <th>Played</th>
//       <th>Won</th>
//       <th>Drawn</th>
//       <th>Lost</th>
//       <th>GF</th>
//       <th>GA</th>
//       <th>Points</th>
//     </tr>
//   </thead>

// </table>
// </div>
