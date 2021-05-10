import React from "react";

const FormTeamOption = ({ team }) => {
  return team.map((singleTeam) => (
    <option key={singleTeam.name}>{singleTeam.name}</option>
  ));
};

export default FormTeamOption;
