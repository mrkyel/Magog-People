import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
};

export default App;
