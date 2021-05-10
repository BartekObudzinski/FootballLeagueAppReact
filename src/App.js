import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import Teams from "./components/Teams/Teams";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Schedule from "./components/Schedule/Schedule";
import TableTeams from "./components/Table/TableTeams";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [match, setMatch] = useState([]);
  const [week, setWeek] = useState([
    { idWeek: "srubasabadaba", nameWeek: "Week...", dateWeek: "2021-01-01" },
  ]);
  const [note, setNote] = useState([]);
  const [team, setTeam] = useState([
    {
      name: "Gazyl Mistrze",
      shortName: "GZM",
      matches: [0],
      wins: [0],
      draws: [0],
      loses: [0],
      goalScored: [0],
      goalLoses: [0],
      points: [0],
    },
    {
      name: "Joga Bonito",
      shortName: "JBO",
      matches: [0],
      wins: [0],
      draws: [0],
      loses: [0],
      goalScored: [0],
      goalLoses: [0],
      points: [0],
    },
    {
      name: "Moja Stara",
      shortName: "MOS",
      matches: [0],
      wins: [0],
      draws: [0],
      loses: [0],
      goalScored: [0],
      goalLoses: [0],
      points: [0],
    },
    {
      name: "Twój Stary Hilary",
      shortName: "TSH",
      matches: [0],
      wins: [0],
      draws: [0],
      loses: [0],
      goalScored: [0],
      goalLoses: [0],
      points: [0],
    },
  ]);
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route
          path="/schedule"
          exact
          component={() => <Schedule match={match} week={week} note={note} />}
        />
        <Route
          path="/table"
          exact
          component={() => <TableTeams team={team} />}
        />

        <Route
          path="/admin-panel"
          exact
          component={() => (
            <AdminPanel
              match={match}
              setMatch={setMatch}
              week={week}
              setWeek={setWeek}
              note={note}
              setNote={setNote}
              team={team}
              setTeam={setTeam}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
