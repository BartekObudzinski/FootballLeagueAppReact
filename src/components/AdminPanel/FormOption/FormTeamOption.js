import React from "react";
import { footballTeams } from "../../../data/footballTeams";

const FormTeamOption = () => {
  return footballTeams.map((team) => (
    <option value={team.name}>{team.name}</option>
  ));
};

export default FormTeamOption;
