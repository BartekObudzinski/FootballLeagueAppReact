import React from "react";

import { footballTeams } from "../../../data/footballTeams";

const FormTeamOption = () => {
  return footballTeams.map((team) => (
    <option defaultValue={team.name}>{team.name}</option>
  ));
};

export default FormTeamOption;
