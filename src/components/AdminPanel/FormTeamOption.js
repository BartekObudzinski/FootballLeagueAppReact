import React from "react";
import { footballTeams } from "../../data/footballTeams";

const FormTeamOption = () => {
  return footballTeams.map((team) => <option>{team.name}</option>);
};

export default FormTeamOption;
