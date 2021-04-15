import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import League from "./components/League/League";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/league" exact>
          <League />
        </Route>
        <Route path="/admin-panel" exact>
          <AdminPanel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
