import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage/LandingPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Router>
  );
};

export default App;
