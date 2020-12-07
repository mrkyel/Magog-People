import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import FreeBoard from 'pages/FreeBoard/FreeBoard';
import NavBar from 'components/common/navbar/Navbar';
import Footer from 'components/common/footer/Footer';
import Container from 'components/common/container';
import WriteBoard from 'pages/WriteBoard/WriteBoard';
import NormalRegister from 'pages/RegisterPage/NormalRegister/NormalRegister';
import './App.css';
import Verification from 'pages/RegisterPage/Verification/Verification';

const App: React.FC = () => {
  return (
    <Router basename={'/MGPP'}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/normal-register" component={NormalRegister} />
          <Route path="/verification" component={Verification} />
          <Route path="/freeboard" component={FreeBoard} />
          <Route path="/writeboard" component={WriteBoard} />
        </Switch>
      </Container>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
