import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import FreeBoard from 'pages/FreeBoard/FreeBoard';
import NavBar from 'components/common/navbar/Navbar';
import Footer from 'components/common/footer/Footer';
import Container from 'components/common/container';
import WriteBoard from 'pages/WriteBoard/WriteBoard';
import NormalRegister from 'pages/RegisterPage/NormalRegister/NormalRegister';

const App: React.FC = () => {
  return (
    <Router basename={'/Magog-People'}>
      <NavBar />
      <Container>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/normal-register" component={NormalRegister} />
        <Route exact path="/freeboard" component={FreeBoard} />
        <Route exact path="/writeboard" component={WriteBoard} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
