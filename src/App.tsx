import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage/LandingPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import FreeBoard from 'pages/FreeBoard/FreeBoard';
import NavBar from 'components/common/navbar/Navbar';
import Footer from 'components/common/footer/Footer';
import Container from 'components/common/container';

const App: React.FC = () => {
  return (
    <Router basename={'/Magog-People'}>
      <NavBar />
      <Container>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/freeboard" component={FreeBoard} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
