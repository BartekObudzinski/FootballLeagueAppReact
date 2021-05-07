import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import Teams from "./components/Teams/Teams";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Schedule from "./components/Schedule/Schedule";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [match, setMatch] = useState([]);
  const [week, setWeek] = useState([
    { idWeek: "srubasabadaba", nameWeek: "Week...", dateWeek: "2021-01-01" },
  ]);
  const [note, setNote] = useState([]);

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
        <Route path="/table" exact component={Table} />

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
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
