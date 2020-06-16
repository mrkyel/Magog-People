import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
};

export default App;
